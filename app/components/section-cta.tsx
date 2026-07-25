import Link from "next/link";

export function SectionCta({
  title = "Plan een vrijblijvend kennismakingsgesprek",
  text = "In 30 minuten ontdekt u welke AI-oplossing het meeste oplevert voor uw zorginstelling.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="section section-cta">
      <div className="container cta-inner">
        <p className="eyebrow">Samen verder</p>
        <h2>{title}</h2>
        <p className="large-copy">{text}</p>
        <div className="cta-buttons">
          <Link className="button button-dark" href="/contact">
            Contact
          </Link>
          <a className="text-link" href="mailto:hello@carecogni.com">
            hello@carecogni.com
          </a>
        </div>
      </div>
    </section>
  );
}
