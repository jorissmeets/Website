import type { Metadata } from "next";
import Link from "next/link";
import { SectionCta } from "../components/section-cta";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Carecogni combineert kennis van zorgprocessen met betrouwbare, uitlegbare AI.",
};

const values = [
  {
    icon: "🎯",
    title: "Uitlegbare AI",
    text: "Elke aanbeveling of voorspelling is herleidbaar en transparant. Zorgprofessionals blijven altijd in controle.",
  },
  {
    icon: "⚡",
    title: "Snel van start",
    text: "Van eerste gesprek tot werkend prototype in 4–6 weken. We werken iteratief en leveren aantoonbaar resultaat.",
  },
  {
    icon: "🔒",
    title: "Privacy by design",
    text: "AVG-compliant en gehost in Nederland of Europa. Privacybewuste architectuur is onze standaard.",
  },
];

const approach = [
  {
    title: "Analyse & dataverkenning",
    text: "We brengen bestaande data, systemen en knelpunten gericht in kaart.",
  },
  {
    title: "Prototype & validatie",
    text: "In 4–6 weken bouwen we een werkend prototype op basis van uw eigen data.",
  },
  {
    title: "Implementatie & integratie",
    text: "Uitrol in bestaande systemen via API-koppelingen en bewezen architectuur.",
  },
  {
    title: "Beheer, monitoring & groei",
    text: "We verzorgen monitoring, doorontwikkeling en uitbreiding van het AI-portfolio.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero page-hero-gradient">
        <div className="container">
          <Link className="back-link" href="/">
            ← Terug naar home
          </Link>
          <span className="tag tag-white">Over ons</span>
          <h1>
            AI voor de zorg,
            <br />
            gebouwd door mensen die de zorg kennen
          </h1>
          <p className="lead lead-white">
            Carecogni is opgericht vanuit de overtuiging dat AI in de zorg
            betrouwbaar, uitlegbaar en écht bruikbaar moet zijn — niet in de
            toekomst, maar nu.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="tag">Wie wij zijn</span>
            <h2>Gespecialiseerd in agentic AI voor de langdurige zorg</h2>
            <p className="lead">
              Carecogni is gevestigd in Utrecht en werkt in de zorgsector. Wij
              combineren kennis van zorgprocessen met moderne AI-technologie —
              voor oplossingen die technisch kloppen én in de praktijk werken.
            </p>
          </div>
          <div className="values-grid">
            {values.map((value) => (
              <article className="value-card" key={value.title}>
                <span aria-hidden="true">{value.icon}</span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="tag">Aanpak</span>
            <h2>Hoe wij werken</h2>
            <p className="lead">
              Onze aanpak is praktisch, gefaseerd en gericht op directe
              meerwaarde in de dagelijkse zorgpraktijk.
            </p>
          </div>
          <div className="approach-grid">
            {approach.map((item, index) => (
              <article className="approach-card" key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionCta
        title="Kennismaken?"
        text="Neem contact op voor een vrijblijvend gesprek over de mogelijkheden voor uw instelling."
      />
    </main>
  );
}
