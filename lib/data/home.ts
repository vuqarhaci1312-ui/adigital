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
    { label: "Layihələr", href: "/work" },
    { label: "Yanaşma", href: "/approach" },
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
    titleLine1Em: "Brendinizi",
    titleLine1Rest: " tanıtdırırıq,",
    titleLine2Before: "satışlarınızı ",
    titleLine2Em: "artırırıq",
    titleLine2Rest: "",
    subtitle:
      "Ayshen Şəhriliyə məxsus AysDigital — Meta Ads, Google Ads, SEO və rəqəmsal marketinq xidmətləri.",
  },
  ambition: {
    subtitle: "Missiyamız",
    titleLine1Before: "Biz ",
    titleLine1Em: "yeni olanı",
    titleLine1Rest: " mümkün edirik.",
    titleLine2: "Yeni aydınlıq. Yeni sistemlər. Yeni gələcəklər.",
    videoPlaybackId: "s8H3pNmZW02tke0000DMG9V4q1g3phV005QOmpFOSbRBcz00",
  },
  selectedWork: {
    subtitle: "Selected Work",
    title: {
      before: "Work created at moments where change\nbecomes ",
      em: "inevitable by design",
      after: ".",
    },
    items: [
      {
        slug: "soros",
        title: "SOROS",
        subtitle: "Designing trust for decentralized commerce.",
        image:
          "https://cdn.sanity.io/images/sym1v71u/production/d640a2e343fa1d753235836b8508b6a8b11caba5-4000x3000.jpg?auto=format&fm=webp&q=90",
        alt: "SOROS logo on gradient ",
        tags: [
          "Brand Strategy",
          "Naming",
          "Brand Identity",
          "Logo",
          "Guidelines",
          "Product Design",
          "Digital Experience",
          "Design Systems",
          "Web",
          "Engineering",
        ],
        gridClass: "sm:col-span-6 col-span-4",
      },
      {
        slug: "robotic-implant-center",
        title: "Robotic Implant Center",
        subtitle: "Positioning robotic dentistry as a category leader.",
        image:
          "https://cdn.sanity.io/images/sym1v71u/production/3737ada2253f517d8c9bc9753968339a5f9cb7ef-2186x1061.png?auto=format&fm=webp&q=90",
        alt: "Robotic Implant Center",
        tags: [
          "Brand Strategy",
          "Naming",
          "Logo",
          "Digital Experience",
          "Web",
          "Engineering",
          "Motion & Video",
        ],
        gridClass: "sm:col-span-5 sm:col-start-8 col-span-4",
      },
      {
        slug: "utica-public-library",
        title: "Utica Public Library",
        subtitle:
          "Rebuilding clarity for a historic institution at the heart of Utica.",
        image:
          "https://cdn.sanity.io/images/sym1v71u/production/f88416219d0a433d8614c6de800531a268f0f06a-3712x2296.webp?auto=format&fm=webp&q=90",
        alt: "Front of a library building with banners.",
        tags: [
          "Brand Strategy",
          "Research",
          "Brand Identity",
          "Logo",
          "Guidelines",
          "Campaigns",
        ],
        gridClass: "sm:col-span-12 col-span-4",
      },
      {
        slug: "citi-bike-plus",
        title: "Citi Bike Plus",
        subtitle:
          "Extending Citi Bike into a smarter way to move through the city.",
        image:
          "https://cdn.sanity.io/images/sym1v71u/production/20d282c91ade23ed3d2d70e5fef1d3cd8f49813f-3000x1856.webp?auto=format&fm=webp&q=90",
        alt: "Side view of a branded Citi Bike+ van parked on the street, featuring a bold blue graphic with the phrase “Transporting the future.” promoting sustainable urban mobility.",
        tags: [
          "Brand Strategy",
          "Naming",
          "Brand Identity",
          "Logo",
          "Guidelines",
          "Campaigns",
        ],
        gridClass: "sm:col-span-5 col-span-4",
      },
      {
        slug: "hint",
        title: "Hint",
        subtitle: "Designing a new category for everyday scent.",
        image:
          "https://cdn.sanity.io/images/sym1v71u/production/a970dee8916f3ebb0ede4eaae4bd213f41bd6e71-2000x1237.webp?auto=format&fm=webp&q=90",
        alt: "Bus stop ad for Hint featuring tree graphics and the tagline “the great scent of trees. not chemicals.” promoting a natural scent alternative in a clean, minimalist layout.",
        tags: [
          "Naming",
          "Research",
          "Brand Identity",
          "Logo",
          "Guidelines",
          "Campaigns",
          "Packaging",
        ],
        gridClass: "sm:col-span-6 sm:col-start-7 col-span-4",
      },
    ],
  },
  cta: {
    title: "Growing Products by\nRedefining Culture.",
    buttonLabel: "Our Approach",
    buttonHref: "/approach",
    image:
      "https://cdn.sanity.io/images/sym1v71u/production/c0b578d987b607848633e1e2cc17859e5afcd796-3840x2160.png?auto=format&fm=webp&q=90",
    alt: "New Studio Work",
  },
  insights: {
    subtitle: "Insights",
    title: { before: "The latest from ", em: "our world and beyond." },
    items: [
      {
        slug: "the-future-of-design-isnt-design",
        title: "The Future of Design Isn’t Design",
        date: "Posted 87 days ago",
        tag: "Opinion",
        image:
          "https://cdn.sanity.io/images/sym1v71u/production/676693ce38aa94109fe9795a1751e278d9f6bcc1-3072x2048.jpg?auto=format&fm=webp&q=90",
        alt: 'Gradient image with title "the future of design isn\'t design"',
        type: "image" as const,
      },
      {
        slug: "new-studio-featured-on-navbar-gallery",
        title: "New Studio featured on Navbar Gallery",
        date: "Posted 97 days ago",
        tag: "Press",
        playbackId: "WJpYMc8gU02NaYZqRjqpPrI76aCCoGi4wZ2TJfaZdp3E",
        type: "video" as const,
      },
      {
        slug: "jonathan-lin-gives-talk-at-aicad-conference",
        title: "Jonathan Lin gives talk at AICAD Conference",
        date: "Posted 165 days ago",
        tag: "Press",
        image:
          "https://cdn.sanity.io/images/sym1v71u/production/d1de234d30087c8ce232fb9323970314217262e7-5993x3995.jpg?auto=format&fm=webp&q=90",
        alt: "AICAD New Studio",
        type: "image" as const,
      },
    ],
  },
  footer: {
    title: "Build Your New\nFuture With Us",
    description:
      "New Studio is a New York-based brand transformation studio helping organizations navigate growth, reinvention, and change through strategy, design, and digital.",
    address: {
      lines: siteContact.address.lines,
      url: siteContact.address.url,
    },
    email: siteContact.email,
    scheduleUrl: siteContact.phoneHref,
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/wearenewstudio" },
      { label: "TikTok", href: "https://www.tiktok.com/@wearenewstudio" },
      { label: "GitHub", href: "https://www.github.com/wearenewstudio" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/newstudio" },
      { label: "X", href: "https://x.com/wearenewstudio" },
    ],
  },
};
