import re
from pathlib import Path

shared = Path(r"c:\Users\hmc\Downloads\arooth.webflow.io\arooth.shared.css").read_text(encoding="utf-8")
about = Path(r"c:\Users\hmc\Downloads\www.new.studio\app\about-us.css").read_text(encoding="utf-8")

def extract_rules(text, class_names):
    rules = []
    lines = text.splitlines()
    i = 0
    while i < len(lines):
        line = lines[i].strip()
        if line.startswith("@media"):
            block_lines = [lines[i]]
            i += 1
            brace = lines[i - 1].count("{") - lines[i - 1].count("}")
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
        matched = any(
            line.startswith(f".{c}") or line.startswith(f".section.{c}") for c in class_names
        )
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
    "section.services", "section-title-wrapper", "section-subtile-wrap", "section-title",
    "section-title-mark", "subtitle-wrap", "subtitle-flex-wrap", "subtitle-icon", "subtitle-text",
    "services-wrapper", "service-tabs-wrapper", "service-tabs-grid-left", "service-tabs-grid-right",
    "single-service-card-wrap", "service-card-content", "service-serial-wrap", "serial-numbers-wrap",
    "serial-single-number-trigger", "service-serial-collection", "service-serial",
    "service-icons-wrapper", "service-icons-trigger", "single-service-icon-wrapper",
    "service-icon-wrap", "service-icon", "service-card-content-bottom", "service-buttons-wrapper",
    "service-buttons-trigger", "single-service-button-wrap", "service-button-wrap",
    "service-tab-links-wrap", "service-tab-link", "service-tab-link-content",
    "service-tab-link-content-flex", "service-tab-link-flex-left", "service-name-wrap",
    "service-name-dot-wrap", "service-name-dot", "service-name", "service-tags-wrapper",
    "service-tags-flex", "single-service-tags", "service-tags-text", "service-tab-link-image-wrap",
    "service-tab-link-image", "service-tab-link-divider",
    "more-button", "more-button-flex", "more-button-text", "more-button-arrow-wrap",
    "more-button-arrow", "more-button-arrow-hover",
]

def scope_css(css, prefix=".arooth-home-services"):
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
                    elif s.startswith(".section") or s.startswith("."):
                        new_sels.append(f"{prefix} {s}")
                    else:
                        new_sels.append(s)
                scoped.append(", ".join(new_sels) + "{" + rest)
            else:
                scoped.append(line)
        out.append("\n".join(scoped))
    return "\n\n".join(out)

vars_block = """
.arooth-home-services {
  --_fonts---fonts--paragraph-font: Poppins, sans-serif;
  --_font-sizes---paragraphs--small: 0.875rem;
  --_font-sizes---paragraphs--regular: 1rem;
  --_font-sizes---headings--h2: 3.25rem;
  --_font-sizes---headings--h3: 2.5rem;
  --_font-sizes---headings--h4: 2rem;
  --_font-weight-line-height---line-heights--lh-100: 100%;
  --_font-weight-line-height---line-heights--lh-110: 110%;
  --_font-weight-line-height---line-heights--lh-120: 120%;
  --_font-weight-line-height---line-heights--lh-130: 130%;
  --_font-weight-line-height---line-heights--lh-150: 150%;
  --_font-weight-line-height---font-weights--regular: 400;
  --_spacing-radius---radius--button-radius: 6.25rem;
  --_spacing-radius---radius--md: 1rem;
  --_spacing-radius---radius--sm: 0.875rem;
  --_spacing-radius---radius--xxl: 2.5rem;
  --_spacing-radius---spacings--section-gap: 7.5rem;
  --white: white;
  --azureish-white: #d1e0ff;
  --eerie-black: #111827;
  --independence: #4b5563;
  --primary: #0040c1;
  --transparent: transparent;
  --light-bg: #f5faff;
  position: relative;
  z-index: 1;
  font-family: var(--_fonts---fonts--paragraph-font);
  background: #fff;
}

.arooth-home-services .container {
  max-width: 83rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

.arooth-home-services .section.services {
  padding-top: var(--_spacing-radius---spacings--section-gap);
  padding-bottom: var(--_spacing-radius---spacings--section-gap);
}
"""

states = """
.arooth-home-services .serial-single-number-trigger,
.arooth-home-services .service-icons-trigger,
.arooth-home-services .service-buttons-trigger {
  transition: transform 0.5s ease;
}

.arooth-home-services .service-name-dot-wrap,
.arooth-home-services .service-tab-link-image-wrap,
.arooth-home-services .service-tags-wrapper {
  transition: width 0.5s ease, height 0.5s ease, max-height 0.5s ease;
}

.arooth-home-services .service-name {
  transition: color 0.5s ease;
}

.arooth-home-services .service-tab-link.is-active .service-name-dot-wrap {
  width: auto;
  overflow: visible;
}

.arooth-home-services .service-tab-link:not(.is-active) .service-name-dot-wrap {
  width: 0;
  overflow: hidden;
}

.arooth-home-services .service-tab-link.is-active .service-tab-link-image-wrap {
  height: 9.25rem;
}

.arooth-home-services .service-tab-link:not(.is-active) .service-tab-link-image-wrap {
  height: 5rem;
}

.arooth-home-services .service-tab-link.is-active .service-tags-wrapper {
  height: auto;
  overflow: visible;
}

.arooth-home-services .service-tab-link:not(.is-active) .service-tags-wrapper {
  height: 0;
  overflow: hidden;
}

.arooth-home-services .service-tab-link.is-active .service-name {
  color: var(--primary);
}

.arooth-home-services .service-tab-link:not(.is-active) .service-name {
  color: var(--eerie-black);
}

.arooth-home-services .service-tab-link {
  display: block;
  width: 100%;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  text-align: left;
}

.arooth-home-services .service-serial-collection {
  flex: none;
  width: 100%;
}

.arooth-home-services .serial-single-number-trigger {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.arooth-home-services .service-icons-trigger {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.arooth-home-services .service-buttons-trigger {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.arooth-home-services .more-button:hover .more-button-arrow {
  transform: translate(1.5rem, -1.5rem);
}

.arooth-home-services .more-button:hover .more-button-arrow-hover {
  transform: translate(0, 0);
}

.arooth-home-services .more-button-arrow-hover {
  transform: translate(-1.5rem, 1.5rem);
  transition: transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.arooth-home-services .more-button-arrow {
  transition: transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
}
"""

base_rules = extract_rules(shared, names)
mq_rules = extract_rules(about, names)
combined = vars_block + "\n" + scope_css("\n\n".join(base_rules)) + "\n" + scope_css("\n\n".join(mq_rules)) + "\n" + states
Path(r"c:\Users\hmc\Downloads\www.new.studio\app\arooth-home-services.css").write_text(combined, encoding="utf-8")
print("written", len(combined))
