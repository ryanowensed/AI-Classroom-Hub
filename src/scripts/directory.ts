function normalize(value: string) {
  return value.trim().toLowerCase();
}

document.querySelectorAll("[data-directory]").forEach((root) => {
  if (!(root instanceof HTMLElement)) return;
  const search = root.querySelector("[data-search]");
  const items = [...root.querySelectorAll<HTMLElement>("[data-item]")];
  const count = root.querySelector("[data-count]");
  const empty = root.querySelector("[data-empty]");
  const state: Record<string, string> = {};

  root.querySelectorAll<HTMLButtonElement>("[data-filter-group]").forEach((button) => {
    const group = button.dataset.filterGroup;
    if (!group) return;
    if (button.getAttribute("aria-pressed") === "true") state[group] = button.dataset.value || "";
  });

  const apply = () => {
    const query = search instanceof HTMLInputElement ? normalize(search.value) : "";
    let shown = 0;
    for (const item of items) {
      const groups = item.dataset.filter || "";
      const haystack = item.dataset.text || "";
      let match = !query || haystack.toLowerCase().includes(query);
      if (match) {
        for (const [group, value] of Object.entries(state)) {
          if (!value || value.startsWith("All")) continue;
          const itemValues = (item.dataset[group] || "").split("|").filter(Boolean);
          const alsoAll = item.dataset[`${group}All`] === "true";
          if (!alsoAll && !itemValues.includes(value)) {
            match = false;
            break;
          }
        }
      }
      item.hidden = !match;
      if (match) shown += 1;
      void groups;
    }
    if (count) count.textContent = String(shown);
    if (empty instanceof HTMLElement) empty.hidden = shown !== 0;
  };

  root.querySelectorAll<HTMLButtonElement>("[data-filter-group]").forEach((button) => {
    button.addEventListener("click", () => {
      const group = button.dataset.filterGroup;
      if (!group) return;
      state[group] = button.dataset.value || "";
      root.querySelectorAll<HTMLButtonElement>(`[data-filter-group="${group}"]`).forEach((peer) => {
        peer.setAttribute("aria-pressed", peer === button ? "true" : "false");
      });
      apply();
    });
  });

  search?.addEventListener("input", apply);

  root.querySelector("[data-clear]")?.addEventListener("click", () => {
    if (search instanceof HTMLInputElement) search.value = "";
    root.querySelectorAll<HTMLButtonElement>("[data-filter-group]").forEach((button) => {
      const value = button.dataset.value || "";
      const isAll = value.startsWith("All");
      button.setAttribute("aria-pressed", isAll ? "true" : "false");
      if (isAll && button.dataset.filterGroup) state[button.dataset.filterGroup] = value;
    });
    apply();
  });
});

document.querySelectorAll<HTMLButtonElement>("[data-copy-target]").forEach((button) => {
  button.addEventListener("click", async () => {
    const card = button.closest("[data-item]");
    const source = card?.querySelector("[data-copy-source]");
    const text = source?.textContent ?? "";
    const label = button.querySelector("[data-copy-label-text]");
    const original = label?.textContent || button.dataset.copyLabel || "Copy";
    const done = button.dataset.copiedLabel || "Copied!";
    try {
      await navigator.clipboard.writeText(text);
      if (label) label.textContent = done;
      window.setTimeout(() => {
        if (label) label.textContent = original;
      }, 2500);
    } catch {
      const status = card?.querySelector("[data-copy-status]");
      if (status) status.textContent = "Couldn't copy. Select the text and copy it.";
    }
  });
});
