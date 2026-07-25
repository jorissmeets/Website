import Image from "next/image";
import Link from "next/link";
import { SectionCta } from "./components/section-cta";
import { cases, solutions } from "./site-data";

const questions = [
  "Zijn er verbeteracties openstaand voor mijn afdeling?",
  "Heb ik morgen nog diensten gepland?",
  "Wanneer is ontslag waarschijnlijk voor deze patiënt?",
];

const principles = [
  {
    number: "01",
    title: "Wij bouwen het.",
    text: "Een oplossing rondom jouw data, processen en bestaande zorgsystemen.",
  },
  {
    number: "02",
    title: "Jij gebruikt het.",
    text: "Begrijpelijk, veilig en direct beschikbaar in de dagelijkse workflow.",
  },
  {
    number: "03",
    title: "Jij bent eigenaar.",
    text: "Grip op data, modellen en doorontwikkeling — zonder leveranciersafhankelijkheid.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="home-hero">
        <div className="container home-hero-inner">
          <Image
            className="hero-brand"
            src="/assets/carecogni-mark-light.svg"
            width={269}
            height={138}
            priority
            alt="Carecogni"
          />
          <h1>Meer zorg, minder last</h1>
          <p>Agentic AI voor de langdurige zorg</p>
          <div className="hero-actions">
            <Link className="button button-mint" href="#oplossingen">
              Onze oplossingen
            </Link>
            <Link className="button button-purple" href="/cases">
              In de praktijk
            </Link>
          </div>
        </div>
      </section>

      <section className="section intro-section">
        <div className="container narrow-copy">
          <p className="eyebrow">AI die meewerkt</p>
          <h2>AI die meewerkt in je workflow</h2>
          <p className="large-copy">
            Antwoord én actie in één. Onze AI-assistenten en voorspelmodellen
            geven realtime inzicht en pakken routinetaken op, direct in je
            workflow. Aansluitend op je bestaande systemen, met beheer en
            veiligheid geregeld.
          </p>
          <div className="question-stack" aria-label="Voorbeeldvragen">
            {questions.map((question) => (
              <div className="question-pill" key={question}>
                <span>{question}</span>
                <span aria-hidden="true">→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section mint-section">
        <div className="container split-layout">
          <div className="copy-block">
            <p className="eyebrow">Betere beslissingen</p>
            <h2>AI die ondersteunt, terwijl jij de regie behoudt.</h2>
            <p>
              Wij ontwikkelen oplossingen die niet alleen voorspellend zijn,
              maar ook uitlegbaar en ingebed in je bestaande systemen. Van
              patiëntenzorg tot kwaliteitsmonitoring en capaciteitsplanning:
              minder handwerk, betere besluitvorming en meer tijd voor zorg.
            </p>
            <Link className="text-link" href="/methode">
              Bekijk onze aanpak <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="image-card image-card-dashboard">
            <Image
              src="/assets/dashboard.jpg"
              fill
              unoptimized
              sizes="(max-width: 800px) 100vw, 50vw"
              alt="Carecogni dashboard met uitlegbare zorginzichten"
            />
          </div>
        </div>
      </section>

      <section className="section" id="oplossingen">
        <div className="container">
          <div className="section-heading center-heading">
            <p className="eyebrow">Onze oplossingen</p>
            <h2>Datagedreven ondersteuning die past bij de zorgpraktijk</h2>
          </div>
          <div className="solution-list">
            {solutions.slice(0, 3).map((solution, index) => (
              <Link
                className={`solution-row solution-tone-${index + 1}`}
                href={`/oplossingen/${solution.slug}`}
                key={solution.slug}
              >
                <span className="solution-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <strong>{solution.name}</strong>
                  <small>{solution.shortDescription}</small>
                </span>
                <span className="solution-arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            ))}
          </div>
          <div className="section-action">
            <Link className="button button-dark" href="/oplossingen/agentic-ai-platform">
              Bekijk alle oplossingen
            </Link>
          </div>
        </div>
      </section>

      <section className="section dark-section product-story">
        <div className="container split-layout">
          <div className="product-visual">
            <Image
              src="/assets/assistant.png"
              fill
              unoptimized
              sizes="(max-width: 800px) 100vw, 50vw"
              alt="Carecogni AI-assistent in een vertrouwde zorgomgeving"
            />
          </div>
          <div className="copy-block light-copy">
            <p className="eyebrow">Een voorbeeld in de praktijk</p>
            <h2>Bevraag al je applicaties met één AI-assistent</h2>
            <p>
              De assistent gebruikt gespecialiseerde agents die je EPD/ECD,
              kwaliteitssystemen, HR-documenten, SharePoint en andere
              applicaties bevragen. Je krijgt direct een betrouwbaar antwoord
              en, waar gewenst, een vervolgactie.
            </p>
            <Link className="text-link light-link" href="/oplossingen/ai-care-assistant">
              Ontdek de AI Care Assistant <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section principles-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Van idee naar dagelijks gebruik</p>
            <h2>Gebouwd om blijvend waarde te leveren</h2>
          </div>
          <div className="principle-grid">
            {principles.map((principle) => (
              <article className="principle-card" key={principle.number}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cases-home">
        <div className="container">
          <div className="heading-with-action">
            <div className="section-heading">
              <p className="eyebrow">In de praktijk</p>
              <h2>Slimme AI-oplossingen die al verschil maken</h2>
            </div>
            <Link className="text-link" href="/cases">
              Bekijk alle cases <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="featured-cases">
            {cases.slice(0, 2).map((item, index) => (
              <Link
                className={`featured-case case-color-${index + 1}`}
                href={`/cases/${item.slug}`}
                key={item.organization}
              >
                <span className="case-label">{item.sector}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="case-read">Lees de case →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SectionCta />
    </main>
  );
}
