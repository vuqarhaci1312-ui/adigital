"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import "@/app/arooth-home-services.css";
import {
  aroothHomeServicesAssets,
  aroothHomeServicesData,
} from "@/lib/data/aroothHomeServices";
import { useAroothHomeServices } from "@/hooks/useAroothHomeServices";

function MoreButton({ href }: { href: string }) {
  return (
    <Link href={href} className="more-button w-inline-block">
      <div className="more-button-flex">
        <div className="more-button-text">{aroothHomeServicesData.viewDetailsLabel}</div>
        <div className="more-button-arrow-wrap">
          <img
            src={aroothHomeServicesAssets.moreButtonArrow}
            loading="lazy"
            alt=""
            className="more-button-arrow"
          />
          <img
            src={aroothHomeServicesAssets.moreButtonArrow}
            loading="lazy"
            alt=""
            className="more-button-arrow-hover"
          />
        </div>
      </div>
    </Link>
  );
}

export default function AroothHomeServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { subtitle, title, titleMark, services } = aroothHomeServicesData;

  useAroothHomeServices(sectionRef, activeIndex);

  return (
    <div className="arooth-home-services">
      <section ref={sectionRef} className="section services" aria-label="Xidmətlərimiz">
        <div className="container">
          <div className="section-title-wrapper margin-bottom">
            <div className="section-subtile-wrap">
              <div className="subtitle-wrap w-variant-89dd2e21-7faa-27ca-a536-110057684450">
                <div className="subtitle-flex-wrap">
                  <img
                    src={aroothHomeServicesAssets.subtitleIcon}
                    loading="lazy"
                    alt=""
                    className="subtitle-icon"
                  />
                  <div className="subtitle-text">{subtitle}</div>
                </div>
              </div>
            </div>
            <h2 className="section-title">
              {title}
              <span className="section-title-mark">{titleMark}</span>
            </h2>
          </div>

          <div className="services-wrapper">
            <div className="service-tabs-wrapper">
              <div className="service-tabs-grid-left">
                <div className="single-service-card-wrap">
                  <div className="service-card-content">
                    <div className="service-serial-wrap">
                      <div className="serial-numbers-wrap">
                        <div className="serial-single-number-trigger">
                          {services.map((service) => (
                            <div key={service.id} className="service-serial-collection">
                              <div className="service-serial">{service.serial}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="service-icons-wrapper">
                      <div className="service-icons-trigger">
                        {services.map((service) => (
                          <div key={service.id} className="single-service-icon-wrapper">
                            <div className="service-icon-wrap">
                              <img
                                src={service.icon}
                                loading="lazy"
                                alt=""
                                className="service-icon"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="service-card-content-bottom">
                      <div className="service-buttons-wrapper">
                        <div className="service-buttons-trigger">
                          {services.map((service) => (
                            <div key={service.id} className="single-service-button-wrap">
                              <div className="service-button-wrap">
                                <MoreButton href={service.href} />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="service-tabs-grid-right">
                <div className="service-tab-links-wrap">
                  {services.map((service, index) => (
                    <div key={service.id}>
                      <button
                        type="button"
                        className={`service-tab-link${index === activeIndex ? " is-active" : ""}`}
                        onClick={() => setActiveIndex(index)}
                        aria-pressed={index === activeIndex}
                      >
                        <div className="service-tab-link-content">
                          <div className="service-tab-link-content-flex">
                            <div className="service-tab-link-flex-left">
                              <div className="service-name-wrap">
                                <div className="service-name-dot-wrap">
                                  <div className="service-name-dot" />
                                </div>
                                <h3 className="service-name">{service.name}</h3>
                              </div>
                            </div>
                            <div className="service-tab-link-image-wrap">
                              <img
                                src={service.image}
                                loading="lazy"
                                alt={service.name}
                                className="service-tab-link-image"
                              />
                            </div>
                          </div>
                        </div>
                      </button>
                      {index < services.length - 1 ? (
                        <div className="service-tab-link-divider" />
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
