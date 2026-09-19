import Link from "next/link";
import {
  Target,
  GraduationCap,
  Network,
  BrainCircuit,
  UserCheck,
  Zap,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      title: "Performance & Leadership Coaching",
      icon: Target,
      summary:
        "Pendampingan berbasis standar ICF untuk membuka potensi kepemimpinan dan mengakselerasi performa eksekutif.",
    },
    {
      title: "Training (Pelatihan & Pengembangan SDM)",
      icon: GraduationCap,
      summary:
        "Program in-house dan outbound untuk memperkuat kompetensi teknis, komunikasi, dan sinergi tim.",
    },
    {
      title: "HR & OD Consulting",
      icon: Network,
      summary:
        "Perancangan sistem manajemen SDM dan struktur organisasi yang selaras dengan visi korporasi.",
    },
    {
      title: "Potential Assessment",
      icon: BrainCircuit,
      summary:
        "Pemeriksaan psikologis komprehensif dan assessment center untuk pemetaan potensi, promosi, dan suksesi.",
    },
    {
      title: "Recruitment & Executive Search",
      icon: UserCheck,
      summary:
        "Penyediaan talenta profesional dan eksekutif yang selaras secara kualifikasi dan budaya kerja.",
    },
    {
      title: "BrainPower®",
      icon: Zap,
      summary:
        "Modifikasi perilaku dan pemrograman pikiran manusia untuk mendongkrak ketahanan mental dan produktivitas.",
    },
    {
      title: "Event Organizing",
      icon: CalendarDays,
      summary:
        "Penyelenggaraan event korporasi, seminar besar, workshop eksekutif, dan gathering secara profesional.",
    },
  ];

  return (
    <section
      id="produk-jasa"
      className="py-14 lg:py-20 bg-white border-b border-slate-100"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header - Clean & punchy without redundant description */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-red-600">
            Produk & Jasa
          </span>
          <h2 className="mt-1.5 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950">
            Solusi Pengembangan Sumber Daya Manusia
          </h2>
        </div>

        {/* 7 Compact Cards in 2 Rows (4 Top, 3 Bottom on Laptop) */}
        <div className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group flex flex-col justify-between w-full sm:w-[calc(50%-10px)] lg:w-[calc(25%-16px)] rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs hover:border-red-200 hover:shadow-md transition-all hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-800 border border-slate-200/70 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-3 text-sm sm:text-base font-bold text-slate-900 group-hover:text-red-600 transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed font-normal">
                    {service.summary}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100">
                  <Link
                    href="/#kontak"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-red-600 group-hover:text-red-700 transition-colors"
                  >
                    <span>Konsultasi</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
