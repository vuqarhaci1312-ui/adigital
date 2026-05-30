import HeroSection from "@/components/home/HeroSection";
import AmbitionSection from "@/components/home/AmbitionSection";
import SelectedWorkSection from "@/components/home/SelectedWorkSection";
import CtaSection from "@/components/home/CtaSection";
import InsightsSection from "@/components/home/InsightsSection";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <main>
        <HeroSection />
        <AmbitionSection />
        <SelectedWorkSection />
        <CtaSection />
        <InsightsSection />
      </main>
      <Footer />
    </>
  );
}
