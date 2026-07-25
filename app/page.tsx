import Image from "next/image";
import Link from "next/link";
import { SectionCta } from "./components/section-cta";
import { cases, solutions } from "./site-data";

const solutionLabels = [
  "Logische data & AI agents",
  "AI Care Assistant",
  "Betekenis halen & NER Agents",
  "Voorspelmodellen",
  "Real-time Monitoring",
  "IoT & Domotica Agents",
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
            <Link className="button button-teal" href="#oplossingen">
              Onze oplossingen
            </Link>
            <Link className="button button-purple" href="/cases">
              In de praktijk
            </Link>
          </div>
        </div>
      </section>

      <section className="figma-intro">
        <div className="container figma-intro-copy">
          <p>
            Steeds meer taken, steeds minder tijd. Wij geloven dat AI in de
            zorg geen losstaande oplossing is, maar een geïntegreerde strategie
            die medewerkers versterkt zodat de aandacht gaat naar waar het
            hoort: de patiënt.
          </p>
        </div>
      </section>

      <section className="figma-about">
        <div className="container figma-split">
          <div className="figma-dashboard">
            <Image
              src="/assets/figma/home-dashboard.svg"
              fill
              priority
              sizes="(max-width: 800px) 100vw, 52vw"
              alt="Carecogni dashboard met betrouwbare zorginzichten"
            />
          </div>
          <div className="figma-copy">
            <h2>Over Carecogni</h2>
            <p>
              Carecogni ontwikkelt en beheert schaalbare AI-oplossingen voor de
              langdurige zorg. Via een agentic AI platform, gebouwd op een
              logisch zorgdatamodel als Digital Twin, ondersteunen wij
              zorgprofessionals met betrouwbare, uitlegbare en
              gepersonaliseerde AI-inzichten.
            </p>
            <p>
              Van risicosignalering tot slimme chatbots: AI die echt werkt in
              de praktijk.
            </p>
            <Link className="button button-dark button-small" href="/over-ons">
              Meer weten?
            </Link>
          </div>
        </div>
      </section>

      <section className="figma-solutions" id="oplossingen">
        <div className="container">
          <div className="figma-section-heading">
            <h2>Onze oplossingen</h2>
            <p>
              Eén veilig en schaalbaar fundament voor slimme ondersteuning in
              de langdurige zorg.
            </p>
          </div>
          <div className="figma-solution-grid">
            {solutions.map((solution, index) => (
              <Link
                className="figma-solution-card"
                href={`/oplossingen/${solution.slug}`}
                key={solution.slug}
              >
                <span className="solution-card-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{solutionLabels[index]}</h3>
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
            <h2>Voorbeelden uit de praktijk</h2>
          </div>
          <div className="practice-list">
            {cases.map((item, index) => (
              <article className="practice-row" key={item.slug}>
                <div className="practice-copy">
                  <p className="practice-org">{item.organization}</p>
                  <h3>
                    {index === 0
                      ? "Kwalitatieve en snelle terugkoppeling door AI"
                      : item.title}
                  </h3>
                  <p>{item.description}</p>
                  <Link className="button button-dark button-small" href={`/cases/${item.slug}`}>
                    Meer over deze case
                  </Link>
                </div>
                <div className={`practice-visual practice-visual-${index + 1}`}>
                  {index === 0 ? (
                    <Image
                      src="/assets/figma/home-case-photo.png"
                      fill
                      sizes="(max-width: 800px) 100vw, 50vw"
                      alt="Samenwerking rond veilige AI voor medicatie-incidenten"
                    />
                  ) : index === 1 ? (
                    <Image
                      src="/assets/figma/home-circles.png"
                      fill
                      sizes="(max-width: 800px) 100vw, 50vw"
                      alt=""
                    />
                  ) : (
                    <div className="case-placeholder" aria-hidden="true">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <i />
                    </div>
                  )}
                  {index === 0 ? (
                    <Image
                      className="practice-badge"
                      src="/assets/figma/home-case-badge.png"
                      width={170}
                      height={170}
                      alt=""
                    />
                  ) : null}
                </div>
              </article>
            ))}
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
