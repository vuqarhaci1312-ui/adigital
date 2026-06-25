import re
from pathlib import Path

t = Path(r"c:\Users\hmc\Downloads\synex-webflow.js").read_text(encoding="utf-8")
for m in re.finditer(r'timelineIds:\["t-8d91e2cd"\]', t):
    start = max(0, m.start() - 500)
    print("---")
    print(t[start:m.start()+50])
