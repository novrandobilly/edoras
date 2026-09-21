import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-slate-950 overflow-hidden">
      {/* Top Main Hero Canvas with Background Photo */}
      <div className="relative min-h-145 sm:min-h-165 lg:min-h-185 flex items-center overflow-hidden">
        {/* Background Photograph */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=2000&q=80"
            alt="Konsultan HR dan Pengembangan SDM PT Inti Dinamis"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_28%] sm:object-right"
          />
          {/* Multi-stop gradient overlay for strong text contrast on the left while keeping photo visible */}
          <div className="absolute inset-0 bg-linear-to-r from-slate-950/95 via-slate-950/75 to-slate-950/30 sm:to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-slate-950/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 lg:pt-48 pb-32 sm:pb-36 lg:pb-40">
          <div className="max-w-3xl">
            {/* Primary Headline - Strictly 2 lines */}
            <h1 className="text-[clamp(1.25rem,5.7vw,3.75rem)] font-extrabold tracking-tight text-white leading-[1.15] drop-shadow-sm">
              <span className="block whitespace-nowrap">Memberdayakan manusia,</span>
              <span className="block whitespace-nowrap bg-linear-to-r from-red-500 via-red-600 to-rose-500 bg-clip-text text-transparent">
                meningkatkan kinerja
              </span>
            </h1>

            {/* Subtitle / Philosophy Description */}
            <p className="mt-5 sm:mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed">
              Di balik setiap angka kinerja, ada manusia yang berpikir,
              memutuskan, berkolaborasi, dan bertindak. Karena itu, meningkatkan
              kinerja sesungguhnya dimulai dari memberdayakan manusia.
            </p>

            {/* Two CTA Buttons under the heading */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <Link
                href="/#kontak"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 hover:bg-red-700 px-7 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg shadow-red-600/30 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Konsultasi Sekarang</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/#produk-jasa"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 hover:bg-white/20 backdrop-blur-md px-7 py-3.5 text-sm sm:text-base font-semibold text-white transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Pelajari Produk & Jasa</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
