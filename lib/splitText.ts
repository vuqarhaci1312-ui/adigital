export function splitTextPreserveStructure(
  elements: Element[],
  mode: "words" | "lines" | "chars"
): Element[] {
  const results: Element[] = [];

  elements.forEach((el) => {
    if (!(el instanceof HTMLElement)) return;

    if (mode === "words") {
      splitWords(el, results);
      return;
    }

    if (mode === "chars") {
      splitChars(el, results);
      return;
    }

    const text = el.textContent ?? "";
    el.textContent = "";
    text.split("\n").forEach((line, index, arr) => {
      const span = document.createElement("span");
      span.style.display = "block";
      span.textContent = line;
      el.appendChild(span);
      results.push(span);
      if (index < arr.length - 1) el.appendChild(document.createElement("br"));
    });
  });

  return results;
}

function collectTextNodes(root: HTMLElement): Text[] {
  const textNodes: Text[] = [];
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node: Node | null;

  while ((node = walker.nextNode())) {
    textNodes.push(node as Text);
  }

  return textNodes;
}

function splitWords(el: HTMLElement, results: Element[]) {
  collectTextNodes(el).forEach((textNode) => {
    const text = textNode.textContent ?? "";
    const parent = textNode.parentNode;
    if (!parent || !text) return;

    const fragment = document.createDocumentFragment();

    text.split(/(\s+)/).forEach((part) => {
      if (!part) return;

      if (/^\s+$/.test(part)) {
        fragment.appendChild(document.createTextNode(part));
        return;
      }

      const span = document.createElement("span");
      span.style.display = "inline-block";
      span.textContent = part;
      fragment.appendChild(span);
      results.push(span);
    });

    parent.insertBefore(fragment, textNode);
    parent.removeChild(textNode);
  });
}

function splitChars(el: HTMLElement, results: Element[]) {
  collectTextNodes(el).forEach((textNode) => {
    const text = textNode.textContent ?? "";
    const parent = textNode.parentNode;
    if (!parent || !text) return;

    const fragment = document.createDocumentFragment();

    [...text].forEach((char) => {
      const span = document.createElement("span");
      span.style.display = "inline-block";
      span.textContent = char === " " ? "\u00a0" : char;
      fragment.appendChild(span);
      results.push(span);
    });

    parent.insertBefore(fragment, textNode);
    parent.removeChild(textNode);
  });
}
