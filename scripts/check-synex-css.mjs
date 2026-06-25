import { chromium } from "playwright";

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto("http://localhost:3001/", { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(3000);

  const data = await page.evaluate(() => {
    const synex = document.querySelector(".synex-ai");
    const intro = document.querySelector(".synex-ai .p-home-intro");
    const title = document.querySelector(".synex-ai .home-inro-title");
    const sticky = document.querySelector(".synex-ai .home-intro-sticky");
    const img = document.querySelector(".synex-ai .home-intro-image.l1");

    const hasRule = [...document.styleSheets].some((sheet) => {
      try {
        return [...sheet.cssRules].some((rule) =>
          rule.cssText?.includes("home-inro-title")
        );
      } catch {
        return false;
      }
    });

    return {
      synexExists: !!synex,
      introExists: !!intro,
      hasSynexCssRule: hasRule,
      titleFont: title ? getComputedStyle(title).fontSize : null,
      titleColor: title ? getComputedStyle(title).color : null,
      introBg: intro ? getComputedStyle(intro).backgroundColor : null,
      introHeight: intro ? getComputedStyle(intro).height : null,
      stickyPosition: sticky ? getComputedStyle(sticky).position : null,
      imgWidth: img ? getComputedStyle(img).width : null,
      stylesheetHrefs: [...document.styleSheets].map((s) => s.href).filter(Boolean),
    };
  });

  console.log(JSON.stringify(data, null, 2));
  await browser.close();
})();
