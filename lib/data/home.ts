import { insightListItems } from "@/lib/data/insights";

export const siteContact = {
  phone: "+994 50 312 45 67",
  phoneHref: "tel:+994503124567",
  email: "info@aysdigital.az",
  address: {
    lines: ["Bakı şəh., Nəsimi rayonu", "28 May küçəsi 45"],
    url: "https://maps.google.com/?q=28+May+Street+Baku+Azerbaijan",
  },
};

export const navData = {
  links: [
    { label: "SEO", href: "/seo" },
    { label: "Xidmətlər", href: "/xidmetler" },
    { label: "Anlayışlar", href: "/insights" },
    { label: "Əlaqə", href: "/contact" },
  ],
  menu: {
    title: "Menyu",
    visit: "Ünvan",
    workWithUs: "Bizimlə işləyin",
    scheduleCall: "Zəng edin",
  },
};

export const homeData = {
  hero: {
    titleLine1Em: "Marketinqinizi",
    titleLine1Rest: " AI idarə etsin,",
    titleLine2Before: "satış kanallarınız ",
    titleLine2Em: "avtomatlaşsın",
    titleLine2Rest: "",
    subtitle:
      "Ayşən Şərifli tərəfindən qurulan AysDigital — Meta Ads, TikTok Ads, Google Ads, SEO və bütün rəqəmsal marketinq kanallarınızı tək platformada süni intellekt ilə idarə edin.",
  },
  finance: {
    subtitle: "Xidmətlərimiz",
    titleLine1: "Rəqəmsal marketinq",
    titleLine2: "həlləri",
    heroHeading: "Marketinq sizi yavaşlatmasın.",
    heroTitle: "AysDigital Agentliyi",
    heroDescription:
      "Peşəkar marketinq komandasının təcrübəsi — Meta Ads, Google Ads və SEO bir yerdə",
    heroCta: { label: "ƏLAQƏ", href: "/contact" },
  },
  insights: {
    subtitle: "Anlayışlar",
    titleLine1Before: "Komandamızdan və ",
    titleLine1Em: "marketinq dünyasından son yazılar.",
    linkLabel: "Hamısına bax",
    readMoreLabel: "Daha çox oxu",
    viewInsightLabel: "Anlayışa bax",
    items: insightListItems,
  },
  footer: {
    title: "Brendinizi birlikdə\nböyüdək",
    description:
      "AysDigital — Meta Ads, Google Ads, SEO və rəqəmsal marketinq xidmətləri ilə brendlərin satış və görünürlüyünü artırır.",
    labels: {
      sitemap: "Keçidlər",
      visit: "Ünvan",
      workWithUs: "Bizimlə işləyin",
    },
    links: [
      { label: "Ana səhifə", href: "/" },
      { label: "SEO", href: "/seo" },
      { label: "Xidmətlər", href: "/xidmetler" },
      { label: "Anlayışlar", href: "/insights" },
      { label: "Əlaqə", href: "/contact" },
    ],
    address: {
      lines: siteContact.address.lines,
      url: siteContact.address.url,
    },
    email: siteContact.email,
    scheduleUrl: siteContact.phoneHref,
    socials: [] as { label: string; href: string }[],
    copyright: "AysDigital",
  },
};
