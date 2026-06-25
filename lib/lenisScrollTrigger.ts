import type Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";

let bridgeInstalled = false;

/**
 * Aligns ScrollTrigger with Lenis (thefinch uses ScrollSmoother + scrollerProxy).
 */
export function connectLenisScrollTrigger(lenis: Lenis) {
  if (bridgeInstalled) return;

  const scroller = document.documentElement;

  ScrollTrigger.scrollerProxy(scroller, {
    scrollTop(value) {
      if (arguments.length && typeof value === "number") {
        lenis.scrollTo(value, { immediate: true });
      }
      return lenis.scroll;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: "transform",
  });

  ScrollTrigger.defaults({ scroller: scroller });

  bridgeInstalled = true;
}

export function disconnectLenisScrollTrigger() {
  if (!bridgeInstalled) return;
  ScrollTrigger.scrollerProxy(document.documentElement, {});
  ScrollTrigger.defaults({ scroller: window });
  bridgeInstalled = false;
}

export function refreshScrollTriggers() {
  requestAnimationFrame(() => {
    ScrollTrigger.refresh();
  });
}
