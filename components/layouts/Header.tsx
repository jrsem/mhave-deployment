"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { Link as IntlLink } from "@/i18n/routing";
import { LOGO } from "@/constants/logo";
import { C } from "@/constants/colors";
import { NAV_LABELS, NAV_PAGES } from "@/data/navigation";

// Types
interface Section {
  icon: string;
  label: string;
  content?: string;
  items?: string[];
  ctaLabel?: string;
  ctaUrl?: string;
}

interface NavPage {
  title: string;
  color: string;
  sections: Section[];
}

type Lang = "FR" | "HT" | "EN" | "ESP";

const LANGS: Lang[] = ["FR", "HT", "EN", "ESP"];

// Mediatheque routes
const MEDIATHEQUE_ROUTES = {
  archivesVideo: "#archives-video",
  galerie: "#galerie",
  communique: "#communiques",
  evenements: "#evenements",
  emissions: "#emissions",
};

interface DropdownItem {
  label: string;
  href?: string;
  icon?: string;
  items?: string[];
}

interface NavDropdownProps {
  label: string;
  href: string;
  isActive: boolean;
  page: NavPage | null;
  lang: Lang;
}

// Chevron icon with rotation
function ChevronIcon({
  isOpen,
  size = 12,
}: {
  isOpen: boolean;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      style={{
        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
        transition: "transform 0.2s ease",
        flexShrink: 0,
      }}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

// Navigation Dropdown Component
function NavDropdown({ label, href, isActive, page, lang }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 100);
  };

  // Generate dropdown items based on page sections
  const getDropdownItems = (): DropdownItem[] => {
    if (!page) return [];
    return page.sections.map((sec: Section) => ({
      label: sec.label,
      href: sec.ctaUrl || href,
      icon: sec.icon,
      items: sec.items?.slice(0, 3),
    }));
  };

  // Special dropdown for Mediatheque (index 5)
  const getMediathequeItems = (): DropdownItem[] => [
    {
      label:
        lang === "FR"
          ? "Archives Vidéo"
          : lang === "HT"
            ? "Achiv Videyo"
            : lang === "EN"
              ? "Video Archives"
              : "Archivos de Video",
      href: MEDIATHEQUE_ROUTES.archivesVideo,
      icon: "🎬",
    },
    {
      label:
        lang === "FR"
          ? "Galerie Photos"
          : lang === "HT"
            ? "Galeri Foto"
            : lang === "EN"
              ? "Photo Gallery"
              : "Galería de Fotos",
      href: MEDIATHEQUE_ROUTES.galerie,
      icon: "📸",
    },
    {
      label:
        lang === "FR"
          ? "Communiqués"
          : lang === "HT"
            ? "Kominike"
            : lang === "EN"
              ? "Press Releases"
              : "Comunicados",
      href: MEDIATHEQUE_ROUTES.communique,
      icon: "📢",
    },
    {
      label:
        lang === "FR"
          ? "Événements"
          : lang === "HT"
            ? "Evenman"
            : lang === "EN"
              ? "Events"
              : "Eventos",
      href: MEDIATHEQUE_ROUTES.evenements,
      icon: "📅",
    },
    {
      label:
        lang === "FR"
          ? "Émissions"
          : lang === "HT"
            ? "Emisyon"
            : lang === "EN"
              ? "Broadcasts"
              : "Emisiones",
      href: MEDIATHEQUE_ROUTES.emissions,
      icon: "📺",
    },
  ];

  const dropdownItems =
    label.toLowerCase().includes("média") ||
    label.toLowerCase().includes("mediateque") ||
    label.toLowerCase().includes("mediateca")
      ? getMediathequeItems()
      : getDropdownItems();

  const hasDropdown = dropdownItems.length > 0;

  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={() => {
          if (href.startsWith("#")) {
            window.location.hash = href;
          } else {
            window.location.href = href;
          }
        }}
        style={{
          background: "none",
          border: "none",
          borderBottom: isActive
            ? `2px solid ${C.bord}`
            : "2px solid transparent",
          color: isActive ? C.white : C.muted,
          fontSize: 10,
          fontWeight: isActive ? 700 : 400,
          padding: "8px 9px",
          cursor: "pointer",
          fontFamily: "inherit",
          whiteSpace: "nowrap",
          display: "flex",
          alignItems: "center",
          gap: 3,
        }}
      >
        {label}
        {hasDropdown && <ChevronIcon isOpen={isOpen} size={10} />}
      </button>

      {/* Dropdown Menu */}
      {hasDropdown && isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            marginTop: "4px",
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0 10px 40px rgba(0,32,96,0.15)",
            border: "1px solid #f3f4f6",
            padding: "8px 0",
            minWidth: "280px",
            zIndex: 50,
            animation: "dropdownSlide 0.2s ease-out",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Dropdown header with gradient */}
          {page && (
            <div
              style={{
                padding: "12px 16px",
                marginBottom: "8px",
                background: `linear-gradient(135deg, ${page.color}15, ${page.color}08)`,
                borderBottom: `2px solid ${page.color}`,
              }}
            >
              <span
                style={{ fontSize: "14px", fontWeight: 700, color: page.color }}
              >
                {page.title}
              </span>
            </div>
          )}

          {/* Dropdown items */}
          <div style={{ padding: "0 8px" }}>
            {dropdownItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  const targetUrl = item.href || href;
                  if (targetUrl.startsWith("#")) {
                    window.location.hash = targetUrl;
                  } else {
                    window.location.href = targetUrl;
                  }
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "10px 12px",
                  borderRadius: "6px",
                  transition: "background-color 0.12s",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  width: "100%",
                  textAlign: "left",
                }}
              >
                {item.icon && (
                  <span style={{ fontSize: "18px" }}>{item.icon}</span>
                )}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#374151",
                      display: "block",
                    }}
                  >
                    {item.label}
                  </span>
                  {item.items && item.items.length > 0 && (
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#9ca3af",
                        display: "block",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.items[0]}
                    </span>
                  )}
                </div>
                <svg
                  width={14}
                  height={14}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={{ color: "#d1d5db", flexShrink: 0 }}
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            ))}
          </div>

          {/* Dropdown footer */}
          <div
            style={{
              marginTop: "8px",
              padding: "8px 16px",
              borderTop: "1px solid #f3f4f6",
              background: "rgba(0,32,96,0.02)",
            }}
          >
            <button
              onClick={() => {
                if (href.startsWith("#")) {
                  window.location.hash = href;
                } else {
                  window.location.href = href;
                }
              }}
              style={{
                fontSize: "12px",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: "4px",
                color: C.navy,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              {lang === "FR"
                ? "Voir tout"
                : lang === "HT"
                  ? "Wè tout"
                  : lang === "EN"
                    ? "See all"
                    : "Ver todo"}
              <svg
                width={12}
                height={12}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes dropdownSlide {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

// Mobile menu icon
function MenuIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M3 12h18M3 6h18M3 18h18" />
    </svg>
  );
}

// Close icon
function CloseIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

// Main Header Component
export function Header() {
  const params = useParams();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {},
  );
  const [windowWidth, setWindowWidth] = useState<number>(1024);

  // Get current language from URL params
  const locale = (params?.locale as string) || "fr";
  const langMap: Record<string, Lang> = {
    fr: "FR",
    ht: "HT",
    en: "EN",
    es: "ESP",
  };
  const currentLang: Lang = langMap[locale] || "FR";

  const nav = NAV_LABELS[currentLang];

  // Navigation routes matching NAV_LABELS order
  const navRoutes = [
    "/",
    "#presentation",
    "#services",
    "#demarches",
    "#identite",
    "#mediatheque",
    "#contact",
  ];

  const toggleMobileItem = (index: number) => {
    setExpandedItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isDesktop = windowWidth >= 1024;
  const isTablet = windowWidth >= 640;

  return (
    <header
      style={{
        background: C.navy,
        padding: "10px 18px",
        borderBottom: `3px solid ${C.bord}`,
        position: "sticky",
        top: 0,
        zIndex: 99,
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        {/* Logo and Title */}
        <Link href="/">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              flexShrink: 0,
            }}
          >
            <Image
              src={LOGO}
              alt="Sceau MHAVE"
              width={48}
              height={48}
              unoptimized
              style={{
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid rgba(255,255,255,0.25)",
                flexShrink: 0,
              }}
            />
            <div style={{ display: isTablet ? "block" : "none" }}>
              <div
                style={{
                  color: C.white,
                  fontSize: 13,
                  fontWeight: 700,
                  lineHeight: 1.25,
                }}
              >
                Ministère des Haïtiens
              </div>
              <div
                style={{
                  color: C.white,
                  fontSize: 13,
                  fontWeight: 700,
                  lineHeight: 1.25,
                }}
              >
                Vivant à l&apos;Étranger{" "}
                <span style={{ color: "#fca5a5" }}>MHAVE</span>
              </div>
              <div style={{ color: C.muted, fontSize: 8, marginTop: 1 }}>
                mhave.gouv.ht
              </div>
            </div>
          </div>
        </Link>
        {/* Mobile title - simplified */}
        <div
          style={{
            display: isTablet ? "none" : "block",
            color: C.white,
            fontSize: 14,
            fontWeight: 700,
          }}
        >
          MHAVE
        </div>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: isDesktop ? "flex" : "none",
            flexWrap: "wrap",
            gap: 0,
          }}
        >
          {nav.map((item, i) => {
            const route = navRoutes[i];
            const isActive =
              pathname === route ||
              (route !== "/" && pathname?.startsWith(route));
            const page = NAV_PAGES[i];

            return (
              <NavDropdown
                key={i}
                label={item}
                href={route}
                isActive={isActive}
                page={page}
                lang={currentLang}
              />
            );
          })}
        </nav>

        {/* Language Selector */}
        <div style={{ display: isDesktop ? "flex" : "none", gap: 3 }}>
          {LANGS.map((l) => {
            const localeMap: Record<Lang, string> = {
              FR: "fr",
              HT: "ht",
              EN: "en",
              ESP: "es",
            };
            const isActive = currentLang === l;
            return (
              <IntlLink
                key={l}
                href="/"
                locale={localeMap[l]}
                style={{
                  background: isActive ? C.bord : "transparent",
                  border: `1px solid ${isActive ? C.bord : "#375080"}`,
                  color: C.white,
                  fontSize: 10,
                  fontWeight: isActive ? 700 : 400,
                  padding: "3px 7px",
                  borderRadius: 4,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  textDecoration: "none",
                }}
              >
                {l}
              </IntlLink>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: isDesktop ? "none" : "flex",
            background: "transparent",
            border: "none",
            color: C.white,
            cursor: "pointer",
            padding: 8,
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "auto",
          }}
          aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            display: isDesktop ? "none" : "block",
            marginTop: 12,
            paddingTop: 12,
            borderTop: `1px solid rgba(255,255,255,0.1)`,
          }}
        >
          {/* Mobile Navigation Items */}
          <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {nav.map((item, i) => {
              const route = navRoutes[i];
              const page = NAV_PAGES[i];
              const isExpanded = expandedItems[i];
              const hasChildren = page && page.sections.length > 0;

              return (
                <div key={i}>
                  {hasChildren ? (
                    <button
                      onClick={() => toggleMobileItem(i)}
                      style={{
                        background: "none",
                        border: "none",
                        color: C.white,
                        fontSize: 13,
                        fontWeight: 500,
                        padding: "10px 12px",
                        cursor: "pointer",
                        fontFamily: "inherit",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                        borderRadius: 4,
                        textAlign: "left",
                      }}
                    >
                      <span>{item}</span>
                      <ChevronIcon isOpen={isExpanded} size={14} />
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        if (route.startsWith("#")) {
                          window.location.hash = route;
                        } else {
                          window.location.href = route;
                        }
                        setMobileMenuOpen(false);
                      }}
                      style={{
                        background: "none",
                        border: "none",
                        color: C.white,
                        fontSize: 13,
                        fontWeight: 500,
                        padding: "10px 12px",
                        cursor: "pointer",
                        fontFamily: "inherit",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                        borderRadius: 4,
                        textAlign: "left",
                      }}
                    >
                      <span>{item}</span>
                    </button>
                  )}

                  {/* Mobile Dropdown Items */}
                  {hasChildren && isExpanded && (
                    <div
                      style={{
                        marginLeft: 16,
                        marginTop: 4,
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        borderLeft: `2px solid ${C.bord}`,
                        paddingLeft: 12,
                      }}
                    >
                      {page.sections.map((section: Section, idx: number) => (
                        <button
                          key={idx}
                          onClick={() => {
                            const targetUrl = section.ctaUrl || route;
                            if (targetUrl.startsWith("#")) {
                              window.location.hash = targetUrl;
                            } else {
                              window.location.href = targetUrl;
                            }
                            setMobileMenuOpen(false);
                          }}
                          style={{
                            background: "none",
                            border: "none",
                            color: C.muted,
                            fontSize: 12,
                            padding: "8px 10px",
                            cursor: "pointer",
                            fontFamily: "inherit",
                            textAlign: "left",
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            borderRadius: 4,
                          }}
                        >
                          <span>{section.icon}</span>
                          <span>{section.label}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Mobile Language Selector */}
          <div
            style={{
              marginTop: 16,
              paddingTop: 12,
              borderTop: `1px solid rgba(255,255,255,0.1)`,
              display: "flex",
              gap: 8,
              justifyContent: "center",
            }}
          >
            {LANGS.map((l) => {
              const localeMap: Record<Lang, string> = {
                FR: "fr",
                HT: "ht",
                EN: "en",
                ESP: "es",
              };
              const isActive = currentLang === l;
              return (
                <IntlLink
                  key={l}
                  href="/"
                  locale={localeMap[l]}
                  style={{
                    background: isActive ? C.bord : "transparent",
                    border: `1px solid ${isActive ? C.bord : "#375080"}`,
                    color: C.white,
                    fontSize: 12,
                    fontWeight: isActive ? 700 : 400,
                    padding: "6px 12px",
                    borderRadius: 4,
                    cursor: "pointer",
                    fontFamily: "inherit",
                    textDecoration: "none",
                  }}
                >
                  {l}
                </IntlLink>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
