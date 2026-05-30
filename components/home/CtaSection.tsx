"use client";

import Image from "next/image";
import BlurReveal from "@/components/ui/BlurReveal";
import CustomButton from "@/components/ui/CustomButton";
import { homeData } from "@/lib/data/home";

export default function CtaSection() {
  const { cta } = homeData;

  return (
    <BlurReveal
      as="section"
      threshold={0.6}
      childSelector="[data-anim-blur]"
      className="container"
    >
      <div className="relative h-[calc(var(--svh)*90)] portrait:h-[calc(var(--svh)*70)]">
        <div className="absolute top-0 left-0 z-10 flex h-full w-full flex-col justify-end gap-4 sm:gap-8 p-6 sm:p-12 text-white">
          <h2 data-anim-blur="true" className="h2 text-render inline sm:block">
            Growing Products by
            <span className="inline sm:hidden"> </span>
            <br className="hidden sm:inline" />
            Redefining Culture.
            <span className="inline sm:hidden"> </span>
          </h2>
          <CustomButton href={cta.buttonHref}>{cta.buttonLabel}</CustomButton>
        </div>
        <Image
          data-anim-blur="true"
          src={cta.image}
          alt={cta.alt}
          width={3840}
          height={2160}
          className="relative z-1 h-full w-full object-cover"
        />
      </div>
    </BlurReveal>
  );
}
