import re
from pathlib import Path

t = Path(r"c:\Users\hmc\Downloads\synex-webflow.js").read_text(encoding="utf-8")

# Split by interaction objects
for m in re.finditer(r'\{id:"i-[a-f0-9]+"', t):
    start = m.start()
    depth = 0
    for i in range(start, min(start + 2000, len(t))):
        if t[i] == '{':
            depth += 1
        elif t[i] == '}':
            depth -= 1
            if depth == 0:
                obj = t[start:i+1]
                if 'motion=' in obj:
                    motion = re.search(r'motion=\\"(\w+)\\"', obj)
                    tl = re.search(r'timelineIds:\["(t-[^"]+)"\]', obj)
                    scroll = re.search(r'scrollTriggerConfig:\{([^}]+)\}', obj)
                    if motion and tl:
                        print(f"{motion.group(1)} -> {tl.group(1)}")
                        if scroll:
                            print(f"  {scroll.group(1)}")
                break
