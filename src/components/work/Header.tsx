import { motion } from "framer-motion";
import { workHeader } from "@/data/work";

export function WorkHeader() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-6 py-2 md:py-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-col gap-4"
        >
          <span className="text-sm font-medium uppercase tracking-wider text-app-brand">
            {workHeader.label}
          </span>
          <h1 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-app-heading md:text-5xl">
            {workHeader.headline}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-app-text-muted">
            {workHeader.intro}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
