function downloadText(filename: string, text: string) {
  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

document.querySelectorAll<HTMLButtonElement>("[data-policy-copy]").forEach((button) => {
  button.addEventListener("click", async () => {
    const card = button.closest("[data-policy-id]");
    const text = card?.querySelector("[data-policy-text]")?.textContent ?? "";
    const label = button.querySelector("[data-label]");
    try {
      await navigator.clipboard.writeText(text);
      if (label) {
        const original = label.textContent;
        label.textContent = "Copied";
        window.setTimeout(() => {
          label.textContent = original;
        }, 2500);
      }
    } catch {
      const status = card?.querySelector("[data-copy-status]");
      if (status) status.textContent = "Couldn't copy. Select the text and copy it.";
    }
  });
});

document.querySelectorAll<HTMLButtonElement>("[data-policy-download]").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest("[data-policy-id]");
    if (!card) return;
    const id = card.getAttribute("data-policy-id") || "policy";
    downloadText(`${id}-template.txt`, card.querySelector("[data-policy-text]")?.textContent ?? "");
  });
});
