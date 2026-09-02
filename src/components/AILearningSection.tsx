import { AI_LEARNING_DATA } from '../data/portfolioData';
import { Terminal, ShieldAlert, Cpu, Workflow, Search, CheckCircle2 } from 'lucide-react';

export default function AILearningSection() {
  const iconList = [Terminal, Workflow, Search, ShieldAlert, Cpu];

  return (
    <section className="py-20 sm:py-28 bg-[#FAF9F6] border-b border-[#EAE7DF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono tracking-widest uppercase text-[#9B4A22] mb-2 flex items-center gap-2">
            <span className="w-2 h-[1.5px] bg-[#9B4A22]"></span>
            07 // Active Learning
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#141517] tracking-[-0.02em]">
            {AI_LEARNING_DATA.headline}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#565961] leading-relaxed">
            {AI_LEARNING_DATA.context}
          </p>
        </div>

        {/* Central Core Manifesto Box (Highest emphasis) */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#141517] text-[#FAF9F6] mb-12 shadow-xl border border-[#27282E] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 font-mono text-8xl select-none pointer-events-none">
            AI
          </div>
          
          <div className="relative max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-[#9B4A22]/30 text-[#D49575] border border-[#9B4A22]/50 mb-4">
              Core Engineering Creed
            </span>
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
              "{AI_LEARNING_DATA.coreManifesto}"
            </blockquote>
            <p className="text-xs sm:text-sm text-[#B2B5BF] leading-relaxed font-mono">
              Generative AI enables rapid synthesis and iteration. But software integrity rests entirely on deterministic verification, memory safety, architectural discipline, and comprehensive testing.
            </p>
          </div>
        </div>

        {/* 5 Facets of Practical AI Development */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AI_LEARNING_DATA.facets.map((facet, idx) => {
            const Icon = iconList[idx] || CheckCircle2;
            const isVerification = idx === 3;

            return (
              <div
                key={facet.title}
                className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  isVerification
                    ? 'bg-[#F9F3EE] border-[#D9B8A4] md:col-span-2 lg:col-span-1'
                    : 'bg-[#F6F4ED] border-[#E3DFD5]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-2.5 rounded-xl ${
                        isVerification
                          ? 'bg-[#9B4A22] text-white'
                          : 'bg-[#EAE6DD] text-[#141517]'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-mono text-[#8C8F99]">
                      Practice 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#141517] mb-2">
                    {facet.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4F525A] leading-relaxed">
                    {facet.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#E5E1D6] flex items-center justify-between text-[11px] font-mono text-[#7D808C]">
                  <span>Applied Workflow</span>
                  <span className="text-[#9B4A22]">●</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
