import re
from pathlib import Path
t = Path(r"c:\Users\hmc\Downloads\www.new.studio\scripts\arooth-services-chunk.html").read_text(encoding="utf-8")
icons = re.findall(r'https://cdn.prod.website-files.com/[^"]+Service-Icon-\d+\.svg', t)
print("\n".join(icons))
