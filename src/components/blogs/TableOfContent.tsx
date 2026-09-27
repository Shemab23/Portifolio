// components/blogs/TableOfContents.tsx
import { Heading } from "@/types/blogs";
import React from "react";

export function TableOfContents({ headings }: { headings: Heading[] }) {
  if (!headings.length) return null;

  const handleClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="flex flex-col gap-1.5 text-sm">
      <p className="text-xs font-bold uppercase tracking-wide text-app-text/50 mb-1">
        On this page
      </p>
      {headings.map((h) => (
        <a
          key={h.id}
          href={`#${h.id}`}
          onClick={handleClick(h.id)}
          className={`text-app-text/70 hover:text-app-brand transition-colors ${
            h.level === 3 ? "pl-3" : ""
          }`}
        >
          {h.text}
        </a>
      ))}
    </nav>
  );
}
