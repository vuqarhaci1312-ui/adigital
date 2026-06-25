import re
from pathlib import Path

html = Path(r"c:\Users\hmc\Downloads\www.new.studio\scripts\arooth-services-chunk.html").read_text(encoding="utf-8")
parts = html.split('<div class="single-service-wrap">')[1:]
for i, p in enumerate(parts, 1):
    icon = re.search(r'single-service-icon" src="([^"]+)"', p)
    name = re.search(r'single-service-name">([^<]+)</a>', p)
    desc = re.search(r'single-service-details">([^<]+)</p>', p)
    href = re.search(r'href="(/services/[^"]+)"', p)
    print(i, name.group(1) if name else '?', href.group(1) if href else '?')
    print(' ', desc.group(1)[:70] if desc else '')
    print(' ', icon.group(1) if icon else '')
