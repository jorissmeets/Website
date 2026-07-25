import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "../site-data";

export function CaseGrid({ items }: { items: CaseStudy[] }) {
  return (
    <section className="cases-overview">
      <div className="cases-rows">
        {items.map((item, index) => (
          <article className="case-overview-row" key={item.slug}>
            <div className="container case-overview-inner">
              <div className={`case-overview-visual case-overview-visual-${index + 1}`}>
                {index === 0 ? (
                  <Image
                    src="/assets/figma/home-case-photo.png"
                    fill
                    priority
                    sizes="(max-width: 800px) 100vw, 50vw"
                    alt="Instituut Verantwoord Medicijngebruik"
                  />
                ) : (
                  <div className="case-placeholder" aria-hidden="true">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <i />
                  </div>
                )}
              </div>
              <div className="case-overview-copy">
                <p className="practice-org">{item.organization}</p>
                <h2>
                  {index === 0
                    ? "Kwalitatieve en snelle terugkoppeling door AI"
                    : item.title}
                </h2>
                <p>{item.description}</p>
                <Link className="button button-dark button-small" href={`/cases/${item.slug}`}>
                  Meer over deze case
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
