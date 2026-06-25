const CDN = "https://cdn.prod.website-files.com/68dbb9a72b91c794d0cdd10c";

export const aboutUsAssets = {
  subtitleIcon: `${CDN}/690f9e158664fc7bd2753513_Subtitle-Icon.svg`,
  awardArrowOne: `${CDN}/691f33702cc97b2f28589225_Award-Arrow-One.png`,
  awardArrowTwo: `${CDN}/691f33700369e38aee50c1d5_Award-Arrow-Two.png`,
  buttonArrow: `${CDN}/69108960e3284bb1a2e481a4_Button-Arrow.svg`,
  statImage: `${CDN}/691f399a64049d0423783289_About-Stat-Image.jpg`,
  videoPoster: `${CDN}/691ce85f982bdec6d59a627e_About-Video_poster.0000000.jpg`,
  videoMp4: `${CDN}/691ce85f982bdec6d59a627e_About-Video_mp4.mp4`,
  videoWebm: `${CDN}/691ce85f982bdec6d59a627e_About-Video_webm.webm`,
  pauseIcon: `${CDN}/6942c271a949552969a4f880_Pause-Button.svg`,
  playIcon: `${CDN}/6942c2703404ae2420bca7d9_Play-Button.svg`,
};

export const aboutUsData = {
  subtitle: "Haqqımızda",
  awardCount: "A–Z",
  awardLabelOne: "Marketinq",
  awardLabelTwo: "xidmətləri",
  title: "Sosial media və marketinq mütəxəssisi ",
  titleMark: "Ayşən Şərifli — AysDigital platformasının qurucusu.",
  description:
    "A-dan Z-yə bütün marketinq xidmətlərini — Meta Ads, TikTok Ads, Google Ads, SEO, email marketinq, kontent generasiyası və rəqib araşdırmasını — AI ilə idarə olunan vahid platformada birləşdirdik. Sosial media hesablarınızı bağlayın, bir prompt yazın, qalanını süni intellekt həll etsin.",
  cta: { label: "Ətraflı məlumat", href: "/contact" },
  stats: [
    {
      rows: [
        { variant: "_1" as const, digits: ["0", "1", "2", "3", "4", "5", "9", "7", "8", "9", "0"] },
        { variant: "_2" as const, digits: ["0", "1", "2", "3", "4", "5", "6", "7", "5", "9", "0"] },
      ],
      suffix: "%",
      label: "Məmnun və təkrar müştərilər",
    },
    {
      rows: [
        { variant: "_1" as const, digits: ["0", "1", "2", "3", "4", "5", "1", "7", "8", "9", "0"] },
        { variant: "_2" as const, digits: ["0", "1", "2", "3", "4", "5", "6", "7", "2", "9", "0"] },
        { variant: "_1" as const, digits: ["0", "1", "2", "3", "4", "5", "5", "7", "8", "9", "0"] },
      ],
      suffix: "+",
      label: "Tamamlanmış marketinq layihəsi",
    },
  ],
};
