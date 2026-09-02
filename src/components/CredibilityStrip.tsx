import { CREDIBILITY_METRICS } from '../data/portfolioData';
import { Award, BookOpen, Cpu, Database, Network } from 'lucide-react';

export default function CredibilityStrip() {
  const iconMap: Record<string, typeof Award> = {
    cgpa: Award,
    degree: BookOpen,
    dev: Database,
    systems: Network,
    direction: Cpu,
  };

  return (
    <section className="py-14 sm:py-20 border-y border-[#E8E5DC] bg-[#F5F3EB]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[#E3E0D6]">
          <div>
            <div className="text-xs font-mono tracking-wider uppercase text-[#9B4A22] mb-1.5 flex items-center gap-2">
              <span className="w-2 h-[1.5px] bg-[#9B4A22]"></span>
              Academic & Technical Credibility
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#141517] tracking-tight">
              A strong engineering foundation.
            </h2>
          </div>
          <p className="mt-2 md:mt-0 text-xs sm:text-sm text-[#666872] max-w-md font-mono">
            Grounding emerging exploration in rigorous software principles, mathematical discipline, and verifiable academic standing.
          </p>
        </div>

        {/* 5 Distinct Credibility Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {CREDIBILITY_METRICS.map((item, idx) => {
            const Icon = iconMap[item.id] || Award;
            return (
              <div
                key={item.id}
                className="group relative bg-[#FAF9F6] border border-[#E3DFD5] rounded-xl p-5 hover:border-[#9B4A22]/50 hover:shadow-[0_8px_24px_-10px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono text-[#8C8F99]">
                      0{idx + 1}
                    </span>
                    <div className="p-1.5 rounded-md bg-[#EFECE5] text-[#141517] group-hover:text-[#9B4A22] group-hover:bg-[#9B4A22]/10 transition-colors">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div className="text-lg sm:text-xl font-bold text-[#141517] tracking-tight mb-1 group-hover:text-[#9B4A22] transition-colors">
                    {item.metric}
                  </div>

                  <div className="text-xs font-semibold uppercase tracking-wider text-[#4A4C54] mb-2 font-mono">
                    {item.label}
                  </div>
                </div>

                <p className="text-xs text-[#63656E] leading-relaxed pt-3 border-t border-[#EFECE5]">
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
