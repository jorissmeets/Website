import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "./contact/contact-form";

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
            <Link className="button button-dark" href="#contact">
              Bespreek uw meldproces
            </Link>
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
              href="#contact"
            >
              Bespreek een vergelijkbare vraag
            </Link>
          </div>
        </div>
      </section>

      <section className="client-section" aria-labelledby="client-title">
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

      <section className="method-lead one-page-section" id="aanpak">
        <div className="container method-lead-grid">
          <div className="method-lead-visual">
            <span>Succesvolle implementatie in de dagelijkse praktijk.</span>
            <span>Gebruiksvriendelijke interface en training.</span>
            <span>Continue ondersteuning en verbetering.</span>
          </div>
          <div>
            <p className="eyebrow">Onze aanpak</p>
            <h2>Succesvolle implementatie vraagt meer dan een goed algoritme</h2>
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

      <section className="method-steps one-page-section" id="cogni-methode">
        <div className="container">
          <h2>Hoe gaan wij te werk?</h2>
          <p className="method-steps-intro">
            Met de COGNI-methode brengen we een toepassing in vijf heldere
            stappen van zorgvraag naar veilig en blijvend gebruik.
          </p>
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

      <section className="contact-lead-section one-page-section" id="contact">
        <div className="container contact-lead-grid">
          <div className="contact-lead-image">
            <Image
              src="/assets/figma/contact-photo.png"
              fill
              sizes="(max-width: 800px) 100vw, 50vw"
              alt="Carecogni in gesprek"
            />
          </div>
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Wat gebeurt er nadat een incident is gemeld?</h2>
            <p>
              Vertel ons waar het screenen, classificeren of terugkoppelen van
              meldingen veel handmatig werk vraagt. Samen onderzoeken we welke
              concrete stap als eerste slimmer kan.
            </p>
            <p>
              We beginnen graag klein en meetbaar, met een toepassing die past
              bij de bestaande data, werkwijze en verantwoordelijkheden.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-map-section">
        <div className="container contact-map-grid contact-map-grid-simple">
          <div className="contact-map-copy">
            <h2>Waar kun je ons vinden?</h2>
            <p>
              Europalaan 400
              <br />
              3526 KS Utrecht
            </p>
            <a href="mailto:hello@carecogni.com">hello@carecogni.com</a>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container">
          <h2>Neem contact met ons op</h2>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
