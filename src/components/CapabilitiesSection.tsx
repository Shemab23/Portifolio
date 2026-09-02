import { CAPABILITIES } from '../data/portfolioData';
import { Terminal, Database, GitMerge, Sparkles, Cpu, ArrowRight } from 'lucide-react';

export default function CapabilitiesSection() {
  const iconMap: Record<string, typeof Terminal> = {
    'software-dev': Terminal,
    'databases': Database,
    'system-design': GitMerge,
    'ai-assisted': Sparkles,
    'intelligent-systems': Cpu,
  };

  return (
    <section id="capabilities" className="py-20 sm:py-28 bg-[#F8F6EF] border-b border-[#E8E4DA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E2DDD3]">
          <div>
            <div className="text-xs font-mono tracking-widest uppercase text-[#9B4A22] mb-2 flex items-center gap-2">
              <span className="w-2 h-[1.5px] bg-[#9B4A22]"></span>
              02 // Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#141517] tracking-[-0.02em]">
              What I build
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm text-[#5C5F68] max-w-md">
            Distinguishing established software foundations from active learning frontiers with clear, honest transparency.
          </p>
        </div>

        {/* 5 Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES.map((cap) => {
            const Icon = iconMap[cap.id] || Terminal;
            const isWide = cap.id === 'intelligent-systems' || cap.id === 'ai-assisted';

            return (
              <div
                key={cap.id}
                className={`group relative rounded-2xl bg-[#FAF9F6] border border-[#E2DED4] p-7 flex flex-col justify-between hover:border-[#9B4A22]/50 hover:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.06)] transition-all duration-300 ${
                  cap.id === 'intelligent-systems' ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  {/* Card Header & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#EFECE5] flex items-center justify-center text-[#141517] group-hover:bg-[#9B4A22] group-hover:text-white transition-colors duration-200">
                      <Icon className="w-5 h-5" />
                    </div>

                    {cap.isDeveloping ? (
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-mono tracking-wide bg-[#9B4A22]/10 text-[#9B4A22] border border-[#9B4A22]/20">
                        Active Exploration
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-mono tracking-wide bg-[#E8E6DF] text-[#555861]">
                        Established Foundation
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#141517] tracking-tight mb-2 group-hover:text-[#9B4A22] transition-colors">
                    {cap.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#50535C] leading-relaxed mb-6">
                    {cap.description}
                  </p>

                  {/* Primary Benefit Callout */}
                  <div className="p-4 rounded-xl bg-[#F4F1EA] border border-[#E7E3D8] mb-6">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#7D808C] block mb-1">
                      Target Benefit
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-[#1F2126] italic">
                      "{cap.benefit}"
                    </p>
                  </div>

                  {/* If Intelligent Systems, show the dedicated progression flow */}
                  {cap.progression && (
                    <div className="mb-6 p-4 rounded-xl bg-[#141517] text-[#FAF9F6]">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#D49575] block mb-3">
                        Technical Progression Path
                      </span>
                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                        {cap.progression.map((stage, idx) => (
                          <span key={stage} className="flex items-center gap-2">
                            <span className="px-2.5 py-1 rounded bg-white/10 text-white font-medium">
                              {stage}
                            </span>
                            {idx < cap.progression!.length - 1 && (
                              <ArrowRight className="w-3.5 h-3.5 text-[#D49575]" />
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Tech Tags */}
                <div className="pt-4 border-t border-[#E8E5DC] flex flex-wrap gap-1.5">
                  {cap.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-[#F0EDE6] text-[#555861]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
