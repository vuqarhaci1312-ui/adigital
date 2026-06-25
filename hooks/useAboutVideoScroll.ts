import { gsap } from "@/lib/gsap";
import { getAroothScroller } from "@/lib/arooth/aroothScrollTrigger";

function getRemPx() {
  return parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
}

function getVhPx(ratio: number) {
  return (ratio / 100) * window.innerHeight;
}

/** Webflow a-27 — video left of stat card, then expands full width on scroll */
export function setupAboutVideoScroll(
  vhWrap: Element,
  videoWrap: HTMLElement
) {
  gsap.set(videoWrap, {
    y: () => -19.375 * getRemPx(),
    width: "39%",
    height: () => getVhPx(25),
    transformOrigin: "50% 50%",
    force3D: true,
  });

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: vhWrap,
      scroller: getAroothScroller(),
      start: "top bottom",
      end: "bottom top",
      scrub: 0.9,
      invalidateOnRefresh: true,
    },
  });

  timeline
    .to(
      videoWrap,
      {
        y: 0,
        width: "39%",
        height: () => getVhPx(25),
        ease: "none",
        duration: 0.42,
      },
      0
    )
    .to(
      videoWrap,
      {
        y: 0,
        width: "100%",
        height: () => getVhPx(75),
        ease: "none",
        duration: 0.25,
      },
      0.42
    )
    .to({}, { duration: 0.33 }, 0.67);

  return timeline;
}
