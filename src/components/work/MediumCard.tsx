import { experience } from "@/data/work";
import { fadeInUp, staggerContainer } from "@/lib/Motions";
import { motion } from "framer-motion";

export function ExperienceSection() {
  return (
    <section className="w-full bg-app-bg text-app-text px-6 py-20 md:px-12 lg:px-24 border-b border-app-border">
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-app-heading mb-12">
          Experience
        </h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="space-y-12"
        >
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="flex flex-col text-left space-y-3 pb-8 border-b border-app-border/40 last:border-0 last:pb-0"
            >
              {/* Organization above role */}
              <span className="text-xs font-semibold uppercase tracking-wider text-app-text-muted">
                {exp.organization}
              </span>

              {/* Header Info Row */}
              <div className="flex items-baseline justify-between gap-4 flex-wrap">
                <h3 className="text-2xl font-bold text-app-heading tracking-tight">
                  {exp.role}
                </h3>
                <span className="text-sm font-medium text-app-text-muted">
                  {exp.year}
                </span>
              </div>

              {/* Impact Paragraph */}
              <p className="text-base text-app-text font-normal leading-relaxed max-w-3xl">
                {exp.description}
              </p>

              {/* Matching Skills Pillars */}
              <div className="pt-2 flex flex-wrap gap-2">
                {exp.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="badge-accent text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
