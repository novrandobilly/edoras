import type { Metadata, Viewport } from "next";

export const SITE_URL = "https://intidinamis.com";
export const SITE_NAME = "PT Inti Dinamis";
export const SITE_TITLE =
  "Inti Dinamis | Konsultan SDM, Training & Coaching";
export const SITE_DESCRIPTION =
  "Konsultan SDM & organisasi terpercaya sejak 2005. Kembangkan Human Capital lewat Performance Coaching, Pelatihan BrainPower®, dan Asesmen Psikologis.";
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

export const siteViewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
};

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  manifest: "/site.webmanifest",
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

export const siteStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logo-intidinamis.png`,
      image: DEFAULT_OG_IMAGE,
      description:
        "Mitra konsultan organisasi dan pengembangan sumber daya manusia terpercaya sejak 2005 di Jakarta, Indonesia.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jakarta",
        addressCountry: "ID",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+62-811-855-212",
        contactType: "customer service",
        availableLanguage: ["Indonesian", "English"],
      },
      sameAs: [
        "https://www.linkedin.com/company/pt-inti-dinamis",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Inti Dinamis",
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      inLanguage: "id-ID",
    },
  ],
};
