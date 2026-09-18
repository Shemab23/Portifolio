import { WorkData } from "@/src/data/Metadata";
import { WorkType } from "@/src/data/types";
import React from "react";

export const ProjectCard = ({ project }: { project: WorkType }) => {
  const hasLinks = project.links.live || project.links.github;

  return (
    <article className="card-base">
      {/* Header Info */}
      <div className="flex items-center justify-between text-xs tracking-wider uppercase text-muted-foreground">
        <span>{project.category}</span>
        <span>{project.year}</span>
      </div>

      {/* Title & Core Meta */}
      <header className="mt-3">
        <h3 className="text-xl font-medium tracking-tight text-app-heading">
          {project.title}
        </h3>
        <p className="mt-1 text-sm font-normal text-muted-foreground">
          {project.role} {project.company ? `at ${project.company}` : ""}
        </p>
      </header>

      {/* Core Message / Content */}
      <div className="mt-4 space-y-3">
        <p className="text-sm font-medium leading-relaxed text-app-text">
          {project.tagline}
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
      </div>

      {/* Real-world Impact Metrics */}
      {project.metrics && (
        <div className="mt-4 bg-app-brand-bg border border-app-brand-border rounded-md p-3 text-xs font-medium text-app-brand">
          ✨ {project.metrics}
        </div>
      )}

      {/* Tech Badges (Minimal plain-text with separators) */}
      <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
        {project.technologies.map((tech, idx) => (
          <span key={tech} className="flex items-center">
            {tech}
            {idx < project.technologies.length - 1 && (
              <span className="ml-3 text-app-border">•</span>
            )}
          </span>
        ))}
      </div>

      {/* Minimal Action Links */}
      {hasLinks && (
        <footer className="mt-6 flex gap-4 pt-4 border-t border-app-border text-xs font-medium">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-app-heading underline underline-offset-4 hover:text-app-brand transition-colors duration-200"
            >
              Live Demo ↗
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground underline underline-offset-4 hover:text-app-text transition-colors duration-200"
            >
              Source Code ↗
            </a>
          )}
        </footer>
      )}
    </article>
  );
};

export const Work = () => {
  return (
    <section
      id="work"
      className="max-w-6xl mx-auto px-4 py-16 font-sans antialiased"
    >
      {/* Structural Header */}
      <header className="mb-12 border-b border-app-border pb-4">
        <h2 className="text-xs font-mono tracking-widest uppercase text-muted-foreground">
          01 // Selected Engineering Work
        </h2>
      </header>

      {/* Responsive Grid Structure without standard gaps to enforce clean borders */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-x border-app-border rounded-sm overflow-hidden gap-2">
        {WorkData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
