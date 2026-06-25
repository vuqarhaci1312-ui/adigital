"use client";

import { useEffect } from "react";

function updateViewportUnits() {
  const root = document.documentElement;
  const height = window.innerHeight;
  root.style.setProperty("--dvh", `${height * 0.01}px`);
  root.style.setProperty("--svh", `${root.clientHeight * 0.01}px`);
  root.style.setProperty("--lvh", "1vh");
  root.style.setProperty("--full-height", `${height}px`);
}

export default function ViewportUnitsUpdater() {
  useEffect(() => {
    updateViewportUnits();

    const onResize = () => updateViewportUnits();
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("orientationchange", onResize, { passive: true });
    window.visualViewport?.addEventListener("resize", onResize, { passive: true });

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
      window.visualViewport?.removeEventListener("resize", onResize);
    };
  }, []);

  return null;
}
