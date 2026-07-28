export type Solution = {
  slug: string;
  icon: string;
  name: string;
  shortName: string;
  sector: string;
  tagline: string;
  shortDescription: string;
  description: string;
  features: string[];
};

export const solutions: Solution[] = [
  {
    slug: "agentic-ai-platform",
    icon: "🧠",
    name: "Logische data & AI-agents",
    shortName: "Logische data & AI-agents",
    sector: "Platformtechnologie",
    tagline: "Gedeelde context voor gespecialiseerde AI-agents",
    shortDescription:
      "Brengt informatie uit bestaande systemen samen, zodat gespecialiseerde AI-agents met de juiste context kunnen werken.",
    description:
      "We brengen informatie uit bestaande bronsystemen samen in een logisch zorgdatamodel: een Digital Twin van de zorgorganisatie. Gespecialiseerde AI-agents gebruiken deze gedeelde context voor afgebakende taken en toepassingen.",
    features: [
      "Digital Twin Builder op basis van bestaande bronsystemen",
      "Koppelingen met bestaande applicaties en databronnen",
      "Gespecialiseerde agents met ieder een afgebakende taak",
      "Eén gedeelde interface voor verschillende toepassingen",
      "Stapsgewijs uitbreidbaar naar nieuwe vraagstukken",
    ],
  },
  {
    slug: "ai-care-assistant",
    icon: "💬",
    name: "AI Care Assistant",
    shortName: "AI Care Assistant",
    sector: "Communicatie & kennismanagement",
    tagline: "Eén chatinterface voor relevante zorginformatie",
    shortDescription:
      "Geeft professionals via één chatinterface toegang tot relevante informatie uit bestaande applicaties.",
    description:
      "De AI Care Assistant bevraagt via API-koppelingen bestaande applicaties en informatiebronnen. Professionals stellen hun vraag in gewone taal en ontvangen het antwoord in één chatinterface, zonder steeds tussen systemen te wisselen.",
    features: [
      "Vragen stellen in gewone taal",
      "Informatie ophalen uit meerdere bestaande applicaties",
      "Antwoorden teruggeven in één chatinterface",
      "Aansluiten op onder meer EPD/ECD, kwaliteitssystemen en HR-informatie",
      "Ondersteuning direct in de bestaande workflow",
    ],
  },
  {
    slug: "risicosignalering",
    icon: "🔍",
    name: "Betekenis uit zorgtekst & NER-agents",
    shortName: "Betekenis & NER-agents",
    sector: "Kwaliteit & veiligheid",
    tagline: "Betekenis halen uit ongestructureerde zorgtekst",
    shortDescription:
      "Zet relevante informatie uit vrije zorgtekst om in gestructureerde en controleerbare gegevens.",
    description:
      "Named Entity Recognition en taalmodellen helpen om relevante informatie uit rapportages, incidentmeldingen en dossiers te herkennen en te structureren. De professional ziet de bron en blijft verantwoordelijk voor de beoordeling.",
    features: [
      "Vrije tekst uit rapportages en meldingen analyseren",
      "Relevante termen en categorieën herkennen",
      "Ongestructureerde informatie omzetten in gestructureerde data",
      "Screening en inhoudelijke beoordeling ondersteunen",
      "De gebruikte broninformatie herleidbaar houden",
    ],
  },
  {
    slug: "voorspelmodellen",
    icon: "📈",
    name: "Beslisondersteunende modellen",
    shortName: "Beslisondersteunende modellen",
    sector: "Besluitvorming & capaciteit",
    tagline: "Uitlegbare ondersteuning op basis van uw eigen zorgdata",
    shortDescription:
      "Ondersteunt teams bij keuzes over nazorg, capaciteit en meerzorg met herleidbare inzichten.",
    description:
      "Modellen die bestaande zorgdata structureren en waarschijnlijke ontwikkelingen zichtbaar maken als beslisondersteuning. De professional weegt de uitkomst altijd in de context van de cliënt, het team en de organisatie.",
    features: [
      "Ondersteuning bij keuzes over ligduur, nazorg en capaciteit",
      "Meerzorgbehoefte eerder in beeld brengen",
      "Inzicht in relevante factoren per uitkomst",
      "Aansluiting op bestaande zorg- en BI-data",
      "Uitlegbare en herleidbare ondersteuning per toepassing",
    ],
  },
  {
    slug: "monitoring-analytics",
    icon: "📊",
    name: "Real-time Monitoring & Agentic Analytics",
    shortName: "Monitoring & Analytics",
    sector: "Stuurinformatie & BI",
    tagline: "Eenduidige stuurinformatie uit meerdere bronnen",
    shortDescription:
      "Bundelt informatie uit verschillende bronnen in eenduidige rapportages en dashboards.",
    description:
      "Monitoring en analytics brengen informatie uit verschillende systemen samen. Zo worden voortgang, mijlpalen, risico’s en andere stuurinformatie eenduidig en herhaalbaar inzichtelijk.",
    features: [
      "Informatie uit meerdere systemen bundelen",
      "Voortgang, mijlpalen en risico’s zichtbaar maken",
      "Eenduidige en herhaalbare rapportages opstellen",
      "Dashboards verversen zodra nieuwe informatie beschikbaar is",
      "Ondersteunen bij consistente sturing en bijsturing",
    ],
  },
];

