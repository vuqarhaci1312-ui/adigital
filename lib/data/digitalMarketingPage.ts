import type { ServiceDetailPageData } from "@/lib/data/serviceDetailTypes";

export const digitalMarketingPageData: ServiceDetailPageData = {
  masthead: {
    breadcrumbs: [
      { label: "Ana səhifə", href: "/" },
      { label: "Xidmətlər", href: "/services" },
      { label: "Rəqəmsal marketinq", active: true },
    ],
    titleHtml:
      "Rəqəmsal marketinq xidmətləri<br /><em><strong>Lead, trafik və satış üçün</strong></em>",
    intro:
      "AysDigital — Ayşen Şəhrili komandası Meta Ads, Google Ads və SEO-nu vahid strategiyada birləşdirir. Ölçülən nəticələr, şəffaf hesabat və davamlı optimallaşdırma ilə brendinizi böyüdürük.",
    cta: { label: "Pulsuz marketinq audit", href: "/contact" },
  },
  serviceListing: {
    bgcolor:
      "linear-gradient(132.98deg, #003AA1 -30.13%, #001A49 100%)",
    headingHtml: "Rəqəmsal <br><span>marketinq xidmətlərimiz</span>",
    intro:
      "Brendiniz üçün tam miqyaslı marketinq paketi — kanallar arası uyğun mesaj, düzgün büdcə payı və real konversiya fokusu.",
    cards: [
      {
        titleHtml: "Meta Ads<br>(Instagram & Facebook)",
        description:
          "Hədəf auditoriya, kreativ və retargeting ilə sosial şəbəkələrdə ölçülən satış və lead.",
      },
      {
        titleHtml: "Google Ads<br>(PPC)",
        description:
          "Axtarış, Display və YouTube kampaniyaları — keyfiyyətli trafik və pozitiv ROI.",
      },
      {
        titleHtml: "SEO<br>(organik böyümə)",
        description:
          "Texniki SEO, kontent və link strategiyası ilə uzunmüddətli görünürlük və trafik.",
      },
      {
        titleHtml: "Kontent<br>marketinq",
        description:
          "Brend səsinə uyğun məzmun planı — bloq, sosial post və landing səhifələr.",
      },
      {
        titleHtml: "E-poçt<br>marketinq",
        description:
          "Seqmentləşdirilmiş kampaniyalar — lead bəsləmə və müştəri saxlanması.",
      },
      {
        titleHtml: "Analitika və<br>hesabat",
        description:
          "GA4, Piksel və konversiya izləmə — hər kanal üzrə aydın performans göstəriciləri.",
      },
    ],
  },
  benefitLight: {
    bgcolor: "#fff",
    headingHtml: "Niyə <span>rəqəmsal marketinq?</span>",
    intro:
      "Bir neçə kanalı eyni strategiyada birləşdirmək büdcəni səmərəli istifadə edir və nəticələri sürətləndirir.",
    cards: [
      {
        image: "https://thefinch.design/wp-content/uploads/2025/04/fi_425798.svg",
        titleHtml: "Geniş çatdırılma",
        description:
          "Meta, Google və organik axtarış ilə hədəf auditoriyaya eyni vaxtda çatın.",
      },
      {
        image:
          "https://thefinch.design/wp-content/uploads/2025/04/fi_8750790-2.svg",
        titleHtml: "Yüksək konversiya",
        description:
          "Landing və mesaj uyğunluğu ilə ziyarətçiləri müştəriyə çevirin.",
      },
      {
        image:
          "https://thefinch.design/wp-content/uploads/2025/04/fi_14251801.svg",
        titleHtml: "Səmərəli büdcə",
        description:
          "Hər manatın hesabatı var — lazımsız xərcləri kəsin, işləyən kanalları gücləndirin.",
      },
      {
        image:
          "https://thefinch.design/wp-content/uploads/2025/04/fi_12502688.svg",
        titleHtml: "Auditoriya ilə əlaqə",
        description:
          "Sosial və e-poçt vasitəsilə brend etibarını və sadiqliyi artırın.",
      },
      {
        image:
          "https://thefinch.design/wp-content/uploads/2025/04/fi_6872133.svg",
        titleHtml: "Data əsaslı qərarlar",
        description:
          "KPI-lər, A/B test və aylıq hesabatlarla strategiyanı daim yeniləyin.",
      },
      {
        image:
          "https://thefinch.design/wp-content/uploads/2025/04/fi_4064227.svg",
        titleHtml: "Brend tanınırlığı",
        description:
          "Davamlı görünürlük və tutarlı vizual dil ilə bazarda fərqlənin.",
      },
    ],
    contact: {
      title: "Layihəniz üçün uyğun modeli seçin",
      description: "Sabit paket, saatlıq və ya aylıq idarəetmə — ehtiyacınıza uyğun.",
      ctaLabel: "Pulsuz konsultasiya",
      ctaHref: "/contact",
    },
  },
  consultingProcess: {
    headingHtml: "Yanaşmamız:<br><span>AysDigital metodu</span>",
    intro:
      "Hər kampaniya biznes məqsədlərinizə uyğun planlaşdırılır — altı addımlı sübut olunmuş proses:",
    steps: [
      {
        title: "Addım 1: Audit və auditoriya təhlili",
        description:
          "Mövcud hesablar, rəqiblər və bazar trendlərini yoxlayırıq — güclü tərəflər və boşluqları müəyyən edirik.",
      },
      {
        title: "Addım 2: Strategiya və kanal planı",
        description:
          "Meta, Google və SEO-nu eyni funnel məntiqində birləşdirən fərdi plan hazırlayırıq.",
      },
      {
        title: "Addım 3: Kampaniya xəritəsi",
        description:
          "Müddət, KPI və büdcə bölgüsü — hər addımın ölçülə bilən hədəfi var.",
      },
      {
        title: "Addım 4: İcra və kreativ",
        description:
          "Reklam quruluşu, mətn və vizual — bütün kanallarda vahid mesaj.",
      },
      {
        title: "Addım 5: Monitorinq",
        description:
          "Real vaxtda performans izləmə — CPA, ROAS və CTR üzrə düzəlişlər.",
      },
      {
        title: "Addım 6: Optimallaşdırma",
        description:
          "Davamlı test və təkmilləşdirmə — uzunmüddətli böyümə və maksimum ROI.",
      },
    ],
  },
  benefitDark: {
    bgcolor: "#000",
    dark: true,
    headingHtml:
      "Niyə rəqəmsal marketinq üçün<br><span>AysDigital?</span>",
    intro:
      "Ayşen Şəhrili və komanda Meta, Google və SEO təcrübəsini bir yerdə təqdim edir.",
    cards: [
      {
        image:
          "https://thefinch.design/wp-content/uploads/2025/04/Vector-23.png",
        titleHtml: "Data əsaslı idarəetmə",
        description:
          "Hər qərər rəqəmlərlə əsaslanır — şəffaf hesabat və aydın tövsiyələr.",
      },
      {
        image:
          "https://thefinch.design/wp-content/uploads/2025/04/fi_4287537.png",
        titleHtml: "Təcrübəli komanda",
        description:
          "Reklam platformaları və konversiya optimallaşdırmasında praktiki bilik.",
      },
      {
        image:
          "https://thefinch.design/wp-content/uploads/2025/04/fi_8992414.png",
        titleHtml: "Kampaniya monitorinqi",
        description:
          "Gündəlik izləmə — problemlər tez aşkarlanır, büdcə qorunur.",
      },
      {
        image:
          "https://thefinch.design/wp-content/uploads/2025/04/fi_10172791.png",
        titleHtml: "Çevik qiymət",
        description:
          "Kiçik biznesdən böyüyən brendə qədər — ölçünüzə uyğun paketlər.",
      },
      {
        image:
          "https://thefinch.design/wp-content/uploads/2025/04/fi_2554812.png",
        titleHtml: "Landing optimallaşdırması",
        description:
          "Reklam trafiki üçün sürətli və konversiya yönəmli səhifə təcrübəsi.",
      },
    ],
  },
};
