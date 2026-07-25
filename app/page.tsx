const solutions = [
  {
    number: "01",
    title: "AI Care Assistant",
    summary:
      "Eén veilige assistent die informatie uit protocollen, dossiers en applicaties toegankelijk maakt in gewone taal.",
    examples: ["Kennis direct vindbaar", "Minder schakelen", "Actie in de workflow"],
  },
  {
    number: "02",
    title: "Signalering & monitoring",
    summary:
      "Agents herkennen relevante signalen, trends en datakwaliteitsproblemen voordat ze in losse rapportages verdwijnen.",
    examples: ["Risicosignalering", "Realtime dashboards", "Datakwaliteit"],
  },
  {
    number: "03",
    title: "Voorspelmodellen",
    summary:
      "Uitlegbare modellen ondersteunen planning, capaciteit en zorgbeslissingen op het moment dat het ertoe doet.",
    examples: ["Capaciteitsplanning", "Nazorg", "Vroegsignalering"],
  },
  {
    number: "04",
    title: "Context- & kennislaag",
    summary:
      "Het gedeelde fundament dat databronnen, betekenis, autorisaties en AI-agents betrouwbaar met elkaar verbindt.",
    examples: ["Semantisch model", "Bronkoppelingen", "Governance"],
  },
];

const cases = [
  {
    sector: "Medicatieveiligheid",
    title: "Sneller en consistenter incidenten beoordelen",
    copy:
      "Een screeningsassistent helpt meldingen classificeren en maakt relevante signalen direct zichtbaar voor de beoordelaar.",
  },
  {
    sector: "GGZ",
    title: "Antwoord uit eigen protocollen en zorgpaden",
    copy:
      "Een Care Assistant ontsluit goedgekeurde kennis voor cliënten en medewerkers, met bronverwijzing en passende autorisatie.",
  },
  {
    sector: "Langdurige zorg",
    title: "Vroegtijdig zien waar extra aandacht nodig is",
    copy:
      "Signalering op ongestructureerde rapportages ondersteunt tijdige opvolging en verlaagt de administratieve zoeklast.",
  },
];

