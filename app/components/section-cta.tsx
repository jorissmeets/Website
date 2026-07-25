import Link from "next/link";

export function SectionCta({
  title = "Plan een vrijblijvend kennismakingsgesprek",
  text = "In 30 minuten ontdekt u welke AI-oplossing het meeste oplevert voor uw zorginstelling.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="section section-dark">
      <div className="container cta-inner">
        <span className="tag tag-white">Klaar om te starten?</span>
        <h2>{title}</h2>
        <p className="lead lead-white">{text}</p>
        <div className="cta-buttons">
          <Link className="btn btn-primary" href="/contact">
            Plan een gesprek
          </Link>
          <a className="btn btn-outline" href="mailto:hello@carecogni.com">
            hello@carecogni.com
          </a>
        </div>
      </div>
    </section>
  );
}
