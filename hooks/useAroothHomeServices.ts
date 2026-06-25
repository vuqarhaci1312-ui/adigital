"use client";

import { type RefObject, useEffect } from "react";
import { gsap, registerGsap } from "@/lib/gsap";

export function useAroothHomeServices(
  sectionRef: RefObject<HTMLElement | null>,
  activeIndex: number,
) {
  useEffect(() => {
    registerGsap();
    const section = sectionRef.current;
    if (!section) return;

    const serialTrigger = section.querySelector<HTMLElement>(".serial-single-number-trigger");
    const iconsTrigger = section.querySelector<HTMLElement>(".service-icons-trigger");
    const buttonsTrigger = section.querySelector<HTMLElement>(".service-buttons-trigger");
    if (!serialTrigger || !iconsTrigger || !buttonsTrigger) return;

    const offset = activeIndex * 100;

    gsap.to(serialTrigger, {
      y: `${-offset}%`,
      duration: 0.5,
      ease: "power1.inOut",
    });
    gsap.to(iconsTrigger, {
      x: `${-offset}%`,
      duration: 0.5,
      ease: "power1.inOut",
    });
    gsap.to(buttonsTrigger, {
      y: `${-offset}%`,
      duration: 0.5,
      ease: "power1.inOut",
    });
  }, [activeIndex, sectionRef]);
}
