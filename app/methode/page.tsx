import type { Metadata } from "next";
import Image from "next/image";
import { InnerHero } from "../components/inner-hero";
import { SectionCta } from "../components/section-cta";

export const metadata: Metadata = {
  title: "Onze aanpak",
  description:
    "De COGNI-methode van Carecogni: van een scherp zorgprobleem naar een veilig geïmplementeerde AI-oplossing.",
};

const highlights = [
  "Succesvolle implementatie in de dagelijkse praktijk.",
  "Gebruiksvriendelijke interface en training.",
  "Continue ondersteuning en verbeteringen.",
];

const cogniSteps = [
  {
    letter: "C",
    title: "Creëer begrip van het probleem",
    text: "Samen met zorgprofessionals brengen we de uitdaging, gewenste uitkomst, beschikbare data en randvoorwaarden scherp in beeld.",
    image: "/assets/method-c.svg",
  },
  {
    letter: "O",
    title: "Omlijn de oplossing",
    text: "We ontwerpen een passende aanpak, kiezen de juiste AI-technieken en maken een concreet plan voor ontwikkeling en validatie.",
    image: "/assets/method-o.svg",
  },
  {
    letter: "G",
    title: "Genereer en valideer de AI-toepassing",
    text: "We bouwen, trainen en toetsen iteratief met zorgprofessionals op nauwkeurigheid, relevantie en uitlegbaarheid.",
    image: "/assets/method-g.svg",
  },
  {
    letter: "N",
    title: "Naar de praktijk",
    text: "De oplossing wordt veilig geïntegreerd in de bestaande workflow, met aandacht voor gebruiksgemak, training en adoptie.",
    image: "/assets/method-n.svg",
  },
  {
    letter: "I",
    title: "Itereer en verbeter continu",
    text: "We monitoren prestaties en gebruik, verwerken feedback en laten de toepassing meegroeien met nieuwe data en behoeften.",
    image: "/assets/method-i.svg",
  },
];

export default function MethodPage() {
  return (
    <main>
      <InnerHero />

      <section className="page-intro method-intro">
        <div className="container method-intro-grid">
          <div className="highlight-stack">
            {highlights.map((highlight) => (
              <div className="highlight-pill" key={highlight}>
                <span aria-hidden="true">→</span>
                <strong>{highlight}</strong>
              </div>
            ))}
          </div>
          <div>
            <p className="eyebrow">Onze aanpak</p>
            <h1>Van veelbelovend model naar dagelijks gebruik</h1>
            <p className="large-copy">
              Bij AI in de zorg wordt de stap van concept naar betrouwbare
              praktijktoepassing vaak onderschat. Daarom richten wij ons op
              data, procesintegratie, beveiliging, uitlegbaarheid én adoptie.
            </p>
          </div>
        </div>
      </section>

      <section className="section dark-section cogni-section">
        <div className="container">
          <div className="section-heading light-copy">
            <p className="eyebrow">Hoe gaan wij te werk?</p>
            <h2>De COGNI-methode</h2>
            <p>
              Vijf samenhangende stappen om een AI-toepassing vertrouwd te
              implementeren, operationaliseren en blijvend te verbeteren.
            </p>
          </div>
          <div className="cogni-list">
            {cogniSteps.map((step) => (
              <article className="cogni-step" key={step.letter}>
                <span className="cogni-letter">{step.letter}</span>
                <div className="cogni-icon">
                  <Image src={step.image} fill unoptimized sizes="110px" alt="" />
                </div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionCta />
    </main>
  );
}
