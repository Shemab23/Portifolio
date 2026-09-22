export interface HeroData {
  name: string;
  tagline: string;
  status: string;
  description: string;
  ctas: { label: string; href: string; variant: "primary" | "secondary" }[];
  portrait: {
    src: string; // "/home/hero-portrait.png"
    alt: string;
  };
}
export interface WhatIDoData {
  label: string;
  headline: string;
  paragraphs: string[];
  emphasis: string;
}

export interface ProjectHighlight {
  slug: string;
  title: string;
  role: string;
  year: number;
  summary: string;
  stack: string[];
  image: string; // "/home/projects/tumagreen.png"
  imageAlt: string;
  href: string; // "/work/tumagreen"
  accent?: string; // optional badge like "Live" or "Used by 10+ clients"
}

export interface BestProjectsData {
  label: string;
  headline: string;
  projects: ProjectHighlight[];
  viewAll: { label: string; href: string };
}

export interface ToolkitData {
  label: string;
  headline: string;
  groups: {
    label: string; // "Comfortable" | "Learning"
    note?: string; // one-line description
    items: string[];
  }[];
  footnote: string;
}

export interface EducationEntry {
  degree: string;
  school: string;
  location?: string;
  period: string;
  detail?: string; // "CGPA 3.78 / 4.00" or short note
  highlight?: string; // optional small badge text
}

export interface EducationData {
  label: string;
  entries: EducationEntry[];
  microNote?: string;
}

export interface HirePath {
  title: string; // "Hire me"
  description: string; // what's on offer
  bullets: string[]; // what you bring
}

export interface HireData {
  label: string;
  headline: string;
  paths: HirePath[];
  primaryCta: { label: string; href: string };
  reassurance: string;
}

export interface ContactChannel {
  label: string; // "Phone" | "Email"
  value: string; // "+250 796 584 149" | "shemab71@gmail.com"
  href: string; // "tel:+250796584149" | "mailto:shemab71@gmail.com"
  note?: string; // small helper text
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface ContactData {
  label: string;
  headline: string;
  channels: ContactChannel[];
  socials: SocialLink[];
  closing: string;
  footer: {
    name: string;
    year: number;
    builtWith: string;
  };
}
