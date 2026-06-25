import re
from pathlib import Path

t = Path(r"c:\Users\hmc\Downloads\synex-webflow.js").read_text(encoding="utf-8")

for m in re.finditer(r"'(\[motion=\"[^\"]+\"\])'", t):
    selector = m.group(1)
    # find the interaction block - go back to {id:"i-
    start = t.rfind('{id:"i-', max(0, m.start()-1500), m.start())
    if start == -1:
        start = max(0, m.start()-800)
    chunk = t[start:m.start()+200]
    tl = re.search(r'timelineIds:\["(t-[^"]+)"\]', chunk)
    scroll = re.search(r'scrollTriggerConfig:\{([^}]+)\}', chunk)
    print(f"{selector} -> {tl.group(1) if tl else 'none'}")
    if scroll:
        print(f"  scroll: {scroll.group(1)}")

# Get t-509c1f37 timeline (stagger?)
idx = t.find('{id:"t-509c1f37"')
depth = 0
for i in range(idx, idx+2000):
    if t[i] == '{': depth += 1
    elif t[i] == '}':
        depth -= 1
        if depth == 0:
            print("\n=== t-509c1f37 ===")
            print(t[idx:i+1])
            break

# search fade-in
for m in re.finditer(r"fade-in", t):
    print("\nfade-in at", m.start(), t[m.start()-100:m.start()+200])
