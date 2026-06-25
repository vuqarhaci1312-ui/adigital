export type ServiceLink = {
  label: string;
  href: string;
};

export type ServiceCardItem = {
  variant: "design" | "developing" | "seo";
  frontImage: string;
  backImage: string;
  frontAlt: string;
  backAlt: string;
  titleHtml: string;
  description: string;
  links: ServiceLink[];
  viewAllHref: string;
};

export const servicesViewAllByVariant = {
  design: "/services#design",
  developing: "/services#development",
  seo: "/seo",
} as const;

export const servicesCardData = {
  headlineHtml:
    'Brend. Reklam. SEO.<br><span> Ayşən Şərifli ilə</span>',
  introHtml:
    "Brend, reklam kanalları və SEO-nu vahid AI strategiyasında birləşdiririk — cəsarətli, <br /> ölçülən nəticələr verən rəqəmsal marketinq təcrübələri yaradırıq.",
  viewAllLabel: "Hamısına bax",
  cards: [
    {
      variant: "design",
      frontImage:
        "https://thefinch.design/wp-content/uploads/2025/04/design.png",
      backImage:
        "https://thefinch.design/wp-content/uploads/2025/04/design-back.png",
      frontAlt: "Meta Ads",
      backAlt: "Meta Ads arxa fon",
      titleHtml:
        "Nəticə yönəmli<br><strong><i>Meta Ads xidmətləri</i></strong>",
      description:
        "Instagram və Facebook reklamları ilə hədəf auditoriyaya çatın — tanınırlıq, etibar və satışları artırın.",
      viewAllHref: servicesViewAllByVariant.design,
      links: [
        { label: "Meta Ads", href: "/contact" },
        { label: "Reklam strategiyası", href: "/contact" },
        { label: "Auditoriya hədəfləmə", href: "/contact" },
        { label: "Kreativ və mətn", href: "/contact" },
        { label: "A/B test", href: "/contact" },
        { label: "Yenidən hədfləmə", href: "/contact" },
        { label: "Piksel və konversiya", href: "/contact" },
        { label: "Hesab audit", href: "/contact" },
        { label: "Kampaniya optimallaşdırması", href: "/contact" },
        { label: "Hesabat və analitika", href: "/contact" },
      ],
    },
    {
      variant: "developing",
      frontImage:
        "https://thefinch.design/wp-content/uploads/2025/04/developing.png",
      backImage:
        "https://thefinch.design/wp-content/uploads/2025/04/developing-back.png",
      frontAlt: "Google Ads",
      backAlt: "Google Ads arxa fon",
      titleHtml:
        "Konversiya yönəmli<br><strong><i>Google Ads xidmətləri</i></strong>",
      description:
        "Axtarış, banner və YouTube reklamları ilə ölçülən gəlir, keyfiyyətli trafik və satış əldə edin.",
      viewAllHref: servicesViewAllByVariant.developing,
      links: [
        { label: "Google Ads", href: "/contact" },
        { label: "Axtarış reklamları", href: "/contact" },
        { label: "Banner reklamlar", href: "/contact" },
        { label: "YouTube reklamlar", href: "/contact" },
        { label: "Konversiya izləmə", href: "/contact" },
        { label: "Landing səhifə optimallaşdırması", href: "/contact" },
        { label: "Yenidən marketinq", href: "/contact" },
        { label: "Performans hesabatı", href: "/contact" },
      ],
    },
    {
      variant: "seo",
      frontImage:
        "https://thefinch.design/wp-content/uploads/2025/04/seo.png",
      backImage:
        "https://thefinch.design/wp-content/uploads/2025/04/seo-back.png",
      frontAlt: "SEO",
      backAlt: "SEO arxa fon",
      titleHtml:
        "Davamlı<br><strong><i>SEO və organik böyümə</i></strong>",
      description:
        "Texniki SEO, kontent və link strategiyası ilə axtarışda görünürlüyünüzü və organik trafiki artırın.",
      viewAllHref: servicesViewAllByVariant.seo,
      links: [
        { label: "Tam rəqəmsal marketinq", href: "/xidmetler" },
        { label: "SEO (Axtarış optimallaşdırması)", href: "/seo" },
      ],
    },
  ] satisfies ServiceCardItem[],
} as const;
