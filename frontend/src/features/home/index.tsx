import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuickContactWidget } from "@/components/ui/QuickContactWidget";
import { HeroSection } from "./features/HeroSection";
import { AboutSection } from "./features/AboutSection";
import { ServicesSection } from "./features/ServicesSection";
import { ExperienceSection } from "./features/experience-section";
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
        <HeroSection />

        <AboutSection />

        <ServicesSection />

        <GallerySection />

        <TeamSection />

        <ExperienceSection />

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
