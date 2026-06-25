import re

js = open("birbank-chunks/314af799.js", encoding="utf-8").read()

idx = js.find("gm={")
if idx >= 0:
    depth = 0
    for i, ch in enumerate(js[idx:], idx):
        if ch == "{":
            depth += 1
        elif ch == "}":
            depth -= 1
            if depth == 0:
                open("birbank-gm-object.txt", "w", encoding="utf-8").write(js[idx:i+1])
                break

# extract gt logo - first 200 chars
idx = js.find('gt="')
open("birbank-logo.txt", "w", encoding="utf-8").write(js[idx:idx+500])

# Save QR as reference - already have gJ in context
print("done")
