import type { Metadata } from "next";

const BASE_URL = "https://janawasplot.com";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for www.janawasplot.com. Effective Date: 01.04.2025. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you visit our website.",
  openGraph: {
    title: "Privacy Policy - Jan Awas Yojna Plots",
    description:
      "Privacy Policy for www.janawasplot.com. Effective Date: 01.04.2025. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you visit our website.",
    url: `${BASE_URL}/privacy-policy`,
    siteName: "Jan Awas Yojna Plots",
    type: "website",
  },
  alternates: {
    canonical: `${BASE_URL}/privacy-policy`,
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
