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
  specs: { title: string; description: string }[];
};

export const solutions: Solution[] = [
  {
    slug: "agentic-ai-platform",
    icon: "🧠",
    name: "Agentic AI Platform & Digital Twin",
    shortName: "Agentic AI Platform",
    sector: "Platformtechnologie",
    tagline: "Het fundament voor schaalbare AI in uw zorginstelling",
    shortDescription:
      "Structureert data uit ECD, HR en IoT in een logisch zorgdatamodel voor gerichte AI-agents.",
    description:
      "Een schaalbaar platform gebouwd op een logisch zorgdatamodel. De Digital Twin structureert data uit ECD, HR, IoT en andere bronsystemen als kennisbasis voor gespecialiseerde AI-agents — direct inzetbaar voor elke zorginstelling.",
    features: [
      "Digital Twin Builder op basis van bestaande bronsystemen",
      "Agent-orchestratie en intelligente routing",
      "Koppelingen met ECD, HR, Zenya, AFAS en SharePoint",
      "Soevereine cloudoptie via Azure of private cloud",
      "Maatwerk-agents per instelling",
    ],
    specs: [
      {
        title: "Integraties",
        description: "ECD, HR-systemen, IoT, SharePoint, AFAS en Zenya",
      },
      {
        title: "Architectuur",
        description: "Multi-agent, schaalbaar en privacybewust",
      },
      {
        title: "Hosting",
        description: "Azure of soevereine private cloud",
      },
      {
        title: "Implementatietijd",
        description: "Typisch 4–8 weken voor de eerste agents",
      },
    ],
  },
  {
    slug: "ai-care-assistant",
    icon: "💬",
    name: "AI Care Assistant",
    shortName: "AI Care Assistant",
    sector: "Communicatie & kennismanagement",
    tagline: "Eén chatinterface voor al uw zorgsystemen",
    shortDescription:
      "Zorgprofessionals stellen vragen in gewone taal en krijgen direct betrouwbaar antwoord.",
    description:
      "Een gepersonaliseerde AI-assistent die via één chatinterface meerdere SaaS-applicaties ontsluit. Zorgprofessionals stellen vragen in gewone taal en krijgen direct betrouwbaar antwoord, zonder te schakelen tussen systemen.",
    features: [
      "RAG-chatbot voor zorgprofessionals op mobiel en desktop",
      "Domeinspecifieke agents voor HR, protocollen en cliëntdossiers",
      "Multi-source RAG met privacybewuste architectuur",
      "Integratie als widget in een bestaand portaal",
      "Sneller en voordeliger te implementeren dan Copilot Studio",
    ],
    specs: [
      {
        title: "Beschikbaarheid",
        description: "24/7, mobiel en desktop",
      },
      {
        title: "Integratie",
        description: "Widget in bestaand portaal of standalone",
      },
      {
        title: "Trainingstijd",
        description: "2–4 weken op eigen documentatie",
      },
      {
        title: "Databronnen",
        description: "FAQ’s, protocollen, zorgpaden en kennisbanken",
      },
    ],
  },
  {
    slug: "risicosignalering",
    icon: "🔍",
    name: "Risicosignalering & NER Agents",
    shortName: "Risicosignalering",
    sector: "Kwaliteit & veiligheid",
    tagline: "Automatische signalering uit ongestructureerde rapportages",
    shortDescription:
      "Herkent 30+ risicotypen in overdrachtsrapportages, van valrisico tot medicatietrouw.",
    description:
      "AI-agents die automatisch relevante signalen extraheren uit overdrachtsrapportages en verslagen. Van risico-indicatoren tot meerzorgsignalen: kritieke informatie wordt gestructureerd en zichtbaar voor de zorgprofessional.",
    features: [
      "Named Entity Recognition op overdrachtsrapportages",
      "Herkenning van 30+ signaaltypen",
      "Meerzorgindicatie-detectie en automatische notificaties",
      "Ondersteuning bij het schrijven van zorgplannen",
      "Dashboard per cliënt en per afdeling",
    ],
    specs: [
      {
        title: "Signaaltypen",
        description: "30+ typen, waaronder valrisico en medicatietrouw",
      },
      {
        title: "Input",
        description: "Rapportages, verslagen en vrije notities",
      },
      {
        title: "Output",
        description: "Gestructureerde data, dashboards en notificaties",
      },
      {
        title: "Modelkwaliteit",
        description: "Continu meetbaar en uitlegbaar per signaal",
      },
    ],
  },
  {
    slug: "voorspelmodellen",
    icon: "📈",
    name: "Voorspelmodellen",
    shortName: "Voorspelmodellen",
    sector: "Planning & capaciteit",
    tagline: "Betrouwbare voorspellingen op basis van uw eigen zorgdata",
    shortDescription:
      "Bewezen modellen ondersteunen beslissingen over nazorg, capaciteit en meerzorgaanvragen.",
    description:
      "AI-modellen die op basis van bestaande zorgdata voorspellingen doen over planning, nazorg en zorgcapaciteit. Van ontslagdatum tot meerzorgaanvraag — betrouwbaar, uitlegbaar en direct inzetbaar.",
    features: [
      "Nazorgvoorspelling voor orthopedie",
      "Voorspelling van benodigde zorgcapaciteit",
      "Detectie van meerzorgaanvraagsignalen",
      "Cliënttoewijzing aan het meest geschikte team",
      "Uitlegbare en herleidbare uitkomsten per model",
    ],
    specs: [
      {
        title: "Nauwkeurigheid",
        description: "Tot circa 90% bij ontslagdatumvoorspelling",
      },
      {
        title: "Uitlegbaarheid",
        description: "Volledige herleidbaarheid per voorspelling",
      },
      {
        title: "Databron",
        description: "Historische zorgdata uit ECD of BI",
      },
      {
        title: "Implementatietijd",
        description: "Typisch 6–10 weken",
      },
    ],
  },
  {
    slug: "monitoring-analytics",
    icon: "📊",
    name: "Real-time Monitoring & Agentic Analytics",
    shortName: "Monitoring & Analytics",
    sector: "Stuurinformatie & BI",
    tagline: "Live inzicht voor professionals, managers en bestuurders",
    shortDescription:
      "Interactieve dashboards combineren real-time stuurinformatie met een geïntegreerde AI-chat.",
    description:
      "Interactieve dashboards en datapipelines die zorgdata uit meerdere bronnen real-time verwerken en analyseren. Stuurinformatie is direct beschikbaar — inclusief geïntegreerde AI-chat.",
    features: [
      "Datakoppelingen en ETL-pipelines",
      "Hybride modellering van gestructureerde en vrije data",
      "Interactieve real-time dashboards",
      "Agentic dashboards met geïntegreerde AI-chat",
      "Implementatie in het bestaande BI-landschap",
    ],
    specs: [
      {
        title: "Doelgroepen",
        description: "Professionals, managers, bestuurders en verzekeraars",
      },
      {
        title: "BI-integratie",
        description: "Power BI, eigen dashboards of standalone",
      },
      {
        title: "Verversing",
        description: "Van real-time tot dagelijks",
      },
      {
        title: "AI-chat",
        description: "Geïntegreerde assistent voor datanavigatie",
      },
    ],
  },
  {
    slug: "iot-domotica",
    icon: "📡",
    name: "IoT & Domotica Agents",
    shortName: "IoT & Domotica",
    sector: "Slimme zorgomgeving",
    tagline: "Proactieve zorg op basis van sensoren en aanwezigheidsdata",
    shortDescription:
      "Verwerkt sensor- en domoticasignalen real-time en vertaalt deze naar proactieve zorginformatie.",
    description:
      "AI-agents die signalen van sensoren, domotica en aanwezigheidsdetectie real-time verwerken en vertalen naar proactieve zorginformatie. Zorgprofessionals worden automatisch geïnformeerd wanneer aandacht nodig is.",
    features: [
      "Integratie met domoticasystemen",
      "Real-time aanwezigheids- en bewegingsdetectie",
      "Proactieve alerts op basis van sensordata",
      "Koppeling met persoonsalarmering en noodoproepen",
      "Roadmap voor ambient listening en locatiebriefing",
    ],
    specs: [
      {
        title: "Sensorintegratie",
        description: "Domotica, beweging en aanwezigheidsdetectie",
      },
      {
        title: "Partnerkoppeling",
        description: "Integratie met bestaande zorgtechnologie",
      },
      {
        title: "Alerting",
        description: "Real-time en configureerbaar per afdeling",
      },
      {
        title: "Roadmap",
        description: "Ambient listening en locatiegebaseerde briefing",
      },
    ],
  },
];

