"use client";

import { useCallback } from "react";
import { useBlurReveal } from "@/hooks/useBlurReveal";
import CustomButton from "@/components/ui/CustomButton";

type SectionTitleProps = {
  subtitle?: string;
  title: React.ReactNode;
  link?: { href: string; label: string };
  divider?: "top" | "bottom";
  animate?: "scroll";
  threshold?: number;
  end?: string;
  scrub?: boolean | number;
  className?: string;
};

export default function SectionTitle({
  subtitle,
  title,
  link,
  divider,
  animate = "scroll",
  threshold = 0.1,
  end,
  scrub = false,
  className = "",
}: SectionTitleProps) {
  const { ref: blurRef } = useBlurReveal({
    mode: animate,
    childSelector: "[data-anim-blur]",
    split: "words",
    stagger: 0.02,
    duration: 0.75,
    scrub,
    end,
    threshold,
    disabled: !animate,
  });

  const { ref: elementRef } = useBlurReveal({
    mode: animate,
    childSelector: "[data-anim-element]",
    split: null,
    stagger: 0.05,
    duration: 1,
    scrub,
    end,
    threshold,
    opacity: 0,
    disabled: !animate,
  });

  const setRefs = useCallback(
    (node: HTMLDivElement | null) => {
      blurRef.current = node;
      elementRef.current = node;
    },
    [blurRef, elementRef]
  );

  return (
    <div className={`relative container pt-15 sm:pt-30 ${className}`} ref={setRefs}>
      {divider === "top" && (
        <hr className="bg-gray border-gray mb-4 h-px w-full sm:mb-8" />
      )}
      {subtitle && (
        <p data-anim-blur="true" className="p1 text-dark-gray mb-4 sm:mb-8">
          {subtitle}
        </p>
      )}
      <div className="mb-10 flex flex-col justify-between gap-8 sm:mb-24 md:flex-row md:items-end">
        {link ? (
          <>
            <h2 data-anim-blur="true" className="h2 text-render inline sm:block">
              {title}
            </h2>
            <div data-anim-element="true" className="mb-2 w-fit">
              <CustomButton href={link.href}>{link.label}</CustomButton>
            </div>
          </>
        ) : (
          <h2 data-anim-blur="true" className="h2 text-render inline sm:block">
            {title}
          </h2>
        )}
      </div>
      {divider === "bottom" && <hr className="bg-gray border-gray h-px w-full" />}
    </div>
  );
}
