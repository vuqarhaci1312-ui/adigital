import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("http://localhost:3001/", { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(2000);

const data = await page.evaluate(() => {
  const btn = document.querySelector("header nav button");
  const logo = btn?.querySelector("a");
  const linksDiv = btn?.querySelector(".relative.flex");
  const btnRect = btn?.getBoundingClientRect();
  const logoRect = logo?.getBoundingClientRect();
  const linksDivRect = linksDiv?.getBoundingClientRect();
  const lastLink = linksDiv?.querySelector(".nav-hide:last-of-type")?.getBoundingClientRect();
  const style = btn ? getComputedStyle(btn) : null;
  const logoStyle = logo ? getComputedStyle(logo) : null;
  return {
    btnPaddingLeft: style?.paddingLeft,
    btnPaddingRight: style?.paddingRight,
    logoWidth: logoRect?.width,
    logoLinkWidth: logoStyle?.width,
    logoLeftOffset: logoRect && btnRect ? logoRect.left - btnRect.left : null,
    lastLinkRightOffset: lastLink && btnRect ? btnRect.right - lastLink.right : null,
    linksDivRightOffset: linksDivRect && btnRect ? btnRect.right - linksDivRect.right : null,
  };
});

console.log(JSON.stringify(data, null, 2));
await browser.close();
