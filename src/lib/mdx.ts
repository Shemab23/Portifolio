import { blogRegistry } from "@/data/blogs";
import { BlogChapter, BlogPostMeta } from "@/types/blogs";
import type { ComponentType } from "react";

interface MdxModule {
  default: ComponentType;
  frontmatter: Record<string, any>;
}

// Eagerly compiled at build time — every post and chapter becomes a real component here
const postModules = import.meta.glob<MdxModule>(
  "/src/content/blogs/*/index.mdx",
  { eager: true },
);
const chapterModules = import.meta.glob<MdxModule>(
  "/src/content/blogs/*/chapters/*.mdx",
  { eager: true },
);

function slugFromPostPath(path: string) {
  // "/src/content/blogs/my-post/index.mdx" -> "my-post"
  return path.split("/")[4];
}

function getChaptersForSlug(slug: string): BlogChapter[] {
  return Object.entries(chapterModules)
    .filter(([path]) => path.includes(`/src/content/blogs/${slug}/chapters/`))
    .map(([path, mod]) => {
      const fileSlug = path.split("/").pop()!.replace(".mdx", "");
      return {
        slug: fileSlug,
        title: mod.frontmatter.title,
        order: mod.frontmatter.order,
        contentPath: path,
      };
    })
    .sort((a, b) => a.order - b.order);
}

export function getAllPosts(): BlogPostMeta[] {
  const registeredSlugs = new Set(blogRegistry.map((r) => r.slug));

  return Object.entries(postModules)
    .filter(([path]) => registeredSlugs.has(slugFromPostPath(path)))
    .map(([path, mod]) => {
      const slug = slugFromPostPath(path);
      const fm = mod.frontmatter;
      return {
        slug,
        title: fm.title,
        image: `/blogs/${slug}/${fm.image}`,
        summary: fm.summary,
        date: fm.date,
        status: fm.status ?? "draft",
        tags: fm.tags ?? [],
        chapters: getChaptersForSlug(slug),
      } satisfies BlogPostMeta;
    })
    .filter((post) => post.status === "published")
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostComponent(slug: string): ComponentType | null {
  const entry = Object.entries(postModules).find(
    ([path]) => slugFromPostPath(path) === slug,
  );
  return entry ? entry[1].default : null;
}

export function getChapterComponent(
  slug: string,
  chapterSlug: string,
): ComponentType | null {
  const entry = Object.entries(chapterModules).find(
    ([path]) =>
      path.includes(`src/content/blogs/${slug}/chapters/`) &&
      path.endsWith(`${chapterSlug}.mdx`),
  );
  return entry ? entry[1].default : null;
}

export function getPostMeta(slug: string): Record<string, any> | null {
  const entry = Object.entries(postModules).find(
    ([path]) => slugFromPostPath(path) === slug,
  );
  return entry ? entry[1].frontmatter : null;
}
