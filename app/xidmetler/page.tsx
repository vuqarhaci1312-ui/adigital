import ServiceDetailPage from "@/components/service-detail/ServiceDetailPage";
import Footer from "@/components/layout/Footer";
import { digitalMarketingPageData } from "@/lib/data/digitalMarketingPage";

export const metadata = {
  title: "Rəqəmsal marketinq | AysDigital — Meta Ads, Google Ads, SEO",
  description:
    "Ayşen Şəhrili və AysDigital — vahid rəqəmsal marketinq strategiyası, Meta Ads, Google Ads və SEO.",
};

export default function XidmetlerPage() {
  return (
    <>
      <ServiceDetailPage data={digitalMarketingPageData} />
      <Footer />
    </>
  );
}
