import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Plan een vrijblijvend gesprek over Agentic AI voor uw zorginstelling.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <Link className="back-link" href="/">
            ← Terug naar home
          </Link>
          <span className="tag tag-white">Contact</span>
          <h1>Neem contact op</h1>
          <p className="lead lead-white">
            Vrijblijvend praten over de mogelijkheden voor uw zorginstelling?
            We reageren binnen één werkdag.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <h2>Directe contactgegevens</h2>
            <div className="contact-item">
              <span aria-hidden="true">✉️</span>
              <div>
                <strong>E-mail</strong>
                <a href="mailto:hello@carecogni.com">hello@carecogni.com</a>
              </div>
            </div>
            <div className="contact-item">
              <span aria-hidden="true">📍</span>
              <div>
                <strong>Adres</strong>
                <p>
                  Europalaan 400
                  <br />
                  3526 KS Utrecht
                </p>
              </div>
            </div>
            <div className="contact-item">
              <span aria-hidden="true">💼</span>
              <div>
                <strong>LinkedIn</strong>
                <a
                  href="https://www.linkedin.com/company/carecogni"
                  rel="noreferrer"
                  target="_blank"
                >
                  Carecogni op LinkedIn
                </a>
              </div>
            </div>
            <div className="suitable-for">
              <span className="tag">Geschikt voor</span>
              <p>
                GGZ-instellingen · WLZ-aanbieders · VVT-organisaties ·
                Revalidatiecentra · Koepelorganisaties · IT-dienstverleners in
                de zorg
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
