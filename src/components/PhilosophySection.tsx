import { PHILOSOPHY_PRINCIPLES } from '../data/portfolioData';

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="py-20 sm:py-28 bg-[#FAF9F6] border-b border-[#EAE7DF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Editorial Eyebrow & Lead */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-xs font-mono tracking-widest uppercase text-[#9B4A22] mb-3 flex items-center gap-2">
            <span className="w-2 h-[1.5px] bg-[#9B4A22]"></span>
            01 // Engineering Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#141517] tracking-[-0.02em] leading-tight">
            Technology should solve problems, not create more complexity.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#555861] leading-relaxed">
            In an era of rapid tooling shifts and synthetic generation, engineering value stems from systemic discernment: knowing what to build, why to build it, and how to keep it maintainable.
          </p>
        </div>

        {/* The 3 Core Principles as Editorial Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {PHILOSOPHY_PRINCIPLES.map((principle) => (
            <div
              key={principle.number}
              className="relative flex flex-col justify-between p-8 rounded-2xl bg-[#F6F4ED] border border-[#E3DFC] hover:border-[#9B4A22]/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E7E4DC]">
                  <span className="font-mono text-2xl font-bold text-[#9B4A22]">
                    {principle.number}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#7D808C]">
                    Principle
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#141517] leading-snug tracking-tight mb-3">
                  {principle.title}
                </h3>

                <p className="text-xs font-mono text-[#9B4A22] mb-4">
                  {principle.summary}
                </p>

                <p className="text-sm text-[#4E515A] leading-relaxed">
                  {principle.elaboration}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E7E4DC] flex items-center justify-between text-[11px] font-mono text-[#7D808C]">
                <span>Systemic Thinking</span>
                <span className="text-[#9B4A22]">•</span>
                <span>Practical Utility</span>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Quote Callout */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-[#141517] text-[#FAF9F6] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D49575] block mb-1">
              Core Working Rule
            </span>
            <p className="text-base sm:text-lg font-medium text-[#FAF9F6] leading-relaxed">
              "AI accelerates iteration, but strong engineering judgment, architecture, and verifiable testing remain the ultimate barrier between a prototype and a dependable system."
            </p>
          </div>
          <div className="text-right shrink-0">
            <span className="text-sm font-semibold text-white block">Bruno Shema</span>
            <span className="text-xs font-mono text-[#9D9FA8]">B.Sc. Software Engineering</span>
          </div>
        </div>

      </div>
    </section>
  );
}
