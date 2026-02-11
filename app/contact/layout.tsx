import type { Metadata } from "next";

const BASE_URL = "https://janawasplot.com";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Jan Awas Yojna Plots. Get in touch for RERA-approved residential plots in Rajasthan. The Lifestyle City, Bhiwadi.",
  openGraph: {
    title: "Contact Us - Jan Awas Yojna Plots",
    description:
      "Contact Jan Awas Yojna Plots. Get in touch for RERA-approved residential plots in Rajasthan. The Lifestyle City, Bhiwadi.",
    url: `${BASE_URL}/contact`,
    siteName: "Jan Awas Yojna Plots",
    type: "website",
  },
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
