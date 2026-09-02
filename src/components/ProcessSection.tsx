import { PROCESS_STEPS } from '../data/portfolioData';
import { ArrowRight, Check } from 'lucide-react';

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 sm:py-28 bg-[#F8F6EF] border-b border-[#E8E4DA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-xs font-mono tracking-widest uppercase text-[#9B4A22] mb-2 flex items-center gap-2">
            <span className="w-2 h-[1.5px] bg-[#9B4A22]"></span>
            04 // Engineering Process
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#141517] tracking-[-0.02em]">
            From problem to working system.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#555861] leading-relaxed">
            Software craftsmanship is not just generating syntax; it is understanding requirements, designing boundaries, and validating behavior under real conditions.
          </p>
        </div>

        {/* 5-Step Linear Systems Process */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-5">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="relative p-6 rounded-2xl bg-[#FAF9F6] border border-[#E3DFD5] flex flex-col justify-between hover:border-[#9B4A22]/50 hover:shadow-[0_8px_24px_-10px_rgba(0,0,0,0.06)] transition-all duration-300 group"
            >
              <div>
                {/* Step number & arrow */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#EBE8E0]">
                  <span className="font-mono text-2xl font-bold text-[#9B4A22]">
                    {step.number}
                  </span>
                  {idx < PROCESS_STEPS.length - 1 ? (
                    <span className="hidden md:inline-block text-[#B8B4AA] group-hover:text-[#9B4A22] group-hover:translate-x-1 transition-all">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-[#EAE7DE] text-[#6E717B]">
                      Loop
                    </span>
                  )}
                </div>

                <div className="text-xs font-mono uppercase tracking-wider text-[#9B4A22] mb-1">
                  {step.action}
                </div>

                <h3 className="text-lg font-bold text-[#141517] mb-3">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#50535C] leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Specific Deliverables */}
              <div className="pt-4 border-t border-[#EAE7DE] space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#858894] block">
                  Key Artifacts
                </span>
                {step.deliverables.map((d) => (
                  <div key={d} className="flex items-center gap-1.5 text-[11px] text-[#33353C] font-mono">
                    <Check className="w-3 h-3 text-[#9B4A22] shrink-0" />
                    <span className="truncate">{d}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Process Guarantee Note */}
        <div className="mt-12 p-6 rounded-xl bg-[#EFECE5] border border-[#E0DDD4] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#52555E]">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#9B4A22]"></span>
            <span>Deterministic Architecture: Code follows architecture, never the other way around.</span>
          </span>
          <span className="text-[#888A94]">QA Verified // Structured Pipelines</span>
        </div>

      </div>
    </section>
  );
}
