export const HOME_ROUTE = "/";

export const NAV_ROUTES = [
  HOME_ROUTE,
  "/presentation",
  "/services",
  "/demarches",
  "/identite",
  "/mediatheque",
  "/contact",
] as const;

export const TILE_ROUTES = [
  "/vivre-a-letranger",
  "/venir-en-haiti",
  "/investir",
  "/mhave-a-l-ecoute",
  "/procedures",
] as const;

export const SERVICE_ROUTES = [
  "/services/identite-digitale",
  "/services/passeports",
  "/services/archives-nationales",
  "/services/legalisation",
] as const;

export const SEARCH_ROUTE = "/recherche";

export const MEDIATHEQUE_ROUTES = {
  archivesVideo: "/mediatheque/archives-video",
  galerie: "/mediatheque/galerie",
  communique: "/mediatheque/communiques",
  evenements: "/mediatheque/evenements",
  emissions: "/mediatheque/emissions",
} as const;
