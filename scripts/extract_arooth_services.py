import re
from pathlib import Path

html = Path(r"c:\Users\hmc\Downloads\www.new.studio\scripts\arooth-services.html").read_text(encoding="utf-8")

# find quote text
idx = html.find("We prioritize trust")
print("quote idx", idx)
print(html[idx-500:idx+2000])

# find section classes near quote
for m in re.finditer(r'class="([^"]*service[^"]*)"', html):
    if idx - 2000 < m.start() < idx + 5000:
        print("class:", m.group(1)[:120])
