import { HOW_I_WORK_CONTENT } from "@/src/data/Metadata";
import React from "react";

export const Process = () => {
  return (
    <section
      id="process"
      className="max-w-6xl mx-auto px-4 py-16 font-sans antialiased text-app-text"
    >
      {/* Section Header */}
      <header className="mb-12 border-b border-app-border pb-6">
        <h2 className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-2">
          {HOW_I_WORK_CONTENT.header.index}
        </h2>
        <h3 className="text-2xl font-bold tracking-tight mb-2 text-app-heading">
          {HOW_I_WORK_CONTENT.header.title}
        </h3>
        <p className="text-sm text-muted-foreground max-w-xl">
          {HOW_I_WORK_CONTENT.header.subtitle}
        </p>
      </header>

      {/* Grid Layout Container */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {HOW_I_WORK_CONTENT.steps.map((step) => (
          <div key={step.num} className="card-base flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-mono font-bold text-muted-foreground">
                {step.num}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-app-brand" />
            </div>

            <h4 className="text-base font-bold text-app-heading">
              {step.title}
            </h4>

            <p className="text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
