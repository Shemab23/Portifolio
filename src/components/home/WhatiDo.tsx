import { whatIDo } from "@/data/home/profile";
import { motion } from "framer-motion";

export function HomeWhatIDo() {
  return (
    <section className="w-full">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-2 md:grid-cols-2 md:py-4">
        {/* LEFT — text */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-col gap-6"
        >
          <span className="text-sm font-medium uppercase tracking-wider text-app-brand">
            {whatIDo.label}
          </span>

          <h2 className="text-2xl font-semibold leading-snug tracking-tight text-app-heading md:text-4xl">
            {whatIDo.headline}
          </h2>

          <div className="flex flex-col gap-4">
            {whatIDo.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-app-text-muted"
              >
                {p}
              </p>
            ))}
          </div>

          <p className="title-colored text-lg md:text-xl">{whatIDo.emphasis}</p>
        </motion.div>

        {/* RIGHT — image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="w-full"
        >
          <div className="card-base overflow-hidden p-0">
            <img
              src="/home/what-i-do.png"
              alt="A minimal engineering workspace with a laptop, notebook, and coffee."
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
