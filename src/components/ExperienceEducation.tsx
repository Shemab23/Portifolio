import { EXPERIENCE, EDUCATION_DATA } from '../data/portfolioData';
import { GraduationCap, Users, BookOpen, Award, CheckCircle } from 'lucide-react';

export default function ExperienceEducation() {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-[#F8F6EF] border-b border-[#E8E4DA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* ========================================================= */}
        {/* EXPERIENCE, TEACHING & LEADERSHIP                         */}
        {/* ========================================================= */}
        <div className="mb-20">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono tracking-widest uppercase text-[#9B4A22] mb-2 flex items-center gap-2">
              <span className="w-2 h-[1.5px] bg-[#9B4A22]"></span>
              06 // Experience & Communication
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#141517] tracking-[-0.02em]">
              Engineering, but also able to explain it.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#5A5D66] leading-relaxed">
              Technical capability is magnified by the ability to mentor peers, demystify low-level concepts, and lead cross-functional groups with accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EXPERIENCE.map((exp) => (
              <div
                key={exp.id}
                className="p-7 rounded-2xl bg-[#FAF9F6] border border-[#E2DDD3] flex flex-col justify-between hover:border-[#9B4A22]/50 hover:shadow-[0_8px_24px_-10px_rgba(0,0,0,0.06)] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#EAE7DE]">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#9B4A22] font-semibold">
                      {exp.category}
                    </span>
                    <span className="text-[11px] font-mono text-[#7D808C]">
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#141517] mb-1">
                    {exp.role}
                  </h3>
                  <div className="text-xs font-mono text-[#52555E] mb-4">
                    {exp.organization}
                  </div>

                  <p className="text-xs sm:text-sm text-[#4E5059] leading-relaxed mb-6">
                    {exp.summary}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#8A8D99] block">
                      Core Responsibilities
                    </span>
                    {exp.responsibilities.map((resp, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#2E3036] leading-normal">
                        <CheckCircle className="w-3.5 h-3.5 text-[#9B4A22] shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Engineering Connection Callout */}
                <div className="p-4 rounded-xl bg-[#F4F1EA] border border-[#E6E2D8]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#787B85] block mb-1">
                    Engineering Impact
                  </span>
                  <p className="text-xs text-[#23252B] italic leading-relaxed">
                    "{exp.engineeringConnection}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* EDUCATION SECTION                                         */}
        {/* ========================================================= */}
        <div id="education" className="pt-12 border-t border-[#E2DDD3]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: University & Degree Card */}
            <div className="lg:col-span-5 p-8 rounded-2xl bg-[#FAF9F6] border border-[#E2DDD3]">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-[#EFECE5] text-[#9B4A22]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#8C8F99] block">
                    Higher Education
                  </span>
                  <h3 className="text-xl font-bold text-[#141517]">
                    {EDUCATION_DATA.institution}
                  </h3>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#F5F2EB] border border-[#E5E1D6] mb-6">
                <div className="text-xs font-mono uppercase tracking-wider text-[#9B4A22] font-semibold mb-1">
                  Degree Awarded
                </div>
                <div className="text-base font-bold text-[#141517]">
                  {EDUCATION_DATA.degree}
                </div>
                <div className="text-xs text-[#63656E] mt-1">
                  {EDUCATION_DATA.location}
                </div>
              </div>

              {/* CGPA Highlight */}
              <div className="p-4 rounded-xl bg-[#141517] text-[#FAF9F6] flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#D49575] block">
                    Cumulative Standing
                  </span>
                  <div className="text-2xl font-bold text-white tracking-tight">
                    {EDUCATION_DATA.cgpa}
                  </div>
                </div>
                <span className="text-[11px] font-mono px-3 py-1 rounded bg-white/10 text-white font-medium">
                  {EDUCATION_DATA.standing}
                </span>
              </div>
            </div>

            {/* Right Column: Relevant Rigorous Coursework */}
            <div className="lg:col-span-7">
              <div className="mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#9B4A22] block mb-1">
                  Rigorous Curriculum
                </span>
                <h3 className="text-2xl font-bold text-[#141517]">
                  Core Software Engineering Coursework
                </h3>
                <p className="text-xs sm:text-sm text-[#5C5E66] mt-1">
                  A foundational curriculum centered on software correctness, formal architecture, algorithmic optimization, and systemic testing.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {EDUCATION_DATA.coreCoursework.map((course) => (
                  <div
                    key={course.name}
                    className="p-4 rounded-xl bg-[#FAF9F6] border border-[#E2DDD3] hover:border-[#9B4A22]/40 transition-colors"
                  >
                    <h4 className="text-xs sm:text-sm font-bold text-[#141517] mb-1">
                      {course.name}
                    </h4>
                    <p className="text-xs text-[#60636D] leading-relaxed">
                      {course.focus}
                    </p>
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
