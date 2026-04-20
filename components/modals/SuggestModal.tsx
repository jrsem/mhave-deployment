"use client";

import { useState } from "react";
import { C } from "@/constants/colors";

type Lang = "FR" | "HT" | "EN" | "ESP";

interface SuggestModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Lang;
}

const HERO_T: Record<Lang, { suggestTitle: string; suggestSend: string; suggestTo: string; suggestSubj: string; suggestBody: string; suggestPh: string }> = {
  FR: {
    suggestTitle: "💡 Envoyer une suggestion",
    suggestSend: "📧 Envoyer via messagerie",
    suggestTo: "À",
    suggestSubj: "Objet",
    suggestBody: "Message",
    suggestPh: "Votre suggestion…",
  },
  HT: {
    suggestTitle: "💡 Voye yon sijesyon",
    suggestSend: "📧 Voye via imèl",
    suggestTo: "Pou",
    suggestSubj: "Sijè",
    suggestBody: "Mesaj",
    suggestPh: "Sijesyon ou…",
  },
  EN: {
    suggestTitle: "💡 Send a suggestion",
    suggestSend: "📧 Send via email",
    suggestTo: "To",
    suggestSubj: "Subject",
    suggestBody: "Message",
    suggestPh: "Your suggestion…",
  },
  ESP: {
    suggestTitle: "💡 Enviar sugerencia",
    suggestSend: "📧 Enviar por correo",
    suggestTo: "Para",
    suggestSubj: "Asunto",
    suggestBody: "Mensaje",
    suggestPh: "Su sugerencia…",
  },
};

export function SuggestModal({ isOpen, onClose, lang }: SuggestModalProps) {
  const [sTo, setSTo] = useState("contact@mhave.gouv.ht");
  const [sSubj, setSSubj] = useState("");
  const [sBody, setSBody] = useState("");
  const ht = HERO_T[lang];

  function sendSuggest() {
    window.open(
      `mailto:${sTo}?subject=${encodeURIComponent(sSubj)}&body=${encodeURIComponent(sBody)}`,
      "_blank"
    );
    onClose();
  }

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 90,
        right: 18,
        width: 320,
        background: C.white,
        borderRadius: 8,
        boxShadow: "0 10px 40px rgba(0,0,0,0.25)",
        display: "flex",
        flexDirection: "column",
        zIndex: 200,
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "#0f766e",
          color: C.white,
          padding: "12px 14px",
          borderRadius: "8px 8px 0 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ fontSize: 13, fontWeight: 600 }}>{ht.suggestTitle}</span>
        <button
          onClick={onClose}
          style={{
            background: "none",
            border: "none",
            color: C.white,
            cursor: "pointer",
            fontSize: 18,
            lineHeight: 1,
          }}
        >
          ×
        </button>
      </div>

      {/* Form */}
      <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 10 }}>
        <div>
          <label style={{ fontSize: 11, color: "#6b7280" }}>{ht.suggestTo}</label>
          <input
            value={sTo}
            onChange={(e) => setSTo(e.target.value)}
            style={{
              width: "100%",
              padding: "8px 10px",
              border: "1px solid #d1d5db",
              borderRadius: 4,
              fontSize: 12,
              fontFamily: "inherit",
              marginTop: 4,
            }}
          />
        </div>
        <div>
          <label style={{ fontSize: 11, color: "#6b7280" }}>{ht.suggestSubj}</label>
          <input
            value={sSubj}
            onChange={(e) => setSSubj(e.target.value)}
            placeholder={`${ht.suggestSubj}...`}
            style={{
              width: "100%",
              padding: "8px 10px",
              border: "1px solid #d1d5db",
              borderRadius: 4,
              fontSize: 12,
              fontFamily: "inherit",
              marginTop: 4,
            }}
          />
        </div>
        <div>
          <label style={{ fontSize: 11, color: "#6b7280" }}>{ht.suggestBody}</label>
          <textarea
            value={sBody}
            onChange={(e) => setSBody(e.target.value)}
            placeholder={ht.suggestPh}
            rows={4}
            style={{
              width: "100%",
              padding: "8px 10px",
              border: "1px solid #d1d5db",
              borderRadius: 4,
              fontSize: 12,
              fontFamily: "inherit",
              marginTop: 4,
              resize: "vertical",
            }}
          />
        </div>
        <button
          onClick={sendSuggest}
          style={{
            background: "#0f766e",
            color: C.white,
            border: "none",
            padding: "10px",
            borderRadius: 4,
            cursor: "pointer",
            fontSize: 12,
            fontWeight: 600,
            marginTop: 4,
          }}
        >
          {ht.suggestSend}
        </button>
      </div>
    </div>
  );
}
