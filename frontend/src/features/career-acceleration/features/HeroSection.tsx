import {
  ArrowRight,
  Calendar,
  Clock,
  Video,
  Sparkles,
  CheckCircle,
  Users,
} from "lucide-react";
import { CountdownTimer } from "./CountdownTimer";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-20 lg:py-24 border-b border-slate-100">
      {/* Subtle modern radial background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-140 w-full max-w-6xl bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.08),transparent_70%)]" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Badges Row: Brand Series & Social Proof Count */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50/90 px-3.5 py-1 text-xs font-semibold tracking-wide text-red-800 shadow-xs">
            <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
            <span>Executive Masterclass Series • PT Inti Dinamis</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold text-slate-700 shadow-2xs">
            <Users className="h-3.5 w-3.5 text-red-600" />
            <span>🔥 1.428+ Leader Telah Bergabung</span>
          </div>
        </div>

        {/* 1. Powerful Headline */}
        <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.12]">
          Dobrak Batas Karir Anda: Strategi{" "}
          <span className="bg-linear-to-r from-red-600 via-red-700 to-rose-700 bg-clip-text text-transparent">
            Akselerasi & Kepemimpinan Eksekutif
          </span>{" "}
          di Era Disrupsi
        </h1>

        {/* Sub-headline */}
        <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
          Kuasai blueprint psikologi performa dan modifikasi perilaku teruji
          untuk melompat dari terjebak di level operasional menuju posisi
          strategis bernilai tinggi—tanpa harus menunggu promosi formal
          bertahun-tahun.
        </p>

        {/* Countdown Timer Widget (Reference from Coach Erkelin urgency strategy) */}
        <div className="mt-7 flex justify-center">
          <CountdownTimer targetDate="2026-10-24T09:00:00+07:00" />
        </div>

        {/* Event Key Meta Chips */}
        <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-slate-700">
          <div className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5">
            <Calendar className="h-4 w-4 text-red-600" />
            <span>Sabtu, 24 Oktober 2026</span>
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5">
            <Clock className="h-4 w-4 text-red-600" />
            <span>09:00 - 11:30 WIB</span>
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5">
            <Video className="h-4 w-4 text-blue-600" />
            <span>Live Interactive Zoom</span>
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-emerald-800 font-bold">
            <Sparkles className="h-4 w-4 text-emerald-600" />
            <span>Gratis RSVP (Subsidi Penuh)</span>
          </div>
        </div>

        {/* Value Anchor Strikethrough (Reference from Coach Erkelin pricing display) */}
        <div className="mt-4 flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-500">
          <span>
            Nilai Normal:{" "}
            <span className="line-through text-slate-400">Rp 750.000</span>
          </span>
          <span className="font-bold text-red-600">•</span>
          <span className="font-extrabold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-md">
            Biaya Pendaftaran: Rp 0 (100% Free)
          </span>
        </div>

        {/* Primary CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
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
