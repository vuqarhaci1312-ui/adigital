import re
from pathlib import Path

css = Path(r"c:\Users\hmc\Downloads\arooth.webflow.io\arooth.shared.css").read_text(encoding="utf-8")

keywords = [
    'about-us', 'about-award', 'about-section', 'about-stat', 'about-video', 'about-vh',
    'award-count', 'counter-number', 'single-number', 'testimonial-counter', 'testimonial-stat',
    'single-testimonial-stat', 'play-pause-button', 'subtitle-wrap', 'subtitle-flex',
    'subtitle-icon', 'subtitle-text', 'primary-button', 'section.about',
]

# Split CSS into rules - handle minified CSS
rules = []
i = 0
while i < len(css):
    brace = css.find('{', i)
    if brace == -1:
        break
    # find matching closing brace
    depth = 1
    j = brace + 1
    while j < len(css) and depth > 0:
        if css[j] == '{':
            depth += 1
        elif css[j] == '}':
            depth -= 1
        j += 1
    selector = css[i:brace].strip()
    body = css[brace:j]
    rule = selector + body
    if any(k in selector for k in keywords):
        rules.append(rule)
    i = j

# Also get media queries containing our classes
media_blocks = re.findall(r'@media[^{]+\{(?:[^{}]|\{[^{}]*\})*\}', css)
for block in media_blocks:
    if any(k in block for k in keywords):
        rules.append(block)

result = '\n\n'.join(rules)
Path(r"c:\Users\hmc\Downloads\arooth.webflow.io\about-section.css").write_text(result, encoding="utf-8")
print(f"Extracted {len(rules)} rules, {len(result)} chars")

# Print key selectors
for r in rules[:5]:
    print(r[:120], '...')
