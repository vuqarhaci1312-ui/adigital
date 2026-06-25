import re
from pathlib import Path

html = Path(r"c:\Users\hmc\Downloads\www.new.studio\scripts\capvid-home.html").read_text(encoding="utf-8")

for pat in ["Transform the Way", "cta-section", "get-started", "CTA", "cta-wrapper", "section-cta"]:
    i = html.find(pat)
    print(pat, i)

# find context around transform
idx = html.find("Transform the Way")
print(html[idx-800:idx+2500])
