const CMS = "https://cdn.prod.website-files.com/6916390ccd119327e597f20f";
const CDN = "https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c";

export const aroothHomeServicesAssets = {
  subtitleIcon: `${CDN}/690f9e158664fc7bd2753513_Subtitle-Icon.svg`,
  moreButtonArrow: `${CDN}/6916469f7b4127365127f631_More-Button-Arrow.svg`,
};

export type AroothHomeServiceItem = {
  id: string;
  serial: string;
  name: string;
  href: string;
  icon: string;
  image: string;
};

export const aroothHomeServicesData = {
  subtitle: "Xidmətlərimiz",
  title: "AI marketinq ",
  titleMark: "platforması.",
  viewDetailsLabel: "Ətraflı",
  services: [
    {
      id: "ai-platform",
      serial: "01",
      name: "AI marketinq platforması",
      href: "/xidmetler",
      icon: `${CMS}/691641f7b629ac13e415de88_Service-Icon-1.svg`,
      image: `${CDN}/691b6f774ec996a8e2c70ec8_Service-Image-1.jpg`,
    },
    {
      id: "social-media",
      serial: "02",
      name: "Sosial media idarəetməsi",
      href: "/xidmetler",
      icon: `${CMS}/691641a937391a2dcba6a9c3_Service-Icon-2.svg`,
      image: `${CDN}/691b6f78b7687e089bcefb63_Service-Image-2.jpg`,
    },
    {
      id: "ads-seo",
      serial: "03",
      name: "Reklam və SEO",
      href: "/xidmetler",
      icon: `${CMS}/69164127ea8f130e2697098b_Service-Icon-3.svg`,
      image: `${CDN}/691b6f788a0e5a2c37a0f8c3_Service-Image-3.jpg`,
    },
  ] satisfies AroothHomeServiceItem[],
} as const;
