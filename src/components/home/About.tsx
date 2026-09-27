import { aboutContent } from "@/data/home/profile";
import { fadeInUp, microInteractive } from "@/lib/Motions";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="w-full bg-app-bg text-app-text px-6 py-16 md:px-12 lg:px-24">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeInUp}
          className="flex flex-col space-y-6"
        >
          {/* Section Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-app-heading tracking-tight">
            {aboutContent.title}
          </h2>

          {/* Brief Paragraph */}
          <p className="text-base md:text-lg text-app-text font-normal leading-relaxed">
            {aboutContent.brief}
          </p>

          {/* Minimal CTA Action */}
          <div className="pt-2">
            <motion.a
              href={aboutContent.cta.link}
              variants={microInteractive}
              whileHover="hover"
              whileTap="tap"
              className="inline-flex items-center gap-2 text-base font-bold text-app-heading underline decoration-app-brand decoration-2 underline-offset-4 hover:text-app-brand transition-colors duration-200"
            >
              {aboutContent.cta.text}
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
