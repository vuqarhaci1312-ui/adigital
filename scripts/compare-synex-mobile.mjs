import { chromium } from "playwright";

const MOBILE = { width: 390, height: 844 };

async function inspect(page, label, isLocal) {
  await page.setViewportSize(MOBILE);
  await page.goto(isLocal ? "http://localhost:3001/" : "https://synexsystem.webflow.io/", {
    waitUntil: "networkidle",
    timeout: 60000,
  });
  await page.waitForTimeout(2000);

  await page.evaluate((local) => {
    const sel = local ? ".synex-ai .p-home-intro" : ".p-home-intro";
    const el = document.querySelector(sel);
    if (el) el.scrollIntoView({ block: "start" });
  }, isLocal);
  await page.waitForTimeout(1200);

  const data = await page.evaluate(() => {
    const intro = document.querySelector(".p-home-intro");
    const feature = document.querySelector(".p-home-feature");
    const title = document.querySelector(".home-inro-title");
    const images = [...document.querySelectorAll(".home-intro-image")].slice(0, 2);
    const statWrap = document.querySelector(".feature-list-wrap");
    const blocks = [...document.querySelectorAll(".home-feature-block")];

    const cs = (el) => (el ? getComputedStyle(el) : null);
    return {
      intro: intro
        ? {
            h: intro.offsetHeight,
            height: cs(intro)?.height,
            bg: cs(intro)?.backgroundColor,
          }
        : null,
      sticky: document.querySelector(".home-intro-sticky")
        ? {
            h: document.querySelector(".home-intro-sticky").offsetHeight,
            position: cs(document.querySelector(".home-intro-sticky"))?.position,
          }
        : null,
      title: title
        ? {
            fontSize: cs(title)?.fontSize,
            lineHeight: cs(title)?.lineHeight,
            rect: title.getBoundingClientRect(),
          }
        : null,
      images: images.map((img) => ({
        cls: img.className,
        w: cs(img)?.width,
        h: cs(img)?.height,
        transform: cs(img)?.transform,
        rect: img.getBoundingClientRect(),
      })),
      feature: feature
        ? {
            paddingTop: cs(document.querySelector(".home-feature-wrap"))?.paddingTop,
          }
        : null,
      statWrap: statWrap
        ? {
            display: cs(statWrap)?.display,
            flexDirection: cs(statWrap)?.flexDirection,
            gridCols: cs(statWrap)?.gridTemplateColumns,
            overflow: cs(statWrap)?.overflow,
            scrollWidth: statWrap.scrollWidth,
            clientWidth: statWrap.clientWidth,
          }
        : null,
      blocks: blocks.map((b) => ({
            w: b.getBoundingClientRect().width,
            h: b.getBoundingClientRect().height,
          })),
    };
  });

  console.log(`\n===== ${label} MOBILE =====`);
  console.log(JSON.stringify(data, null, 2));
  await page.screenshot({
    path: `c:/Users/hmc/Downloads/www.new.studio/scripts/synex-mobile-${label}.png`,
    fullPage: false,
  });
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await inspect(page, "original", false);
  await inspect(page, "local", true);
  await browser.close();
})();
