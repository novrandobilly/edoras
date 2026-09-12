import { BarChart3, TrendingUp, Users2, History } from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      icon: BarChart3,
      value: "85%",
      label: "Faktor Penentu Karir Eksekutif",
      desc: "Riset Harvard University membuktikan 85% kesuksesan level C didorong oleh People Skills & Psychological Agility, bukan keahlian teknis semata.",
    },
    {
      icon: TrendingUp,
      value: "4x",
      label: "Lebih Cepat Dipromosikan",
      desc: "Profesional dengan bimbingan coaching modifikasi perilaku berpeluang 4 kali lebih cepat menembus kursi pimpinan puncak.",
    },
    {
      icon: Users2,
      value: "50.000+",
      label: "Peserta & Leader Terlatih",
      desc: "Alumni dari berbagai korporasi ternama di Indonesia yang telah merasakan dampak positif program PT Inti Dinamis.",
    },
    {
      icon: History,
      value: "20+ Thn",
      label: "Dedikasi Konsultasi SDM",
      desc: "Pengalaman konsisten sejak 2005 menjadi mitra transformasi organisasi dan human capital terpercaya di Indonesia.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Visual background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(220,38,38,0.12),transparent_60%)]" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-red-400">
            Fakta Pendukung Berbasis Riset
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Angka & Data yang Membuktikan Urgensi Akselerasi Karir
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Dunia korporasi tidak lagi menilai loyalitas pasif. Fakta menunjukkan bahwa
            hanya mereka yang proaktif meningkatkan kapasitas yang akan bertahan dan memimpin.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950/70 p-6 backdrop-blur-xs hover:border-red-500/50 transition-colors"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600/20 text-red-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-3xl sm:text-4xl font-black text-white tracking-tight">
                    {item.value}
                  </p>
                  <h3 className="mt-1.5 text-sm font-bold text-red-400">
                    {item.label}
                  </h3>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
