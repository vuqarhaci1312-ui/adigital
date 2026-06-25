"use client";

import { useRef } from "react";
import Image from "next/image";
import "@/app/synex-ai.css";
import {
  synexFeatureData,
  synexIntroImages,
  synexIntroTitle,
} from "@/lib/data/synexIntro";
import { useSynexAiAnimations } from "@/hooks/useSynexAiAnimations";

export default function SynexAiSection() {
  const introRef = useRef<HTMLElement>(null);
  const featureRef = useRef<HTMLElement>(null);

  useSynexAiAnimations(introRef, featureRef);

  return (
    <div className="synex-ai">
      <section ref={introRef} className="p-home-intro" aria-label="AI giriş">
        <div className="home-intro-sticky">
          <div className="home-intro-title-wrap">
            <h1 className="home-inro-title">
              {synexIntroTitle.line1}
              <br />
              {synexIntroTitle.line2}
              <br />
              {synexIntroTitle.line3}
            </h1>
          </div>
          <div className="home-intro-image-wrap">
            {synexIntroImages.map((image) => (
              <img
                key={image.layer}
                src={image.src}
                alt=""
                loading="lazy"
                width={240}
                height={240}
                className={`home-intro-image ${image.layer}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section ref={featureRef} className="p-home-feature" aria-label="Xüsusiyyətlər">
        <div className="home-feature-wrap">
          <div className="grid-container synex-feature-grid">
            <div className="home-feature-title-wrap">
              <h6 data-motion="fade-in" className="h6-display g500">
                {synexFeatureData.eyebrow}
              </h6>
              <h3 data-motion="title" className="h3-display max-400">
                {synexFeatureData.title}
              </h3>
            </div>
            <div className="home-feature-list-wrap">
              {synexFeatureData.features.map((feature) => (
                <div
                  key={feature.title}
                  data-motion="stagger"
                  className="home-feature-list"
                >
                  <div className="home-feature-list-icon">
                    <Image
                      src={feature.icon}
                      alt=""
                      width={40}
                      height={40}
                      className="icon-40"
                    />
                  </div>
                  <div className="home-feature-list-inner">
                    <p className="body-b">{feature.title}</p>
                    <p className="body-r g500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid-container">
            <div className="feature-list-wrap">
              {synexFeatureData.stats.map((stat) => (
                <div key={stat.label} className="home-feature-block">
                  <div className="block-inner-top">
                    <div className="label">{stat.label}</div>
                    <Image
                      src={synexFeatureData.symbolIcon}
                      alt=""
                      width={30}
                      height={30}
                      className="block-img"
                    />
                  </div>
                  <h2 data-motion="count" className="h3-display light">
                    {stat.value}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
