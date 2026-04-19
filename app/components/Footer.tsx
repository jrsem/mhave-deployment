"use client";

import Image from "next/image";
import Link from "next/link";
import { LOGO } from "@/constants/logo";
import { C } from "@/constants/colors";
import {
  NAV_ROUTES,
  SERVICE_ROUTES,
  TILE_ROUTES,
} from "@/constants/routes";
import { NAV_LABELS, TILES } from "@/data/navigation";
import { Shield } from "../utils/index";
import { useState } from "react";

/* ─── Static data ─────────────────────────────────────────────────────────── */
export type Lang = "FR" | "HT" | "EN" | "ESP";


const SERVICE_LABELS: Record<Lang, readonly string[]> = {
  FR: ["Identité digitale (ONI)", "Passeports", "Archives nationales", "Légalisation"],
  HT: ["Idantite dijital (ONI)", "Paspo", "Achiv nasyonal", "Legalizasyon"],
  EN: ["Digital identity (ONI)", "Passports", "National archives", "Legalization"],
  ESP: ["Identidad digital (ONI)", "Pasaportes", "Archivos nacionales", "Legalización"],
} as const;

const SEARCH_LABEL: Record<Lang, string> = {
  FR: "Recherche",
  HT: "Chèch",
  EN: "Search",
  ESP: "Búsqueda",
};

const SECTION_TITLE: Record<Lang, { nav: string; services: string; themes: string; useful: string }> = {
  FR: { nav: "Navigation", services: "Services en ligne", themes: "Thématiques", useful: "Liens utiles" },
  HT: { nav: "Navigasyon", services: "Sèvis an liy", themes: "Tematik", useful: "Lyen itil" },
  EN: { nav: "Navigation", services: "Online services", themes: "Topics", useful: "Useful links" },
  ESP: { nav: "Navegación", services: "Servicios en línea", themes: "Temáticas", useful: "Enlaces útiles" },
};

// const EXTERNAL_LINKS: { href: string; label: Record<Lang, string> }[] = [
//   {
//     href: "https://delidoc.gouv.ht",
//     label: {
//       FR: "DELIDOC — Portail ONI & passeports",
//       HT: "DELIDOC — Pòtal ONI ak paspo",
//       EN: "DELIDOC — ONI & passport portal",
//       ESP: "DELIDOC — Portal ONI y pasaportes",
//     },
//   },
//   {
//     href: "https://delidoc.gouv.ht/ikat/fr",
//     label: {
//       FR: "Formulaire iKat (arrivée en Haïti)",
//       HT: "Fòmilè iKat (a rive an Ayiti)",
//       EN: "iKat form (arrival in Haiti)",
//       ESP: "Formulario iKat (llegada a Haití)",
//     },
//   },
// ];

/* ─── Shared class tokens ─────────────────────────────────────────────────── */

const HEADING =
  "text-md font-bold uppercase tracking-[0.18em] text-white/50 mb-3 pb-2.5 border-b border-white/10";

const NAV_LINK =
  "flex items-center gap-2 p-2 -mx-2 rounded text-sm leading-snug text-[#8fa3c8] hover:text-white  transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B91C1C]";

// const EXT_LINK =
//   "group flex items-center gap-2 py-2 px-2 -mx-2 rounded text-[12.5px] leading-snug text-[#8fa3c8] hover:text-[#fca5a5] hover:bg-white/8 transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B91C1C]";

/* ─── Component ───────────────────────────────────────────────────────────── */

