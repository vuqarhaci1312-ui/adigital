import HeroSection from "@/components/home/HeroSection";
import AboutUsSection from "@/components/home/AboutUsSection";
import SynexAiSection from "@/components/home/SynexAiSection";
import AroothServicesSection from "@/components/home/AroothServicesSection";
import CapvidCtaSection from "@/components/home/CapvidCtaSection";
import ServicesCardSection from "@/components/home/ServicesCardSection";
import AroothHomeServicesSection from "@/components/home/AroothHomeServicesSection";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <main>
        <HeroSection />
        <AboutUsSection />
        <SynexAiSection />
        <AroothServicesSection />
        <CapvidCtaSection />
        <ServicesCardSection />
        <AroothHomeServicesSection />
      </main>
      <Footer />
    </>
  );
}