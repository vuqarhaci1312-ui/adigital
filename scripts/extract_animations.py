import re
from pathlib import Path

js = Path(r"c:\Users\hmc\Downloads\arooth.webflow.io\cdn.prod.website-files.com\68dbb9a72b91c794d0cdd10c\js\webflow.9afb6367.094aedc2bbd9f610.js").read_text(encoding="utf-8", errors="ignore")

w_ids = [
    '497c147f-e0be-3b6c-03c7-3bee10cc43c6',
    '497c147f-e0be-3b6c-03c7-3bee10cc43ca',
    '497c147f-e0be-3b6c-03c7-3bee10cc43d7',
    '497c147f-e0be-3b6c-03c7-3bee10cc43e2',
    '497c147f-e0be-3b6c-03c7-3bee10cc43e6',
    '497c147f-e0be-3b6c-03c7-3bee10cc43e9',
    '497c147f-e0be-3b6c-03c7-3bee10cc441d',
]

for wid in w_ids:
    idx = js.find(wid)
    if idx >= 0:
        # find animation action block
        start = js.rfind('{', max(0, idx-200), idx)
        chunk = js[start:idx+1200]
        print('='*60)
        print(wid)
        print(chunk[:1200])
        print()
