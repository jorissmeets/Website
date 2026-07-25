import Link from "next/link";
import { SectionCta } from "./components/section-cta";
import { cases, solutions } from "./site-data";

const problems = [
  {
    icon: "⏳",
    title: "Administratieve last",
    text: "Zorgprofessionals besteden veel tijd aan administratie — tijd die ze liever aan de cliënt besteden.",
  },
  {
    icon: "🔀",
    title: "Gefragmenteerde systemen",
    text: "ECD, HR, planning en kwaliteitssystemen spreken niet met elkaar. Informatie is verspreid of moeilijk te vinden.",
  },
  {
    icon: "🔔",
    title: "Late signalering",
    text: "Risico’s zoals valgevaar, medicatieproblemen of meerzorgbehoefte worden te laat zichtbaar in rapportages.",
  },
];

const steps = [
  {
    title: "Analyse",
    text: "We brengen uw data, systemen en zorgprocessen in kaart.",
  },
  {
    title: "Prototype",
    text: "In 4–6 weken een werkend prototype met meetbaar resultaat.",
  },
  {
    title: "Implementatie",
    text: "Uitrol in uw bestaande systemen — zonder groot IT-project.",
  },
  {
    title: "Beheer & groei",
    text: "Continue monitoring, doorontwikkeling en uitbreiding.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <span className="tag tag-white">
              Agentic AI voor de langdurige zorg
            </span>
            <h1>
              Meer zorg,
              <br />
              <span>minder last.</span>
            </h1>
            <p className="lead lead-white">
              Carecogni ontwikkelt schaalbare AI-oplossingen die
              zorgprofessionals ondersteunen — van risicosignalering tot slimme
              chatbots. Betrouwbaar, uitlegbaar en direct inzetbaar.
            </p>
            <div className="hero-buttons">
              <Link className="btn btn-primary" href="#oplossingen">
                Ontdek onze oplossingen →
              </Link>
              <Link className="btn btn-outline" href="/cases">
                Bekijk cases
              </Link>
            </div>
          </div>

          <div className="hero-visual" aria-label="Voorbeeld van een AI-zorgdashboard">
            <div className="hero-visual-header">
              <span className="hero-dot red" />
              <span className="hero-dot yellow" />
              <span className="hero-dot green" />
              <span className="hero-visual-title">
                AI Care Dashboard — Langdurige Zorg
              </span>
            </div>
            <div className="mock-bar accent wide" />
            <div className="mock-bar medium" />
            <div className="mock-bar long" />
            <div className="mock-stats">
              <div className="mock-stat">
                <strong>94%</strong>
                <span>Nauwkeurigheid</span>
              </div>
              <div className="mock-stat">
                <strong>30+</strong>
                <span>Signaaltypen</span>
              </div>
              <div className="mock-stat">
                <strong>↓68%</strong>
                <span>Admin-last</span>
              </div>
            </div>
            <div className="mock-chat">
              <p>Welke cliënten hebben verhoogd valrisico deze week?</p>
              <p>
                Er zijn 4 cliënten met een verhoogd risicoprofiel. Cliënt 128
                heeft vandaag nog geen vitalen gemeten…
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-tag-row">
            <span className="tag">Herkenbaar?</span>
            <span className="section-line" />
          </div>
          <div className="section-header">
            <h2>De langdurige zorg staat voor grote uitdagingen</h2>
            <p className="lead">
              Krapte, hoge administratieve druk en gefragmenteerde data maken
              het moeilijk om goede zorg te blijven leveren. AI kan helpen —
              mits het écht werkt in de praktijk.
            </p>
          </div>
          <div className="problem-grid">
            {problems.map((problem) => (
              <article className="problem-card" key={problem.title}>
                <span className="problem-icon" aria-hidden="true">
                  {problem.icon}
                </span>
                <h3>{problem.title}</h3>
                <p>{problem.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="oplossingen">
        <div className="container">
          <div className="section-tag-row">
            <span className="tag">Onze oplossingen</span>
            <span className="section-line" />
          </div>
          <div className="section-header">
            <h2>Zes gespecialiseerde AI-oplossingen</h2>
            <p className="lead">
              Gebouwd op één Agentic AI Platform met een Digital Twin als
              fundament. Van chatbots tot voorspelmodellen — direct inzetbaar
              voor uw zorginstelling.
            </p>
          </div>
          <div className="solution-grid">
            {solutions.map((solution) => (
              <Link
                className="solution-card"
                href={`/oplossingen/${solution.slug}`}
                key={solution.slug}
              >
                <span className="solution-icon" aria-hidden="true">
                  {solution.icon}
                </span>
                <h3>{solution.name}</h3>
                <p>{solution.shortDescription}</p>
                <span className="card-link">Meer informatie →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-tag-row">
            <span className="tag">Cases</span>
            <span className="section-line" />
          </div>
          <div className="section-heading-row">
            <div className="section-header">
              <h2>Bewezen resultaten in de praktijk</h2>
              <p className="lead">
                Van GGZ-instellingen tot WLZ-aanbieders — Carecogni
                implementeert AI die écht werkt.
              </p>
            </div>
            <Link className="btn btn-ghost" href="/cases">
              Alle cases bekijken →
            </Link>
          </div>
          <div className="case-preview-grid">
            {cases.slice(0, 2).map((item) => (
              <Link className="case-card" href="/cases" key={item.organization}>
                <span className="case-card-header">
                  <strong>{item.organization}</strong>
                  <span className="case-sector">{item.sector}</span>
                </span>
                <span className="case-card-body">
                  <p>{item.description}</p>
                  <span className="case-result">✓ {item.result}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-tag-row">
            <span className="tag">Werkwijze</span>
            <span className="section-line" />
          </div>
          <div className="section-header">
            <h2>Van eerste gesprek tot werkende AI</h2>
            <p className="lead">
              Geen langdurige trajecten. Wij werken in kleine, gerichte stappen
              — met aantoonbaar resultaat voor iedere mijlpaal.
            </p>
          </div>
          <div className="steps">
            {steps.map((step, index) => (
              <article className="step" key={step.title}>
                <span className="step-number">{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionCta />
    </main>
  );
}
