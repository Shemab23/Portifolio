import { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ArrowUpRight, CheckCircle2, ChevronRight, Code2, Layers, X, Sparkles } from 'lucide-react';

export default function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Additional engineering repositories from Bruno's GitHub portfolio
  const secondaryRepositories = [
    {
      name: 'AI_project — Learning Assistant',
      tech: 'Python / Jupyter',
      desc: 'Retrieval-Augmented Generation (RAG) pipeline to help students contextualize and query instructional material directly.',
      tag: 'AI Pipeline',
    },
    {
      name: 'AI-Skills-Lab',
      tech: 'TypeScript / Node.js',
      desc: 'Summer engineering lab repository for experimenting with model endpoints, prompt structures, and evaluation benchmarks.',
      tag: 'AI Experimentation',
    },
    {
      name: 'react-Starter',
      tech: 'TypeScript / React',
      desc: 'Lightweight opinionated template for rapid front-end prototyping with strict typing and clean modular hierarchy.',
      tag: 'Frontend Scaffolding',
    },
  ];

  return (
    <section id="work" className="py-20 sm:py-28 bg-[#FAF9F6] border-b border-[#EAE7DF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E8E5DC]">
          <div>
            <div className="text-xs font-mono tracking-widest uppercase text-[#9B4A22] mb-2 flex items-center gap-2">
              <span className="w-2 h-[1.5px] bg-[#9B4A22]"></span>
              03 // Selected Work & Systems
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#141517] tracking-[-0.02em]">
              Built, tested, learned.
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm text-[#5C5F68] max-w-md">
            Concrete engineering artifacts demonstrating software design, data modeling, algorithm integration, and architectural feasibility.
          </p>
        </div>

        {/* Featured Case Study Cards (2-column editorial grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-16">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between rounded-2xl bg-[#F6F4ED] border border-[#E3DFD5] overflow-hidden hover:border-[#9B4A22]/50 hover:shadow-[0_16px_40px_-15px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              <div>
                {/* Visual Header */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#ECE8DF] border-b border-[#E2DDD3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141517]/70 via-[#141517]/20 to-transparent"></div>
                  
                  {/* Category and System Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-[#FAF9F6]/90 backdrop-blur-md text-[#141517] font-semibold border border-white/40">
                      0{index + 1} // {project.systemType}
                    </span>
                    {project.repoName && (
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-black/60 backdrop-blur-md text-[#FAF9F6]">
                        {project.repoName}
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#F0EFEB]/90 font-medium line-clamp-1 mt-0.5">
                      {project.tagline}
                    </p>
                  </div>
                </div>

                {/* Case Study Content Breakdown */}
                <div className="p-6 sm:p-7 space-y-5">
                  {/* Problem */}
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#8C8F99] block mb-1">
                      Problem Context
                    </span>
                    <p className="text-xs sm:text-sm text-[#3E4047] leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  {/* Contribution */}
                  <div className="p-3.5 rounded-xl bg-[#EFECE5] border border-[#E3DFD5]">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#9B4A22] block mb-1 font-semibold">
                      Bruno's Contribution
                    </span>
                    <p className="text-xs sm:text-sm text-[#1A1C21] font-medium leading-relaxed">
                      {project.contribution}
                    </p>
                  </div>

                  {/* Technical Challenge & Learning */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C8F99] block mb-1">
                        Technical Challenge
                      </span>
                      <p className="text-xs text-[#50535C] leading-relaxed">
                        {project.technicalChallenge}
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C8F99] block mb-1">
                        Key Outcome
                      </span>
                      <p className="text-xs text-[#50535C] leading-relaxed">
                        {project.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer: Tech tags & Action */}
              <div className="p-6 sm:p-7 pt-0 border-t border-[#E8E5DC] mt-4 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 text-[11px] font-mono rounded bg-[#ECE8DF] text-[#4F525B]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#9B4A22] hover:text-[#7A3617] font-mono transition-colors"
                >
                  <span>Examine Architecture</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Technical Repositories Strip */}
        <div className="p-8 rounded-2xl bg-[#F0EDE5] border border-[#DDD8CD]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-4 border-b border-[#E0DCD1]">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#9B4A22]">
                Repository Index
              </span>
              <h3 className="text-lg font-bold text-[#141517]">
                Additional Engineering Experiments & Prototyping Labs
              </h3>
            </div>
            <a
              href="https://github.com/Bruno-250"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 sm:mt-0 inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#555861] hover:text-[#9B4A22] transition-colors"
            >
              <span>GitHub @Bruno-250</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {secondaryRepositories.map((repo) => (
              <div
                key={repo.name}
                className="p-5 rounded-xl bg-[#FAF9F6] border border-[#E3DFD5] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#EFECE5] text-[#7A7C85]">
                      {repo.tag}
                    </span>
                    <span className="text-[11px] font-mono text-[#9B4A22]">
                      {repo.tech}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-[#141517] mb-1.5">
                    {repo.name}
                  </h4>
                  <p className="text-xs text-[#5A5D66] leading-relaxed">
                    {repo.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Deep Architecture Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#141517]/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#FAF9F6] border border-[#E2DDD3] shadow-2xl p-6 sm:p-8">
            {/* Modal close */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#EFECE6] text-[#555861] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="pr-10 mb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#9B4A22] block mb-1">
                Engineering Case Study // {selectedProject.systemType}
              </span>
              <h3 className="text-2xl font-bold text-[#141517] tracking-tight">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-[#61636B] mt-1">
                {selectedProject.tagline}
              </p>
            </div>

            {/* Image Preview */}
            <div className="rounded-xl overflow-hidden aspect-[16/9] mb-6 border border-[#E0DDD4]">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Architecture Details */}
            <div className="space-y-5 text-sm">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#8C8F99] mb-2 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#9B4A22]" />
                  System Architecture & Subsystems
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProject.architectureDetails?.map((item, idx) => (
                    <li
                      key={idx}
                      className="p-2.5 rounded-lg bg-[#F3F0E8] border border-[#E5E1D7] text-xs text-[#2A2C33] flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#9B4A22] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#F6F3EB] border border-[#E5E1D6]">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#9B4A22] mb-1 font-semibold">
                  Engineering Insight
                </h4>
                <p className="text-xs sm:text-sm text-[#3E4047] leading-relaxed">
                  "Solving {selectedProject.title} required prioritizing verifiable system behavior and deterministic data contracts over surface decoration. The key lesson was isolating state transitions so that unexpected conditions don't crash adjacent modules."
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#8C8F99] mb-2 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-[#9B4A22]" />
                  Verified Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-mono rounded bg-[#ECE8DF] text-[#33353D] font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal actions */}
            <div className="mt-8 pt-6 border-t border-[#E8E5DC] flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg border border-[#D5D2C9] text-[#141517] hover:bg-[#EFECE6]"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
