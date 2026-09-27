import {
  ClosingActionData,
  Experience,
  OtherWork,
  Project,
} from "@/types/work";

export const projects: Project[] = [
  {
    image: "/home/IANE'sTravelTour.png",
    name: "IANE's Travel & Tours",
    role: "Web Developer",
    type: "Web & App Development",
    year: "2026",
    description:
      "Built a travel booking website from scratch for a Kigali-based travel agency operating across East Africa and internationally — covering flights, tours, visa assistance, hotels, insurance, and airport transfers, with a colour system drawn from the company's own logo. The business now has a live site to present its services and take enquiries.",
    tools: ["TypeScript", "React", "Tailwind CSS v4", "shadcn/ui"],
    status: "live",
    previewLink: "https://iane-s-travel-tour-black.vercel.app/",
    codeLink: "https://github.com/Shemab23/IANE-STravel-Tour",
  },
  {
    image: "/home/Ai-skill-Lab.png",
    name: "AI Skill Lab",
    role: "Software Developer",
    type: "AI & Automation",
    year: "2026",
    description:
      "Designed and built the public website for the AI bootcamp I was attending, using the same multi-model AI workflow the programme taught, refined by hand. A high-fidelity landing page, syllabus tracker, and responsive layout gave the bootcamp a public presence it didn't have before.",
    tools: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    status: "completed",
    previewLink: "https://ai-skills-lab.vercel.app/",
    codeLink: "https://github.com/Shemab23/AI-skills-Lab",
  },
  {
    image: "/home/easy-invoice.png",
    name: "Easy Invoice",
    role: "Founder & Developer",
    type: "Digitizing Manual Processes",
    year: "2025–2026",
    description:
      "A free invoicing tool for small businesses that turns quotations into structured invoices, with a calculation layer that handles conditional taxes, discounts, and client fees correctly. Built end to end — from data model to the forms people actually use — and it's free and in active use today.",
    tools: ["TypeScript", "React", "Next.js", "Firebase", "Tailwind CSS"],
    status: "live",
    previewLink: "https://easy-invoice-ltd.vercel.app/",
    codeLink: "https://github.com/Shemab23/EasyInvoiceLtd",
  },
  {
    image: "/home/model.jpeg",
    name: "Garment Prompt Bank",
    role: "Prompt Designer",
    type: "Design & Branding",
    year: "2026",
    description:
      "A staged AI prompt pipeline built for a small garment business in Zambia — it takes one ordinary garment photo, sharpens it, and generates a full set of multi-angle, model-ready product shots. It cuts out the studio shoot and the hours of Photoshop retouching the business used to need for every new item.",
    tools: ["Prompt Engineering", "Image Generation"],
    status: "completed",
    previewLink:
      "https://drive.google.com/drive/folders/1CQBMI-KomOha-BLcG1cBupFyerv8A1SJ?usp=sharing",
  },
  {
    image: "/home/brand-campaign.png",
    name: "Brand Campaign & Content Kit",
    role: "Brand & Marketing Designer",
    type: "Design & Branding",
    year: "2026",
    description:
      "A full brand and marketing exercise from the AI bootcamp — a photoshoot campaign, social posts, a flyer, a storyboard, and a brand book, built using Pomelli, Canva, and CapCut. It's the same marketing-and-branding skill set behind the Garment Prompt Bank, applied here to a complete campaign rather than a single product workflow.",
    tools: ["Pomelli", "Canva", "CapCut"],
    status: "completed",
    previewLink:
      "https://drive.google.com/drive/folders/1BJDPW7Lufu-i3X4VkUDoY9d9wVE2d5aM?usp=drive_link",
  },
  {
    image: "/home/tumagreen.jpeg",
    name: "TumaGreen",
    role: "Full-Stack Developer",
    type: "Web & App Development",
    year: "2025",
    description:
      "A real-time delivery and logistics platform built for Rwanda, with live map tracking, shortest-path routing, and automatic pricing based on distance and load. The company paused the product before launch, so it never shipped — but the mapping, routing, and pricing logic were fully built and working.",
    tools: [
      "JavaScript",
      "React",
      "Express.js",
      "Sequelize",
      "Leaflet",
      "Cloudinary",
    ],
    status: "discontinued",
    codeLink: "https://github.com/Shemab23/TumaGreen",
    previewLink: "https://youtu.be/m0RDA14YKTA",
  },
  {
    image: "/home/NobelSource.png",
    name: "Nobel Source",
    role: "Founder & Lead Developer",
    type: "Digitizing Manual Processes",
    year: "2025–2026",
    description:
      "My graduation project: an agricultural marketplace concept connecting smallholder farmers directly with buyers, aimed at cutting out unnecessary middlemen and improving price transparency for resource-limited farming communities. Completed as a two-semester project, earning an A in the final term.",
    tools: ["Software Engineering", "System Design"],
    status: "completed",
    codeLink: "https://github.com/Shemab23/NobelSource",
    previewLink: "https://youtu.be/WGIxNCtv6RM",
  },
  {
    name: "React Starter",
    role: "Author & Maintainer",
    type: "Code Reviews, QA & Mentorship",
    year: "2026",
    description:
      "My own opinionated starter for new React projects, published to npm so it's installable from the terminal rather than copied from a repo each time. Built so I can go from a blank folder to a running project in minutes, with the setup choices I trust.",
    tools: ["TypeScript", "React", "npm"],
    status: "published",
    codeLink: "https://github.com/Shemab23/react-starter",
  },
];

export const experience: Experience[] = [
  {
    organization: "Primerica Canada",
    role: "Content Consultant",
    year: "2026",
    description:
      "Proposed a shift from a fixed content calendar to a lighter, event-driven approach — creating content around what was actually happening rather than a preset schedule. Delivered five platform-specific pieces across LinkedIn, TikTok, and Instagram, each written for that platform's tone, plus a repeatable method the team kept using after I was done.",
    skills: [
      "Content Strategy",
      "Copywriting",
      "LinkedIn",
      "TikTok",
      "Instagram",
    ],
  },
  {
    organization: "European University of Lefke",
    role: "Lab Assistant, Computer Programming & OOP",
    year: "2024–2026",
    description:
      "Supported 150+ students across programming labs — grading assignments, running practical exercises, and helping students work through C, C++, object-oriented programming, memory management, and algorithms.",
    skills: ["C", "C++", "OOP", "Debugging", "Mentorship"],
  },
  {
    organization: "European University of Lefke",
    role: "International Student Orientation Team",
    year: "2025",
    description:
      "Supported over 200 incoming international students through onboarding during the Fall 2025 intake, working full-time hours through the intake period in a fast-paced, high-volume environment.",
    skills: ["Coordination", "Student Support"],
  },
];

export const otherwork: OtherWork[] = [
  {
    organization: "Northern Cyprus",
    role: "Seasonal Farm Labourer",
    year: "2022–2024",
    note: "Planting, harvesting, and general farm labour during term breaks, alongside full-time studies.",
  },
  {
    organization: "Northern Cyprus",
    role: "Kitchen & Floor Staff",
    year: "2023–2024",
    note: "Kitchen prep, service, and closing shifts at a restaurant, fitted around coursework.",
  },
];

export const closingAction: ClosingActionData = {
  heading: "Let's build something worth shipping.",
  subtext:
    "I'm looking for my first full-time role as a software developer — open to remote, hybrid, or on-site. If you've read this far, you already know what I can do. Let's talk about what you're building.",
  ctaText: "Get in touch",
  ctaLink: "mailto:your-email@example.com",
};
