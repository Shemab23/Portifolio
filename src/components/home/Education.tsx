import { education } from "@/data/home/profile";
import { motion } from "framer-motion";

export function HomeEducation() {
  return (
    <section className="w-full">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-2 md:grid-cols-5 md:py-4">
        {/* LEFT — image (smaller column) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="md:col-span-2"
        >
          <div className="card-base overflow-hidden p-0">
            <img
              src="/home/diploma.jpeg"
              alt="Framed university diploma on a warm neutral wall."
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </motion.div>

        {/* RIGHT — text */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-col gap-6 md:col-span-3"
        >
          <span className="text-sm font-medium uppercase tracking-wider text-app-brand">
            {education.label}
          </span>

          <div className="flex flex-col gap-4">
            {education.entries.map((entry, i) => (
              <div
                key={i}
                className="card-base flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"
              >
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold tracking-tight text-app-heading">
                    {entry.degree}
                  </h3>
                  <p className="text-sm text-app-text">
                    {entry.school}
                    {entry.location ? ` · ${entry.location}` : ""}
                  </p>
                  {entry.detail && (
                    <p className="text-sm text-app-text-muted">
                      {entry.detail}
                    </p>
                  )}
                </div>

                <div className="flex flex-col items-start gap-2 sm:items-end">
                  <span className="text-xs uppercase tracking-wider text-app-text-muted">
                    {entry.period}
                  </span>
                  {entry.highlight && (
                    <span className="badge-accent text-xs">
                      {entry.highlight}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {education.microNote && (
            <p className="max-w-prose text-sm leading-relaxed text-app-text-muted">
              {education.microNote}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
