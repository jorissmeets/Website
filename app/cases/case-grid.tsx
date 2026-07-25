"use client";

import { useState } from "react";
import type { CaseStudy } from "../site-data";

const filters = [
  "Alle cases",
  "GGZ",
  "WLZ / VVT",
  "Farmacovigilantie",
  "IT & Servicedesk",
] as const;

export function CaseGrid({ items }: { items: CaseStudy[] }) {
  const [activeFilter, setActiveFilter] =
    useState<(typeof filters)[number]>("Alle cases");
  const visible =
    activeFilter === "Alle cases"
      ? items
      : items.filter((item) => item.category === activeFilter);

  return (
    <>
      <div className="filter-bar" aria-label="Filter cases">
        {filters.map((filter) => (
          <button
            className={filter === activeFilter ? "filter-button active" : "filter-button"}
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="cases-full-grid" aria-live="polite">
        {visible.map((item) => (
          <article className="case-full-card" key={item.organization}>
            <div className="case-full-header">
              <strong>{item.organization}</strong>
              <span className="case-sector">{item.sector}</span>
            </div>
            <div className="case-full-body">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <div className="case-result">✓ {item.result}</div>
              <blockquote>“{item.quote}”</blockquote>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