const approach = [
  {
    step: "01",
    title: "Begrijp het werk",
    copy: "We starten bij het proces, de gebruiker en de beslissing die beter of sneller moet.",
  },
  {
    step: "02",
    title: "Verbind de context",
    copy: "We bepalen welke betekenis, bronnen en rechten de oplossing nodig heeft.",
  },
  {
    step: "03",
    title: "Bewijs waarde",
    copy: "We bouwen klein, valideren met professionals en meten het effect in de praktijk.",
  },
  {
    step: "04",
    title: "Schaal beheerst",
    copy: "We beheren, monitoren en hergebruiken het fundament voor volgende processen.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Carecogni home">
          <span className="brand-mark" aria-hidden="true">
            <i />
            <i />
          </span>
          <span className="brand-word">
            <strong>Care</strong>cogni
          </span>
        </a>

        <nav aria-label="Hoofdnavigatie">
          <a href="#oplossingen">Oplossingen</a>
          <a href="#cases">Cases</a>
          <a href="#werkwijze">Werkwijze</a>
          <a href="#over-ons">Over ons</a>
        </nav>

        <a className="header-cta" href="mailto:hello@carecogni.com">
          Plan een gesprek
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Betrouwbare AI voor de zorg</p>
          <h1>
            Meer zorg.
            <br />
            Minder <em>last.</em>
          </h1>
          <p className="hero-lead">
            AI die meewerkt in de dagelijkse praktijk — veilig verbonden met
            bestaande systemen, uitlegbaar voor professionals en gebouwd om
            stap voor stap te schalen.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#oplossingen">
              Ontdek de oplossingen
            </a>
            <a className="text-link" href="#cases">
              Bekijk toepassingen <span aria-hidden="true">↘</span>
            </a>
          </div>
          <div className="trust-row" aria-label="Kernbeloften">
            <span>Veilig</span>
            <span>Uitlegbaar</span>
            <span>Geïntegreerd</span>
          </div>
        </div>

        <div className="hero-system" aria-label="Van zorgvraag naar actie">
          <div className="system-label">Eén gedeelde context</div>
          <div className="question-card card-one">
            <small>Zorgprofessional</small>
            <strong>Welke cliënt vraagt vandaag extra aandacht?</strong>
          </div>
          <div className="context-orbit">
            <span>ECD</span>
            <span>Protocollen</span>
            <span>Planning</span>
          </div>
          <div className="answer-card">
            <span className="answer-signal" aria-hidden="true" />
            <div>
              <small>Care Assistant</small>
              <strong>3 relevante signalen, met bron en vervolgstap.</strong>
            </div>
          </div>
          <p className="system-caption">
            Bronnen blijven waar ze zijn. Context maakt ze bruikbaar.
          </p>
        </div>
      </section>

      <section className="intro section-shell" aria-labelledby="intro-title">
        <p className="eyebrow dark">Begin bij het werk, niet bij de hype</p>
        <div className="intro-grid">
          <h2 id="intro-title">
            Eén proces oplossen.
            <br />
            Daarna slim verder bouwen.
          </h2>
          <div className="intro-copy">
            <p>
              Zorgorganisaties hebben geen behoefte aan nóg een losstaande
              AI-demo. Ze hebben oplossingen nodig die passen in hun systemen,
              processen en verantwoordelijkheden.
            </p>
            <p>
              Carecogni combineert AI-agents, voorspelmodellen en monitoring met
              een gedeelde context- en kennislaag. Zo levert de eerste
              toepassing direct waarde en wordt de volgende sneller,
              betrouwbaarder en voordeliger.
            </p>
          </div>
        </div>
      </section>

      <section className="solutions section-shell" id="oplossingen">
        <div className="section-heading">
          <div>
            <p className="eyebrow dark">Onze oplossingen</p>
            <h2>AI die antwoord geeft én verder helpt.</h2>
          </div>
          <p>
            Van een gerichte assistent tot een organisatiebrede contextlaag:
            iedere oplossing begint bij een concrete vraag uit de praktijk.
          </p>
        </div>

        <div className="solution-grid">
          {solutions.map((solution) => (
            <article className="solution-card" key={solution.number}>
              <div className="solution-top">
                <span className="solution-number">{solution.number}</span>
                <span className="arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
              <h3>{solution.title}</h3>
              <p>{solution.summary}</p>
              <ul aria-label={`Voorbeelden ${solution.title}`}>
                {solution.examples.map((example) => (
                  <li key={example}>{example}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="architecture">
        <div className="architecture-inner section-shell">
          <div className="architecture-copy">
            <p className="eyebrow">Het verschil zit onder de motorkap</p>
            <h2>Geen verzameling losse agents. Eén betrouwbaar fundament.</h2>
            <p>
              De context- en kennislaag geeft iedere agent dezelfde taal,
              herkomst en autorisaties. Dat maakt antwoorden controleerbaar en
              groei beheersbaar.
            </p>
            <a className="text-link light" href="#werkwijze">
              Zo bouwen we samen <span aria-hidden="true">↘</span>
            </a>
          </div>

          <div className="layer-stack" aria-label="Carecogni architectuurlagen">
            <div className="layer layer-top">
              <span>AI-agents</span>
              <div>
                <b>Care Assistant</b>
                <b>Signalering</b>
                <b>Monitoring</b>
              </div>
            </div>
            <div className="layer layer-middle">
              <span>Context- & kennislaag</span>
              <p>Betekenis · rechten · herkomst · observability</p>
            </div>
            <div className="layer layer-bottom">
              <span>Data & bronnen</span>
              <div>
                <b>ECD</b>
                <b>TOPdesk</b>
                <b>Zenya</b>
                <b>Domotica</b>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cases section-shell" id="cases">
        <div className="section-heading">
          <div>
            <p className="eyebrow dark">Toepassingen in de praktijk</p>
            <h2>Waarde begint met een herkenbaar probleem.</h2>
          </div>
          <p>
            Voorbeelden uit actuele Carecogni-trajecten. Publieke klantnamen en
            resultaatcijfers worden toegevoegd na goedkeuring.
          </p>
        </div>

        <div className="case-grid">
          {cases.map((item, index) => (
            <article className="case-card" key={item.sector}>
              <div className={`case-visual visual-${index + 1}`}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div className="pulse" />
              </div>
              <div className="case-body">
                <small>{item.sector}</small>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="approach section-shell" id="werkwijze">
        <div className="approach-intro">
          <p className="eyebrow dark">Onze werkwijze</p>
          <h2>Van vraagstuk naar een oplossing die blijft werken.</h2>
          <p>
            De essentie van de COGNI-methode, compact gemaakt voor de praktijk.
          </p>
        </div>
        <ol className="approach-list">
          {approach.map((item) => (
            <li key={item.step}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="about" id="over-ons">
        <div className="about-inner section-shell">
          <div className="about-mark" aria-hidden="true">
            <span>Care</span>
            <span>cogni</span>
          </div>
          <div className="about-copy">
            <p className="eyebrow dark">Over Carecogni</p>
            <h2>Technologie die de mens in de zorg sterker maakt.</h2>
            <p>
              Carecogni is een Nederlands softwarebedrijf voor betrouwbare AI
              in de zorg. We combineren zorgkennis, AI-engineering,
              softwareontwikkeling en implementatiekracht om oplossingen echt
              onderdeel te maken van het dagelijks werk.
            </p>
            <div className="values">
              <span>Verstandig</span>
              <span>Dapper</span>
              <span>Open</span>
              <span>Standvastig</span>
            </div>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="contact-inner section-shell">
          <p className="eyebrow">Samen verder</p>
          <h2>
            Welk proces verdient
            <br />
            minder last?
          </h2>
          <p>
            In een eerste gesprek verkennen we waar AI aantoonbaar waarde kan
            leveren — en wat daarvoor nodig is.
          </p>
          <a className="button button-light" href="mailto:hello@carecogni.com">
            hello@carecogni.com
          </a>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark" aria-hidden="true">
            <i />
            <i />
          </span>
          <span className="brand-word">
            <strong>Care</strong>cogni
          </span>
        </a>
        <p>Betrouwbare AI voor de zorg.</p>
        <div>
          <a href="https://www.linkedin.com/company/carecogni/">LinkedIn</a>
          <a href="https://www.carecogni.com/privacy">Privacy</a>
          <span>© 2026 Carecogni</span>
        </div>
      </footer>
    </main>
  );
}
