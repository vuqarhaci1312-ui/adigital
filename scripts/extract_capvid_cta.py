import re
from pathlib import Path

html = Path(r"c:\Users\hmc\Downloads\www.new.studio\scripts\capvid-home.html").read_text(encoding="utf-8")

needle = "Transform the Way You Caption with AI"
idx = html.find(needle)
print("idx", idx)
if idx >= 0:
    start = html.rfind("<section", 0, idx)
    end = html.find("</section>", idx) + len("</section>")
    chunk = html[start:end]
    Path(r"c:\Users\hmc\Downloads\www.new.studio\scripts\capvid-cta-chunk.html").write_text(chunk, encoding="utf-8")
    print("len", len(chunk))
    print(chunk[:4000])

# css links
for m in re.finditer(r'href="([^"]+\.css[^"]*)"', html):
    if "capvid" in m.group(1) or "website-files" in m.group(1):
        print(m.group(1))
