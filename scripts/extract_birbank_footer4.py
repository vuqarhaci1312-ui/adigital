import re

js = open("birbank-chunks/314af799.js", encoding="utf-8").read()

# Extract embedded CSS - find .footer{ block start
start = js.find(".footer{")
if start >= 0:
    # find a large CSS chunk around footer styles
    css_chunk = js[start:start + 50000]
    # extract until we hit something that's not CSS-like
    rules = []
    pos = 0
    while pos < len(css_chunk):
        m = re.match(r'\.footer[^{]*\{', css_chunk[pos:])
        if not m:
            break
        brace = 0
        i = pos + m.start()
        j = i
        while j < len(css_chunk):
            if css_chunk[j] == '{':
                brace += 1
            elif css_chunk[j] == '}':
                brace -= 1
                if brace == 0:
                    rules.append(css_chunk[i : j + 1])
                    pos = j + 1
                    break
            j += 1
        else:
            break
    open("birbank-footer-css-full.txt", "w", encoding="utf-8").write("\n\n".join(rules))
    print(f"Extracted {len(rules)} CSS rules, total chars {sum(len(r) for r in rules)}")

# Find footer link data arrays - search for privacy-policy, facebook, instagram
for pattern in [
    r'privacy-policy',
    r'facebook\.com/birbank',
    r'instagram\.com/birbank',
    r'tel:196',
    r'Kapital Bank',
    r'Birbank Invest',
    r'footer__links__categories',
]:
    idx = js.find(pattern)
    print(f"{pattern}: {idx}")
    if idx >= 0:
        open(f"birbank-snippet-{pattern.replace('/','_').replace('.','_')[:30]}.txt", "w", encoding="utf-8").write(
            js[max(0, idx - 2000) : idx + 3000]
        )

# Find gZ object (apps data)
for name in ["gZ=", "gb=", "gp=", "gJ="]:
    idx = js.find(name)
    print(f"{name} at {idx}")
