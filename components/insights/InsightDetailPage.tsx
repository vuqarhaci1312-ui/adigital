"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";
import type { InsightArticle } from "@/lib/data/insightTypes";
import { useBlurReveal } from "@/hooks/useBlurReveal";

const MuxPlayer = dynamic(() => import("@mux/mux-player-react"), { ssr: false });

type Props = {
  article: InsightArticle;
};

export default function InsightDetailPage({ article }: Props) {
  const { ref: titleRef } = useBlurReveal({
    mode: "scroll",
    childSelector: "[data-anim-blur]",
    split: "words",
    stagger: 0.02,
    duration: 0.75,
    threshold: 0.2,
  });

  const setTitleRef = useCallback(
    (node: HTMLElement | null) => {
      titleRef.current = node;
    },
    [titleRef]
  );

  return (
    <main className="container pt-35 sm:pt-42 pb-15 sm:pb-30">
      {article.type === "video" && article.playbackId ? (
        <MuxPlayer
          playbackId={article.playbackId}
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
          title={article.title}
        />
      ) : article.image ? (
        <Image
          src={article.image}
          alt={article.alt ?? article.title}
          width={3072}
          height={2048}
          priority
          className="h-auto w-full"
        />
      ) : null}

      <section
        ref={setTitleRef}
        className="[&>.text-render]:text-dark-gray py-10 sm:py-16"
      >
        <h2 data-anim-blur="true" className="h2 mb-2 sm:mb-4">
          Anlayışlar
        </h2>
        <h2 data-anim-blur="true" className="h2 text-render inline sm:block">
          {article.title}
          <span className="inline sm:hidden"> </span>
        </h2>
      </section>

      <section className="custom-grid">
        <div className="col-span-4 col-start-1 flex flex-col gap-8 sm:col-span-6 sm:col-start-4 sm:gap-12 xl:col-span-4 xl:col-start-5">
          <article className="space-y-4">
            {article.body.map((block, index) =>
              block.type === "quote" ? (
                <p key={index} className="p2">
                  <em>&ldquo;{block.text}&rdquo;</em>
                </p>
              ) : (
                <p key={index} className="p2">
                  {block.text}
                </p>
              )
            )}
          </article>

          <AuthorBlock author={article.author} publishedAt={article.publishedAt} />
        </div>
      </section>
    </main>
  );
}

function AuthorBlock({
  author,
  publishedAt,
}: {
  author: InsightArticle["author"];
  publishedAt: string;
}) {
  const content = (
    <>
      {author.avatar ? (
        <Image
          src={author.avatar}
          alt={author.avatarAlt ?? author.name}
          width={48}
          height={48}
          className="aspect-square h-12 w-12 rounded-full object-cover"
        />
      ) : (
        <div className="bg-light-gray flex aspect-square h-12 w-12 items-center justify-center rounded-full">
          <span className="caption text-dark-gray">
            {author.name
              .split(" ")
              .map((part) => part[0])
              .join("")
              .slice(0, 2)}
          </span>
        </div>
      )}
      <div className="flex flex-col">
        <p className="p2">
          Müəllif: <span>{author.name}</span>
        </p>
        <p className="p2 text-dark-gray">{publishedAt}</p>
      </div>
    </>
  );

  if (author.href) {
    return (
      <Link
        href={author.href}
        className="flex w-fit items-center gap-2 transition-opacity hover:opacity-40"
      >
        {content}
      </Link>
    );
  }

  return <div className="flex w-fit items-center gap-2">{content}</div>;
}
