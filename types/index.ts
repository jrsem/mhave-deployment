export type Lang = "FR" | "HT" | "EN" | "ESP";
export type ModalKey = null | string;

export type SvcData = {
  icon: string;
  title: string;
  color: string;
  bg: string;
  headline: string;
  intro: string;
  steps: string[];
  ctaLabel: string;
  ctaUrl: string;
  cta2Label: string;
  cta2Url: string;
};

export type Section = {
  icon: string;
  label: string;
  content: string;
  items: string[];
  ctaLabel?: string;
  ctaUrl?: string;
};

export type NavPage = {
  title: string;
  color: string;
  sections: Section[];
};

export type TileData = {
  color: string;
  label: string;
  icon: string;
  headline: string;
  intro: string;
  sections: { icon: string; title: string; items: string[] }[];
  ctaLabel: string;
  ctaUrl: string;
  cta2Label?: string;
  cta2Url?: string;
};

export type OfficialPortal = {
  icon: string;
  label: string;
  sublabel: string;
  desc: string;
  color: string;
  url: string;
};

export type HeroTranslation = {
  h1: string;
  sub: string;
  ph: string;
  btn: string;
  svcTitle: string;
  oniLabel: string;
  oniBtn: string;
  sidebar: string[];
  chatTitle: string;
  chatGreet: string;
  chatPh: string;
  chatSend: string;
  suggestTitle: string;
  suggestSend: string;
  suggestTo: string;
  suggestSubj: string;
  suggestBody: string;
  suggestPh: string;
  shareCopied: string;
};

export type SearchResult = {
  icon: string;
  title: string;
  cat: string;
  desc: string;
};

export type ChatMessage = { me: boolean; txt: string };