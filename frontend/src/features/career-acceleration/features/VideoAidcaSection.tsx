import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { PlayCircle, Sparkles } from "lucide-react";

export function VideoAidcaSection() {
  const aidcaSteps = [
    {
      letter: "A",
      stage: "Attention (Fakta Mengejutkan)",
      desc: "Mengapa kerja keras saja tidak cukup? Data membuktikan 85% profesional berbakat tersendat di level menengah tanpa mengetahui penyebab aslinya.",
    },
    {
      letter: "I",
      stage: "Interest (Pergeseran Paradigma)",
      desc: "Bagaimana cara pandang dewan direksi menilai seorang calon pemimpin: bukan dari jam kerja, melainkan Strategic Value Creation.",
    },
    {
      letter: "D",
      stage: "Desire (Peta Peluang & Otoritas)",
      desc: "Gambaran nyata bagaimana kepemimpinan adaptif dan modifikasi perilaku dapat membuka pintu promosi dan negosiasi kompensasi bernilai tinggi.",
    },
    {
      letter: "C",
      stage: "Conviction (Validasi Metodologi)",
      desc: "Metodologi BrainPower® dan coaching berstandar ICF yang telah mentransformasi ribuan alumni korporasi besar di Indonesia.",
    },
    {
      letter: "A",
      stage: "Action (Langkah Nyata)",
      desc: "Keputusan penting untuk mendaftar dan mengamankan kursi Anda sebelum kapasitas live session penuh.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background visual accent */}
      <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-red-600/10 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-950/60 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-red-400">
            <PlayCircle className="h-4 w-4" />
            <span>Video Pengantar Eksklusif (AIDCA Framework)</span>
          </div>

          <h2 className="mt-4 text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Saksikan Cuplikan Rahasia di Balik Akselerasi Karir Eksekutif
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Pahami alur berpikir strategis bagaimana para pemimpin puncak mendesain lonjakan karir
            mereka secara sistematis melalui formula AIDCA.
          </p>
        </div>

        {/* Video Placeholder & AIDCA Breakdown Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Video Placeholder Frame */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl border-2 border-dashed border-slate-700 bg-slate-950 p-2 sm:p-4 shadow-2xl">
              <ImagePlaceholder
                title="Placeholder Video Teaser AIDCA"
                subtitle="Area pemutaran video pengantar seminar (Rasio 16:9). Sematkan video YouTube/Vimeo atau file video MP4 di sini."
                aspectRatio="video"
                icon="video"
                badge="Durasi: 3 Menit"
                className="bg-slate-950/80 border-slate-800 text-slate-300"
              />
              <div className="mt-3 flex items-center justify-between px-2 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-red-400" />
                  Sesi Pengantar Oleh Master Coach John Arif Purba, ACC
                </span>
                <span className="rounded bg-slate-800 px-2 py-0.5 text-[10px] font-mono">
                  HD 1080p
                </span>
              </div>
            </div>
          </div>

          {/* Right: AIDCA Step-by-Step Breakdown */}
          <div className="lg:col-span-5 space-y-3.5">
            {aidcaSteps.map((step) => (
              <div
                key={step.letter}
                className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 transition-all hover:border-red-500/50 hover:bg-slate-800/60"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-600 text-xs font-black text-white shadow-xs">
                    {step.letter}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-white">
                    {step.stage}
                  </h4>
                </div>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed font-normal pl-10">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoAidcaSection;
