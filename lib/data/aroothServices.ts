const CMS = "https://cdn.prod.website-files.com/6916390ccd119327e597f20f";
const CDN = "https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c";

export const aroothServicesAssets = {
  moreButtonArrow: `${CDN}/6916469f7b4127365127f631_More-Button-Arrow.svg`,
  moreButtonArrowWhite: `${CDN}/6910991e7df760b9063f4b51_Button-Arrow-Blue.svg`,
};

export const aroothServicesData = {
  quote:
    "“ Etibar, şəffaflıq və davamlı nəticələrə inanırıq. AI ilə idarə olunan marketinq platformamız vasitəsilə müştərilərimizlə açıq ünsiyyət saxlayır və ölçülən nəticə çatdırırıq. ”",
  services: [
    {
      name: "Meta Ads & TikTok",
      description:
        "Instagram, Facebook və TikTok reklamlarını AI ilə idarə edin — qrafik dizaynlı postlar, hədəf auditoriya və optimallaşdırma daxildir.",
      href: "/xidmetler",
      icon: `${CMS}/691641f7b629ac13e415de88_Service-Icon-1.svg`,
    },
    {
      name: "Google Ads & SEO",
      description:
        "Google Ads, axtarış optimallaşdırması və email marketinq kampaniyalarını avtonom idarə edin.",
      href: "/xidmetler",
      icon: `${CMS}/691641a937391a2dcba6a9c3_Service-Icon-2.svg`,
    },
    {
      name: "Kreativ kontent",
      description:
        "AI ilə qrafik dizaynlı postlar, kontent generasiyası və brend vizualını avtomatik yaradın.",
      href: "/xidmetler",
      icon: `${CMS}/69164127ea8f130e2697098b_Service-Icon-3.svg`,
    },
    {
      name: "Rəqib araşdırması",
      description:
        "Rəqib marketinq strategiyalarını AI ilə analiz edin və reklam hesablarınızın auditini bir promptla alın.",
      href: "/xidmetler",
      icon: `${CMS}/69163fa6ee54de7d1f0fe267_Service-Icon-4.svg`,
    },
  ],
} as const;
