import type { Metadata } from "next";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://carecogni-concept.jepsmeets.chatgpt.site"),
  title: {
    default: "Carecogni — Van incidentmelding naar verbetering",
    template: "%s | Carecogni",
  },
  description:
    "Carecogni zet incidentmeldingen om in consistente, bruikbare verbeterinformatie met AI en de professional in regie.",
  openGraph: {
    title: "Carecogni — Van incidentmelding naar verbetering",
    description:
      "Minder tijd aan verwerking van incidentmeldingen. Meer ruimte om te leren en verbeteren.",
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
    title: "Carecogni — Van incidentmelding naar verbetering",
    description:
      "Minder tijd aan verwerking van incidentmeldingen. Meer ruimte om te leren en verbeteren.",
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
