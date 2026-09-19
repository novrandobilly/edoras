import Image from "next/image";
import { cn } from "@/lib/utils";
import logoAstra from "@/assets/clients/astra-international-logo.webp";
import logoAstraAgro from "@/assets/clients/astra-agro-lestari.jpg";
import logoAdira from "@/assets/clients/adira-finance-logo.webp";
import logoBcaFinance from "@/assets/clients/bca-finance-logo.webp";
import logoDanone from "@/assets/clients/danone-logo.webp";
import logoCharitas from "@/assets/clients/charitas-hospital-logo.webp";
import logoVoksel from "@/assets/clients/voksel-logo.webp";
import logoDbc from "@/assets/clients/dbc-logo.webp";

export function ExperienceSection() {
  const clients = [
    {
      name: "PT Astra International Tbk",
      category: "Otomotif & Konglomerasi",
      logo: logoAstra,
    },
    {
      name: "PT Astra Agro Lestari Tbk",
      category: "Agribisnis & Perkebunan",
      logo: logoAstraAgro,
      scaleClass: "scale-[1.5]",
    },
    {
      name: "PT Adira Finance Tbk",
      category: "Lembaga Pembiayaan",
      logo: logoAdira,
    },
    {
      name: "PT BCA Finance",
      category: "Lembaga Pembiayaan",
      logo: logoBcaFinance,
      scaleClass: "scale-[4]",
    },
    {
      name: "Danone Indonesia",
      category: "Consumer Goods & Nutrisi",
      logo: logoDanone,
    },
    {
      name: "Charitas Hospital Group",
      category: "Layanan Kesehatan & RS",
      logo: logoCharitas,
    },
    {
      name: "PT Voksel Electric Tbk",
      category: "Manufaktur & Energi",
      logo: logoVoksel,
    },
    {
      name: "Djabesmen Co. (DBC)",
      category: "Bahan Bangunan & Manufaktur",
      logo: logoDbc,
    },
  ];

  const industries = [
    "Otomotif & Konglomerasi",
    "Pembiayaan & Finansial",
    "Agribisnis & Perkebunan",
    "Consumer Goods & FMCG",
    "Layanan Kesehatan",
    "Manufaktur & Energi",
    "Bahan Bangunan & Konstruksi",
    "Pendidikan & Publik",
  ];

  return (
    <section
      id="pengalaman"
      className="py-14 lg:py-20 bg-slate-50 border-b border-slate-200/80"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header - Clean & punchy */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-red-600">
            Pengalaman
          </span>
          <h2 className="mt-1.5 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950">
            Dipercaya oleh Beragam Industri
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Berbagai perusahaan multinasional, korporasi nasional, dan institusi
            terkemuka yang telah bermitra bersama PT Inti Dinamis.
          </p>
        </div>

        {/* Client Cards Grid */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex flex-col justify-between items-center rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs hover:border-red-200 hover:shadow-md transition-all text-center group"
            >
              {/* Client Logo Container */}
              <div className="flex h-20 w-full items-center justify-center p-2 overflow-hidden">
                <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <div
                    className={cn(
                      "flex items-center justify-center",
                      client.scaleClass,
                    )}
                  >
                    <Image
                      src={client.logo}
                      alt={`Logo ${client.name}`}
                      className="max-h-14 max-w-[85%] w-auto object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Client Info */}
              <div className="mt-3 w-full border-t border-slate-100 pt-3">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-red-600 transition-colors line-clamp-1">
                  {client.name}
                </h4>
                <p className="mt-1 text-[11px] font-medium text-slate-500 line-clamp-1">
                  {client.category}
                </p>
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
