import "@bayareametro/mtc-ui/bootstrap.css";
import "@fontsource/nunito-sans";
import "@fontsource/nunito-sans/300.css";
import "@fontsource/nunito-sans/600.css";
import "@fontsource/nunito-sans/700.css";
import "@fontsource/nunito-sans/800.css";
import "@fontsource/nunito";
import "@fontsource/nunito/300.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bay Area Spatial Information System",
  description: "Building a Digital Landscape for Regional Planning in the Bay Area",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
