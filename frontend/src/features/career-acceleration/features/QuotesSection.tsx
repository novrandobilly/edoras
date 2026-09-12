import { Quote, CheckCircle2, Bookmark } from "lucide-react";

export function QuotesSection() {
  const proofs = [
    {
      source: "Marshall Goldsmith",
      role: "World's #1 Executive Coach & Penulis Bestseller 'What Got You Here Won't Get You There'",
      finding:
        "Banyak profesional berhenti berkembang karena mengira keterampilan yang membawa mereka ke posisi saat ini cukup untuk membawa mereka ke level berikutnya. Untuk melompat ke level eksekutif, yang Anda butuhkan adalah modifikasi perilaku dan strategic presence.",
    },
    {
      source: "Harvard Business Review Research",
      role: "Global Management Study on Leadership Transitions",
      finding:
        "Riset membuktikan bahwa 71% kegagalan transisi karir ke level manajemen senior bukan disebabkan oleh kompetensi teknis, melainkan ketidakmampuan beradaptasi dengan dinamika kepemimpinan adaptif dan pengaruh lintas stakeholder.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Quote Orang Terkenal */}
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 sm:p-12 text-white shadow-xl overflow-hidden">
          <div className="absolute -top-6 -right-6 text-slate-800/40">
            <Quote className="h-44 w-44 rotate-180" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-950/80 border border-red-500/40 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-red-400">
              <Bookmark className="h-3.5 w-3.5" />
              <span>Quote Orang Terkenal</span>
            </div>

            <blockquote className="mt-6 text-xl sm:text-2xl lg:text-3xl font-extrabold leading-snug tracking-tight text-white">
              &ldquo;Karier terbaik bukanlah yang direncanakan di atas kertas, melainkan
              karier orang yang siap ketika peluang datang karena mereka mengenal kekuatan
              diri sendiri, nilai-nilai mereka, dan bagaimana mereka memberikan kontribusi
              terbaik.&rdquo;
            </blockquote>

            <div className="mt-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-red-600 flex items-center justify-center text-lg font-black text-white shadow-md">
                PD
              </div>
              <div>
                <p className="text-base font-bold text-white">Peter F. Drucker</p>
                <p className="text-xs text-slate-400">Bapak Manajemen Modern Dunia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bukti dari Orang Terkenal / Validasi Riset Global */}
        <div className="mt-14">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-red-600">
              Bukti & Riset Otoritas Dunia
            </span>
            <h3 className="mt-1.5 text-2xl sm:text-3xl font-extrabold text-slate-950">
              Mengapa Akselerasi Karir Membutuhkan Pendekatan Baru?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {proofs.map((proof) => (
              <div
                key={proof.source}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8 hover:bg-white hover:shadow-md transition-all group"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-red-600">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Validasi Pemimpin Pemikiran Dunia</span>
                  </div>
                  <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed italic">
                    &ldquo;{proof.finding}&rdquo;
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200">
                  <p className="text-sm font-bold text-slate-900">{proof.source}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{proof.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuotesSection;
