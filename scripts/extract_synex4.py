import re
from pathlib import Path

t = Path(r"c:\Users\hmc\Downloads\synex-webflow.js").read_text(encoding="utf-8")
m = re.search(r'\{id:"t-8d91e2cd"[^}]*actions:\[(.*?)\]\}', t)
if m:
    print(m.group(0)[:8000])
else:
    idx = t.find('{id:"t-8d91e2cd"')
    print("idx", idx)
    print(t[idx:idx+8000])
