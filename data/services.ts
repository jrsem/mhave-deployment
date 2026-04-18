import type { OfficialPortal, SvcData } from "@/types";


export const OFFICIAL_PORTALS: OfficialPortal[] = [
  {
    icon: "🪪",
    label: "DELIDOC — Identité ONI",
    sublabel: "Suivi de statut & doléances",
    desc: "Consultez votre statut NINU, suivez votre dossier ou déclarez une perte ou vol de carte.",
    color: "#6d28d9",
    url: "https://delidoc.gouv.ht/doleanceoni/Status",
  },
  {
    icon: "📘",
    label: "DELIDOC — Passeport",
    sublabel: "Demande & suivi de passeport",
    desc: "Déposez une nouvelle demande de passeport ou suivez l'avancement de votre dossier en ligne.",
    color: "#1d4ed8",
    url: "https://delidoc.gouv.ht/DemandePasseport",
  },
];

export const SVC_DATA: SvcData[] = [
  {
    icon: "mission",
    title: "Mission & Vision",
    color: "#059669",
    bg: "#fef2f2",
    headline: "Mission & Vision",
    intro:
      "Interface officielle entre le gouvernement haïtien et les 4 millions de membres de la diaspora répartis dans plus de 35 pays.",
    steps: [
      "Renforcer les liens Haïti-diaspora",
      "Faciliter l'accès aux services de l'État",
      "Promouvoir les investissements en Haïti",
      "Protéger les droits des Haïtiens à l'étranger",
      "Valoriser l'identité culturelle haïtienne",
    ],
    ctaLabel: "En savoir plus",
    ctaUrl: "/mission",
    cta2Label: "",
    cta2Url: "",
  },
  {
    icon: "organigramme",
    title: "Organigramme",
    color: "#3b82f6",
    bg: "#eff6ff",
    headline: "Organigramme",
    intro:
      "Dirigé par une Ministre, le MHAVE est structuré en plusieurs directions générales.",
    steps: [
      "Ministre — Kathia Verdier",
      "Direction Générale des Services Consulaires",
      "Direction des Relations avec la Diaspora",
      "Direction des Investissements et du Développement",
      "Direction Administrative et Financière",
      "Direction de la Communication",
    ],
    ctaLabel: "Voir l'organigramme",
    ctaUrl: "/organigramme",
    cta2Label: "",
    cta2Url: "",
  },
  {
    icon: "personnel",
    title: "Personnel MHAVE",
    color: "#22c55e",
    bg: "#f0fdf4",
    headline: "Personnel MHAVE",
    intro:
      "Plus de 200 agents répartis entre le siège à Musseau et les représentations diplomatiques.",
    steps: [
      "Siège central — Musseau, Port-au-Prince",
      "Représentation — Miami, Florida, USA",
      "Représentation — Montréal, Québec, Canada",
      "Représentation — Paris, France",
      "Représentation — Santo Domingo, RD",
      "Représentation — New York, USA",
    ],
    ctaLabel: "Voir le personnel",
    ctaUrl: "/personnel",
    cta2Label: "",
    cta2Url: "",
  },
  {
    icon: "cadre-legal",
    title: "Cadre légal",
    color: "#eab308",
    bg: "#fefce8",
    headline: "Cadre légal",
    intro:
      "Le MHAVE opère dans le cadre de la Constitution de 1987 et de la Directive 001/IHSI/2026.",
    steps: [
      "Constitution haïtienne de 1987 — Art. 12-1",
      "Décret portant création du MHAVE",
      "Directive 001/IHSI/2026 — Gouvernance Électronique",
      "Convention de Vienne sur les relations consulaires",
      "Accords bilatéraux de protection des ressortissants",
    ],
    ctaLabel: "Directive 001/IHSI/2026",
    ctaUrl: "/directive",
    cta2Label: "",
    cta2Url: "",
  },
];
