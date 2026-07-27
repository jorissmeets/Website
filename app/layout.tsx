import type { Metadata } from "next";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://carecogni-concept.jepsmeets.chatgpt.site"),
  title: {
    default: "Carecogni — Meer zorg, minder last",
    template: "%s | Carecogni",
  },
  description:
    "Carecogni ontwikkelt betrouwbare, uitlegbare en schaalbare AI-oplossingen voor de langdurige zorg.",
  openGraph: {
    title: "Carecogni — Meer zorg, minder last",
    description:
      "Betrouwbare, uitlegbare en schaalbare AI-oplossingen voor de langdurige zorg.",
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
    title: "Carecogni — Meer zorg, minder last",
    description:
      "Betrouwbare, uitlegbare en schaalbare AI-oplossingen voor de langdurige zorg.",
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
