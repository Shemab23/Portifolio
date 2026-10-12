import { useTheme } from "@/context/ThemeContext";
import { contactContent } from "@/data/home/profile";
import { fadeInUp, microInteractive } from "@/lib/Motions";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ContactSection() {
  const { contactOpen, setContactOpen } = useTheme();
  return (
    <section className="w-full bg-app-bg text-app-text px-6 py-20 md:px-12 lg:px-24">
      <div className="w-full max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeInUp}
          className="flex flex-col space-y-6 text-left"
        >
          {/* Bold Hook Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-app-heading tracking-tight">
            {contactContent.Hook}
          </h2>

          {/* Normal Font State Statement */}
          <p className="text-base md:text-lg text-app-text font-normal leading-relaxed">
            {contactContent.state}
          </p>

          {/* Bold CTA with Arrow Link */}
          <div className="pt-4">
            <motion.button
              variants={microInteractive}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setContactOpen((prev) => !prev)}
              className="inline-flex items-center gap-2 text-base md:text-lg font-bold text-app-heading underline decoration-app-brand decoration-2 underline-offset-4 hover:text-app-brand transition-colors duration-200"
            >
              {contactContent.cta.text}
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
