import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://portfolio-azure-beta-0b60zh90oz.vercel.app";
const TITLE = "Ahmed Mahmoud Abbas — Backend & DevOps Engineer";
const DESCRIPTION =
  "Backend and DevOps engineer building production-grade systems. ACR-QA, Kim, CineGraph, MinuteMark. Open to remote and on-site roles — available now.";
const OG_IMAGE = `${SITE_URL}/og?title=I+build+systems+that+ship.&subtitle=Backend+%26+DevOps+Engineer`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: "Ahmed Mahmoud Abbas" }],
  keywords: [
    "Backend Engineer", "DevOps Engineer", "SRE", "Kubernetes", "Docker",
    "Rust", "Python", "Node.js", "Terraform", "Prometheus", "Grafana",
    "ACR-QA", "Cairo", "Remote",
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: SITE_URL,
    siteName: "Ahmed Mahmoud Abbas",
    locale: "en_US",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistMono.variable} ${inter.variable}`}>
      <body className="bg-[#0a0a0a] text-[#f4f4f5] antialiased">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
