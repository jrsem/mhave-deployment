"use client";

import { useState, useRef, useEffect } from "react";
import { C } from "@/constants/colors";

type Lang = "FR" | "HT" | "EN" | "ESP";

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Lang;
}

const HERO_T: Record<Lang, { chatTitle: string; chatGreet: string; chatPh: string; chatSend: string }> = {
  FR: {
    chatTitle: "💬 Assistant MHAVE",
    chatGreet: "Bonjour ! Je suis l'assistant virtuel du MHAVE. Comment puis-je vous aider ?",
    chatPh: "Poser une question…",
    chatSend: "↗",
  },
  HT: {
    chatTitle: "💬 Asistan MHAVE",
    chatGreet: "Bonjou ! Mwen se asistan vityèl MHAVE a. Ki jan mwen ka ede ou ?",
    chatPh: "Poze yon kesyon…",
    chatSend: "↗",
  },
  EN: {
    chatTitle: "💬 MHAVE Assistant",
    chatGreet: "Hello! I am the MHAVE virtual assistant. How can I help you?",
    chatPh: "Ask a question…",
    chatSend: "↗",
  },
  ESP: {
    chatTitle: "💬 Asistente MHAVE",
    chatGreet: "¡Hola! Soy el asistente virtual del MHAVE. ¿Cómo puedo ayudarle?",
    chatPh: "Hacer una pregunta…",
    chatSend: "↗",
  },
};

export function ChatModal({ isOpen, onClose, lang }: ChatModalProps) {
  const [chatMsg, setChatMsg] = useState("");
  const [chatHist, setChatHist] = useState<{ me: boolean; txt: string }[]>([]);
  const chatEnd = useRef<HTMLDivElement>(null);
  const ht = HERO_T[lang];

  useEffect(() => {
    chatEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHist]);

  function sendChat() {
    if (!chatMsg.trim()) return;
    const m = chatMsg.trim();
    setChatHist((h) => [...h, { me: true, txt: m }]);
    setChatMsg("");
    const replies: Record<Lang, string> = {
      FR: `Merci pour votre question sur « ${m} ». Pour plus d'informations, visitez mhave.gouv.ht ou contactez-nous à contact@mhave.gouv.ht.`,
      HT: `Mèsi pou kesyon w sou « ${m} ». Pou plis enfòmasyon, vizite mhave.gouv.ht oswa kontakte nou nan contact@mhave.gouv.ht.`,
      EN: `Thank you for your question about « ${m} ». For more information, visit mhave.gouv.ht or contact us at contact@mhave.gouv.ht.`,
      ESP: `Gracias por su pregunta sobre « ${m} ». Para más información, visite mhave.gouv.ht o contáctenos en contact@mhave.gouv.ht.`,
    };
    setTimeout(() => setChatHist((h) => [...h, { me: false, txt: replies[lang] }]), 900);
  }

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 90,
        right: 18,
        width: 320,
        maxHeight: 420,
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
          background: C.navy,
          color: C.white,
          padding: "12px 14px",
          borderRadius: "8px 8px 0 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ fontSize: 13, fontWeight: 600 }}>{ht.chatTitle}</span>
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

      {/* Messages */}
      <div style={{ flex: 1, overflowY: "auto", padding: 12 }}>
        <div
          style={{
            background: "#f3f4f6",
            padding: 10,
            borderRadius: 6,
            fontSize: 12,
            marginBottom: 10,
          }}
        >
          {ht.chatGreet}
        </div>
        {chatHist.map((h, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: h.me ? "flex-end" : "flex-start",
              marginBottom: 8,
            }}
          >
            <div
              style={{
                background: h.me ? C.navy : "#e5e7eb",
                color: h.me ? C.white : "#374151",
                padding: "8px 12px",
                borderRadius: 6,
                fontSize: 12,
                maxWidth: "85%",
              }}
            >
              {h.txt}
            </div>
          </div>
        ))}
        <div ref={chatEnd} />
      </div>

      {/* Input */}
      <div style={{ padding: 10, borderTop: "1px solid #e5e7eb", display: "flex", gap: 8 }}>
        <input
          value={chatMsg}
          onChange={(e) => setChatMsg(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendChat()}
          placeholder={ht.chatPh}
          style={{
            flex: 1,
            padding: "8px 12px",
            border: "1px solid #d1d5db",
            borderRadius: 4,
            fontSize: 12,
            fontFamily: "inherit",
          }}
        />
        <button
          onClick={sendChat}
          style={{
            background: C.navy,
            color: C.white,
            border: "none",
            padding: "8px 12px",
            borderRadius: 4,
            cursor: "pointer",
            fontSize: 14,
          }}
        >
          {ht.chatSend}
        </button>
      </div>
    </div>
  );
}
