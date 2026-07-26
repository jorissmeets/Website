import Image from "next/image";
import Link from "next/link";
import { SectionCta } from "./components/section-cta";
import { cases } from "./site-data";

const homeSolutions = [
  {
    slug: "risicosignalering",
    title: "Risicosignalering & NER",
    description:
      "Maak relevante signalen in meldingen, rapportages en vrije tekst zichtbaar.",
  },
  {
    slug: "monitoring-analytics",
    title: "Real-time monitoring",
    description:
      "Volg ontwikkelingen en stuurinformatie in één actueel en begrijpelijk beeld.",
  },
  {
    slug: "voorspelmodellen",
    title: "Beslisondersteunende modellen",
    description:
      "Onderbouw keuzes over zorg, capaciteit en vervolgacties met uitlegbare modellen.",
  },
  {
    slug: "agentic-ai-platform",
    title: "Datafundament & AI-agents",
    description:
      "Verbind gegevens uit bestaande zorg- en bedrijfssystemen tot één bruikbare basis.",
  },
  {
    slug: "iot-domotica",
    title: "IoT & domoticasignalering",
    description:
      "Vertaal sensor- en aanwezigheidssignalen naar tijdige aandacht voor het team.",
  },
  {
    slug: "ai-care-assistant",
    title: "AI Care Assistant",
    description:
      "Maak kennis, protocollen en zorginformatie direct toegankelijk in gewone taal.",
  },
];

const homeCaseSlugs = [
  "ivm-incidentmeldingen",
  "meerzorg-signalering",
  "ai-care-assistant-ggz",
];

const homeCases = homeCaseSlugs
  .map((slug) => cases.find((item) => item.slug === slug))
  .filter((item): item is (typeof cases)[number] => Boolean(item));

export default function Home() {
  return (
    <main className="v3-home">
      <section className="home-hero">
        <Image
          className="v3-hero-art"
          src="/assets/figma/v3-hero-caregiver-devices.png"
          fill
          priority
          sizes="100vw"
          alt=""
          style={{ objectFit: "contain", objectPosition: "center bottom" }}
        />
        <div className="container home-hero-inner">
          <Image
            className="hero-brand"
            src="/assets/carecogni-mark-light.svg"
            width={288}
            height={147}
            priority
            alt="Carecogni"
          />
          <span className="v3-hero-eyebrow">Meer zorg, minder last</span>
          <h1>Eerder zicht op risico&apos;s in complexe zorg</h1>
          <p>
            Carecogni maakt vroege signalen uit incidentmeldingen,
            cliëntdossiers en operationele systemen zichtbaar en uitlegbaar
            voor zorgteams — zonder extra registratiedruk.
          </p>
          <Link className="button button-dark v3-hero-cta" href="/contact">
            Plan een gesprek
          </Link>
        </div>
      </section>

      <section className="v3-intro">
        <div className="container v3-intro-copy">
          <h2>De signalen zijn er. Het overzicht ontbreekt.</h2>
          <p>
            Een incidentmelding hier, een observatie in het cliëntdossier
            daar. Waardevolle informatie raakt verspreid over systemen, vrije
            tekst en verschillende momenten. Daardoor blijven terugkerende
            patronen en oplopende risico&apos;s soms langer onzichtbaar dan
            nodig.
          </p>
          <p>
            Carecogni brengt bestaande gegevens samen, structureert wat ertoe
            doet en maakt verbanden zichtbaar. Niet om het oordeel van de
            professional over te nemen, maar om de aandacht te richten op wat
            op dat moment het belangrijkst is.
          </p>
        </div>
      </section>

      <section className="v3-feature v3-feature-white">
        <div className="container v3-feature-inner">
          <div className="v3-media-placeholder v3-media-placeholder-one" aria-hidden="true">
            <span />
          </div>
          <div className="v3-feature-copy">
            <h2>Van registratie naar gerichte actie</h2>
            <p>
              Carecogni analyseert informatie die al wordt vastgelegd: MIC- en
              MIM-meldingen, rapportages, cliëntdossiers en operationele
              systemen. Onze technologie ordent de informatie, legt verbanden
              over tijd en maakt zichtbaar wat aandacht vraagt.
            </p>
            <p>
              Het resultaat is geen ondoorzichtige risicoscore, maar
              herleidbare beslisondersteuning die teams helpt prioriteren en
              gericht vervolgstappen te bepalen.
            </p>
          </div>
        </div>
      </section>

      <section className="v3-feature v3-feature-grey">
        <div className="container v3-feature-inner v3-feature-reverse">
          <div className="v3-feature-copy">
            <h2>Uitlegbaar, meetbaar en onder regie van de professional</h2>
            <p>
              Ieder signaal kan worden herleid naar de bron. Professionals
              bepalen de context, betekenis en eventuele actie. We beginnen
              met één concreet vraagstuk, toetsen de kwaliteit samen met het
              team en schalen pas op wanneer de toepassing aantoonbaar waarde
              toevoegt.
            </p>
            <p>
              Zo wordt AI geen losstaand experiment of extra dashboard, maar
              een betrouwbare ondersteuning binnen bestaande systemen en
              werkprocessen.
            </p>
            <Link className="button button-teal button-small" href="/methode">
              Zo werken wij
            </Link>
          </div>
          <div className="v3-media-placeholder v3-media-placeholder-two" aria-hidden="true">
            <span />
          </div>
        </div>
      </section>

      <section className="v3-solutions" id="oplossingen">
        <div className="container">
          <h2>Eén fundament, zes gerichte toepassingen</h2>
          <p className="v3-solutions-lead">
            Risicosignalering vormt de kern. Op hetzelfde privacybewuste
            datafundament bouwen we toepassingen die informatie vindbaar
            maken, ontwikkelingen volgen en beslissingen ondersteunen.
          </p>
          <div className="v3-solution-grid">
            {homeSolutions.map((solution, index) => (
              <Link
                className="v3-solution-card"
                href={`/oplossingen/${solution.slug}`}
                key={solution.slug}
              >
                <span className="v3-solution-icon" aria-hidden="true">
                  <i>{String(index + 1).padStart(2, "0")}</i>
                </span>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="v3-cases">
        <div className="container">
          <h2>Bewezen in de praktijk</h2>
          <p className="v3-cases-lead">
            Van incidentmeldingen tot cliëntdossiers: deze toepassingen laten
            zien hoe bestaande informatie bruikbaar wordt voor de dagelijkse
            praktijk.
          </p>
          <div className="v3-case-list">
            {homeCases.map((item, index) => (
              <Link className="v3-case-row" href={`/cases/${item.slug}`} key={item.slug}>
                <div className="v3-case-copy">
                  <p>{item.organization}</p>
                  <h3>{item.title}</h3>
                  <span>{item.description}</span>
                </div>
                <div className={`v3-case-visual v3-case-visual-${index + 1}`} aria-hidden="true">
                  <i>{String(index + 1).padStart(2, "0")}</i>
                  <b>↗</b>
                </div>
              </Link>
            ))}
          </div>
          <Link className="button button-teal" href="/cases">
            Bekijk alle cases
          </Link>
        </div>
      </section>

      <SectionCta
        title="Waar blijven belangrijke signalen nu nog liggen?"
        text="Vertel ons waar informatie versnipperd raakt of risico’s pas laat zichtbaar worden. In een verkennend gesprek kijken we welke bestaande data beschikbaar is en of een kleine, meetbare eerste toepassing zinvol is."
        buttonLabel="Plan een gesprek"
      />

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
    </main>
  );
}
