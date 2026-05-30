import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
await page.goto("http://localhost:3001/", { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(2500);

const data = await page.evaluate(() => {
  const btn = document.querySelector("header nav button");
  const btnRect = btn?.getBoundingClientRect();
  const logo = btn?.querySelector("a");
  const burger = btn?.querySelector(".absolute");
  return {
    btnPaddingLeft: btn ? getComputedStyle(btn).paddingLeft : null,
    logoLeft: logo?.getBoundingClientRect().left - (btnRect?.left ?? 0),
    burgerRight: btnRect?.right - (burger?.getBoundingClientRect().right ?? 0),
    navWidth: document.querySelector("header nav.span")?.getBoundingClientRect().width,
  };
});

console.log(JSON.stringify(data, null, 2));
await browser.close();
