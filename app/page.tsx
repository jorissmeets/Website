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
          <p className="figma-hero-eyebrow">Meer zorg, minder last</p>
          <h1>Eerder zien wat aandacht nodig heeft</h1>
          <p className="figma-hero-lead">
            Carecogni brengt relevante ontwikkelingen in bestaande
            zorginformatie tijdig in beeld. Uitlegbaar, zonder extra
            registratielast en altijd onder regie van de professional.
          </p>
          <div className="hero-actions">
            <Link className="button button-dark" href="#oplossingen">
              Ontdek onze oplossingen
            </Link>
            <Link className="button button-dark" href="/cases">
              Cases uit de praktijk
            </Link>
          </div>
        </div>
      </section>

      <section className="figma-intro">
        <div className="container figma-intro-copy">
          <h2>Zorginformatie vertelt vaak meer</h2>
          <p>
            Een verandering in een rapportage, terugkerende incidenten of
            opvallende sensordata. Waardevolle informatie staat verspreid over
            verschillende systemen en momenten. Daardoor blijven ontwikkelingen
            en verbanden soms langer onzichtbaar dan nodig.
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
            <p className="eyebrow">Van informatie naar inzicht</p>
            <h2>Samenhang zien, eerder handelen</h2>
            <p>
              Onze AI-agents analyseren informatie die al wordt vastgelegd in
              cliëntdossiers, rapportages, incidentmeldingen en operationele
              systemen. Ze herkennen veranderingen en patronen, brengen
              relevante informatie bij elkaar en maken inzichtelijk waarop hun
              bevindingen zijn gebaseerd.
            </p>
            <p>
              De technologie doet een voorzet. De zorgprofessional beoordeelt
              de context en bepaalt wat er moet gebeuren.
            </p>
          </div>
        </div>
      </section>

      <section className="figma-foundation">
        <div className="container figma-split">
          <div className="figma-copy">
            <p className="eyebrow">Het fundament</p>
            <h2>Eén gedeeld beeld voor beter onderbouwde keuzes</h2>
            <p>
              We brengen gegevens uit bestaande systemen samen in een logisch
              zorgdatamodel: een Digital Twin van de zorgorganisatie.
              Gespecialiseerde AI-agents gebruiken deze gedeelde context om
              informatie te vinden, betekenis uit vrije tekst te halen,
              ontwikkelingen te volgen en opvallende veranderingen tijdig
              zichtbaar te maken.
            </p>
            <p>
              Zo ontstaat één veilige en schaalbare basis waarop steeds nieuwe
              toepassingen kunnen worden aangesloten.
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
            <h2>AI die meedenkt in de dagelijkse praktijk</h2>
            <p>
              Van betekenis halen uit vrije tekst en ontwikkelingen volgen tot
              beslisondersteuning en het interpreteren van sensordata.
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
            <h2>Bewezen in de praktijk</h2>
            <p>
              Iedere toepassing begint bij een concreet vraagstuk. We toetsen
              de werking samen met professionals en schalen pas op wanneer de
              oplossing aantoonbaar waarde toevoegt.
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

      <SectionCta
        title="Waar raakt relevante informatie nu nog uit beeld?"
        text="Vertel ons waar informatie versnipperd raakt of veranderingen pas laat zichtbaar worden. Samen onderzoeken we welke bestaande data beschikbaar is en of een kleine, meetbare eerste toepassing zinvol is."
        buttonLabel="Plan een gesprek"
      />
    </main>
  );
}
