"use client";

import { useEffect } from "react";

export default function BodyReveal({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.body.style.opacity = "1";
    document.body.style.visibility = "visible";
  }, []);

  return children;
}
