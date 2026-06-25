/** Compare Synex intro section vs local implementation */
import { chromium } from "playwright";

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  async function inspect(url, label) {
    await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
    await page.waitForTimeout(2000);

    if (label === "local") {
      // scroll to synex section
      await page.evaluate(() => {
        const el = document.querySelector(".synex-ai .p-home-intro");
        if (el) el.scrollIntoView({ block: "start" });
      });
      await page.waitForTimeout(1500);
    } else {
      await page.evaluate(() => {
        const el = document.querySelector(".p-home-intro");
        if (el) el.scrollIntoView({ block: "start" });
      });
      await page.waitForTimeout(1500);
    }

    const data = await page.evaluate(() => {
      const intro = document.querySelector(".p-home-intro");
      const title = document.querySelector(".home-inro-title");
      const sticky = document.querySelector(".home-intro-sticky");
      const images = [...document.querySelectorAll(".home-intro-image")].map((img, i) => {
        const r = img.getBoundingClientRect();
        const cs = getComputedStyle(img);
        return {
          i,
          cls: img.className,
          rect: { x: r.x, y: r.y, w: r.width, h: r.height },
          transform: cs.transform,
          opacity: cs.opacity,
          display: cs.display,
          visibility: cs.visibility,
        };
      });

      const titleRect = title?.getBoundingClientRect();
      const titleCs = title ? getComputedStyle(title) : null;
      const introCs = intro ? getComputedStyle(intro) : null;
      const stickyCs = sticky ? getComputedStyle(sticky) : null;

      return {
        intro: intro
          ? {
              h: intro.offsetHeight,
              bg: introCs?.backgroundColor,
              overflow: introCs?.overflow,
              position: introCs?.position,
            }
          : null,
        sticky: sticky
          ? {
              h: sticky.offsetHeight,
              position: stickyCs?.position,
              top: stickyCs?.top,
            }
          : null,
        title: title
          ? {
              text: title.textContent?.trim(),
              fontSize: titleCs?.fontSize,
              color: titleCs?.color,
              transform: titleCs?.transform,
              zIndex: titleCs?.zIndex,
              rect: titleRect
                ? { x: titleRect.x, y: titleRect.y, w: titleRect.width, h: titleRect.height }
                : null,
            }
          : null,
        images,
        scrollY: window.scrollY,
      };
    });

    console.log(`\n===== ${label} =====`);
    console.log(JSON.stringify(data, null, 2));
    await page.screenshot({
      path: `c:/Users/hmc/Downloads/www.new.studio/scripts/synex-compare-${label}.png`,
      fullPage: false,
    });
  }

  await inspect("https://synexsystem.webflow.io/", "original");
  await inspect("http://localhost:3001/", "local");

  await browser.close();
})();
