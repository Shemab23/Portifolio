import { HeroData } from "@/src/data/Metadata";

export const Home = () => {
  return (
    <section
      id="home"
      className="relative w-full max-w-5xl mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12 justify-between"
    >
      {/* Text Content Area */}
      <div className="flex-1 space-y-6 max-w-2xl text-left">
        {/* Name */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-app-heading">
          {HeroData.name}
        </h1>

        {/* Title / What you do */}
        <p className="text-xl md:text-2xl font-medium text-app-text leading-relaxed">
          {HeroData.title}
        </p>

        {/* Minimal CGPA Badge / Metadata (Single place on the page) */}
        <div className="badge-accent flex-wrap gap-2 text-xs tracking-wide w-fit">
          <span>{HeroData.degree.name}</span>
          <span className="opacity-40">•</span>
          <span>CGPA {HeroData.degree.cgpa}</span>
        </div>

        {/* Current Focus Statement */}
        <p className="text-base md:text-lg text-muted-foreground font-normal leading-relaxed">
          {HeroData.statement}
        </p>

        {/* Visual Hierarchy CTAs */}
        <div className="pt-4 flex flex-wrap items-center gap-4">
          {/* Primary CTA */}

          <a
            href="#work"
            className="px-6 py-3 rounded-lg text-sm font-semibold tracking-medium bg-primary hover:opacity-90 text-primary-foreground shadow-sm transition-all duration-200"
          >
            {HeroData.cta[0]}
          </a>

          {/* Secondary CTA */}

          <a
            href="#contact"
            className="px-6 py-3 rounded-lg text-sm font-semibold tracking-medium border border-app-border bg-transparent hover:bg-secondary text-app-text transition-all duration-200"
          >
            {HeroData.cta[1]}
          </a>
        </div>
      </div>

      {/* Hero Image Area */}
      <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] relative shrink-0">
        <div className="w-full h-full rounded-2xl overflow-hidden bg-secondary border border-app-border shadow-sm">
          <img
            src={HeroData.image}
            alt={HeroData.name}
            className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-300"
            loading="eager" // Hero images should load immediately
          />
        </div>
      </div>
    </section>
  );
};
