import Image from "next/image";
import { CLIENTS } from "./clients";

export function ExperienceSection() {
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

        {/* Client Cards Grid */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
          {CLIENTS.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center rounded-xl sm:rounded-2xl border border-slate-200/90 bg-white p-3.5 sm:p-4 h-20 sm:h-24 shadow-2xs hover:border-red-200 hover:shadow-md transition-all group"
            >
              <div className="flex h-full w-full items-center justify-center overflow-hidden">
                <Image
                  src={client.logo}
                  alt={`Logo ${client.name}`}
                  className="max-h-12 sm:max-h-14 max-w-[85%] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
