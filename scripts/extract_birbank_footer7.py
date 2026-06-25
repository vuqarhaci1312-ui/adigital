import re

js = open("birbank-chunks/314af799.js", encoding="utf-8").read()

# Extract gb object (app store links per locale)
idx = js.find("gb={")
if idx >= 0:
    depth = 0
    end = idx
    for i, ch in enumerate(js[idx:], idx):
        if ch == "{":
            depth += 1
        elif ch == "}":
            depth -= 1
            if depth == 0:
                end = i + 1
                break
    open("birbank-gb-object.txt", "w", encoding="utf-8").write(js[idx:end])

# Find footer nav links - search for patterns like link:"/cards"
link_pattern = re.findall(r'\{link:"(/[^"]+)",name:"([^"]+)",id:(\d+)\}', js)
# filter likely footer links - dedupe
seen = set()
footer_links = []
for link, name, id_ in link_pattern:
    key = (link, name)
    if key not in seen:
        seen.add(key)
        footer_links.append((link, name, id_))

open("birbank-all-links.txt", "w", encoding="utf-8").write(
    "\n".join(f"{a} | {b} | {c}" for a, b, c in footer_links)
)
print("total unique links", len(footer_links))

# Find gt logo assignment
for pat in ["gt=", "gt=\""]:
    i = js.find(pat)
    print(pat, i, js[i:i+120] if i>=0 else "")

# copyright strings
for s in ["Kapital Bank", "Birbank", "©", "Məxfilik"]:
    print(s, js.count(s))

# Extract Footer function params - search before createElement footer
idx = js.find('createElement("footer"')
start = js.rfind("function", 0, idx)
open("birbank-footer-fn.txt", "w", encoding="utf-8").write(js[start:idx+500])

# FooterKB render
idx2 = js.find("FooterKB")
open("birbank-footerKB-area.txt", "w", encoding="utf-8").write(js[idx2:idx2+20000])
