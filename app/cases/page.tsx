import type { Metadata } from "next";
import { InnerHero } from "../components/inner-hero";
import { SectionCta } from "../components/section-cta";
import { cases } from "../site-data";
import { CaseGrid } from "./case-grid";

export const metadata: Metadata = {
  title: "Cases",
  description:
    "Bekijk hoe Carecogni AI toepast in de langdurige zorg, farmacovigilantie en zorg-IT.",
};

export default function CasesPage() {
  return (
    <main>
      <InnerHero />
      <section className="page-intro">
        <div className="container center-heading">
          <p className="eyebrow">In de praktijk</p>
          <h1>Slimme AI-oplossingen in de praktijk</h1>
          <p className="large-copy intro-copy">
            Van GGZ tot langdurige zorg en farmacovigilantie: ontdek hoe
            Carecogni samen met zorgorganisaties van complexe data een
            begrijpelijke, bruikbare oplossing maakt.
          </p>
        </div>
      </section>

      <section className="section cases-overview">
        <div className="container">
          <CaseGrid items={cases} />
        </div>
      </section>

      <SectionCta
        title="Benieuwd wat wij voor jou kunnen betekenen?"
        text="Wij denken graag mee over een AI-toepassing die jouw dagelijkse zorgpraktijk verbetert."
      />
    </main>
  );
}
