import Link from "next/link";
import {
  Compass,
  GraduationCap,
  Workflow,
  ClipboardCheck,
  Brain,
  Flag,
  ArrowRight,
} from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      id: "leadership-coaching",
      title: "Leadership Coaching",
      icon: Compass,
      summary:
        "Pendampingan berbasis standar ICF untuk membuka potensi kepemimpinan dan mengakselerasi performa eksekutif.",
    },
    {
      id: "training-sdm",
      title: "Training (Pelatihan & Pengembangan SDM)",
      icon: GraduationCap,
      summary:
        "Program in-house dan outbound untuk memperkuat kompetensi teknis, komunikasi, dan sinergi tim.",
    },
    {
      id: "hr-od-consulting",
      title: "HR & OD Consulting",
      icon: Workflow,
      summary:
        "Perancangan sistem manajemen SDM dan struktur organisasi yang selaras dengan visi korporasi.",
    },
    {
      id: "potential-assessment",
      title: "Potential Assessment",
      icon: ClipboardCheck,
      summary:
        "Pemeriksaan psikologis komprehensif dan assessment center untuk pemetaan potensi, promosi, dan suksesi.",
    },
    {
      id: "brainpower",
      title: "BrainPower®",
      icon: Brain,
      summary:
        "Modifikasi perilaku dan pemrograman pikiran manusia untuk mendongkrak ketahanan mental dan produktivitas.",
    },
    {
      id: "leadership-adventure",
      title: "Leadership Adventure",
      icon: Flag,
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
        {/* Section Header - Clean & punchy */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-red-600">
            Produk & Jasa
          </span>
          <h2 className="mt-1.5 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950">
            Solusi Pemberdayaan Sumber Daya Manusia
          </h2>
        </div>

        {/* 6 Service Cards Grid (1 Col Mobile, 2 Cols Tablet, 3 Cols Desktop) */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                id={service.id}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-2xs hover:border-red-200 hover:shadow-md transition-all hover:-translate-y-0.5 scroll-mt-28"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 text-slate-800 border border-slate-200/70 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-4 text-base sm:text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {service.summary}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href="/#kontak"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 group-hover:text-red-700 transition-colors"
                  >
                    <span>Konsultasi</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
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
