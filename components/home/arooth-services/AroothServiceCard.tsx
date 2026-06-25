"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import AroothMoreButton from "@/components/home/arooth-services/AroothMoreButton";

type AroothServiceCardProps = {
  name: string;
  description: string;
  href: string;
  icon: string;
  revealDelay?: number;
};

export default function AroothServiceCard({
  name,
  description,
  href,
  icon,
  revealDelay = 0,
}: AroothServiceCardProps) {
  const [hovered, setHovered] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.setTimeout(() => setRevealed(true), revealDelay);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -5% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [revealDelay]);

  useEffect(() => {
    if (!hovered) return;

    const dismiss = (event: TouchEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setHovered(false);
      }
    };

    document.addEventListener("touchstart", dismiss, { passive: true });
    return () => document.removeEventListener("touchstart", dismiss);
  }, [hovered]);

  return (
    <div
      ref={cardRef}
      className={[
        "single-service-wrap",
        hovered ? "is-hovered" : "",
        revealed ? "is-revealed" : "is-reveal-pending",
      ]
        .filter(Boolean)
        .join(" ")}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)}
    >
      <div className="service-contents">
        <div className="single-service-icon-wrap">
          <img src={icon} loading="lazy" alt="" className="single-service-icon" />
        </div>
        <div className="service-details-wrapper">
          <div className="single-service-name-wrap">
            <Link href={href} className="single-service-name">
              {name}
            </Link>
          </div>
          <p className="single-service-details">{description}</p>
        </div>
        <div className="service-more-buttons-wrap">
          <div className="service-more-button">
            <AroothMoreButton href={href} />
          </div>
          <div className="service-more-button absolute">
            <AroothMoreButton href={href} variant="white" />
          </div>
        </div>
      </div>
      <div className="single-service-hover-bg" />
    </div>
  );
}
