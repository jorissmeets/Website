import type { Metadata } from "next";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Carecogni — Meer zorg, minder last",
    template: "%s | Carecogni",
  },
  description:
    "Agentic AI voor de langdurige zorg. Betrouwbaar, uitlegbaar en direct inzetbaar.",
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
