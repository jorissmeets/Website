import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const siteUrl = `${protocol}://${host}`;
  const title = "Carecogni — Meer zorg, minder last";
  const description =
    "Betrouwbare AI die meewerkt in de dagelijkse zorgpraktijk. Veilig, uitlegbaar en geïntegreerd.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: "nl_NL",
      images: [
        {
          url: `${siteUrl}/og.png`,
          width: 1200,
          height: 630,
          alt: "Carecogni — Meer zorg, minder last",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
