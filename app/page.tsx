import Image from "next/image";
import Link from "next/link";
import { SectionCta } from "./components/section-cta";

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

const cases = [
  {
    organization: "Arkin",
    title: "AI-chatbot ontlast zorgmedewerkers",
    description:
      "Een digitale assistent ondersteunt cliënten vóór, tijdens en na de behandeling en beantwoordt veelgestelde vragen met informatie uit eigen zorgpaden en protocollen.",
    image: "/assets/figma-import/claire-case.png",
    imageAlt: "Claire, de digitale assistent voor cliënten van Arkin",
    visualClass: "case-showcase-visual-claire",
  },
  {
    organization: "Instituut Verantwoord Medicijngebruik",
    title: "AI-screeningsassistent voor medicatie-incidenten",
    description:
      "De assistent helpt circa 20.000 meldingen per jaar sneller en uniformer te classificeren, met een controleerbare AI-voorzet voor screeners.",
    image: "/assets/figma-import/ivm-screening.png",
    imageAlt: "Scherm van de AI-screeningsassistent voor medicatie-incidenten",
    visualClass: "case-showcase-visual-ivm",
  },
  {
    organization: "GGZ Noord-Holland-Noord",
    title: "Rapportagevalidatie van zorginhoudelijk contact",
    description:
      "Een zelfstandige validator toetst rapportages aan vaste regels en geeft per rapportage een herleidbaar oordeel met motivering.",
    image: "/assets/clients/ggz-nhn.gif",
    imageAlt: "Logo van GGZ Noord-Holland-Noord",
    visualClass: "case-showcase-visual-logo",
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
    role: "Platform Lead",
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
    image: "/assets/tim-schouten-2026.png",
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
          <h1>
            Wij bestaan om de grenzen te verleggen van wat mogelijk wordt
            geacht met AI in de zorg
          </h1>
          <p className="figma-hero-lead">
            Pragmatisch versneld AI voor Care &amp; Cure in productie
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
            <h2 id="client-title" className="client-intro">
              We werken samen met organisaties in de ggz, ouderenzorg en
              medicatieveiligheid aan AI-oplossingen die aansluiten op hun
              dagelijkse praktijk.
            </h2>
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
          <h2>Waardevolle informatie blijft te vaak onbenut</h2>
          <p>
            Zorgorganisaties beschikken over veel kennis, maar een groot deel
            daarvan staat verspreid over systemen of verborgen in vrije tekst.
            Het kost professionals veel tijd om die informatie te verzamelen,
            te beoordelen en om te zetten in bruikbare inzichten. Carecogni
            helpt dit voorwerk zorgvuldig te automatiseren, zodat medewerkers
            sneller kunnen handelen en meer tijd overhouden voor de zorg.
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
            <p className="eyebrow">Onze oplossing</p>
            <h2>Een AI-assistent die het voorwerk uit handen neemt</h2>
            <p>
              Onze AI-assistent leest vrije tekst, herkent relevante informatie
              en doet een voorstel voor de juiste classificatie.
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
            <p className="eyebrow">Techniek en integratie</p>
            <h2>Gebouwd rond de systemen en processen die er al zijn</h2>
            <p>
              Carecogni sluit aan op bestaande gegevens, codeboeken en
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
              href="#cases"
            >
              Bekijk onze cases
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

      <section className="case-showcase" id="cases">
        <div className="container">
          <div className="figma-section-heading centered">
            <p className="eyebrow">In de praktijk</p>
            <h2>Cases</h2>
          </div>
          <div className="case-showcase-list">
            {cases.map((item) => (
              <article className="case-showcase-card" key={item.organization}>
                <div className="case-showcase-copy">
                  <p className="case-showcase-organization">
                    {item.organization}
                  </p>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div
                  className={`case-showcase-visual ${item.visualClass}`}
                >
                  <Image
                    src={item.image}
                    fill
                    sizes="(max-width: 820px) 100vw, 44vw"
                    alt={item.imageAlt}
                    unoptimized={item.image.endsWith(".gif")}
                  />
                  <span className="case-showcase-arrow" aria-hidden="true">
                    →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-team one-page-section" id="over-ons">
        <div className="container">
          <p className="eyebrow centered-eyebrow">Ons team</p>
          <h2>
            Een multidisciplinair team dat kennis van zorg, AI en software
            samenbrengt.
          </h2>
          <div className="figma-team-grid">
            {team.map((person) => (
              <article className="figma-team-card" key={person.name}>
                <div className="figma-team-photo">
                  <Image
                    src={person.image}
                    fill
                    sizes="(max-width: 540px) 95px, (max-width: 1080px) 120px, 150px"
                    alt={person.name}
                    unoptimized={person.name === "Tim Schouten"}
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

      <SectionCta
        title="Neem contact op"
        text="Wil je verkennen wat AI voor jouw organisatie kan betekenen? We denken graag mee over een concrete vraag uit de zorgpraktijk."
        buttonLabel="Mail ons"
      />

    </main>
  );
}
