// components/blogs/BlogSidebar.tsx
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ChapterList } from "./ChapterList";
import type { BlogChapter, Heading } from "@/types/blogs";
import { TableOfContents } from "./TableOfContent";

interface BlogSidebarProps {
  slug: string;
  headings: Heading[];
  chapters?: BlogChapter[];
  currentChapterSlug?: string;
}

export function BlogSidebar({
  slug,
  headings,
  chapters,
  currentChapterSlug,
}: BlogSidebarProps) {
  const [open, setOpen] = useState(false);
  const hasChapters = !!chapters?.length;

  return (
    <>
      {/* Small screens: collapsible */}
      <div className="md:hidden mb-6 border border-app-border/40 rounded-lg">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between px-4 py-3 text-sm font-bold text-app-heading"
        >
          Contents
          <ChevronDown
            className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
        {open && (
          <div className="px-4 pb-4">
            {hasChapters && (
              <ChapterList
                slug={slug}
                chapters={chapters!}
                currentChapterSlug={currentChapterSlug}
              />
            )}
            <div className="h-1 w-full bg-accent-foreground/30 shadow-2xl my-4"></div>
            <TableOfContents headings={headings} />
          </div>
        )}
      </div>

      {/* Large screens: fixed side column */}
      <aside className="hidden md:block sticky top-24 self-start w-56">
        <TableOfContents headings={headings} />
        {hasChapters && (
          <ChapterList
            slug={slug}
            chapters={chapters!}
            currentChapterSlug={currentChapterSlug}
          />
        )}
      </aside>
    </>
  );
}
