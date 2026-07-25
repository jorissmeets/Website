import type { Metadata } from "next";
import { InnerHero } from "../components/inner-hero";

export const metadata: Metadata = {
  title: "Privacy statement",
};

export default function PrivacyPage() {
  return (
    <main>
      <InnerHero />
      <section className="page-intro legal-page">
        <div className="container">
          <p className="eyebrow">Laatst bijgewerkt: 10 maart 2025</p>
          <h1>Privacy statement</h1>
          <div className="legal-copy">
            <h2>Wie zijn wij?</h2>
            <p>
              Carecogni, gevestigd aan Mercatorlaan 1200 in Utrecht, is
              gespecialiseerd in AI-consultancy, AI-engineering, dashboarding,
              Large Language Models en data-engineering.
            </p>
            <h2>Welke gegevens verwerken wij?</h2>
            <p>
              Wij verwerken algemene contact- en zakelijke gegevens en, alleen
              wanneer dit noodzakelijk en rechtmatig is, gegevens voor het
              trainen of valideren van AI-modellen.
            </p>
            <h2>Doeleinden en beveiliging</h2>
            <p>
              Gegevens worden uitsluitend gebruikt voor onze dienstverlening,
              communicatie, administratie en wettelijke verplichtingen. Wij
              nemen passende technische en organisatorische maatregelen om
              gegevens te beschermen.
            </p>
            <h2>Contact</h2>
            <p>
              Voor vragen, inzage, correctie of verwijdering kun je mailen naar{" "}
              <a href="mailto:hello@carecogni.com">hello@carecogni.com</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
