import type { Metadata } from "next";
import Image from "next/image";
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

  const isIvm = item.slug === "ivm-incidentmeldingen";
  const heroTitle = isIvm
    ? "Kwalitatieve en snelle terugkoppeling door AI"
    : item.title;

  return (
    <main>
      <InnerHero title={heroTitle} />

      <section className="case-detail-lead">
        <div className="container">
          <div className="case-meta-bar">
            <div className="case-meta-logo">
              {isIvm ? (
                <Image src="/assets/figma/case-logo.png" fill sizes="180px" alt="IVM" />
              ) : (
                <span>{item.organization.slice(0, 1)}</span>
              )}
            </div>
            <div>
              <span>Organisatie</span>
              <strong>{item.organization}</strong>
            </div>
            <div>
              <span>Sector</span>
              <strong>{item.sector}</strong>
            </div>
          </div>
          <div className="case-lead-copy">
            <p>
              {isIvm
                ? "Voor het Instituut Verantwoord Medicijngebruik ontwikkelden wij een AI-screeningsassistent voor automatische classificatie van circa 20.000 jaarlijkse incidentmeldingen."
                : item.description}
            </p>
          </div>
        </div>
      </section>

      <section className="case-story-section">
        <div className="container case-story-split">
          <div className="case-story-image">
            {isIvm ? (
              <Image
                src="/assets/figma/case-question.png"
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
                alt="Bespreking van de vraag van IVM"
              />
            ) : (
              <div className="case-placeholder" aria-hidden="true">
                <span>01</span>
                <i />
              </div>
            )}
          </div>
          <div>
            <h2>De vraag</h2>
            <p>{item.description}</p>
            <p>
              De uitdaging was om grote aantallen vrije tekst betrouwbaar,
              uniform en snel te verwerken, zonder de menselijke beoordeling
              uit het proces te halen.
            </p>
          </div>
        </div>
      </section>

      <section className="case-solution-section">
        <div className="container case-story-split reverse">
          <div className="case-story-image case-solution-image">
            <Image
              src={isIvm ? "/assets/figma/case-solution.png" : "/assets/figma/product-screenshot.png"}
              fill
              sizes="(max-width: 800px) 100vw, 50vw"
              alt="Carecogni AI-oplossing"
            />
          </div>
          <div>
            <h2>Onze oplossing</h2>
            <p>
              We bouwden een veilige AI-workflow die meldingen analyseert,
              relevante begrippen herkent en de inhoud automatisch
              classificeert en prioriteert.
            </p>
            <p>
              De uitkomst blijft herleidbaar en ondersteunt de specialist,
              zodat er meer tijd overblijft voor kwalitatieve analyse en
              terugkoppeling.
            </p>
          </div>
        </div>
      </section>

      <section className="case-impact">
        <div className="container">
          <h2>Impact</h2>
          <div className="impact-grid">
            {item.result.split(" · ").map((result, index) => (
              <article key={result}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{result}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="container">
          <h2>De klant aan het woord</h2>
          <blockquote>
            <p>“{item.quote}”</p>
            <footer>
              {isIvm ? (
                <Image
                  src="/assets/figma/case-portrait.png"
                  width={72}
                  height={78}
                  alt=""
                />
              ) : null}
              <span>{item.organization}</span>
            </footer>
          </blockquote>
        </div>
      </section>

      <SectionCta />
    </main>
  );
}
