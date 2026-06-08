import type { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Nexara — AI-Driven Digital Experiences",
  description:
    "Premium AI consulting studio helping ambitious teams simplify workflows and ship intelligent products.",
  openGraph: {
    title: "Nexara — AI-Driven Digital Experiences",
    description:
      "Premium AI consulting studio helping ambitious teams simplify workflows and ship intelligent products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
