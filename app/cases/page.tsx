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
      <InnerHero title="Slimme AI oplossingen in de praktijk" />
      <CaseGrid items={cases} />
      <SectionCta />
    </main>
  );
}
