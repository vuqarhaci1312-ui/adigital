import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import InsightsListingPage from "@/components/insights/InsightsListingPage";

export const metadata: Metadata = {
  title: "Anlayışlar | AysDigital",
  description:
    "AysDigital komandasından rəqəmsal marketinq, Meta Ads, Google Ads və SEO üzrə məqalələr və məsləhətlər.",
};

export default function InsightsIndexPage() {
  return (
    <>
      <main>
        <InsightsListingPage />
      </main>
      <Footer />
    </>
  );
}
