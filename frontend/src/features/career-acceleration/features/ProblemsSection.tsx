import { AlertTriangle, Clock, EyeOff, MessageSquareX, TrendingDown } from "lucide-react";

export function ProblemsSection() {
  const problems = [
    {
      icon: EyeOff,
      title: "Kerja Keras Tanpa Pengakuan",
      desc: "Anda bekerja 10-12 jam sehari dan menyelesaikan target sulit, namun saat evaluasi promosi tiba, rekan kerja yang lebih vokal dan pandai berpolitik yang justru terpilih.",
    },
    {
      icon: Clock,
      title: "Terjebak di Jebakan Rutinitas Operasional",
      desc: "Waktu Anda habis memadamkan api harian dan mengurus hal-hal teknis mikro. Anda tidak memiliki ruang dan energi untuk berpikir strategis serta membangun relasi kepemimpinan.",
    },
    {
      icon: MessageSquareX,
      title: "Buntu Saat Berhadapan dengan Stakeholder",
      desc: "Ide dan inisiatif hebat Anda sering kali dimentahkan manajemen senior hanya karena gaya penyampaian yang belum selaras dengan cara pandang dan prioritas para pengambil keputusan.",
    },
    {
      icon: TrendingDown,
      title: "Kecemasan Tersalip di Era AI & Disrupsi",
      desc: "Keahlian teknis Anda kini mudah digantikan otomatisasi. Jika Anda tidak segera bertransformasi menjadi strategic problem solver dan adaptive leader, posisi Anda rentan tergantikan.",
    },
  ];

  return (
    <section id="masalah" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-red-100/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-700">
            <AlertTriangle className="h-3.5 w-3.5" />
            <span>Apakah Anda Mengalami Ini?</span>
          </div>
          <h2 className="mt-4 text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
            Masalah-Masalah Nyata yang Menghentikan Laju Karir Profesional Berbakat
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Mayoritas profesional bekerja sangat keras, namun 90% dari mereka terjebak pada
            pola yang sama tanpa menyadari hambatan tak kasat mata di tempat kerja.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {problems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs hover:shadow-md hover:border-red-200 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Masalah #0{index + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-lg sm:text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProblemsSection;
