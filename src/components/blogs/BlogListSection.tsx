import { BlogPostMeta } from "@/types/blogs";
import { BlogPostCard } from "./PostCard";

export function BlogListSection({ posts }: { posts: BlogPostMeta[] }) {
  return (
    <section className="w-full bg-app-bg text-app-text px-6 py-24 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-app-heading tracking-tight mb-2">
          Blog
        </h1>
        <p className="text-base text-app-text/70 mb-10">
          Things I'm learning and building, written down as I go.
        </p>
        <div className="flex flex-col">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
