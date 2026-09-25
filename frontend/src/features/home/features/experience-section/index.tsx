import Image from "next/image";
import { cn } from "@/lib/utils";
import { CLIENTS } from "./clients";

export function ExperienceSection() {
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

        {/* Client Cards Grid - Scalable for 20-50+ clients */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
          {CLIENTS.map((client) => (
            <div
              key={client.name}
              className="flex flex-col justify-between items-center rounded-xl sm:rounded-2xl border border-slate-200/90 bg-white p-3.5 sm:p-4 shadow-2xs hover:border-red-200 hover:shadow-md transition-all text-center group"
            >
              {/* Client Logo Container */}
              <div className="flex h-16 sm:h-20 w-full items-center justify-center p-2 overflow-hidden">
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
                      className="max-h-12 sm:max-h-14 max-w-[85%] w-auto object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Client Info */}
              <div className="mt-2.5 w-full border-t border-slate-100 pt-2.5">
                <h4 className="text-[11px] sm:text-xs font-semibold text-slate-800 group-hover:text-red-600 transition-colors line-clamp-1">
                  {client.name}
                </h4>
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
