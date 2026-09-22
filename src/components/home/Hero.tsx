import { hero } from "@/data/home/profile";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function HomeHero() {
  return (
    <section className="w-full">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-2 md:grid-cols-2 md:py-4">
        {/* LEFT — identity */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-col gap-6"
        >
          <span className="badge-accent w-fit text-sm">{hero.status}</span>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-app-heading md:text-6xl">
            {hero.name}
          </h1>

          <p className="text-lg text-app-text md:text-xl">{hero.tagline}</p>

          <p className="max-w-prose text-base text-app-text-muted">
            {hero.description}
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            {hero.ctas.map((cta) => (
              <a
                key={cta.href}
                href={cta.href}
                className={cn(
                  "rounded-lg px-5 py-2.5 text-sm font-medium transition-all",
                  cta.variant === "primary" &&
                    "bg-[var(--contrast)] text-[var(--bg)] hover:opacity-90",
                  cta.variant === "secondary" &&
                    "border border-app-border text-app-text hover:bg-[var(--secondary)]",
                )}
              >
                {cta.label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="relative w-full"
        >
          <div className="card-base overflow-hidden p-0">
            <img
              src={hero.portrait.src}
              alt={hero.portrait.alt}
              className="aspect-square w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
