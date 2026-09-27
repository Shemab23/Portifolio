import React from "react";

interface CTAProps {
  text: string;
  link: string;
}

export function CTA({ text, link }: CTAProps) {
  return (
    <a
      href={link}
      className="inline-flex items-center gap-2 text-base font-bold text-app-heading underline decoration-app-brand decoration-2 underline-offset-4 hover:text-app-brand transition-colors duration-200 my-6"
    >
      {text}
    </a>
  );
}
