"use client";

import { type RefObject, useEffect } from "react";
import { useLenis } from "lenis/react";
import { gsap, registerGsap, ScrollTrigger } from "@/lib/gsap";

const DESKTOP_MIN = 992;

function scrollToSection(
  element: HTMLElement,
  lenis: { scrollTo: (target: number, options?: { duration?: number }) => void } | null | undefined
) {
  const top = element.getBoundingClientRect().top + window.scrollY - 100;
  if (lenis) {
    lenis.scrollTo(top, { duration: 0.8 });
  } else {
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export function useServiceGridCard(sectionRef: RefObject<HTMLElement | null>) {
  const lenis = useLenis();

  useEffect(() => {
    registerGsap();

    const section = sectionRef.current;
    if (!section) return;

    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const target = section.querySelector<HTMLElement>(`#${hash}`);
      if (target) {
        const scrollTarget = () => scrollToSection(target, lenis);
        requestAnimationFrame(scrollTarget);
        window.setTimeout(scrollTarget, 400);
      }
    }

    if (window.innerWidth <= DESKTOP_MIN) return;

    const links = section.querySelectorAll<HTMLAnchorElement>(
      ".service-grid-card--bar p a"
    );
    const wrappers = section.querySelectorAll<HTMLElement>(
      ".service-grid-card--wrapper"
    );
    const bar = section.querySelector<HTMLElement>(".service-grid-card--bar");

    if (!bar || !links.length) return;

    gsap.set(bar, { autoAlpha: 0 });

    const setActive = (index: string) => {
      links.forEach((link) => {
        link.classList.toggle("active", link.dataset.index === index);
      });
    };

    const onLinkClick = (e: Event) => {
      e.preventDefault();
      const link = e.currentTarget as HTMLAnchorElement;
      const index = link.dataset.index;
      if (!index) return;
      const target = section.querySelector<HTMLElement>(
        `.service-grid-card--wrapper[data-index="${index}"]`
      );
      if (!target) return;
      setActive(index);
      scrollToSection(target, lenis);
    };

    links.forEach((link) => link.addEventListener("click", onLinkClick));
    setActive("0");

    const ctx = gsap.context(() => {
      wrappers.forEach((wrapper) => {
        ScrollTrigger.create({
          trigger: wrapper,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActive(wrapper.dataset.index ?? "0"),
          onEnterBack: () => setActive(wrapper.dataset.index ?? "0"),
        });
      });

      ScrollTrigger.create({
        trigger: bar,
        start: "bottom bottom-=30",
        end: () => `+=${Math.max(section.offsetHeight - 200, 0)}`,
        pin: true,
        pinSpacing: false,
        onEnter: () => {
          gsap.to(bar, { autoAlpha: 1, duration: 0.3 });
        },
        onLeave: () => {
          gsap.to(bar, { autoAlpha: 0, duration: 0.3 });
        },
        onEnterBack: () => {
          gsap.to(bar, { autoAlpha: 1, duration: 0.3 });
        },
        onLeaveBack: () => {
          gsap.to(bar, { autoAlpha: 0, duration: 0.3 });
        },
      });
    }, section);

    return () => {
      links.forEach((link) => link.removeEventListener("click", onLinkClick));
      ctx.revert();
    };
  }, [sectionRef, lenis]);
}
