import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InnerHero } from "../../components/inner-hero";
import { SectionCta } from "../../components/section-cta";
import { cases, getCase } from "../../site-data";

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getCase(slug);
  return item ? { title: item.title, description: item.description } : {};
}

export default async function CaseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getCase(slug);

  if (!item) {
    notFound();
  }

  return (
    <main>
      <InnerHero />
      <section className="page-intro case-detail-intro">
        <div className="container">
          <Link className="back-link" href="/cases">
            ← Alle cases
          </Link>
          <p className="eyebrow">{item.sector}</p>
          <h1>{item.title}</h1>
          <p className="large-copy">{item.organization}</p>
        </div>
      </section>

      <section className="section">
        <div className="container case-detail-grid">
          <aside className="case-fact-panel">
            <span>Organisatie</span>
            <strong>{item.organization}</strong>
            <span>Sector</span>
            <strong>{item.sector}</strong>
          </aside>
          <article className="case-story">
            <p className="eyebrow">De uitdaging</p>
            <h2>Van veel handwerk naar een betrouwbare AI-workflow</h2>
            <p>{item.description}</p>
            <div className="result-panel">
              <span>Resultaat</span>
              <p>{item.result}</p>
            </div>
            <blockquote>“{item.quote}”</blockquote>
          </article>
        </div>
      </section>

      <SectionCta />
    </main>
  );
}
