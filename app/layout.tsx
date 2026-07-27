import type { Metadata } from "next";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://carecogni-concept.jepsmeets.chatgpt.site"),
  title: {
    default: "Carecogni — Eerder zien wat aandacht nodig heeft",
    template: "%s | Carecogni",
  },
  description:
    "Carecogni brengt relevante ontwikkelingen in bestaande zorginformatie tijdig en uitlegbaar in beeld.",
  openGraph: {
    title: "Carecogni — Eerder zien wat aandacht nodig heeft",
    description:
      "Eerder zien wat aandacht nodig heeft, met de professional in regie.",
    type: "website",
    locale: "nl_NL",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Meer zorg, minder last — Carecogni",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carecogni — Eerder zien wat aandacht nodig heeft",
    description:
      "Eerder zien wat aandacht nodig heeft, met de professional in regie.",
    images: ["/og.png"],
  },
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
