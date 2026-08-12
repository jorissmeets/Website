import type { Metadata } from "next";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://carecogni-concept.jepsmeets.chatgpt.site"),
  title: {
    default: "Carecogni — AI voor Care & Cure in productie",
    template: "%s | Carecogni",
  },
  description:
    "Carecogni ontwikkelt veilige, uitlegbare AI-toepassingen voor de zorg, met de professional in regie.",
  openGraph: {
    title: "Carecogni — AI voor Care & Cure in productie",
    description:
      "Veilige en uitlegbare AI-toepassingen voor de zorg, met de professional in regie.",
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
    title: "Carecogni — AI voor Care & Cure in productie",
    description:
      "Veilige en uitlegbare AI-toepassingen voor de zorg, met de professional in regie.",
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
