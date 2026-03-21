import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ahmed Mahmoud Abbas — Backend & DevOps Engineer",
  description:
    "Backend and DevOps engineer building production-grade systems. Open to remote roles.",
  openGraph: {
    title: "Ahmed Mahmoud Abbas — Backend & DevOps Engineer",
    description:
      "Backend and DevOps engineer building production-grade systems. Open to remote roles.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistMono.variable} ${inter.variable}`}>
      <body className="bg-[#0a0a0a] text-[#f4f4f5] antialiased">{children}</body>
    </html>
  );
}
