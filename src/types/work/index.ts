export interface WorkHeaderData {
  label: string;
  headline: string;
  intro: string;
}

export interface ClientWorkItem {
  slug: string;
  title: string;
  client?: string; // "Primerica Canada" / "AI Bootcamp" / "IANE's Travel & Tours"
  role: string;
  period: string; // "2026"
  summary: string; // 1–2 lines
  approach?: string; // what you actually did
  outcome?: string; // what they got
  stack?: string[]; // optional — not all client work is code
  links?: {
    live?: string;
    source?: string;
    drive?: string;
  };
}

export interface PracticeItem {
  slug: string;
  title: string;
  role: string;
  period: string;
  status: "free" | "in-use" | "discontinued" | "archived";
  statusNote?: string; // short honest line
  summary: string;
  approach?: string;
  outcome?: string;
  learned?: string;
  stack?: string[];
  links?: {
    live?: string;
    source?: string;
    blog?: string;
  };
}

export interface ToolItem {
  slug: string;
  title: string;
  role: string;
  period: string;
  summary: string;
  approach?: string;
  outcome?: string;
  builtFor?: string; // "For myself" | "For a small business in Zambia" etc.
  stack?: string[];
  links?: {
    live?: string; // e.g., npm package page
    source?: string;
    blog?: string;
  };
}

export interface OtherWorkItem {
  slug: string;
  title: string;
  role: string;
  period: string;
  location?: string; // "Northern Cyprus" etc.
  summary: string; // what the work was
  reflection?: string; // why it matters / what it taught
}

export interface WorkClosingData {
  line: string;
  link: { label: string; href: string };
}
