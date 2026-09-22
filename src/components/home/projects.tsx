import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { bestProjects } from "@/data/home/profile";

export function HomeBestProjects() {
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
            {bestProjects.label}
          </span>
          <h2 className="max-w-2xl text-2xl font-semibold leading-snug tracking-tight text-app-heading md:text-4xl">
            {bestProjects.headline}
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {bestProjects.projects.map((project, i) => (
            <motion.a
              key={project.slug}
              href={project.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: i * 0.08,
                ease: [0.4, 0, 0.2, 1],
              }}
              className={cn(
                "card-base group flex flex-col gap-4 p-4",
                "hover:-translate-y-1 hover:border-[var(--brand-border)]",
              )}
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden rounded-md">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                {project.accent && (
                  <span className="badge-accent absolute left-3 top-3 text-xs">
                    {project.accent}
                  </span>
                )}
              </div>

              {/* META */}
              <div className="flex items-center justify-between text-xs text-app-text-muted">
                <span>{project.role}</span>
                <span>{project.year}</span>
              </div>

              {/* TITLE + SUMMARY */}
              <h3 className="text-lg font-semibold tracking-tight text-app-heading">
                {project.title}
              </h3>
              <p className="text-sm leading-relaxed text-app-text-muted">
                {project.summary}
              </p>

              {/* STACK */}
              <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-app-border px-2 py-0.5 text-[11px] text-app-text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        {/* VIEW ALL */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex justify-start"
        >
          <a
            href={bestProjects.viewAll.href}
            className="inline-flex items-center gap-2 text-sm font-medium text-app-brand transition-opacity hover:opacity-80"
          >
            {bestProjects.viewAll.label}
            <span aria-hidden>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
