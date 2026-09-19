export function AboutSection() {
  const stats = [
    {
      value: "95%",
      label: "Tingkat kepuasan klien dalam pendampingan organisasi & pelatihan",
    },
    {
      value: "20+",
      label: "Tahun pengalaman dedikasi pengembangan Human Capital",
    },
    {
      value: "500+",
      label: "Klien korporasi lintas industri manufaktur, perbankan, & BUMN",
    },
    {
      value: "50k+",
      label: "Peserta & eksekutif yang telah mengikuti program pengembangan",
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
              <span className="h-2 w-2 rounded-full bg-slate-950 shrink-0" />
              <span>Tentang Inti Dinamis</span>
            </div>
          </div>

          {/* Right Column: Hierarchical Editorial Statement */}
          <div className="md:col-span-9 lg:col-span-10">
            {/* Primary / Lead Paragraph (Larger) */}
            <p className="text-xl sm:text-2xl lg:text-[1.75rem] font-medium tracking-tight text-slate-900 leading-[1.4] mb-5 sm:mb-6">
              Di Inti Dinamis, kami membantu organisasi menemukan dan
              mengembangkan potensi manusia menjadi kemampuan yang nyata,
              perilaku yang efektif, dan kontribusi yang berdampak. Sebab
              memberdayakan manusia bukanlah tujuan akhir.
            </p>

            {/* Secondary / Supporting Paragraph (Proportionally Scaled) */}
            <p className="text-base sm:text-lg lg:text-xl font-normal text-slate-600 leading-relaxed max-w-4xl">
              Tujuan akhirnya adalah kinerja yang bergerak, organisasi yang
              bertumbuh, dan hasil yang nyata. Pertanyaannya: sudahkah
              organisasi Anda benar-benar memberdayakan manusia untuk
              menghasilkan kinerja terbaiknya?
            </p>
          </div>
        </div>

        {/* Bottom Grid: 4 Metric Columns with Left Divider Lines */}
        <div className="mt-16 sm:mt-20 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="border-l border-slate-200/90 pl-5 sm:pl-6 flex flex-col justify-start"
            >
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950">
                {stat.value}
              </p>
              <p className="mt-3 text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
