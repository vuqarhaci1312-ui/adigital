"use client";

import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsap } from "@/lib/gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const activeTargetRef = useRef<HTMLElement | null>(null);
  const currentLabelRef = useRef("");

  useGSAP(
    () => {
      registerGsap();
      const cursor = cursorRef.current;
      const label = labelRef.current;
      if (!cursor || !label) return;

      const mm = gsap.matchMedia();

      mm.add("(max-width: 768px)", () => {
        gsap.set(cursor, { display: "none" });
      });

      mm.add("(min-width: 769px)", () => {
        gsap.set(cursor, { display: "", xPercent: 6, yPercent: 140, opacity: 0 });

        const moveX = gsap.quickTo(cursor, "x", { ease: "power3" });
        const moveY = gsap.quickTo(cursor, "y", { ease: "power3" });

        const onMouseMove = (event: MouseEvent) => {
          const width = window.innerWidth;
          const height = window.innerHeight;
          const scrollY = window.scrollY;
          let xPercent = 6;
          let yPercent = 140;

          if (event.clientX > width - (cursor.offsetWidth + 16)) xPercent = -100;
          if (event.clientY + scrollY > scrollY + height * 0.9) yPercent = -120;

          if (activeTargetRef.current) {
            const text = activeTargetRef.current.getAttribute("data-cursor");
            if (text !== currentLabelRef.current) {
              label.innerHTML = text || "";
              currentLabelRef.current = text || "";
            }
          }

          gsap.to(cursor, { xPercent, yPercent, duration: 0.9, ease: "power3" });
          moveX(event.clientX);
          moveY(event.clientY);
        };

        const onEnter = (event: Event) => {
          const target = event.currentTarget as HTMLElement;
          activeTargetRef.current = target;
          const text = target.getAttribute("data-cursor");
          if (text !== currentLabelRef.current) {
            label.innerHTML = text || "";
            currentLabelRef.current = text || "";
          }
          gsap.to(cursor, { opacity: 1, duration: 0.3, ease: "power3" });
        };

        const onLeave = () => {
          activeTargetRef.current = null;
          gsap.to(cursor, { opacity: 0, duration: 0.3, ease: "power3" });
        };

        const bindCursorTargets = () => {
          document.querySelectorAll("[data-cursor]").forEach((el) => {
            el.removeEventListener("mouseenter", onEnter);
            el.removeEventListener("mouseleave", onLeave);
            el.addEventListener("mouseenter", onEnter);
            el.addEventListener("mouseleave", onLeave);
          });
        };

        bindCursorTargets();
        const observer = new MutationObserver(bindCursorTargets);
        observer.observe(document.body, { childList: true, subtree: true });
        window.addEventListener("mousemove", onMouseMove);

        return () => {
          window.removeEventListener("mousemove", onMouseMove);
          observer.disconnect();
          document.querySelectorAll("[data-cursor]").forEach((el) => {
            el.removeEventListener("mouseenter", onEnter);
            el.removeEventListener("mouseleave", onLeave);
          });
        };
      });

      return () => mm.revert();
    },
    { dependencies: [] }
  );

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none top-0 left-0 bg-blue text-white px-2 py-1 z-999"
    >
      <p ref={labelRef} className="p2">
        Learn More
      </p>
    </div>
  );
}
