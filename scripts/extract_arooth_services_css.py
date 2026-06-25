import re
from pathlib import Path

css = Path(r"c:\Users\hmc\Downloads\arooth.webflow.io\arooth.shared.css").read_text(encoding="utf-8")

selectors = [
    "section.service", "section.faq", "services-title-wrap", "services-title",
    "services-grid-wrap", "single-service-wrap", "service-contents",
    "single-service-icon-wrap", "single-service-icon", "single-service-details",
    "single-service-name", "single-service-name-wrap", "service-details-wrapper",
    "service-more-buttons-wrap", "service-more-button", "single-service-hover-bg",
    "more-button", "more-button-flex", "more-button-text", "more-button-arrow",
    "faq-flex-wrap", "single-faq-wrapper", "faq-content-wrap", "faq-top-wrap",
    "faq-question-serial", "faq-icon-wrap", "faq-minus", "faq-bottom-wrap",
    "faq-question", "faq-ans-wrap", "faq-ans-title", "faq-ans-divider",
    "faq-details", "faq-question-wrap", "faq-bg-shape", "faq-button-wrap",
    "section-title-wrapper", "section-title", "section-subtile-wrap",
]

lines = css.splitlines()
out = []
i = 0
while i < len(lines):
    line = lines[i]
    if line.strip().startswith("@media"):
        block = [line]
        i += 1
        depth = 0
        while i < len(lines):
            block.append(lines[i])
            depth += lines[i].count("{") - lines[i].count("}")
            i += 1
            if depth <= 0 and lines[i-1].strip() == "}":
                break
        block_text = "\n".join(block)
        if any(s.replace(".", "") in block_text or f".{s}" in block_text or s in block_text for s in selectors):
            out.append(block_text)
        continue
    matched = False
    for s in selectors:
        if re.match(rf"\.{re.escape(s.replace('.', ''))}(\s|,|:|\{{|$)" if not s.startswith("section") else rf"\.{re.escape(s)}(\s|,|:|\{{|$)", line.strip()) or line.strip().startswith(f".{s}") or line.strip().startswith(f"{s} "):
            matched = True
            break
        if line.strip().startswith(f".{s.replace('section.', '')}") and "section" in s:
            matched = True
            break
    if matched or any(line.strip().startswith(f".{s}") for s in selectors):
        block = [line]
        i += 1
        if "{" in line:
            depth = line.count("{") - line.count("}")
            while i < len(lines) and depth > 0:
                block.append(lines[i])
                depth += lines[i].count("{") - lines[i].count("}")
                i += 1
            out.append("\n".join(block))
            continue
    i += 1

Path(r"c:\Users\hmc\Downloads\www.new.studio\scripts\arooth-services-extract.css").write_text("\n\n".join(out), encoding="utf-8")
print("rules", len(out), "chars", sum(len(x) for x in out))
