import re
from pathlib import Path

text = Path(r"c:\Users\hmc\Downloads\synex-index.html").read_text(encoding="utf-8")
# extract p-home-intro through end of p-home-feature section (before next major section)
start = text.find('class="p-home-intro"')
end = text.find('class="p-home-product"')
if end == -1:
    end = text.find('Meet the products')
section = text[start - 50 : end]
Path(r"c:\Users\hmc\Downloads\synex-intro-section.html").write_text(section, encoding="utf-8")
print("length", len(section))
# js
js = re.findall(r'src="([^"]+webflow[^"]+\.js)"', text)
print("JS:", js)
