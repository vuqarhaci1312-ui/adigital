"use client";

import Link from "next/link";
import Image from "next/image";
import BlurReveal from "@/components/ui/BlurReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { homeData } from "@/lib/data/home";

function WorkCard({
  slug,
  title,
  subtitle,
  image,
  alt,
  tags,
  gridClass,
}: (typeof homeData.selectedWork.items)[number]) {
  return (
    <BlurReveal
      as="div"
      scrub
      threshold={0.01}
      end="top 50%"
      className={gridClass}
    >
      <Link
        href={`/work/${slug}`}
        className="relative h-fit hover:opacity-80 transition-all duration-300 ease-out"
        data-cursor="View Case Study"
      >
        <Image
          src={image}
          alt={alt}
          width={3840}
          height={2560}
          className="h-auto w-full aspect-3/2 object-cover"
        />
        <div className="mt-3 sm:mt-2 flex justify-between gap-5">
          <div className="flex flex-col">
            <p className="text-foreground p1">{title}</p>
            <p className="text-dark-gray p2">{subtitle}</p>
            <div className="mt-3 sm:mt-2 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <div
                  key={tag}
                  className="bg-light-gray flex w-fit items-center rounded-xs px-2 pb-1"
                >
                  <p className="caption text-dark-gray">{tag}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </BlurReveal>
  );
}

export default function SelectedWorkSection() {
  const { selectedWork } = homeData;

  return (
    <section className="relative pb-15 sm:pb-30">
      <SectionTitle
        subtitle={selectedWork.subtitle}
        title={
          <>
            Work created at moments where change
            <span className="inline sm:hidden"> </span>
            <br className="hidden sm:inline" />
            becomes <em>inevitable by design</em>.
            <span className="inline sm:hidden"> </span>
          </>
        }
        link={{ href: "/work", label: "All Work" }}
        divider="top"
        animate="scroll"
        threshold={0.4}
        end="bottom 30%"
        scrub={1}
        className="relative z-1"
      />
      <div className="custom-grid container gap-y-6 sm:gap-y-16 relative z-1">
        {selectedWork.items.map((item) => (
          <WorkCard key={item.slug} {...item} />
        ))}
      </div>
    </section>
  );
}
