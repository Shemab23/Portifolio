import React from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/Motions";
import { BlogPostMeta } from "@/types/blogs";

export function BlogPostCard({ post }: { post: BlogPostMeta }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <Link
        to={`/blog/${post.slug}`}
        className="flex flex-col md:flex-row gap-4 md:gap-6 border-b border-app-border/40 py-6 group"
      >
        <img
          src={post.image}
          alt={post.title}
          className="w-full md:w-48 aspect-video object-cover rounded-lg bg-app-border/10 shrink-0"
        />
        <div className="flex flex-col gap-1.5">
          <h3 className="text-lg md:text-xl font-bold text-app-heading group-hover:text-app-brand transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-app-text/60">{post.date}</p>
          <p className="text-base text-app-text leading-relaxed">
            {post.summary}
          </p>
          {post.tags && (
            <div className="flex flex-wrap gap-2 pt-1">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-2.5 py-1 rounded-full border border-app-border/40 text-app-text/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
