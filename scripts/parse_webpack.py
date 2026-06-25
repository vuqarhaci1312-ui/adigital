import re

js = open("birbank-chunks/webpack-f6028e30ee1bf882.js", encoding="utf-8").read()

for m in re.finditer(r'(\d+):"([^"]+\.js)"', js):
    if m.group(1) in ["2951", "23565"]:
        print(m.group(0))

idx = js.find("2951")
count = 0
while idx != -1 and count < 10:
    print(js[max(0, idx - 30) : idx + 100])
    idx = js.find("2951", idx + 1)
    count += 1
