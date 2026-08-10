import Image from "next/image";
import Link from "next/link";

const incidentSteps = [
  {
    title: "Screenen",
    description:
      "AI leest vrije-tekstmeldingen en haalt de informatie naar voren die nodig is voor verdere beoordeling.",
  },
  {
    title: "Classificeren",
    description:
      "De assistent doet een consistente voorzet op basis van afgesproken categorieën en codeerinstructies.",
  },
  {
    title: "Beoordelen",
    description:
      "De professional controleert de bron, weegt de context en bepaalt de definitieve classificatie.",
  },
  {
    title: "Leren en verbeteren",
    description:
      "Gestructureerde meldingen maken gerichte analyse, terugkoppeling en kwaliteitsverbetering mogelijk.",
  },
];

const customers = [
  {
    name: "Arkin",
    logo: "/assets/clients/arkin.svg",
    width: 76,
    height: 50,
  },
  {
    name: "IVM",
    logo: "/assets/clients/ivm.png",
    width: 438,
    height: 408,
    className: "client-logo-ivm",
  },
  {
    name: "Fivoor",
    logo: "/assets/clients/fivoor.svg",
    width: 322,
    height: 100,
  },
  {
    name: "GGZ Noord-Holland-Noord",
    logo: "/assets/clients/ggz-nhn.gif",
    width: 322,
    height: 133,
  },
  {
    name: "Saffier",
    logo: "/assets/clients/saffier.png",
    width: 340,
    height: 140,
  },
];

const team = [
  {
    name: "Peter Broekroelofs",
    role: "Co-Founder en CEO",
    image: "/assets/figma/about-peter.png",
  },
  {
    name: "Joris Smeets",
    role: "Co-Founder en Chief Innovation Officer",
    image: "/assets/tijs.jpg",
  },
  {
    name: "Tijs Teulings",
    role: "AI Lead",
    image: "/assets/tijs-teulings.png",
    imagePosition: "50% 69%",
  },
  {
    name: "Joran Timmerman",
    role: "Platform Engineer",
    image: "/assets/joran.jpg",
  },
  {
    name: "Pascal Venema",
    role: "Project Manager",
    image: "/assets/pascal.jpeg",
  },
  {
    name: "Tim Schouten",
    role: "AI Engineer",
    image: "/assets/tim-schouten.png",
  },
  {
    name: "Piet Hein Zwaal",
    role: "Co-Founder",
    image: "/assets/figma/about-piet.png",
  },
  {
    name: "Hans Mekenkamp",
    role: "Co-Founder",
    image: "/assets/figma/about-hans.png",
  },
];

