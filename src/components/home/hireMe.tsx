import { hire } from "@/data/home/profile";
import { motion } from "framer-motion";

export function HomeHire() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-6 py-2 md:py-4">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mb-12 flex flex-col gap-3"
        >
          <span className="text-sm font-medium uppercase tracking-wider text-app-brand">
            {hire.label}
          </span>
          <h2 className="max-w-3xl text-2xl font-semibold leading-snug tracking-tight text-app-heading md:text-4xl">
            {hire.headline}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* TWO PATHS */}
          <div className="grid grid-cols-1 gap-6 md:col-span-2 md:grid-cols-2">
            {hire.paths.map((path, i) => (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="card-base flex flex-col gap-5"
              >
                <h3 className="text-lg font-semibold tracking-tight text-app-heading">
                  {path.title}
                </h3>

                <p className="text-sm leading-relaxed text-app-text-muted">
                  {path.description}
                </p>

                <ul className="flex flex-col gap-2.5">
                  {path.bullets.map((b, bi) => (
                    <li
                      key={bi}
                      className="flex items-start gap-2.5 text-sm text-app-text"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-app-brand"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
            className="w-full"
          >
            <div className="card-base h-full overflow-hidden p-0">
              <img
                src="/home/hire.jpeg"
                alt="Two people collaborating at a desk in warm natural light."
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* CTA BAR */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <a
            href={hire.primaryCta.href}
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--contrast)] px-6 py-3 text-sm font-medium text-[var(--bg)] transition-opacity hover:opacity-90"
          >
            {hire.primaryCta.label}
            <span aria-hidden>→</span>
          </a>
          <p className="text-sm text-app-text-muted">{hire.reassurance}</p>
        </motion.div>
      </div>
    </section>
  );
}
