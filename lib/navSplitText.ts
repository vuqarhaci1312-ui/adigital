export type NavSplitResult = {
  words: HTMLElement[];
  revert: () => void;
};

export function splitNavHideElements(elements: HTMLElement[]): NavSplitResult[] {
  return elements.map((el) => splitNavElement(el));
}

function splitNavElement(el: HTMLElement): NavSplitResult {
  const wrapper = el.querySelector<HTMLElement>(".wrapper") ?? el;
  const originalHtml = wrapper.innerHTML;
  const text = wrapper.textContent ?? "";
  const parts = text.split(/(\s+)/);
  const words: HTMLElement[] = [];
  const lineHeight = getComputedStyle(el).lineHeight;

  wrapper.innerHTML = "";

  parts.forEach((part) => {
    if (!part) return;

    if (/^\s+$/.test(part)) {
      wrapper.appendChild(document.createTextNode(part));
      return;
    }

    const mask = document.createElement("span");
    mask.style.display = "inline-block";
    mask.style.overflow = "clip";
    mask.style.verticalAlign = "top";
    mask.style.lineHeight = lineHeight;

    const word = document.createElement("span");
    word.style.display = "inline-block";
    word.textContent = part;

    mask.appendChild(word);
    wrapper.appendChild(mask);
    words.push(word);
  });

  return {
    words,
    revert: () => {
      wrapper.innerHTML = originalHtml;
    },
  };
}
