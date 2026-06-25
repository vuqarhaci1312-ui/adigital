"use client";

import Link from "next/link";
import { useRef } from "react";
import { servicesPageData, type ServiceGridSection } from "@/lib/data/servicesPage";
import { useServiceGridCard } from "@/hooks/useServiceGridCard";

function GridSection({ section }: { section: ServiceGridSection }) {
  return (
    <div
      className="service-grid-card--wrapper"
      data-index={section.dataIndex}
      id={section.id}
    >
      <div className="service-grid-card--wrapper-heading">
        <div className="service-grid-card--wrapper-heading-text">
          <h3 dangerouslySetInnerHTML={{ __html: section.titleHtml }} />
          <p>{section.intro}</p>
        </div>
        <div className="service-grid-card--wrapper-heading-img">
          <div className="front">
            <img decoding="async" src={section.frontImage} alt={section.frontAlt} />
          </div>
          <div className="back">
            <img decoding="async" src={section.backImage} alt={section.backAlt} />
          </div>
        </div>
      </div>
      <div className="service-grid-card--wrapper-card">
        {section.items.map((item) => (
          <Link key={item.title} href={item.href}>
            <div className="service-grid-card--wrapper-card-content">
              <div className="service-grid-card--wrapper-card-content-border" />
              <h5 className="headline">{item.title}</h5>
              <p className="caption-1">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function ServiceGridCardSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useServiceGridCard(sectionRef);

  const { tabs, sections } = servicesPageData;

  return (
    <section
      ref={sectionRef}
      data-bgcolor="#fff"
      className="service-grid-card"
      data-service-grid-card
    >
      <div className="service-grid-card--bar">
        {tabs.map((tab) => (
          <p key={tab.hash} className="caption-1">
            <a href={`#${tab.hash}`} data-index={String(tab.dataIndex)}>
              <strong>{tab.label}</strong>
            </a>
            <span>/</span>
          </p>
        ))}
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            {sections.map((section) => (
              <GridSection key={section.id} section={section} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
