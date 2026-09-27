import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/Motions";
import { StackAbout } from "@/data/about";

export function Stack() {
  return (
    <section className="w-full bg-app-bg text-app-text px-6 py-12 md:px-12 lg:px-24">
      <div className="w-full max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold tracking-tight text-app-heading mb-8">
          {StackAbout.heading}
        </h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {StackAbout.groups.map((group, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-6 py-4 border-b border-app-border/40 last:border-0 items-baseline text-left"
            >
              {/* Category Tier Label */}
              <h3 className="text-md font-bold uppercase tracking-wider text-app-text col-span-1">
                {group.tier}
              </h3>

              {/* Associated Skill Badges */}
              <div className="col-span-3 flex flex-wrap gap-2 pt-2 md:pt-0">
                {group.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="px-2 py-1 text-sm font-medium">
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
