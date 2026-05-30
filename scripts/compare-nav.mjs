import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

for (const url of ["http://localhost:8080/", "http://localhost:3000/"]) {
  await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForTimeout(2000);

  const data = await page.evaluate(() => {
    const btn = document.querySelector("header nav button");
    const btnStyle = btn ? getComputedStyle(btn) : null;
    const logo = btn?.querySelector("a");
    const linksDiv = btn?.querySelector(".relative.flex");
    const links = [...(linksDiv?.querySelectorAll(".nav-hide") || [])];
    const burger = linksDiv?.querySelector(".absolute");
    const nav = document.querySelector("header nav.span");
    const btnRect = btn?.getBoundingClientRect();
    const logoRect = logo?.getBoundingClientRect();
    const linksDivRect = linksDiv?.getBoundingClientRect();
    const firstLink = links[0]?.getBoundingClientRect();
    const lastLink = links[links.length - 1]?.getBoundingClientRect();
    const burgerRect = burger?.getBoundingClientRect();
    const navRect = nav?.getBoundingClientRect();

    return {
      btnClass: btn?.className,
      paddingInline: btnStyle?.paddingInline,
      navWidth: navRect?.width,
      btnPaddingLeft: btn ? parseFloat(getComputedStyle(btn).paddingLeft) : null,
      btnPaddingRight: btn ? parseFloat(getComputedStyle(btn).paddingRight) : null,
      logoLeftOffset: logoRect && btnRect ? logoRect.left - btnRect.left : null,
      linksDivRightOffset: linksDivRect && btnRect ? btnRect.right - linksDivRect.right : null,
      firstLinkLeft: firstLink?.left,
      lastLinkRightOffset: lastLink && btnRect ? btnRect.right - lastLink.right : null,
      burgerRightOffset: burgerRect && btnRect ? btnRect.right - burgerRect.right : null,
      burgerWidth: burgerRect?.width,
      linksDivWidth: linksDivRect?.width,
    };
  });

  console.log(`\n${url}`);
  console.log(JSON.stringify(data, null, 2));
}

await browser.close();
