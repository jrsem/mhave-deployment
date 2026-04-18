import type { Lang, NavPage } from "@/types";

export const LANGS: Lang[] = ["FR", "HT", "EN", "ESP"];

export const NAV_LABELS: Record<Lang, string[]> = {
  FR: ["ACCUEIL", "PRÉSENTATION MHAVE", "SERVICES", "DÉMARCHES ADMIN.", "IDENTITÉ CULTURELLE", "MÉDIATHÈQUE", "CONTACT"],
  HT: ["AKÈY", "PREZANTASYON MHAVE", "SÈVIS", "DEMACH ADMIN.", "IDANTITE KILTIRÈL", "MEDIATEQUE", "KONTAK"],
  EN: ["HOME", "ABOUT MHAVE", "SERVICES", "ADMIN PROCEDURES", "CULTURAL IDENTITY", "MÉDIATHÈQUE", "CONTACT"],
  ESP: ["INICIO", "PRESENTACIÓN MHAVE", "SERVICIOS", "TRÁMITES ADMIN.", "IDENTIDAD CULTURAL", "MEDIATECA", "CONTACTO"],
};

export const TILES: Record<Lang, { label: string; icon: string }[]> = {
  FR: [
    { label: "VIVRE À L'ÉTRANGER", icon: "🏠" },
    { label: "VENIR EN HAÏTI", icon: "✈️" },
    { label: "INVESTIR EN HAÏTI", icon: "💰" },
    { label: "MHAVE À L'ÉCOUTE", icon: "👂" },
    { label: "PROCÉDURES MHAVE", icon: "💼" },
  ],
  HT: [
    { label: "MAP VIV A LETRANJE", icon: "🏠" },
    { label: "MAP VINI AYITI", icon: "✈️" },
    { label: "ENVESTI AN AYITI", icon: "💰" },
    { label: "MHAVE AP KOUTE W", icon: "👂" },
    { label: "SÈVIS MHAVE", icon: "💼" },
  ],
  EN: [
    { label: "LIVING ABROAD", icon: "🏠" },
    { label: "COMING TO HAITI", icon: "✈️" },
    { label: "INVEST IN HAITI", icon: "💰" },
    { label: "MHAVE LISTENS", icon: "👂" },
    { label: "PROCEDURES", icon: "💼" },
  ],
  ESP: [
    { label: "VIVIR EN EXTERIOR", icon: "🏠" },
    { label: "VENIR A HAITÍ", icon: "✈️" },
    { label: "INVERTIR EN HAITÍ", icon: "💰" },
    { label: "MHAVE ESCUCHA", icon: "👂" },
    { label: "PROCEDIMIENTOS", icon: "💼" },
  ],
};

