export const NNTV_SCHEDULE = [
  { time: "09:00", title: "Maten Ayisyen", desc: "Magazine matinal", live: true },
  { time: "11:00", title: "MHAVE Répond", desc: "Questions citoyennes", live: false },
  { time: "14:00", title: "Kominote Nou", desc: "Actualités diaspora", live: false },
  { time: "16:30", title: "Entretien Ministre", desc: "Kathia Verdier", live: false },
  { time: "19:00", title: "Jounal NNTV", desc: "Journal télévisé", live: false },
  { time: "21:00", title: "Kiltirèl & Idantite", desc: "Patrimoine haïtien", live: false },
];

export const NNTV_EVENTS = [
  { icon: "🎤", title: "Journée Nationale de la Diaspora", date: "23 Avril 2025", lieu: "Port-au-Prince, Haïti", type: "Événement officiel", status: "Rediffusion disponible", color: "#B91C1C" },
  { icon: "🏛️", title: "Forum Diaspora & Développement", date: "12 Novembre 2024", lieu: "Miami, Florida", type: "Conférence", status: "Rediffusion disponible", color: "#1d4ed8" },
  { icon: "🎭", title: "Fête du Drapeau MHAVE Montréal", date: "18 Mai 2025", lieu: "Montréal, Canada", type: "Célébration culturelle", status: "À venir", color: "#0f766e" },
  { icon: "🎬", title: "Soirée Gala Diaspora Excellence", date: "30 Juin 2025", lieu: "New York, USA", type: "Gala", status: "À venir", color: "#7c3aed" },
  { icon: "📡", title: "Session MHAVE Questions-Réponses", date: "8 Juillet 2025", lieu: "En ligne — NNTV", type: "Webinaire", status: "Inscription ouverte", color: "#b45309" },
  { icon: "🌍", title: "Journée de la Culture Haïtienne", date: "Août 2025", lieu: "Paris, France", type: "Événement culturel", status: "À confirmer", color: "#047857" },
];

export const NNTV_SHOWS = [
  { icon: "🌅", show: "Maten Ayisyen", host: "Journaliste Marie-Claire Joseph", schedule: "Lun–Ven · 09h00–11h00 HAT", ep: "Épisode 142 — Renforcer les liens diaspora-patrie", desc: "Magazine matinal couvrant l'actualité haïtienne et internationale." },
  { icon: "🎤", show: "MHAVE Répond", host: "Équipe MHAVE", schedule: "Mercredi · 11h00–12h00 HAT", ep: "Épisode 38 — Vos questions sur les passeports DELIDOC", desc: "Questions citoyennes de la diaspora répondues en direct par les équipes MHAVE." },
  { icon: "🌍", show: "Kominote Nou", host: "Journaliste Pierre Sanon", schedule: "Lun–Ven · 14h00–15h00 HAT", ep: "Épisode 89 — La communauté haïtienne de Paris", desc: "Reportages sur les communautés haïtiennes à travers le monde." },
  { icon: "💼", show: "Diaspora & Business", host: "Économiste Jean-Baptiste", schedule: "Vendredi · 16h00–17h00 HAT", ep: "Épisode 24 — Investir dans l'agro-industrie haïtienne", desc: "Débats et conseils pour les entrepreneurs de la diaspora." },
  { icon: "🎭", show: "Kiltirèl & Idantite", host: "Prof. Anne-Marie Voltaire", schedule: "Dimanche · 20h00–21h30 HAT", ep: "Épisode 55 — Le carnaval haïtien, patrimoine vivant", desc: "Exploration du patrimoine culturel et de l'identité haïtienne." },
  { icon: "📰", show: "Jounal NNTV", host: "Rédaction NNTV", schedule: "Lun–Ven · 19h00–20h00 HAT", ep: "Édition du 11 Avril 2026", desc: "Journal télévisé officiel du MHAVE — actualités nationales et internationales." },
];

