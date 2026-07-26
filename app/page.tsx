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
          <h1>Krijg eerder zicht op risico&apos;s in complexe zorg</h1>
          <p>
            Carecogni haalt vroege signalen uit meldingen en dossiers, zodat
            zorgteams sneller en gerichter kunnen handelen — zonder extra
            registratiedruk.
          </p>
          <Link className="button button-dark v3-hero-cta" href="/contact">
            Plan een gesprek
          </Link>
        </div>
      </section>

      <section className="v3-intro">
        <div className="container v3-intro-copy">
          <h2>Waardevolle signalen zijn vaak al aanwezig</h2>
          <p>
            Ze staan alleen verspreid over MIC- en MIM-meldingen,
            cliëntdossiers en andere systemen. Daardoor blijven patronen soms
            te lang onzichtbaar en komt belangrijke informatie pas laat boven
            tafel.
          </p>
          <p>
            Carecogni brengt deze informatie samen, herkent terugkerende
            patronen en vertaalt ze naar concrete aandachtspunten. De
            zorgprofessional houdt altijd de regie. Zo worden risico&apos;s
            eerder zichtbaar en ontstaat er meer ruimte voor passende zorg.
          </p>
        </div>
      </section>

      <section className="v3-feature v3-feature-white">
        <div className="container v3-feature-inner">
          <div className="v3-media-placeholder v3-media-placeholder-one" aria-hidden="true">
            <span />
          </div>
          <div className="v3-feature-copy">
            <h2>AI die werkt in de dagelijkse zorgpraktijk</h2>
            <p>
              Carecogni ontwikkelt en beheert schaalbare AI-oplossingen voor de
              langdurige zorg. Via een agentic AI-platform, gebouwd op een
              logisch zorgdatamodel als Digital Twin, ondersteunen wij
              zorgprofessionals met betrouwbare, uitlegbare en
              gepersonaliseerde AI-inzichten.
            </p>
          </div>
        </div>
      </section>

      <section className="v3-feature v3-feature-grey">
        <div className="container v3-feature-inner v3-feature-reverse">
          <div className="v3-feature-copy">
            <h2>Geen losse oplossing, maar een slimme strategie</h2>
            <p>
              Van risicosignalering tot slimme chatbots: onze toepassingen
              sluiten aan op bestaande data, systemen en werkprocessen. De
              zorgprofessional houdt de regie en krijgt precies op het juiste
              moment bruikbare ondersteuning.
            </p>
            <Link className="button button-teal button-small" href="/methode">
              Bekijk onze aanpak
            </Link>
          </div>
          <div className="v3-media-placeholder v3-media-placeholder-two" aria-hidden="true">
            <span />
          </div>
        </div>
      </section>

      <section className="v3-solutions" id="oplossingen">
        <div className="container">
          <h2>Onze oplossingen</h2>
          <div className="v3-solution-grid">
            {solutions.map((solution, index) => (
              <Link
                className="v3-solution-card"
                href={`/oplossingen/${solution.slug}`}
                key={solution.slug}
              >
                <span className="v3-solution-icon" aria-hidden="true">
                  <i>{String(index + 1).padStart(2, "0")}</i>
                </span>
                <h3>{solutionLabels[index]}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="v3-cases">
        <div className="container">
          <h2>Cases</h2>
          <div className="v3-case-list">
            {cases.slice(0, 3).map((item, index) => (
              <Link className="v3-case-row" href={`/cases/${item.slug}`} key={item.slug}>
                <div className="v3-case-copy">
                  <p>{item.organization}</p>
                  <h3>
                    {index === 0
                      ? "Kwalitatieve en snelle terugkoppeling door AI"
                      : item.title}
                  </h3>
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

      <SectionCta />

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
