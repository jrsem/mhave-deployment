import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layouts/Footer";

export const metadata: Metadata = {
  title: "MHAVE – Ministère des Haïtiens Vivant à l'Étranger",
  description:
    "Portail officiel du MHAVE. Accédez aux services de l'État haïtien depuis l'étranger. Conforme à la Directive 001/IHSI/2026.",
  keywords: [
    "MHAVE",
    "Haïti",
    "diaspora",
    "ONI",
    "NIN",
    "IHSI",
    "gouvernance électronique",
  ],
  authors: [{ name: "MHAVE / IHSI" }],
  openGraph: {
    title: "MHAVE – Portail Officiel",
    description:
      "Services haïtiens pour la diaspora – Infrastructure souveraine UE",
    url: "https://mhave.gouv.ht",
    siteName: "MHAVE",
    locale: "fr_HT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
