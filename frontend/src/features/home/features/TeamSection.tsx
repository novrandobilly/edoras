import React from "react";
import Image from "next/image";
import photoJohn from "@/assets/team/John.webp";
import photoGaby from "@/assets/team/Gaby.webp";
import photoRisman from "@/assets/team/Risman.webp";

interface TeamMember {
  name: string;
  title: string;
  focus: string;
  summary: React.ReactNode;
  credentials: string[];
  photo: typeof photoJohn;
}

export function TeamSection() {
  const members: TeamMember[] = [
    {
      name: "John Arif Purba, ACC",
      title:
        "Psychologist | Leadership Coach | Master Trainer | Master NLP Practitioner",
      focus: "Human Capital & Leadership Strategy",
      summary: (
        <>
          Berpengalaman mendampingi organisasi dalam pengembangan strategi SDM
          terintegrasi, leadership, coaching, dan behavioral transformation
          untuk membantu membangun{" "}
          <strong className="font-semibold text-slate-900">
            pemimpin yang mampu menghasilkan kinerja melalui people
          </strong>
          .
        </>
      ),
      credentials: [
        "Psychologist",
        "Leadership Coach",
        "Master Trainer",
        "Master NLP Practitioner",
      ],
      photo: photoJohn,
    },
    {
      name: "Gaby Anniwati",
      title: "Psychologist | Professional Coach | Clinical Hypnotherapist",
      focus: "Talent, Assessment & Executive Development",
      summary: (
        <>
          Berpengalaman membantu organisasi dalam talent recruitment, integrated
          competency assessment, executive coaching, dan leadership development
          untuk{" "}
          <strong className="font-semibold text-slate-900">
            menemukan, memetakan, dan mengembangkan talenta secara optimal
          </strong>
          .
        </>
      ),
      credentials: [
        "Psychologist",
        "Professional Coach",
        "Clinical Hypnotherapist",
      ],
      photo: photoGaby,
    },
    {
      name: "Risman Purba",
      title: "Professional Coach | BrainPower® Trainer",
      focus: "Behavior, Productivity & Mental Resilience",
      summary: (
        <>
          Berpengalaman dalam behavioral transformation, productivity
          enhancement, dan mental resilience dengan menerapkan pendekatan{" "}
          <strong className="font-semibold text-slate-900">BrainPower®</strong>{" "}
          untuk membantu individu dan organisasi{" "}
          <strong className="font-semibold text-slate-900">
            mengubah potensi menjadi performa nyata
          </strong>
          .
        </>
      ),
      credentials: ["Professional Coach", "BrainPower® Trainer"],
      photo: photoRisman,
    },
  ];

  return (
    <section
      id="tim-ahli"
      className="py-14 lg:py-20 bg-slate-50 border-b border-slate-200/80"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-950">
            Integrated Expertise for
          </h2>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-950">
            People, Leadership &amp; Performance
          </h2>
          <div className="mt-4 space-y-2.5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            <p>
              Kami menghadirkan tim praktisi dengan keahlian yang saling
              melengkapi dalam{" "}
              <p>
                <strong className="font-semibold text-slate-900">
                  Human Capital, Leadership, Talent, Coaching, dan Behavioral
                  Transformation
                </strong>
                .
              </p>
            </p>
            <p>
              Dengan memadukan perspektif{" "}
              <strong className="font-semibold text-slate-900">
                Psikologi, Coaching, NLP, Assessment, dan Behavioral Science
              </strong>
              , kami membantu organisasi membangun strategi pemberdayaan sumber
              daya manusia yang lebih kuat, mengembangkan pemimpin yang efektif,
              serta mendorong perubahan perilaku yang berdampak pada kinerja dan
              kesinambungan pertumbuhan organisasi.
            </p>
          </div>
        </div>

        {/* Team Cards Grid (3 Columns) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
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

                <h3 className="text-lg sm:text-xl font-bold text-slate-950 group-hover:text-red-600 transition-colors">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs sm:text-sm font-normal italic text-slate-500 leading-snug">
                  {member.title}
                </p>

                <div className="mt-4 pt-3.5 border-t border-slate-100">
                  <h4 className="text-sm font-bold text-slate-900 tracking-tight">
                    {member.focus}
                  </h4>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed font-normal">
                    {member.summary}
                  </p>
                </div>
              </div>

              {/* Badges */}
              <div className="mt-5 pt-3.5 border-t border-slate-100 flex flex-wrap gap-1.5">
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
