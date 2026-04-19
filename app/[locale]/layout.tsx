import type { Metadata } from "next";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import {getMessages} from "next-intl/server"
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

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

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {

  const {locale} = await params;
  // Providing all messages to the client side
  const messages = await getMessages();
  // Validate locale
  const validLocales = routing.locales as unknown as string[];
  if (!validLocales.includes(locale)) notFound();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
           {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
