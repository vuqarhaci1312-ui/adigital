"use client";

import { type RefObject, useEffect } from "react";
import { gsap, registerGsap } from "@/lib/gsap";
import { refreshScrollTriggers } from "@/lib/lenisScrollTrigger";

const DESKTOP_MIN = 992;

/** thefinch [data-consulting-process] — card scrub + SVG path draw (DrawSVG → strokeDashoffset). */
export function useConsultingProcess(
  sectionRef: RefObject<HTMLElement | null>
) {
  useEffect(() => {
    registerGsap();
    const section = sectionRef.current;
    if (!section) return;

    const mm = gsap.matchMedia();

    mm.add(`(min-width: ${DESKTOP_MIN + 1}px)`, () => {
      const ctx = gsap.context(() => {
        const cards = gsap.utils.toArray<HTMLElement>(
          section.querySelectorAll(".consulting-process--wrapper-card")
        );

        cards.forEach((card) => {
          const path = card.querySelector<SVGPathElement>(
            ".consulting-process--wrapper-card-img svg path"
          );

          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
              end: "bottom center",
              scrub: 1,
              toggleActions: "play none none reverse",
            },
          });

          timeline.from(card, {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
          });

          if (path) {
            const length = path.getTotalLength();
            gsap.set(path, {
              strokeDasharray: length,
              strokeDashoffset: length,
              visibility: "visible",
            });

            timeline.to(path, {
              strokeDashoffset: 0,
              duration: 1,
              ease: "power2.inOut",
            });
          }
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
    });

    return () => mm.revert();
  }, [sectionRef]);
}
