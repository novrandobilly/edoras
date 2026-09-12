import { ArrowRight, Calendar, Clock, Video, Sparkles, CheckCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24 lg:py-28 border-b border-slate-100">
      {/* Subtle modern radial background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-[520px] w-full max-w-6xl bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.08),transparent_70%)]" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Urgency & Category Tag */}
        <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50/80 px-4 py-1.5 text-xs font-semibold tracking-wide text-red-800 shadow-xs">
          <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
          <span>Executive Masterclass Series • PT Inti Dinamis</span>
        </div>

        {/* 1. Powerful Headline */}
        <h1 className="mt-7 text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.12]">
          Dobrak Batas Karir Anda: Strategi{" "}
          <span className="bg-gradient-to-r from-red-600 via-red-700 to-rose-700 bg-clip-text text-transparent">
            Akselerasi & Kepemimpinan Eksekutif
          </span>{" "}
          di Era Disrupsi
        </h1>

        {/* Sub-headline */}
        <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
          Kuasai blueprint psikologi performa dan modifikasi perilaku teruji untuk melompat dari
          terjebak di level operasional menuju posisi strategis bernilai tinggi—tanpa harus
          menunggu promosi formal bertahun-tahun.
        </p>

        {/* Event Key Meta Chips */}
        <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-slate-700">
          <div className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5">
            <Calendar className="h-4 w-4 text-red-600" />
            <span>Sabtu, 24 Oktober 2026</span>
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5">
            <Clock className="h-4 w-4 text-red-600" />
            <span>09:00 - 11:30 WIB</span>
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5">
            <Video className="h-4 w-4 text-blue-600" />
            <span>Live Interactive Zoom</span>
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-emerald-800 font-semibold">
            <Sparkles className="h-4 w-4 text-emerald-600" />
            <span>Gratis (Slot Eksklusif Terbatas)</span>
          </div>
        </div>

        {/* Primary CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#daftar"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-red-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-red-600/25 hover:bg-red-700 transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Amankan Kursi Anda Sekarang</span>
            <ArrowRight className="h-5 w-5" />
          </a>
          <a
            href="#masalah"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-7 py-4 text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-950 transition-colors shadow-xs"
          >
            <span>Pelajari Masalah & Solusi</span>
          </a>
        </div>

        {/* Value badges below CTA */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1">
            <CheckCircle className="h-3.5 w-3.5 text-emerald-600" />
            E-Certificate Resmi
          </span>
          <span className="inline-flex items-center gap-1">
            <CheckCircle className="h-3.5 w-3.5 text-emerald-600" />
            Exclusive Action Workbook
          </span>
          <span className="inline-flex items-center gap-1">
            <CheckCircle className="h-3.5 w-3.5 text-emerald-600" />
            Sesi Live Q&A Langsung dengan Coach
          </span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
