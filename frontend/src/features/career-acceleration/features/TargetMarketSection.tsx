import { Check, X, Users } from "lucide-react";

export function TargetMarketSection() {
  const suitable = [
    {
      title: "Mid-Level Managers & Assistant Managers",
      desc: "Yang merasa mentok di posisi saat ini selama lebih dari 2 tahun dan ingin segera melompat ke level General Manager / VP.",
    },
    {
      title: "Senior Specialists & Individual Contributors",
      desc: "Yang ingin bertransisi dari sekadar 'ahli teknis' menjadi 'strategic people leader' yang diperhitungkan para dewan direksi.",
    },
    {
      title: "HR & Organization Development Leaders",
      desc: "Yang ingin mempelajari framework modifikasi perilaku teruji untuk mencetak calon-calon pemimpin masa depan di perusahaannya.",
    },
    {
      title: "Profesional Berkinerja Tinggi (High Performers)",
      desc: "Yang merasa kontribusi dan jam kerja kerasnya belum mendapatkan apresiasi, visibilitas, atau kompensasi yang layak.",
    },
  ];

  const notSuitable = [
    {
      title: "Pencari Solusi Magic Tanpa Usaha",
      desc: "Mereka yang berharap ada jalan pintas instan tanpa kemauan untuk mengubah kebiasaan, mentalitas, dan cara berkomunikasi.",
    },
    {
      title: "Mereka yang Merasa 'Sudah Tahu Segalanya'",
      desc: "Mereka yang tertutup terhadap sudut pandang baru dalam psikologi perilaku dan menolak menerima masukan konstruktif.",
    },
    {
      title: "Mereka yang Puas dengan Status Quo",
      desc: "Mereka yang tidak memiliki ambisi untuk bertumbuh, memimpin tim lebih besar, atau memberikan kontribusi berdampak di organisasi.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-200 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-slate-800">
            <Users className="h-3.5 w-3.5" />
            <span>Kesesuaian Peserta (Target Market)</span>
          </div>
          <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
            Apakah Seminar Ini Tepat Untuk Anda?
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Kami menjaga kualitas interaksi dan dampak kelas ini dengan memastikan hanya
            peserta yang tepat yang bergabung.
          </p>
        </div>

        {/* 2-Column Comparison */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Sangat Cocok (Green Accent) - 7 cols */}
          <div className="lg:col-span-7 rounded-2xl border border-emerald-200 bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2.5 text-emerald-800 pb-4 border-b border-slate-100">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <Check className="h-5 w-5 stroke-[3]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold">
                Program Ini Sangat Cocok Bagi Anda Jika:
              </h3>
            </div>

            <div className="mt-6 space-y-4">
              {suitable.map((item) => (
                <div key={item.title} className="flex items-start gap-3.5">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 mt-0.5">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                    <p className="mt-0.5 text-xs text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Tidak Cocok (Slate/Red Accent) - 5 cols */}
          <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2.5 text-rose-800 pb-4 border-b border-slate-100">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                <X className="h-5 w-5 stroke-[3]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold">
                Program Ini TIDAK Cocok Jika:
              </h3>
            </div>

            <div className="mt-6 space-y-4">
              {notSuitable.map((item) => (
                <div key={item.title} className="flex items-start gap-3.5">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-700 mt-0.5">
                    <X className="h-3 w-3 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                    <p className="mt-0.5 text-xs text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TargetMarketSection;
