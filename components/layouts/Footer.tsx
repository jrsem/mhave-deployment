"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { LOGO } from "@/constants/logo";


export default function Footer() {
  const t = useTranslations("Footer");
  const navItems = t.raw("navItems") as string[];
  const serviceItems = t.raw("serviceItems") as string[];
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
                  {t("ministryName")} <br />
                  {t("ministrySubtitle")}
                </h3>

                <span
                  style={{
                    fontSize: "12px",
                    color: "#f87171",
                    fontWeight: 600,
                  }}
                >
                  {t("acronym")}
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
              {t("description")}
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
              {t("navigationTitle")}
            </h4>

            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {navItems.map((item) => (
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
              {t("servicesTitle")}
            </h4>

            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {serviceItems.map((item) => (
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
            {t("copyright")}
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
            {t("infrastructureButton")}
          </button>
        </div>
      </div>
    </footer>
  );
}