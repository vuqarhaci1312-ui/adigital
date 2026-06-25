"use client";

import { type RefObject, useEffect } from "react";
import { useLenis } from "lenis/react";
import { gsap, registerGsap, ScrollTrigger } from "@/lib/gsap";
import { getAroothScroller } from "@/lib/arooth/aroothScrollTrigger";
import {
  connectLenisScrollTrigger,
  refreshScrollTriggers,
} from "@/lib/lenisScrollTrigger";

const DESKTOP_MIN = 992;
const MIN_VIEWPORT_HEIGHT = 586;

const DESKTOP_PIN_QUERY = `(min-width: ${DESKTOP_MIN + 1}px) and (min-height: ${MIN_VIEWPORT_HEIGHT}px) and (hover: hover) and (pointer: fine)`;

export function useServicesCard(sectionRef: RefObject<HTMLElement | null>) {
  const lenis = useLenis();

  useEffect(() => {
    registerGsap();
    if (!lenis) return;

    connectLenisScrollTrigger(lenis);

    const section = sectionRef.current;
    if (!section) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        desktop: DESKTOP_PIN_QUERY,
      },
      (context) => {
        const { desktop } = context.conditions ?? {};
        if (!desktop || !section) return;

        const ctx = gsap.context(() => {
          const scroller = getAroothScroller();
          const items = gsap.utils.toArray<HTMLElement>(
            section.querySelectorAll(".services-card--item"),
          );
          const endTrigger = section.nextElementSibling;

          items.forEach((item, index) => {
            ScrollTrigger.create({
              trigger: item,
              scroller,
              start: () => `top+=${item.offsetHeight / 2}px center`,
              end: "top bottom",
              pin: true,
              pinSpacing: false,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              endTrigger: endTrigger ?? section,
              id: `services-card-${index + 1}`,
            });
          });
        }, section);

        const refreshTimers = [
          window.setTimeout(refreshScrollTriggers, 100),
          window.setTimeout(refreshScrollTriggers, 500),
        ];

        return () => {
          refreshTimers.forEach((id) => window.clearTimeout(id));
          ctx.revert();
        };
      },
    );

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      mm.revert();
    };
  }, [sectionRef, lenis]);
}
