import { DIRECTION_JOURNEY } from '../data/portfolioData';
import { ArrowDown, Cpu, Sparkles, Layers, Radio, Bot, Zap } from 'lucide-react';

export default function CurrentDirection() {
  const iconList = [Layers, Sparkles, Cpu, Zap, Radio, Bot];

  const futureTopics = [
    { name: 'Edge AI', status: 'Active Study', note: 'Running localized neural networks on microcontrollers' },
    { name: 'TinyML', status: 'Experimenting', note: 'Model quantization and ultra-low-power edge inference' },
    { name: 'Embedded Systems', status: 'Hands-on', note: 'C/C++ direct hardware register and memory management' },
    { name: 'IoT Architecture', status: 'Exploring', note: 'Resilient sensor telemetry and field network protocols' },
    { name: 'Robotics & Automation', status: 'Long-term', note: 'Closed-loop feedback control and physical actuation' },
    { name: 'Energy-Efficient AI', status: 'Researching', note: 'Minimizing compute footprint and operational wattage' },
  ];

  return (
    <section id="direction" className="py-20 sm:py-28 bg-[#FAF9F6] border-b border-[#EAE7DF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-xs font-mono tracking-widest uppercase text-[#9B4A22] mb-2 flex items-center gap-2">
            <span className="w-2 h-[1.5px] bg-[#9B4A22]"></span>
            05 // Future Trajectory
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#141517] tracking-[-0.02em]">
            Where I'm going next.
          </h2>
          <p className="mt-4 text-lg sm:text-xl font-medium text-[#9B4A22]">
            "I'm interested in what happens when software becomes part of the physical world."
          </p>
          <p className="mt-2 text-sm sm:text-base text-[#5A5D66] leading-relaxed">
            A deliberate progression from foundational software engineering into resource-constrained intelligence, embedded devices, and automated systems.
          </p>
        </div>

        {/* Visual Roadmap Hierarchy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          
          {/* Left: Progression Timeline */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#858894] mb-4">
              Trajectory Progression Flow
            </h3>

            {DIRECTION_JOURNEY.map((node, index) => {
              const Icon = iconList[index] || Cpu;
              const isEstablished = node.level === 'Foundation';
              const isTarget = node.level === 'Target Domain';

              return (
                <div key={node.title} className="relative">
                  <div
                    className={`p-5 rounded-xl border transition-all duration-200 ${
                      isEstablished
                        ? 'bg-[#F2EFE8] border-[#E2DDD4]'
                        : isTarget
                        ? 'bg-[#141517] text-[#FAF9F6] border-[#141517]'
                        : 'bg-[#FAF9F6] border-[#DDD8CD]'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <div
                          className={`p-2 rounded-lg shrink-0 mt-0.5 ${
                            isTarget
                              ? 'bg-[#9B4A22] text-white'
                              : isEstablished
                              ? 'bg-[#E5E1D7] text-[#141517]'
                              : 'bg-[#F0ECE4] text-[#9B4A22]'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h4
                              className={`text-base font-bold ${
                                isTarget ? 'text-white' : 'text-[#141517]'
                              }`}
                            >
                              {node.title}
                            </h4>
                            <span
                              className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                                isTarget
                                  ? 'bg-white/20 text-[#FAF9F6]'
                                  : 'bg-[#E5E1D8] text-[#555861]'
                              }`}
                            >
                              {node.level}
                            </span>
                          </div>
                          <p
                            className={`text-xs sm:text-sm leading-relaxed ${
                              isTarget ? 'text-[#D0D2DB]' : 'text-[#50535C]'
                            }`}
                          >
                            {node.description}
                          </p>

                          <div className="flex flex-wrap gap-1.5 mt-3">
                            {node.tags.map((tag) => (
                              <span
                                key={tag}
                                className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                                  isTarget
                                    ? 'bg-white/10 text-white/90'
                                    : 'bg-[#E8E4DA] text-[#555861]'
                                }`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Connector arrow */}
                  {index < DIRECTION_JOURNEY.length - 1 && (
                    <div className="flex justify-center py-1.5 text-[#B0ACA2]">
                      <ArrowDown className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Technical Focus Areas & Verbs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#F6F4ED] border border-[#E3DFD5]">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#9B4A22] mb-3">
                Disciplined Posture
              </h3>
              <p className="text-sm text-[#3E4047] leading-relaxed mb-4">
                I deliberately frame this domain around active investigation:
              </p>
              
              <div className="grid grid-cols-2 gap-2 text-xs font-mono text-[#141517] mb-6">
                <div className="p-2.5 rounded-lg bg-[#ECE8DF] text-center font-semibold">
                  • Exploring
                </div>
                <div className="p-2.5 rounded-lg bg-[#ECE8DF] text-center font-semibold">
                  • Learning
                </div>
                <div className="p-2.5 rounded-lg bg-[#ECE8DF] text-center font-semibold">
                  • Building
                </div>
                <div className="p-2.5 rounded-lg bg-[#ECE8DF] text-center font-semibold">
                  • Experimenting
                </div>
              </div>

              <p className="text-xs text-[#636670] leading-relaxed border-t border-[#E5E1D6] pt-4">
                Rather than claiming premature seniority in robotics or TinyML, I apply my proven academic software discipline (3.78 CGPA) to systematically master these physical-computing layers.
              </p>
            </div>

            {/* Interest Matrix */}
            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#DDD8CD]">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#858894] mb-4">
                Active Research Matrix
              </h3>
              <div className="space-y-3">
                {futureTopics.map((topic) => (
                  <div
                    key={topic.name}
                    className="p-3 rounded-lg bg-[#F5F2EB] border border-[#E5E2D8] flex items-center justify-between"
                  >
                    <div>
                      <span className="text-xs font-bold text-[#141517] block">
                        {topic.name}
                      </span>
                      <span className="text-[11px] text-[#555861]">
                        {topic.note}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#E8E5DC] text-[#9B4A22] font-semibold shrink-0 ml-2">
                      {topic.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
