"use client";

import { RefObject } from "react";
import { useLenis } from "lenis/react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsap } from "@/lib/gsap";
import { getAroothScroller } from "@/lib/arooth/aroothScrollTrigger";
import {
  refreshScrollTriggers,
} from "@/lib/lenisScrollTrigger";
import { splitTextPreserveStructure } from "@/lib/splitText";

function setupIntroScroll(introSection: HTMLElement) {
  const title = introSection.querySelector<HTMLElement>(".home-inro-title");
  const images = gsap.utils.toArray<HTMLElement>(
    introSection.querySelectorAll(".home-intro-image")
  );

  if (!title || images.length === 0) return;

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: introSection,
      scroller: getAroothScroller(),
      start: "top bottom",
      end: "bottom center",
      scrub: 0.8,
      invalidateOnRefresh: true,
    },
  });

  timeline.to(
    title,
    {
      scale: 0.5,
      ease: "none",
      duration: 0.22,
      immediateRender: false,
    },
    0.02
  );

  images.forEach((img) => {
    timeline.to(
      img,
      {
        x: 0,
        y: 0,
        xPercent: -50,
        yPercent: -50,
        scale: 0.8,
        ease: "none",
        duration: 0.07,
        immediateRender: false,
      },
      0.09
    );
  });

  const l6 = introSection.querySelector<HTMLElement>(".home-intro-image.l6");
  if (l6) {
    timeline.to(
      l6,
      {
        width: () => (window.innerWidth >= 992 ? 320 : 186),
        height: () => (window.innerWidth >= 992 ? 430 : 250),
        ease: "none",
        duration: 0.06,
        immediateRender: false,
      },
      0.16
    );
  }
}

function setupFeatureMotion(featureSection: HTMLElement) {
  const scroller = getAroothScroller();
  const scrollBase = {
    scroller,
    start: "top 80%",
    end: "top top",
    invalidateOnRefresh: true,
  };

  featureSection.querySelectorAll('[data-motion="fade-in"]').forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.6,
        ease: "power4.out",
        scrollTrigger: { ...scrollBase, trigger: el, once: true },
      }
    );
  });

  featureSection.querySelectorAll('[data-motion="title"]').forEach((el) => {
    if (!(el instanceof HTMLElement)) return;
    const lines = splitTextPreserveStructure([el], "lines");
    gsap.fromTo(
      lines,
      { yPercent: 30, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: { ...scrollBase, trigger: el, once: true },
      }
    );
  });

  const staggerItems = featureSection.querySelectorAll('[data-motion="stagger"]');
  if (staggerItems.length) {
    gsap.fromTo(
      staggerItems,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: {
          ...scrollBase,
          trigger: staggerItems[0],
          once: true,
        },
      }
    );
  }

  featureSection.querySelectorAll('[data-motion="count"]').forEach((el) => {
    if (!(el instanceof HTMLElement)) return;

    const inner = document.createElement("span");
    inner.style.display = "inline-block";
    inner.textContent = el.textContent ?? "";
    el.textContent = "";
    el.appendChild(inner);

    const chars = splitTextPreserveStructure([inner], "chars");
    chars.forEach((char) => {
      if (char instanceof HTMLElement) {
        const mask = document.createElement("span");
        mask.style.display = "inline-block";
        mask.style.overflow = "hidden";
        mask.style.verticalAlign = "bottom";
        char.parentNode?.insertBefore(mask, char);
        mask.appendChild(char);
      }
    });

    gsap.fromTo(
      chars,
      { yPercent: 100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: { ...scrollBase, trigger: el, once: true },
      }
    );
  });
}

export function useSynexAiAnimations(
  introRef: RefObject<HTMLElement | null>,
  featureRef: RefObject<HTMLElement | null>
) {
  const lenis = useLenis();

  useGSAP(
    () => {
      registerGsap();

      const introSection = introRef.current;
      const featureSection = featureRef.current;
      if (!introSection || !featureSection) return;

      setupIntroScroll(introSection);
      setupFeatureMotion(featureSection);
      refreshScrollTriggers();
    },
    { dependencies: [lenis] }
  );
}
