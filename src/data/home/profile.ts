// refine

import {
  About,
  CardsSection,
  Contact,
  HeroContent,
  WHatIDO,
} from "@/types/home/profile";

export const heroContent: HeroContent = {
  title: "Full-Stack Software Engineer",
  headline: "Building production-ready software from day one.",
  description:
    "A resourceful full-stack engineer focused on clean architecture, modern frameworks, and writing scalable code that moves businesses forward.",
  image: "/home/hero-portrait.png",
  cta: {
    text: "View My Projects",
    link: "/work",
  },
};

export const cardsSection: CardsSection = {
  title: "Selected Work",
  cards: [
    {
      image: "/home/IANE'sTravelTour.png",
      name: "IANE'sTravelTour",
      service: "Web & App Development",
      description:
        "Full travel booking website for a Kigali-based company operating across East Africa and internationally — flight booking, tour planning, and a streamlined enquiry flow, built end-to-end.",
      year: "2026",
      code: "https://github.com/Shemab23/IANE-STravel-Tour",
      preview: "https://iane-s-travel-tour-black.vercel.app/",
    },
    {
      image: "/home/Ai-skill-Lab.png",
      name: "AI Skill Lab",
      service: "AI & Automation",
      description:
        "Brand and website for an AI development bootcamp, built using a multi-model AI workflow combined with manual refinement — from MVP to polished product.",
      year: "2026",
      code: "https://github.com/Shemab23/AI-skills-Lab",
      preview: "https://ai-skills-lab.vercel.app/",
    },
    {
      image: "/home/Easy-Invoce.png",
      name: "Easy Invoice",
      service: "Digitizing Manual Processes",
      description:
        "An AI-powered built invoicing MVP for government and personal compliance — turns quotations, taxes, discounts, and fees into instant structured receipts. (Validated MVP, no live client yet.)",
      year: "2026",
      code: "https://github.com/Shemab23/EasyInvoiceLtd",
      preview: "https://easy-invoice-ltd.vercel.app/",
    },
    {
      image: "/home/model.jpeg",
      name: "Garment Prompt Bank",
      service: "Design & Branding",
      description:
        "AI image workflow for a garment business — turns blurry photos into HD, multi-angle product shots and places garments on models or scenes for fast, consistent promo content.",
      year: "2026",
      preview:
        "https://drive.google.com/drive/folders/1CQBMI-KomOha-BLcG1cBupFyerv8A1SJ?usp=sharing",
    },
    {
      name: "C/C++ Lab Assistant",
      service: "Code Reviews, QA & Mentorship",
      description:
        "Mentored university students in C, C++, OOP, memory management, and algorithms — reinforcing correct, real-world coding practices.",
      year: "2024-26",
    },
    {
      name: "Nobel Source",
      image: "/home/NobelSource.png",
      service: "Web & App Development",
      description:
        "Built an agricultural marketplace connecting farmers directly with buyers to cut out middleman fees and improve price transparency.",
      year: "2024-26",
      code: "https://github.com/Shemab23/NobelSource",
      preview: "https://www.youtube.com/watch?v=WGIxNCtv6RM",
    },
  ],
  more: {
    text: "View all work",
    link: "/work",
  },
};

export const aboutContent: About = {
  title: "Engineering with Purpose",
  brief:
    "I am a Full-Stack Software Engineer backed by a formal engineering degree and a proven track record of building production-ready digital products from scratch. My experience ranges from orchestrating AI-driven web applications to optimizing low-level systems. I specialize in translating ambiguous business requirements into practical software, prioritizing elegant simplicity, resourcefulness, and code that moves businesses forward.",
  cta: {
    text: "Learn More",
    link: "/about",
  },
};

export const whatIDoContent: WHatIDO[] = [
  {
    title: "Web & App Development",
    // brief:
    //   "I build production-ready web applications and internal tools from scratch, mapping out the entire frontend, backend, and database architecture. I specialize in launching rapid first-versions to test market ideas quickly and refactoring legacy codebases to optimize performance without breaking existing flows.",
    includes: [
      "Full-stack architecture",
      "MVP rapid deployment",
      "Legacy code refactoring",
      "Database design & optimization",
    ],
  },
  {
    title: "AI Integration & Automation",
    // brief:
    //   "I connect intelligent LLM models into your existing workflows and products to automate repetitive tasks. This includes implementing semantic search engines, contextual AI chatbots, automated content generation pipelines, and background data agents that save hundreds of engineering hours.",
    includes: [
      "Multi-model AI orchestration",
      "Workflow task automation",
      "Intelligent data extraction",
      "Custom chatbot pipelines",
    ],
  },
  {
    title: "Digitizing Manual Processes",
    // brief:
    //   "I replace fragmented operations relying on spreadsheets, paper trails, and messy email threads with custom structured software. By building centralized internal dashboards, scalable databases, and validation forms, I give founders a real-time overview of business performance.",
    includes: [
      "Custom business dashboards",
      "Spreadsheet-to-app migration",
      "Data pipeline structuring",
      "Internal operational tooling",
    ],
  },
  {
    title: "UI/UX Design & Branding Systems",
    // brief:
    //   "I craft clean, intuitive digital interfaces built on a unified foundation of wireframes, dynamic light/dark layouts, and brand systems. I bridge the gap between design and development while deploying AI-driven pipelines to generate consistent, brand-aligned marketing collateral.",
    includes: [
      "High-fidelity UI components",
      "Design tokens & color systems",
      "Sleek user journey layouts",
      "AI content generation setups",
    ],
  },
  {
    title: "Code Quality & Technical Mentorship",
    // brief:
    //   "I audit existing engineering codebases to identify performance bottlenecks, establish automated testing pipelines, and ensure stability as traffic scales. In addition, I provide deep-dive technical mentorship covering core algorithms, object-oriented design, and system architecture fundamentals.",
    includes: [
      "Deep-dive performance audits",
      "C/C++ & OOP mentoring",
      "QA testing infrastructure",
      "Algorithm design coaching",
    ],
  },
];

export const contactContent: Contact = {
  Hook: "Let’s build something impactful together.",
  state:
    "I am actively looking for a junior full-stack role in a professional engineering environment where I can contribute to production-ready code, learn from senior mentorship, and solve complex, real-world problems.",
  cta: {
    text: "Get In Touch",
    link: "/contact",
  },
};
