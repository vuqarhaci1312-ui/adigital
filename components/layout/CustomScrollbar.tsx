"use client";

import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import { gsap } from "@/lib/gsap";

function mapRange(
  inMin: number,
  inMax: number,
  input: number,
  outMin: number,
  outMax: number
) {
  return ((input - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

export default function CustomScrollbar() {
  const thumbRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackHeight, setTrackHeight] = useState(0);
  const [thumbHeight, setThumbHeight] = useState(0);
  const lenis = useLenis();

  useLenis(({ scroll, limit }) => {
    if (thumbRef.current && trackHeight && thumbHeight) {
      thumbRef.current.style.transform = `translate3d(0,${
        (scroll / limit) * (trackHeight - thumbHeight)
      }px,0)`;
    }
  }, [trackHeight, thumbHeight]);

  useEffect(() => {
    if (!trackRef.current) return;
    setTrackHeight(trackRef.current.clientHeight);
  }, []);

  useEffect(() => {
    const thumb = thumbRef.current;
    if (!thumb) return;
    setThumbHeight(thumb.clientHeight);

    let dragOffset: number | null = null;

    const onPointerDown = (event: PointerEvent) => {
      dragOffset = event.offsetY;
    };

    const onPointerMove = (event: PointerEvent) => {
      if (dragOffset === null || !lenis || !trackHeight) return;
      event.preventDefault();
      const y = mapRange(
        dragOffset,
        trackHeight - (thumbHeight - dragOffset),
        event.clientY,
        0,
        lenis.limit
      );
      lenis.scrollTo(y, { immediate: true });
    };

    const onPointerUp = () => {
      dragOffset = null;
    };

    thumb.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    return () => {
      thumb.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [lenis, trackHeight, thumbHeight]);

  return (
    <div className="fixed bottom-px right-px top-0 z-998 hidden sm:block">
      <div ref={trackRef} className="relative h-full">
        <div
          ref={thumbRef}
          className="scrollbar-thumb absolute right-0 min-h-[150px] w-[8px] cursor-grab bg-dark-gray/60 ring-2 ring-white/30 backdrop-blur-lg rounded-xs"
        />
      </div>
    </div>
  );
}
