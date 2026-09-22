import {
  BestProjectsData,
  ContactData,
  EducationData,
  HeroData,
  HireData,
  ToolkitData,
  WhatIDoData,
} from "@/types/home/profile";

export const hero: HeroData = {
  name: "Bruno Shema",
  tagline:
    "Software Engineer building practical web, mobile, and backend systems.",
  status: "Open to junior SWE roles · Kigali / Remote",
  description:
    "Rwandan Software Engineer, B.Sc. graduate (3.78 / 4.00). I build software that solves real problems — from logistics platforms to invoicing tools for small businesses.",
  ctas: [
    { label: "See my work", href: "/work", variant: "primary" },
    { label: "About me", href: "/about", variant: "secondary" },
  ],
  portrait: {
    src: "/home/hero-portrait.png",
    alt: "Portrait of Bruno Shema",
  },
};

export const whatIDo: WhatIDoData = {
  label: "What I do",
  headline:
    "I build software that solves real problems — from the database to the interface.",
  paragraphs: [
    "I work across the stack: frontend with React and Next.js, backend with Node, Express, and Go, and data layers with PostgreSQL and Firebase. I've shipped logistics platforms, invoicing tools, and dashboards that people actually use.",
    "My approach is practical. I start by understanding the problem, break it into pieces, pick the simplest tools that fit, then build incrementally and test as I go. I'd rather ship something small that works than something big that doesn't.",
    "Right now I'm expanding into AI-assisted development and intelligent systems — learning how software can be more capable without losing clarity or control.",
  ],
  emphasis: "Practical software. Clear thinking. Real outcomes.",
};

export const bestProjects: BestProjectsData = {
  label: "Selected work",
  headline: "Three builds that show how I work.",
  projects: [
    {
      slug: "easy-invoice",
      title: "Easy Invoice",
      role: "Software Developer",
      year: 2026,
      summary:
        "An invoicing MVP for small businesses — quotations, invoices, taxes, discounts, client fees.",
      stack: ["Next.js", "TypeScript", "Firebase", "Tailwind"],
      image: "/home/easy-invoice.png",
      imageAlt: "Dashboard preview of Easy Invoice.",
      href: "/work/easy-invoice",
      accent: "Used by 10+ clients",
    },
    {
      slug: "tumagreen",
      title: "TumaGreen",
      role: "Full-Stack Developer",
      year: 2025,
      summary:
        "Real-time delivery and logistics platform connecting clients to couriers, localized for Rwanda.",
      stack: ["React", "Express", "Sequelize", "Leaflet"],
      image: "/home/tumagreen.jpeg",
      imageAlt: "Live map interface of the TumaGreen delivery platform.",
      href: "/work/tumagreen",
      accent: "In production",
    },
    {
      slug: "ai-skills-lab",
      title: "AI Skills Lab",
      role: "Software Developer",
      year: 2026,
      summary:
        "A structured learning platform tracking practical AI workflows, syllabus timelines, and multi-agent layouts.",
      stack: ["Next.js", "TypeScript", "Tailwind", "AI Orchestration"],
      image: "/home/ai-skills-lab.png",
      imageAlt: "Landing page of the AI Skills Lab learning platform.",
      href: "/work/ai-skills-lab",
    },
  ],
  viewAll: { label: "All work", href: "/work" },
};

export const toolkit: ToolkitData = {
  label: "Toolkit",
  headline: "What I build with — and what I'm still learning.",
  groups: [
    {
      label: "Comfortable",
      note: "I've shipped with these.",
      items: [
        "TypeScript",
        "JavaScript",
        "Python",
        "React",
        "Next.js",
        "React Native",
        "Node.js",
        "Express.js",
        "FastAPI",
        "PostgreSQL",
        "MySQL",
        "Firebase",
        "Tailwind CSS",
        "Git",
        "Docker",
        "REST APIs",
        "Vercel",
      ],
    },
    {
      label: "Learning",
      note: "Currently in progress.",
      items: [
        "Go",
        "Hono",
        "Drizzle ORM",
        "Edge AI",
        "TinyML",
        "System Design",
        "Caddy",
        "AI Orchestration",
        "Cloudflare R2",
      ],
    },
  ],
  footnote:
    "I list tools I've actually used. Learning means I'm still building depth — not pretending to have it.",
};

export const education: EducationData = {
  label: "Education",
  entries: [
    {
      degree: "B.Sc. Software Engineering",
      school: "European University of Lefke",
      location: "Lefke, TRNC",
      period: "2022 — 2026",
      detail: "CGPA 3.78 / 4.00",
      highlight: "Graduated",
    },
  ],
  microNote:
    "Coursework covered data structures, algorithms, databases, networks, software design, and AI foundations.",
};

export const hire: HireData = {
  label: "Work with me",
  headline:
    "I'm looking for a junior Software Engineering role — or a project worth building.",
  paths: [
    {
      title: "Hire me",
      description:
        "Full-time or internship. I'm based in Kigali and open to remote roles.",
      bullets: [
        "Frontend, backend, or full-stack",
        "Comfortable in TypeScript, React, Node, PostgreSQL",
        "Fast learner, honest about what I don't know yet",
      ],
    },
    {
      title: "Collaborate",
      description:
        "Freelance work, open source, or a side project that needs a builder.",
      bullets: [
        "Small business sites, dashboards, MVPs",
        "Clear scope, clear timeline, clear deliverable",
        "I document as I go — you own what I build",
      ],
    },
  ],
  primaryCta: {
    label: "Get in touch",
    href: "/contact",
  },
  reassurance: "I reply within 24 hours.",
};

export const contact: ContactData = {
  label: "Let's talk",
  headline: "If you're hiring, building, or just curious — reach me directly.",
  channels: [
    {
      label: "Phone",
      value: "+250 796 584 149",
      href: "tel:+250796584149",
      note: "Call or WhatsApp",
    },
    {
      label: "Email",
      value: "shemab71@gmail.com",
      href: "mailto:shemab71@gmail.com",
      note: "I reply within 24 hours",
    },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/Shemab23" },
    { label: "LinkedIn", href: "www.linkedin.com/in/shema-bruno" },
    {
      label: "YouTube",
      href: "https://www.youtube.com/channel/UCLsQzBeS8gdKXQJGQjLeD_Q",
    },
  ],
  closing: "Kigali, Rwanda · Open to remote",
  footer: {
    name: "Bruno Shema",
    year: 2026,
    builtWith: "Built with React, TypeScript, and Tailwind.",
  },
};
