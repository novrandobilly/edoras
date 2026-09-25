export function AboutSection() {
  const stats = [
    {
      value: "20+",
      label:
        "Tahun pengalaman dedikasi dalam pengembangan SDM & transformasi organisasi",
    },
    {
      value: "100+",
      label:
        "Klien korporasi lintas sektor mempercayakan keunggulan kinerjanya",
    },
    {
      value: "Ribuan",
      label:
        "Pemimpin, eksekutif, dan talenta kunci telah dikembangkan potensinya",
    },
  ];

  return (
    <section
      id="tentang-kami"
      className="relative z-20 -mt-10 sm:-mt-14 lg:-mt-18 rounded-t-[36px] sm:rounded-t-[48px] lg:rounded-t-[56px] bg-white pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-28 border-t border-slate-100 shadow-[0_-16px_40px_rgba(0,0,0,0.08)]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Grid: Label on left + Large Editorial Statement on right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Left Column: Pill / Dot Category Tag */}
          <div className="md:col-span-3 lg:col-span-2">
            <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800 tracking-tight">
              <span className="text-xs font-bold uppercase tracking-widest text-red-600">
                Tentang Inti Dinamis
              </span>
            </div>
          </div>

          {/* Right Column: Hierarchical Editorial Statement */}
          <div className="md:col-span-9 lg:col-span-10">
            {/* Primary / Lead Paragraph */}
            <p className="text-base sm:text-lg lg:text-xl font-medium tracking-tight text-slate-900 leading-relaxed mb-5 sm:mb-6">
              Kami membantu organisasi memberdayakan manusia dengan menemukan
              dan mengembangkan potensi manusia menjadi kemampuan yang nyata,
              perilaku yang efektif, dan kontribusi yang berdampak.
            </p>

            {/* Secondary / Supporting Paragraph */}
            <p className="text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-4xl">
              Memberdayakan manusia menjadi awal dari kinerja yang bergerak,
              organisasi yang bertumbuh, dan hasil yang nyata.
            </p>

            {/* The Question & Resolution Box (Addressing the Question) */}
            <div className="mt-6 sm:mt-8 p-6 sm:p-7 lg:p-8 rounded-2xl bg-slate-50 border border-slate-200/80 border-l-4 border-l-red-600 max-w-4xl shadow-2xs">
              <p className="text-base sm:text-lg lg:text-xl tracking-tight text-slate-950 leading-snug mb-3 sm:mb-4">
                Pertanyaannya:
              </p>
              <p className="text-base sm:text-lg lg:text-xl font-bold tracking-tight text-slate-950 leading-snug">
                Sudahkah organisasi Anda benar-benar memberdayakan manusia untuk
                menghasilkan kinerja terbaiknya?
              </p>
            </div>
            <div className="mt-16 sm:mt-20 lg:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-14">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="border-l border-slate-200/90 pl-5 sm:pl-6 flex flex-col justify-start"
                >
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-950">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-sm sm:text-base text-slate-500 font-normal leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Grid: 3 Metric Columns with Left Divider Lines */}
      </div>
    </section>
  );
}

export default AboutSection;
