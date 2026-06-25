import type Lenis from "lenis";
import { connectLenisScrollTrigger } from "@/lib/lenisScrollTrigger";

export function getAroothScroller() {
  return document.documentElement;
}

export function ensureLenisScrollTrigger(lenis: Lenis | undefined) {
  if (!lenis) return false;
  connectLenisScrollTrigger(lenis);
  return true;
}

export function getAroothScrollTriggerBase(lenis: Lenis | undefined) {
  ensureLenisScrollTrigger(lenis);

  return {
    scroller: getAroothScroller(),
    start: "top top",
    end: "bottom bottom",
    scrub: 0.9,
    invalidateOnRefresh: true,
  } as const;
}
