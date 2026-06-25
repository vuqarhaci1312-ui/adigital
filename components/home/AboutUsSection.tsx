"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { aboutUsAssets, aboutUsData } from "@/lib/data/aboutUs";
import { useAboutUsAnimations } from "@/hooks/useAboutUsAnimations";
import AboutUsCounter from "@/components/home/about-us/AboutUsCounter";
import AroothPrimaryButton from "@/components/home/about-us/AroothPrimaryButton";

export default function AboutUsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useAboutUsAnimations(sectionRef);

  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play();
      setIsPlaying(true);
      return;
    }

    video.pause();
    setIsPlaying(false);
  };

  return (
    <section
      ref={sectionRef}
      className="arooth-about section about-us"
      aria-label="Haqqımızda"
    >
      <div className="container">
        <div className="about-us-title-wrapper">
          <div className="about-us-title-flex">
            <div
              className="about-us-stat-wrappper"
              data-about-animate="slide-left"
            >
              <div className="about-us-subtitle-wrap">
                <div className="subtitle-wrap w-variant-89dd2e21-7faa-27ca-a536-110057684450">
                  <div className="subtitle-flex-wrap">
                    <img
                      src={aboutUsAssets.subtitleIcon}
                      loading="lazy"
                      alt=""
                      className="subtitle-icon"
                    />
                    <div className="subtitle-text">{aboutUsData.subtitle}</div>
                  </div>
                </div>
              </div>

              <div className="about-award-count-wrap">
                <div className="about-award-count-number">
                  {aboutUsData.awardCount}
                </div>
                <div className="award-count-arrow-wrap one">
                  <div className="award-count-arrow-text">
                    {aboutUsData.awardLabelOne}
                  </div>
                  <img
                    src={aboutUsAssets.awardArrowOne}
                    loading="lazy"
                    alt=""
                    className="award-count-arrow-icon one"
                  />
                </div>
                <div className="award-count-arrow-wrap two">
                  <div className="award-count-arrow-text two">
                    {aboutUsData.awardLabelTwo}
                  </div>
                  <img
                    src={aboutUsAssets.awardArrowTwo}
                    loading="lazy"
                    alt=""
                    className="award-count-arrow-icon two"
                  />
                </div>
              </div>
            </div>

            <div className="about-us-title-flex-right">
              <div className="about-us-title-border" />
              <div
                className="about-us-title-wrap"
                data-about-animate="slide-bottom"
              >
                <h3 className="about-us-title">
                  {aboutUsData.title}
                  <span className="about-us-title-mark">
                    {aboutUsData.titleMark}
                  </span>
                </h3>
                <p className="about-section-details">{aboutUsData.description}</p>
                <AroothPrimaryButton
                  href={aboutUsData.cta.href}
                  label={aboutUsData.cta.label}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-us-section-title-divider" />

      <div className="container">
        <div className="about-vh-wrap">
          <div className="about-stat-wrapper">
            <div className="about-stat-flex">
              <div
                className="about-stat-image-wrap"
                data-about-animate="slide-left"
              >
                <Image
                  src={aboutUsAssets.statImage}
                  alt="Statistika şəkli"
                  width={220}
                  height={280}
                  className="about-stat-image"
                />
              </div>

              <div className="about-stats-counters-flex">
                {aboutUsData.stats.map((stat) => (
                  <AboutUsCounter
                    key={stat.label}
                    rows={stat.rows}
                    suffix={stat.suffix}
                    label={stat.label}
                  />
                ))}
              </div>
            </div>
            <div className="about-stat-blur" />
          </div>

          <div className="about-video-wrap">
            <div className="about-video w-background-video w-background-video-atom">
              <video
                ref={videoRef}
                id="about-us-background-video"
                autoPlay
                loop
                muted
                playsInline
                poster={aboutUsAssets.videoPoster}
                style={{
                  backgroundImage: `url("${aboutUsAssets.videoPoster}")`,
                }}
              >
                <source src={aboutUsAssets.videoMp4} type="video/mp4" />
                <source src={aboutUsAssets.videoWebm} type="video/webm" />
              </video>

              <div aria-live="polite">
                <button
                  type="button"
                  aria-controls="about-us-background-video"
                  aria-label={isPlaying ? "Videonu dayandır" : "Videonu oynat"}
                  className="w-backgroundvideo-backgroundvideoplaypausebutton play-pause-button w-background-video--control"
                  onClick={toggleVideo}
                >
                  <span hidden={!isPlaying}>
                    <img
                      src={aboutUsAssets.pauseIcon}
                      loading="lazy"
                      alt="Videonu dayandır"
                    />
                  </span>
                  <span hidden={isPlaying}>
                    <img
                      src={aboutUsAssets.playIcon}
                      loading="lazy"
                      alt="Videonu oynat"
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
