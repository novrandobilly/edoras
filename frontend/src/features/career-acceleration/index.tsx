import { LandingHeader } from "./features/LandingHeader";
import { HeroSection } from "./features/HeroSection";
import { ProblemsSection } from "./features/ProblemsSection";
import { BiggestPainSection } from "./features/BiggestPainSection";
import { PleasureSection } from "./features/PleasureSection";
import { BenefitsSection } from "./features/BenefitsSection";
import { AsSeenOnSection } from "./features/AsSeenOnSection";
import { VideoAidcaSection } from "./features/VideoAidcaSection";
import { QuotesSection } from "./features/QuotesSection";
import { SolutionSection } from "./features/SolutionSection";
import { TestimonialsSection } from "./features/TestimonialsSection";
import { StatsSection } from "./features/StatsSection";
import { SpeakerBioSection } from "./features/SpeakerBioSection";
import { TargetMarketSection } from "./features/TargetMarketSection";
import { CostOfInactionSection } from "./features/CostOfInactionSection";
import { ResolutionSection } from "./features/ResolutionSection";
import { FaqSection } from "./features/FaqSection";
import { LandingFooter } from "./features/LandingFooter";
import { StickyMobileCta } from "./features/StickyMobileCta";

const EVENT_CONFIG = {
  title: "Akselerasi Karir & Kepemimpinan Eksekutif di Era Disrupsi",
  slug: "career-acceleration-executive-leadership",
};

export function CareerAccelerationFeature() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-red-600 selection:text-white pb-14 md:pb-0">
      {/* 0. Focused Landing Header (Option B: Logo + Event Badge, No Nav Distractions) */}
      <LandingHeader />

      <main className="flex-1">
        {/* 1. Powerful Headline */}
        <HeroSection />

        {/* 2. Masalah-masalah */}
        <ProblemsSection />

        {/* 3. Biggest Pain */}
        <BiggestPainSection />

        {/* 4. Kesimpulan Singkat (Biggest Pleasure) */}
        <PleasureSection />

        {/* 5. Keuntungan - Keuntungan (Benefit) */}
        <BenefitsSection />

        {/* 6. As Seen On */}
        <AsSeenOnSection />

        {/* 7. Video AIDCA */}
        <VideoAidcaSection />

        {/* 8 & 9. Quote Orang Terkenal & Bukti dari Orang Terkenal */}
        <QuotesSection />

        {/* 10. Solusi (Mudah & Cepat) */}
        <SolutionSection />

        {/* 11. Testimonial (Social Proof) */}
        <TestimonialsSection />

        {/* 12. Statistik (Fakta Pendukung) */}
        <StatsSection />

        {/* 13. Biografi Singkat (List of Achievements) */}
        <SpeakerBioSection />

        {/* 14. Siapa yang cocok (Target Market) */}
        <TargetMarketSection />

        {/* 15. Kerugian – Kerugian (jika tidak ikut) */}
        <CostOfInactionSection />

        {/* 16. Resolusi & Form Pendaftaran */}
        <ResolutionSection
          eventTitle={EVENT_CONFIG.title}
          eventSlug={EVENT_CONFIG.slug}
        />

        {/* 17. FAQ */}
        <FaqSection />
      </main>

      {/* Focused Footer (Logo redirects back to home) */}
      <LandingFooter />

      {/* Floating CTA bar on mobile screens */}
      <StickyMobileCta />
    </div>
  );
}

export default CareerAccelerationFeature;
