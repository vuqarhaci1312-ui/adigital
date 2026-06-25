import re
from pathlib import Path

html = Path(r"c:\Users\hmc\Downloads\arooth.webflow.io\live-index.html").read_text(encoding="utf-8")
start = html.find("Creativity Meets")
if start < 0:
    print("not found")
    raise SystemExit(1)
sect_start = html.rfind("<section", 0, start)
sect_end = html.find("</section>", start) + len("</section>")
chunk = html[sect_start:sect_end]
Path(r"c:\Users\hmc\Downloads\www.new.studio\scripts\arooth-home-services.html").write_text(chunk, encoding="utf-8")
print("written", len(chunk))
print(chunk[:2500])
