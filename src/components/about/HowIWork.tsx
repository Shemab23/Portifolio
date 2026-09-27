import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/Motions";
import { howIWorkAbout } from "@/data/about";

export function HowIWork() {
  return (
    <section className="w-full bg-app-bg text-app-text px-6 py-12 md:px-12 lg:px-24">
      <div className="w-full max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold tracking-tight text-app-heading mb-8">
          {howIWorkAbout.heading}
        </h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {howIWorkAbout.cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="card-base flex flex-col justify-start text-left space-y-2 p-6"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-app-brand opacity-60">
                  0{idx + 1}
                </span>
                <h3 className="text-lg font-bold text-app-heading">
                  {card.title}
                </h3>
              </div>
              <p className="text-sm text-app-text font-normal leading-relaxed pl-7">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
