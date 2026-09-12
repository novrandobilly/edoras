"use client";

import { ArrowRight, Sparkles } from "lucide-react";

export function StickyMobileCta() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200/90 bg-white/95 backdrop-blur-md px-4 py-3 shadow-lg">
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="line-through text-[10px] text-slate-400">Rp 750.000</span>
            <span className="text-xs font-black text-emerald-600">Rp 0 (FREE)</span>
          </div>
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-slate-500">
            <Sparkles className="h-2.5 w-2.5 text-red-600 animate-pulse" />
            Live Zoom • Kuota Terbatas
          </span>
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
