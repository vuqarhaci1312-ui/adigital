import re

html = open("scripts/birbank-home.html", encoding="utf-8").read()

# Find footer-related sections
matches = re.findall(
    r'class="[^"]*footer[^"]*"[^>]*>.*?(?=<script|</body)',
    html,
    re.DOTALL | re.IGNORECASE,
)

out = []
out.append(f"Found {len(matches)} matches\n")

if matches:
    out.append(matches[0][:30000])

classes = sorted(set(re.findall(r'styles_[a-zA-Z0-9_-]*footer[a-zA-Z0-9_-]*', html, re.I)))
out.append("\n\nFooter classes:\n" + "\n".join(classes))

css = re.findall(r'href="([^"]+\.css[^"]*)"', html)
out.append("\n\nCSS files:\n" + "\n".join(css[:20]))

# Find footer chunk by id or data attribute
idx = html.lower().find("footer")
chunks = []
while idx != -1 and len(chunks) < 20:
    chunks.append((idx, html[idx:idx+200]))
    idx = html.lower().find("footer", idx + 1)

out.append("\n\nFooter occurrences:\n")
for i, (pos, chunk) in enumerate(chunks[:15]):
    out.append(f"{i}: pos {pos}: {chunk[:150]}\n")

open("scripts/birbank-footer-extract.txt", "w", encoding="utf-8").write("\n".join(out))
print("Done")
