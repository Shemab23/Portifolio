import { motion } from "framer-motion";
import { otherWork } from "@/data/work";

export function WorkOther() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-6 py-2 md:py-4">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mb-10 flex flex-col gap-3"
        >
          <span className="text-sm font-medium uppercase tracking-wider text-app-brand">
            Other work
          </span>
          <h2 className="max-w-2xl text-2xl font-semibold leading-snug tracking-tight text-app-heading md:text-3xl">
            Work that kept me going while I studied.
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-app-text-muted">
            Not portfolio pieces — but part of the record, and part of why the
            rest of this page exists.
          </p>
        </motion.div>

        {/* ROWS */}
        <div className="flex flex-col divide-y divide-[var(--border)] border-y border-app-border">
          {otherWork.map((item, i) => (
            <motion.article
              key={item.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: i * 0.08,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="grid grid-cols-1 gap-6 py-8 md:grid-cols-12 md:gap-8 md:py-10"
            >
              {/* LEFT — meta column */}
              <div className="flex flex-col gap-1 md:col-span-3">
                <span className="text-xs uppercase tracking-wider text-app-text-muted">
                  {item.period}
                </span>
                <span className="text-sm font-medium text-app-text">
                  {item.role}
                </span>
                {item.location && (
                  <span className="text-sm text-app-text-muted">
                    {item.location}
                  </span>
                )}
              </div>

              {/* RIGHT — content column */}
              <div className="flex flex-col gap-3 md:col-span-9">
                <h3 className="text-lg font-semibold tracking-tight text-app-heading md:text-xl">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-app-text">
                  {item.summary}
                </p>

                {item.reflection && (
                  <p className="text-sm leading-relaxed text-app-text-muted">
                    {item.reflection}
                  </p>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
