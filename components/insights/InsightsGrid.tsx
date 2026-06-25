"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import BlurReveal from "@/components/ui/BlurReveal";
import { homeData } from "@/lib/data/home";

const MuxPlayer = dynamic(() => import("@mux/mux-player-react"), { ssr: false });

export default function InsightsGrid() {
  const { insights } = homeData;

  return (
    <div className="custom-grid container relative z-1 gap-y-6 sm:gap-y-10">
      {insights.items.map((item) => (
        <BlurReveal
          key={item.slug}
          as="div"
          scrub
          threshold={0.01}
          end="top 60%"
          className="col-span-4 h-auto"
        >
          <Link
            href={`/insights/${item.slug}`}
            className="relative h-fit transition-all duration-300 ease-out hover:opacity-80"
            data-cursor={insights.viewInsightLabel}
          >
            {item.type === "video" && item.playbackId ? (
              <MuxPlayer
                playbackId={item.playbackId}
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
                    "--media-object-fit": "contain",
                    "--media-object-position": "center",
                    aspectRatio: "4/3",
                    border: "none",
                    outline: "none",
                  } as Record<string, string>
                }
                title={item.title}
              />
            ) : (
              <Image
                src={item.image!}
                alt={item.alt ?? item.title}
                width={3840}
                height={2560}
                className="h-auto w-full"
              />
            )}
            <div className="mt-3 flex justify-between gap-5 sm:mt-2">
              <div className="flex flex-col">
                <p className="text-foreground p1">{item.title}</p>
                <p className="text-dark-gray p2">{item.date}</p>
                <div className="mt-3 flex flex-wrap gap-2 sm:mt-2">
                  <div className="bg-light-gray flex w-fit items-center rounded-xs px-2 pb-1">
                    <p className="caption text-dark-gray">{item.tag}</p>
                  </div>
                </div>
              </div>
              <span className="p1 text-dark-gray whitespace-nowrap underline">
                {insights.readMoreLabel}
              </span>
            </div>
          </Link>
        </BlurReveal>
      ))}
    </div>
  );
}
