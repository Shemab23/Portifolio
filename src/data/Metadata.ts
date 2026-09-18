import { ToolKit } from './../components/section/ToolKit';
import { EDUCATION_CONTENTType, HeroType, HOW_I_WORK_CONTENTType, Nav, ToolkitType, WorkType } from "./types";

export const navData:Nav = {
    logo:{
        label:"bruno shema",
        link:"#home"
    },
    links:[
        {
            label:"Work",
            link:"#work"
        },
        {
            label:"ToolKit",
            link:"#toolkit"
        },
        {
            label:"Process",
            link:"#process"
        },
        {
            label:"Education",
            link:"#education"
        },
        {
            label:"Contact",
            link:"#contact"
        }
    ]
}

export const HeroData:HeroType = {
    name:"Bruno Shema",
    title:"Software Engineer building practical web, mobile, and backend systems.",
    degree:{
        name:"B.Sc. Software Engineering",
        institution:"European University of Lefke",
        cgpa:"3.78 / 4.00"
    },
    statement: "Currently exploring how AI and intelligent workflows can make software more capable and useful.",
    cta:["View My work","Let's Talk"],
    image:"/images/hero.webp",
}

export const WorkData:WorkType[] = [
  {
    id: "ai-skills-lab",
    title: "AI Skills Lab",
    category: "AI-Assisted Development",
    featured: true,
    role: "Software Developer",
    year: "2026",
    tagline: "A structured learning platform for tracking practical AI workflows.",
    description: "Built a high-fidelity landing page and educational tracking framework for an intensive AI bootcamp. Used multi-model AI orchestration (Vibe Coding) alongside custom manual refinements to rapidly ship fluid multi-agent layouts, syllabus tracking timelines, and content-dense responsive interfaces.",
    technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS", "AI Orchestration", "Vercel"],
    links: {
      live: "https://ai-skills-lab.vercel.app/",
      github: "https://github.com/Shemab23/AI-skills-Lab"
    }
  },
  {
    id: "easy-invoice",
    title: "Easy Invoice",
    category: "Business Software",
    featured: true,
    role: "Software Developer",
    year: "2026",
    company: "Easy Invoice Ltd",
    tagline: "A practical invoicing MVP built for small businesses.",
    description: "Designed and launched an active invoicing MVP that simplifies quotation and invoice creation. Features configurable calculation structures supporting conditional tax rates, discounts, and additional client fees.",
    metrics: "Successfully deployed and utilized by over 10 active clients; built in an agile 20-hour sprint.",
    technologies: ["TypeScript", "React", "Next.js", "Firebase", "Tailwind CSS"],
    links: {
      live: "https://easy-invoice-ltd.vercel.app/",
      github: "https://github.com/Shemab23/EasyInvoiceLtd"
    }
  },
  {
    id: "tumagreen",
    title: "TumaGreen",
    category: "Eco-Transport & Logistics",
    featured: true,
    role: "Full-Stack Developer",
    year: "2025",
    company: "Ingabotech Ltd",
    tagline: "A real-time delivery and logistics platform localized for Rwanda.",
    description: "Engineered full-stack delivery logistics applications connecting live mapping tools, secure database transactions, and cloud-hosted asset handling pipelines. Maintained smooth map interactions and data fetching utilities to coordinate seamless client-to-courier matching algorithms.",
    technologies: ["TypeScript", "React", "Express.js", "Sequelize", "Leaflet Maps", "Cloudinary"],
    links: {
        live: "https://youtu.be/m0RDA14YKTA",
        github: "https://github.com/Shemab23/TumaGreen"
    }
  },
  {
    id: "network-design",
    title: "Enterprise Network Architecture",
    category: "Systems & Networking",
    featured: false,
    role: "Software Engineering Student",
    year: "2024",
    tagline: "A comprehensive corporate network topology and routing simulation.",
    description: "Modeled complex network layouts evaluating physical topologies, dynamic IP addressing schemes, subnetting, and internal routing protocols to secure multi-device infrastructure capabilities.",
    technologies: ["Cisco Packet Tracer", "Network Architecture", "IP Subnetting", "Routing Protocols"],
    links: {}
  }
];

