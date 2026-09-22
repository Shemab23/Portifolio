import { motion } from "framer-motion";
import type { StorySection as Section } from "@/types/about/index";

interface Props {
  section: Section;
}

export function StorySection({ section }: Props) {
  return (
    <motion.section
      id={section.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      className="scroll-mt-28"
    >
      {/* Mobile-only anchor header */}
      <div className="mb-4 flex flex-col gap-1 md:hidden">
        <span className="text-xs uppercase tracking-wider text-app-brand">
          {section.anchor}
        </span>
        <span className="text-xs text-app-text-muted">{section.date}</span>
      </div>

      {/* Desktop-only anchor (appears inline, small) */}
      <div className="mb-3 hidden items-center gap-3 md:flex">
        <span className="text-xs uppercase tracking-wider text-app-brand">
          {section.anchor}
        </span>
        <span className="h-px flex-1 bg-[var(--border)]" />
        <span className="text-xs text-app-text-muted">{section.date}</span>
      </div>

      <h2 className="mb-8 text-3xl font-semibold leading-tight tracking-tight text-app-heading md:text-4xl">
        {section.title}
      </h2>

      <div className="flex flex-col gap-5">
        {section.body.map((p, i) => (
          <p
            key={i}
            className="text-base leading-relaxed text-app-text md:text-lg"
          >
            {p}
          </p>
        ))}
      </div>

      {section.quote && (
        <blockquote className="mt-10 border-l-2 border-[var(--brand)] pl-5">
          <p className="text-lg italic leading-relaxed text-app-heading md:text-xl">
            {section.quote}
          </p>
        </blockquote>
      )}
    </motion.section>
  );
}
