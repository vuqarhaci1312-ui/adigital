import re

js = open("birbank-chunks/webpack-f6028e30ee1bf882.js", encoding="utf-8").read()

# Extract the full mapping object
m = re.search(r'\(\{2951:"([^"]+)"[^}]+\}\)\[e\]\|\|e\)\+"\."\(\(\{([^}]+)\}\)', js)
if m:
    print("prefix map:", m.group(1))
    inner = m.group(2)
    pairs = re.findall(r'(\d+):"([^"]+)"', inner)
    for k, v in pairs:
        if k == "2951":
            print(f"2951 -> 314af799.{v}.js maybe")

# Find hash for 2951 in second object
m2 = re.search(r'2951:"([^"]+)"', js)
print("2951 hash:", m2.group(1) if m2 else None)

# List all chunk filenames in webpack
hashes = re.findall(r'2951:"([a-f0-9]+)"', js)
print("all 2951 hashes:", hashes)

# Try to find module 23565
idx = js.find("23565")
print("23565 context:", js[max(0,idx-100):idx+200] if idx>=0 else "not found")
