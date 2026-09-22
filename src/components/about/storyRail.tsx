import { cn } from "@/lib/utils";
import type { StorySection } from "@/types/about/index";

interface Props {
  sections: StorySection[];
  activeId: string;
  onJump: (id: string) => void;
}

export function StoryRail({ sections, activeId, onJump }: Props) {
  return (
    <nav
      aria-label="Story sections"
      className="sticky top-28 hidden h-fit flex-col gap-6 md:flex"
    >
      {sections.map((section, i) => {
        const isActive = section.id === activeId;
        return (
          <button
            key={section.id}
            type="button"
            onClick={() => onJump(section.id)}
            className="group flex items-start gap-3 text-left"
            aria-current={isActive ? "true" : undefined}
          >
            {/* Rail marker */}
            <span className="relative mt-1 flex h-4 w-4 shrink-0 items-center justify-center">
              <span
                className={cn(
                  "rounded-full transition-all duration-300",
                  isActive
                    ? "h-3 w-3 bg-app-brand ring-4 ring-[var(--brand-bg)]"
                    : "h-1.5 w-1.5 bg-[var(--border)] group-hover:bg-app-text-muted",
                )}
              />
              {i < sections.length - 1 && (
                <span
                  aria-hidden
                  className={cn(
                    "absolute left-1/2 top-full w-px -translate-x-1/2 transition-colors duration-300",
                    isActive
                      ? "h-6 bg-[var(--brand-border)]"
                      : "h-6 bg-[var(--border)]",
                  )}
                />
              )}
            </span>

            {/* Label */}
            <span className="flex flex-col gap-0.5">
              <span
                className={cn(
                  "text-sm transition-all duration-300",
                  isActive
                    ? "font-semibold text-app-brand"
                    : "text-app-text-muted group-hover:text-app-heading",
                )}
              >
                {section.anchor}
              </span>
              <span
                className={cn(
                  "text-xs transition-colors duration-300",
                  isActive ? "text-app-brand" : "text-app-text-muted",
                )}
              >
                {section.date}
              </span>
            </span>
          </button>
        );
      })}
    </nav>
  );
}
