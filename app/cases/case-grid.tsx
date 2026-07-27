import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "../site-data";

const caseImages: Record<string, string> = {
  "ai-care-assistant-ggz": "/assets/figma-import/claire-assistant-wide.png",
  "ivm-incidentmeldingen": "/assets/figma-import/ivm-screening.png",
  "meerzorg-signalering": "/assets/figma-import/ai-platform-chip.png",
  "slimme-ticketverwerking": "/assets/figma/product-screenshot.png",
};

export function CaseGrid({ items }: { items: CaseStudy[] }) {
  return (
    <section className="cases-overview">
      <div className="cases-rows">
        {items.map((item, index) => (
          <article className="case-overview-row" key={item.slug}>
            <div className="container case-overview-inner">
              <div className={`case-overview-visual case-overview-visual-${index + 1}`}>
                <Image
                  src={caseImages[item.slug]}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 800px) 100vw, 50vw"
                  alt=""
                />
              </div>
              <div className="case-overview-copy">
                <p className="practice-org">{item.organization}</p>
                <h2>{item.title}</h2>
                <p>{item.shortDescription ?? item.description}</p>
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
