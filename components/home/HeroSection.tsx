"use client";

import { useGSAP } from "@gsap/react";
import { gsap, registerGsap } from "@/lib/gsap";
import { useBlurReveal } from "@/hooks/useBlurReveal";
import HeroCanvas from "@/components/home/HeroCanvas";
import { homeData } from "@/lib/data/home";

export default function HeroSection() {
  const { ref } = useBlurReveal({
    mode: "load",
    delay: 0.5,
    split: "words",
    stagger: 0.05,
    duration: 1,
    childSelector: "[data-anim-blur]",
  });

  useGSAP(() => {
    registerGsap();
    if (!ref.current) return;
    gsap.fromTo(
      ref.current,
      { opacity: 0, filter: "blur(10px)" },
      {
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        delay: 0.25,
        ease: "power2.out",
      }
    );
  });

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="h-(--full-height) w-full overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 z-1 w-full -translate-x-1/2 -translate-y-1/2 px-5 text-center text-white flex justify-center items-center">
        <h1 data-anim-blur="true" className="h1 text-render inline sm:block w-fit">
          <em>{homeData.hero.titleLine1Em}</em>
          {homeData.hero.titleLine1Rest}
          <span className="inline sm:hidden"> </span>
          <br className="hidden sm:inline" />
          {homeData.hero.titleLine2Before}
          <em>{homeData.hero.titleLine2Em}</em>
          {homeData.hero.titleLine2Rest}
          <span className="inline sm:hidden"> </span>
        </h1>
      </div>
      <div className="absolute bottom-8 left-1/2 z-1 w-full -translate-x-1/2 px-5 text-center text-white">
        <p data-anim-blur="true" className="p1">
          {homeData.hero.subtitle}
        </p>
      </div>
      <HeroCanvas className="z-0 overflow-hidden w-full h-full" />
    </section>
  );
}
