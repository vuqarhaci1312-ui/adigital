import ServicesMasthead from "@/components/services/ServicesMasthead";
import ServiceGridCardSection from "@/components/services/ServiceGridCardSection";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Xidmətlər | AysDigital — Meta Ads, Google Ads, SEO",
  description:
    "Ayşen Şəhrili və AysDigital — Meta Ads, Google Ads, SEO və rəqəmsal marketinq xidmətləri.",
};

export default function ServicesPage() {
  return (
    <>
      <main className="page-services">
        <ServicesMasthead />
        <ServiceGridCardSection />
      </main>
      <Footer />
    </>
  );
}
