import re
import json

html = open("scripts/birbank-home.html", encoding="utf-8").read()

# Find all JS chunks
chunks = re.findall(r'/_next/static/chunks/[^"\']+\.js', html)
chunks = list(dict.fromkeys(chunks))
print(f"Found {len(chunks)} chunks")

for c in chunks:
    if any(k in c.lower() for k in ["layout", "footer", "app", "main"]):
        print(c)

# Search next data for footer config
data = json.loads(re.search(r'<script id="__NEXT_DATA__"[^>]*>(.*?)</script>', html, re.DOTALL).group(1))
# walk for footer keys
def find_keys(obj, path=""):
    if isinstance(obj, dict):
        for k,v in obj.items():
            if "footer" in k.lower():
                print(f"KEY {path}.{k}: {str(v)[:500]}")
            find_keys(v, f"{path}.{k}")
    elif isinstance(obj, list):
        for i,v in enumerate(obj[:5]):
            find_keys(v, f"{path}[{i}]")

find_keys(data)
