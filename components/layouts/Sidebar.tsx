"use client";

import { useState, useEffect } from "react";
import { C } from "@/constants/colors";
import { ChatModal } from "@/components/modals/ChatModal";
import { SuggestModal } from "@/components/modals/SuggestModal";

type Lang = "FR" | "HT" | "EN" | "ESP";

// SVG Icons
function ShareIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" y1="2" x2="12" y2="15" />
    </svg>
  );
}

function MessageIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function LightbulbIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M15.09 14c.18-.9.27-1.48.27-2.23A5.76 5.76 0 0 0 9.5 6.16a5.76 5.76 0 0 0-5.86 5.58c0 .75.09 1.33.27 2.23" />
      <path d="M12 2v2" />
      <path d="M4.22 4.22l1.42 1.42" />
      <path d="M19.78 4.22l-1.42 1.42" />
    </svg>
  );
}

function PrinterIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <polyline points="6 9 6 2 18 2 18 9" />
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <rect x="6" y="14" width="12" height="8" />
    </svg>
  );
}

function SlidersIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <line x1="4" y1="21" x2="4" y2="14" />
      <line x1="4" y1="10" x2="4" y2="3" />
      <line x1="12" y1="21" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12" y2="3" />
      <line x1="20" y1="21" x2="20" y2="16" />
      <line x1="20" y1="12" x2="20" y2="3" />
      <line x1="1" y1="14" x2="7" y2="14" />
      <line x1="9" y1="8" x2="15" y2="8" />
      <line x1="17" y1="16" x2="23" y2="16" />
    </svg>
  );
}

function XIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

const HERO_T: Record<Lang, { sidebar: string[]; shareCopied: string }> = {
  FR: {
    sidebar: ["PARTAGER", "CHAT", "SUGGESTIONS", "IMPRIMER"],
    shareCopied: "Lien copié !",
  },
  HT: {
    sidebar: ["PATAJE", "CHAT", "SIJESYON", "ENPRIME"],
    shareCopied: "Lyen kopye !",
  },
  EN: {
    sidebar: ["SHARE", "CHAT", "SUGGESTIONS", "PRINT"],
    shareCopied: "Link copied!",
  },
  ESP: {
    sidebar: ["COMPARTIR", "CHAT", "SUGERENCIAS", "IMPRIMIR"],
    shareCopied: "¡Enlace copiado!",
  },
};

const SIDEBAR_BTNS = [
  { id: "share", Icon: ShareIcon, bg: "#002060" },
  { id: "chat", Icon: MessageIcon, bg: "#B91C1C" },
  { id: "suggest", Icon: LightbulbIcon, bg: "#0f766e" },
  { id: "print", Icon: PrinterIcon, bg: "#374151" },
] as const;

interface SidebarProps {
  lang: Lang;
}

export function Sidebar({ lang }: SidebarProps) {
  const [chatOpen, setChatOpen] = useState(false);
  const [suggestOpen, setSuggestOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const labels = HERO_T[lang].sidebar;

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);
  const PEEK_PX = 56;
  const DRAWER_WIDTH_PX = 85;

  function handleClick(id: string) {
    if (id === "print") {
      window.print();
    } else if (id === "share") {
      if (navigator.share) {
        navigator.share({ title: "MHAVE", url: window.location.href });
      } else {
        navigator.clipboard
          .writeText(window.location.href)
          .then(() => alert(HERO_T[lang].shareCopied));
      }
    } else if (id === "chat") {
      setChatOpen(!chatOpen);
      setSuggestOpen(false);
    } else {
      setSuggestOpen(!suggestOpen);
      setChatOpen(false);
    }
  }

  return (
    <>
      <div
        style={{
          position: "fixed",
          right: 0,
          top: "50%",
          transform:
            isMobile && !mobileOpen
              ? `translate(${DRAWER_WIDTH_PX - PEEK_PX}px, -50%)`
              : "translate(0, -50%)",
          zIndex: 150,
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "stretch",
          }}
        >
          {/* Mobile toggle button */}
          {isMobile && (
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Fermer" : "Paramètres"}
              style={{
                border: "none",
                padding: "0 8px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                color: C.red,
              }}
            >
              {mobileOpen ? <XIcon size={20} /> : <SlidersIcon size={20} />}
            </button>
          )}
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {SIDEBAR_BTNS.map(({ id, Icon, bg }, i) => {
              const isActive =
                (chatOpen && id === "chat") ||
                (suggestOpen && id === "suggest");
              return (
                <button
                  key={id}
                  onClick={() => handleClick(id)}
                  style={{
                    background: isActive ? C.bord : bg,
                    color: C.white,
                    border: "none",
                    padding: "10px 6px",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: 1.2,
                    writingMode: "vertical-rl" as const,
                    textOrientation: "mixed" as const,
                    transform: "rotate(180deg)",
                    borderRadius:
                      i === 0 ? "6px 0 0 0" : i === 3 ? "0 0 0 6px" : "0",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    minHeight: 88,
                    justifyContent: "center",
                    transition: "background 200ms",
                  }}
                >
                  <span
                    style={{
                      transform: "rotate(180deg)",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Icon size={14} />
                  </span>
                  {labels[i]}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modals */}
      <ChatModal
        isOpen={chatOpen}
        onClose={() => setChatOpen(false)}
        lang={lang}
      />
      <SuggestModal
        isOpen={suggestOpen}
        onClose={() => setSuggestOpen(false)}
        lang={lang}
      />
    </>
  );
}
