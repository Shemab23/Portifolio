import { FooterData, NavData } from "@/types/Navigation";

export const nav: NavData = {
  name: "Bruno Shema",
  homeHref: "/",
  items: [
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    // { label: "Learning", href: "/learning" },
  ],
  cta: { label: "Contact", href: "#contact" },
};

export const footer: FooterData = {
  name: "Bruno Shema",
  tagline: "Software Engineer · Kigali, Rwanda",
  routes: [
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    // { label: "Learning", href: "/learning" },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/Shemab23", external: true },
    {
      label: "LinkedIn",
      href: "http://www.linkedin.com/in/shema-bruno",
      external: true,
    },
    { label: "Email", href: "mailto:shemab71@gmail.com" },
  ],
  year: 2026,
  note: "Built with React, TypeScript, and Tailwind.",
};
