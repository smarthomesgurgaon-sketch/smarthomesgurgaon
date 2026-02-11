import type { Metadata } from "next";

const BASE_URL = "https://janawasplot.com";

export const metadata: Metadata = {
  title: "Avani Greens",
  description:
    "PROJECT SCHEME INFORMATION. TOWN: Bhiwadi. TOWN & DISTRICT: Khairthal-Tijara. PROJECT ID: 76. RERA-approved residential plots under Jan Awas Yojna. Ready for possession.",
  openGraph: {
    title: "Avani Greens - Jan Awas Yojna Plots",
    description:
      "PROJECT SCHEME INFORMATION. TOWN: Bhiwadi. TOWN & DISTRICT: Khairthal-Tijara. PROJECT ID: 76. RERA-approved residential plots under Jan Awas Yojna. Ready for possession.",
    url: `${BASE_URL}/project/avani-greens`,
    siteName: "Jan Awas Yojna Plots",
    type: "website",
  },
  alternates: {
    canonical: `${BASE_URL}/project/avani-greens`,
  },
};

export default function AvaniGreensLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
