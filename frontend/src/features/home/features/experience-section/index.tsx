import Image from "next/image";
import { CLIENTS } from "./clients";

export function ExperienceSection() {
  return (
    <section
      id="pengalaman"
      className="py-12 lg:py-16 bg-white border-b border-slate-100"
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
            Dipercaya oleh berbagai perusahaan multinasional, korporasi
            nasional, dan institusi terkemuka sebagai mitra pengembangan sumber
            daya manusia.
          </p>
        </div>

        {/* Compact Logos Grid */}
        <div className="mt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3 sm:gap-4 items-center">
          {CLIENTS.map((client) => (
            <div
              key={client.name}
              className="flex h-12 sm:h-14 items-center justify-center p-1.5 group"
            >
              <Image
                src={client.logo}
                alt={`Logo ${client.name}`}
                className="max-h-8 sm:max-h-9 max-w-[90%] w-auto h-auto object-contain transition-transform duration-200 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
