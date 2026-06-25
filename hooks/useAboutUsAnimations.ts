"use client";

import { RefObject } from "react";
import { useLenis } from "lenis/react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsap } from "@/lib/gsap";
import { getAroothScroller } from "@/lib/arooth/aroothScrollTrigger";
import {
  connectLenisScrollTrigger,
  refreshScrollTriggers,
} from "@/lib/lenisScrollTrigger";
import { setupAboutVideoScroll } from "@/hooks/useAboutVideoScroll";

function getScrollTriggerBase() {
  return {
    scroller: getAroothScroller(),
    invalidateOnRefresh: true,
  };
}
function animateSlideIn(
  elements: NodeListOf<Element>,
  axis: "left" | "bottom"
) {
  elements.forEach((el) => {
    gsap.set(el, {
      x: axis === "left" ? -30 : 0,
      y: axis === "bottom" ? 30 : 0,
      opacity: 0,
      filter: "blur(5px)",
    });

    gsap.to(el, {
      x: 0,
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.5,
      delay: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        ...getScrollTriggerBase(),
        trigger: el,
        start: "top 85%",
        once: true,
      },
    });
  });
}

function animateCounter(counterEl: Element) {
  const rowOnes = counterEl.querySelectorAll(".counter-number-row._1");
  const rowTwos = counterEl.querySelectorAll(".counter-number-row._2");

  gsap.set([...rowOnes, ...rowTwos], { y: 0 });

  const tl = gsap.timeline({
    scrollTrigger: {
      ...getScrollTriggerBase(),
      trigger: counterEl,
      start: "top 85%",
      once: true,
    },
  });

  rowOnes.forEach((row) => {
    tl.to(
      row,
      {
        y: "-600%",
        duration: 2.5,
        ease: "power4.out",
      },
      0
    );
  });

  rowTwos.forEach((row) => {
    tl.to(
      row,
      {
        y: "-800%",
        duration: 2.5,
        ease: "power4.inOut",
      },
      0.2
    );
  });
}

export function useAboutUsAnimations(
  scopeRef: RefObject<HTMLElement | null>
) {
  const lenis = useLenis();

  useGSAP(
    () => {
      registerGsap();
      const root = scopeRef.current;
      if (!root) return;

      if (lenis) connectLenisScrollTrigger(lenis);

      const mm = gsap.matchMedia();

      animateSlideIn(
        root.querySelectorAll('[data-about-animate="slide-left"]'),
        "left"
      );
      animateSlideIn(
        root.querySelectorAll('[data-about-animate="slide-bottom"]'),
        "bottom"
      );

      root.querySelectorAll("[data-about-counter]").forEach(animateCounter);

      const awardWrap = root.querySelector(".about-award-count-wrap");
      let removeMouseListener: (() => void) | undefined;

      if (awardWrap) {
        const arrowOne = awardWrap.querySelector(".award-count-arrow-wrap.one");
        const arrowTwo = awardWrap.querySelector(".award-count-arrow-wrap.two");

        if (arrowOne && arrowTwo) {
          const moveArrowOne = gsap.quickTo(arrowOne, "x", {
            duration: 0.5,
            ease: "power3.out",
          });
          const moveArrowTwo = gsap.quickTo(arrowTwo, "x", {
            duration: 0.5,
            ease: "power3.out",
          });

          const onMouseMove = (event: Event) => {
            const mouseEvent = event as MouseEvent;
            const rect = awardWrap.getBoundingClientRect();
            const progress = (mouseEvent.clientX - rect.left) / rect.width;
            const clamped = Math.min(Math.max(progress, 0), 1);
            moveArrowOne(gsap.utils.interpolate(20, -20, clamped));
            moveArrowTwo(gsap.utils.interpolate(-20, 20, clamped));
          };

          awardWrap.addEventListener("mousemove", onMouseMove);
          removeMouseListener = () => {
            awardWrap.removeEventListener("mousemove", onMouseMove);
          };
        }
      }

      mm.add("(min-width: 992px)", () => {
        const vhWrap = root.querySelector(".about-vh-wrap");
        const videoWrap = root.querySelector<HTMLElement>(".about-video-wrap");
        if (!vhWrap || !videoWrap) return;

        const tl = setupAboutVideoScroll(vhWrap, videoWrap);
        refreshScrollTriggers();

        return () => {
          tl.scrollTrigger?.kill();
          tl.kill();
          gsap.set(videoWrap, { clearProps: "all" });
        };
      });

      return () => {
        removeMouseListener?.();
        mm.revert();
      };
    },
    { scope: scopeRef, dependencies: [scopeRef, lenis] }
  );
}
