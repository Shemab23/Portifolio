import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { toolkit } from "@/data/home/profile";

export function HomeToolkit() {
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
            {toolkit.label}
          </span>
          <h2 className="max-w-2xl text-2xl font-semibold leading-snug tracking-tight text-app-heading md:text-4xl">
            {toolkit.headline}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* GROUPS */}
          <div className="grid grid-cols-1 gap-6 md:col-span-2 md:grid-cols-2">
            {toolkit.groups.map((group, gi) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: gi * 0.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="card-base flex flex-col gap-4"
              >
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-semibold tracking-tight text-app-heading">
                    {group.label}
                  </h3>
                  {group.note && (
                    <p className="text-xs text-app-text-muted">{group.note}</p>
                  )}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={cn(
                        "rounded-md px-2.5 py-1 text-xs font-medium transition-colors",
                        gi === 0
                          ? "border border-app-border text-app-text"
                          : "border border-[var(--brand-border)] bg-[var(--brand-bg)] text-app-brand",
                      )}
                    >
                      {item}
                    </span>
                  ))}
                </div>
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
                src={"/home/toolkit.jpeg"}
                alt="Hands on a mechanical keyboard in warm natural light."
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* FOOTNOTE */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 max-w-2xl text-sm italic text-app-text-muted"
        >
          {toolkit.footnote}
        </motion.p>
      </div>
    </section>
  );
}
