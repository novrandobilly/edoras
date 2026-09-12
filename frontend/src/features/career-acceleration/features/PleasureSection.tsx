import { Award, Compass, HeartHandshake, Sparkles, TrendingUp } from "lucide-react";

export function PleasureSection() {
  const pleasures = [
    {
      icon: Award,
      title: "Otoritas & Pengakuan di Meja Eksekutif",
      desc: "Opini dan rekomendasi Anda didengar, dihargai, dan menjadi rujukan utama bagi jajaran manajemen senior.",
    },
    {
      icon: TrendingUp,
      title: "Daya Tawar Finansial yang Berlipat Ganda",
      desc: "Kompensasi, bonus kinerja, dan fasilitas sepadan dengan nilai strategis tak tergantikan yang Anda berikan pada organisasi.",
    },
    {
      icon: Compass,
      title: "Ketenangan Memimpin Tanpa Burnout",
      desc: "Kuasai seni delegasi, modifikasi perilaku tim, dan manajemen energi agar Anda tetap memiliki waktu berkualitas untuk keluarga dan hobi.",
    },
    {
      icon: HeartHandshake,
      title: "Menjadi Sosok 'Sought-After Talent'",
      desc: "Bukan lagi Anda yang mengejar lowongan, melainkan tawaran promosi dan peluang kepemimpinan strategis yang datang mengetuk pintu Anda.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
            <span>The Biggest Pleasure • Transformasi Nyata</span>
          </div>

          <h2 className="mt-4 text-2xl sm:text-4xl font-black tracking-tight text-slate-950">
            Kesimpulan Singkat: Bayangkan Jika Anda Memiliki Kendali Penuh Atas Masa Depan Karir Anda
          </h2>

          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Ketika Anda menguasai psikologi kepemimpinan dan formula modifikasi perilaku,
            keberhasilan karir bukan lagi soal keberuntungan atau politik kantor, melainkan
            sebuah sistem yang dapat direplikasi dengan pasti.
          </p>
        </div>

        {/* 4 Pleasure Pillars */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pleasures.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col justify-between rounded-2xl border border-emerald-100 bg-emerald-50/40 p-6 transition-all hover:bg-emerald-50/80 hover:shadow-md hover:-translate-y-1"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-base sm:text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick pleasure takeaway banner */}
        <div className="mt-10 rounded-2xl bg-gradient-to-r from-red-600 to-rose-700 p-6 sm:p-8 text-white shadow-lg shadow-red-600/20 text-center">
          <p className="text-sm sm:text-base font-semibold uppercase tracking-wider text-red-100">
            Hasil Akhir yang Akan Anda Capai
          </p>
          <h3 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-black">
            &ldquo;Transformasi dari Sekadar Pekerja Keras Menjadi Kontributor Hebat & Pemimpin Berpengaruh.&rdquo;
          </h3>
        </div>
      </div>
    </section>
  );
}

export default PleasureSection;
