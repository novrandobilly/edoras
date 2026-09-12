import { AlertOctagon, ArrowDownRight, ClockAlert, DollarSign, HeartCrack, Hourglass } from "lucide-react";

export function CostOfInactionSection() {
  const losses = [
    {
      icon: Hourglass,
      title: "Kehilangan Momentum 2–3 Tahun Masa Emas Produktif",
      desc: "Waktu tidak dapat diputar kembali. Setiap tahun Anda bertahan dalam stagnasi adalah setahun kesempatan emas yang hilang untuk memegang kendali kepemimpinan strategis.",
    },
    {
      icon: DollarSign,
      title: "Kerugian Finansial Akumulatif Ratusan Juta Rupiah",
      desc: "Selisih kenaikan gaji, tunjangan, dan bonus level manajerial menuju eksekutif bisa mencapai puluhan juta per bulan. Menunda akselerasi karir berarti merelakan nilai finansial tersebut menguap begitu saja.",
    },
    {
      icon: ArrowDownRight,
      title: "Resiko Tersingkir Oleh Rekan Kerja yang Lebih Proaktif",
      desc: "Posisi kursi General Manager dan VP sangat terbatas. Jika Anda tidak segera mengambil langkah pembuktian kapasitas, rekan lain yang siap akan mengisinya terlebih dahulu.",
    },
    {
      icon: HeartCrack,
      title: "Kelelahan Mental (Chronic Burnout) Berkepanjangan",
      desc: "Terus berkutat memadamkan kebakaran operasional setiap hari tanpa arah kemajuan yang jelas akan mengikis rasa percaya diri dan antusiasme Anda terhadap profesi.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 border border-rose-200 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-rose-700">
            <AlertOctagon className="h-3.5 w-3.5" />
            <span>Biaya dari Menunda (Cost of Inaction)</span>
          </div>

          <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
            Kerugian Nyata Jika Anda Memilih untuk Tetap Diam
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Menunda perbaikan strategi karir sering kali terasa &lsquo;aman&rsquo; di awal,
            namun dalam jangka panjang memiliki konsekuensi yang sangat mahal.
          </p>
        </div>

        {/* Losses Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {losses.map((loss, index) => {
            const Icon = loss.icon;
            return (
              <div
                key={loss.title}
                className="flex flex-col justify-between rounded-2xl border border-rose-100 bg-rose-50/30 p-6 sm:p-7 hover:bg-rose-50/60 hover:border-rose-300 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-100 text-rose-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-600/70">
                      Kerugian #0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-4 text-base sm:text-lg font-bold text-slate-900">
                    {loss.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {loss.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Reality Check */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-950 p-6 sm:p-8 text-white text-center">
          <ClockAlert className="h-8 w-8 text-red-500 mx-auto mb-3" />
          <h3 className="text-lg sm:text-xl font-bold">
            Pilihan Ada di Tangan Anda: Bertahan di Titik Stagnan atau Memulai Akselerasi?
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            Hanya butuh 2,5 jam di hari Sabtu untuk membekali diri Anda dengan strategi yang
            dapat mengubah 5 hingga 10 tahun masa depan profesional Anda.
          </p>
          <div className="mt-6">
            <a
              href="#daftar"
              className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-sm font-bold text-white hover:bg-red-700 transition-all shadow-md shadow-red-600/20"
            >
              <span>Saya Memilih Melakukan Akselerasi Karir</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CostOfInactionSection;
