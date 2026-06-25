import re
from pathlib import Path

html = Path(r"c:\Users\hmc\Downloads\www.new.studio\scripts\arooth-services.html").read_text(encoding="utf-8")

# services
for m in re.finditer(r'single-service-name">([^<]+)</a>.*?single-service-details">([^<]+)</p>.*?single-service-icon" src="([^"]+)"', html, re.S):
    print("SERVICE:", m.group(1), "|", m.group(2)[:60], "|", m.group(3))

# faq items
for m in re.finditer(r'faq-question">([^<]+)</div>.*?faq-details">([^<]+)</p>', html, re.S):
    print("FAQ:", m.group(1), "|", m.group(2)[:80])

# quote - use unicode quotes
idx = html.find("prioritize trust")
print("QUOTE:", html[idx-5:idx+200])
