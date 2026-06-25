import re

js = open("birbank-chunks/314af799.js", encoding="utf-8").read()

# Find Footer export and component
for kw in ["Footer", "footer__", "footer-", "footer_", "196", "Kapital", "whatsapp", "Instagram", "facebook", "Birbank"]:
    count = js.lower().count(kw.lower())
    if count:
        print(f"{kw}: {count}")

# Extract CSS module classes related to footer
footer_classes = sorted(set(re.findall(r'footer[A-Za-z_-]*__?[A-Za-z0-9_-]*', js)))
print("\nFooter class patterns:", footer_classes[:80])

# Find footer CSS in the embedded CSS string
css_match = re.search(r'\.footer\{[^}]+\}', js)
if css_match:
    print("\n.footer rule:", css_match.group(0)[:500])

# Extract all .footer* CSS rules from embedded stylesheet
rules = re.findall(r'\.footer[^{]*\{[^}]+\}', js)
open("birbank-footer-rules.txt", "w", encoding="utf-8").write("\n".join(rules[:300]))
print(f"\nExtracted {len(rules)} footer CSS rules")

# Find Footer function/component definition area
idx = js.find("Footer:")
if idx < 0:
    idx = js.find("exports.Footer")
if idx < 0:
    idx = js.find('"Footer"')
print(f"\nFooter export at {idx}")
if idx >= 0:
    snippet = js[idx:idx+8000]
    open("birbank-footer-component-snippet.txt", "w", encoding="utf-8").write(snippet)

# Search for footer link columns / menu structure strings in Azerbaijani
az_strings = re.findall(r'"([A-Za-zƏəÖöÜüĞğŞşİıÇç\s\-0-9]+)"', js)
footer_keywords = [s for s in az_strings if any(k in s.lower() for k in ['məhsul', 'xidmət', 'əlaqə', 'kapital', 'birbank', 'whatsapp', '196', 'filial', 'təhlükəsiz', 'məxfilik'])]
print("\nRelevant strings:")
for s in sorted(set(footer_keywords))[:60]:
    print(" -", s)
