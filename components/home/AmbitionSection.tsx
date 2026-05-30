"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import BlurReveal from "@/components/ui/BlurReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { homeData } from "@/lib/data/home";

const MuxPlayer = dynamic(() => import("@mux/mux-player-react"), { ssr: false });

export default function AmbitionSection() {
  const { ambition } = homeData;

  return (
    <section className="relative z-1 -mt-15 sm:-mt-30">
      <SectionTitle
        subtitle={ambition.subtitle}
        title={
          <>
            {ambition.titleLine1Before}
            <em>{ambition.titleLine1Em}</em>
            {ambition.titleLine1Rest}
            <span className="inline sm:hidden"> </span>
            <br className="hidden sm:inline" />
            {ambition.titleLine2}
            <span className="inline sm:hidden"> </span>
          </>
        }
        animate="scroll"
        threshold={0.45}
        end="bottom 60%"
        scrub={1}
      />
      <BlurReveal
        scrub
        threshold={0.1}
        end="top 30%"
        className="container aspect-video"
      >
        <MuxPlayer
          playbackId={ambition.videoPlaybackId}
          autoPlay="muted"
          muted
          loop
          playsInline
          streamType="on-demand"
          preload="auto"
          className="h-auto w-full border-0 outline-none"
          style={
            {
              "--controls": "none",
              "--media-object-fit": "cover",
              "--media-object-position": "center",
              aspectRatio: "16/9",
              border: "none",
              outline: "none",
            } as Record<string, string>
          }
          title="Video"
        />
      </BlurReveal>
    </section>
  );
}
