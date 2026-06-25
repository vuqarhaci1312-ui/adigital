import re

js = open("birbank-chunks/314af799.js", encoding="utf-8").read()

# Find Footer component definition - search for gf= arrow function before createElement footer
idx = js.find('createElement("footer"')
# walk back to find function start
chunk = js[max(0, idx-5000):idx+8000]

# find Q assignment patterns near footer
for pat in ["Q=", "Q =", "footerNav", "navLinks", "Fiziki"]:
    if pat in chunk:
        print(f"found {pat}")

open("birbank-footer-context.txt", "w", encoding="utf-8").write(chunk)

# Extract full footer CSS from module - search for .v7UtyeBd8lDoVCm0rndn{
css_start = js.find(".v7UtyeBd8lDoVCm0rndn{")
css_end = js.find(".NKMwNq3nEDgOlwr6IEFp{")  # next module after footer in same push
if css_start >= 0:
    css = js[css_start:css_end if css_end > css_start else css_start+30000]
    open("birbank-footer-raw-css.txt", "w", encoding="utf-8").write(css)
    print("css length", len(css))

# Search g0= FooterKB
idx0 = js.find("g0=")
if idx0 >= 0:
    open("birbank-footerKB-fn.txt", "w", encoding="utf-8").write(js[idx0:idx0+12000])
