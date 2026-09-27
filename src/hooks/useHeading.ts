// hooks/useHeadings.ts
import { Heading } from "@/types/blogs";
import { useEffect, useState, RefObject } from "react";

export function useHeadings(
  containerRef: RefObject<HTMLElement | null>,
  deps: unknown[] = [],
) {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const nodes = Array.from(container.querySelectorAll("h2, h3"));
    const list: Heading[] = nodes.map((node, i) => {
      const text = node.textContent ?? "";
      let id = node.id;
      if (!id) {
        id =
          text
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/\s+/g, "-") || `heading-${i}`;
        node.id = id;
      }
      return { id, text, level: node.tagName === "H2" ? 2 : 3 };
    });

    setHeadings(list);
  }, deps);

  return headings;
}
