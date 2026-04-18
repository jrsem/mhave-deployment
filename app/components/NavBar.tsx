"use client"
import { useState, useRef, useEffect, useCallback } from "react";

interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

const NAV_ITEMS: NavItem[] = [
  {
    label: "Products",
    children: [
      {
        label: "Design Tools",
        children: [
          { label: "Figma Plugin", href: "#" },
          { label: "Sketch Integration", href: "#" },
          { label: "Adobe XD Export", href: "#" },
        ],
      },
      {
        label: "Developer Tools",
        children: [
          { label: "VS Code Extension", href: "#" },
          { label: "CLI Tool", href: "#" },
          { label: "GitHub Actions", href: "#" },
        ],
      },
      { label: "Mobile App", href: "#" },
      { label: "Desktop App", href: "#" },
    ],
  },
  {
    label: "Solutions",
    children: [
      { label: "Enterprise", href: "#" },
      { label: "Startups", href: "#" },
      {
        label: "Industries",
        children: [
          { label: "Healthcare", href: "#" },
          { label: "Finance", href: "#" },
          { label: "Education", href: "#" },
          { label: "Retail", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "Documentation", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Community", href: "#" },
      {
        label: "Support",
        children: [
          { label: "Help Center", href: "#" },
          { label: "Contact Us", href: "#" },
          { label: "Status Page", href: "#" },
        ],
      },
    ],
  },
  { label: "Pricing", href: "#" },
  { label: "About", href: "#" },
];

interface DropdownMenuProps {
  items: NavItem[];
  depth: number;
  onClose: () => void;
}

function DropdownMenu({ items, depth, onClose }: DropdownMenuProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveIndex(null), 120);
  };

  return (
    <ul
      style={{
        position: "absolute",
        top: depth === 0 ? "calc(100% + 8px)" : "0",
        left: depth === 0 ? "0" : "100%",
        minWidth: "200px",
        background: "var(--color-background-primary)",
        border: "0.5px solid var(--color-border-secondary)",
        borderRadius: "var(--border-radius-lg)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
        padding: "6px",
        margin: 0,
        listStyle: "none",
        zIndex: 1000 + depth * 10,
        animation: "fadeIn 0.15s ease",
      }}
    >
      {items.map((item, i) => (
        <li
          key={i}
          style={{ position: "relative" }}
          onMouseEnter={() => item.children && handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
        >
          {item.href ? (
            <a
              href={item.href}
              onClick={onClose}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px 12px",
                color: "var(--color-text-primary)",
                textDecoration: "none",
                fontSize: "14px",
                borderRadius: "var(--border-radius-md)",
                transition: "background 0.12s",
                gap: "8px",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background =
                  "var(--color-background-secondary)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "")
              }
            >
              {item.label}
            </a>
          ) : (
            <button
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                padding: "8px 12px",
                color: "var(--color-text-primary)",
                background:
                  activeIndex === i
                    ? "var(--color-background-secondary)"
                    : "transparent",
                border: "none",
                fontSize: "14px",
                borderRadius: "var(--border-radius-md)",
                cursor: "pointer",
                textAlign: "left",
                transition: "background 0.12s",
                gap: "8px",
              }}
            >
              <span>{item.label}</span>
              {item.children && (
                <ChevronRight size={14} />
              )}
            </button>
          )}

          {item.children && activeIndex === i && (
            <DropdownMenu
              items={item.children}
              depth={depth + 1}
              onClose={onClose}
            />
          )}
        </li>
      ))}
    </ul>
  );
}

function ChevronRight({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      style={{ flexShrink: 0, color: "var(--color-text-secondary)" }}
    >
      <path
        d="M6 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronDown({ size = 16, open }: { size?: number; open: boolean }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      style={{
        flexShrink: 0,
        transition: "transform 0.2s ease",
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
        color: "var(--color-text-secondary)",
      }}
    >
      <path
        d="M4 6l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path
        d="M3 5h14M3 10h14M3 15h14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path
        d="M4 4l12 12M16 4L4 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

interface MobileNavItemProps {
  item: NavItem;
  depth: number;
}

function MobileNavItem({ item, depth }: MobileNavItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <li>
      {item.children ? (
        <>
          <button
            onClick={() => setOpen((o) => !o)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              padding: `10px ${16 + depth * 16}px`,
              background: "transparent",
              border: "none",
              fontSize: depth === 0 ? "15px" : "14px",
              fontWeight: depth === 0 ? 500 : 400,
              color: "var(--color-text-primary)",
              cursor: "pointer",
              textAlign: "left",
              borderRadius: "var(--border-radius-md)",
            }}
          >
            <span>{item.label}</span>
            <ChevronDown size={14} open={open} />
          </button>
          {open && (
            <ul style={{ margin: 0, padding: "2px 0", listStyle: "none" }}>
              {item.children.map((child, i) => (
                <MobileNavItem key={i} item={child} depth={depth + 1} />
              ))}
            </ul>
          )}
        </>
      ) : (
        <a
          href={item.href}
          style={{
            display: "block",
            padding: `10px ${16 + depth * 16}px`,
            fontSize: depth === 0 ? "15px" : "14px",
            fontWeight: depth === 0 ? 500 : 400,
            color:
              depth > 0
                ? "var(--color-text-secondary)"
                : "var(--color-text-primary)",
            textDecoration: "none",
            borderRadius: "var(--border-radius-md)",
          }}
        >
          {item.label}
        </a>
      )}
    </li>
  );
}

