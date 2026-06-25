import re
from pathlib import Path

text = Path(r"c:\Users\hmc\Downloads\synex-index.html").read_text(encoding="utf-8")
css = re.findall(r'href="([^"]+\.css[^"]*)"', text)
print("CSS:", css)
idx = text.find("Simplified")
print("idx", idx)
print(text[idx - 800 : idx + 4000])
