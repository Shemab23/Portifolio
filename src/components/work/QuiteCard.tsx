import { otherwork } from "@/data/work";
import { fadeInUp, staggerContainer } from "@/lib/Motions";
import { OtherWorkSectionProps } from "@/types/work";
import { motion } from "framer-motion";

export function OtherWorkSection() {
  return (
    <section className="w-full bg-app-bg text-app-text px-6 py-20 md:px-12 lg:px-24">
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold tracking-tight text-app-heading mb-8">
          Background Context
        </h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
        >
          {otherwork.map((work, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="flex flex-col text-left space-y-1.5"
            >
              {/* Content Context Inline Row */}
              <div className="flex items-baseline justify-between gap-4 border-b border-app-border pb-1">
                <h4 className="text-base font-bold text-app-heading">
                  {work.role}{" "}
                  <span className="font-normal text-app-text-muted">at</span>{" "}
                  {work.organization}
                </h4>
                <span className="text-xs font-medium text-app-text-muted shrink-0">
                  {work.year}
                </span>
              </div>

              {/* Condensed Text footprint */}
              <p className="text-sm text-app-text-muted font-normal leading-relaxed">
                {work.note}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
