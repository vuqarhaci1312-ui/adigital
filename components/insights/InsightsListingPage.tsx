"use client";

import InsightsGrid from "@/components/insights/InsightsGrid";
import SectionTitle from "@/components/ui/SectionTitle";
import { homeData } from "@/lib/data/home";

export default function InsightsListingPage() {
  const { insights } = homeData;

  return (
    <section className="relative pb-15 sm:pb-30">
      <SectionTitle
        subtitle={insights.subtitle}
        title={
          <>
            {insights.titleLine1Before}
            <em>{insights.titleLine1Em}</em>
            <span className="inline sm:hidden"> </span>
          </>
        }
        animate="scroll"
        threshold={0.4}
        className="relative z-1"
      />
      <InsightsGrid />
    </section>
  );
}
