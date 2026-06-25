import json
import re

html = open("scripts/birbank-home.html", encoding="utf-8").read()
m = re.search(r'<script id="__NEXT_DATA__"[^>]*>(.*?)</script>', html, re.DOTALL)
if m:
    data = json.loads(m.group(1))
    text = json.dumps(data, ensure_ascii=False)
    # search footer-related keys
    for kw in ["footer", "Footer", "copyright", "196", "Birbank", "social", "facebook", "instagram"]:
        if kw.lower() in text.lower():
            print(f"Found keyword: {kw}")
    
    # Save full next data for inspection
    open("scripts/birbank-next-data.json", "w", encoding="utf-8").write(
        json.dumps(data, ensure_ascii=False, indent=2)
    )
    print("Saved next data")

# Search all CSS files for footer
import urllib.request
css_urls = re.findall(r'href="(/_next/static/css/[^"]+\.css)"', html)
css_urls = list(dict.fromkeys(css_urls))
print(f"CSS files: {len(css_urls)}")

footer_rules = []
for url in css_urls:
    try:
        full = f"https://birbank.az{url}"
        req = urllib.request.urlopen(full, timeout=15)
        css = req.read().decode("utf-8", errors="replace")
        if "footer" in css.lower():
            # extract footer-related rules
            for match in re.finditer(r'\.styles_[^{]*footer[^{]*\{[^}]+\}', css, re.I):
                footer_rules.append(f"/* {url} */\n{match.group(0)}")
            for match in re.finditer(r'\.styles_footer[^{]*\{[^}]+\}', css, re.I):
                footer_rules.append(f"/* {url} */\n{match.group(0)}")
    except Exception as e:
        print(f"Failed {url}: {e}")

open("scripts/birbank-footer-css.txt", "w", encoding="utf-8").write("\n\n".join(footer_rules[:200]))
print(f"Extracted {len(footer_rules)} footer CSS rules")
