import type { Metadata } from "next";

export const SITE_URL = "https://intidinamis.com";
export const SITE_NAME = "PT Inti Dinamis";
export const SITE_TITLE =
  "Inti Dinamis | Training - Coaching - Assessment - HR & OD Consulting";
export const SITE_DESCRIPTION =
  "PT Inti Dinamis - Mitra konsultan SDM dan organisasi sejak 2005. Mengembangkan Human Capital menjadi kontributor hebat melalui Performance Coaching, Pelatihan Modifikasi Perilaku BrainPower®, dan Asesmen Psikologis.";
export const DEFAULT_OG_IMAGE = "https://intidinamis.com/og-hero.png";

export const SITE_KEYWORDS = [
  "Inti Dinamis",
  "Konsultan SDM Jakarta",
  "Training SDM",
  "Executive Coaching Indonesia",
  "BrainPower",
  "Asesmen Psikologis Perusahaan",
  "Outbound Training",
  "HR OD Consulting",
];

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: `${SITE_URL}/`,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  icons: {
    icon: "/logo-intidinamis.svg",
    shortcut: "/logo-intidinamis.svg",
    apple: "/logo-intidinamis.png",
  },
};
