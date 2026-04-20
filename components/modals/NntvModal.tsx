"use client";

import { useState } from "react";
import { C } from "@/constants/colors";

interface NntvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TABS = [
  { id: "live", label: "Direct", icon: "●" },
  { id: "replay", label: "Replay", icon: "▶" },
  { id: "events", label: "Événements", icon: "★" },
  { id: "podcasts", label: "Podcasts", icon: "🎙" },
];

export function NntvModal({ isOpen, onClose }: NntvModalProps) {
  const [activeTab, setActiveTab] = useState("live");

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.85)",
        zIndex: 300,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#0a0a1a",
          borderRadius: 8,
          width: "100%",
          maxWidth: 900,
          maxHeight: "85vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            background: "linear-gradient(90deg, #dc2626, #991b1b)",
            padding: "14px 18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 20 }}>📺</span>
            <div>
              <div style={{ color: C.white, fontSize: 15, fontWeight: 700 }}>NNTV — Natif Natal Televizyon</div>
              <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 10 }}>Chaîne officielle du MHAVE</div>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.25)",
              color: C.white,
              width: 32,
              height: 32,
              borderRadius: 4,
              cursor: "pointer",
              fontSize: 18,
            }}
          >
            ×
          </button>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", borderBottom: "1px solid #27274a" }}>
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                flex: 1,
                background: activeTab === t.id ? "rgba(185,28,28,0.3)" : "transparent",
                border: "none",
                borderBottom: activeTab === t.id ? `2px solid ${C.bord}` : "2px solid transparent",
                color: activeTab === t.id ? C.white : "rgba(255,255,255,0.5)",
                padding: "12px 8px",
                cursor: "pointer",
                fontSize: 11,
                fontWeight: activeTab === t.id ? 700 : 400,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
              }}
            >
              <span>{t.icon}</span>
              <span>{t.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{ flex: 1, overflowY: "auto", padding: 20, background: "#060612" }}>
          {activeTab === "live" && (
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  aspectRatio: "16/9",
                  background: "#000",
                  borderRadius: 6,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}
              >
                <div>
                  <div style={{ fontSize: 48, marginBottom: 10 }}>▶️</div>
                  <div style={{ color: C.white, fontSize: 14 }}>En direct</div>
                </div>
              </div>
              <div style={{ color: "#9ca3af", fontSize: 12 }}>
                Retransmission en direct des événements officiels du MHAVE
              </div>
            </div>
          )}
          {activeTab === "replay" && (
            <div style={{ color: "#9ca3af", textAlign: "center", padding: 40 }}>
              <div style={{ fontSize: 32, marginBottom: 10 }}>📼</div>
              <div>Replay disponibles prochainement</div>
            </div>
          )}
          {activeTab === "events" && (
            <div style={{ color: "#9ca3af", textAlign: "center", padding: 40 }}>
              <div style={{ fontSize: 32, marginBottom: 10 }}>📅</div>
              <div>Calendrier des événements à venir</div>
            </div>
          )}
          {activeTab === "podcasts" && (
            <div style={{ color: "#9ca3af", textAlign: "center", padding: 40 }}>
              <div style={{ fontSize: 32, marginBottom: 10 }}>🎙️</div>
              <div>Podcasts disponibles prochainement</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
