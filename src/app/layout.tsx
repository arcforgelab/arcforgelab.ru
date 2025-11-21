import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arcforgelab — фулстек разработчик",
  description:
    "Минималистичный портфолио-сайт фулстек разработчика: shadcn/ui, shadcnblocks, GSAP-анимации и продакшен-архитектура.",
  metadataBase: new URL("https://arcforgelab.com"),
  openGraph: {
    title: "Arcforgelab — фулстек разработчик",
    description:
      "Минималистичный портфолио-сайт фулстек разработчика: shadcn/ui, shadcnblocks, GSAP-анимации и продакшен-архитектура.",
    url: "https://arcforgelab.com",
    siteName: "Arcforgelab",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arcforgelab — фулстек разработчик",
    description:
      "Минималистичный портфолио-сайт фулстек разработчика: shadcn/ui, shadcnblocks, GSAP-анимации и продакшен-архитектура.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${mono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
