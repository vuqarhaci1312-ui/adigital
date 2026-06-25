"use client";

import { type RefObject, useEffect } from "react";
import { gsap, registerGsap } from "@/lib/gsap";

const DESKTOP_MIN = 992;

export function useShowReels(sectionRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    registerGsap();

    if (window.innerWidth <= DESKTOP_MIN) return;

    const section = sectionRef.current;
    if (!section) return;

    const video = section.querySelector<HTMLVideoElement>("#videoPlay");
    const videoPoster = section.querySelector<HTMLElement>("#videoPlayImg");
    const videoContainer = section.querySelector<HTMLElement>("#video-container");
    const cardsRow = section.querySelector<HTMLElement>(".show-reels--cards-row");
    const container = section.querySelector<HTMLElement>(".show-reels--container");
    const titles = gsap.utils.toArray<HTMLElement>(
      section.querySelectorAll(".show-reels--title")
    );
    const cards = gsap.utils.toArray<HTMLElement>(
      section.querySelectorAll(".show-reels--list-item-wrp")
    );

    if (!video || !videoContainer || !cardsRow) return;

    gsap.set(video, { margin: "5rem", display: "block" });
    if (videoPoster) gsap.set(videoPoster, { display: "none" });
    gsap.set(cards, {
      opacity: 0,
      y: (i: number) => 1000 + 50 * i,
    });
    gsap.set(titles, { opacity: 0 });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${7 * window.innerHeight}`,
          scrub: true,
          pin: true,
          onEnter: () => {
            void video.play().catch(() => undefined);
            videoContainer.classList.remove("end");
          },
          onEnterBack: () => {
            void video.play().catch(() => undefined);
            videoContainer.classList.remove("end");
          },
          onLeave: () => {
            video.pause();
            video.currentTime = 1;
            videoContainer.classList.add("end");
          },
          onLeaveBack: () => {
            video.pause();
            video.currentTime = 1;
            videoContainer.classList.add("end");
          },
        },
      });

      tl.to(video, { scale: 1, opacity: 1, duration: 1, ease: "none" });

      tl.to(
        video,
        {
          width: () => videoContainer.offsetWidth,
          height: () => videoContainer.offsetHeight,
          x: () =>
            videoContainer.getBoundingClientRect().left -
            video.getBoundingClientRect().left,
          y: () =>
            videoContainer.getBoundingClientRect().top -
            video.getBoundingClientRect().top,
          ease: "power2.out",
          duration: 1,
          zIndex: 99,
          scrollTrigger: {
            trigger: video,
            start: "top top",
            end: "+=200%",
            scrub: 2,
          },
        },
        "<"
      );

      tl.to(titles, { opacity: 1 }, "+=1.5");

      tl.to(video, {
        opacity: 0.1,
        zIndex: 0,
        scrollTrigger: {
          trigger: cardsRow,
          start: "top top",
          end: "+=100%",
          onEnter: () => {
            if (container) container.style.zIndex = "-1";
          },
          onEnterBack: () => {
            if (container) container.style.zIndex = "-1";
          },
          onLeave: () => {
            cardsRow.style.zIndex = "2";
            if (container) container.style.zIndex = "1";
          },
          onLeaveBack: () => {
            cardsRow.style.zIndex = "2";
          },
        },
      });

      tl.to(cards, { opacity: 1 }, "+=1.5");
      tl.to(titles, { opacity: 0.1, duration: 1.5 }, "same");

      tl.to(
        cards,
        {
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          stagger: { amount: 0.9, from: "start" },
        },
        "same"
      );

      tl.to(cards, {
        rotateY: 180,
        duration: 0.7,
        ease: "power2.out",
      });
    }, section);

    return () => ctx.revert();
  }, [sectionRef]);
}
