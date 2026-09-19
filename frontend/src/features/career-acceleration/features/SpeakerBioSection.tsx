import Image from "next/image";
import photoJohn from "@/assets/team/john.jpg";
import { CheckCircle2, UserCheck } from "lucide-react";

export function SpeakerBioSection() {
  const achievements = [
    "Psikolog berlisensi dengan spesialisasi dinamika perilaku organisasi & kepemimpinan adaptif.",
    "Associate Certified Coach (ACC) tersertifikasi oleh International Coaching Federation (ICF) USA.",
    "Master NLP Practitioner bersertifikat internasional dengan fokus modifikasi respon bawah sadar.",
    "Berpengalaman 20+ tahun memfasilitasi ratusan C-Level, Senior VP, dan Manager di korporasi papan atas.",
    "Mitra strategis pengembangan talenta konglomerasi besar seperti Astra Group, Adira Finance, dan puluhan BUMN.",
    "Kreator modul-modul pelatihan kepemimpinan berbasis psikologi aplikatif dan performance coaching.",
  ];

  return (
    <section id="pembicara" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Speaker Photo */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-xl">
              <div className="relative aspect-3/4 w-full overflow-hidden rounded-2xl bg-slate-100 border border-slate-200/80">
                <Image
                  src={photoJohn}
                  alt="Coach John Arif Purba, ACC"
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  priority
                  className="object-cover object-top"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-base font-bold text-slate-900">John Arif Purba, ACC</p>
                <p className="text-xs text-slate-500">
                  Psychologist, ICF Certified Coach, Master NLP Practitioner
                </p>
              </div>
            </div>
          </div>

          {/* Right: Speaker Bio & List of Achievements */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-red-50 border border-red-200 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-700">
                <UserCheck className="h-3.5 w-3.5" />
                <span>Kenali Mentor Anda</span>
              </div>
              <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold text-slate-950">
                John Arif Purba, ACC
              </h2>
              <p className="mt-1 text-sm sm:text-base font-semibold text-red-600">
                Psychologist, Associate Certified Coach (ICF), Master NLP Practitioner
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Selama lebih dari dua dekade, Coach John Arif Purba telah mendedikasikan karirnya
              untuk membantu ribuan profesional dan eksekutif di Indonesia mendobrak mental block,
              menguasai dinamika pengaruh, dan menempati posisi kepemimpinan strategis yang mereka
              impikan.
            </p>

            {/* List of Achievements */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Daftar Kualifikasi & Rekam Jejak Prestasi:
              </h4>
              <div className="grid grid-cols-1 gap-2.5">
                {achievements.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 leading-normal">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Credential Badges */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
              <span className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-800">
                🎓 Psikolog Resmi
              </span>
              <span className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-800">
                🏅 ACC Coach (ICF Global)
              </span>
              <span className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-800">
                🧠 Master NLP Practitioner
              </span>
              <span className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-800">
                💼 20+ Thn Advisory SDM
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpeakerBioSection;
