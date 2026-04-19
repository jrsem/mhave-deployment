"use client";

import Image from "next/image";
import Link from "next/link";
import { LOGO } from "@/app/page";


export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0B2F6B",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "64px 24px",
        }}
      >
        {/* TOP GRID */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "48px",
            justifyContent: "space-between",
          }}
        >
          {/* LOGO + DESC */}
          <div style={{ maxWidth: "300px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  position: "relative",
                }}
              >
                <Image
                  src= {LOGO}
                  alt="MHAVE"
                  fill
                  style={{  objectFit: "cover", borderRadius: "50%", }}
                />
              </div>

              <div>
                <h3
                  style={{
                    fontWeight: 600,
                    fontSize: "14px",
                    lineHeight: "1.2",
                    margin: 0,
                  }}
                >
                  Ministère des Haïtiens <br />
                  Vivant à l'Étranger
                </h3>

                <span
                  style={{
                    fontSize: "12px",
                    color: "#f87171",
                    fontWeight: 600,
                  }}
                >
                  MHAVE
                </span>
              </div>
            </div>

            <p
              style={{
                fontSize: "14px",
                color: "#bfdbfe",
                lineHeight: "1.6",
              }}
            >
              Portail officiel pour la diaspora haïtienne : services de l'État,
              démarches administratives et ressources documentaires.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4
              style={{
                fontSize: "12px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#93c5fd",
                marginBottom: "16px",
                borderBottom: "1px solid rgba(147,197,253,0.3)",
                paddingBottom: "8px",
              }}
            >
              Navigation
            </h4>

            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "Accueil",
                "Présentation MHAVE",
                "Services",
                "Démarches admin",
                "Identité culturelle",
                "Médiathèque",
                "Contact",
              ].map((item) => (
                <li key={item} style={{ marginBottom: "8px" }}>
                  <Link
                    href="#"
                    style={{
                      fontSize: "14px",
                      color: "#dbeafe",
                      textDecoration: "none",
                    }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4
              style={{
                fontSize: "12px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#93c5fd",
                marginBottom: "16px",
                borderBottom: "1px solid rgba(147,197,253,0.3)",
                paddingBottom: "8px",
              }}
            >
              Services en ligne
            </h4>

            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "Identité digitale (ONI)",
                "Passeports",
                "Archives nationales",
                "Légalisation",
              ].map((item) => (
                <li key={item} style={{ marginBottom: "8px" }}>
                  <Link
                    href="#"
                    style={{
                      fontSize: "14px",
                      color: "#dbeafe",
                      textDecoration: "none",
                    }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* THEMATIQUES 
        <div style={{ marginTop: "48px" }}>
          <h4
            style={{
              fontSize: "12px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#93c5fd",
              marginBottom: "16px",
              borderBottom: "1px solid rgba(147,197,253,0.3)",
              paddingBottom: "8px",
              maxWidth: "400px",
            }}
          >
            Thématiques
          </h4>

          <ul
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "12px",
              fontSize: "14px",
              color: "#dbeafe",
              padding: 0,
              margin: 0,
              listStyle: "none",
            }}
          >
            <li>🏠 Vivre à l'étranger</li>
            <li>✈️ Venir en Haïti</li>
            <li>💰 Investir en Haïti</li>
            <li>🎧 MHAVE à l'écoute</li>
            <li>💼 Procédures MHAVE</li>
          </ul>
        </div> */}

        {/* BOTTOM */}
        <div
          style={{
            marginTop: "48px",
            paddingTop: "24px",
            borderTop: "1px solid rgba(147,197,253,0.2)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              color: "#93c5fd",
              maxWidth: "600px",
            }}
          >
            <span style={{ fontWeight: 600, color: "white" }}>
              MHAVE
            </span>{" "}
            — Ministère des Haïtiens Vivant à l'Étranger. Données hébergées sur
            infrastructure souveraine, conformément à la Directive 001/HSJ/2026.
          </p>

          <button
            style={{
              backgroundColor: "#0A2A5E",
              color: "white",
              fontSize: "14px",
              padding: "8px 16px",
              borderRadius: "6px",
              border: "none",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
            }}
          >
            🔒 Enfrekstriktè Bare Metal Private Cloud
          </button>
        </div>
      </div>
    </footer>
  );
}