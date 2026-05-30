"use client";

import { useBlurReveal } from "@/hooks/useBlurReveal";

type BlurRevealProps = {
  children: React.ReactNode;
  mode?: "load" | "scroll";
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
  className?: string;
  as?: "div" | "section";
};

export default function BlurReveal({
  children,
  as: Tag = "div",
  className,
  ...options
}: BlurRevealProps) {
  const { ref } = useBlurReveal(options);

  return (
    <Tag ref={ref as React.RefObject<HTMLDivElement>} className={className}>
      {children}
    </Tag>
  );
}
