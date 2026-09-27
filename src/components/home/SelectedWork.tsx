import React from "react";
import { motion } from "framer-motion";
import { Code2, ArrowUpRight, ArrowRight } from "lucide-react";
import {
  staggerContainer,
  fadeInUp,
  subtleScale,
  microInteractive,
} from "@/lib/Motions";
import { cardsSection } from "@/data/home/profile";

export function LabPlaceholder({
  name,
  contenxt = "Teaching Assistant",
}: {
  name: string;
  contenxt?: string;
}) {
  // Extracts the first letter of the experience/project name for a personalized touch
  const initial = name ? name.charAt(0).toUpperCase() : "L";

  return (
    <div className="w-full h-full bg-gradient-to-br from-app-brand to-app-text-muted/30 flex flex-col items-center justify-center p-6 text-center select-none relative overflow-hidden group">
      {/* Decorative subtle grid background simulating a technical/lab vibe */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      {/* Decorative glowing orb using your theme's muted color */}
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-app-text-muted/10 rounded-full blur-2xl transition-transform duration-500 group-hover:scale-125"></div>

      {/* Central Visual Anchor */}
      <div className="relative flex items-center justify-center w-16 h-16 mb-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-inner transition-transform duration-500 group-hover:scale-105">
        {/* Lab/Science Icon styled to match the theme color space */}
        <svg
          className="w-8 h-8 text-app-text/70"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 3.104v13.011c0 .852-.69 1.543-1.542 1.543H4.792c-.853 0-1.542-.691-1.542-1.543V3.104c0-.852.69-1.543 1.542-1.543h3.416c.853 0 1.542.691 1.542 1.543zM20.25 10.5v5.614c0 .852-.69 1.542-1.542 1.542h-3.416c-.853 0-1.542-.69-1.542-1.542V10.5c0-.852.69-1.543 1.542-1.543h3.416c.853 0 1.542.691 1.542 1.543zM15 3.75h4.5M15 6.75h4.5"
          />
        </svg>
      </div>

      {/* Text Context */}
      <span className="text-xs font-semibold tracking-widest text-app-text/60 uppercase mb-1">
        {contenxt}
      </span>
      <h3 className="text-sm font-medium text-app-text line-clamp-1 px-4">
        {name || "Lab Experience"}
      </h3>
    </div>
  );
}

export default function SelectedWork() {
  return (
    <section className="w-full bg-app-bg text-app-text px-6 py-20 md:px-12 lg:px-24">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-app-heading">
            {cardsSection.title}
          </h2>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {cardsSection.cards.map((card, idx) => (
            <motion.article
              key={idx}
              variants={fadeInUp}
              className="flex flex-col h-full bg-transparent group"
            >
              {/* Media Container with Overlay Effect */}
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-app-border bg-muted mb-4">
                {card.image ? (
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <LabPlaceholder name={card.name} />
                )}

                {/* Micro-Interactive Hover Overlay */}
                {card.preview && (
                  <div className="absolute inset-0 bg-neutral-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 backdrop-blur-[2px]">
                    <div className="text-white space-y-2">
                      <button
                        className="flex items-start justify-between gap-4"
                        onClick={() => window.open(card.preview, "_blank")}
                      >
                        <p className="text-sm font-normal text-neutral-200 line-clamp-3 leading-relaxed">
                          Preview the project
                        </p>
                        <ArrowUpRight className="w-5 h-5 text-white shrink-0 mt-0.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Title Block & Code Icon Link */}
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="text-lg font-bold text-app-heading group-hover:text-app-brand transition-colors duration-200 line-clamp-1">
                  {card.name}
                </h3>
                {card.code && (
                  <motion.a
                    href={`#code-${idx}`}
                    title={`View code for ${card.code}`}
                    variants={microInteractive}
                    whileHover="hover"
                    whileTap="tap"
                    className="inline-flex items-center justify-center text-app-brand hover:text-app-heading p-1 transition-colors"
                  >
                    <Code2 className="w-5 h-5" />
                  </motion.a>
                )}
              </div>

              {/* Meta / Service Details */}
              <div className="flex items-baseline justify-between gap-2 mb-3">
                <span className="text-xs font-semibold text-app-brand uppercase tracking-wider line-clamp-1">
                  {card.service}
                </span>
                <span className="text-xs font-medium text-app-text-muted shrink-0">
                  {card.year}
                </span>
              </div>

              {/* Core Context Description */}
              <p className="text-sm text-app-text-muted font-normal leading-relaxed line-clamp-3 mt-auto">
                {card.description}
              </p>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom Section Action Footer */}
        <motion.div
          variants={subtleScale}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <motion.a
            href={cardsSection.more.link}
            variants={microInteractive}
            whileHover="hover"
            whileTap="tap"
            className="inline-flex items-center gap-2 text-base font-bold text-app-heading underline decoration-app-brand decoration-2 underline-offset-4 hover:text-app-brand transition-colors duration-200"
          >
            {cardsSection.more.text}
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
