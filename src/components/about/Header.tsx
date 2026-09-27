import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/Motions";
import { HeaderAbout } from "@/data/about";

export function AboutHeader() {
  return (
    <section className="w-full bg-app-bg text-app-text px-6 pt-16 pb-12 md:px-12 lg:px-24">
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
        {/* Left Side: Crisp Headshot Profile */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="col-span-1 md:col-span-4 max-w-70 md:max-w-full mx-auto md:mx-0"
        >
          <div className="aspect-square rounded-lg overflow-hidden border border-app-border bg-muted">
            <img
              src={HeaderAbout.photo}
              alt="Profile Headshot"
              className="w-full h-full object-cover contrast-[1.05]  transition-all duration-500"
              loading="eager"
            />
          </div>
        </motion.div>

        {/* Right Side: Primary Bio Context */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="col-span-1 md:col-span-8 flex flex-col space-y-4 text-left"
        >
          <span className="title-colored text-sm font-semibold uppercase tracking-wider">
            {HeaderAbout.role}
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-app-heading leading-snug tracking-tight">
            {HeaderAbout.tagline}
          </h1>
          <p className="text-sm md:text-base text-app-text-muted font-normal max-w-xl">
            {HeaderAbout.availability}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