export type CaseStudy = {
  organization: string;
  sector: string;
  category: "GGZ" | "WLZ / VVT" | "Farmacovigilantie" | "IT & Servicedesk";
  title: string;
  description: string;
  result: string;
  quote: string;
};

export const cases: CaseStudy[] = [
  {
    organization: "Instituut Verantwoord Medicijngebruik (IVM)",
    sector: "Farmacovigilantie",
    category: "Farmacovigilantie",
    title: "AI-screening van 20.000 medicatie-incidenten per jaar",
    description:
      "Het IVM verwerkt jaarlijks tienduizenden incidentmeldingen. Carecogni ontwikkelde een screeningsassistent op basis van Named Entity Recognition en een taalmodel die meldingen automatisch categoriseert en prioriteert.",
    result:
      "Significant minder tijd per melding · Hogere uniformiteit · Fundament voor opschaling",
    quote:
      "De AI herkent patronen die handmatig makkelijk gemist worden en geeft ruimte voor de echte analyse.",
  },
  {
    organization: "Grote GGZ-instelling",
    sector: "Langdurige zorg / GGZ",
    category: "GGZ",
    title: "AI Care Assistant voor cliënten en medewerkers",
    description:
      "Een AI Care Assistant, getraind op de eigen FAQ’s, protocollen en zorgpaden, is 24/7 beschikbaar als widget in de bestaande digitale omgeving.",
    result:
      "Minder routinevragen · Hogere cliënttevredenheid · Schaalbaar naar meerdere specialismen",
    quote:
      "Cliënten krijgen direct antwoord, ook buiten kantooruren. Dat geeft rust voor hen én voor het team.",
  },
  {
    organization: "Middelgrote WLZ-zorginstelling",
    sector: "Langdurige zorg / WLZ",
    category: "WLZ / VVT",
    title: "Automatische signalering van meerzorgkandidaten",
    description:
      "Een NER-pipeline analyseert ongestructureerde zorgdossiers en signaleert tijdig potentiële meerzorgkandidaten, vóór het verlopen van de aanvraagdeadline.",
    result:
      "Tijdige signalering · Minder gemiste bekostiging · Lagere administratieve last",
    quote:
      "We lopen niet meer achter de feiten aan. De signalen worden nu op tijd zichtbaar.",
  },
  {
    organization: "IT-dienstverlener in de zorg",
    sector: "IT & Servicedesk",
    category: "IT & Servicedesk",
    title: "NER-agent voor slimme ticketverwerking",
    description:
      "Een NER-agent classificeert, verrijkt en routeert servicedesktickets automatisch — als fundament voor BI-dashboards en een proactieve incidentagent.",
    result:
      "Snellere ticketanalyse · Minder handwerk · Fundament voor een schaalbare AI-roadmap",
    quote:
      "In korte tijd stond er een werkende pipeline waarop we nu gecontroleerd verder bouwen.",
  },
];

export function getSolution(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}
