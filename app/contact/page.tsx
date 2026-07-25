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
      <InnerHero />

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
            <h1>Benieuwd wat wij voor jou kunnen betekenen?</h1>
            <p>
              Ben je nieuwsgierig naar wat wij voor jou kunnen betekenen? Wil
              je een keer brainstormen over mogelijke AI-toepassingen of heb je
              een beslismodel dat je naar de praktijk wilt brengen?
            </p>
            <p>
              Wij denken graag met je mee. Stuur ons een bericht, dan nemen wij
              contact op.
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
