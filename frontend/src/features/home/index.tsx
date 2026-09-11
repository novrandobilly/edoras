import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "./features/HeroSection";
import { StatsSection } from "./features/StatsSection";
import { ServicesSection } from "./features/ServicesSection";
import { FeaturedBanner } from "./features/FeaturedBanner";
import { MethodologySection } from "./features/MethodologySection";
import { ContactSection } from "./features/ContactSection";

export function HomePageFeature() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Navigation */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <FeaturedBanner />
        <MethodologySection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePageFeature;