export default function Home() {
  return (
    <main className="figma-home" id="top">
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
          <p className="figma-hero-eyebrow">Meer leren van ieder incident</p>
          <h1>Van incidentmelding naar verbetering</h1>
          <p className="figma-hero-lead">
            Carecogni zet grote aantallen incidentmeldingen om in consistente,
            bruikbare verbeterinformatie. Onze AI ondersteunt screening,
            classificatie, analyse en terugkoppeling, met de professional in
            regie.
          </p>
          <div className="hero-actions">
            <Link className="button button-dark" href="#werkwijze">
              Bekijk hoe het werkt
            </Link>
            <Link
              className="button button-dark"
              href="mailto:hello@carecogni.com"
            >
              Mail ons
            </Link>
          </div>
        </div>
      </section>

      <section className="client-section client-section-top" aria-labelledby="client-title">
        <div className="container">
          <div className="figma-section-heading centered">
            <p className="eyebrow">Onze klanten</p>
            <h2 id="client-title">Samen werken aan AI die waarde toevoegt</h2>
          </div>
          <div className="client-name-grid">
            {customers.map((customer) => (
              <div
                className={`client-logo-card${customer.className ? ` ${customer.className}` : ""}`}
                key={customer.name}
              >
                <Image
                  src={customer.logo}
                  width={customer.width}
                  height={customer.height}
                  unoptimized
                  alt={customer.name}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="figma-intro">
        <div className="container figma-intro-copy">
          <h2>Registreren is pas het begin</h2>
          <p>
            Zorgorganisaties ontvangen dagelijks meldingen in vrije tekst.
            Zorgvuldig lezen, coderen en terugkoppelen kost specialistische
            tijd. Terwijl de echte waarde juist ontstaat wanneer meldingen
            samen leiden tot gerichte verbeteringen in de praktijk.
          </p>
        </div>
      </section>

      <section className="figma-about" id="werkwijze">
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
            <p className="eyebrow">Incident Intelligence</p>
            <h2>Minder tijd aan verwerking. Meer ruimte om te leren.</h2>
            <p>
              Onze AI-assistent leest incidentmeldingen, herkent relevante
              informatie en doet een voorstel voor de juiste classificatie.
              Daarmee ondersteunen we kwaliteitsprofessionals bij het
              tijdrovende werk vóór de inhoudelijke analyse en terugkoppeling.
            </p>
            <p>
              De gebruikte bron blijft zichtbaar. De professional controleert
              de context en blijft verantwoordelijk voor de definitieve
              beoordeling.
            </p>
          </div>
        </div>
      </section>

      <section className="figma-foundation">
        <div className="container figma-split">
          <div className="figma-copy">
            <p className="eyebrow">Aansluiten op de praktijk</p>
            <h2>Een slimme laag boven op het bestaande meldproces</h2>
            <p>
              Carecogni sluit aan op bestaande meldgegevens, codeboeken en
              werkwijzen. Gespecialiseerde AI-agents zetten vrije tekst om in
              gestructureerde, herleidbare informatie die opnieuw gebruikt kan
              worden voor analyse en terugkoppeling.
            </p>
            <p>
              Zo hoeft een organisatie niet opnieuw te beginnen. We verbeteren
              eerst één concrete workflow en bouwen van daaruit gecontroleerd
              verder.
            </p>
            <Link
              className="button button-teal button-small"
              href="#ivm-case"
            >
              Bekijk de IVM-case
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

      <section className="figma-solutions" id="oplossing">
        <div className="container">
          <div className="figma-section-heading centered">
            <h2>Van melding naar bruikbare verbeterinformatie</h2>
            <p>
              De AI ondersteunt iedere stap, zonder de professionele
              beoordeling over te nemen.
            </p>
          </div>
          <div className="figma-solution-grid incident-step-grid">
            {incidentSteps.map((step, index) => (
              <article
                className="figma-solution-card"
                key={step.title}
              >
                <span className="solution-card-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="figma-about incident-proof" id="ivm-case">
        <div className="container figma-split">
          <div className="figma-dashboard incident-proof-visual">
            <Image
              src="/assets/figma-import/ivm-screening.png"
              fill
              sizes="(max-width: 820px) 100vw, 50vw"
              alt="AI-screeningsassistent voor incidentmeldingen"
            />
          </div>
          <div className="figma-copy">
            <p className="eyebrow">In de praktijk · IVM</p>
            <h2>Circa 20.000 meldingen per jaar zorgvuldig verwerken</h2>
            <p>
              Voor het Instituut Verantwoord Medicijngebruik ontwikkelde
              Carecogni een AI-screeningsassistent die incidentmeldingen
              analyseert en een voorstel doet voor gestructureerde
              classificaties.
            </p>
            <p>
              De screener ziet de bron en blijft verantwoordelijk voor de
              definitieve beoordeling. Zo ontstaat een snellere, uniformere
              werkwijze met meer ruimte voor inhoudelijke terugkoppeling.
            </p>
            <Link
              className="button button-teal button-small"
              href="mailto:hello@carecogni.com"
            >
              Bespreek een vergelijkbare vraag
            </Link>
          </div>
        </div>
      </section>

      <section className="about-company one-page-section" id="over-ons">
        <div className="container about-company-grid">
          <div className="about-logo-panel">
            <Image
              src="/assets/carecogni-mark-light.svg"
              width={269}
              height={138}
              alt="Carecogni"
            />
          </div>
          <div>
            <p className="eyebrow">Over Carecogni</p>
            <h2>Intelligente samenwerking tussen mens en technologie</h2>
            <p>
              Carecogni bouwt veilige en begrijpelijke AI-toepassingen voor de
              zorg. We combineren ervaring in digitale innovatie, data science,
              softwareontwikkeling en gezondheidszorg.
            </p>
            <p>
              Onze technologie ondersteunt de professional bij tijdrovende
              informatietaken. De bron blijft herleidbaar, de uitkomst
              uitlegbaar en de professional houdt de regie.
            </p>
          </div>
        </div>
      </section>

      <section className="about-team one-page-section" id="team">
        <div className="container">
          <p className="eyebrow centered-eyebrow">Ons team</p>
          <h2>Complementaire ervaring, één gedeelde ambitie</h2>
          <div className="figma-team-grid">
            {team.map((person) => (
              <article className="figma-team-card" key={person.name}>
                <div className="figma-team-photo">
                  <Image
                    src={person.image}
                    fill
                    sizes="(max-width: 620px) 100vw, 50vw"
                    alt={person.name}
                    style={
                      person.imagePosition
                        ? { objectPosition: person.imagePosition }
                        : undefined
                    }
                  />
                </div>
                <div>
                  <h3>{person.name}</h3>
                  <p>{person.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
