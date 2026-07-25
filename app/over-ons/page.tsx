import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InnerHero } from "../components/inner-hero";
import { SectionCta } from "../components/section-cta";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Ontmoet het team achter Carecogni en lees hoe wij veilige, begrijpelijke AI voor de zorg bouwen.",
};

const team = [
  { name: "Peter Broekroelofs", role: "Co-Founder en CEO", image: "/assets/peter.png" },
  { name: "Joris Smeets", role: "Co-Founder en Chief Innovation Officer", image: "/assets/joris.jpeg" },
  { name: "Tijs Teulings", role: "AI Engineer", image: "/assets/tijs.jpg" },
  { name: "Joran Timmerman", role: "Data Engineer", image: "/assets/joran.jpg" },
  { name: "Pascal Venema", role: "Data Engineer", image: "/assets/pascal.jpeg" },
  { name: "Piet Hein Zwaal", role: "Co-Founder", image: "/assets/piet.png" },
  { name: "Hans Mekenkamp", role: "Co-Founder", image: "/assets/hans.png" },
];

export default function AboutPage() {
  return (
    <main>
      <InnerHero />

      <section className="page-intro about-intro">
        <div className="container about-lead-grid">
          <div className="about-mark" aria-hidden="true">
            <Image
              src="/assets/carecogni-mark-light.svg"
              width={269}
              height={138}
              alt=""
            />
          </div>
          <div>
            <p className="eyebrow">Over Carecogni</p>
            <h1>Menselijke zorg, versterkt door begrijpelijke technologie</h1>
            <p className="large-copy">
              De naam Carecogni staat voor onze visie op cognitieve
              intelligentie in de zorg: een slimme samenwerking tussen
              zorgprofessionals en technologie.
            </p>
            <p>
              Wij maken veilige software die beslissingen ondersteunt,
              afgestemd op de individuele patiënt. De zorgprofessional houdt de
              regie; technologie maakt relevante informatie sneller
              beschikbaar en neemt onnodig handwerk weg.
            </p>
            <Link className="text-link" href="/methode">
              Lees hoe wij werken <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section mint-section">
        <div className="container split-layout founders-layout">
          <div className="image-card team-image">
            <Image
              src="/assets/team.jpg"
              fill
              unoptimized
              sizes="(max-width: 800px) 100vw, 50vw"
              alt="Het Carecogni-team"
            />
          </div>
          <div className="copy-block">
            <p className="eyebrow">Samen vanuit expertise</p>
            <h2>Technologie, data en decennialange zorgervaring</h2>
            <p>
              Aan de basis van Carecogni staan ondernemers en specialisten met
              achtergronden in digitale innovatie, AI, data science en
              gezondheidszorg. Juist die combinatie is nodig om veilige,
              robuuste en begrijpelijke AI-toepassingen echt in de praktijk te
              brengen.
            </p>
          </div>
        </div>
      </section>

      <section className="section team-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Wie zijn wij?</p>
            <h2>Het team</h2>
          </div>
          <div className="team-grid">
            {team.map((person) => (
              <article className="team-card" key={person.name}>
                <div className="team-photo">
                  <Image
                    src={person.image}
                    fill
                    unoptimized
                    sizes="(max-width: 620px) 50vw, 25vw"
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
