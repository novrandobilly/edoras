import { Flame, XCircle } from "lucide-react";

export function BiggestPainSection() {
  const painPoints = [
    "Menyaksikan rekan kerja atau junior yang pengalamannya lebih sedikit justru dipromosikan mendahului Anda.",
    "Bekerja lembur hingga larut malam dan mengorbankan waktu keluarga, namun kompensasi finansial tetap jalan di tempat.",
    "Merasa bakat, dedikasi, dan potensi kepemimpinan sejati Anda disia-siakan oleh organisasi tempat Anda bernaung.",
    "Ketakutan mendalam bahwa usia Anda terus bertambah, sementara jendela peluang untuk mencapai level direksi semakin menyempit.",
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[450px] w-full max-w-4xl bg-[radial-gradient(circle,rgba(220,38,38,0.15),transparent_70%)]" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header with Alert Badge */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/60 px-4 py-1 text-xs font-bold uppercase tracking-wider text-red-400">
            <Flame className="h-3.5 w-3.5 text-red-500 animate-pulse" />
            <span>The Biggest Pain</span>
          </div>

          <h2 className="mt-5 text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Rasa Sakit Terbesar Bukanlah Kegagalan,{" "}
            <span className="text-red-500">
              Melainkan Terjebak di Dataran Tinggi Karir yang Sunyi
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            Banyak profesional menghabiskan 5 hingga 10 tahun terbaik dalam hidup mereka terjebak
            pada posisi yang sama. Mereka merasa lelah, kehilangan api semangat, dan mulai
            meragukan kapasitas diri sendiri.
          </p>
        </div>

        {/* Highlighted Pain Box */}
        <div className="mt-10 rounded-2xl border border-red-900/60 bg-red-950/20 p-6 sm:p-10 backdrop-blur-xs">
          <h3 className="text-lg font-bold text-red-300 mb-6 flex items-center gap-2">
            <span>Inikah Kenyataan Pahit yang Sedang Anda Rasakan?</span>
          </h3>
          <div className="space-y-4">
            {painPoints.map((text) => (
              <div key={text} className="flex items-start gap-3.5">
                <XCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-red-900/40 text-center">
            <p className="text-xs sm:text-sm font-semibold text-slate-400 italic">
              &ldquo;Berada di tempat yang salah dan melakukan hal yang sama berulang-ulang tanpa strategi akselerasi adalah bentuk pemborosan potensi terbesar bagi seorang profesional.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BiggestPainSection;
