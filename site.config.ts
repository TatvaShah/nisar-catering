import type { SiteConfig } from "@/lib/types";

// The ONLY file a builder edits (plus images in /public).
// Empty or missing optional fields hide their section automatically.
// Use real facts only: the leads JSON, the IG profile, and posts. Never invent hours, prices, or reviews.
// No double hyphens anywhere in copy; the build fails if one slips in.

export const site: SiteConfig = {
  name: "Nisar Catering",
  tagline: "Wedding and event catering across the GTA, with authentic Indian and Indo-fusion flavours.",
  category: "Wedding and event catering",
  schemaType: "FoodEstablishment",
  area: "GTA, ON",
  siteUrl: "https://nisar-catering.vercel.app",

  theme: {
    preset: "catering-events",
    colors: { accent: "#632551" },
    wordmark: "script",
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Serving the GTA and Ontario",
    headline: "Catering that turns gatherings into celebrations",
    subhead: "From intimate get-togethers to grand weddings, we bring quality food and warm hospitality to your event. Send a DM with your date and guest count to get started.",
    images: [
      { src: "/images/post-1.jpg", alt: "Catered celebration spread by Nisar Catering" },
      { src: "/images/post-2.jpg", alt: "Event catering presentation" },
      { src: "/images/post-3.jpg", alt: "Wedding and party food service" },
    ],
    secondaryCta: { label: "See our work", href: "#gallery" },
  },

  highlights: [
    "23+ years serving the GTA",
    "Authentic Indian and Indo-fusion",
    "Weddings, birthdays, and corporate events",
    "Catering across the GTA and Ontario",
  ],

  about: {
    title: "Food and hospitality for every celebration",
    body: [
      "Nisar Catering specializes in wedding and event catering across the GTA, blending diverse cuisines with cultural richness. With over 23 years of proudly serving the GTA and surrounding areas, we continue to turn gatherings into memorable celebrations.",
      "We specialize in authentic Indian and creative Indo-fusion cuisine, carefully crafting every menu to match the occasion with quality, flavour, and presentation. From elegant weddings to birthdays, bridal showers, and corporate gatherings, our team focuses on delicious food and seamless service so you can enjoy your special moments.",
    ],
    image: { src: "/images/post-4.jpg", alt: "Nisar Catering event service" },
  },

  menu: {
    label: "Menu",
    title: "What we cater",
    intro: "Menus are tailored to your celebration. Message us for ideas and a quote for your date and guest count.",
    variant: "list",
    showPrices: false,
    priceNote: "Message us for pricing on your date and guest count.",
    groups: [
      {
        title: "Cuisine",
        items: [
          { name: "Authentic Indian", description: "Classic dishes crafted for the occasion.", dietary: ["halal"] },
          { name: "Indo-fusion", description: "Creative fusion menus that match your style of celebration." },
        ],
      },
      {
        title: "Occasions",
        items: [
          { name: "Weddings", description: "Full catering for intimate ceremonies and grand celebrations." },
          { name: "Birthdays and bridal showers", description: "Flavourful menus sized for your guest list." },
          { name: "Corporate gatherings", description: "Professional service for meetings and company events." },
        ],
      },
    ],
    footnote: "Ask about custom menus when you reach out by DM.",
  },

  gallery: {
    title: "From our events",
    items: [
      { src: "/images/post-1.jpg", width: 1080, height: 1350, alt: "Celebration catering spread", caption: "Quality food for every event", href: "https://www.instagram.com/p/DehH7iqDFXz/" },
      { src: "/images/post-2.jpg", width: 1080, height: 1350, alt: "Event catering presentation", caption: "Memorable celebrations", href: "https://www.instagram.com/p/Dd9ExC1Cb44/" },
      { src: "/images/post-3.jpg", width: 1080, height: 1350, alt: "Party and wedding service", caption: "Serving the GTA and Ontario", href: "https://www.instagram.com/p/DePGXArjZ73/" },
      { src: "/images/post-4.jpg", width: 1080, height: 1920, alt: "Indian and Indo-fusion catering", caption: "Authentic Indian and Indo-fusion", href: "https://www.instagram.com/p/DeRkYoMAboT/" },
      { src: "/images/post-5.jpg", width: 1080, height: 1920, alt: "Wedding and corporate catering", caption: "Weddings to corporate events", href: "https://www.instagram.com/p/DeAFDdvD388/" },
      { src: "/images/post-6.jpg", width: 1080, height: 1920, alt: "Guest feedback moment", caption: "Thank you for choosing us", href: "https://www.instagram.com/p/DeZStmkDWka/" },
      { src: "/images/post-7.jpg", width: 1080, height: 1920, alt: "Hospitality at a celebration", caption: "Food and hospitality", href: "https://www.instagram.com/p/Deew43ZlO8u/" },
      { src: "/images/post-8.jpg", width: 1080, height: 1920, alt: "Nisar Catering event highlight", caption: "From our recent events" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "nisar.catering",
    embeds: [
      "https://www.instagram.com/p/DehH7iqDFXz/",
      "https://www.instagram.com/p/DeRkYoMAboT/",
      "https://www.instagram.com/p/DeAFDdvD388/",
    ],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    title: "Plan your event in a quick DM",
    intro: "Enquiries are taken through Instagram. Tap the button to copy a starter message, then paste it into the chat.",
    dmMessage: "Hi Nisar Catering! I would like to enquire about catering.\nEvent date:\nServings or guest count:\nFlavour preferences (Indian, Indo-fusion, mix):\nDesign idea or menu style:\nOccasion (wedding, birthday, bridal shower, corporate):\n",
    links: [],
    note: "We cater across the GTA and Ontario. Reach out early for peak wedding dates.",
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book catering?", a: "Send a DM on Instagram with your event date, guest count, and what kind of menu you have in mind. We will follow up in the chat." },
    { q: "Where do you cater?", a: "We cater all over the GTA and Ontario." },
    { q: "What cuisine do you specialize in?", a: "Authentic Indian and creative Indo-fusion cuisine, tailored to your occasion." },
    { q: "What kinds of events do you cover?", a: "Weddings, birthdays, bridal showers, corporate gatherings, and celebrations of every size." },
  ],

  contact: {
    area: "GTA, Ontario",
    socials: [],
  },

  seo: {
    title: "Nisar Catering | Wedding and event catering in the GTA",
    description: "Wedding and event catering across the GTA and Ontario. Authentic Indian and Indo-fusion cuisine. Enquire by Instagram DM.",
    keywords: ["wedding catering GTA", "Indian catering Ontario", "event catering Toronto", "Indo-fusion catering"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
