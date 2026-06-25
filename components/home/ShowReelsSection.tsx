"use client";

import { useCallback, useRef, useState } from "react";
import { showReelsData } from "@/lib/data/showReels";
import { useShowReels } from "@/hooks/useShowReels";

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_showreel_play)">
        <path
          d="M5.8335 3.33301V16.6663L16.6668 9.99967L5.8335 3.33301Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_showreel_play">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="1.06066" y1="1.93934" x2="22.0607" y2="22.9393" stroke="white" strokeWidth="3" />
      <line x1="22.0607" y1="2.06066" x2="1.06066" y2="23.0607" stroke="white" strokeWidth="3" />
    </svg>
  );
}

export default function ShowReelsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const popupVideoRef = useRef<HTMLVideoElement>(null);
  const [popupOpen, setPopupOpen] = useState(false);

  useShowReels(sectionRef);

  const openPopup = useCallback(() => {
    setPopupOpen(true);
    const popupVideo = popupVideoRef.current;
    if (!popupVideo) return;
    popupVideo.currentTime = 0;
    void popupVideo.play().catch(() => {
      popupVideo.muted = true;
      void popupVideo.play().catch(() => undefined);
    });
  }, []);

  const closePopup = useCallback(() => {
    setPopupOpen(false);
    const popupVideo = popupVideoRef.current;
    if (popupVideo) {
      popupVideo.pause();
      popupVideo.currentTime = 0;
    }
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        data-bgcolor="#000"
        className="show-reels"
        data-show-reels
      >
        <div className="show-reels--bg" />

        <div className="show-reels--video">
          <video
            id="videoPlay"
            width="100%"
            height="100%"
            playsInline
            muted
            loop
            src={showReelsData.videoSrc}
            onClick={openPopup}
          />
          <div id="videoPlayImg">
            <button
              type="button"
              className="play-icon"
              aria-label="Play showreel"
              onClick={openPopup}
            >
              <span>
                <PlayIcon />
              </span>
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={showReelsData.posterSrc}
              alt="AysDigital marketinq showreel"
              decoding="async"
              onClick={openPopup}
            />
          </div>
        </div>

        <div className="container dark-bg show-reels--container">
          <div className="row show-reels--container-title">
            <div className="col-12">
              <div className="show-reels--row">
                <div className="show-reels--title">
                  <h2>
                    {showReelsData.titleLeft}
                    <br />
                    {showReelsData.titleLeftLine2}
                  </h2>
                </div>
                <div id="video-container" role="button" tabIndex={0} onClick={openPopup} onKeyDown={(e) => e.key === "Enter" && openPopup()} />
                <div className="show-reels--title">
                  <h2>
                    <span>
                      {showReelsData.titleRight}
                      <br />
                      {showReelsData.titleRightLine2}
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="row show-reels--cards">
            <div className="col-12">
              <div className="show-reels--cards-row">
                <div className="show-reels--list">
                  {showReelsData.cards.map((card) => (
                    <div key={card.front} className="show-reels--list-item-wrp">
                      <div className="show-reels--list-item-wrp-border" />
                      <div className="show-reels--list-item">
                        <div className="show-reels--list-item-front front-1">
                          <div className="show-reels--list-item-wrp-border mobile" />
                          <div className="show-reels--list-item-front-border" />
                          <h3 className="heading">{card.front}</h3>
                        </div>
                        <div className="show-reels--list-item-back">
                          <div className="show-reels--list-item-wrp-border mobile" />
                          <h3 className="heading">{card.back}</h3>
                          <p className="caption-1">{card.caption}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={`video-popup${popupOpen ? " is-open" : ""}`} style={{ display: popupOpen ? "flex" : "none" }}>
        <div className="video-popup-inner">
          <button type="button" className="close-popup" aria-label="Close video" onClick={closePopup}>
            <CloseIcon />
          </button>
          <video
            ref={popupVideoRef}
            width="100%"
            height="100%"
            controls
            playsInline
            autoPlay
            muted
            loop
            src={showReelsData.videoSrc}
          />
        </div>
      </div>
    </>
  );
}
