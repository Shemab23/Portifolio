import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { story } from "@/data/about";
import { StoryRail } from "@/components/about/storyRail";
import { StorySection } from "@/components/about/storyRender";
import { StoryClosing } from "@/components/about/Closing";

export function About() {
  const [activeId, setActiveId] = useState(story.sections[0]?.id ?? "");
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll-spy: observe each section, mark the one in view as active.
  useEffect(() => {
    const sections = story.sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top of the viewport that is intersecting.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      {
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0,
      },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleJump = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="w-full">
      {/* HEADER */}
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-16 md:pt-32 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-col gap-5"
        >
          <span className="text-sm font-medium uppercase tracking-wider text-app-brand">
            {story.label}
          </span>
          <h1 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-app-heading md:text-5xl">
            {story.headline}
          </h1>
          <div className="flex max-w-2xl flex-col gap-3">
            {story.intro.map((p, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-app-text-muted"
              >
                {p}
              </p>
            ))}
          </div>
        </motion.div>
      </section>

      {/* BODY: rail + sections */}
      <div
        ref={containerRef}
        className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 pb-24 md:grid-cols-[200px_1fr] md:pb-32"
      >
        <StoryRail
          sections={story.sections}
          activeId={activeId}
          onJump={handleJump}
        />

        <div className="flex flex-col gap-24 md:gap-32">
          {story.sections.map((section) => (
            <StorySection key={section.id} section={section} />
          ))}
        </div>
      </div>
      <StoryClosing />
    </div>
  );
}
