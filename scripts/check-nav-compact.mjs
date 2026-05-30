import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

for (const url of ["http://localhost:8080/", "http://localhost:3001/"]) {
  await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(2000);
  await page.evaluate(() => window.scrollTo(0, 100));
  await page.waitForTimeout(1500);

  const data = await page.evaluate(() => {
    const btn = document.querySelector("header nav button");
    const nav = document.querySelector("header nav.span");
    const logo = btn?.querySelector("a");
    const burger = btn?.querySelector(".absolute");
    const btnRect = btn?.getBoundingClientRect();
    const navRect = nav?.getBoundingClientRect();
    return {
      navWidth: navRect?.width,
      btnPaddingLeft: btn ? getComputedStyle(btn).paddingLeft : null,
      logoLeft: logo?.getBoundingClientRect().left - (btnRect?.left ?? 0),
      burgerRight: btnRect?.right - (burger?.getBoundingClientRect().right ?? 0),
      navSpan: nav ? getComputedStyle(nav).getPropertyValue("--span") : null,
    };
  });

  console.log(`\n${url} (scrolled)`, JSON.stringify(data, null, 2));
}

await browser.close();
