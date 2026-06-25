"use client";

import { useEffect, useRef } from "react";
import { ReactLenis, useLenis, type LenisRef } from "lenis/react";
import { gsap, ScrollTrigger, registerGsap } from "@/lib/gsap";
import {
  connectLenisScrollTrigger,
  disconnectLenisScrollTrigger,
  refreshScrollTriggers,
} from "@/lib/lenisScrollTrigger";

function ScrollTriggerLenisSync() {
  const lenis = useLenis();

  useEffect(() => {
    registerGsap();
    if (!lenis) return;

    connectLenisScrollTrigger(lenis);
    lenis.on("scroll", ScrollTrigger.update);
    refreshScrollTriggers();

    const onResize = () => refreshScrollTriggers();
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("orientationchange", onResize, { passive: true });
    window.visualViewport?.addEventListener("resize", onResize, { passive: true });

    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      disconnectLenisScrollTrigger();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
      window.visualViewport?.removeEventListener("resize", onResize);
    };
  }, [lenis]);

  return null;
}

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    registerGsap();

    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        autoRaf: false,
        syncTouch: false,
        smoothWheel: true,
        allowNestedScroll: true,
        prevent: (node) =>
          Boolean(node.closest?.(".services-card--carousel")),
      }}
    >
      <ScrollTriggerLenisSync />
      {children}
    </ReactLenis>
  );
}
