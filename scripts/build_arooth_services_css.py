import re
from pathlib import Path

shared = Path(r"c:\Users\hmc\Downloads\arooth.webflow.io\arooth.shared.css").read_text(encoding="utf-8")
about = Path(r"c:\Users\hmc\Downloads\www.new.studio\app\about-us.css").read_text(encoding="utf-8")

# Extract rule blocks by simple line parser
def extract_rules(text, class_names):
    rules = []
    lines = text.splitlines()
    i = 0
    while i < len(lines):
        line = lines[i].strip()
        if line.startswith("@media"):
            block_lines = [lines[i]]
            i += 1
            brace = lines[i-1].count("{") - lines[i-1].count("}")
            while i < len(lines):
                block_lines.append(lines[i])
                brace += lines[i].count("{") - lines[i].count("}")
                i += 1
                if brace <= 0:
                    break
            block = "\n".join(block_lines)
            if any(c in block for c in class_names):
                rules.append(block)
            continue
        matched = any(line.startswith(f".{c}") or line.startswith(f".section.{c}") for c in class_names)
        if matched or any(f".{c}" in line.split("{")[0] for c in class_names if "{" in line):
            block = [lines[i]]
            i += 1
            if "{" in line:
                brace = line.count("{") - line.count("}")
                while i < len(lines) and brace > 0:
                    block.append(lines[i])
                    brace += lines[i].count("{") - lines[i].count("}")
                    i += 1
                rules.append("\n".join(block))
                continue
        i += 1
    return rules

names = [
    "section.service", "section.faq", "services-title-wrap", "services-title",
    "services-grid-wrap", "single-service-wrap", "service-contents",
    "single-service-icon-wrap", "single-service-icon", "single-service-details",
    "single-service-name", "single-service-name-wrap", "service-details-wrapper",
    "service-more-buttons-wrap", "service-more-button", "single-service-hover-bg",
    "more-button", "more-button-flex", "more-button-text", "more-button-arrow-wrap",
    "more-button-arrow", "more-button-arrow-hover",
    "section-title-wrapper", "section-title", "section-title-mark", "section-subtile-wrap",
    "subtitle-wrap", "subtitle-flex-wrap", "subtitle-icon", "subtitle-text",
    "faq-flex-wrap", "single-faq-wrapper", "faq-content-wrap", "faq-top-wrap",
    "faq-question-serial", "faq-icon-wrap", "faq-plus", "faq-minus", "faq-bottom-wrap",
    "faq-question", "faq-ans-wrap", "faq-ans-title", "faq-ans-divider", "faq-details",
    "faq-question-wrap", "faq-bg-shape", "faq-button-wrap", "faq-ans-content",
    "primary-button", "primary-button-flex", "primary-button-text-wrap",
    "primary-button-text", "primary-button-text-hover", "primary-button-arrow-wrapper",
    "primary-button-arrow-wrap", "primary-button-arrow", "primary-button-arrow-hover",
    "primary-button-hover-bg",
]

base_rules = extract_rules(shared, names)
mq_rules = extract_rules(about, names)

def scope_css(css, prefix=".arooth-services"):
    # scope each selector line before {
    out = []
    for block in css.split("\n\n"):
        if block.strip().startswith("@media"):
            inner_lines = block.split("\n")
            header = inner_lines[0]
            body = "\n".join(inner_lines[1:])
            out.append(header + "\n" + scope_css(body, prefix))
            continue
        lines = block.split("\n")
        scoped = []
        for line in lines:
            if "{" in line and not line.strip().startswith("@"):
                sel, rest = line.split("{", 1)
                sels = [s.strip() for s in sel.split(",")]
                new_sels = []
                for s in sels:
                    if s.startswith(prefix):
                        new_sels.append(s)
                    elif s.startswith(".section"):
                        new_sels.append(f"{prefix} {s}")
                    elif s.startswith("."):
                        new_sels.append(f"{prefix} {s}")
                    else:
                        new_sels.append(s)
                scoped.append(", ".join(new_sels) + "{" + rest)
            else:
                scoped.append(line)
        out.append("\n".join(scoped))
    return "\n\n".join(out)

