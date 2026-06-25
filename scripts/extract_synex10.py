import re
from pathlib import Path

t = Path(r"c:\Users\hmc\Downloads\synex-webflow.js").read_text(encoding="utf-8")

# Find all interaction registrations with motion attribute
for m in re.finditer(r'\[motion=\\"(\w+)\\"\]', t):
    motion = m.group(1)
    start = max(0, m.start() - 250)
    chunk = t[start:m.start()+100]
    tl = re.search(r'timelineIds:\["(t-[^"]+)"\]', chunk)
    scroll = re.search(r'scrollTriggerConfig:\{([^}]+)\}', chunk)
    if tl:
        print(f"motion={motion} -> {tl.group(1)}")
        if scroll:
            print(f"  scroll: {scroll.group(1)}")

# Extract timeline definitions
for tid in ["t-efcb4d6d", "t-17ffea70", "t-cd77263e", "t-fc870198"]:
    idx = t.find(f'{{id:"{tid}"')
    if idx == -1:
        continue
    depth = 0
    for i in range(idx, min(idx + 3000, len(t))):
        if t[i] == '{':
            depth += 1
        elif t[i] == '}':
            depth -= 1
            if depth == 0:
                print(f"\n=== {tid} ===")
                print(t[idx:i+1])
                break
