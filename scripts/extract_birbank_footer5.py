import re

js = open("birbank-chunks/314af799.js", encoding="utf-8").read()

# CSS module class map from locals
locals_match = re.search(r'footer:"([^"]+)"[^}]+footer__license', js)
print("found locals block")

# Extract all CSS rules for footer hashed classes
hashed = re.findall(r'footer[^"]*:"([a-zA-Z0-9_-]+)"', js)
hashed = sorted(set(hashed))
print("hashed classes:", len(hashed))

rules = []
for cls in hashed:
    pattern = rf'\.{re.escape(cls)}\{{[^}}]+\}}'
    for m in re.finditer(pattern, js):
        rules.append(m.group(0))
    # media queries - simpler search
    idx = 0
    while True:
        idx = js.find(f".{cls}{{", idx)
        if idx == -1:
            break
        # expand to full rule including nested @media if needed
        end = js.find("}", idx) + 1
        rules.append(js[idx:end])
        idx = end

unique_rules = []
seen = set()
for r in rules:
    if r not in seen:
        seen.add(r)
        unique_rules.append(r)

open("birbank-footer-hashed-css.txt", "w", encoding="utf-8").write("\n\n".join(unique_rules))
print(f"Wrote {len(unique_rules)} rules")

# Extract gb= and gZ= data objects (partial)
for var in ["gb=", "gZ=", "gp=", "gJ="]:
    idx = js.find(var)
    if idx >= 0:
        snippet = js[idx:idx+4000]
        open(f"birbank-data-{var[:-1]}.txt", "w", encoding="utf-8").write(snippet)
