"use client";

import { ArrowRight, Sparkles } from "lucide-react";

export function StickyMobileCta() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200/90 bg-white/95 backdrop-blur-md px-4 py-3 shadow-lg">
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-red-600">
            <Sparkles className="h-3 w-3 animate-pulse" />
            Live Zoom Seminar
          </span>
          <span className="text-xs font-bold text-slate-900">100% Gratis RSVP</span>
        </div>

        <a
          href="#daftar"
          className="inline-flex items-center gap-1.5 rounded-xl bg-red-600 px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-red-600/25 active:scale-95 transition-all"
        >
          <span>Daftar Sekarang</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}

export default StickyMobileCta;
