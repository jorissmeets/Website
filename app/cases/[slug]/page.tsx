import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { InnerHero } from "../../components/inner-hero";
import { cases, getCase } from "../../site-data";

export function generateStaticParams() {
  return cases
    .filter((item) => item.detailComplete)
    .map((item) => ({ slug: item.slug }));
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

  if (!item || !item.detailComplete) {
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
                ? "Voor IVM ontwikkelden wij een AI-screeningsassistent voor de automatische classificatie van circa 20.000 incidentmeldingen per jaar."
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
            <p className="eyebrow">De vraag</p>
            <h2>
              {isIvm
                ? "Hoe verwerk je duizenden vrije-tekstmeldingen snel én zorgvuldig?"
                : "Van complexe informatie naar een werkbare zorgtoepassing"}
            </h2>
            {isIvm ? (
              <>
                <p>
                  Het Landelijk Meldpunt Medicatie-incidenten ontvangt jaarlijks
                  circa 20.000 meldingen. Screeners lezen iedere melding,
                  herkennen geneesmiddelen en procesfasen en beoordelen de
                  mogelijke patiëntschade.
                </p>
                <p>
                  Dat vraagt veel specialistische tijd. Tegelijkertijd moeten
                  classificaties consequent en controleerbaar blijven. IVM
                  zocht ondersteuning die het werk versnelt zonder de
                  deskundige beoordeling over te nemen.
                </p>
              </>
            ) : (
              <>
                <p>{item.description}</p>
                <p>
                  De oplossing moest betrouwbaar aansluiten op de dagelijkse
                  praktijk en de professional ondersteunen zonder extra
                  registratielast.
                </p>
              </>
            )}
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
            <p className="eyebrow">Onze oplossing</p>
            <h2>AI automatiseert en structureert zorginformatie</h2>
            {isIvm ? (
              <>
                <p>
                  Carecogni ontwikkelde een screeningsassistent op basis van
                  Named Entity Recognition en taalmodellen. De assistent
                  analyseert meldingen en doet een voorstel voor
                  gestructureerde classificaties, waaronder geneesmiddelnamen,
                  procesfasen en patiëntschade.
                </p>
                <p>
                  De screener ziet de bron en blijft verantwoordelijk voor de
                  definitieve beoordeling. Zo ontstaat een snellere,
                  uniformere werkwijze met meer ruimte voor inhoudelijke
                  analyse en terugkoppeling.
                </p>
              </>
            ) : (
              <>
                <p>
                  We bouwden een veilige AI-workflow die relevante informatie
                  herkent, structureert en op het juiste moment beschikbaar
                  maakt.
                </p>
                <p>
                  Uitkomsten blijven herleidbaar en ondersteunen de
                  professional bij een zorgvuldige vervolgstap.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {item.result ? (
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
      ) : null}

      {item.quote ? (
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
                {item.quoteAuthor ? (
                  <span>
                    <strong>{item.quoteAuthor}</strong>
                    {item.quoteRole ? <small>{item.quoteRole}</small> : null}
                  </span>
                ) : (
                  <span>{item.organization}</span>
                )}
              </footer>
            </blockquote>
          </div>
        </section>
      ) : null}
    </main>
  );
}