export function Footer() {
  const [lang] = useState<Lang>("FR");
  const year = new Date().getFullYear();
  const navLabels = NAV_LABELS[lang];
  const tiles = TILES[lang];
  const titles = SECTION_TITLE[lang];

  return (
    <footer className="w-full text-cream bg-navy ">
      {/* ── Main wrapper ──────────────────────────────────────────────────── */}
      <div
        style={{
          margin: "0 auto",
          padding: "clamp(2.5rem, 5vw, 4rem) clamp(1.25rem, 4vw, 2.5rem)",
        }}
        className="container mb-0!"
      >
        {/* ── TOP ROW : identity | nav columns ──────────────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
            gap: "clamp(2rem, 4vw, 3rem)",
            alignItems: "start",
          }}
          className="w-full"
        >
          {/* ── Identity ─────────────────────────────────────────────────── */}
          <div style={{ gridColumn: "span 1" }}>
            {/* Logo + name */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.875rem" }}>
              <Image
                src={LOGO}
                alt="Sceau MHAVE"
                width={52}
                height={52}
                unoptimized
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  border: "2px solid rgba(255,255,255,0.2)",
                  objectFit: "cover",
                  flexShrink: 0,
                  marginTop: 2,
                }}
              />
              <div>
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    lineHeight: 1.4,
                    color: "#fff",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Ministère des Haïtiens<br />Vivant à l&apos;Étranger
                </p>
                <p
                  style={{
                    marginTop: 4,
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#fca5a5",
                    letterSpacing: "0.08em",
                  }}
                >
                  MHAVE
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="mt-2! text-[12px] text-[#7d93b8] leading-[1.2]">
              Portail officiel pour la diaspora haïtienne : services de l&apos;État,
              démarches administratives et ressources documentaires.
            </p>

            {/* Divider */}
            {/* <div
              style={{ height: 1, background: "rgba(255,255,255,0.08)", margin: "1.125rem 0" }}
            /> */}

            {/* Contact 
            <address style={{ fontStyle: "normal" }}>
              <p
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  color: "rgba(255,255,255,0.45)",
                  marginBottom: 4,
                }}
              >
                Siège
              </p>
              <p style={{ fontSize: 11.5, color: "#7d93b8", lineHeight: 1.5 }}>
                Route de Musseau, Port-au-Prince, Haïti
              </p>
              <a
                href="mailto:contact@mhave.gouv.ht"
                style={{
                  display: "inline-block",
                  marginTop: "0.625rem",
                  fontSize: 11.5,
                  color: "#fca5a5",
                  textDecoration: "none",
                }}
                className="hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B91C1C]"
              >
                contact@mhave.gouv.ht
              </a>
              <p style={{ marginTop: "0.5rem", fontSize: 11.5, color: "#7d93b8", lineHeight: 1.6 }}>
                Lun–Ven · 08h00–16h00 (HAT)<br />
                Tél. +509 2813-0000
              </p>
            </address> */}
          </div>

          {/* ── Navigation ───────────────────────────────────────────────── */}
          <nav aria-labelledby="footer-nav-heading">
            <h2 id="footer-nav-heading" className={HEADING}>
              {titles.nav}
            </h2>
            <ul style={{ listStyle: "none" }}>
              {NAV_ROUTES.map((href, i) => (
                <li key={href} className="mt-2!">
                  <Link href={href} className={NAV_LINK}>
                    {navLabels[i]}
                  </Link>
                </li>
              ))}
              {/* <li>
                <Link href={SEARCH_ROUTE} className={NAV_LINK}>
                  {SEARCH_LABEL[lang]}
                </Link>
              </li> */}
            </ul>
          </nav>

          {/* ── Services en ligne ─────────────────────────────────────────── */}
          <nav aria-labelledby="footer-services-heading">
            <h2 id="footer-services-heading" className={HEADING}>
              {titles.services}
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }} className="text-md!">
              {SERVICE_ROUTES.map((href, i) => (
                <li key={href} className="mt-2!">
                  <Link href={href} className={NAV_LINK}>
                    {SERVICE_LABELS[lang][i]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Thématiques ───────────────────────────────────────────────── */}
          <nav aria-labelledby="footer-themes-heading">
            <h2 id="footer-themes-heading" className={HEADING}>
              {titles.themes}
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {TILE_ROUTES.map((href, i) => (
                <li key={href} className="mt-2!">
                  <Link href={href} className={NAV_LINK}>
                    <span style={{ flexShrink: 0, fontSize: 14, lineHeight: 1 }} aria-hidden="true">
                      {tiles[i]?.icon}
                    </span>
                    <span>{tiles[i]?.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* ── USEFUL LINKS ──────────────────────────────────────────────────── 
        <div
          style={{
            marginTop: "clamp(2rem, 4vw, 3rem)",
            paddingTop: "clamp(1.5rem, 3vw, 2rem)",
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2 className={HEADING}>{titles.useful}</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
              gap: "0 2rem",
              marginTop: 4,
            }}
          >
            {EXTERNAL_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={EXT_LINK}
              >
                <span style={{ flex: 1 }}>{label[lang]}</span>
                <span
                  aria-hidden="true"
                  style={{ flexShrink: 0, opacity: 0.6, fontSize: 12 }}
                  className="transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                >
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div> */}

        {/* ── INFRASTRUCTURE BANNER ─────────────────────────────────────────── */}
        <div
          style={{
            marginTop: "clamp(2rem, 4vw, 3rem)",
            paddingTop: "clamp(1.5rem, 3vw, 2rem)",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <p
            style={{
              fontSize: 11.5,
              lineHeight: 1.7,
              color: "#7d93b8",
              maxWidth: 620,
              flex: "1 1 260px",
            }}
          >
            <span style={{ fontWeight: 700, color: "#fff" }}>MHAVE</span>
            {" — "}
            Ministère des Haïtiens Vivant à l&apos;Étranger. Données hébergées sur
            infrastructure souveraine, conformément à la Directive 001/IHSI/2026.
          </p>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: C.dark,
              borderRadius: 8,
              padding: "0.5rem 0.875rem",
              flexShrink: 0,
            }}
          >
            <Shield color={C.muted} size={13} />
            <span style={{ fontSize: 11, color: C.muted, whiteSpace: "nowrap" }}>
              Enfrastriktè Bare Metal Private Cloud
            </span>
          </div>
        </div>
      </div>

      {/* ── COPYRIGHT BAR ─────────────────────────────────────────────────────── */}
      {/* <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.07)",
          background: C.dark,
        }}
      >
        <div
          style={{
            maxWidth: 1152,
            margin: "0 auto",
            padding: "1rem clamp(1.25rem, 4vw, 2.5rem)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.375rem 1.5rem",
          }}
        >
          <p style={{ fontSize: 11, color: "#7d93b8", lineHeight: 1.5 }}>
            © {year}{" "}
            <span style={{ color: "rgba(255,255,255,0.85)" }}>
              République d&apos;Haïti · MHAVE
            </span>
            {" "}— Tous droits réservés.
          </p>
          <p style={{ fontSize: 10.5, color: "rgba(147,164,196,0.75)", lineHeight: 1.5 }}>
            mhave.gouv.ht — Portail sécurisé pour la diaspora haïtienne.
          </p>
        </div>
      </div> */}
    </footer>
  );
}

