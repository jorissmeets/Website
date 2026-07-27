import type { Metadata } from "next";
import Image from "next/image";
import { InnerHero } from "../components/inner-hero";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met Carecogni voor een vrijblijvend gesprek over AI in de zorg.",
};

export default function ContactPage() {
  return (
    <main>
      <InnerHero title="Contact" />

      <section className="contact-lead-section">
        <div className="container contact-lead-grid">
          <div className="contact-lead-image">
            <Image
              src="/assets/figma/contact-photo.png"
              fill
              priority
              sizes="(max-width: 800px) 100vw, 50vw"
              alt="Carecogni in gesprek"
            />
          </div>
          <div>
            <h2>Benieuwd wat wij voor jou kunnen betekenen?</h2>
            <p>
              Heb je ideeën om de dagelijkse zorgpraktijk te verbeteren, de
              administratieve druk te verlagen of zorg persoonlijker te maken?
              Samen onderzoeken we of een data- en AI-gedreven oplossing kan
              helpen en wat daarvoor nodig is.
            </p>
            <p>
              Ook denken we graag mee over veelbelovende modellen uit
              onderzoek die nog niet hun weg naar de praktijk hebben gevonden.
              Stuur ons een bericht; we nemen graag contact met je op.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-map-section">
        <div className="container contact-map-grid">
          <div className="contact-map-copy">
            <h2>Waar kun je ons vinden?</h2>
            <p>
              Domus Medica
              <br />
              Mercatorlaan 1200
              <br />
              3528 BL Utrecht
            </p>
            <a href="mailto:hello@carecogni.com">hello@carecogni.com</a>
          </div>
          <div className="contact-map">
            <Image
              src="/assets/figma/contact-map.png"
              fill
              sizes="(max-width: 800px) 100vw, 50vw"
              alt="Kaart van de Carecogni-locatie in Utrecht"
            />
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
