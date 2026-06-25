"use client";

import { type RefObject, useEffect } from "react";
import { gsap, registerGsap, ScrollTrigger } from "@/lib/gsap";
import { refreshScrollTriggers } from "@/lib/lenisScrollTrigger";
import { splitDataTitle } from "@/lib/splitDataTitle";

const DESKTOP_MIN = 992;

/**
 * thefinch non-home pages (class `u` in app.js): section [data-bgcolor] backgrounds
 * + [data-title] reveal triggered on the section at top top+=60%.
 */
export function useServiceDetailTitles(
  rootRef: RefObject<HTMLElement | null>
) {
  useEffect(() => {
    registerGsap();
    const root = rootRef.current;
    if (!root) return;

    const reverts: Array<() => void> = [];
    const sections = Array.from(
      root.querySelectorAll<HTMLElement>("section[data-bgcolor]")
    );

    root.style.background = "#fff";

    sections.forEach((section) => {
      const bg = section.dataset.bgcolor;
      if (bg) section.style.background = bg;
    });

    let cancelled = false;
    let revertMm: (() => void) | undefined;

    const setup = () => {
      if (cancelled || !root) return;

      const mm = gsap.matchMedia();
      revertMm = () => mm.revert();

      mm.add(`(min-width: ${DESKTOP_MIN + 1}px)`, () => {
        const ctx = gsap.context(() => {
          sections.forEach((section) => {
            const titles = section.querySelectorAll<HTMLElement>("[data-title]");
            if (!titles.length) return;

            titles.forEach((titleEl) => {
              const { words, revert } = splitDataTitle(titleEl);
              reverts.push(revert);

              gsap.set(words, {
                opacity: 0,
                y: "100%",
                rotation: 3,
              });

              ScrollTrigger.create({
                trigger: section,
                start: "top top+=60%",
                end: "top top+=60%",
                onEnter: () => {
                  gsap.to(words, {
                    opacity: 1,
                    y: "0%",
                    rotation: 0,
                    duration: 0.4,
                    stagger: 0.001,
                    ease: "power2.out",
                  });
                },
                onEnterBack: () => {
                  gsap.to(words, {
                    opacity: 0,
                    y: "100%",
                    rotation: 3,
                    ease: "power2.out",
                  });
                },
              });
            });
          });
        }, root);

        const refreshTimers = [
          window.setTimeout(refreshScrollTriggers, 100),
          window.setTimeout(refreshScrollTriggers, 500),
        ];

        return () => {
          refreshTimers.forEach((id) => window.clearTimeout(id));
          ctx.revert();
        };
      });

      mm.add(`(max-width: ${DESKTOP_MIN}px)`, () => {
        root.querySelectorAll<HTMLElement>("[data-title]").forEach((el) => {
          gsap.set(el, { opacity: 1, clearProps: "transform" });
        });
      });
    };

    if (document.fonts?.ready) {
      document.fonts.ready.then(setup);
    } else {
      setup();
    }

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      cancelled = true;
      window.removeEventListener("resize", onResize);
      revertMm?.();
      reverts.forEach((fn) => fn());
    };
  }, [rootRef]);
}
