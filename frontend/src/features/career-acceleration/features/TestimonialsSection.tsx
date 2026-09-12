import { Star, CheckCircle2 } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Hendra Kusuma, S.T., MM",
      role: "Senior Manager of Strategic Planning",
      company: "Multinational Financial Services",
      result: "Promosi ke Senior Manager dalam 8 Bulan (Kenaikan Kompensasi +65%)",
      quote:
        "Sebelum mengenal framework PT Inti Dinamis, saya merasa terjebak di level yang sama selama 4 tahun. Saya merasa sudah kerja keras tapi tidak pernah diprioritaskan. Materi modifikasi perilaku dan positioning membuka mata saya. Begitu saya ubah cara komunikasi ke jajaran direksi, peluang promosi langsung terbuka.",
    },
    {
      name: "Ratna Wulandari, S.Psi.",
      role: "VP of Human Capital & Organization",
      company: "Retail & Consumer Goods Group",
      result: "Memimpin Transformasi Budaya 2.000+ Karyawan",
      quote:
        "Pendekatan Coach John Arif Purba sangat presisi. Beliau membedah psikologi manusia dan dinamika relasi kekuasaan di korporasi dengan bahasa yang sangat aplikatif. Bukan sekadar teori buku, tapi strategi 'street-smart' yang langsung bisa dipraktikkan hari itu juga.",
    },
    {
      name: "Aditya Pratama",
      role: "Head of Engineering",
      company: "Tech Scale-Up Indonesia",
      result: "Transisi Sukses dari Individual Contributor ke Executive Leader",
      quote:
        "Sebagai orang dengan latar belakang teknis, tantangan terbesar saya adalah bagaimana menjual visi dan memimpin manusia, bukan mesin. Formula BrainPower® membekali saya dengan cara berpikir strategis yang membuat dewan direksi yakin mempercayakan divisi besar kepada saya.",
    },
  ];

  return (
    <section id="testimoni" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-red-600">
            Bukti Nyata (Social Proof)
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
            Kisah Sukses Profesional yang Telah Melakukan Akselerasi Karir
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Mereka pernah berada di posisi Anda—merasa mentok dan ragu. Lihat bagaimana
            perubahan strategi mengubah lintasan karir mereka.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/60 p-6 sm:p-7 shadow-xs hover:bg-white hover:border-red-200 hover:shadow-md transition-all group"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-500" />
                  ))}
                </div>

                {/* Result Highlight Badge */}
                <div className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-red-50 border border-red-200/60 px-2.5 py-1 text-[11px] font-bold text-red-700">
                  <CheckCircle2 className="h-3.5 w-3.5 text-red-600 shrink-0" />
                  <span className="line-clamp-1">{item.result}</span>
                </div>

                {/* Quote */}
                <p className="mt-4 text-xs sm:text-sm text-slate-700 leading-relaxed italic font-normal">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-xs shrink-0">
                  {item.name.substring(0, 2)}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-[11px] font-medium text-slate-500">{item.role}</p>
                  <p className="text-[10px] text-slate-400">{item.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
