import re
from pathlib import Path

html = Path(r"c:\Users\hmc\Downloads\arooth.webflow.io\live-index.html").read_text(encoding="utf-8")

# Find about section start
start = html.find('class="section about"')
if start == -1:
    start = html.find("section about")
print("start:", start)

# Find section tag before
sec_start = html.rfind("<section", 0, start)
print("sec_start:", sec_start)

# Find next section after about
next_sec = html.find("<section", start + 10)
print("next_sec:", next_sec)

about_html = html[sec_start:next_sec]
Path(r"c:\Users\hmc\Downloads\arooth.webflow.io\about-section.html").write_text(about_html, encoding="utf-8")
print("Length:", len(about_html))

# Extract CSS classes
classes = sorted(set(re.findall(r'class="([^"]+)"', about_html)))
print("Classes:", classes[:30])

# Find data-w-id attributes for animations
w_ids = re.findall(r'data-w-id="([^"]+)"', about_html)
print("w-ids:", w_ids)
