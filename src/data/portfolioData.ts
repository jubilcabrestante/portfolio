// portfolioData.ts — all site copy in one place.

import { PortfolioData } from "../types/portfolio";

export const portfolioData: PortfolioData = {
  paper: {
    name: "Jubil L. Cabrestante",
    motto: "Rough ideas in. Robust systems out.",
    edition: "Portfolio",
    place: "Puerto Princesa, Palawan",
  },

  frontPage: {
    kicker: "MOBILE & FULL-STACK WEB DEVELOPER",
    headline: "Hi, I’m Jubil — I turn rough ideas into robust systems.",
    subhead:
      "Flutter and full-stack web developer with work already shipped: a ride-booking app live on Google Play, a Python machine-translation model, and systems built for real clients. I’m looking for a team where I can keep building products that last.",
    byline: "Puerto Princesa, Palawan",
    lede: [
      "I’m an Information Technology graduate of Palawan State University, building with Flutter on mobile and React & Next.js on the web — clean architecture first, predictable state management, and a proper test pass before anything ships. My delivered work spans ride-booking, language learning, customer loyalty, and government document tracking.",
      "The part I care about most happens before the first commit: questioning the brief. Ideas that pass through my desk come back sharper, and the systems behind them come back robust, scalable, and ready to grow. For my thesis, that meant training a sequence-to-sequence translation model in Python and shipping it inside an app that helps preserve the Cuyonon language of Palawan.",
    ],
    portrait: {
      src: "/assets/profile-2026.png",
      caption: "Jubil L. Cabrestante — Puerto Princesa, Palawan",
    },
  },

  projects: [
    {
      id: "sukiperks",
      title: "SukiPerks",
      kicker: "LOYALTY & REWARDS",
      year: "2025",
      role: "Flutter Developer",
      stack: ["Flutter", "Bloc", "Firebase"],
      logo: "/assets/sukiperks/logo.png",
      summary:
        "A customer-loyalty app that turns casual buyers into suki — regulars — letting local businesses hand out points, perks, and promos straight from a phone.",
      story: [
        "SukiPerks digitizes the oldest deal in Filipino retail: keep coming back, and the store takes care of you. Customers collect points on their purchases and redeem them for rewards, while merchants manage perks, promos, and their roster of repeat customers.",
        "The app is built in Flutter with Bloc for state management and backed by Firebase — Firestore doing the careful bookkeeping that loyalty points demand.",
      ],
      highlights: [
        "Points earning and redemption flows",
        "Merchant-managed perks and promos",
        "Firebase backend with real-time Firestore data",
        "Clean architecture with Bloc state management",
      ],
      images: [
        { src: "/assets/sukiperks/1.png", caption: "SukiPerks — app screenshot." },
        { src: "/assets/sukiperks/2.png", caption: "SukiPerks — app screenshot." },
        { src: "/assets/sukiperks/3.png", caption: "SukiPerks — app screenshot." },
        { src: "/assets/sukiperks/4.png", caption: "SukiPerks — app screenshot." },
      ],
    },
    {
      id: "sakayna",
      title: "Sakayna App",
      kicker: "TRANSPORT · RIDE BOOKING",
      year: "2025",
      role: "Flutter Developer & QA (Intern)",
      stack: ["Flutter", "Bloc", "Firebase"],
      link: {
        href: "https://play.google.com/store/apps/details?id=com.app.sakayna_app",
        label: "Available on Google Play",
      },
      summary:
        "A ride-booking app serving commuters in Tagum City, Davao — published on Google Play.",
      story: [
        "Built by a Tagum-based startup, Sakayna matches local commuters with rides. As a developer-and-QA intern, Jubil worked on booking flows, UI polish, and the unglamorous testing that keeps a transport app dependable across devices.",
      ],
      highlights: [
        "Live on Google Play",
        "Booking and ride-matching user flows",
        "QA passes across real devices",
        "UI/UX refinements for local commuters",
      ],
      images: [
        { src: "/assets/sakayna/1.png", caption: "Sakayna — rider home screen." },
        { src: "/assets/sakayna/2.png", caption: "Sakayna — booking a ride." },
        { src: "/assets/sakayna/3.png", caption: "Sakayna — in-app view." },
        { src: "/assets/sakayna/4.jpg", caption: "Sakayna — in-app view." },
        { src: "/assets/sakayna/5.jpg", caption: "Sakayna — in-app view." },
        { src: "/assets/sakayna/6.jpg", caption: "Sakayna — in-app view." },
      ],
    },
    {
      id: "taga-cuyo",
      title: "Taga-Cuyo",
      kicker: "LANGUAGE · MACHINE LEARNING",
      year: "2024–2025",
      role: "Team Leader & Flutter Developer (Thesis)",
      stack: ["Flutter", "Firebase", "Python", "Seq2Seq model"],
      summary:
        "A language-learning app that translates between Tagalog and Cuyonon — powered by a custom sequence-to-sequence model trained in Python.",
      story: [
        "Cuyonon, spoken across Palawan, has far fewer digital resources than the world’s big languages. Taga-Cuyo answers with lessons, quizzes, and a translator backed by a sequence-to-sequence neural network the team trained themselves.",
        "As thesis team leader, Jubil led both the Flutter build and the model work — gathering parallel text, training the seq2seq network in Python, and wiring it into the app.",
      ],
      highlights: [
        "Custom seq2seq translation model, trained in Python",
        "Interactive lessons and quizzes",
        "Supports Cuyonon language preservation",
        "Led the thesis development team",
      ],
      images: [
        { src: "/assets/taga-cuyo/1.png", caption: "Taga-Cuyo — app screen." },
        { src: "/assets/taga-cuyo/2.png", caption: "Taga-Cuyo — app screen." },
        { src: "/assets/taga-cuyo/3.png", caption: "Taga-Cuyo — app screen." },
        { src: "/assets/taga-cuyo/4.png", caption: "Taga-Cuyo — app screen." },
        { src: "/assets/taga-cuyo/5.png", caption: "Taga-Cuyo — app screen." },
        { src: "/assets/taga-cuyo/6.png", caption: "Taga-Cuyo — app screen." },
        { src: "/assets/taga-cuyo/7.jpg", caption: "Taga-Cuyo — app screen." },
        { src: "/assets/taga-cuyo/8.png", caption: "Taga-Cuyo — app screen." },
      ],
    },
    {
      id: "pcsd-dts",
      title: "PCSD Document Tracking System",
      kicker: "GOVERNMENT · WEB SYSTEM",
      year: "2025",
      role: "Developer",
      stack: ["Flutter Web", "Firebase"],
      summary:
        "A document tracking system for the Palawan Council for Sustainable Development — following paperwork from the receiving desk to release.",
      story: [
        "Government documents change hands constantly, and every handoff is a chance to lose one. The DTS gives PCSD a single paper trail: each document is logged at intake, routed between offices, and stamped with status updates until it is released.",
      ],
      highlights: [
        "End-to-end document trail from intake to release",
        "Office-to-office routing with status history",
        "Searchable records with full status history, backed by Firebase",
      ],
      images: [
        { src: "/assets/pcsd-dts/1.png", caption: "PCSD DTS — system screenshot." },
        { src: "/assets/pcsd-dts/2.png", caption: "PCSD DTS — system screenshot." },
        { src: "/assets/pcsd-dts/3.png", caption: "PCSD DTS — system screenshot." },
      ],
    },
  ],

  classifieds: [
    {
      category: "Development",
      ads: [
        {
          heading: "Mobile — Flutter & Dart",
          tag: "CORE",
          lines: [
            "Native iOS & Android apps from a single codebase.",
            "Clean Architecture for scalable, maintainable code.",
            "Bloc & Cubit state management — predictable and testable.",
            "REST APIs with Retrofit; multi-environment builds with flavors.",
            "Functional error handling with Dartz.",
          ],
        },
        {
          heading: "Full-Stack Web",
          tag: "CORE",
          lines: [
            "React, Next.js, and Tailwind CSS on the front end — including this site.",
            "Node.js, Supabase (PostgreSQL), and Firebase behind.",
            "HTML, CSS, and JavaScript fundamentals.",
          ],
        },
      ],
    },
    {
      category: "Data & Machine Learning",
      ads: [
        {
          heading: "Databases — SQL & NoSQL",
          tag: "WORKING KNOWLEDGE",
          lines: [
            "SQL with Supabase (PostgreSQL): schema design and queries.",
            "Firebase & Firestore: real-time data, efficient collections.",
            "MySQL and MongoDB fundamentals.",
          ],
        },
        {
          heading: "Machine Learning",
          tag: "APPLIED",
          lines: [
            "Python for data preparation and model training.",
            "Trained a sequence-to-sequence model for Tagalog–Cuyonon language translation, shipped in the Taga-Cuyo app.",
            "Practical ML — models that end up inside real products.",
          ],
        },
        {
          heading: "Cloud — GCP & Firebase",
          lines: [
            "Cloud Functions, hosting, and backend services.",
            "Deploying and managing app infrastructure.",
          ],
        },
      ],
    },
    {
      category: "Practices & Tools",
      ads: [
        {
          heading: "Product Thinking",
          tag: "INNOVATION",
          lines: [
            "Takes rough ideas and returns sharper, more useful versions.",
            "Designs systems to be robust, scalable, and maintainable from day one.",
          ],
        },
        {
          heading: "Quality Assurance",
          lines: [
            "Manual testing of user flows across real devices.",
            "Regression passes before every release.",
          ],
        },
        {
          heading: "Tools",
          lines: [
            "Git & GitHub for version control.",
            "Jira for sprint planning and task management.",
            "Postman for API testing; Android Studio & VS Code.",
            "Figma for design work.",
          ],
        },
      ],
    },
  ],

  dispatches: [
    {
      dateline: "PUERTO PRINCESA, PALAWAN",
      period: "JAN. – MAY 2025",
      position: "Flutter Developer & QA Engineer (Intern)",
      company: "Sakayna",
      body: "Completed an 800-hour internship contributing to the development and quality assurance of a ride-booking app — building features, testing user flows, and keeping the app reliable across devices.",
      certificate: {
        src: "/assets/certificates/1.jpg",
        label: "Certificate of Internship — Sakayna",
      },
    },
    {
      dateline: "PUERTO PRINCESA, PALAWAN",
      period: "JAN. 2024 – MAY 2025",
      position: "Team Leader & Flutter Developer",
      company: "Taga-Cuyo (Capstone Project)",
      body: "Led the capstone team building a Tagalog–Cuyonon learning app: interactive quizzes, a custom-trained sequence-to-sequence translation model, and a design built around language preservation. Awarded Best Capstone Project Paper at PSU's 2025 Research Colloquium.",
      certificate: {
        src: "/assets/certificates/2.jpg",
        label: "Best Capstone Project Paper — PSU 2025",
      },
    },
  ],

  contact: {
    email: "jubilcabrestante.work@gmail.com",
    phone: "+63 992 627 3091",
    location: "Palawan, Philippines",
    socials: [
      { label: "GitHub", href: "https://github.com/jubilcabrestante" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/jubil-cabrestante-2b4118375/",
      },
      { label: "Facebook", href: "https://www.facebook.com/jubil18" },
    ],
  },
};
