const STORAGE_KEY = "policy_templates_unlocked";

function textOf(card: Element, selector: string) {
  return card.querySelector(selector)?.textContent ?? "";
}

function downloadText(filename: string, text: string) {
  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function setUnlocked(root: HTMLElement) {
  document.body.classList.add("policies-unlocked");
  root.querySelectorAll(".policy-card").forEach((card) => card.classList.add("is-unlocked"));
  root.querySelectorAll<HTMLButtonElement>("[data-policy-copy]").forEach((button) => {
    button.classList.remove("bg-gray-100", "text-gray-700");
    button.classList.add("bg-[#E8533A]", "text-white");
    const label = button.querySelector("[data-label]");
    if (label) label.textContent = "Copy Template";
  });
}

const root = document.querySelector("[data-policy-library]");
const dialog = document.querySelector("[data-policy-dialog]");

if (root instanceof HTMLElement && dialog instanceof HTMLDialogElement) {
  const form = dialog.querySelector("[data-policy-form]");
  const formPanel = dialog.querySelector("[data-gate-form]");
  const confirmed = dialog.querySelector("[data-gate-confirmed]");
  const nameSlot = dialog.querySelector("[data-confirmed-name]");
  const status = dialog.querySelector("[data-gate-status]");
  let triggeredId = "";

  if (sessionStorage.getItem(STORAGE_KEY) === "true") setUnlocked(root);

  const openGate = (id: string) => {
    triggeredId = id;
    const card = id ? root.querySelector(`[data-policy-id="${CSS.escape(id)}"]`) : null;
    const title = card?.querySelector("h2")?.textContent?.trim() ?? "";
    dialog.querySelectorAll("[data-template-title]").forEach((node) => {
      node.textContent = title;
    });
    dialog.querySelectorAll<HTMLElement>("[data-gate-specific]").forEach((node) => {
      node.hidden = !title;
    });
    dialog.querySelectorAll<HTMLElement>("[data-gate-generic]").forEach((node) => {
      node.hidden = Boolean(title);
    });
    if (formPanel instanceof HTMLElement) formPanel.hidden = false;
    if (confirmed instanceof HTMLElement) confirmed.hidden = true;
    if (status) status.textContent = "";
    if (form instanceof HTMLFormElement) form.reset();
    dialog.showModal();
  };

  document.querySelectorAll<HTMLButtonElement>("[data-open-gate]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest("[data-policy-id]");
      openGate(card?.getAttribute("data-policy-id") || button.dataset.openGate || "");
    });
  });

  dialog.querySelectorAll("[data-close-gate]").forEach((button) => {
    button.addEventListener("click", () => dialog.close());
  });

  root.querySelectorAll<HTMLButtonElement>("[data-expand]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".policy-card");
      const preview = card?.querySelector("[data-policy-preview]");
      if (!(preview instanceof HTMLElement)) return;
      const open = preview.hidden;
      preview.hidden = !open;
      button.textContent = open ? "Hide template preview" : "Preview template";
    });
  });

  const copyFromCard = async (card: Element, button: HTMLButtonElement) => {
    const text = textOf(card, "[data-policy-text]");
    const label = button.querySelector("[data-label]");
    try {
      await navigator.clipboard.writeText(text);
      if (label) {
        const original = label.textContent;
        label.textContent = "Copied!";
        window.setTimeout(() => {
          label.textContent = original;
        }, 2500);
      }
    } catch {
      if (status) status.textContent = "Couldn't copy. Select the text and copy it.";
    }
  };

  root.querySelectorAll<HTMLButtonElement>("[data-policy-copy]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest("[data-policy-id]");
      if (!card) return;
      if (!card.classList.contains("is-unlocked")) {
        openGate(card.getAttribute("data-policy-id") || "");
        return;
      }
      void copyFromCard(card, button);
    });
  });

  root.querySelectorAll<HTMLButtonElement>("[data-policy-download]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest("[data-policy-id]");
      if (!card) return;
      if (!card.classList.contains("is-unlocked")) {
        openGate(card.getAttribute("data-policy-id") || "");
        return;
      }
      const id = card.getAttribute("data-policy-id") || "policy";
      downloadText(`${id}-template.txt`, textOf(card, "[data-policy-text]"));
    });
  });

  dialog.querySelector("[data-confirm-copy]")?.addEventListener("click", async () => {
    const card = root.querySelector(`[data-policy-id="${CSS.escape(triggeredId)}"]`);
    if (!card) return;
    const label = dialog.querySelector("[data-confirm-copy] [data-label]");
    try {
      await navigator.clipboard.writeText(textOf(card, "[data-policy-text]"));
      if (label) label.textContent = "Copied!";
    } catch {
      if (status) status.textContent = "Couldn't copy. Select the text and copy it.";
    }
  });

  dialog.querySelector("[data-confirm-download]")?.addEventListener("click", () => {
    const card = root.querySelector(`[data-policy-id="${CSS.escape(triggeredId)}"]`);
    if (!card) return;
    downloadText(`${triggeredId}-template.txt`, textOf(card, "[data-policy-text]"));
    const label = dialog.querySelector("[data-confirm-download] [data-label]");
    if (label) label.textContent = "Downloaded ✓";
  });

  if (form instanceof HTMLFormElement) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const firstName = String(data.get("firstName") ?? "").trim();
      const email = String(data.get("email") ?? "").trim();
      const firstError = dialog.querySelector("[data-error-name]");
      const emailError = dialog.querySelector("[data-error-email]");
      let valid = true;
      if (firstError) firstError.textContent = firstName ? "" : "Please enter your first name.";
      if (!firstName) valid = false;
      if (!email) {
        if (emailError) emailError.textContent = "Please enter your email address.";
        valid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        if (emailError) emailError.textContent = "Please enter a valid email address.";
        valid = false;
      } else if (emailError) {
        emailError.textContent = "";
      }
      if (!valid) return;

      const button = form.querySelector("button[type='submit']") as HTMLButtonElement | null;
      if (button) button.disabled = true;
      try {
        const response = await fetch("/api/subscribe", {
          method: "POST",
          headers: { "content-type": "application/json", accept: "application/json" },
          body: JSON.stringify({
            email,
            firstName,
            source: "policy-templates",
            company: String(data.get("company") ?? ""),
          }),
        });
        const body = (await response.json().catch(() => null)) as { ok?: boolean; message?: string } | null;
        if (response.ok && body?.ok) {
          sessionStorage.setItem(STORAGE_KEY, "true");
          setUnlocked(root);
          if (nameSlot) nameSlot.textContent = firstName;
          if (formPanel instanceof HTMLElement) formPanel.hidden = true;
          if (confirmed instanceof HTMLElement) confirmed.hidden = false;
          return;
        }
        if (status) status.textContent = body?.message || "Something went wrong. Try again in a minute.";
      } catch {
        if (status) status.textContent = "Something went wrong. Try again in a minute.";
      }
      if (button) button.disabled = false;
    });
  }
}
