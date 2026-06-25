import type { InsightArticle, InsightListItem } from "@/lib/data/insightTypes";

const defaultAuthor = {
  name: "Ayşen Şəhrili",
  href: "/contact",
} as const;

export const insightArticles: InsightArticle[] = [
  {
    slug: "reqemsal-marketinqde-melumat-esasli-qerarverme",
    title: "Rəqəmsal marketinqdə məlumat əsaslı qərarvermə",
    date: "87 gün əvvəl",
    publishedAt: "27 mart 2026",
    tag: "Fikir",
    type: "image",
    image:
      "https://cdn.sanity.io/images/sym1v71u/production/676693ce38aa94109fe9795a1751e278d9f6bcc1-3072x2048.jpg?auto=format&fm=webp&q=90",
    alt: "Rəqəmsal marketinqdə məlumat əsaslı qərarvermə",
    description:
      "Kampaniya nəticələrini düzgün oxumaq, reklam büdcəsini səmərəli idarə etmək və qərarları təxmin yox, məlumat əsasında vermək.",
    author: defaultAuthor,
    body: [
      {
        type: "paragraph",
        text: "Rəqəmsal marketinqdə uğur artıq yalnız yaradıcı ideyadan asılı deyil. Brendlər hansı kanala nə qədər investisiya edəcəyini, hansı mesajın daha çox reaksiya aldığını və hansı addımın satışa çevrildiyini rəqəmlərlə görməlidir.",
      },
      {
        type: "paragraph",
        text: "AysDigital komandası Meta Ads, Google Ads və SEO kampaniyalarında hər addımı ölçülən göstəricilərlə izləyir. Klik, baxış, konversiya və xərcləmə bir-biri ilə müqayisə olunmadıqda marketinq sadəcə xərc maddəsinə çevrilir.",
      },
      {
        type: "quote",
        text: "Düzgün qərar vermək üçün əvvəlcə düzgün məlumat toplamaq lazımdır.",
      },
      {
        type: "paragraph",
        text: "Məlumat əsaslı yanaşma brendə daha aydın strategiya verir: hansı auditoriya dəyərlidir, hansı kreativ işləyir, harada optimallaşdırma tələb olunur. Beləliklə, büdcə itirmədən nəticə artırmaq mümkün olur.",
      },
      {
        type: "paragraph",
        text: "Bizim məqsədimiz yalnız hesabat təqdim etmək deyil — hər ay daha ağıllı, daha səmərəli və daha ölçülən marketinq sistemi qurmaqdır.",
      },
    ],
  },
  {
    slug: "meta-ads-ile-satislarin-artirilmasi",
    title: "Meta Ads ilə satışların artırılması: praktik yanaşma",
    date: "97 gün əvvəl",
    publishedAt: "17 mart 2026",
    tag: "Təcrübə",
    type: "video",
    playbackId: "WJpYMc8gU02NaYZqRjqpPrI76aCCoGi4wZ2TJfaZdp3E",
    description:
      "Instagram və Facebook reklamlarında auditoriya, kreativ və optimallaşdırmanı necə birlikdə işlətmək olar.",
    author: defaultAuthor,
    body: [
      {
        type: "paragraph",
        text: "Meta Ads platformasında uğur təsadüfi deyil. Düzgün hədəf auditoriya, güclü vizual mesaj və davamlı test prosesi bir araya gələndə satışlar artır.",
      },
      {
        type: "paragraph",
        text: "AysDigital olaraq kampaniyalara brendin mövqeyini və satış hədəflərini aydın müəyyən etməklə başlayırıq. Sonra kreativ variantlar hazırlanır, reklam setləri ayrılır və hansı kombinasiyanın daha yaxşı nəticə verdiyi izlənilir.",
      },
      {
        type: "quote",
        text: "Eyni büdcə ilə daha çox satış əldə etmək mümkündür — bunun üçün düzgün struktur və davamlı optimallaşdırma lazımdır.",
      },
      {
        type: "paragraph",
        text: "Retargeting, lookalike auditoriya və A/B testləri sayəsində reklam xərcləri daha səmərəli istifadə olunur. Beləliklə, brend yalnız baxış yox, real sorğu və satış alır.",
      },
      {
        type: "paragraph",
        text: "Meta Ads biznesin böyüməsi üçün sürətli alət ola bilər — yalnız strategiya, kreativ və analitika birlikdə idarə olunduqda.",
      },
    ],
  },
  {
    slug: "seo-ile-uzunmuddetli-gorunurluk",
    title: "SEO ilə uzunmüddətli görünürlük necə qazanılır",
    date: "165 gün əvvəl",
    publishedAt: "8 yanvar 2026",
    tag: "Məsləhət",
    type: "image",
    image:
      "https://cdn.sanity.io/images/sym1v71u/production/d1de234d30087c8ce232fb9323970314217262e7-5993x3995.jpg?auto=format&fm=webp&q=90",
    alt: "SEO ilə uzunmüddətli görünürlük",
    description:
      "Axtarış nəticələrində davamlı görünmək üçün texniki SEO, məzmun və etibarlılıq prinsipləri.",
    author: defaultAuthor,
    body: [
      {
        type: "paragraph",
        text: "SEO qısamüddətli reklam kampaniyası deyil — uzunmüddətli investisiyadır. Düzgün qurulduqda brend axtarış nəticələrində davamlı görünür və keyfiyyətli trafik cəlb edir.",
      },
      {
        type: "paragraph",
        text: "Uğurlu SEO strategiyası üç əsas hissədən ibarətdir: texniki sağlamlıq, istifadəçiyə faydalı məzmun və axtarış sistemlərinin etibar etdiyi sayt strukturu. Bu üçü bir-birini tamamlayır.",
      },
      {
        type: "quote",
        text: "Axtarışda qalmaq üçün yalnız açar söz deyil, həqiqətən dəyərli məzmun lazımdır.",
      },
      {
        type: "paragraph",
        text: "AysDigital SEO xidmətlərində saytın sürətini, mobil uyğunluğunu və məzmun planını birlikdə nəzərdən keçirir. Məqsəd yalnız trafik artırmaq deyil — doğru auditoriyanı cəlb edib onu müştəriyə çevirməkdir.",
      },
      {
        type: "paragraph",
        text: "SEO nəticələri bir gecədə gəlmir, amma düzgün yanaşma ilə brend rəqiblərin önündə dayanıqlı mövqe qazanır.",
      },
    ],
  },
];

export const insightListItems: InsightListItem[] = insightArticles.map(
  ({
    slug,
    title,
    date,
    tag,
    type,
    image,
    alt,
    playbackId,
  }) => ({
    slug,
    title,
    date,
    tag,
    type,
    image,
    alt,
    playbackId,
  })
);

export function getInsightBySlug(slug: string): InsightArticle | undefined {
  return insightArticles.find((article) => article.slug === slug);
}

export function getAllInsightSlugs(): string[] {
  return insightArticles.map((article) => article.slug);
}
