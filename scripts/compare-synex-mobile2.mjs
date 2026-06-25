import { chromium } from "playwright";

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });

  for (const [url, label] of [
    ["https://synexsystem.webflow.io/", "orig"],
    ["http://localhost:3001/", "local"],
  ]) {
    await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
    await page.waitForTimeout(1500);
    await page.evaluate((l) => {
      const el = document.querySelector(l ? ".synex-ai .p-home-feature" : ".p-home-feature");
      el?.scrollIntoView({ block: "start" });
    }, label === "local");
    await page.waitForTimeout(800);

    const data = await page.evaluate(() => {
      const block = document.querySelector(".home-feature-block");
      const h3 = document.querySelector(".home-feature-block .h3-display");
      const h6 = document.querySelector(".h6-display");
      const title = document.querySelector(".h3-display.max-400");
      return {
        block: block ? getComputedStyle(block) : null,
        h3: h3 ? { fontSize: getComputedStyle(h3).fontSize, lineHeight: getComputedStyle(h3).lineHeight } : null,
        h6: h6 ? getComputedStyle(h6).fontSize : null,
        title: title ? getComputedStyle(title).fontSize : null,
      };
    });
    console.log(label, JSON.stringify({
      blockHeight: data.block?.height,
      blockPadding: data.block?.padding,
      h3: data.h3,
      h6: data.h6,
      title: data.title,
    }, null, 2));
  }
  await browser.close();
})();
