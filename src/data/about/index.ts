import {
  AboutHeader,
  AboutPageData,
  ContactInfo,
  HowIWorkSection,
  StackSection,
  TimelineSection,
  WhatsNext,
} from "@/types/about";

export const HeaderAbout: AboutHeader = {
  photo: "/home/hero-portrait.png",
  role: "Full-Stack Software Engineer",
  tagline:
    "Building practical web and software products across frontend, backend, databases, and deployment — while exploring how AI can make development and digital products more effective.",
  availability: "Open to remote, hybrid, and relocation opportunities.",
};

export const howIWorkAbout: HowIWorkSection = {
  heading: "How I work",
  cards: [
    {
      title: "Understand the problem",
      description:
        "Talk to whoever needs it, find out what actually matters before writing a line of code.",
    },
    {
      title: "Find the real requirement",
      description:
        "Turn a vague ask into something specific enough to build against.",
    },
    {
      title: "Build the practical version",
      description:
        "Ship something that works for the person using it — not something that just looks impressive.",
    },
    {
      title: "Test, refine, learn",
      description:
        "Push until it holds up, then carry the lesson into the next build.",
    },
  ],
};

export const StackAbout: StackSection = {
  heading: "Stack",
  groups: [
    { tier: "Core", skills: ["TypeScript / JavaScript", "React", "Next.js"] },
    { tier: "Backend", skills: ["Node.js", "Express", "PostgreSQL", "SQL"] },
    {
      tier: "Also comfortable with",
      skills: ["Python", "Java", "C", "C++", "Git", "Tailwind CSS"],
    },
    {
      tier: "Exploring right now",
      skills: [
        "AI-assisted development workflows",
        "Docker",
        "Edge AI / TinyML",
        "IoT",
        "Robotics & automation",
      ],
    },
  ],
};

export const TimelineAbout: TimelineSection = {
  heading: "Background",
  entries: [
    {
      title: "BSc Software Engineering",
      yearRange: "2022–2026",
      highlight: "CGPA 3.78/4.00 · High Honor",
      context:
        "European University of Lefke — programming, algorithms, databases, AI/ML.",
    },
    {
      title: "Lab Assistant",
      yearRange: "2024–2026",
      highlight: "150+ students",
      context: "Supported students through C/C++, OOP, and algorithms.",
    },
  ],
};

export const NextAbout: WhatsNext = {
  label: "What's next:",
  statement:
    "I'm entering the industry now, not later — ready to build software that matters and keep learning as fast as the field moves.",
};

export const contactInfo: ContactInfo = {
  email: "shemab71@gmail.com",
  whatsappNumber: "+905391351079",
};
