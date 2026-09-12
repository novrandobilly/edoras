import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuickContactWidget } from "@/components/ui/QuickContactWidget";
import { HeroSection } from "./features/HeroSection";
import { AboutSection } from "./features/AboutSection";
import { ServicesSection } from "./features/ServicesSection";
import { ExperienceSection } from "./features/ExperienceSection";
import { GallerySection } from "./features/GallerySection";
import { TeamSection } from "./features/TeamSection";
import { ContactSection } from "./features/ContactSection";

export function HomePageFeature() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-red-600 selection:text-white">
      {/* Top Header / Navigation */}
      <Header />

      {/* Main Streamlined Sections */}
      <main className="flex-1">
        {/* 1. Hero Section (Clear, bold, authoritative) */}
        <HeroSection />

        {/* 2. Tentang Kami Section (Thought-provoking centerpiece & mission) */}
        <AboutSection />

        {/* 3. Produk & Jasa Section (6 Pillars, scannable & crisp) */}
        <ServicesSection />

        {/* 4. Pengalaman Section (Clients & industries) */}
        <ExperienceSection />

        {/* 5. Galeri Section (Clean visual activity documentation) */}
        <GallerySection />

        {/* 6. Tim Ahli Section (Positioned right before Contact) */}
        <TeamSection />

        {/* 7. Kontak Kami Section (Streamlined consultation form & WhatsApp) */}
        <ContactSection />
      </main>

      {/* Floating Action Bubble (WhatsApp) */}
      <QuickContactWidget />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePageFeature;
