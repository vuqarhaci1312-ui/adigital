import { siteContact } from "@/lib/data/home";

export const birbankFooterAssets = {
  qr: "/images/footer-qr.png",
  googlePlayIcon:
    "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNy42MzQ3MyAyOC41NDY2TDIwLjI5MjMgMTUuODE3OUw3Ljg0MzE5IDMuMjk4ODNDNy4zNDY1MyAzLjYxNzIxIDcgNC4xNjY5IDcgNC44MzM5VjI3LjE2NjRDNyAyNy43MzU1IDcuMjUyMjMgMjguMjE5MSA3LjYzNDczIDI4LjU0NjZaIiBmaWxsPSIjMDBDNEZGIi8+PHBhdGggZD0iTTMwLjA0OCAxNC40MDAzQzMxLjMxNjkgMTUuMDk4NSAzMS4zMTY5IDE2LjkwMTIgMzAuMDQ4IDE3LjU5OTRMMjQuOTI4NyAyMC40MTY1TDIwLjI5MiAxNS44MTc1TDI0LjY5MjMgMTEuNDUzMUwzMC4wNDggMTQuNDAwM1oiIGZpbGw9IiNGRkNFMDAiLz48cGF0aCBkPSJNMjQuOTI5MiAyMC40MTY4TDIwLjI5MjQgMTUuODE3OUw3LjYzNDc3IDI4LjU0NjZDMTguMTkxMzkgMjkuMDIzMiAxOS4wMjM4OSAyOS4xNjkxIDE5Ljc1NjM1IDI4Ljc2NkwyNC45MjkyIDIwLjQxNjhaIiBmaWxsPSIjREUyNDUzIi8+PHBhdGggZD0iTTcuODQyNzcgMy4yOTg2NUwyMC4yOTE5IDE1LjgxNzdMMjQuNjkyMiAxMS40NTMzTDkuNzU1ODMgMy4yMzQxNUM5LjExMDAzIDIuODc4NzggOC4zODY0NiAyLjk1MDEzIDcuODQyNzcgMy4yOTg2NVoiIGZpbGw9IiMxMUQ1NzQiLz48L3N2Zz4=",
  appStoreIcon:
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAxOCAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuOTA2MiAxMS42MDk0QzE0LjkwNjIgOS44NzUgMTUuNzAzMSA4LjYwOTM4IDE3LjI1IDcuNjI1QzE2LjM1OTQgNi4zNTkzOCAxNS4wNDY5IDUuNzAzMTIgMTMuMzEyNSA1LjU2MjVDMTEuNjI1IDUuNDIxODggOS43OTY4OCA2LjUgOS4xNDA2MiA2LjVDOC40Mzc1IDYuNSA2Ljg0Mzc1IDUuNjA5MzggNS41NzgxMiA1LjYwOTM4QzIuOTUzMTIgNS42NTYyNSAwLjE4NzUgNy42NzE4OCAwLjE4NzUgMTEuODQzOEMwLjE4NzUgMTMuMDYyNSAwLjM3NSAxNC4zMjgxIDAuODQzNzUgMTUuNjQwNkMxLjQ1MzEyIDE3LjM3NSAzLjYwOTM4IDIxLjU5MzggNS44NTkzOCAyMS41QzcuMDMxMjUgMjEuNSA3Ljg3NSAyMC42NTYyIDkuNDIxODggMjAuNjU2MkMxMC45MjE5IDIwLjY1NjIgMTEuNjcxOSAyMS41IDEyLjk4NDQgMjEuNUMxNS4yODEyIDIxLjUgMTcuMjUgMTcuNjU2MiAxNy44MTI1IDE1LjkyMTlDMTQuNzY1NiAxNC40Njg4IDE0LjkwNjIgMTEuNzAzMSAxNC45MDYyIDExLjYwOTRaTTEyLjI4MTIgMy45MjE4OEMxMy41NDY5IDIuNDIxODggMTMuNDA2MiAxLjAxNTYyIDEzLjQwNjIgMC41QzEyLjI4MTIgMC41OTM3NSAxMC45Njg4IDEuMjk2ODggMTAuMjE4OCAyLjE0MDYyQzkuMzc1IDMuMDc4MTIgOC45MDYyNSA0LjI1IDkgNS41MTU2MkMxMC4yMTg4IDUuNjA5MzggMTEuMzQzOCA1IDEyLjI4MTIgMy45MjE4OFoiIGZpbGw9IndoaXRlIi8+PC9zdmc+",
};

export const birbankFooterData = {
  copyright: "AysDigital. Bütün hüquqlar qorunur.",
  privacyLabel: "Məxfilik sənədi",
  privacyHref: `mailto:${siteContact.email}`,
  links: [
    { id: "1", name: "Ana səhifə", href: "/" },
    { id: "2", name: "SEO", href: "/seo" },
    { id: "3", name: "Xidmətlər", href: "/xidmetler" },
    { id: "4", name: "Anlayışlar", href: "/insights" },
    { id: "5", name: "Əlaqə", href: "/contact" },
    { id: "6", name: "Haqqımızda", href: "/#about" },
    { id: "7", name: "Meta Ads", href: "/xidmetler" },
    { id: "8", name: "Google Ads", href: "/xidmetler" },
    { id: "9", name: "Rəqəmsal marketinq", href: "/xidmetler" },
  ],
  apps: [
    {
      id: "1",
      name: "App Store",
      href: "https://apps.apple.com/us/app/birbank/id1293207342",
      description: "Mobil tətbiqi yüklə",
      icon: birbankFooterAssets.appStoreIcon,
    },
    {
      id: "2",
      name: "Google Play",
      href: "https://play.google.com/store/apps/details?id=az.kapitalbank.mbanking",
      description: "Mobil tətbiqi yüklə",
      icon: birbankFooterAssets.googlePlayIcon,
    },
  ],
  socials: [
    {
      id: "facebook",
      href: "https://www.facebook.com/birbank",
      label: "Facebook",
    },
    {
      id: "instagram",
      href: "https://www.instagram.com/birbank.az/",
      label: "Instagram",
    },
    {
      id: "youtube",
      href: "https://www.youtube.com/channel/UC1p5TDF6qfzUm4sPqSYSGUA",
      label: "YouTube",
    },
  ],
} as const;
