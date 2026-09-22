import { motion } from "framer-motion";
import { practice } from "@/data/work";
import { cn } from "@/lib/utils";

function StatusBadge({ status }: { status: string }) {
  const isHighlight = status === "free" || status === "in-use";
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium",
        isHighlight
          ? "badge-accent"
          : "border border-app-border text-app-text-muted",
      )}
    >
      {status === "free" && "Free"}
      {status === "in-use" && "In use"}
      {status === "discontinued" && "Discontinued"}
      {status === "archived" && "Archived"}
    </span>
  );
}

export function WorkPractice() {
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
            Practice
          </span>
          <h2 className="max-w-2xl text-2xl font-semibold leading-snug tracking-tight text-app-heading md:text-3xl">
            Things I built to learn — not for a client.
          </h2>
        </motion.div>

        {/* ROWS */}
        <div className="flex flex-col divide-y divide-[var(--border)] border-y border-app-border">
          {practice.map((item, i) => (
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
              <div className="flex flex-col items-start gap-2 md:col-span-3">
                <span className="text-xs uppercase tracking-wider text-app-text-muted">
                  {item.period}
                </span>
                <span className="text-sm font-medium text-app-text">
                  {item.role}
                </span>
                <StatusBadge status={item.status} />
              </div>

              {/* RIGHT — content column */}
              <div className="flex flex-col gap-4 md:col-span-9">
                <h3 className="text-xl font-semibold tracking-tight text-app-heading md:text-2xl">
                  {item.title}
                </h3>

                {item.statusNote && (
                  <p className="text-sm italic text-app-text-muted">
                    {item.statusNote}
                  </p>
                )}

                <p className="text-base leading-relaxed text-app-text">
                  {item.summary}
                </p>

                {item.approach && (
                  <p className="text-sm leading-relaxed text-app-text-muted">
                    {item.approach}
                  </p>
                )}

                {item.outcome && (
                  <p className="text-sm leading-relaxed text-app-text">
                    <span className="text-app-text-muted">Outcome — </span>
                    {item.outcome}
                  </p>
                )}

                {item.learned && (
                  <p className="text-sm leading-relaxed text-app-text">
                    <span className="text-app-text-muted">
                      What I learned —{" "}
                    </span>
                    {item.learned}
                  </p>
                )}

                {/* STACK + LINKS */}
                <div className="mt-1 flex flex-wrap items-center gap-x-5 gap-y-2">
                  {item.stack && item.stack.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {item.stack.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-app-border px-2 py-0.5 text-[11px] text-app-text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-4">
                    {item.links?.live && (
                      <a
                        href={item.links.live}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-medium text-app-brand transition-opacity hover:opacity-80"
                      >
                        Live ↗
                      </a>
                    )}
                    {item.links?.source && (
                      <a
                        href={item.links.source}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-medium text-app-brand transition-opacity hover:opacity-80"
                      >
                        Source ↗
                      </a>
                    )}
                    {item.links?.blog && (
                      <a
                        href={item.links.blog}
                        className="text-xs font-medium text-app-brand transition-opacity hover:opacity-80"
                      >
                        Read more →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
