import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carecogni — Meer zorg, minder last",
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
      <body>{children}</body>
    </html>
  );
}