export default function NavBar() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveIndex(null), 150);
  };

  const handleClose = useCallback(() => {
    setActiveIndex(null);
    setMobileOpen(false);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        handleClose();
      }
    };
    document.addEventListener("keydown", handleKey);
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("mousedown", handleClick);
    };
  }, [handleClose]);

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (min-width: 768px) {
          .mobile-only { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-only { display: none !important; }
        }
      `}</style>

      <nav
        ref={navRef}
        style={{
          background: "var(--color-background-primary)",
          borderBottom: "0.5px solid var(--color-border-tertiary)",
          position: "relative",
          zIndex: 100,
          fontFamily: "var(--font-sans)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            height: "60px",
            gap: "32px",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "8px",
                background: "var(--color-text-primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="2" width="5" height="5" rx="1" fill="white" />
                <rect x="9" y="2" width="5" height="5" rx="1" fill="white" opacity="0.6" />
                <rect x="2" y="9" width="5" height="5" rx="1" fill="white" opacity="0.6" />
                <rect x="9" y="9" width="5" height="5" rx="1" fill="white" />
              </svg>
            </div>
            <span
              style={{
                fontSize: "15px",
                fontWeight: 500,
                color: "var(--color-text-primary)",
              }}
            >
              Nexus
            </span>
          </a>

          {/* Desktop nav */}
          <ul
            className="desktop-only"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2px",
              margin: 0,
              padding: 0,
              listStyle: "none",
              flex: 1,
            }}
          >
            {NAV_ITEMS.map((item, i) => (
              <li
                key={i}
                style={{ position: "relative" }}
                onMouseEnter={() => item.children && handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      padding: "6px 12px",
                      color: "var(--color-text-primary)",
                      textDecoration: "none",
                      fontSize: "14px",
                      fontWeight: 400,
                      borderRadius: "var(--border-radius-md)",
                      background:
                        activeIndex === i
                          ? "var(--color-background-secondary)"
                          : "transparent",
                      transition: "background 0.12s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.background =
                        "var(--color-background-secondary)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.background = "")
                    }
                  >
                    {item.label}
                  </a>
                ) : (
                  <button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      padding: "6px 12px",
                      color: "var(--color-text-primary)",
                      background:
                        activeIndex === i
                          ? "var(--color-background-secondary)"
                          : "transparent",
                      border: "none",
                      fontSize: "14px",
                      fontWeight: 400,
                      borderRadius: "var(--border-radius-md)",
                      cursor: "pointer",
                      transition: "background 0.12s",
                    }}
                  >
                    {item.label}
                    <ChevronDown size={13} open={activeIndex === i} />
                  </button>
                )}

                {item.children && activeIndex === i && (
                  <DropdownMenu
                    items={item.children}
                    depth={0}
                    onClose={handleClose}
                  />
                )}
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div
            className="desktop-only"
            style={{ display: "flex", gap: "8px", marginLeft: "auto" }}
          >
            <a
              href="#"
              style={{
                padding: "7px 16px",
                fontSize: "14px",
                color: "var(--color-text-primary)",
                textDecoration: "none",
                borderRadius: "var(--border-radius-md)",
                border: "0.5px solid var(--color-border-secondary)",
                transition: "background 0.12s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background =
                  "var(--color-background-secondary)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "")
              }
            >
              Sign in
            </a>
            <a
              href="#"
              style={{
                padding: "7px 16px",
                fontSize: "14px",
                color: "var(--color-background-primary)",
                background: "var(--color-text-primary)",
                textDecoration: "none",
                borderRadius: "var(--border-radius-md)",
                transition: "opacity 0.12s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.opacity = "0.85")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.opacity = "1")
              }
            >
              Get started
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="mobile-only"
            onClick={() => setMobileOpen((o) => !o)}
            style={{
              marginLeft: "auto",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "6px",
              color: "var(--color-text-primary)",
              borderRadius: "var(--border-radius-md)",
              display: "flex",
              alignItems: "center",
            }}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div
            className="mobile-only"
            style={{
              borderTop: "0.5px solid var(--color-border-tertiary)",
              padding: "8px 12px 16px",
              maxHeight: "calc(100vh - 60px)",
              overflowY: "auto",
            }}
          >
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {NAV_ITEMS.map((item, i) => (
                <MobileNavItem key={i} item={item} depth={0} />
              ))}
            </ul>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                marginTop: "16px",
                paddingTop: "16px",
                borderTop: "0.5px solid var(--color-border-tertiary)",
              }}
            >
              <a
                href="#"
                style={{
                  display: "block",
                  padding: "10px 16px",
                  textAlign: "center",
                  fontSize: "14px",
                  color: "var(--color-text-primary)",
                  textDecoration: "none",
                  borderRadius: "var(--border-radius-md)",
                  border: "0.5px solid var(--color-border-secondary)",
                }}
              >
                Sign in
              </a>
              <a
                href="#"
                style={{
                  display: "block",
                  padding: "10px 16px",
                  textAlign: "center",
                  fontSize: "14px",
                  color: "var(--color-background-primary)",
                  background: "var(--color-text-primary)",
                  textDecoration: "none",
                  borderRadius: "var(--border-radius-md)",
                }}
              >
                Get started
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
