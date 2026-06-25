const CDN = "https://cdn.prod.website-files.com/67a494b68e0dbff37f9a3dc4";

export const capvidCtaData = {
  tag: "Başlayın",
  heading: "Marketinqinizi AI ilə idarə edin",
  description:
    "Facebook, LinkedIn, Instagram, TikTok və satış kanallarınızı tam otonom idarə edən platforma ilə tanış olun.",
  buttonLabel: "Başlayın",
  buttonHref: "/xidmetler",
  image: {
    src: `${CDN}/67aa0987acae1a313ce71397_cta-image.webp`,
    srcSet: [
      `${CDN}/67aa0987acae1a313ce71397_cta-image-p-500.webp 500w`,
      `${CDN}/67aa0987acae1a313ce71397_cta-image-p-800.webp 800w`,
      `${CDN}/67aa0987acae1a313ce71397_cta-image-p-1080.webp 1080w`,
      `${CDN}/67aa0987acae1a313ce71397_cta-image-p-1600.webp 1600w`,
      `${CDN}/67aa0987acae1a313ce71397_cta-image-p-2000.webp 2000w`,
      `${CDN}/67aa0987acae1a313ce71397_cta-image.webp 2400w`,
    ].join(", "),
    sizes:
      "(max-width: 479px) 85vw, (max-width: 767px) 90vw, (max-width: 991px) 88vw, 92vw",
  },
  pattern: {
    src: `${CDN}/67aa0a1c95c58e4800b3ec22_cta-pattern.png`,
    srcSet: [
      `${CDN}/67aa0a1c95c58e4800b3ec22_cta-pattern-p-500.png 500w`,
      `${CDN}/67aa0a1c95c58e4800b3ec22_cta-pattern-p-800.png 800w`,
      `${CDN}/67aa0a1c95c58e4800b3ec22_cta-pattern-p-1080.png 1080w`,
      `${CDN}/67aa0a1c95c58e4800b3ec22_cta-pattern-p-1600.png 1600w`,
      `${CDN}/67aa0a1c95c58e4800b3ec22_cta-pattern.png 2000w`,
    ].join(", "),
    sizes: "(max-width: 479px) 91vw, (max-width: 767px) 95vw, 92vw",
  },
} as const;
