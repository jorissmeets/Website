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
  const featureColumns = [
    {
      title: "Waarde in de praktijk",
      items: solution.features.slice(0, 3),
    },
    {
      title: "Techniek & integratie",
      items: solution.specs.slice(0, 3).map((spec) => `${spec.title}: ${spec.description}`),
    },
    {
      title: "Veilig gebruik",
      items: [
        "Uitlegbare en herleidbare uitkomsten",
        "De professional houdt altijd de regie",
        "Iteratieve validatie in de zorgpraktijk",
      ],
    },
  ];

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
        <div className="agent-feature agent-feature-mint">
          <div className="container agent-feature-inner">
            <div className="agent-feature-image">
              <Image
                src="/assets/figma-import/ai-platform-chip.png"
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
                alt="Zorgspecifieke AI-agents op een gedeeld datafundament"
              />
            </div>
            <div>
              <p className="eyebrow">Onze oplossing</p>
              <h3>Welke problemen lossen we met deze AI-agents op?</h3>
              <p>
                {solution.shortDescription} We beginnen bij een concreet
                zorgvraagstuk en verbinden alleen de informatie die daarvoor
                nodig is. Zo ontstaat gerichte ondersteuning in plaats van een
                generieke AI-laag.
              </p>
              <p>
                Uitkomsten zijn begrijpelijk en herleidbaar. De professional
                bepaalt de context en de vervolgstap.
              </p>
            </div>
          </div>
        </div>
        <div className="agent-feature agent-feature-dark">
          <div className="container agent-feature-inner reverse">
            <div className="agent-feature-image">
              <Image
                src="/assets/figma-import/data-ai-architecture.png"
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
                alt="Data- en agentarchitectuur van Carecogni"
              />
            </div>
            <div>
              <p className="eyebrow">Hoe het werkt</p>
              <h3>Gespecialiseerde agents op één logisch datamodel</h3>
              <p>
                Data uit bestaande bronsystemen komt samen in een logisch
                zorgdatamodel. Daarboven werken gespecialiseerde agents voor
                interactie, betekenis uit tekst, monitoring en
                beslisondersteuning.
              </p>
              <p>
                Iedere agent heeft een afgebakende taak. Dat maakt de werking
                beter controleerbaar, makkelijker te valideren en veilig op te
                schalen naar nieuwe toepassingen.
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

      <section className="product-features">
        <div className="container">
          <h2>Kenmerken</h2>
          <div className="product-feature-grid">
            {featureColumns.map((column) => (
              <article key={column.title}>
                <h3>{column.title}</h3>
                <ul>
                  {column.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionCta />
    </main>
  );
}
