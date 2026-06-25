import re

js = open("birbank-chunks/314af799.js", encoding="utf-8").read()

idx2 = js.find("FooterKB")
open("birbank-footerKB-area.txt", "w", encoding="utf-8").write(js[idx2:idx2+25000])

# Find link arrays with name and link - relaxed pattern
patterns = [
    r'name:"([^"]{3,80})",link:"([^"]+)"',
    r'link:"([^"]+)",name:"([^"]{3,80})"',
    r'title:"([^"]{3,80})",children:\[',
]
all_items = []
for p in patterns:
    for m in re.finditer(p, js):
        all_items.append(m.groups())

open("birbank-name-link-pairs.txt", "w", encoding="utf-8").write(
    "\n".join(str(x) for x in sorted(set(all_items))[:200])
)

# Find copyright template
for m in re.finditer(r'\\xa9 \$\{I\}[^)]+\)', js):
    open("birbank-copyright.txt", "w", encoding="utf-8").write(m.group(0))

# module 20 full css with media queries for footer
m = re.search(r'c\.push\(\[A\.id,`(@font-face[^`]*footer__apps__item__info__description[^`]+)`\]', js)
if m:
    css = m.group(1)
    # split media queries manually for footer classes only
    footer_css = []
    for part in re.split(r'(?=@media)', css):
        if 'footer' in part or 'v7UtyeBd8lDoVCm0rndn' in part or 'xY79jp9QaPTo5BoxuKlt' in part:
            footer_css.append(part)
    open("birbank-footer-module20-filtered.css", "w", encoding="utf-8").write("\n".join(footer_css))
    print("filtered css parts", len(footer_css))
