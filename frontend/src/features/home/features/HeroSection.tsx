import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32 border-b border-slate-100">
      {/* Subtle modern background gradient highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-[480px] w-full max-w-6xl bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.08),transparent_70%)]" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Modern minimal tag */}
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-semibold tracking-wide text-slate-700">
          <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
          <span>Konsultan Pengembangan SDM & Organisasi Sejak 2005</span>
        </div>

        {/* Thought-provoking & authoritative Headline */}
        <h1 className="mt-8 text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-950 leading-[1.08]">
          Mengelola Sumber Daya Manusia Menjadi{" "}
          <span className="bg-gradient-to-r from-red-600 via-red-700 to-rose-700 bg-clip-text text-transparent">
            Kontributor Hebat
          </span>
        </h1>

        {/* Concise, high-impact subtitle */}
        <p className="mt-7 max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 font-normal leading-relaxed">
          Kinerja bisnis bermula dari manusia. Kami membantu organisasi mentransformasi{" "}
          <strong className="font-semibold text-slate-900">mindset</strong>,{" "}
          <strong className="font-semibold text-slate-900">dinamika psikologis</strong>, dan{" "}
          <strong className="font-semibold text-slate-900">modifikasi perilaku</strong> untuk
          mencapai keunggulan organisasi.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/#kontak"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-red-600/20 hover:bg-red-700 transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Konsultasi Sekarang</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/#produk-jasa"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-950 transition-colors shadow-xs"
          >
            <span>Pelajari Produk & Jasa</span>
          </Link>
        </div>

        {/* Minimal Credibility Metrics */}
        <div className="mt-20 pt-10 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl sm:text-4xl font-black text-slate-950">20+ Thn</p>
            <p className="mt-1 text-xs sm:text-sm font-medium text-slate-500">
              Pengalaman Dedikasi
            </p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-black text-slate-950">500+</p>
            <p className="mt-1 text-xs sm:text-sm font-medium text-slate-500">
              Klien Korporasi
            </p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-black text-slate-950">50.000+</p>
            <p className="mt-1 text-xs sm:text-sm font-medium text-slate-500">
              Peserta Dikembangkan
            </p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-black text-red-600">6 Pilar</p>
            <p className="mt-1 text-xs sm:text-sm font-medium text-slate-500">
              Solusi Terintegrasi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
