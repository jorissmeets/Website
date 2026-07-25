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
    name: "Hans Mekenkamp",
    role: "Co-Founder",
    image: "/assets/figma/about-hans.png",
  },
  {
    name: "Piet Hein Zwaal",
    role: "Co-Founder",
    image: "/assets/figma/about-piet.png",
  },
];

export default function AboutPage() {
  return (
    <main>
      <InnerHero />

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
            <h1>Over Carecogni</h1>
            <p>
              Carecogni ontwikkelt en beheert schaalbare AI-oplossingen voor de
              langdurige zorg. Technologie is voor ons nooit het einddoel. Het
              gaat om zorgprofessionals ondersteunen met betrouwbare,
              uitlegbare en gepersonaliseerde inzichten.
            </p>
            <p>
              Zo ontstaat er minder administratieve last, meer overzicht en
              vooral meer tijd voor menselijke zorg.
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
            <h2>Wie zijn wij?</h2>
            <p>
              Wij zijn ondernemers en specialisten met achtergronden in
              digitale innovatie, AI, data science en gezondheidszorg. Die
              combinatie is nodig om veilige, robuuste en begrijpelijke
              AI-toepassingen echt in de praktijk te brengen.
            </p>
            <p>
              We werken nauw samen met zorgprofessionals en bouwen vanuit hun
              dagelijkse context. Van de eerste contextanalyse tot ingebruikname
              en continue verbetering.
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
