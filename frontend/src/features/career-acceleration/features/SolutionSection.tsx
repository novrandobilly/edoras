import { BrainCircuit, Compass, Rocket, ShieldCheck, Sparkles } from "lucide-react";

export function SolutionSection() {
  const pillars = [
    {
      step: "01",
      icon: BrainCircuit,
      badge: "Fondasi Mental",
      title: "Mindset Re-Engineering (BrainPower® Formula)",
      desc: "Menghapus sindrom 'impostor' dan keraguan diri. Anda akan diprogram dengan keyakinan, ketenangan psikologis, dan fokus tinggi seorang calon eksekutif.",
      highlights: [
        "Identifikasi blind spot psikologis penghambat karir",
        "Modifikasi respon emosional saat situasi krisis & tekanan",
        "Membangun resiliensi mental tak tergoyahkan",
      ],
    },
    {
      step: "02",
      icon: Compass,
      badge: "Pengaruh & Otoritas",
      title: "Strategic Positioning & Boardroom Influence",
      desc: "Kuasai cara berbicara, menyusun argumen, dan menegosiasikan inisiatif dengan bahasa yang diutamakan oleh para pengambil keputusan korporasi.",
      highlights: [
        "Membaca peta kekuasaan & dinamika stakeholder organisasi",
        "Teknik framing ide agar langsung disetujui C-level",
        "Membangun personal branding otentik tanpa politik toksik",
      ],
    },
    {
      step: "03",
      icon: Rocket,
      badge: "Akselerasi Hasil",
      title: "High-Velocity Execution & 90-Day Roadmap",
      desc: "Lepaskan diri dari perangkap operasional. Bangun sistem kerja dan kepemimpinan tim yang otonom sehingga Anda siap memegang tanggung jawab lebih besar.",
      highlights: [
        "Seni delegasi efektif tanpa takut kehilangan kontrol",
        "Mengubah kontribusi teknis menjadi dampak finansial nyata",
        "Action plan 90 hari yang terukur dan dapat dievaluasi",
      ],
    },
  ];

  return (
    <section id="solusi" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-red-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-red-700">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Solusi Mudah & Cepat</span>
          </div>

          <h2 className="mt-4 text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
            Formula 3 Pilar Akselerasi Karir: Cara Cepat Tanpa Menunggu Bertahun-Tahun
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Anda tidak perlu menghabiskan 5 tahun untuk trial and error. Cukup ikuti sistem
            terstruktur yang telah dibuktikan oleh ribuan manajer dan leader korporasi.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 shadow-xs hover:border-red-300 hover:shadow-lg transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all shadow-xs">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-2xl font-black text-slate-200 group-hover:text-red-600/30 transition-colors">
                      {pillar.step}
                    </span>
                  </div>

                  <span className="mt-5 inline-block text-[11px] font-bold uppercase tracking-wider text-red-600">
                    {pillar.badge}
                  </span>

                  <h3 className="mt-1 text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                    {pillar.highlights.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs text-slate-700">
                        <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 text-[11px] font-semibold text-slate-400 group-hover:text-red-600 transition-colors">
                  Dipelajari mendalam pada sesi Live Webinar
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SolutionSection;
