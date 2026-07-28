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
              Carecogni, gevestigd aan Europalaan 400, 3526 KS Utrecht, is
              gespecialiseerd in AI-consultancy, AI-engineering, dashboarding,
              Large Language Models en data-engineering. Carecogni is
              verantwoordelijk voor de verwerking van persoonsgegevens zoals
              beschreven in deze verklaring.
            </p>
            <h2>Welke gegevens verwerken wij?</h2>
            <p>
              Wij verwerken algemene gegevens, zoals naam, contactgegevens en
              zakelijke informatie. Gezondheidsgegevens verwerken wij alleen
              wanneer dit nodig is voor het trainen of valideren van
              AI-modellen.
            </p>
            <h2>Waarom verwerken wij deze gegevens?</h2>
            <p>
              Wij gebruiken gegevens voor de uitvoering van onze diensten,
              communicatie en administratie en om te voldoen aan wettelijke
              verplichtingen.
            </p>
            <h2>Bewaartermijn</h2>
            <p>
              Wij bewaren persoonsgegevens maximaal twee jaar, tenzij een
              langere bewaartermijn wettelijk verplicht is.
            </p>
            <h2>Delen en doorgifte</h2>
            <p>
              Wij delen gegevens uitsluitend wanneer dit nodig is voor onze
              dienstverlening of om aan wettelijke verplichtingen te voldoen.
              Er is geen doorgifte van gegevens buiten de Europese Economische
              Ruimte.
            </p>
            <h2>Geen geautomatiseerde besluiten</h2>
            <p>
              Carecogni ondersteunt organisaties met AI, maar neemt zelf geen
              volledig geautomatiseerde besluiten over personen.
            </p>
            <h2>Jouw rechten</h2>
            <p>
              Je hebt recht op inzage, correctie, verwijdering, beperking en
              overdracht van persoonsgegevens. Ook kun je bezwaar maken tegen
              bepaalde verwerkingen.
            </p>
            <h2>Beveiliging</h2>
            <p>
              Wij nemen passende maatregelen, waaronder toegangscontrole en
              versleuteling, om gegevens te beschermen tegen onbevoegde toegang
              of verlies.
            </p>
            <h2>Contact en klachten</h2>
            <p>
              Voor vragen, inzage, correctie of verwijdering kun je mailen naar{" "}
              <a href="mailto:hello@carecogni.com">hello@carecogni.com</a>. Je
              kunt ook een klacht indienen bij de Autoriteit Persoonsgegevens.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
