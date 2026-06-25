import ServiceDetailPage from "@/components/service-detail/ServiceDetailPage";
import Footer from "@/components/layout/Footer";
import { seoServicePageData } from "@/lib/data/seoServicePage";

export const metadata = {
  title: "SEO xidmətləri | AysDigital — Axtarış optimallaşdırması",
  description:
    "Ayşen Şəhrili və AysDigital — texniki SEO, kontent və link strategiyası ilə organik trafik.",
};

export default function SeoPage() {
  return (
    <>
      <ServiceDetailPage data={seoServicePageData} />
      <Footer />
    </>
  );
}
