import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

for (const url of ["http://localhost:8080/", "http://localhost:3001/"]) {
  await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(2500);

  const data = await page.evaluate(() => {
    const btn = document.querySelector("header nav button");
    const logo = btn?.querySelector("a");
    const links = [...(btn?.querySelectorAll(".nav-hide") || [])];
    const btnRect = btn?.getBoundingClientRect();
    const navRect = document.querySelector("header nav.span")?.getBoundingClientRect();
    const first = links[0]?.getBoundingClientRect();
    const last = links[links.length - 1]?.getBoundingClientRect();
    return {
      navWidth: navRect?.width,
      logoLeft: logo?.getBoundingClientRect().left - (btnRect?.left ?? 0),
      firstLinkLeft: first?.left,
      lastLinkRight: btnRect?.right - (last?.right ?? 0),
      linkLabels: links.map((l) => l.textContent?.trim()),
      linkWidths: links.map((l) => l.getBoundingClientRect().width),
      linksTotalWidth: links.reduce((sum, l) => sum + l.getBoundingClientRect().width, 0),
    };
  });

  console.log(`\n${url}`, JSON.stringify(data, null, 2));
}

await browser.close();
