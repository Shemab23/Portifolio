import { projects } from "@/data/work";
import { fadeInUp, microInteractive, staggerContainer } from "@/lib/Motions";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Eye } from "lucide-react";
import { LabPlaceholder } from "../home/SelectedWork";

export function ProjectsSection() {
  const cta = {
    link: "https://github.com/Shemab23",
    text: "View All codes",
  };
  const title = "My Projects";

  return (
    <section className="w-full bg-app-bg text-app-text px-6 py-20 md:px-12 lg:px-24 border-b border-app-border">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-app-heading mb-16">
          {title}
        </h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-24"
        >
          {projects.map((project, idx) => {
            const paragraphs = project.description.split("\n\n");
            return (
              <motion.article
                key={idx}
                variants={fadeInUp}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start"
              >
                {/* Left Side: Story Layout */}
                <div className="col-span-1 lg:col-span-7 flex flex-col justify-between h-full space-y-6 lg:order-1 order-2">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-app-heading tracking-tight">
                      {project.name}
                    </h3>

                    {paragraphs.map((p, pIdx) => (
                      <p
                        key={pIdx}
                        className="text-base text-app-text font-normal leading-relaxed"
                      >
                        {p}
                      </p>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-wrap gap-2">
                    {project.tools.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="badge-accent text-xs font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Side: Media Asset + Quiet Metadata Stack */}
                <div className="col-span-1 lg:col-span-5 flex flex-col space-y-4 lg:order-2 order-1">
                  <div className="group relative w-full aspect-[16/10] rounded-lg overflow-hidden border border-app-border bg-muted">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <LabPlaceholder
                        name={project.name}
                        contenxt="CLI Scaffolder"
                      />
                    )}

                    {/* Hover preview overlay — only when a real preview link exists */}
                    {project.previewLink && (
                      <a
                        href={project.previewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 group-hover:bg-black/40 group-hover:backdrop-blur-sm group-hover:opacity-100 transition-all duration-300"
                      >
                        <span className="flex items-center gap-2 text-white text-sm font-bold tracking-wide px-4 py-2 rounded-full border border-white/40">
                          <Eye className="w-4 h-4" />
                          Preview
                        </span>
                      </a>
                    )}
                  </div>

                  {/* Small, Quiet Meta Cluster */}
                  <div className="flex flex-wrap items-center justify-between text-xs text-app-text-muted font-medium px-1">
                    <div className="flex items-center gap-3">
                      <span className="uppercase tracking-wider text-app-brand">
                        {project.type}
                      </span>
                      {project.status && (
                        <span className="opacity-60 lowercase">
                          ({project.status})
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-3">
                      {project.codeLink && (
                        <a
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View source code for ${project.name}`}
                          className="flex items-center gap-1 text-app-text/60 hover:text-app-brand transition-colors"
                        >
                          <Code2 className="w-3.5 h-3.5" />
                        </a>
                      )}
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Section Action Call Footer */}
        <div className="mt-20 flex justify-start">
          <motion.a
            href={cta.link}
            variants={microInteractive}
            whileHover="hover"
            whileTap="tap"
            target="_blank"
            className="inline-flex items-center gap-2 text-lg font-bold text-app-heading underline decoration-app-brand decoration-2 underline-offset-4 hover:text-app-brand transition-colors duration-200"
          >
            {cta.text}
            <ArrowUpRight className="w-5 h-5" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
