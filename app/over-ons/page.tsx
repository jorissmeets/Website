import type { Metadata } from "next";
import Image from "next/image";
import { InnerHero } from "../components/inner-hero";
import { SectionCta } from "../components/section-cta";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Ontmoet het team achter Carecogni en lees hoe wij veilige, begrijpelijke AI voor de zorg bouwen.",
};

const team = [
  {
    name: "Peter Broekroelofs",
    role: "Co-Founder en CEO",
    image: "/assets/figma/about-peter.png",
  },
  {
    name: "Joris Smeets",
    role: "Co-Founder en Chief Innovation Officer",
    image: "/assets/figma/about-joris.png",
  },
  {
    name: "Tijs Teulings",
    role: "AI Engineer",
    image: "/assets/tijs.jpg",
  },
  {
    name: "Joran Timmerman",
    role: "Data Engineer",
    image: "/assets/joran.jpg",
  },
  {
    name: "Pascal Venema",
    role: "Data Engineer",
    image: "/assets/pascal.jpeg",
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

export default function AboutPage() {
  return (
    <main>
      <InnerHero title="Wie zijn wij" />

      <section className="about-company">
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
            <p className="eyebrow">Carecogni</p>
            <h2>Intelligente samenwerking tussen mens en technologie</h2>
            <p>
              De naam Carecogni staat voor onze visie op cognitieve
              intelligentie in de zorg: een slimme samenwerking tussen
              zorgprofessionals en technologie. Persoonlijke aandacht,
              efficiënte processen, zorg op maat, preventie en thuismonitoring
              vragen om software die professionals werkelijk ondersteunt.
            </p>
            <p>
              Daarom bouwen we veilige en begrijpelijke AI-toepassingen die
              beslissingen ondersteunen, afgestemd op de individuele cliënt.
              De professional houdt de regie; de technologie helpt om sneller
              te zien wat ertoe doet.
            </p>
          </div>
        </div>
      </section>

      <section className="about-who">
        <div className="container about-who-grid">
          <div className="about-team-image">
            <Image
              src="/assets/figma/about-team-photo.png"
              fill
              priority
              sizes="(max-width: 800px) 100vw, 50vw"
              alt="Het team van Carecogni"
            />
          </div>
          <div>
            <p className="eyebrow">Ons team</p>
            <h2>Complementaire ervaring, één gedeelde ambitie</h2>
            <p>
              Aan de basis van Carecogni staan Peter Broekroelofs, Joris
              Smeets, Piet Hein Zwaal en Hans Mekenkamp. Samen brengen zij
              ervaring in digitale innovatie, AI, data science en
              gezondheidszorg bijeen.
            </p>
            <p>
              Vanuit een gedeelde morele ambitie bouwen de oprichters samen met
              het Carecogni-team aan veilige, robuuste en begrijpelijke
              toepassingen voor de zorgpraktijk.
            </p>
          </div>
        </div>
      </section>

      <section className="about-team">
        <div className="container">
          <h2>Het team</h2>
          <div className="figma-team-grid">
            {team.map((person) => (
              <article className="figma-team-card" key={person.name}>
                <div className="figma-team-photo">
                  <Image
                    src={person.image}
                    fill
                    sizes="(max-width: 620px) 100vw, 50vw"
                    alt={person.name}
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

      <SectionCta />
    </main>
  );
}
