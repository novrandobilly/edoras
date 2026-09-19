import Image from "next/image";
import photoJohn from "@/assets/team/john.jpg";
import photoGaby from "@/assets/team/gaby.jpg";
import photoRisman from "@/assets/team/risman.jpg";

export function TeamSection() {
  const members = [
    {
      name: "John Arif Purba, ACC",
      title: "Psychologist, Associate Certified Coach, Master NLP Practitioner",
      summary:
        "Spesialis strategi sistem SDM terintegrasi dan modifikasi perilaku berbasis NLP & coaching berstandar internasional.",
      credentials: ["Psikolog", "ACC Coach (ICF)", "Master NLP"],
      photo: photoJohn,
    },
    {
      name: "Gaby Anniwati",
      title: "Psychologist, Certified Professional Coach, Clinical Hypnotherapist",
      summary:
        "Spesialis talent recruitment, asesmen kompetensi terintegrasi, dan coaching kepemimpinan eksekutif.",
      credentials: ["Psikolog", "Certified Coach", "Hypnotherapist"],
      photo: photoGaby,
    },
    {
      name: "Risman Purba",
      title: "BrainPower® Trainer, Certified Professional Coach",
      summary:
        "Praktisi modifikasi perilaku dan kreator konsep BrainPower® untuk akselerasi produktivitas serta ketahanan mental.",
      credentials: ["BrainPower® Creator", "Behavioral Trainer", "Certified Coach"],
      photo: photoRisman,
    },
  ];

  return (
    <section id="tim-ahli" className="py-14 lg:py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header - Clean without redundant description */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-red-600">
            Tim Ahli
          </span>
          <h2 className="mt-1.5 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950">
            Kenali Partner Anda
          </h2>
        </div>

        {/* Team Cards Grid (3 Columns) */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {members.map((member) => (
            <div
              key={member.name}
              className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-2xs hover:border-red-200 hover:shadow-lg transition-all group"
            >
              <div>
                {/* Photo Frame */}
                <div className="relative aspect-3/4 w-full overflow-hidden rounded-xl bg-slate-100 mb-5 border border-slate-200/80 group-hover:border-red-200 transition-colors">
                  <Image
                    src={member.photo}
                    alt={`Foto ${member.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 350px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="mt-4 text-base sm:text-lg font-bold text-slate-950 group-hover:text-red-600 transition-colors">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs font-semibold text-slate-500 leading-snug">
                  {member.title}
                </p>
                <p className="mt-2.5 text-xs text-slate-600 leading-relaxed font-normal">
                  {member.summary}
                </p>
              </div>

              {/* Badges */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
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
