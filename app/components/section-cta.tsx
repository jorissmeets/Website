import Link from "next/link";

export function SectionCta({
  title = "Benieuwd wat wij voor jou kunnen betekenen?",
  text = "Ben je nieuwsgierig naar wat wij voor jou kunnen betekenen? Wil je een keer brainstormen over mogelijke AI toepassingen of heb je een beslismodel dat je naar de praktijk zou willen brengen? Wij denken graag met je mee! Stuur ons een berichtje, dan nemen wij contact op.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="section-cta">
      <div className="container cta-inner">
        <h2>{title}</h2>
        <p>{text}</p>
        <Link className="button button-dark button-small" href="/contact">
          Contact
        </Link>
      </div>
    </section>
  );
}
