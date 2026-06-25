import re
from pathlib import Path

t = Path(r"c:\Users\hmc\Downloads\synex-webflow.js").read_text(encoding="utf-8")

pattern = r'\[motion=\\"(\w+)\\"\]'
for m in re.finditer(pattern, t):
    motion = m.group(1)
    chunk = t[max(0, m.start()-500):m.start()+800]
    tl = re.search(r'timelineIds:\["(t-[^"]+)"\]', chunk)
    scroll = re.search(r'scrollTriggerConfig:\{([^}]+)\}', chunk)
    print(f"motion={motion} -> {tl.group(1) if tl else 'none'}")
    if scroll:
        print(f"  scroll: {scroll.group(1)}")

# All unique timeline ids
all_tids = set(re.findall(r'\{id:"(t-[a-f0-9]+)"', t))
print(f"\nTotal timelines: {len(all_tids)}")

# search count in file
for kw in ["count", "title", "stagger"]:
    print(f"\n{kw} occurrences:", t.count(f'motion=\\"{kw}\\"'))
