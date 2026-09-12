import {
  Brain,
  FileCheck2,
  HelpCircle,
  Lightbulb,
  ShieldCheck,
  Target,
  Zap,
} from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: Brain,
      title: "Metodologi Modifikasi Perilaku BrainPower®",
      desc: "Kuasai teknik neuro-behavioral untuk memprogram ulang respon mental Anda saat menghadapi tekanan, negosiasi sulit, dan situasi krisis di tempat kerja.",
    },
    {
      icon: Target,
      title: "Framework Executive Presence & Boardroom Influence",
      desc: "Pelajari cara mempresentasikan inisiatif strategis dengan bahasa yang dipahami dan disukai C-Level serta dewan direksi.",
    },
    {
      icon: Lightbulb,
      title: "Strategi Positioning Tanpa Politik Kantor Toksik",
      desc: "Cara elegan dan berintegritas untuk menonjol di radar manajemen tanpa harus menjilat atau mengorbankan nilai-nilai moral Anda.",
    },
    {
      icon: Zap,
      title: "Action Plan Akselerasi Karir 90 Hari",
      desc: "Roadmap terukur langkah demi langkah yang dapat langsung Anda implementasikan sejak hari pertama setelah webinar selesai.",
    },
    {
      icon: FileCheck2,
      title: "E-Certificate & Comprehensive Workbook",
      desc: "Dokumentasi keikutsertaan resmi berstandar konsultan SDM PT Inti Dinamis yang memperkuat kredibilitas profesional Anda di LinkedIn.",
    },
    {
      icon: HelpCircle,
      title: "Sesi Live Consultation & Q&A Interaktif",
      desc: "Kesempatan emas membedah tantangan karir spesifik Anda langsung bersama Master Coach John Arif Purba, ACC.",
    },
  ];

  return (
    <section id="keuntungan" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-red-600">
            Nilai Tambah Nyata
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
            Keuntungan Eksklusif yang Akan Anda Dapatkan
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Seminar ini dirancang padat materi aplikatif, bebas basa-basi, dan berbasis riset
            nyata konsultan SDM selama lebih dari dua dekade.
          </p>
        </div>

        {/* 6 Benefit Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-2xs hover:shadow-md hover:border-red-200 transition-all group"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all shadow-xs">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="mt-4 inline-block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Keuntungan #{index + 1}
                  </span>
                  <h3 className="mt-1 text-base sm:text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-red-600">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Materi Aplikatif Teruji</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
