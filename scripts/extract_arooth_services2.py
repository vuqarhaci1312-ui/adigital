import re
from pathlib import Path

html = Path(r"c:\Users\hmc\Downloads\www.new.studio\scripts\arooth-services.html").read_text(encoding="utf-8")

start = html.find('<section class="section service">')
end = html.find('<section class="section faq">')
faq_end = html.find('</section>', html.find('<section class="section faq">') + 100)
# get full faq section
faq_start = html.find('<section class="section faq">')
faq_close = html.find('</section>', faq_start)
# find next section after faq
next_sec = html.find('<section', faq_start + 20)
faq_full_end = html.rfind('</section>', faq_start, next_sec if next_sec > 0 else len(html))

chunk = html[start:faq_start + (faq_close - faq_start + len('</section>'))]
Path(r"c:\Users\hmc\Downloads\www.new.studio\scripts\arooth-services-chunk.html").write_text(chunk, encoding="utf-8")
print("service+faq length", len(chunk))
print(chunk[:500])
print("...")
print(chunk[-500:])

# extract service items count
print("services:", chunk.count("single-service-wrap"))
