import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/Motions";
import { NextAbout, TimelineAbout } from "@/data/about";

export function BackgroundAndStatement() {
  return (
    <section className="w-full bg-app-bg text-app-text px-6 py-12 md:px-12 lg:px-24 pb-24">
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left 7 Columns: Academic & Industry Background */}
        <div className="col-span-1 lg:col-span-7 text-left">
          <h2 className="text-2xl font-bold tracking-tight text-app-heading mb-8">
            {TimelineAbout.heading}
          </h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8 relative border-l border-app-border pl-6 ml-2"
          >
            {TimelineAbout.entries.map((entry, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="relative group"
              >
                {/* Timeline Bullet Anchor */}
                <div className="absolute -left-[31px] top-1.5 w-2 h-2 rounded-full bg-app-brand border border-app-bg group-hover:scale-125 transition-transform" />

                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="text-lg font-bold text-app-heading">
                    {entry.title}
                  </h3>
                  <span className="text-xs font-semibold text-app-text-muted font-mono">
                    {entry.yearRange}
                  </span>
                </div>

                <div className="text-xs font-semibold text-app-brand tracking-wide uppercase mb-1.5">
                  {entry.highlight}
                </div>

                <p className="text-sm text-app-text leading-relaxed">
                  {entry.context}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right 5 Columns: Forward Looking Callout Statement */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="col-span-1 lg:col-span-5 bg-card border border-app-border rounded-lg p-6 text-left lg:mt-16"
        >
          <span className="text-xs font-mono text-app-brand uppercase tracking-wider block mb-2">
            {NextAbout.label}
          </span>
          <p className="text-base text-app-heading font-medium leading-relaxed">
            "{NextAbout.statement}"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
