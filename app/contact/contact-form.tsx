"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [notice, setNotice] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const organization = String(form.get("organization") ?? "");
    const email = String(form.get("email") ?? "");
    const subject = String(form.get("subject") ?? "");
    const message = String(form.get("message") ?? "");

    const body = [
      `Naam: ${name}`,
      `Organisatie: ${organization}`,
      `E-mail: ${email}`,
      "",
      message,
    ].join("\n");

    setNotice("Uw e-mailprogramma wordt geopend om het bericht te versturen.");
    window.location.href = `mailto:hello@carecogni.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-heading">
        <p className="eyebrow">Stuur ons een bericht</p>
        <h2>Contact</h2>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Naam*</label>
          <input id="name" name="name" placeholder="Voor- en achternaam" required />
        </div>
        <div className="form-group">
          <label htmlFor="organization">Organisatie*</label>
          <input
            id="organization"
            name="organization"
            placeholder="Naam van je organisatie"
            required
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="email">E-mail*</label>
        <input
          id="email"
          name="email"
          placeholder="naam@organisatie.nl"
          required
          type="email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="subject">Onderwerp</label>
        <select id="subject" name="subject">
          <option>Vrijblijvend kennismaken</option>
          <option>Vraag over een oplossing</option>
          <option>Informatie over samenwerking</option>
          <option>Anders</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="message">Bericht</label>
        <textarea
          id="message"
          name="message"
          placeholder="Waar kunnen we je mee helpen?"
          required
        />
      </div>
      <button className="button button-dark form-submit" type="submit">
        Bericht versturen
      </button>
      {notice ? (
        <p className="form-notice" role="status">
          {notice}
        </p>
      ) : null}
    </form>
  );
}
