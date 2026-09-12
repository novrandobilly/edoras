import { Building2, Award } from "lucide-react";

export function AsSeenOnSection() {
  const corporatePartners = [
    { name: "PT Astra International Tbk", category: "Konglomerasi & Otomotif" },
    { name: "PT Adira Dinamika Multi Finance Tbk", category: "Lembaga Pembiayaan" },
    { name: "PT Astra Agro Lestari Tbk", category: "Agribisnis & Perkebunan" },
    { name: "Amway Indonesia", category: "Consumer Goods & FMCG" },
    { name: "Politeknik Manufaktur Astra", category: "Pendidikan Vokasi Nasional" },
    { name: "PT Agra Tata Konstruksindo", category: "Infrastruktur & Konstruksi" },
  ];

  return (
    <section className="py-14 sm:py-18 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-slate-400">
            <Award className="h-4 w-4 text-red-600" />
            <span>As Seen On & Dipercaya Oleh</span>
          </div>
          <h3 className="mt-2 text-xl sm:text-2xl font-black text-slate-900">
            Dipercaya Oleh Para Pemimpin & Perusahaan Terkemuka di Indonesia
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-500">
            Metodologi pengembangan SDM PT Inti Dinamis telah diimplementasikan di berbagai
            sektor industri strategis selama lebih dari 20 tahun.
          </p>
        </div>

        {/* Corporate Trust Grid */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {corporatePartners.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center justify-center rounded-xl border border-slate-200/80 bg-slate-50/60 p-4 text-center transition-all hover:bg-white hover:shadow-xs hover:border-red-200 group"
            >
              <Building2 className="h-6 w-6 text-slate-400 group-hover:text-red-600 transition-colors" />
              <p className="mt-2 text-xs font-bold text-slate-800 line-clamp-1 group-hover:text-red-600 transition-colors">
                {item.name}
              </p>
              <p className="text-[10px] text-slate-500 mt-0.5 line-clamp-1">{item.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AsSeenOnSection;
