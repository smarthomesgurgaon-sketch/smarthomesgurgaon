import type { Metadata } from "next";

const BASE_URL = "https://janawasplot.com";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and Conditions for www.janawasplot.com. Effective Date: 01.04.2025. Welcome to Jan Awas Yojna Plots. By accessing or using this website, you agree to comply with and be bound by these Terms and Conditions.",
  openGraph: {
    title: "Terms & Conditions - Jan Awas Yojna Plots",
    description:
      "Terms and Conditions for www.janawasplot.com. Effective Date: 01.04.2025. Welcome to Jan Awas Yojna Plots. By accessing or using this website, you agree to comply with and be bound by these Terms and Conditions.",
    url: `${BASE_URL}/terms`,
    siteName: "Jan Awas Yojna Plots",
    type: "website",
  },
  alternates: {
    canonical: `${BASE_URL}/terms`,
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
