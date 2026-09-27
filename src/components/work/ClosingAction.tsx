import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp, microInteractive } from "@/lib/Motions";
import { closingAction } from "@/data/work";
import { useTheme } from "@/context/ThemeContext";

export function Closing() {
  const { contactOpen, setContactOpen } = useTheme();
  return (
    <section className="w-full bg-app-bg text-app-text px-6 py-24 md:px-12 lg:px-24 border-t border-app-border/40">
      <div className="w-full max-w-3xl mx-auto text-left">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-app-heading tracking-tight">
            {closingAction.heading}
          </h2>
          <p className="text-base md:text-lg text-app-text font-normal leading-relaxed">
            {closingAction.subtext}
          </p>
          <div className="pt-4">
            <motion.button
              variants={microInteractive}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setContactOpen((prev) => !prev)}
              className="inline-flex items-center gap-2 text-base md:text-lg font-bold text-app-heading underline decoration-app-brand decoration-2 underline-offset-4 hover:text-app-brand transition-colors duration-200"
            >
              {closingAction.ctaText}
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