export type CaseStudy = {
  slug: string;
  organization: string;
  sector: string;
  category: "GGZ" | "WLZ / VVT" | "Farmacovigilantie" | "IT & Servicedesk";
  title: string;
  shortDescription?: string;
  description: string;
  detailComplete: boolean;
  result?: string;
  quote?: string;
  quoteAuthor?: string;
  quoteRole?: string;
};

export const cases: CaseStudy[] = [
  {
    slug: "ivm-incidentmeldingen",
    organization: "Instituut Verantwoord Medicijngebruik (IVM)",
    sector: "Farmacovigilantie",
    category: "Farmacovigilantie",
    title: "Kwalitatieve en snelle terugkoppeling door AI",
    shortDescription:
      "Een AI-screeningsassistent classificeert circa 20.000 jaarlijkse incidentmeldingen automatisch en uniform.",
    description:
      "Het IVM verwerkt jaarlijks tienduizenden incidentmeldingen. Carecogni ontwikkelde een screeningsassistent op basis van Named Entity Recognition en een taalmodel die meldingen automatisch classificeert.",
    detailComplete: true,
    result: "Aanzienlijke tijdsbesparing per melding door AI-ondersteuning",
    quote:
      "Ik was vooraf wat sceptisch. Maar de PoC liet zien dat AI ook de complexe codeerinstructies goed kan uitvoeren op onze meldingen.",
    quoteAuthor: "Anneke Lambooij",
    quoteRole:
      "Apotheker en projectleider, Landelijk Meldpunt Medicatie-incidenten VMI",
  },
  {
    slug: "ai-care-assistant-ggz",
    organization: "Arkin",
    sector: "Langdurige zorg / GGZ",
    category: "GGZ",
    title: "AI Care Assistant om zorgmedewerkers te ontlasten",
    shortDescription:
      "Een chatbot ondersteunt cliënten met praktische vragen tijdens de wachttijd, behandeling en nazorg.",
    description:
      "Carecogni helpt Arkin bij de ontwikkeling van een AI-chatbot die cliënten ondersteunt met praktische vragen tijdens de wachttijd voor zorg, tijdens de behandeling en in de nazorg.",
    detailComplete: false,
  },
  {
    slug: "meerzorg-signalering",
    organization: "Samenwerkende VVT-instellingen",
    sector: "Langdurige zorg / WLZ",
    category: "WLZ / VVT",
    title: "AI detecteert en voorspelt meerzorgbehoefte",
    shortDescription:
      "Ongestructureerde zorgdossiers worden omgezet in signalen voor passende bekostiging en tijdige meerzorgaanvragen.",
    description:
      "Een NER-pipeline analyseert ongestructureerde zorgdossiers en zet relevante informatie om in gestructureerde data voor het herkennen van meerzorgbehoefte.",
    detailComplete: false,
  },
];

export function getSolution(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}

export function getCase(slug: string) {
  return cases.find((item) => item.slug === slug);
}
