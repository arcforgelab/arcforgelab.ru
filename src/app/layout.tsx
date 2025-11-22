import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arcforgelab - backend engineer for APIs and platforms",
  description:
    "Solo backend and platform engineering: APIs, data pipelines, auth, billing, observability, and reliable releases for product teams.",
  metadataBase: new URL("https://arcforgelab.ru"),
  openGraph: {
    title: "Arcforgelab - backend engineer for APIs and platforms",
    description:
      "Solo backend and platform engineering: APIs, data pipelines, auth, billing, observability, and reliable releases for product teams.",
    url: "https://arcforgelab.ru",
    siteName: "Arcforgelab",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arcforgelab - backend engineer for APIs and platforms",
    description:
      "Solo backend and platform engineering: APIs, data pipelines, auth, billing, observability, and reliable releases for product teams.",
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
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