export const NAV_PAGES: (NavPage | null)[] = [
  null,
  {
    title: "Présentation du MHAVE",
    color: "#002060",
    sections: [
      {
        icon: "🎯",
        label: "Mission & Vision",
        content: "Le MHAVE est l'interface officielle entre le gouvernement haïtien et les 4 millions de membres de la diaspora répartis dans plus de 35 pays.",
        items: [
          "Renforcer les liens entre Haïti et sa diaspora",
          "Faciliter l'accès aux services de l'État depuis l'étranger",
          "Promouvoir les investissements de la diaspora en Haïti",
          "Protéger les droits des Haïtiens à l'étranger",
          "Valoriser l'identité culturelle haïtienne dans le monde",
        ],
      },
      {
        icon: "🏛️",
        label: "Organigramme",
        content: "Le MHAVE est dirigé par une Ministre et structuré en plusieurs directions générales.",
        items: [
          "Ministre — Kathia Verdier",
          "Direction Générale des Services Consulaires",
          "Direction des Relations avec la Diaspora",
          "Direction des Investissements et du Développement",
          "Direction Administrative et Financière",
          "Direction de la Communication",
        ],
      },
      {
        icon: "👥",
        label: "Personnel MHAVE",
        content: "Plus de 200 agents répartis entre le siège à Musseau et les représentations diplomatiques à travers le monde.",
        items: [
          "Siège central – Musseau, Port-au-Prince",
          "Représentation – Miami, Florida, USA",
          "Représentation – Montréal, Québec, Canada",
          "Représentation – Paris, France",
          "Représentation – Santo Domingo, RD",
          "Représentation – New York, USA",
        ],
      },
      {
        icon: "⚖️",
        label: "Cadre légal",
        content: "Le MHAVE opère dans le cadre de la Constitution de 1987 et de la Directive 001/IHSI/2026.",
        items: [
          "Constitution haïtienne de 1987 — Articles 12-1",
          "Décret portant création du MHAVE",
          "Directive 001/IHSI/2026 — Gouvernance Électronique",
          "Convention de Vienne sur les relations consulaires",
          "Accords bilatéraux de protection des ressortissants",
        ],
      },
    ],
  },
  {
    title: "Services aux citoyens",
    color: "#1d4ed8",
    sections: [
      {
        icon: "🪪",
        label: "Identité Digitale (NINU/ONI)",
        content: "Le NINU est l'identifiant officiel de chaque citoyen haïtien, géré par l'ONI.",
        items: [
          "Vérification NINU via DELIDOC ONI",
          "Première inscription ONI en ligne",
          "Déclaration de perte ou vol de carte",
          "Suivi de dossier en temps réel",
          "Lien : delidoc.gouv.ht/doleanceoni/Status",
        ],
        ctaLabel: "Accéder à DELIDOC ONI",
        ctaUrl: "https://delidoc.gouv.ht/doleanceoni/Status",
      },
      {
        icon: "📘",
        label: "Passeports — DELIDOC",
        content: "Déposez votre demande de passeport ou suivez votre dossier via DELIDOC Passeport.",
        items: [
          "Nouvelle demande de passeport en ligne",
          "Suivi de dossier avec numéro de référence",
          "Documents requis : NINU, acte de naissance, photo",
          "Délai moyen : 4–8 semaines",
          "Lien : delidoc.gouv.ht/DemandePasseport",
        ],
        ctaLabel: "DELIDOC — Passeport",
        ctaUrl: "https://delidoc.gouv.ht/DemandePasseport",
      },
      {
        icon: "✈️",
        label: "iKat — Formulaire d'Arrivée",
        content: "Le formulaire iKat est obligatoire pour toute personne entrant en Haïti.",
        items: [
          "À remplir avant votre arrivée en Haïti",
          "Collecte d'informations pour les autorités d'immigration",
          "Disponible en ligne 24h/24",
          "Gratuit et rapide (moins de 5 minutes)",
          "Lien : delidoc.gouv.ht/ikat/fr",
        ],
        ctaLabel: "Remplir le formulaire iKat",
        ctaUrl: "https://delidoc.gouv.ht/ikat/fr",
      },
      {
        icon: "📝",
        label: "Archives & Légalisation",
        content: "Extraits d'actes civils certifiés et légalisation de documents officiels.",
        items: [
          "Extrait d'acte de naissance, mariage, décès",
          "Apostille et légalisation consulaire",
          "Délai : 10–15 jours ouvrés",
          "Contact : archives@mhave.gouv.ht",
          "Reconnaissance des diplômes haïtiens",
        ],
        ctaLabel: "Demander un acte civil",
        ctaUrl: "mailto:archives@mhave.gouv.ht",
      },
    ],
  },
  {
    title: "Démarches Administratives",
    color: "#0f766e",
    sections: [
      {
        icon: "💰",
        label: "Opportunités d'investissement",
        content: "Haïti offre des opportunités dans l'agro-industrie, le tourisme, l'énergie renouvelable et le numérique.",
        items: [
          "Secteurs prioritaires identifiés par l'État",
          "Exonérations fiscales pour la diaspora",
          "Accompagnement juridique et administratif",
          "Réseau de partenaires locaux et internationaux",
          "Centre d'appui aux entrepreneurs de la diaspora",
        ],
        ctaLabel: "Explorer les opportunités",
        ctaUrl: "mailto:investissement@mhave.gouv.ht",
      },
      {
        icon: "📋",
        label: "Formulaires en ligne",
        content: "Téléchargez ou remplissez les formulaires administratifs du MHAVE et des institutions partenaires.",
        items: [
          "Formulaire de demande d'acte d'état civil",
          "Demande de légalisation de documents",
          "Formulaire de plainte ou réclamation",
          "Inscription au registre de la diaspora",
          "Demande de certificat de résidence à l'étranger",
        ],
        ctaLabel: "Accéder aux formulaires",
        ctaUrl: "mailto:formulaires@mhave.gouv.ht",
      },
      {
        icon: "🏛️",
        label: "Procédures consulaires",
        content: "Informations sur les démarches auprès des consulats haïtiens dans votre pays de résidence.",
        items: [
          "Trouver le consulat le plus proche",
          "Prise de rendez-vous en ligne",
          "Documents requis par type de service",
          "Tarifs consulaires en vigueur 2026",
          "Services d'urgence consulaire",
        ],
        ctaLabel: "Trouver un consulat",
        ctaUrl: "mailto:consulats@mhave.gouv.ht",
      },
    ],
  },
  {
    title: "Identité Culturelle Haïtienne",
    color: "#7c3aed",
    sections: [
      {
        icon: "🎭",
        label: "Patrimoine & Traditions",
        content: "Haïti est une nation riche d'une culture millénaire, première République noire libre du monde.",
        items: [
          "Carnaval national — février chaque année",
          "Fête du Drapeau — 18 mai",
          "Indépendance 1804 — 1er janvier",
          "Le vodou — patrimoine UNESCO",
          "La peinture naïve haïtienne",
          "La musique : kompa, rasin, twoubadou",
        ],
      },
      {
        icon: "🗣️",
        label: "Langue créole",
        content: "Le créole haïtien (kreyòl ayisyen) est l'une des deux langues officielles d'Haïti.",
        items: [
          "Cours de créole en ligne pour la diaspora",
          "Dictionnaire officiel kreyòl–français",
          "Ressources pédagogiques pour les enfants",
          "Événements culturels dans la diaspora",
          "Centres culturels haïtiens à l'étranger",
        ],
      },
      {
        icon: "🍽️",
        label: "Gastronomie haïtienne",
        content: "Griot, diri ak djon-djon, accra, tassot — des saveurs qui voyagent avec la diaspora.",
        items: [
          "Recettes traditionnelles haïtiennes",
          "Produits haïtiens exportés",
          "Restaurants haïtiens dans le monde",
          "Festivals gastronomiques de la diaspora",
          "Promotion de la cuisine haïtienne à l'UNESCO",
        ],
      },
    ],
  },
  null,
  {
    title: "Nous Contacter",
    color: "#374151",
    sections: [
      {
        icon: "🏛️",
        label: "Siège du MHAVE",
        content: "Le siège est situé à Musseau, Port-au-Prince. Disponible du lundi au vendredi de 8h00 à 16h00.",
        items: [
          "Adresse : Route de Musseau, Port-au-Prince",
          "Téléphone : +509 2813-0000",
          "Email : contact@mhave.gouv.ht",
          "Horaires : Lun–Ven, 08h00–16h00 HAT",
          "Accès GPS : 18.5558° N, 72.3348° W",
        ],
        ctaLabel: "Envoyer un email",
        ctaUrl: "mailto:contact@mhave.gouv.ht",
      },
      {
        icon: "🌐",
        label: "Répertoire consulaire",
        content: "Le MHAVE est représenté dans plus de 20 pays.",
        items: [
          "Miami (USA) — +1 305-859-4670",
          "New York (USA) — +1 212-477-6350",
          "Montréal (Canada) — +1 514-499-1919",
          "Paris (France) — +33 1 47 63 47 78",
          "Santo Domingo (RD) — +1 809-686-5778",
          "Genève (Suisse) — +41 22 716 00 00",
        ],
        ctaLabel: "Voir tous les consulats",
        ctaUrl: "mailto:consulats@mhave.gouv.ht",
      },
      {
        icon: "👂",
        label: "MHAVE à l'Écoute",
        content: "Notre centre d'appel reçoit vos doléances, suggestions et demandes d'information.",
        items: [
          "Centre d'appel : +509 2813-0001",
          "WhatsApp : +509 3700-0000",
          "Email : ecoute@mhave.gouv.ht",
          "Formulaire en ligne 24h/24",
          "Délai de réponse : 48–72 heures ouvrées",
        ],
        ctaLabel: "Soumettre une demande",
        ctaUrl: "mailto:ecoute@mhave.gouv.ht",
      },
    ],
  },
];
