import { ArrowDown, ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32 overflow-hidden">
      {/* Background architectural grid pattern subtle accent */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#16171A 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Core Positioning & Headline */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Field Domain Breadcrumb */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EFECE6] border border-[#E0DDD5] text-xs font-mono text-[#52545C] mb-6 sm:mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9B4A22]"></span>
              <span>Software Engineering</span>
              <span className="text-[#9E9B93]">•</span>
              <span>Systems</span>
              <span className="text-[#9E9B93]">•</span>
              <span>AI</span>
              <span className="text-[#9E9B93]">•</span>
              <span>Intelligent Systems</span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-[#141517] leading-[1.08] tracking-[-0.03em] mb-6">
              I build software that{' '}
              <span className="relative inline-block text-[#9B4A22]">
                solves real problems.
                <span className="absolute left-0 bottom-1 w-full h-[3px] bg-[#9B4A22]/25 -z-10"></span>
              </span>
            </h1>

            {/* Supporting statement */}
            <p className="text-lg sm:text-xl font-medium text-[#2E3036] leading-relaxed mb-5 max-w-2xl">
              {PERSONAL_INFO.supportingStatement}
            </p>

            {/* Additional detailed copy */}
            <p className="text-sm sm:text-base text-[#5A5D66] leading-relaxed mb-8 sm:mb-10 max-w-2xl">
              {PERSONAL_INFO.additionalCopy}
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#work"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#9B4A22] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#833D1B] transition-all duration-200 shadow-[0_6px_20px_-6px_rgba(155,74,34,0.4)]"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#FAF9F6] hover:bg-[#EFECE6] border border-[#D5D2C9] text-[#141517] text-sm font-semibold tracking-wide transition-colors duration-200"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4 text-[#757780]" />
              </button>
            </div>

            {/* Micro proof badges */}
            <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-[#E8E6DF] w-full flex flex-wrap items-center gap-y-3 gap-x-8 text-xs text-[#61636B]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#9B4A22]" />
                <span>Verified 3.78 / 4.00 CGPA</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[#9B4A22]">B.Sc.</span>
                <span>European University of Lefke</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#757780]" />
                <span>Actively Exploring Intelligent Systems</span>
              </div>
            </div>

          </div>

          {/* Right Column: Authentic Editorial Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer decorative architectural frame */}
              <div className="relative rounded-2xl p-2.5 bg-gradient-to-b from-[#FAF9F6] to-[#EAE7DF] border border-[#DDD9CE] shadow-[0_20px_45px_-15px_rgba(0,0,0,0.08)]">
                
                {/* Photo container */}
                <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-[#E5E2DA]">
                  <img
                    src={PERSONAL_INFO.portraitImage}
                    alt="Bruno Shema — Software Engineer"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                  />
                  
                  {/* Subtle editorial watermark overlay */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#141517]/80 via-[#141517]/30 to-transparent p-5 text-white flex items-end justify-between">
                    <div>
                      <p className="text-xs font-mono uppercase tracking-widest text-[#FAF9F6]/80">
                        Bruno Shema
                      </p>
                      <p className="text-sm font-semibold tracking-wide text-white">
                        Software Engineer
                      </p>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/20 backdrop-blur-sm text-white/90">
                      B.Sc. 2024
                    </span>
                  </div>
                </div>

                {/* Subtle metadata card floating below */}
                <div className="mt-3 px-3 py-2 flex items-center justify-between text-[11px] font-mono text-[#6A6C75]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                    Available for Eng Roles & Projects
                  </span>
                  <span>Lefke // Global</span>
                </div>
              </div>

              {/* Decorative engineering corner ticks */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#9B4A22]/40 pointer-events-none"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#9B4A22]/40 pointer-events-none"></div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