export const ToolKitData: ToolkitType = {
  languages: [
    { name: "TypeScript", featured: true },
    { name: "JavaScript", featured: true },
    { name: "Python", featured: true },
    { name: "Go", featured: true },
    { name: "Java", featured: true },
    { name: "SQL", featured: false },
    { name: "C++", featured: false },
    { name: "C", featured: false }
  ],
  "web-mobile": [
    { name: "React", featured: true },
    { name: "React Native", featured: true },
    { name: "Tailwind CSS", featured: true },
    { name: "shadcn/ui", featured: true },
    { name: "Framer Motion", featured: false },
    { name: "Next.js", featured: true },
    { name: "Leaflet", featured: false }
  ],
  backend: [
    { name: "Node.js", featured: true },
    { name: "Express.js", featured: true },
    { name: "FastAPI", featured: true },
    { name: "Hono", featured: true },
    { name: "Drizzle ORM", featured: true },
    { name: "SQLAlchemy", featured: false },
    { name: "Zod", featured: false },
    { name: "Ollama", featured: false },
    { name: "PostgreSQL", featured: false }, // Shifted database tools here under corporate style
    { name: "MySQL", featured: false },
    { name: "Firebase", featured: false },
    { name: "REST APIs", featured: false }
  ],
  infrastructure: [
    { name: "Git", featured: true },
    { name: "Docker", featured: true },
    { name: "Vercel", featured: true },
    { name: "Cloudflare R2", featured: true },
    { name: "Cloudinary", featured: true },
    { name: "Hostinger", featured: false },
    { name: "Vitest", featured: false },
    { name: "Playwright", featured: false }
  ]
};

export const HOW_I_WORK_CONTENT:HOW_I_WORK_CONTENTType = {
  header: {
    index: "02 // Process",
    title: "How I Work",
    subtitle:
      "A practical, engineering-focused approach to building software system solutions.",
  },
  steps: [
    {
      num: "01",
      title: "Understand",
      description:
        "Clarify the problem, users, requirements, constraints, and what the software actually needs to accomplish.",
    },
    {
      num: "02",
      title: "Structure",
      description:
        "Break the problem into features, data, components, APIs, and a clear implementation plan.",
    },
    {
      num: "03",
      title: "Build",
      description:
        "Develop the solution incrementally, choosing technologies and patterns that fit the problem rather than adding complexity unnecessarily.",
    },
    {
      num: "04",
      title: "Test",
      description:
        "Check functionality, edge cases, integration points, usability, and whether the solution actually solves the original problem.",
    },
    {
      num: "05",
      title: "Iterate",
      description:
        "Review what works and what does not, then refine the implementation based on testing, feedback, and new requirements.",
    },
  ],
};

export const EDUCATION_CONTENT:EDUCATION_CONTENTType = {
  header: {
    index: "03 // Development",
    title: "Education & Credentials",
  },
  degree: {
    title: "B.Sc. Software Engineering",
    institution: "European University of Lefke",
    location: "Lefke, TRNC",
    date: "June 2026",
    gpa: "CGPA: 3.78/4.00",
  },
  trainings: [
    {
      subject: "Blockchain Developer Training",
      provider: "SkillUp",
      date: "Aug 2026",
      id: "#10632857",
      verifyUrl: "https://simplilearn.com", // Replace with your actual link if available
    },
    {
      subject: "Introduction to DevOps and DevSecOps",
      provider: "SkillUp",
      date: "Jul 2026",
      id: "#10436931",
      verifyUrl: "https://simplilearn.com", // Replace with your actual link if available
    },
  ],
  bootcamp: {
    title: "AI Bootcamp",
    note: "No certificate was issued. Participation and contribution are demonstrated through the AI Skills Lab project i built for them; it is linked above my Work.",
  },
};
