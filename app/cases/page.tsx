import type { Metadata } from "next";
import Link from "next/link";
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
      <section className="page-hero">
        <div className="container">
          <Link className="back-link" href="/">
            ← Terug naar home
          </Link>
          <span className="tag tag-white">Cases</span>
          <h1>AI die werkt in de praktijk</h1>
          <p className="lead lead-white">
            Van GGZ tot WLZ, van farmaceutische instellingen tot
            IT-dienstverleners in de zorg — bekijk hoe Carecogni concreet
            verschil maakt.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <CaseGrid items={cases} />
        </div>
      </section>

      <SectionCta
        title="Ziet u uw organisatie hier ook staan?"
        text="Plan een vrijblijvend gesprek en ontdek wat AI kan betekenen voor uw zorginstelling."
      />
    </main>
  );
}
