import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { workClosing } from "@/data/work";

export function WorkClosing() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-6 py-2 md:py-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-col gap-3"
        >
          <p className="max-w-xl text-base leading-relaxed text-app-text-muted">
            {workClosing.line}
          </p>

          <Link
            to={workClosing.link.href}
            className="inline-flex w-fit items-center gap-2 text-sm font-medium text-app-brand transition-opacity hover:opacity-80"
          >
            {workClosing.link.label}
            <span aria-hidden>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
