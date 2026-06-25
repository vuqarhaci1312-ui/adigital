import re
from pathlib import Path

t = Path(r"c:\Users\hmc\Downloads\synex-webflow.js").read_text(encoding="utf-8")
idx = t.find('{id:"t-8d91e2cd"')
# find matching closing - count braces
depth = 0
start = idx
for i in range(idx, min(idx + 15000, len(t))):
    if t[i] == '{':
        depth += 1
    elif t[i] == '}':
        depth -= 1
        if depth == 0:
            print(t[start:i+1])
            break
