import { Quote, Target } from "lucide-react";

export function AboutSection() {
  return (
    <section id="tentang-kami" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-red-600">
            Tentang Kami
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
            Partner Anda Menuju Organisasi yang Lebih Baik
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Didirikan tahun 2005, Inti Dinamis berfokus pada jasa konsultan organisasi dan
            pengembangan sumber daya manusia—mengubah potensi talenta menjadi keunggulan daya saing
            perusahaan.
          </p>
        </div>

        {/* Thought-Provoking Centerpiece Quote */}
        <div className="mt-14 relative rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-12 shadow-sm text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600 mb-6">
            <Quote className="h-6 w-6" />
          </div>

          <blockquote className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight leading-snug">
            &ldquo;Hasil ditentukan tindakan.
            <br />
            Tindakan ditentukan pikiran.
            <br />
            Pikiran ditentukan keyakinan.&rdquo;
          </blockquote>

          <p className="mt-6 text-sm font-bold text-slate-900">Coach John Arif Purba, ACC</p>
          <p className="text-xs text-slate-500 font-medium">
            Psychologist • Associate Certified Coach (ICF) • Master NLP Practitioner
          </p>

          <div className="mt-8 pt-6 border-t border-slate-100 max-w-xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-600">
              <Target className="h-4 w-4" />
              <span>Misi Inti Dinamis</span>
            </div>
            <p className="mt-2 text-base font-bold text-slate-900">
              &ldquo;Meningkatkan kualitas Human Capital menjadi kontributor hebat.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
