import { story } from "@/data/about";
import { motion } from "framer-motion";

export function StoryClosing() {
  const { closing } = story;

  return (
    <section className="w-full">
      <div className="mx-auto max-w-3xl px-6 pt-8 pb-32 md:pt-16 md:pb-48">
        {/* ANCHOR (small, echoes sections above) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mb-3 flex items-center gap-3"
        >
          <span className="text-xs uppercase tracking-wider text-app-brand">
            {closing.anchor}
          </span>
          <span className="h-px flex-1 bg-[var(--border)]" />
          <span className="text-xs text-app-text-muted">{closing.date}</span>
        </motion.div>

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.4, 0, 0.2, 1] }}
          className="mb-8 text-3xl font-semibold leading-tight tracking-tight text-app-heading md:text-4xl"
        >
          {closing.title}
        </motion.h2>

        {/* BODY */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-col gap-5"
        >
          {closing.body.map((p, i) => (
            <p
              key={i}
              className="text-base leading-relaxed text-app-text md:text-lg"
            >
              {p}
            </p>
          ))}
        </motion.div>

        {/* FINAL LINE — rendered as a statement, not a pull-quote */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.4, 0, 0.2, 1] }}
          className="mt-16 text-3xl font-semibold leading-tight tracking-tight text-app-brand md:mt-24 md:text-5xl"
        >
          {closing.quote}
        </motion.p>
      </div>
    </section>
  );
}
