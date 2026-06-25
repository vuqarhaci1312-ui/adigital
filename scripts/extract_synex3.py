import re
from pathlib import Path

t = Path(r"c:\Users\hmc\Downloads\synex-webflow.js").read_text(encoding="utf-8")
idx = t.find('"t-8d91e2cd"')
print(t[idx : idx + 5000])
