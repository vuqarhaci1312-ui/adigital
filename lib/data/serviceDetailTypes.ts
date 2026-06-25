export type ServiceDetailBreadcrumb = {
  label: string;
  href?: string;
  active?: boolean;
};

export type ServiceListingCard = {
  titleHtml: string;
  description: string;
};

export type TechnologyBenefitCard = {
  image: string;
  titleHtml: string;
  description: string;
};

export type TechnologyBenefitBlock = {
  bgcolor: string;
  dark?: boolean;
  headingHtml: string;
  intro: string;
  cards: TechnologyBenefitCard[];
  contact?: {
    title: string;
    description: string;
    ctaLabel: string;
    ctaHref: string;
  };
};

export type ConsultingProcessStep = {
  title: string;
  description: string;
};

export type ConsultingProcessBlock = {
  headingHtml: string;
  intro: string;
  steps: ConsultingProcessStep[];
};

export type ServiceDetailPageData = {
  masthead: {
    breadcrumbs: ServiceDetailBreadcrumb[];
    titleHtml: string;
    intro: string;
    cta: { label: string; href: string };
  };
  serviceListing: {
    bgcolor: string;
    headingHtml: string;
    intro: string;
    cards: ServiceListingCard[];
  };
  benefitLight: TechnologyBenefitBlock;
  consultingProcess: ConsultingProcessBlock;
  benefitDark: TechnologyBenefitBlock;
};
