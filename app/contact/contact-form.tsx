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
      <h2>Stuur een bericht</h2>
      <div className="form-group">
        <label htmlFor="name">Naam</label>
        <input id="name" name="name" placeholder="Uw naam" required />
      </div>
      <div className="form-group">
        <label htmlFor="organization">Organisatie</label>
        <input
          id="organization"
          name="organization"
          placeholder="Naam van uw zorginstelling"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          name="email"
          placeholder="uw@email.nl"
          required
          type="email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="subject">Onderwerp</label>
        <select id="subject" name="subject">
          <option>Vrijblijvend kennismakingsgesprek</option>
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
          placeholder="Vertel kort over uw instelling en uitdaging…"
          required
        />
      </div>
      <button className="form-submit" type="submit">
        Verstuur bericht →
      </button>
      {notice ? (
        <p className="form-notice" role="status">
          {notice}
        </p>
      ) : null}
    </form>
  );
}
