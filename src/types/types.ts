export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  problem: string;
  contribution: string;
  technologies: string[];
  technicalChallenge: string;
  outcome: string;
  image: string;
  link?: string;
  repoName?: string;
  architectureDetails?: string[];
  systemType: 'System Software' | 'Database App' | 'Supply Chain' | 'Logistics' | 'AI Pipeline';
}

export interface Capability {
  id: string;
  title: string;
  description: string;
  benefit: string;
  tags: string[];
  isDeveloping?: boolean;
  progression?: string[];
}

export interface PhilosophyPrinciple {
  number: string;
  title: string;
  summary: string;
  elaboration: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  action: string;
  description: string;
  deliverables: string[];
}

export interface DirectionNode {
  title: string;
  level: 'Foundation' | 'Expanding' | 'Active Exploration' | 'Target Domain';
  description: string;
  tags: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  summary: string;
  responsibilities: string[];
  engineeringConnection: string;
  category: 'Academic & Teaching' | 'Leadership' | 'Development';
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
