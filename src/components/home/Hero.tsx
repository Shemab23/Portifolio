import { heroContent } from "@/data/home/profile";
import {
  fadeInUp,
  microInteractive,
  staggerContainer,
  subtleScale,
} from "@/lib/Motions";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] w-full flex items-center justify-center px-6 py-12 md:px-12 lg:px-24 bg-app-bg text-app-text overflow-hidden">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
      >
        {/* Left Content Side */}
        <motion.div
          variants={fadeInUp}
          className="col-span-1 lg:col-span-7 flex flex-col justify-center space-y-6 text-left"
        >
          {/* Tagline / Sub-heading */}
          <span className="title-colored text-sm md:text-base font-medium uppercase tracking-wider">
            {heroContent.title}
          </span>

          {/* Core Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-app-heading leading-tight tracking-tight">
            {heroContent.headline}
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-app-text-muted max-w-xl font-normal leading-relaxed">
            {heroContent.description}
          </p>

          {/* CTA Link */}
          <div className="pt-4">
            <MotionLink
              to={heroContent.cta.link}
              variants={microInteractive}
              whileHover="hover"
              whileTap="tap"
              className="inline-flex items-center gap-2 text-base md:text-lg font-bold text-app-heading underline decoration-app-brand decoration-2 underline-offset-4 hover:text-app-brand transition-colors duration-200"
            >
              {heroContent.cta.text}
              <ArrowUpRight className="w-5 h-5 transition-transform duration-200" />
            </MotionLink>
          </div>
        </motion.div>

        {/* Right Media Side */}
        <motion.div
          variants={subtleScale}
          className="col-span-1 lg:col-span-5 w-full h-full flex items-center justify-center"
        >
          <div className="w-full h-[300px] sm:h-[400px] lg:h-full min-h-[350px] lg:min-h-[480px] relative rounded-lg overflow-hidden border border-app-border">
            <img
              src={heroContent.image}
              alt={heroContent.headline}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
