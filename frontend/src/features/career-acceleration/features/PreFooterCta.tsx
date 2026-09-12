import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

export function PreFooterCta() {
  return (
    <section className="bg-gradient-to-r from-red-600 via-red-700 to-rose-800 text-white py-12 sm:py-16 shadow-inner relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-0 right-1/4 -z-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          {/* Left info & Title */}
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-xs">
              <Sparkles className="h-3.5 w-3.5 text-yellow-300" />
              <span>Sesi Live Interaktif • Kuota 150 Peserta</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
              Akselerasi Karir & Kepemimpinan Eksekutif di Era Disrupsi
            </h3>

            <p className="text-sm sm:text-base text-red-100 font-normal leading-relaxed">
              Sabtu, 24 Oktober 2026 • 09:00 - 11:30 WIB • Bersama Coach John Arif Purba, ACC.
              Dapatkan 90-Day Action Plan & E-Certificate resmi.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-4 text-xs text-red-200 pt-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="h-4 w-4 text-yellow-300" />
                Investasi Normal: <span className="line-through text-red-300">Rp 750.000</span>
              </span>
              <span className="rounded bg-yellow-400 px-2 py-0.5 font-bold text-slate-950">
                Hari Ini: Rp 0 (FREE RSVP)
              </span>
            </div>
          </div>

          {/* Right CTA Button */}
          <div className="shrink-0">
            <a
              href="#daftar"
              className="inline-flex items-center gap-2.5 rounded-2xl bg-white px-8 py-4 text-base font-extrabold text-red-700 shadow-2xl hover:bg-red-50 hover:scale-105 active:scale-95 transition-all"
            >
              <span>DAFTAR SEKARANG</span>
              <ArrowRight className="h-5 w-5 stroke-[2.5]" />
            </a>
            <p className="mt-2 text-center text-[11px] text-red-200">
              ⚡ Sisa kuota terbatas untuk batch ini
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PreFooterCta;
