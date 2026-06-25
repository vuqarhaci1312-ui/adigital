import re
from pathlib import Path

html = Path(r"c:\Users\hmc\Downloads\www.new.studio\scripts\arooth-services-chunk.html").read_text(encoding="utf-8")

items = re.findall(
    r'single-service-icon" src="([^"]+)".*?single-service-name">([^<]+)</a>.*?single-service-details">([^<]+)</p>.*?href="([^"]+)" class="more-button',
    html,
    re.S,
)
for i, item in enumerate(items, 1):
    print(i, item)

faq = re.findall(
    r'faq-question-serial">([^<]+)</div>.*?faq-question">([^<]+)</div>.*?faq-ans-title">([^<]+)</h4>.*?faq-details">([^<]+)</p>',
    html,
    re.S,
)
print("\nFAQ count", len(faq))
for f in faq:
    print(f[0], "|", f[1])

# plus minus icons
for m in re.finditer(r'(Plus|Minus|FAQ|faq-plus|691[^"]+\.(svg|png))', html):
    pass
icons = re.findall(r'https://cdn[^"]+(Plus|Minus|FAQ|Subtitle)[^"]*', html)
print("icons", set(re.findall(r'https://cdn.prod.website-files.com/[^"]+\.(svg|png)"', html)[:20]))
