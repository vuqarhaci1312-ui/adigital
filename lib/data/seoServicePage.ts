import type { ServiceDetailPageData } from "@/lib/data/serviceDetailTypes";

export const seoServicePageData: ServiceDetailPageData = {
  masthead: {
    breadcrumbs: [
      { label: "Ana səhifə", href: "/" },
      { label: "Xidmətlər", href: "/services" },
      { label: "SEO", active: true },
    ],
    titleHtml:
      "SEO xidmətləri<br />Yüksək reytinq, trafik<br /><em><strong>və gəlir</strong></em>",
    intro:
      "AysDigital ilə saytınız axtarışda daha görünən olur — texniki SEO, kontent və link strategiyası ilə organik trafik və keyfiyyətli lead əldə edin.",
    cta: { label: "Pulsuz SEO audit", href: "/contact" },
  },
  serviceListing: {
    bgcolor:
      "linear-gradient(132.98deg, #003AA1 -30.13%, #001A49 100%)",
    headingHtml:
      "Tam miqyaslı <br><span>SEO xidmətləri</span>",
    intro:
      "Kiçik biznesdən böyüyən brendə qədər — fərdi SEO planı ilə uzunmüddətli organik böyümə.",
    cards: [
      {
        titleHtml: "SEO audit və<br>sayt analizi",
        description:
          "Texniki, on-page və off-page problemlərin aşkarlanması və prioritet planı.",
      },
      {
        titleHtml: "Açar söz<br>strategiyası",
        description:
          "Auditoriyanızın axtardığı sorğular — yüksək potensiallı açar sözlər.",
      },
      {
        titleHtml: "On-page SEO",
        description:
          "Meta, kontent, sürət və mobil uyğunluq — hər səhifə optimallaşdırılır.",
      },
      {
        titleHtml: "Off-page və<br>link qurma",
        description:
          "Etibarlı domenlərdən keyfiyyətli backlink — autoritetin artması.",
      },
      {
        titleHtml: "Lokal SEO",
        description:
          "Google Biznes Profili və lokal sitatlar — yaxınlıqdakı müştərilər üçün.",
      },
      {
        titleHtml: "Texniki SEO",
        description:
          "İndeksləmə, crawl xətaları, struktur data və təhlükəsizlik.",
      },
    ],
  },
  benefitLight: {
    bgcolor: "#fff",
    headingHtml: "Niyə <span>SEO?</span>",
    intro:
      "Ödənişli reklam dayananda da organik trafik gətirir — uzunmüddətli və sərfəli kanal.",
    cards: [
      {
        image:
          "https://thefinch.design/wp-content/uploads/2025/04/fi_18994226.svg",
        titleHtml: "Organik trafik",
        description:
          "SERPlərdə yüksək mövqe — aktiv axtaran istifadəçilərə çatın.",
      },
      {
        image:
          "https://thefinch.design/wp-content/uploads/2025/04/fi_14251801.svg",
        titleHtml: "Uzunmüddətli dəyər",
        description:
          "İlkin investisiyadan sonra davamlı trafik — hər klik üçün ödəniş yoxdur.",
      },
      {
        image:
          "https://thefinch.design/wp-content/uploads/2025/04/fi_3103218.svg",
        titleHtml: "Rəqabət üstünlüyü",
        description:
          "Güclü SEO strategiyası ilə rəqiblərdən əvvəl görünün.",
      },
      {
        image:
          "https://thefinch.design/wp-content/uploads/2025/04/Comprehensive-Support-from-Strategy.svg",
        titleHtml: "Daha yüksək konversiya",
        description:
          "Düzgün açar söz və UX — düzgün ziyarətçi, daha çox satış.",
      },
      {
        image:
          "https://thefinch.design/wp-content/uploads/2025/04/fi_407061.svg",
        titleHtml: "Lokal axtarış",
        description:
          "Bakı və region üçün lokal sorğularda üst sıralarda yer alın.",
      },
    ],
  },
  consultingProcess: {
    headingHtml:
      "Yüksək reytinq üçün<br><span>prosesimiz</span>",
    intro:
      "Altı addımlı SEO prosesi — davamlı monitorinq və təkmilləşdirmə ilə.",
    steps: [
      {
        title: "Addım 1: SEO audit",
        description:
          "Saytın cari vəziyyəti, rəqiblər və texniki problemlərin tam xəritəsi.",
      },
      {
        title: "Addım 2: Açar söz tədqiqatı",
        description:
          "İstifadəçi niyyətinə uyğun sorğular və prioritet siyahı.",
      },
      {
        title: "Addım 3: On-page və texniki SEO",
        description:
          "Struktur, meta, sürət və mobil — crawlerlar üçün ideal vəziyyət.",
      },
      {
        title: "Addım 4: Kontent strategiyası",
        description:
          "SEO uyğun, oxunaqlı məzmun — autoritet və engagement.",
      },
      {
        title: "Addım 5: Link qurma",
        description:
          "Off-page gücləndirmə — etibar və reytinq artımı.",
      },
      {
        title: "Addım 6: Monitorinq",
        description:
          "Reytinq, trafik və konversiya izləmə — strategiyanın davamlı yenilənməsi.",
      },
    ],
  },
  benefitDark: {
    bgcolor: "#000",
    dark: true,
    headingHtml: "SEO üçün niyə <br><span>AysDigital?</span>",
    intro:
      "Ayşen Şəhrili komandası ilə ölçülən nəticələr və şəffaf hesabat.",
    cards: [
      {
        image:
          "https://thefinch.design/wp-content/uploads/2025/04/fi_7477522.png",
        titleHtml: "Sübut olunmuş nəticələr",
        description:
          "Organik trafik və reytinq artımı — real KPI-lərlə izlənir.",
      },
      {
        image:
          "https://thefinch.design/wp-content/uploads/2025/04/fi_4287537-1.png",
        titleHtml: "SEO mütəxəssisləri",
        description:
          "Texniki auditdən kontentə qədər tam spektr bilik.",
      },
      {
        image:
          "https://thefinch.design/wp-content/uploads/2025/04/fi_1744015.png",
        titleHtml: "Fərdi strategiya",
        description:
          "Sektora və hədəf auditoriyaya uyğun plan — şablon yox.",
      },
      {
        image:
          "https://thefinch.design/wp-content/uploads/2025/04/fi_726199.png",
        titleHtml: "Şəffaf hesabat",
        description:
          "Aylıq hesabat — nə işlədiyini və növbəti addımları görürsünüz.",
      },
    ],
  },
};
