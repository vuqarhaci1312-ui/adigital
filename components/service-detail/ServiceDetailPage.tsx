"use client";

import { useRef } from "react";
import type { ServiceDetailPageData } from "@/lib/data/serviceDetailTypes";
import { useServiceDetailTitles } from "@/hooks/useServiceDetailTitles";
import ServiceDetailMasthead from "@/components/service-detail/ServiceDetailMasthead";
import ServiceListingSection from "@/components/service-detail/ServiceListingSection";
import TechnologyBenefitSection from "@/components/service-detail/TechnologyBenefitSection";
import ConsultingProcessSection from "@/components/service-detail/ConsultingProcessSection";

type Props = {
  data: ServiceDetailPageData;
};

export default function ServiceDetailPage({ data }: Props) {
  const mainRef = useRef<HTMLDivElement>(null);
  useServiceDetailTitles(mainRef);

  return (
    <main className="page-service-detail">
      <div ref={mainRef} className="page-service-detail__inner main-wrapper__inner">
        <ServiceDetailMasthead masthead={data.masthead} />
        <ServiceListingSection listing={data.serviceListing} />
        <TechnologyBenefitSection block={data.benefitLight} />
        <ConsultingProcessSection block={data.consultingProcess} />
        <TechnologyBenefitSection block={data.benefitDark} />
      </div>
    </main>
  );
}
