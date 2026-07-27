import Image from "next/image";
import Link from "next/link";
import { SectionCta } from "./components/section-cta";
import { cases, solutions } from "./site-data";

const homeSolutionOrder = [
  "agentic-ai-platform",
  "ai-care-assistant",
  "risicosignalering",
  "voorspelmodellen",
  "monitoring-analytics",
  "iot-domotica",
];

const homeSolutions = homeSolutionOrder
  .map((slug) => solutions.find((solution) => solution.slug === slug))
  .filter(
    (solution): solution is (typeof solutions)[number] => Boolean(solution)
  );

const homeCaseSlugs = [
  "ai-care-assistant-ggz",
  "ivm-incidentmeldingen",
  "meerzorg-signalering",
];

const homeCases = homeCaseSlugs
  .map((slug) => cases.find((item) => item.slug === slug))
  .filter((item): item is (typeof cases)[number] => Boolean(item));

const caseImages = [
  "/assets/figma-import/claire-case.png",
  "/assets/figma-import/ivm-screening.png",
  "/assets/figma-import/ai-platform-chip-small.png",
];

export default function Home() {
  return (
    <main className="figma-home">
      <section className="home-hero">
        <Image
          className="figma-hero-art"
          src="/assets/figma/v3-hero-caregiver-devices.png"
          fill
          priority
          sizes="100vw"
          alt=""
        />
        <div className="container home-hero-inner">
          <Image
            className="hero-brand"
            src="/assets/carecogni-logo-dark.svg"
            width={499}
            height={109}
            priority
            alt="Carecogni"
          />
          <h1>Meer zorg, minder last</h1>
          <p>Agentic AI voor de langdurige zorg</p>
          <div className="hero-actions">
            <Link className="button button-dark" href="#oplossingen">
              Onze oplossingen
            </Link>
            <Link className="button button-dark" href="/cases">
              Cases uit de praktijk
            </Link>
          </div>
        </div>
      </section>

      <section className="figma-intro">
        <div className="container figma-intro-copy">
          <p>
            Steeds meer taken, steeds minder tijd. Wij geloven dat AI in de
            zorg geen losstaande oplossing is, maar een geïntegreerde
            strategie die medewerkers versterkt — zodat de aandacht gaat naar
            waar die hoort: de patiënt.
          </p>
        </div>
      </section>

      <section className="figma-about">
        <div className="container figma-split">
          <div className="figma-dashboard figma-dashboard-assistant">
            <Image
              src="/assets/figma-import/claire-assistant-values.png"
              fill
              sizes="(max-width: 820px) 100vw, 50vw"
              alt="Claire, de digitale Carecogni-assistent"
            />
          </div>
          <div className="figma-copy">
            <p className="eyebrow">Onze visie</p>
            <h2>AI die de zorgprofessional versterkt</h2>
            <p>
              Carecogni ontwikkelt en beheert schaalbare AI-oplossingen voor
              de langdurige zorg. Via een agentic-AI-platform, gebouwd op een
              logisch zorgdatamodel als Digital Twin, ondersteunen we
              professionals met betrouwbare, uitlegbare en gepersonaliseerde
              inzichten.
            </p>
            <p>
              Van risicosignalering tot slimme assistenten: technologie die
              aansluit op bestaande systemen, de regie bij de professional
              laat en aantoonbaar werkt in de dagelijkse praktijk.
            </p>
          </div>
        </div>
      </section>

      <section className="figma-foundation">
        <div className="container figma-split">
          <div className="figma-copy">
            <p className="eyebrow">Het fundament</p>
            <h2>Van versnipperde data naar gerichte ondersteuning</h2>
            <p>
              We brengen informatie uit ECD, incidentmeldingen, HR, BI en
              zorgtechnologie samen in één logisch datamodel. Gespecialiseerde
              AI-agents gebruiken die context om informatie te vinden,
              betekenis uit vrije tekst te halen, risico&apos;s te signaleren
              en keuzes te ondersteunen.
            </p>
            <p>
              Zo ontstaat geen los experiment, maar een veilige en schaalbare
              basis waarop meerdere toepassingen kunnen voortbouwen.
            </p>
            <Link className="button button-teal button-small" href="/oplossingen/agentic-ai-platform">
              Bekijk het platform
            </Link>
          </div>
          <div className="figma-dashboard figma-dashboard-architecture">
            <Image
              src="/assets/figma-import/data-ai-architecture.png"
              fill
              sizes="(max-width: 820px) 100vw, 50vw"
              alt="Architectuur van het Carecogni AI-platform"
            />
          </div>
        </div>
      </section>

      <section className="figma-solutions" id="oplossingen">
        <div className="container">
          <div className="figma-section-heading centered">
            <h2>Onze oplossingen</h2>
            <p>
              Eén betrouwbaar datafundament, vertaald naar gerichte
              toepassingen voor zorgprofessionals, teams en organisaties.
            </p>
          </div>
          <div className="figma-solution-grid">
            {homeSolutions.map((solution, index) => (
              <Link
                className="figma-solution-card"
                href={`/oplossingen/${solution.slug}`}
                key={solution.slug}
              >
                <span className="solution-card-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{solution.shortName}</h3>
                <p>{solution.shortDescription}</p>
                <span className="round-arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="figma-practice">
        <div className="container">
          <div className="figma-section-heading centered">
            <h2>Cases</h2>
            <p>
              Bekijk hoe Carecogni samen met zorgorganisaties AI van idee naar
              betrouwbare praktijktoepassing brengt.
            </p>
          </div>
          <div className="practice-list">
            {homeCases.map((item, index) => (
              <article className="practice-row" key={item.slug}>
                <div className="practice-copy">
                  <p className="practice-org">{item.organization}</p>
                  <h3>{item.title}</h3>
                  <p>{item.shortDescription ?? item.description}</p>
                  <Link
                    className="button button-teal button-small"
                    href={`/cases/${item.slug}`}
                  >
                    Meer over deze case
                  </Link>
                </div>
                <div className={`practice-visual practice-visual-${index + 1}`}>
                  <Image
                    src={caseImages[index]}
                    fill
                    sizes="(max-width: 820px) 100vw, 50vw"
                    alt=""
                  />
                </div>
              </article>
            ))}
          </div>
          <div className="figma-practice-action">
            <Link className="button button-teal" href="/cases">
              Meer usecases
            </Link>
          </div>
        </div>
      </section>

      <section className="logo-strip" aria-label="Organisaties waar wij mee samenwerken">
        <div className="container">
          <Image
            src="/assets/figma/home-logos.png"
            width={1420}
            height={260}
            sizes="100vw"
            alt="Logo's van organisaties waarmee Carecogni samenwerkt"
          />
        </div>
      </section>

      <SectionCta />
    </main>
  );
}
