import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/components/providers/AppProviders";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inti Dinamis | Training - Coaching - Assessment - HR & OD Consulting",
  description:
    "PT Inti Dinamis - Mitra konsultan SDM dan organisasi sejak 2005. Mengembangkan Human Capital menjadi kontributor hebat melalui Performance Coaching, Pelatihan Modifikasi Perilaku BrainPower®, dan Asesmen Psikologis.",
  keywords: [
    "Inti Dinamis",
    "Konsultan SDM Jakarta",
    "Training SDM",
    "Executive Coaching Indonesia",
    "BrainPower",
    "Asesmen Psikologis Perusahaan",
    "Outbound Training",
    "HR OD Consulting",
  ],
  icons: {
    icon: "/logo-intidinamis.svg",
    shortcut: "/logo-intidinamis.svg",
    apple: "/logo-intidinamis.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 font-sans text-slate-900">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
