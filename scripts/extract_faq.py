import re
from pathlib import Path

html = Path(r"c:\Users\hmc\Downloads\www.new.studio\scripts\arooth-services-chunk.html").read_text(encoding="utf-8")
faq_start = html.find('<section class="section faq">')
print(html[faq_start:faq_start+3000])
