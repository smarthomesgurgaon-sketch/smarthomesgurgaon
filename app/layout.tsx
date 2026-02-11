import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://janawasplot.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Jan Awas Yojna Plotted Development – RERA Approved Residential Plots in Rajasthan",
    template: "%s | Jan Awas Yojna Plots",
  },
  description:
    "RERA-approved residential plot under Jan Awas Yojna in Rajasthan. Affordable, ready-for-possession plots with government-backed planning, legal security, and excellent connectivity. Apply now to secure your dream home in a growing community.",
  openGraph: {
    title: "Jan Awas Yojna Plotted Development – RERA Approved Residential Plots in Rajasthan",
    description:
      "RERA-approved residential plot under Jan Awas Yojna in Rajasthan. Affordable, ready-for-possession plots with government-backed planning, legal security, and excellent connectivity. Apply now to secure your dream home in a growing community.",
    url: BASE_URL,
    siteName: "Jan Awas Yojna Plots",
    type: "website",
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: "/images/favicon.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
