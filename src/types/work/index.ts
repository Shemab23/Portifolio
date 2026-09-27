// refine

export interface Experience {
  organization: string;
  role: string;
  year: string;
  description: string;
  skills: string[];
}

export interface OtherWork {
  organization: string;
  role: string;
  year: string;
  note: string;
}

export interface CTA {
  text: string;
  link: string;
}

const Types = [
  "Web & App Development",
  "AI & Automation",
  "Digitizing Manual Processes",
  "Design & Branding",
  "Code Reviews, QA & Mentorship",
] as const;

export type ServiceType = (typeof Types)[number];

export type ProjectStatus = "live" | "discontinued" | "published" | "completed";

export interface Project {
  image?: string; // optional — renders placeholder if absent
  name: string;
  role: string;
  type: ServiceType;
  year: string;
  description: string;
  tools: string[];
  status?: ProjectStatus;
  previewLink?: string; // live/demo URL — shows the hover "Preview" overlay
  codeLink?: string; // repo URL — shows the "</>" link beneath the card
}

export interface ProjectsSectionProps {
  projects: Project[];
  cta: { text: string; link: string };
}

export interface ExperienceSectionProps {
  experiences: Experience[];
}

export interface OtherWorkSectionProps {
  items: OtherWork[];
}

export interface ClosingActionData {
  heading: string;
  subtext: string;
  ctaText: string;
  ctaLink: string;
}
