// ---------- Header ----------
export interface AboutHeader {
  photo: string;
  role: string; // "Full-Stack Software Engineer"
  tagline: string; // one-line positioning statement
  availability: string; // "Open to remote, hybrid, and relocation opportunities."
}

// ---------- How I Work ----------
export interface HowIWorkCard {
  title: string;
  description: string;
}

export interface HowIWorkSection {
  heading: string;
  cards: HowIWorkCard[];
}

// ---------- Stack ----------
export type StackTier =
  "Core" | "Backend" | "Also comfortable with" | "Exploring right now";

export interface StackGroup {
  tier: StackTier;
  skills: string[];
}

export interface StackSection {
  heading: string;
  groups: StackGroup[];
}

// ---------- Timeline (Academic + Teaching) ----------
export interface TimelineEntry {
  title: string;
  yearRange: string;
  highlight: string;
  context: string;
}

export interface TimelineSection {
  heading: string;
  entries: TimelineEntry[];
}

// ---------- Close ----------
export interface WhatsNext {
  label: string;
  statement: string;
}

// ---------- Full page assembly ----------
export interface AboutPageData {
  header: AboutHeader;
  howIWork: HowIWorkSection;
  stack: StackSection;
  timeline: TimelineSection;
  whatsNext: WhatsNext;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactInfo {
  email: string;
  whatsappNumber: string;
}