export const NNTV_VIDEOS = [
  { id: "v1", thumb: "https://images.unsplash.com/photo-1548516173-3bfa5305af8e?w=400&h=225&fit=crop", title: "Allocution Ministre Verdier — JND 2025", duration: "42 min", views: "12 400", date: "23 Avr 2025", cat: "Discours officiel", url: "/mediatheque/archives-video/v1", videoUrl: "https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761" },
  { id: "v2", thumb: "https://images.unsplash.com/photo-1596323393615-c1f02e2d2620?w=400&h=225&fit=crop", title: "Forum Investissement Diaspora 2024", duration: "1h 38min", views: "8 750", date: "12 Nov 2024", cat: "Conférence", url: "/mediatheque/archives-video/v2", videoUrl: "https://player.vimeo.com/external/451837698.sd.mp4?s=951453343591958d7ac49c0397f695a10925a636&profile_id=165&oauth2_token_id=57447761" },
  { id: "v3", thumb: "https://images.unsplash.com/photo-1526666923127-b2970f64b422?w=400&h=225&fit=crop", title: "Maten Ayisyen — Spécial 100e épisode", duration: "55 min", views: "6 200", date: "15 Mar 2025", cat: "Émission", url: "/mediatheque/archives-video/v3", videoUrl: "https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761" },
  { id: "v4", thumb: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400&h=225&fit=crop", title: "MHAVE Répond — Passeports DELIDOC", duration: "58 min", views: "9 100", date: "8 Jan 2025", cat: "Q&R citoyen", url: "/mediatheque/archives-video/v4", videoUrl: "https://player.vimeo.com/external/451837698.sd.mp4?s=951453343591958d7ac49c0397f695a10925a636&profile_id=165&oauth2_token_id=57447761" },
  { id: "v5", thumb: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=400&h=225&fit=crop", title: "Documentaire — 221 ans d'indépendance", duration: "1h 12min", views: "15 600", date: "1 Jan 2026", cat: "Documentaire", url: "/mediatheque/archives-video/v5", videoUrl: "https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761" },
  { id: "v6", thumb: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=225&fit=crop", title: "Kominote Nou — Haïtiens de Boston", duration: "44 min", views: "4 300", date: "20 Fév 2025", cat: "Reportage", url: "/mediatheque/archives-video/v6", videoUrl: "https://player.vimeo.com/external/451837698.sd.mp4?s=951453343591958d7ac49c0397f695a10925a636&profile_id=165&oauth2_token_id=57447761" },
] as const;

export const NNTV_ALBUMS = [
  { id: "a1", thumb: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop", album: "JND 2025 — Journée Nationale de la Diaspora", photos: 86, date: "23 Avr 2025", url: "/mediatheque/galerie/jnd-2025" },
  { id: "a2", thumb: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop", album: "Journée Portes Ouvertes MHAVE", photos: 54, date: "24 Avr 2025", url: "/mediatheque/galerie/portes-ouvertes" },
  { id: "a3", thumb: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=400&h=300&fit=crop", album: "Investiture Ministre Kathia Verdier", photos: 38, date: "Jan 2025", url: "/mediatheque/galerie/investiture" },
  { id: "a4", thumb: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop", album: "Forum Diaspora & Développement 2024", photos: 122, date: "Nov 2024", url: "/mediatheque/galerie/forum-2024" },
] as const;

export const NNTV_PRESS = [
  { id: "p1", icon: "📋", cat: "Directive", title: "Directive 001/IHSI/2026 — Politique Nationale de Gouvernance Électronique", date: "15 Jan 2026", org: "IHSI", urgent: true, url: "/mediatheque/communiques/p1" },
  { id: "p2", icon: "🎤", cat: "Communiqué", title: "Déclaration Ministre Verdier — 14e Journée Nationale de la Diaspora", date: "23 Avr 2025", org: "MHAVE", urgent: false, url: "/mediatheque/communiques/p2" },
  { id: "p3", icon: "📊", cat: "Rapport", title: "Rapport annuel MHAVE 2024 — Bilan des services rendus à la diaspora", date: "28 Fév 2025", org: "MHAVE", urgent: false, url: "/mediatheque/communiques/p3" },
  { id: "p4", icon: "📡", cat: "Note d'info", title: "Lancement du portail DELIDOC — Demande de passeport en ligne", date: "10 Mar 2025", org: "DIE / MHAVE", urgent: false, url: "/mediatheque/communiques/p4" },
] as const;

export const NNTV_TABS = [
  { id: "live", l: "🔴 DIRECT", d: "En cours" },
  { id: "events", l: "🗓️ ÉVÉNEMENTS", d: "Agenda" },
  { id: "shows", l: "🎙️ ÉMISSIONS", d: "Interviews" },
  { id: "vod", l: "🎬 VIDÉOTHÈQUE", d: "Archives" },
  { id: "photos", l: "📷 GALERIE", d: "Photos" },
  { id: "press", l: "📰 COMMUNIQUÉS", d: "Presse" },
] as const;
