```markdown
# MDX Writing Reference — Blog Pipeline Rules

Use this when writing or editing any `index.mdx` or chapter `.mdx` file for this blog. Breaking these rules breaks the build.

## File locations

- Post intro: `src/content/blogs/<slug>/index.mdx`
- Chapter: `src/content/blogs/<slug>/chapters/NN-chapter-name.mdx`
- Images/video thumbnails: `public/blogs/<slug>/your-image.png`
- After creating a new post folder, add `{ slug: "<slug>" }` to `blogRegistry` in `src/data/blogRegistry.ts`, or it will never appear on the site.

## Required frontmatter

### index.mdx
```yaml
---
title: "Post Title Here"
date: "2026-09-26"
status: "draft"        # "draft" hides it, "published" makes it live
image: "cover.png"     # filename only — resolved against public/blogs/<slug>/
summary: "One or two sentence summary shown on the blog list page."
tags: ["tag1", "tag2"]
---
```

### chapter file
```yaml
---
title: "Chapter Title Here"
order: 1                # controls reading order, not the filename
---
```

## Only these custom tags exist — do not invent new ones

| Tag | Props | Use for |
|---|---|---|
| `<CTA />` | `text`, `link` | A call-to-action link |
| `<VideoLink />` | `thumbnail`, `title`, `url` | A clickable video thumbnail linking out (YouTube, etc.) — there is no real embedded video player |

Example:
```mdx
<CTA text="See the source on GitHub" link="https://github.com/Shemab23" />

<VideoLink
  thumbnail="/blogs/my-post/video-thumb.png"
  title="Watch the walkthrough"
  url="https://youtube.com/watch?v=xxxx"
/>
```

**Never write `<Image />`, `<Video />`, or any other tag that isn't in this table.** Any unregistered tag crashes the page with "Expected component X to be defined."

## Images — plain Markdown only, never a custom tag

```mdx
![Alt text describing the image](/blogs/<slug>/diagram-1.png)
```

Path must start with `/blogs/<slug>/` (this maps to `public/blogs/<slug>/`), not a relative path, not the `content/` folder.

## Code blocks — always fence with triple backticks + language

````
```typescript
const x = 1;
```
````

Never write inline code samples without a fence. Always specify a language after the opening backticks (`typescript`, `bash`, `mdx`, etc.) — it's used as the label and copy-button context.

## The #1 breakage risk: literal angle brackets in prose

MDX treats `<anything>` as JSX, even in a plain sentence. If you need to show a placeholder or generic tag as text (not a real component), you must either:

- Wrap it in backticks: `` `<slug>` `` → renders as literal text
- Or put it inside a fenced code block

**Never write bare `<slug>`, `<placeholder>`, `<your-value>` etc. directly in a paragraph.** This is the most common way a post fails to compile.

## Headings

Use `##` for main sections and `###` for subsections only. These are auto-scanned to build the "On this page" sidebar — don't skip levels (no jumping from `##` straight to `####`), and don't use `#` (h1) inside body content — the post title itself is already rendered as h1 by the layout.

## Formatting

- **Bold**: `**text**`
- *Italic*: `*text*`
- Links: `[label](https://example.com)`
- Lists: standard `-` or `1.` — no custom list syntax

## Before submitting a post, verify

1. Every custom tag used is `CTA` or `VideoLink` — nothing else.
2. Every `<...>` that isn't a real tag is wrapped in backticks or a code fence.
3. Every image path starts with `/blogs/<slug>/` and the file actually exists in `public/blogs/<slug>/`.
4. Frontmatter has all required fields, `status` is intentionally `"draft"` or `"published"`.
5. Chapter files have a numeric `order` field.
6. All code fences are triple-backtick, language-tagged, and balanced (every opening fence has a matching closing fence).
```
