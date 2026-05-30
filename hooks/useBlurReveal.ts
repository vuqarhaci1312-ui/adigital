"use client";

import { useCallback, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsap } from "@/lib/gsap";
import { splitTextPreserveStructure } from "@/lib/splitText";

type BlurRevealMode = "load" | "scroll" | "list";

type UseBlurRevealOptions = {
  mode?: BlurRevealMode;
  blur?: number;
  opacity?: number;
  duration?: number;
  stagger?: number;
  delay?: number;
  threshold?: number;
  childSelector?: string;
  split?: "words" | "lines" | "chars" | null;
  scrub?: boolean | number;
  end?: string;
  disabled?: boolean;
};

export function useBlurReveal({
  mode = "scroll",
  blur = 10,
  opacity = 0,
  duration = 0.8,
  stagger = 0.1,
  delay = 0,
  threshold = 0.1,
  childSelector,
  split,
  scrub = false,
  end,
  disabled = false,
}: UseBlurRevealOptions = {}) {
  const ref = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      registerGsap();
      const container = ref.current;
      if (!container || disabled) return;

      let cancelled = false;
      let revertMatchMedia: (() => void) | undefined;

      const setup = () => {
        if (cancelled) return;

        const mm = gsap.matchMedia();
        mm.add(
          {
            isDesktop: "(min-width: 0rem)",
            prefersReducedMotion: "(prefers-reduced-motion: reduce)",
          },
          (context) => {
            if (context.conditions?.prefersReducedMotion) return;

            let targets: Element[] = childSelector
              ? gsap.utils.toArray<Element>(container.querySelectorAll(childSelector))
              : [container];

            if (targets.length === 0) return;

            const headingTags = [
              "H1",
              "H2",
              "H3",
              "H4",
              "H5",
              "H6",
              "P",
              "SPAN",
              "BLOCKQUOTE",
              "A",
              "LI",
              "LABEL",
            ];

            if (
              split !== null &&
              (split || targets.some((el) => headingTags.includes(el.tagName)))
            ) {
              const splitTargets = splitTextPreserveStructure(
                targets,
                split || "lines"
              );
              if (splitTargets.length > 0) targets = splitTargets;
            }

            if (mode === "load") {
              gsap.fromTo(
                targets,
                { opacity, filter: `blur(${blur}px)`, y: 50 },
                {
                  opacity: 1,
                  filter: "blur(0px)",
                  y: 0,
                  duration,
                  stagger,
                  delay,
                  ease: "power2.out",
                }
              );
            } else if (mode === "scroll") {
              const scrollConfig: Record<string, unknown> = {
                trigger: container,
                start: `top ${100 - 100 * threshold}%`,
              };

              if (scrub) {
                scrollConfig.scrub = scrub;
                scrollConfig.end = end || "bottom 60%";
              } else {
                scrollConfig.toggleActions = "play none none reverse";
                if (end) scrollConfig.end = end;
              }

              gsap.fromTo(
                targets,
                { opacity, filter: `blur(${blur}px)`, y: 50 },
                {
                  opacity: 1,
                  filter: "blur(0px)",
                  y: 0,
                  duration,
                  stagger,
                  delay,
                  ease: "power2.out",
                  scrollTrigger: scrollConfig,
                }
              );
            } else if (mode === "list") {
              const items = childSelector ? targets : Array.from(container.children);

              items.forEach((item) => {
                item.addEventListener("mouseenter", () => {
                  gsap.to(item, {
                    opacity: 1,
                    filter: "blur(0px)",
                    duration: 0.4,
                    ease: "power2.out",
                    overwrite: "auto",
                  });
                  const others = items.filter((el) => el !== item);
                  gsap.to(others, {
                    opacity,
                    filter: `blur(${blur}px)`,
                    duration: 0.4,
                    ease: "power2.out",
                    overwrite: "auto",
                  });
                });

                item.addEventListener("mouseleave", () => {
                  gsap.to(items, {
                    opacity: 1,
                    filter: "blur(0px)",
                    duration: 0.4,
                    ease: "power2.out",
                    overwrite: "auto",
                  });
                });
              });
            }
          }
        );

        revertMatchMedia = () => mm.revert();
      };

      if (document.fonts?.ready) {
        document.fonts.ready.then(() => {
          if (!cancelled) setup();
        });
      } else {
        setup();
      }

      return () => {
        cancelled = true;
        revertMatchMedia?.();
      };
    },
    {
      scope: ref,
      dependencies: [
        mode,
        blur,
        opacity,
        duration,
        stagger,
        delay,
        threshold,
        childSelector,
        split,
        scrub,
        end,
        disabled,
      ],
    }
  );

  const setRef = useCallback((node: HTMLElement | null) => {
    ref.current = node;
  }, []);

  return { ref, setRef };
}
