import { whatIDoContent } from "@/data/home/profile";
import { fadeInUp, microInteractive, staggerContainer } from "@/lib/Motions";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function WhatIDoSection() {
  return (
    <section className="w-full bg-app-bg text-app-text px-6 py-20 md:px-12 lg:px-24">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-app-heading">
            What I Do
          </h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {whatIDoContent.map((service, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="card-base flex flex-col justify-between group hover:border-app-brand/40"
            >
              <div className="space-y-4">
                {/* Title */}
                <h3 className="text-xl font-bold text-app-heading group-hover:text-app-brand transition-colors duration-200">
                  {service.title}
                </h3>

                {/* Brief Description */}
                {/* <p className="text-sm md:text-base text-app-text font-normal leading-relaxed">
                  {service.brief}
                </p> */}
              </div>

              {/* Bulleted Includes List */}
              <div className="mt-6 pt-6 border-t border-app-border">
                <ul className="space-y-2.5">
                  {service.includes.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="flex items-center gap-2 text-sm text-app-text-muted"
                    >
                      <CheckCircle2 className="w-4 h-4 text-app-brand shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
