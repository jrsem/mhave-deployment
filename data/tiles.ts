import type { TileData } from "@/types";

export const TILE_DATA: TileData[] = [
  {
    color: "#1d4ed8",
    label: "VIVRE À L'ÉTRANGER",
    icon: "🏠",
    headline: "Tout ce qu'il faut savoir pour vivre à l'étranger en tant qu'Haïtien",
    intro:
      "Des millions d'Haïtiens vivent à l'étranger. Le MHAVE est votre point de contact officiel pour protéger vos droits, faciliter vos démarches et maintenir votre lien avec Haïti.",
    sections: [
      { icon: "📋", title: "Formalités administratives", items: ["Renouvellement de passeport via DELIDOC", "Inscription au registre consulaire de la diaspora", "Procuration et actes notariés à distance", "Déclaration de résidence à l'étranger", "Documents d'état civil certifiés à distance"] },
      { icon: "⚖️", title: "Droits et protections", items: ["Protection consulaire en cas d'urgence", "Assistance juridique pour les ressortissants", "Droits successoraux pour les biens en Haïti", "Accès aux services sociaux haïtiens", "Urgence : +509 2813-0000 (24h/24)"] },
      { icon: "🔗", title: "Rester connecté à Haïti", items: ["Portail e-gov MHAVE — services en ligne", "Newsletter mensuelle de la diaspora", "Groupes communautaires officiels MHAVE", "Événements culturels dans votre pays", "Programme de retour volontaire en Haïti"] },
    ],
    ctaLabel: "S'inscrire au registre consulaire",
    ctaUrl: "mailto:registre@mhave.gouv.ht",
  },
  {
    color: "#0f766e",
    label: "VENIR EN HAÏTI",
    icon: "✈️",
    headline: "Préparez votre voyage ou votre retour en Haïti",
    intro:
      "Que vous visitiez Haïti ou envisagiez un retour définitif, le MHAVE vous accompagne dans toutes vos démarches d'immigration, de douanes et d'installation.",
    sections: [
      { icon: "🛂", title: "iKat — Formulaire Digital d'Arrivée", items: ["Formulaire obligatoire pour TOUTE personne entrant en Haïti", "À remplir en ligne avant votre arrivée", "Gratuit et rapide (moins de 5 minutes)", "Disponible à : delidoc.gouv.ht/ikat/fr", "Collecte d'informations pour les autorités d'immigration"] },
      { icon: "🧳", title: "Douanes & Bagages", items: ["Franchise douanière diaspora : jusqu'à $800 USD", "Importation de véhicules — procédures et taxes", "Envoi de marchandises depuis l'étranger (barrel)", "Déclaration de devises > $10 000 USD", "Contact AGD : douanes.gouv.ht"] },
      { icon: "🏡", title: "Installation & Retour", items: ["Programme d'accompagnement au retour MHAVE", "Logement temporaire pour diaspora retournante", "Accès aux services de santé publique", "Inscription scolaire pour enfants retournants", "Réseau de soutien à la réinsertion professionnelle"] },
    ],
    ctaLabel: "Préparer mon voyage en Haïti",
    ctaUrl: "https://immigration.gouv.ht",
    cta2Label: "Remplir le formulaire iKat",
    cta2Url: "https://delidoc.gouv.ht/ikat/fr",
  },
  {
    color: "#b45309",
    label: "INVESTIR EN HAÏTI",
    icon: "💰",
    headline: "Investissez dans l'avenir d'Haïti avec le soutien du MHAVE",
    intro:
      "La diaspora haïtienne représente plus de 3,8 milliards USD de transferts annuels. Le MHAVE vous accompagne pour transformer cette force en investissements durables.",
    sections: [
      { icon: "🏭", title: "Secteurs prioritaires", items: ["Agro-industrie & transformation alimentaire", "Tourisme & hôtellerie", "Énergie renouvelable (solaire, éolien)", "Services numériques & fintech", "Textile & manufactures", "Éducation & santé privée"] },
      { icon: "💼", title: "Incitations fiscales", items: ["Exonération de droits douaniers sur équipements", "Congé fiscal de 5 à 15 ans selon secteur", "Rapatriement libre des profits", "Accès aux zones franches industrielles", "Protection des investissements par la loi"] },
      { icon: "🤝", title: "Accompagnement MHAVE", items: ["Mise en relation avec partenaires locaux", "Assistance dans les démarches légales", "Accès aux financements (BRH, SOFIHDES)", "Réseau d'entrepreneurs de la diaspora", "Ateliers d'investissement MHAVE"] },
    ],
    ctaLabel: "Soumettre un projet d'investissement",
    ctaUrl: "mailto:investissement@mhave.gouv.ht",
  },
  {
    color: "#7c3aed",
    label: "MHAVE À L'ÉCOUTE",
    icon: "👂",
    headline: "Le MHAVE est à l'écoute de la diaspora haïtienne",
    intro:
      "MHAVE à l'Écoute est notre centre dédié à la réception des doléances, plaintes, suggestions et demandes d'information. Votre voix est importante.",
    sections: [
      { icon: "📞", title: "Nous contacter", items: ["Centre d'appel : +509 2813-0001 (Lun–Ven 8h–16h)", "WhatsApp : +509 3700-0000", "Email : ecoute@mhave.gouv.ht", "Formulaire en ligne : disponible 24h/24", "Délai de réponse garanti : 48–72h ouvrées"] },
      { icon: "📝", title: "Types de demandes", items: ["Doléances concernant les services consulaires", "Signalement de problèmes administratifs", "Suggestions d'amélioration des services", "Demandes d'information sur les démarches", "Urgences consulaires (passeport, détention, décès)"] },
      { icon: "📊", title: "Notre engagement", items: ["100% des messages reçoivent une réponse", "Rapport trimestriel public des doléances", "Amélioration continue basée sur vos retours", "Protection de la confidentialité RGPD", "Conformité Directive 001/IHSI/2026"] },
    ],
    ctaLabel: "Soumettre une demande",
    ctaUrl: "mailto:ecoute@mhave.gouv.ht",
  },
  {
    color: "#374151",
    label: "PROCÉDURES MHAVE",
    icon: "💼",
    headline: "Guide complet des procédures administratives du MHAVE",
    intro:
      "Formulaires à télécharger, délais de traitement, documents requis et contacts des services compétents pour chaque démarche administrative.",
    sections: [
      { icon: "📄", title: "Formulaires disponibles", items: ["Demande d'acte d'état civil (PDF)", "Demande de légalisation de documents (PDF)", "Inscription au registre de la diaspora (en ligne)", "Formulaire de plainte ou réclamation (PDF)", "Demande de certificat consulaire (en ligne)"] },
      { icon: "⏱️", title: "Délais de traitement", items: ["Acte d'état civil : 10–15 jours ouvrés", "Légalisation / apostille : 5–10 jours ouvrés", "Inscription consulaire : immédiate en ligne", "Passeport DELIDOC : 4–8 semaines", "Réponse MHAVE à l'Écoute : 48–72h"] },
      { icon: "📬", title: "Envoi de dossiers", items: ["Par email : formulaires@mhave.gouv.ht", "Par courrier : Route de Musseau, Port-au-Prince", "En personne : consulat haïtien le plus proche", "En ligne via le portail DELIDOC", "WhatsApp suivi : +509 3700-0000"] },
    ],
    ctaLabel: "Télécharger les formulaires",
    ctaUrl: "mailto:formulaires@mhave.gouv.ht",
  },
];
