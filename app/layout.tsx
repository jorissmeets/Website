import type { Metadata } from "next";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Carecogni — Eerder zicht op risico's in complexe zorg",
    template: "%s | Carecogni",
  },
  description:
    "Carecogni haalt vroege signalen uit meldingen en dossiers, zodat zorgteams sneller kunnen handelen zonder extra registratiedruk.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
