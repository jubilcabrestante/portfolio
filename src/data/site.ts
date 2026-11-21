// site.ts: all Dzypher landing-page copy and facts in one place.
// Facts here come from PRODUCT.md; anything illustrative is labelled where it renders.

import type { IconName } from "@/components/ui/Icon";

export const studio = {
  name: "Dzypher",
  email: "jubilcabrestante.work@gmail.com",
  location: "Puerto Princesa, Palawan, Philippines",
  timezone: "Philippine time (UTC+8)",
  socials: [
    { label: "GitHub", href: "https://github.com/jubilcabrestante" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jubil-cabrestante-2b4118375/" },
  ],
};

export const nav = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/#process", label: "Process" },
  { href: "/#studio", label: "Studio" },
];

export const stackTicker = [
  "Flutter",
  "Kotlin",
  "Next.js",
  "React",
  "Firebase",
  "Supabase",
  "Node.js",
  "Tailwind CSS",
  "iOS",
  "Android",
  "Figma",
];

export const storySteps = [
  {
    title: "A customer orders on their phone",
    text: "Checkout in the Suki Perks app: GCash payment, points earned, delivery by Suki Rider.",
  },
  {
    title: "It lands on the dashboard instantly",
    text: "The order appears in Suki Business the moment it’s placed, with sales and rewards updated.",
  },
  {
    title: "Every screen stays in sync",
    text: "The store taps Accept, and the customer’s app shows the order is being prepared. One backend, both directions.",
  },
];

export type CoreService = {
  id: "mobile" | "web";
  icon: IconName;
  title: string;
  summary: string;
  builds: string[];
  stack: string[];
  /** headline technologies shown as badges on the service tile */
  tech: string[];
};

export const coreServices: CoreService[] = [
  {
    id: "mobile",
    icon: "phone",
    title: "Mobile apps",
    summary: "iOS and Android apps built with Flutter, plus native Android apps in Kotlin, published to the App Store and Google Play.",
    builds: [
      "Customer apps for ordering, booking, and loyalty",
      "Staff, merchant, and courier apps",
      "Push notifications, maps, and in-app payments",
      "Releases to the App Store and Google Play",
    ],
    stack: ["Flutter", "Kotlin", "Dart", "Firebase"],
    tech: ["Flutter", "Kotlin"],
  },
  {
    id: "web",
    icon: "browser",
    title: "Web apps",
    summary: "Web apps, dashboards, and websites built with Next.js that work on any screen.",
    builds: [
      "Admin dashboards, CRMs, and internal tools",
      "Customer portals and online storefronts",
      "Document and workflow systems",
      "Marketing websites and landing pages",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Node.js"],
    tech: ["Next.js", "React"],
  },
];

export const supportServices = [
  {
    title: "UI/UX design",
    text: "We map the user flows and design the screens before the build, so you can review the product early.",
  },
  {
    title: "Backend & cloud",
    text: "APIs, databases, sign-in, and hosting, set up on Firebase or Supabase.",
  },
  {
    title: "E-commerce & payments",
    text: "Storefronts, carts, and ordering, with local payments such as GCash, Maya, and QR Ph.",
  },
  {
    title: "Maintenance & support",
    text: "Updates, fixes, app-store releases, and monitoring after launch.",
  },
];

export const audiences = [
  {
    title: "Startups and founders",
    text: "A first version across web and mobile that you can put in front of users and keep building on.",
  },
  {
    title: "Local businesses",
    text: "Ordering, loyalty, and booking apps, with the dashboard you need to run them.",
  },
  {
    title: "Offices and institutions",
    text: "Systems that turn paper trails into tracked, searchable records.",
  },
  {
    title: "Overseas teams",
    text: "A remote team working in Philippine time (UTC+8), in English.",
  },
];

export const suki = {
  name: "Suki",
  logo: "/assets/suki/logo.png",
  kind: "Loyalty and ordering platform",
  summary:
    "Customers shop and earn points, merchants run orders and rewards, and couriers deliver. Every app runs on one Supabase backend, so a single order shows up everywhere it needs to.",
  role: "We built the platform end to end: the mobile apps, the web apps, and the backend.",
  mobileApps: [
    { name: "Suki Perks", job: "Customers shop, pay, and earn points" },
    { name: "Suki Business", job: "Merchants run POS, orders, and reports" },
    { name: "Suki Rider", job: "Couriers pick up and deliver" },
  ],
  webApps: [
    { name: "Storefront", job: "Customers order from the web" },
    { name: "Merchant console", job: "Orders, products, rewards, wallet" },
    { name: "Marketing site", job: "Landing pages and legal" },
  ],
  backend: [
    "One shared Supabase Postgres database",
    "28 Edge Functions",
    "Realtime updates and push notifications",
    "Payments through Maya Checkout: cards, Maya, QR Ph",
  ],
};

export const tagaCuyo = {
  name: "Taga-Cuyo",
  kind: "Language learning",
  summary:
    "A Tagalog–Cuyonon learning app with lessons, quizzes, and a translator powered by a sequence-to-sequence model trained in Python, made to help keep Palawan’s Cuyonon language in everyday use.",
  award: "Best Capstone Project Paper, PSU 2025 Research Colloquium",
  stack: ["Flutter", "Firebase", "Python"],
  screens: [
    { src: "/assets/taga-cuyo/2.png", alt: "Taga-Cuyo home screen with a learning adventure banner and Cuyo festival photos" },
    { src: "/assets/taga-cuyo/3.png", alt: "Taga-Cuyo translator screen for Tagalog to Cuyonon" },
    { src: "/assets/taga-cuyo/4.png", alt: "Taga-Cuyo lesson screen with the corn mascot greeting “Mayad nga adlaw!”" },
  ],
};

export const process = [
  {
    title: "Discover",
    text: "We learn how your business works, who will use the product, and what it has to do first.",
  },
  {
    title: "Design",
    text: "We map the flows and design the key screens, so you can see the product before we build it.",
  },
  {
    title: "Build",
    text: "We build the apps and the backend in short cycles and share working versions as we go.",
  },
  {
    title: "Launch",
    text: "We test on real devices, publish to the App Store and Google Play, and deploy the web apps.",
  },
  {
    title: "Support",
    text: "We stay on after launch for fixes, updates, and the next round of features.",
  },
];

export const founder = {
  name: "Jubil Cabrestante",
  role: "Founder and lead developer",
  photo: "/assets/profile-2026.png",
  bio: [
    "Jubil builds mobile apps in Flutter and web apps in React and Next.js, with clean architecture, predictable state management, and a proper test pass before anything ships.",
    "An Information Technology graduate of Palawan State University, Jubil led the Taga-Cuyo team and trained its translation model in Python.",
  ],
  skills: ["Flutter", "Next.js", "React", "Firebase", "Supabase", "Node.js", "Python"],
};

export const enquiryOptions = [
  "Mobile app",
  "Web app",
  "Website",
  "Online store",
  "Dashboard or internal tool",
  "Not sure yet",
];
