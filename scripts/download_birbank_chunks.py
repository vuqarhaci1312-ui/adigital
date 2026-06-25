import re
import urllib.request

html = open("scripts/birbank-home.html", encoding="utf-8").read()
chunks = list(dict.fromkeys(re.findall(r'/_next/static/chunks/[^"\']+\.js', html)))

headers = {"User-Agent": "Mozilla/5.0"}
footer_hits = []

for c in chunks:
    url = f"https://birbank.az{c}"
    try:
        req = urllib.request.Request(url, headers=headers)
        js = urllib.request.urlopen(req, timeout=20).read().decode("utf-8", errors="replace")
        name = c.split("/")[-1]
        open(f"scripts/birbank-chunks/{name}", "w", encoding="utf-8").write(js)
        for kw in ["Footer", "footer", "196", "Kapital Bank", "whatsapp", "instagram", "facebook", "Birbank Business"]:
            if kw in js:
                idx = js.find(kw)
                footer_hits.append((name, kw, js[max(0,idx-80):idx+200]))
    except Exception as e:
        print(f"fail {c}: {e}")

open("scripts/birbank-footer-js-hits.txt", "w", encoding="utf-8").write(
    "\n\n---\n\n".join(f"{a} | {b}\n{c}" for a,b,c in footer_hits)
)
print(f"Downloaded {len(chunks)} chunks, {len(footer_hits)} hits")
