// Layouts/BlogPostLayout.tsx
import React, { useRef } from "react";
import { Outlet, useParams, useLocation } from "react-router-dom";
import { getAllPosts, getPostMeta } from "@/lib/mdx";
import { ChapterNav } from "@/components/blogs/ChapterNav";
import { useHeadings } from "@/hooks/useHeading";
import { BlogSidebar } from "@/components/blogs/BlogSider";

export function BlogPostLayout() {
  const { slug, chapter } = useParams<{ slug: string; chapter?: string }>();
  const location = useLocation();
  const contentRef = useRef<HTMLDivElement>(null);

  if (!slug) return null;

  const meta = getPostMeta(slug);
  const post = getAllPosts().find((p) => p.slug === slug);
  const headings = useHeadings(contentRef, [location.pathname]);

  if (!meta || !post) return <p className="px-6 py-24">Post not found.</p>;

  return (
    <article className="w-full bg-app-bg text-app-text px-6 py-24 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10">
        {/* sidebar: shows first on mobile, right column on desktop */}
        <div className="order-first md:order-last md:w-56 md:shrink-0">
          <BlogSidebar
            slug={slug}
            headings={headings}
            chapters={post.chapters}
            currentChapterSlug={chapter}
          />
        </div>

        <div className="flex-1 min-w-0 order-last md:order-first">
          <h1 className="text-3xl md:text-4xl font-extrabold text-app-heading tracking-tight mb-2">
            {meta.title}
          </h1>
          <p className="text-sm text-app-text/60 mb-8">{meta.date}</p>

          <div ref={contentRef} className="prose prose-invert max-w-none">
            <Outlet />
          </div>

          {post.chapters && post.chapters.length > 0 && (
            <ChapterNav
              slug={slug}
              chapters={post.chapters}
              currentSlug={chapter}
            />
          )}
        </div>
      </div>
    </article>
  );
}
