import type { Metadata } from "next";

const BASE_URL = "https://janawasplot.com";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "At JanawasPlot.com, we are committed to ensuring a transparent and fair refund process. All unsuccessful applications will be refunded within 30 days. 100% refund guarantee for non-allotted applicants.",
  openGraph: {
    title: "Refund Policy - Jan Awas Yojna Plots",
    description:
      "At JanawasPlot.com, we are committed to ensuring a transparent and fair refund process. All unsuccessful applications will be refunded within 30 days. 100% refund guarantee for non-allotted applicants.",
    url: `${BASE_URL}/refund-policy`,
    siteName: "Jan Awas Yojna Plots",
    type: "website",
  },
  alternates: {
    canonical: `${BASE_URL}/refund-policy`,
  },
};

export default function RefundPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
