import type { Metadata } from "next";

const BASE_URL = "https://janawasplot.com";

export const metadata: Metadata = {
  title: "News Room",
  description:
    "News and updates about Jan Awas Yojna Plots. Latest information on RERA-approved residential plots in Rajasthan.",
  openGraph: {
    title: "News Room - Jan Awas Yojna Plots",
    description:
      "News and updates about Jan Awas Yojna Plots. Latest information on RERA-approved residential plots in Rajasthan.",
    url: `${BASE_URL}/news-room`,
    siteName: "Jan Awas Yojna Plots",
    type: "website",
  },
  alternates: {
    canonical: `${BASE_URL}/news-room`,
  },
};

export default function NewsRoomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
