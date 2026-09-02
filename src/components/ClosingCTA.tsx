import { ArrowDown, ArrowUpRight, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ClosingCTAProps {
  onOpenContact: () => void;
}

export default function ClosingCTA({ onOpenContact }: ClosingCTAProps) {
  return (
    <section className="py-24 sm:py-32 bg-[#FAF9F6] border-b border-[#EAE7DF] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative">
        
        {/* Subtle emblem */}
        <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-[#EFECE5] text-[#9B4A22] mb-6">
          <Mail className="w-6 h-6" />
        </div>

        {/* Primary CTA Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#141517] tracking-[-0.03em] leading-tight mb-4">
          Have a problem worth building?
        </h2>

        {/* Supporting statement */}
        <p className="text-lg sm:text-xl font-medium text-[#50535B] max-w-xl mx-auto mb-10">
          Let's turn the idea into something concrete.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#9B4A22] text-[#FAF9F6] text-sm font-semibold tracking-wide hover:bg-[#833D1B] transition-all duration-200 shadow-[0_6px_24px_-6px_rgba(155,74,34,0.4)]"
          >
            <span>Start a Conversation</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <a
            href="#work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FAF9F6] hover:bg-[#EFECE6] border border-[#D5D2C9] text-[#141517] text-sm font-semibold tracking-wide transition-colors duration-200"
          >
            <span>View My Work</span>
            <ArrowDown className="w-4 h-4 text-[#757780]" />
          </a>
        </div>

        {/* Contact direct email badge */}
        <div className="mt-12 pt-8 border-t border-[#EAE6DD] flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#6A6C75]">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            Direct Email:
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-[#9B4A22] hover:underline font-semibold"
            >
              {PERSONAL_INFO.email}
            </a>
          </span>
          <span>•</span>
          <span>European University of Lefke Graduate (3.78 CGPA)</span>
        </div>

      </div>
    </section>
  );
}
