import {
  ClientWorkItem,
  OtherWorkItem,
  PracticeItem,
  ToolItem,
  WorkClosingData,
  WorkHeaderData,
} from "@/types/work";

export const workHeader: WorkHeaderData = {
  label: "Work",
  headline:
    "Everything I've built, shipped, or done that produced something for someone.",
  intro:
    "Client work, practice projects, tools I built for myself and others, and the side jobs that kept me going while studying abroad. Each one is labelled honestly — no overclaiming.",
};

export const clientWork: ClientWorkItem[] = [
  {
    slug: "primerica-canada",
    title: "Content Strategy & 5-Piece Campaign",
    client: "Primerica Canada",
    role: "Content Consultant",
    period: "2026",
    summary:
      "Proposed a different way to manage content — creating it from recent events rather than a fixed calendar.",
    approach:
      "Designed a lightweight content approach tied to current events, then produced five platform-specific pieces across LinkedIn, TikTok, and Instagram — each written in the tone that fits the platform and audience.",
    outcome:
      "A ready-to-publish set of five pieces and a repeatable method the team could continue using.",
    stack: [
      "Content Strategy",
      "Copywriting",
      "LinkedIn",
      "TikTok",
      "Instagram",
    ],
  },
  {
    slug: "ai-skills-lab",
    title: "AI Skills Lab — Bootcamp Website",
    client: "AI Bootcamp (Summer Edition)",
    role: "Software Developer",
    period: "2026",
    summary:
      "Designed and built the website for the AI bootcamp I was attending — using exactly what they taught us.",
    approach:
      "Built the site with multi-model AI orchestration alongside manual refinement: a high-fidelity landing page, syllabus tracking timeline, and content-dense responsive layout.",
    outcome:
      "The bootcamp got a public-facing website they didn't have before.",
    stack: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "AI Orchestration",
    ],
  },
  {
    slug: "ianes-travel",
    title: "IANE's Travel & Tours",
    client: "IANE's Travel & Tours",
    role: "Web Developer",
    period: "2026",
    summary:
      "A travel booking site built from the ground up, with a custom colour system derived from the brand logo.",
    approach:
      "Built with React, Tailwind CSS v4, and shadcn/ui. Derived a full light/dark colour palette from the brand's sky-blue, sunrise-yellow, and army-green. Structured the site around the services the business actually offers — flights, tours, visa assistance, hotels, travel insurance, airport transfers.",
    outcome:
      "A live site the business can use to present its services and receive enquiries.",
    stack: ["TypeScript", "React", "Tailwind CSS v4", "shadcn/ui"],
    links: {
      source: "https://github.com/Shemab23/IANE-STravel-Tour",
    },
  },
];

export const practice: PracticeItem[] = [
  {
    slug: "easy-invoice",
    title: "Easy Invoice",
    role: "Software Developer",
    period: "2026",
    status: "free",
    statusNote: "Free to use — open in active use.",
    summary:
      "An invoicing tool for small businesses: quotations, invoices, configurable taxes, discounts, and client fees.",
    approach:
      "Designed and launched an MVP that simplifies quotation and invoice creation, with a flexible calculation layer supporting conditional tax rates, discounts, and additional client fees.",
    outcome:
      "Free and in active use. Built as practice to learn the full invoicing loop end-to-end — from data model to calculation rules to user-facing forms.",
    learned:
      "How to translate fuzzy business rules (tax, discount, fee ordering) into a predictable calculation engine.",
    stack: ["TypeScript", "React", "Next.js", "Firebase", "Tailwind CSS"],
  },
  {
    slug: "tumagreen",
    title: "TumaGreen",
    role: "Full-Stack Developer",
    period: "2025",
    status: "discontinued",
    statusNote: "Discontinued — the company did not proceed with the product.",
    summary:
      "A real-time delivery and logistics platform localized for Rwanda, with live mapping and auto-calculated pricing.",
    approach:
      "Built full-stack delivery flows connecting live Leaflet maps, secure database transactions, and cloud-hosted asset handling. Implemented shortest-path routing and automatic price derivation from distance and load.",
    outcome:
      "Not shipped — the company paused the product before launch. The build itself is intact: mapping, routing, and pricing logic all work.",
    learned:
      "How to connect geospatial data, routing algorithms, and business pricing rules in one system — and how project outcomes depend on more than code.",
    stack: [
      "JavaScript",
      "React",
      "Express.js",
      "Sequelize",
      "Leaflet",
      "Cloudinary",
    ],
    links: {
      source: "https://github.com/Shemab23/TumaGreen",
    },
  },
];

export const tools: ToolItem[] = [
  {
    slug: "react-starter",
    title: "React Starter",
    role: "Author & Maintainer",
    period: "2026",
    summary:
      "A published npm starter — my own baseline for new React projects.",
    approach:
      "Built the way production teams build their own starters: a clean, opinionated setup that I can pull into any new project and have running in minutes, instead of rebuilding the same configuration every time.",
    outcome:
      "Published to npm and available from the terminal — installable as a starting point rather than copied from a repo.",
    builtFor: "For myself — and anyone who needs the same baseline.",
    stack: ["TypeScript", "React", "npm"],
    links: {
      // source: "https://github.com/Shemab23/react-starter",
      // live: "https://www.npmjs.com/package/your-package-name",
    },
  },
  {
    slug: "garment-prompt-bank",
    title: "Garment Prompt Bank",
    role: "Prompt Designer",
    period: "2026",
    summary:
      "A staged prompt pipeline that turns a blurry garment photo into a full multi-angle modelling set.",
    approach:
      "Designed a sequenced prompt flow: upscale the reference image, extract the garment from any angle, place it on a model in a chosen pose and palette — so a real-world garment can be modelled without a studio shoot.",
    outcome:
      "Removed the Photoshop time and cost from a small clothing business's preview workflow. Instead of hours of manual retouching, they pick a garment photo and get modelling shots in multiple angles.",
    builtFor: "For a small garment business in Zambia.",
    stack: ["Prompt Engineering", "Image Generation"],
    links: {
      blog: "#", // blog entry pending
    },
  },
];

export const otherWork: OtherWorkItem[] = [
  {
    slug: "farm-work",
    title: "Farm work",
    role: "Seasonal labourer",
    period: "2022 — 2024",
    location: "Northern Cyprus",
    summary:
      "Seasonal farm work alongside my studies — planting, harvesting, and general labour during term breaks.",
    reflection:
      "It kept me housed and fed while I studied. It also taught me what steady, physical work feels like when there's no deadline, no ticket, and no one watching.",
  },
  {
    slug: "restaurant-work",
    title: "Restaurant work",
    role: "Kitchen & floor",
    period: "2023 — 2024",
    location: "Northern Cyprus",
    summary:
      "Shift work in a restaurant — kitchen prep, service, and closing shifts — fitted around coursework.",
    reflection:
      "Working under pressure with people who don't care what you're studying — only whether the food goes out and the table is clean — is a kind of training that no course covers.",
  },
];

export const workClosing: WorkClosingData = {
  line: "This page is what I've done. The story behind it is longer.",
  link: { label: "Read my story", href: "/about" },
};
