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

      <section className="page-intro contact-intro">
        <div className="container contact-lead">
          <div>
            <p className="eyebrow">Contact</p>
            <h1>Benieuwd wat wij voor jou kunnen betekenen?</h1>
          </div>
          <p className="large-copy">
            Wij denken graag met je mee. Heb je een idee om de dagelijkse
            zorgpraktijk te verbeteren, of een veelbelovend model dat naar de
            praktijk moet? Laat het ons weten.
          </p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-side">
            <div className="contact-photo">
              <Image
                src="/assets/contact.jpg"
                fill
                unoptimized
                sizes="(max-width: 800px) 100vw, 50vw"
                alt="Carecogni in Utrecht"
              />
            </div>
            <div className="contact-details">
              <div>
                <span>E-mail</span>
                <a href="mailto:hello@carecogni.com">hello@carecogni.com</a>
              </div>
              <div>
                <span>Waar kun je ons vinden?</span>
                <p>Europalaan 400<br />3526 KS Utrecht</p>
              </div>
              <div>
                <span>LinkedIn</span>
                <a
                  href="https://www.linkedin.com/company/carecogni"
                  rel="noreferrer"
                  target="_blank"
                >
                  Volg Carecogni
                </a>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
