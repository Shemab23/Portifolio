import { EDUCATION_CONTENT } from "@/src/data/Metadata";
import React from "react";

export const Education = () => {
  return (
    <section
      id="education"
      className="max-w-6xl mx-auto px-4 py-16 font-sans antialiased text-app-text"
    >
      {/* Section Header */}
      <header className="mb-12 border-b border-app-border pb-6">
        <h2 className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-2">
          {EDUCATION_CONTENT.header.index}
        </h2>
        <h3 className="text-2xl font-bold tracking-tight text-app-heading">
          {EDUCATION_CONTENT.header.title}
        </h3>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Column: Primary Degree */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <div>
            <span className="text-sm font-mono uppercase text-muted-foreground">
              Formal Education
            </span>
            <h4 className="text-xl font-bold text-app-heading mt-1">
              {EDUCATION_CONTENT.degree.title}
            </h4>
            <p className="text-base text-muted-foreground mt-0.5">
              {EDUCATION_CONTENT.degree.institution} ·{" "}
              {EDUCATION_CONTENT.degree.location}
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Graduated: {EDUCATION_CONTENT.degree.date}
            </p>
          </div>

          <div className="badge-accent self-start text-xs font-mono font-semibold">
            {EDUCATION_CONTENT.degree.gpa}
          </div>
        </div>

        {/* Right Column: Supplemental Training & Bootcamp */}
        <div className="flex flex-col gap-8 border-t md:border-t-0 md:border-l border-app-border pt-8 md:pt-0 md:pl-8">
          {/* SkillUp Trainings */}
          <div className="flex flex-col gap-4">
            <span className="text-base font-mono uppercase text-muted-foreground">
              Additional Training
            </span>

            <div className="flex flex-col gap-3">
              {EDUCATION_CONTENT.trainings.map((training) => (
                <div key={training.id} className="text-sm">
                  <div className="font-semibold text-app-heading">
                    {training.provider} · {training.subject}
                  </div>
                  <div className="text-muted-foreground mt-0.5 flex items-center gap-2">
                    <span>{training.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Bootcamp */}
          <div className="flex flex-col gap-2 pt-4 border-t border-app-border">
            <span className="text-sm font-mono uppercase text-muted-foreground">
              Bootcamps
            </span>
            <h5 className="text-sm font-semibold text-app-heading">
              {EDUCATION_CONTENT.bootcamp.title}
            </h5>
            <p className="text-base leading-relaxed text-muted-foreground">
              {EDUCATION_CONTENT.bootcamp.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
