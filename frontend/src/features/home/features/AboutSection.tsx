import { Quote } from "lucide-react";

export function AboutSection() {
  return (
    <section id="tentang-kami" className="py-14 lg:py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Clear Single Headline & Purpose (7 cols) */}
          <div className="lg:col-span-7 space-y-3.5">
            <span className="text-xs font-bold uppercase tracking-widest text-red-600">
              Tentang Kami
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 leading-snug">
              Partner Anda Menuju Organisasi yang Lebih Baik
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Didirikan tahun <strong>2005</strong>, Inti Dinamis bergerak dalam jasa konsultan organisasi
              dan pengembangan sumber daya manusia. Kami mendampingi rekan bisnis mengelola dan
              mengembangkan Human Capital untuk menjamin tercapainya visi organisasi.
            </p>
            <div className="pt-1">
              <div className="inline-flex items-center gap-2 rounded-xl bg-red-50/80 border border-red-100 px-3.5 py-2 text-xs text-slate-800">
                <span className="font-bold text-red-700 uppercase tracking-wide text-[10px]">
                  Misi:
                </span>
                <span className="font-semibold text-slate-900">
                  &ldquo;Meningkatkan kualitas Human Capital menjadi kontributor hebat.&rdquo;
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Compact Thought-Provoking Quote Box (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-slate-200/90 bg-white p-6 shadow-2xs">
              <Quote className="h-5 w-5 text-red-600 mb-2.5 opacity-80" />
              <blockquote className="text-base sm:text-lg font-semibold text-slate-900 italic leading-snug">
                &ldquo;Hasil ditentukan tindakan.
                <br />
                Tindakan ditentukan pikiran.
                <br />
                Pikiran ditentukan keyakinan.&rdquo;
              </blockquote>
              <div className="mt-4 pt-3 border-t border-slate-100">
                <p className="text-xs font-bold text-slate-900">Coach John Arif Purba, ACC</p>
                <p className="text-[11px] text-slate-500 font-medium">
                  Psychologist • Coach ICF • Master NLP
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
