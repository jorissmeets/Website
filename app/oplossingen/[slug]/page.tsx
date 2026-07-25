import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InnerHero } from "../../components/inner-hero";
import { SectionCta } from "../../components/section-cta";
import { cases, getSolution, solutions } from "../../site-data";

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
  return solution
    ? { title: solution.name, description: solution.shortDescription }
    : {};
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

  const caseStudy = cases[0];

  return (
    <main>
      <InnerHero title={solution.name} />

      <section className="product-intro">
        <div className="container product-intro-inner">
          <p>{solution.description}</p>
        </div>
      </section>

      <section className="applications-section">
        <div className="container">
          <div className="applications-panel">
            <h2>Toepassingen</h2>
            <div className="applications-grid">
              {solution.features.map((feature, index) => (
                <article key={feature}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{feature}</h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="agents-section">
        <div className="container">
          <h2>AI agents in de praktijk</h2>
        </div>
        <div className="agent-feature agent-feature-mint">
          <div className="container agent-feature-inner">
            <div className="agent-feature-image">
              <Image
                src="/assets/figma/product-screenshot.png"
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
                alt="Carecogni AI-toepassing"
              />
            </div>
            <div>
              <h3>{solution.tagline}</h3>
              <p>{solution.shortDescription}</p>
              <ul>
                {solution.specs.slice(0, 3).map((spec) => (
                  <li key={spec.title}>
                    <strong>{spec.title}</strong>
                    <span>{spec.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="agent-feature agent-feature-dark">
          <div className="container agent-feature-inner reverse">
            <div className="agent-abstract" aria-hidden="true">
              <span>AI</span>
              <i />
            </div>
            <div>
              <h3>Betrouwbaar geïntegreerd in jouw zorgpraktijk</h3>
              <p>
                De oplossing sluit aan op bestaande systemen en processen.
                Uitkomsten zijn begrijpelijk en herleidbaar, terwijl de
                zorgprofessional altijd de regie houdt.
              </p>
              <Link className="button button-teal button-small" href="/methode">
                Bekijk onze aanpak
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-product-case">
        <div className="container agent-feature-inner">
          <div className="featured-product-image">
            <Image
              src="/assets/figma/home-case-photo.png"
              fill
              sizes="(max-width: 800px) 100vw, 50vw"
              alt="AI in de praktijk"
            />
          </div>
          <div>
            <p className="practice-org">{caseStudy.organization}</p>
            <h2>Kwalitatieve en snelle terugkoppeling door AI</h2>
            <p>{caseStudy.description}</p>
            <Link className="button button-dark button-small" href={`/cases/${caseStudy.slug}`}>
              Meer over deze case
            </Link>
          </div>
        </div>
      </section>

      <SectionCta />
    </main>
  );
}
