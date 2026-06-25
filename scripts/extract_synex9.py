import re
from pathlib import Path

t = Path(r"c:\Users\hmc\Downloads\synex-webflow.js").read_text(encoding="utf-8")
for m in re.finditer(r'motion=\\"fade-in\\"|motion=\\"title\\"|motion=\\"stagger\\"|motion=\\"count\\"', t):
    start = max(0, m.start() - 300)
    print(t[start:m.start()+200])
    print("---")
