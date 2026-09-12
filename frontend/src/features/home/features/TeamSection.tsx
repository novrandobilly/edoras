import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function TeamSection() {
  const members = [
    {
      name: "John Arif Purba, ACC",
      title: "Psychologist, Associate Certified Coach, Master NLP Practitioner",
      summary:
        "Spesialis penyusunan strategi sistem pengelolaan SDM dan teknik pemrograman pikiran manusia untuk menciptakan perubahan perilaku yang berdampak nyata.",
      credentials: ["Psikolog", "ACC Coach (ICF)", "Master NLP"],
    },
    {
      name: "Gaby Anniwati",
      title: "Psychologist, Certified Professional Coach, Clinical Hypnotherapist",
      summary:
        "Berpengalaman 20+ tahun dalam talent recruitment, asesmen kompetensi terintegrasi, dan coaching kepemimpinan untuk eksekutif perusahaan.",
      credentials: ["Psikolog", "Certified Coach", "Hypnotherapist"],
    },
    {
      name: "Risman Purba",
      title: "BrainPower® Trainer, Certified Professional Coach",
      summary:
        "Praktisi modifikasi perilaku puluhan tahun dan kreator konsep BrainPower® untuk mendorong lompatan produktivitas dan efektivitas individu.",
      credentials: ["BrainPower® Creator", "Behavioral Trainer", "Certified Coach"],
    },
  ];

  return (
    <section id="tim-ahli" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-red-600">
            Tim Ahli
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
            Kenali Partner Anda
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Didampingi langsung oleh psikolog berlisensi dan coach bersertifikasi internasional
            dengan pengalaman lebih dari dua dekade.
          </p>
        </div>

        {/* Team Cards Grid (3 Columns) */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {members.map((member) => (
            <div
              key={member.name}
              className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-2xs hover:border-red-200 hover:shadow-lg transition-all group"
            >
              <div>
                {/* Photo Placeholder Frame */}
                <ImagePlaceholder
                  title={member.name}
                  subtitle="Foto Profil Konsultan"
                  aspectRatio="tall"
                  icon="team"
                  className="group-hover:border-red-300 transition-colors"
                />

                <h3 className="mt-5 text-lg font-bold text-slate-950 group-hover:text-red-600 transition-colors">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs font-semibold text-slate-500 leading-snug">
                  {member.title}
                </p>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {member.summary}
                </p>
              </div>

              {/* Badges */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                {member.credentials.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
