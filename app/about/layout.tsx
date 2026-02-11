import type { Metadata } from "next";

const BASE_URL = "https://janawasplot.com";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Jan Awas Yojana Plots - Chief Minister Jan Awas Yojana (CMJAY), Rajasthan. Affordable housing for EWS and LIG. Government-backed, RERA-approved residential plots.",
  openGraph: {
    title: "About Us - Jan Awas Yojna Plots",
    description:
      "Jan Awas Yojana Plots - Chief Minister Jan Awas Yojana (CMJAY), Rajasthan. Affordable housing for EWS and LIG. Government-backed, RERA-approved residential plots.",
    url: `${BASE_URL}/about`,
    siteName: "Jan Awas Yojna Plots",
    type: "website",
  },
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
