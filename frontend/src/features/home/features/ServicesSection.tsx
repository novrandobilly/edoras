import Link from "next/link";
import {
  Target,
  GraduationCap,
  Network,
  BrainCircuit,
  UserCheck,
  Zap,
  ArrowRight,
} from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      title: "Performance & Leadership Coaching",
      icon: Target,
      summary:
        "Pendampingan terstruktur berbasis standar ICF untuk membuka potensi kepemimpinan dan mengakselerasi target performa eksekutif.",
      tags: ["Executive Coaching", "Mindset Transformation", "Leadership"],
    },
    {
      title: "Training (Pelatihan & Pengembangan SDM)",
      icon: GraduationCap,
      summary:
        "Program pembelajaran in-house dan experiential learning (outbound) yang dirancang untuk memperkuat kompetensi dan sinergi tim.",
      tags: ["In-House Training", "Team Cohesion", "Supervisory"],
    },
    {
      title: "HR & OD Consulting",
      icon: Network,
      summary:
        "Perancangan sistem dan arsitektur pengelolaan SDM yang terintegrasi dengan visi, misi, dan nilai-nilai korporasi.",
      tags: ["Organization Design", "Job Grading", "Budaya Kerja"],
    },
    {
      title: "Potential Assessment",
      icon: BrainCircuit,
      summary:
        "Evaluasi psikologis komprehensif dan assessment center objektif untuk pemetaan potensi, seleksi, serta perencanaan suksesi.",
      tags: ["Psychometric Testing", "Assessment Center", "Talent Mapping"],
    },
    {
      title: "Recruitment & Executive Search",
      icon: UserCheck,
      summary:
        "Penyediaan talenta profesional berkualitas yang selaras secara kompetensi teknis dan kecocokan budaya kerja.",
      tags: ["Executive Search", "Talent Sourcing", "Cultural Fit"],
    },
    {
      title: "BrainPower®",
      icon: Zap,
      summary:
        "Metodologi modifikasi perilaku dan pemrograman pikiran manusia untuk meningkatkan daya fokus, ketahanan mental, dan produktivitas.",
      tags: ["Modifikasi Perilaku", "Peak Productivity", "Mental Toughness"],
    },
  ];

  return (
    <section id="produk-jasa" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-red-600">
            Produk & Jasa
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
            Solusi Pengembangan Human Capital
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            6 pilar layanan terpadu yang dirancang untuk menjawab tantangan strategis sumber daya
            manusia di organisasi Anda.
          </p>
        </div>

        {/* 6 Clean Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-7 transition-all duration-200 hover:border-red-200 hover:shadow-lg hover:-translate-y-1"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-800 border border-slate-200/70 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
                    {service.summary}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/#kontak"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 group-hover:text-red-700 transition-colors"
                  >
                    <span>Konsultasikan Kebutuhan</span>
                    <ArrowRight className="h-3.5 w-3.5" />
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
