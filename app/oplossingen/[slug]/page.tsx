import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InnerHero } from "../../components/inner-hero";
import { SectionCta } from "../../components/section-cta";
import { getSolution, solutions } from "../../site-data";

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) {
    return {};
  }

  return {
    title: solution.name,
    description: solution.shortDescription,
  };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) {
    notFound();
  }

  const moreSolutions = solutions
    .filter((item) => item.slug !== solution.slug)
    .slice(0, 3);

  return (
    <main>
      <InnerHero />
      <section className="page-intro solution-intro">
        <div className="container">
          <Link className="back-link" href="/#oplossingen">
            ← Alle oplossingen
          </Link>
          <p className="eyebrow">{solution.sector}</p>
          <h1>{solution.name}</h1>
          <p className="large-copy">{solution.tagline}</p>
          <div className="solution-intro-actions">
            <Link className="button button-dark" href="/contact">
              Plan een gesprek
            </Link>
          </div>
        </div>
      </section>

      <section className="section mint-section">
        <div className="container solution-content-grid">
          <div className="copy-block">
            <p className="eyebrow">Wat het doet</p>
            <h2>Gebouwd rondom jouw zorgpraktijk</h2>
            <p className="large-copy">{solution.description}</p>
            <ul className="feature-list">
              {solution.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="spec-panel">
            <p className="eyebrow">In één oogopslag</p>
            <h2>Eigenschappen</h2>
            <div className="spec-grid">
              {solution.specs.map((spec) => (
                <article className="spec-card" key={spec.title}>
                  <h3>{spec.title}</h3>
                  <p>{spec.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container">
          <div className="section-heading light-copy">
            <p className="eyebrow">Verder ontdekken</p>
            <h2>Meer oplossingen</h2>
          </div>
          <div className="more-solutions">
            {moreSolutions.map((item, index) => (
              <Link
                className={`more-solution solution-tone-${index + 1}`}
                href={`/oplossingen/${item.slug}`}
                key={item.slug}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.name}</h3>
                <p>{item.shortDescription}</p>
                <strong>Meer informatie →</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SectionCta />
    </main>
  );
}
