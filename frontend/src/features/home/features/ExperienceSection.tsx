import { Building2 } from "lucide-react";

export function ExperienceSection() {
  const clients = [
    { name: "PT Astra International Tbk", category: "Otomotif & Konglomerasi" },
    { name: "PT Astra Agro Lestari Tbk", category: "Agribisnis & Perkebunan" },
    { name: "PT Adira Finance Tbk", category: "Lembaga Pembiayaan" },
    { name: "Politeknik Manufaktur Astra", category: "Pendidikan Vokasi" },
    { name: "Amway Indonesia", category: "Consumer Goods & Retail" },
    { name: "PT Agra Tata Konstruksindo", category: "Konstruksi & Rekayasa" },
    { name: "PT Armada Auto Tara", category: "Otomotif & Layanan" },
    { name: "Air Putih Studio", category: "Arsitektur & Kreatif" },
  ];

  const industries = [
    "Otomotif",
    "Pembiayaan & Finansial",
    "Agribisnis",
    "Manufaktur",
    "Konstruksi",
    "Transportasi & Logistik",
    "Kesehatan",
    "Pemerintahan & BUMN",
    "Retail & Media",
  ];

  return (
    <section id="pengalaman" className="py-14 lg:py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header - Clean & punchy */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-red-600">
            Pengalaman
          </span>
          <h2 className="mt-1.5 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950">
            Dipercaya oleh Pemimpin Industri
          </h2>
        </div>

        {/* Client Cards Grid */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs hover:border-red-200 hover:shadow-md transition-all text-center group"
            >
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-400 group-hover:text-red-600 group-hover:bg-red-50 transition-colors">
                <Building2 className="h-5 w-5" />
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-red-600 transition-colors line-clamp-2">
                  {client.name}
                </h4>
                <p className="mt-1 text-[11px] font-medium text-slate-500">{client.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Focus Pills */}
        <div className="mt-12 pt-8 border-t border-slate-200 text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3.5">
            Cakupan Sektor Industri:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
            {industries.map((ind) => (
              <span
                key={ind}
                className="rounded-full bg-white border border-slate-200 px-3.5 py-1 text-xs font-medium text-slate-700 shadow-2xs"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
