"use client";

import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { IntiDinamisLogo } from "@/components/ui/IntiDinamisLogo";

export function LandingHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Brand Identity & Event Tag */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="/"
            aria-label="PT Inti Dinamis - Beranda"
            className="flex items-center transition-transform hover:scale-105"
          >
            <IntiDinamisLogo size="sm" priority />
          </Link>
          <span className="hidden sm:inline-block h-4 w-px bg-slate-200" />
          <div className="inline-flex items-center gap-1.5 rounded-full bg-red-50 border border-red-200/60 px-2.5 py-0.5 text-[11px] font-bold tracking-wide text-red-700">
            <Sparkles className="h-3 w-3 text-red-600 animate-pulse" />
            <span>Webinar Eksklusif</span>
          </div>
        </div>

        {/* Right: Focused Single Action (No distractions) */}
        <div className="flex items-center gap-3">
          <a
            href="#daftar"
            className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-red-600/20 hover:bg-red-700 transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Amankan Kursi Gratis</span>
            <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default LandingHeader;
