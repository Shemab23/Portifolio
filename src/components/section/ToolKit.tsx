import { ToolKitData } from "@/src/data/Metadata";
import { ToolkitType } from "@/src/data/types";
import React, { useState, useMemo } from "react";

type Props = {
  category: keyof ToolkitType;
  data: string[];
};

const Card = ({ category, data }: Props) => {
  if (data.length === 0) return null;

  return (
    <div className="card-base w-full h-auto flex flex-col gap-3">
      <h3 className="text-sm font-semibold capitalize text-muted-foreground">
        {category.replace("-", " & ")}
      </h3>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
        {data.map((item, index) => (
          <div
            key={index}
            className="p-2 flex items-center justify-center text-sm font-medium border border-app-border rounded-md bg-muted text-app-text"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export const ToolKit = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredToolkit = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    const filterCategory = (categoryKey: keyof ToolkitType) => {
      const items = ToolKitData[categoryKey] || [];
      return items
        .map((item) => item.name)
        .filter((name) => name.toLowerCase().includes(query));
    };

    return {
      languages: filterCategory("languages"),
      backend: filterCategory("backend"),
      infrastructure: filterCategory("infrastructure"),
      "web-mobile": filterCategory("web-mobile"),
    };
  }, [searchQuery]);

  const hasResults = Object.values(filteredToolkit).some(
    (arr) => arr.length > 0,
  );

  return (
    <section
      id="toolkit"
      className="flex flex-col max-w-6xl mx-auto px-4 py-16 font-sans antialiased text-app-text"
    >
      <header className="mb-12 border-b border-app-border pb-4">
        <h2 className="text-xs font-mono tracking-widest uppercase text-muted-foreground">
          02 // Main ToolKit
        </h2>
      </header>

      {/* Search Input Container */}
      <div className="w-full flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search for a skill (e.g., React, Go)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-80 p-2.5 border border-app-border rounded-lg bg-muted text-app-text text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      {hasResults ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <Card category="languages" data={filteredToolkit.languages} />
          <Card category="backend" data={filteredToolkit.backend} />
          <Card
            category="infrastructure"
            data={filteredToolkit.infrastructure}
          />
          <Card category="web-mobile" data={filteredToolkit["web-mobile"]} />
        </div>
      ) : (
        <div className="text-center py-12 text-muted-foreground text-sm">
          No skills match your search context.
        </div>
      )}
    </section>
  );
};
