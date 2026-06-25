import re
from pathlib import Path

t = Path(r"c:\Users\hmc\Downloads\synex-webflow.js").read_text(encoding="utf-8")

# JS uses '[motion="fade-in"]' inside single-quoted string
for m in re.finditer(r"'(\[motion=\"\w+\"\])'", t):
    selector = m.group(1)
    chunk = t[max(0, m.start()-500):m.start()+800]
    tl = re.search(r'timelineIds:\["(t-[^"]+)"\]', chunk)
    scroll = re.search(r'scrollTriggerConfig:\{([^}]+)\}', chunk)
    print(f"{selector} -> {tl.group(1) if tl else 'none'}")
    if scroll:
        print(f"  scroll: {scroll.group(1)}")
