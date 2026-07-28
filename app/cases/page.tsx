import type { Metadata } from "next";
import { InnerHero } from "../components/inner-hero";
import { cases } from "../site-data";
import { CaseGrid } from "./case-grid";

export const metadata: Metadata = {
  title: "Cases",
  description:
    "Bekijk hoe Carecogni AI toepast in de langdurige zorg, farmacovigilantie en zorg-IT.",
};

const caseOrder = [
  "ai-care-assistant-ggz",
  "ivm-incidentmeldingen",
  "meerzorg-signalering",
];

export default function CasesPage() {
  const orderedCases = caseOrder
    .map((slug) => cases.find((item) => item.slug === slug))
    .filter((item): item is (typeof cases)[number] => Boolean(item));

  return (
    <main>
      <InnerHero title="Slimme AI oplossingen in de praktijk" />
      <CaseGrid items={orderedCases} />
    </main>
  );
}
