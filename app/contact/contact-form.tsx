"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [notice, setNotice] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = `${String(form.get("firstName") ?? "")} ${String(
      form.get("lastName") ?? ""
    )}`.trim();
    const organization = String(form.get("organization") ?? "");
    const email = String(form.get("email") ?? "");
    const phone = String(form.get("phone") ?? "");
    const message = String(form.get("message") ?? "");

    const body = [
      `Naam: ${name}`,
      `Organisatie: ${organization}`,
      `E-mail: ${email}`,
      `Telefoon: ${phone}`,
      "",
      message,
    ].join("\n");

    setNotice("Je e-mailprogramma wordt geopend om het bericht te versturen.");
    window.location.href = `mailto:hello@carecogni.com?subject=${encodeURIComponent(
      "Contact via carecogni.com"
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="figma-contact-form" onSubmit={submit}>
      <div className="contact-fields">
        <label>
          <span>Voornaam*</span>
          <input name="firstName" required />
        </label>
        <label>
          <span>Achternaam*</span>
          <input name="lastName" required />
        </label>
        <label>
          <span>E-mail*</span>
          <input name="email" required type="email" />
        </label>
        <label>
          <span>Telefoonnummer</span>
          <input name="phone" type="tel" />
        </label>
        <label>
          <span>Bedrijfsnaam</span>
          <input name="organization" />
        </label>
      </div>
      <div className="contact-message">
        <label>
          <span>Bericht*</span>
          <textarea name="message" required />
        </label>
        <label className="privacy-check">
          <input required type="checkbox" />
          <span>Ik ga akkoord met het privacy statement.</span>
        </label>
        <button className="button button-dark button-small" type="submit">
          Verstuur
        </button>
        {notice ? (
          <p className="form-notice" role="status">
            {notice}
          </p>
        ) : null}
      </div>
    </form>
  );
}
