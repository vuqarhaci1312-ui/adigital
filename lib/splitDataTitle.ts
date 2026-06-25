/** Word-level split for [data-title] scroll reveals (thefinch SplitText words + clip mask). */
export function splitDataTitle(el: HTMLElement): {
  words: HTMLElement[];
  revert: () => void;
} {
  const originalHtml = el.innerHTML;
  const words: HTMLElement[] = [];
  const lineHeight = getComputedStyle(el).lineHeight;

  el.innerHTML = "";
  const segments = originalHtml.split(/<br\s*\/?>/i);

  segments.forEach((segment, index) => {
    if (index > 0) {
      el.appendChild(document.createElement("br"));
    }

    const line = document.createElement("span");
    line.className = "split-line";
    line.style.display = "block";
    line.style.overflow = "hidden";

    const temp = document.createElement("div");
    temp.innerHTML = segment.trim();
    temp.childNodes.forEach((node) =>
      appendNodeWithWords(node, line, words, lineHeight)
    );
    el.appendChild(line);
  });

  return {
    words,
    revert: () => {
      el.innerHTML = originalHtml;
    },
  };
}

function appendNodeWithWords(
  node: Node,
  parent: HTMLElement,
  words: HTMLElement[],
  lineHeight: string
): void {
  if (node.nodeType === Node.TEXT_NODE) {
    const text = node.textContent ?? "";
    text.split(/(\s+)/).forEach((part) => {
      if (!part) return;
      if (/^\s+$/.test(part)) {
        parent.appendChild(document.createTextNode(part));
        return;
      }
      const mask = document.createElement("span");
      mask.className = "split-mask";
      mask.style.display = "inline-block";
      mask.style.overflow = "hidden";
      mask.style.verticalAlign = "top";
      mask.style.lineHeight = lineHeight;

      const word = document.createElement("span");
      word.className = "split-word";
      word.style.display = "inline-block";
      word.textContent = part;

      mask.appendChild(word);
      parent.appendChild(mask);
      words.push(word);
    });
    return;
  }

  if (node.nodeType === Node.ELEMENT_NODE) {
    const source = node as HTMLElement;
    const clone = document.createElement(source.tagName.toLowerCase());
    Array.from(source.attributes).forEach((attr) => {
      clone.setAttribute(attr.name, attr.value);
    });
    source.childNodes.forEach((child) =>
      appendNodeWithWords(child, clone, words, lineHeight)
    );
    parent.appendChild(clone);
  }
}
