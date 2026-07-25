"use client";

import Link from "next/link";
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
        {visible.map((item, index) => (
          <Link
            className={`case-full-card case-card-tone-${(index % 3) + 1}`}
            href={`/cases/${item.slug}`}
            key={item.organization}
          >
            <div className="case-art" aria-hidden="true">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span className="case-art-ring" />
            </div>
            <div className="case-full-body">
              <span className="case-sector">{item.sector}</span>
              <p className="case-org">{item.organization}</p>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <span className="case-read">Bekijk de case →</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
