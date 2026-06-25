export type ServiceGridItem = {
  title: string;
  description: string;
  href: string;
};

export type ServiceGridSection = {
  id: string;
  dataIndex: number;
  tabLabel: string;
  titleHtml: string;
  intro: string;
  frontImage: string;
  backImage: string;
  frontAlt: string;
  backAlt: string;
  items: ServiceGridItem[];
};

export const servicesPageData = {
  masthead: {
    titleHtml:
      "Fikirləriniz bizi <em><strong>imkanlar yaratmağa</strong></em> ilham verir",
    intro:
      "Ayşen Şəhrili və AysDigital komandası Meta Ads, Google Ads və SEO ilə brendinizi böyüdür — ölçülən nəticələr və davamlı rəqəmsal böyümə.",
  },
  tabs: [
    { dataIndex: 0, label: "Meta Ads", hash: "design" },
    { dataIndex: 1, label: "Google Ads", hash: "development" },
    { dataIndex: 2, label: "SEO və Marketinq", hash: "seo-marketing" },
  ],
  sections: [
    {
      id: "design",
      dataIndex: 0,
      tabLabel: "Meta Ads",
      titleHtml:
        "Tam miqyaslı<br><strong><i>Meta Ads xidmətləri</i></strong>",
      intro:
        "AysDigital olaraq Instagram və Facebook reklamlarında strategiya, kreativ və optimallaşdırma ilə ölçülən nəticələr təqdim edirik.",
      frontImage:
        "https://thefinch.design/wp-content/uploads/2025/04/design.png",
      backImage:
        "https://thefinch.design/wp-content/uploads/2025/04/design-back.png",
      frontAlt: "Meta Ads",
      backAlt: "Meta Ads arxa fon",
      items: [
        {
          title: "Meta Ads",
          description:
            "Hədəf auditoriyaya çatın, tanınırlıq və satışları artırın.",
          href: "/contact",
        },
        {
          title: "Reklam strategiyası",
          description:
            "Büdcə, məqsəd və funnel üzrə aydın marketinq planı.",
          href: "/contact",
        },
        {
          title: "Auditoriya hədəfləmə",
          description:
            "Lookalike, retargeting və custom audience qurulması.",
          href: "/contact",
        },
        {
          title: "Kreativ və mətn",
          description:
            "Reklam vizualları və konversiya yönəmli copywriting.",
          href: "/contact",
        },
        {
          title: "A/B test",
          description:
            "Kreativ və auditoriya testləri ilə performans artımı.",
          href: "/contact",
        },
        {
          title: "Retargeting",
          description:
            "Sayt ziyarətçilərini və müştəriləri yenidən cəlb edin.",
          href: "/contact",
        },
        {
          title: "Piksel və konversiya",
          description:
            "Meta Piksel, CAPI və hadisə izləmə quraşdırması.",
          href: "/contact",
        },
        {
          title: "Hesab audit",
          description:
            "Mövcud kampaniyaların effektivliyinin yoxlanması.",
          href: "/contact",
        },
        {
          title: "Kampaniya optimallaşdırması",
          description:
            "CPA, ROAS və CTR göstəricilərinin davamlı yaxşılaşdırılması.",
          href: "/contact",
        },
        {
          title: "Hesabat və analitika",
          description:
            "Aylıq performans hesabatları və tövsiyələr.",
          href: "/contact",
        },
      ],
    },
    {
      id: "development",
      dataIndex: 1,
      tabLabel: "Google Ads",
      titleHtml:
        "Konversiya yönəmli<br><strong><i>Google Ads həlləri</i></strong>",
      intro:
        "Axtarış, Display və YouTube reklamları ilə keyfiyyətli trafik, ölçülən ROI və satış artımı.",
      frontImage:
        "https://thefinch.design/wp-content/uploads/2025/04/developing.png",
      backImage:
        "https://thefinch.design/wp-content/uploads/2025/04/developing-back.png",
      frontAlt: "Google Ads",
      backAlt: "Google Ads arxa fon",
      items: [
        {
          title: "Google Ads",
          description:
            "Axtarış və display kampaniyalarının tam idarə edilməsi.",
          href: "/contact",
        },
        {
          title: "Axtarış reklamları",
          description:
            "Yüksək niyyətli açar sözlərlə satışa yönəlik trafik.",
          href: "/contact",
        },
        {
          title: "Display reklamlar",
          description:
            "Brend tanınırlığı və remarketing kampaniyaları.",
          href: "/contact",
        },
        {
          title: "YouTube reklamlar",
          description:
            "Video formatları ilə geniş auditoriyaya çıxış.",
          href: "/contact",
        },
        {
          title: "Konversiya izləmə",
          description:
            "GA4, GTM və konversiya hadisələrinin qurulması.",
          href: "/contact",
        },
        {
          title: "Landing optimallaşdırması",
          description:
            "Səhifə sürəti və CTA ilə konversiya artımı.",
          href: "/contact",
        },
        {
          title: "Remarketing",
          description:
            "Ziyarətçiləri və səbət tərk edənləri geri qaytarın.",
          href: "/contact",
        },
        {
          title: "Performans hesabatı",
          description:
            "Kampaniya, açar söz və büdcə üzrə detallı analiz.",
          href: "/contact",
        },
      ],
    },
    {
      id: "seo-marketing",
      dataIndex: 2,
      tabLabel: "SEO və Marketinq",
      titleHtml:
        "Fərdiləşdirilmiş<br><strong><i>SEO və marketinq</i></strong>",
      intro:
        "Texniki SEO, kontent və link strategiyası ilə organik trafik və uzunmüddətli böyümə.",
      frontImage:
        "https://thefinch.design/wp-content/uploads/2025/04/seo.png",
      backImage:
        "https://thefinch.design/wp-content/uploads/2025/04/seo-back.png",
      frontAlt: "SEO",
      backAlt: "SEO arxa fon",
      items: [
        {
          title: "Tam rəqəmsal marketinq",
          description:
            "Meta, Google və SEO-nun vahid strategiyada birləşməsi.",
          href: "/xidmetler",
        },
        {
          title: "SEO (Axtarış optimallaşdırması)",
          description:
            "Texniki audit, kontent və link qurma ilə görünürlük.",
          href: "/seo",
        },
      ],
    },
  ] satisfies ServiceGridSection[],
} as const;

export { servicesViewAllByVariant } from "@/lib/data/servicesCard";
