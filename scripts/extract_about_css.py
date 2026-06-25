import re
from pathlib import Path

css = Path(r"c:\Users\hmc\Downloads\arooth.webflow.io\cdn.prod.website-files.com\68dbb9a72b91c794d0cdd10c\css\arooth.webflow.shared.aea604727.css").read_text(encoding="utf-8")

about_html = Path(r"c:\Users\hmc\Downloads\arooth.webflow.io\about-section.html").read_text(encoding="utf-8")
classes = set()
for cls_str in re.findall(r'class="([^"]+)"', about_html):
    for c in cls_str.split():
        classes.add(c)

# Extract CSS rules containing about/award/counter related selectors
lines = css.split('}')
extracted = []
for block in css.split('}'):
    block = block.strip()
    if not block:
        continue
    selector_part = block.split('{')[0] if '{' in block else ''
    if any(c in selector_part for c in classes) or '.about' in selector_part or '.award-count' in selector_part or '.counter-' in selector_part:
        extracted.append(block + '}')

result = '\n\n'.join(extracted)
Path(r"c:\Users\hmc\Downloads\arooth.webflow.io\about-section.css").write_text(result, encoding="utf-8")
print(f"Extracted {len(extracted)} rules, {len(result)} chars")

# Also search for animation data in webflow js
js_path = Path(r"c:\Users\hmc\Downloads\arooth.webflow.io\cdn.prod.website-files.com\68dbb9a72b91c794d0cdd10c\js\webflow.9afb6367.094aedc2bbd9f610.js")
if js_path.exists():
    js = js_path.read_text(encoding="utf-8", errors="ignore")
    for wid in ['497c147f-e0be-3b6c-03c7-3bee10cc43c6', '497c147f-e0be-3b6c-03c7-3bee10cc43ca']:
        idx = js.find(wid)
        if idx >= 0:
            print(f"\nAnimation for {wid}:")
            print(js[idx:idx+800])
