import type Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";

let bridgeInstalled = false;
let activeScroller: Element | Window | undefined;

export function getActiveScroller() {
  if (typeof window === "undefined") return undefined;
  return activeScroller ?? window;
}

/**
 * Aligns ScrollTrigger with Lenis (thefinch uses ScrollSmoother + scrollerProxy).
 */
export function connectLenisScrollTrigger(lenis: Lenis) {
  if (bridgeInstalled) return;

  const scroller = document.documentElement;
  activeScroller = scroller;

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
    pinType: document.documentElement.style.transform ? "transform" : "fixed",
  });

  ScrollTrigger.defaults({ scroller });

  bridgeInstalled = true;
}

export function useNativeScrollTrigger() {
  activeScroller = typeof window !== "undefined" ? window : undefined;
  ScrollTrigger.normalizeScroll(true);
  ScrollTrigger.defaults({ scroller: window });
  bridgeInstalled = false;
}

export function disconnectLenisScrollTrigger() {
  if (!bridgeInstalled) return;
  ScrollTrigger.scrollerProxy(document.documentElement, {});
  ScrollTrigger.defaults({ scroller: window });
  activeScroller = typeof window !== "undefined" ? window : undefined;
  bridgeInstalled = false;
}

export function refreshScrollTriggers() {
  requestAnimationFrame(() => {
    ScrollTrigger.refresh();
  });
}
