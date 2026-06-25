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

    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      disconnectLenisScrollTrigger();
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
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      <ScrollTriggerLenisSync />
      {children}
    </ReactLenis>
  );
}
