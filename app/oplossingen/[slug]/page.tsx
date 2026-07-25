import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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
      <section className="solution-hero">
        <div className="container">
          <Link className="back-link" href="/#oplossingen">
            ← Terug naar oplossingen
          </Link>
          <div className="solution-hero-grid">
            <div>
              <span className="tag tag-white">{solution.sector}</span>
              <h1>{solution.name}</h1>
              <p className="lead lead-white">{solution.tagline}</p>
              <Link className="btn btn-primary" href="/contact">
                Plan een gesprek →
              </Link>
            </div>
            <div className="solution-hero-icon">
              <span aria-hidden="true">{solution.icon}</span>
              <strong>{solution.sector}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container solution-content-grid">
          <div>
            <span className="tag">Wat het doet</span>
            <h2>Beschrijving</h2>
            <p className="lead">{solution.description}</p>
            <ul className="feature-list">
              {solution.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
          <div>
            <span className="tag">Specificaties</span>
            <h2>Technische details</h2>
            <div className="spec-grid">
              {solution.specs.map((spec) => (
                <article className="spec-card" key={spec.title}>
                  <h3>{spec.title}</h3>
                  <p>{spec.description}</p>
                </article>
              ))}
            </div>
            <div className="mini-cta">
              <h3>Klaar om te starten?</h3>
              <p>
                Neem contact op voor een vrijblijvend kennismakingsgesprek.
              </p>
              <Link className="btn btn-primary" href="/contact">
                Plan een gesprek →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="tag">Verder ontdekken</span>
            <h2>Meer oplossingen</h2>
          </div>
          <div className="solution-grid three-columns">
            {moreSolutions.map((item) => (
              <Link
                className="solution-card"
                href={`/oplossingen/${item.slug}`}
                key={item.slug}
              >
                <span className="solution-icon" aria-hidden="true">
                  {item.icon}
                </span>
                <h3>{item.name}</h3>
                <p>{item.shortDescription}</p>
                <span className="card-link">Meer informatie →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SectionCta />
    </main>
  );
}
