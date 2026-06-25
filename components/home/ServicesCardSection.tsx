"use client";

import Link from "next/link";
import { useRef } from "react";
import { servicesCardData, type ServiceCardItem } from "@/lib/data/servicesCard";
import { useServicesCard } from "@/hooks/useServicesCard";
import { useServicesCardCarousel } from "@/hooks/useServicesCardCarousel";

function ViewAllArrow() {
  return (
    <span className="gp-arrow">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip_services_view_all)">
          <path
            d="M14.1668 5.83398L5.8335 14.1673"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.6665 5.83398H14.1665V13.334"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip_services_view_all">
            <rect width="20" height="20" fill="currentColor" />
          </clipPath>
        </defs>
      </svg>
    </span>
  );
}

function ServiceCard({
  card,
  viewAllLabel,
}: {
  card: ServiceCardItem;
  viewAllLabel: string;
}) {
  return (
    <div className={`services-card--item ${card.variant}`}>
      <div className="services-card--item-main">
        <div className="services-card--item-img">
          <div className="front">
            <img decoding="async" src={card.frontImage} alt={card.frontAlt} />
          </div>
          <div className="back">
            <img decoding="async" src={card.backImage} alt={card.backAlt} />
          </div>
        </div>
        <div className="services-card--item-wrp">
          <div className="services-card--item-heading">
            <h3 dangerouslySetInnerHTML={{ __html: card.titleHtml }} />
            <p>{card.description}</p>
          </div>
        </div>
        <div className="services-card--item-services">
          <ul>
            {card.links.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="sub-heading front-text">
                  {link.label}
                </Link>
                <Link href={link.href} className="back-text">
                  {link.label}
                </Link>
                <span className="forward-sign">/</span>
              </li>
            ))}
          </ul>
          <div className="wp-block-button is-style-fill-alt-v2">
            <Link href={card.viewAllHref} className="wp-block-button__link">
              <span className="btn-text">{viewAllLabel}</span>
              <ViewAllArrow />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesCardSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  useServicesCard(sectionRef);
  useServicesCardCarousel(carouselRef);

  const { viewAllLabel, cards } = servicesCardData;

  return (
    <section
      ref={sectionRef}
      className="services-card"
      data-services-card
      data-bgcolor="#fff"
    >
      <div className="container">
        <div className="row services-card--item-row">
          <div className="col-12">
            <div ref={carouselRef} className="services-card--carousel">
              {cards.map((card) => (
                <ServiceCard key={card.variant} card={card} viewAllLabel={viewAllLabel} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
