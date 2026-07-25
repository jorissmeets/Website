import type { Metadata } from "next";
import Image from "next/image";
import { InnerHero } from "../components/inner-hero";
import { SectionCta } from "../components/section-cta";

export const metadata: Metadata = {
  title: "Onze aanpak",
  description:
    "De COGNI-methode van Carecogni: van een scherp zorgprobleem naar een veilig geïmplementeerde AI-oplossing.",
};

const cogniSteps = [
  {
    letter: "C",
    title: "Contextanalyse",
    text: "Samen brengen we de uitdaging, gewenste uitkomst, beschikbare data en randvoorwaarden scherp in beeld.",
    image: "/assets/method-c.svg",
  },
  {
    letter: "O",
    title: "Outline the Solution",
    text: "We ontwerpen een passende aanpak en maken een concreet plan voor ontwikkeling, integratie en validatie.",
    image: "/assets/method-o.svg",
  },
  {
    letter: "G",
    title: "Generate and Validate the AI Application",
    text: "We bouwen en toetsen iteratief met zorgprofessionals op nauwkeurigheid, relevantie en uitlegbaarheid.",
    image: "/assets/method-g.svg",
  },
  {
    letter: "N",
    title: "Navigate Implementation in Practice",
    text: "De oplossing wordt veilig geïntegreerd in de bestaande workflow, met aandacht voor training en adoptie.",
    image: "/assets/method-n.svg",
  },
  {
    letter: "I",
    title: "Improve Continuously",
    text: "We monitoren prestaties, verwerken feedback en laten de toepassing meegroeien met nieuwe behoeften.",
    image: "/assets/method-i.svg",
  },
];

const ownership = [
  {
    title: "We build it",
    text: "We ontwikkelen een oplossing rondom jouw data, processen en bestaande zorgsystemen.",
    image: "/assets/figma/method-build.svg",
  },
  {
    title: "You use it",
    text: "Begrijpelijk, veilig en direct beschikbaar in de dagelijkse workflow van professionals.",
    image: "/assets/figma/home-circles.png",
  },
  {
    title: "You own it",
    text: "Grip op data, modellen en doorontwikkeling, zonder onnodige leveranciersafhankelijkheid.",
    image: "/assets/figma/method-own.svg",
  },
];

export default function MethodPage() {
  return (
    <main>
      <InnerHero />

      <section className="method-lead">
        <div className="container method-lead-grid">
          <div className="method-lead-visual" aria-hidden="true">
            <span>COGNI</span>
            <i />
          </div>
          <div>
            <h1>Onze aanpak.</h1>
            <p>
              Bij AI in de zorg wordt de stap van concept naar betrouwbare
              praktijktoepassing vaak onderschat. Daarom richten wij ons op
              data, procesintegratie, beveiliging, uitlegbaarheid én adoptie.
            </p>
            <p>
              Met de COGNI-methode werken we in vijf overzichtelijke stappen
              toe naar blijvende waarde in de dagelijkse zorgpraktijk.
            </p>
          </div>
        </div>
      </section>

      <section className="method-steps">
        <div className="container">
          <h2>Hoe gaan wij te werk</h2>
          <div className="method-step-list">
            {cogniSteps.map((step) => (
              <article className="method-step" key={step.letter}>
                <span className="method-letter">{step.letter}</span>
                <div className="method-icon">
                  <Image src={step.image} fill sizes="150px" alt="" />
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

      <section className="ownership-section">
        <div className="container">
          <h2>We build it, you use it, you own it.</h2>
          <div className="ownership-grid">
            {ownership.map((item, index) => (
              <article key={item.title}>
                <div className={`ownership-image ownership-image-${index + 1}`}>
                  <Image
                    src={item.image}
                    fill
                    sizes="(max-width: 800px) 100vw, 33vw"
                    alt=""
                  />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionCta />
    </main>
  );
}
