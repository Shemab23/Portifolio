import { useState } from 'react';
import { FAQS } from '../data/portfolioData';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#F8F6EF] border-b border-[#E8E4DA]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#9B4A22] mb-2">
            <span className="w-2 h-[1.5px] bg-[#9B4A22]"></span>
            08 // Questions & Answers
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#141517] tracking-[-0.02em]">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5C5F68] max-w-xl mx-auto">
            Direct, candid answers regarding capabilities, technical philosophy, and collaboration opportunities.
          </p>
        </div>

        {/* Accordion FAQ Items */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.question}
                className="rounded-xl bg-[#FAF9F6] border border-[#E2DDD3] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-[#F3F0E8] transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#8C8F99] shrink-0">
                      0{idx + 1}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#141517] leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-full bg-[#EBE7DE] flex items-center justify-center shrink-0 text-[#141517] transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#9B4A22] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-1 text-xs sm:text-sm text-[#474A52] leading-relaxed border-t border-[#EAE6DD] animate-in fade-in duration-200">
                    <div className="pl-7 border-l-2 border-[#9B4A22]">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#9B4A22] block mb-1 font-semibold">
                        Context: {faq.category}
                      </span>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
