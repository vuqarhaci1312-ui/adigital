import re

js = open("birbank-chunks/314af799.js", encoding="utf-8").read()

# Extract module 20 CSS block containing footer styles
m = re.search(r'20:\(A,B,g\)=>\{[^}]+c\.push\(\[A\.id,`([^`]+)`\]', js)
if m:
    css = m.group(1)
    # unescape template vars - keep as much static CSS as possible
    open("birbank-footer-module20.css", "w", encoding="utf-8").write(css)
    print("module20 css length", len(css))

# Find Footer component - look for createElement("footer"
idx = js.find('createElement("footer"')
print("footer element at", idx)
if idx >= 0:
    open("birbank-footer-render.txt", "w", encoding="utf-8").write(js[idx:idx+15000])

# Extract link categories from FooterKB or similar
for marker in ['FooterKB', 'Footer=function', 'const gf=', 'let gf=']:
    i = js.find(marker)
    print(marker, i)

# Find arrays with link/name/id pattern near Footer
footer_area = js[idx:idx+20000] if idx >= 0 else ""
links = re.findall(r'\{link:"([^"]+)",name:"([^"]+)",id:(\d+)', footer_area)
open("birbank-footer-links.txt", "w", encoding="utf-8").write("\n".join(f"{a} | {b} | {c}" for a,b,c in links))
print("links found", len(links))

# Company logos gp
i = js.find("gp=[[")
if i < 0:
    i = js.find("gp=[")
print("gp at", i)
if i >= 0:
    open("birbank-gp.txt", "w", encoding="utf-8").write(js[i:i+2000])

# QR image gJ
i = js.find("gJ=")
print("gJ at", i)
if i >= 0:
    open("birbank-gJ.txt", "w", encoding="utf-8").write(js[i:i+500])
