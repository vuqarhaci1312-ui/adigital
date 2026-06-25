import re
from pathlib import Path

t = Path(r"c:\Users\hmc\Downloads\synex-webflow.js").read_text(encoding="utf-8")
for attr in ['fade-in', 'title', 'stagger', 'count']:
    pattern = rf'motion="{attr}"'
    idx = t.find(f'motion=\\"{attr}\\"')
    if idx == -1:
        idx = t.find(f'[motion=\\"{attr}\\"')
    # find timelineIds near this in triggers
    for m in re.finditer(rf'\[motion=\\"{attr}\\"', t):
        start = max(0, m.start() - 200)
        chunk = t[start:m.start()+400]
        if 'timelineIds' in chunk or 'scrollTriggerConfig' in chunk:
            print(f"=== {attr} ===")
            print(chunk[:600])
            print()