vars_block = """
.arooth-services {
  --_fonts---fonts--paragraph-font: Poppins, sans-serif;
  --_fonts---fonts--title-font: "Instrument Sans", sans-serif;
  --_font-sizes---paragraphs--small: 0.875rem;
  --_font-sizes---paragraphs--regular: 1rem;
  --_font-sizes---headings--h1: 4rem;
  --_font-sizes---headings--h2: 3.25rem;
  --_font-sizes---headings--h3: 2.5rem;
  --_font-sizes---headings--h4: 2rem;
  --_font-sizes---headings--h5: 1.625rem;
  --_font-sizes---headings--h6: 1.375rem;
  --_font-weight-line-height---line-heights--lh-100: 100%;
  --_font-weight-line-height---line-heights--lh-110: 110%;
  --_font-weight-line-height---line-heights--lh-120: 120%;
  --_font-weight-line-height---line-heights--lh-130: 130%;
  --_font-weight-line-height---line-heights--lh-140: 140%;
  --_font-weight-line-height---line-heights--lh-150: 150%;
  --_font-weight-line-height---font-weights--regular: 400;
  --_spacing-radius---radius--button-radius: 6.25rem;
  --_spacing-radius---radius--xl: 2rem;
  --_spacing-radius---radius--xxl: 2.5rem;
  --_spacing-radius---radius--3xl: 3.75rem;
  --_spacing-radius---spacings--section-gap: 7.5rem;
  --_spacing-radius---spacings--none: 0rem;
  --white: white;
  --azureish-white: #d1e0ff;
  --eerie-black: #111827;
  --metal-saurus: #6b7280;
  --independence: #4b5563;
  --alice-blue: #eff4ff;
  --primary: #0040c1;
  --raisin-black: #212121;
  --transparent: transparent;
  --primary-linear--powder-blue: #00359e;
  --primary-linear--crayola: #0042c5;
  --primary-linear--light-blue: #2970ff;
  --white-80: #fffc;
  position: relative;
  z-index: 1;
  font-family: var(--_fonts---fonts--paragraph-font);
}

.arooth-services .container {
  max-width: 83rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}
"""

open_states = """
.arooth-services .single-service-wrap:hover .single-service-hover-bg {
  height: 100%;
}

.arooth-services .single-service-wrap:hover .service-more-button.absolute {
  transform: translate(0, 0);
  z-index: 2;
}

.arooth-services .single-service-wrap:hover .service-more-button:not(.absolute) {
  opacity: 0;
  pointer-events: none;
}

.arooth-services .single-service-wrap:hover .more-button-arrow {
  transform: translate(150%, -150%);
}

.arooth-services .single-service-wrap:hover .more-button-arrow-hover {
  transform: translate(0, 0);
}

.arooth-services .faq-minus,
.arooth-services .single-faq-wrapper.is-open .faq-plus {
  opacity: 0;
}

.arooth-services .faq-plus,
.arooth-services .single-faq-wrapper.is-open .faq-minus {
  opacity: 1;
}

.arooth-services .single-faq-wrapper .faq-bg-shape {
  opacity: 0;
  transition: opacity 0.4s ease;
}

.arooth-services .single-faq-wrapper.is-open .faq-bg-shape {
  opacity: 1;
}

.arooth-services .single-faq-wrapper .faq-ans-wrap {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.5s ease, opacity 0.4s ease;
}

.arooth-services .single-faq-wrapper.is-open .faq-ans-wrap {
  max-height: 40rem;
  opacity: 1;
}

.arooth-services .single-faq-wrapper.is-open {
  flex: 1 1 42%;
  width: auto;
  color: var(--white);
}

.arooth-services .single-faq-wrapper.is-open .faq-question-serial,
.arooth-services .single-faq-wrapper.is-open .faq-question {
  color: var(--white);
}

.arooth-services .single-faq-wrapper.is-open .faq-question {
  writing-mode: horizontal-tb;
  transform: none;
}
"""

combined = vars_block + "\n" + scope_css("\n\n".join(base_rules)) + "\n" + scope_css("\n\n".join(mq_rules)) + "\n" + open_states

Path(r"c:\Users\hmc\Downloads\www.new.studio\app\arooth-services.css").write_text(combined, encoding="utf-8")
print("written", len(combined), "chars", "base", len(base_rules), "mq", len(mq_rules))
