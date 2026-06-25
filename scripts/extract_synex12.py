import re
from pathlib import Path

t = Path(r"c:\Users\hmc\Downloads\synex-webflow.js").read_text(encoding="utf-8")

for motion in ["fade-in", "title", "stagger", "count", "page-load"]:
    needle = f'[motion=\\"{motion}\\"'
    idx = 0
    while True:
        idx = t.find(needle, idx)
        if idx == -1:
            break
        chunk = t[max(0, idx-400):idx+600]
        tl = re.search(r'timelineIds:\["(t-[^"]+)"\]', chunk)
        scroll = re.search(r'scrollTriggerConfig:\{([^}]+)\}', chunk)
        print(f"motion={motion} @ {idx} -> {tl.group(1) if tl else '?'}")
        if scroll:
            print(f"  scroll: {scroll.group(1)}")
        idx += len(needle)

# find count timeline
for m in re.finditer(r'timelineIds:\["(t-[^"]+)"\]', t):
    start = m.start()
    chunk = t[max(0,start-500):start+50]
    if 'count' in chunk.lower() or 'motion' in chunk:
        pass

# search count specifically
idx = t.find('motion=\\"count\\"')
print("\ncount context:", t[idx-400:idx+400] if idx>=0 else "not found")
