"use client";

import { useState } from "react";
import Image from "next/image";
import photoLeadership from "@/assets/activity/executive-leadership.jpg";
import photoAssessment from "@/assets/activity/potential-assessment.jpg";
import photoTeamBuilding from "@/assets/activity/team-building.jpg";
import photoWorkshopDbc from "@/assets/activity/workshop-dbc.jpg";

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>("semua");

  const categories = [
    { id: "semua", label: "Semua" },
    { id: "workshop", label: "Workshop & Leadership" },
    { id: "assessment", label: "Asesmen & Simulasi" },
    { id: "outbound", label: "Outbound & Team Building" },
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Executive Leadership Training",
      subtitle: "Fasilitasi kepemimpinan manajerial dan adaptasi peran kepemimpinan strategis",
      client: "Tunas Ridean Group",
      category: "workshop",
      badge: "Leadership Training",
      image: photoLeadership,
    },
    {
      id: 2,
      title: "Potential Assessment & Simulation",
      subtitle: "Asesmen potensi kompetensi talenta dan simulasi pemecahan masalah tim",
      client: "PT Voksel Electric Tbk",
      category: "assessment",
      badge: "Potential Assessment",
      image: photoAssessment,
    },
    {
      id: 3,
      title: "Team Building & Outbound Learning",
      subtitle: "Program experiential learning di alam bebas untuk memperkuat sinergi tim",
      client: "Adyawinsa Group",
      category: "outbound",
      badge: "Team Building",
      image: photoTeamBuilding,
    },
    {
      id: 4,
      title: "Personal Effectiveness Workshop",
      subtitle: "Pelatihan pembentukan mindset produktif, inisiatif, dan kinerja tim yang efektif",
      client: "DBC - Djabesmen Co.",
      category: "workshop",
      badge: "In-House Workshop",
      image: photoWorkshopDbc,
    },
  ];

  const filteredItems =
    activeCategory === "semua"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="galeri" className="py-14 lg:py-20 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-red-600">Galeri</span>
          <h2 className="mt-1.5 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950">
            Dokumentasi Aktivitas
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Potret nyata berbagai program pendampingan, asesmen kompetensi, pelatihan kepemimpinan, dan experiential learning bersama mitra korporasi.
          </p>
        </div>

        {/* Minimal Category Tabs */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-red-600 text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid (2x2 on desktop, clean & focused) */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-2xs hover:border-red-200 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-slate-100 border border-slate-200/80">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 550px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="rounded-md bg-slate-950/75 backdrop-blur-md px-2.5 py-1 text-[11px] font-semibold text-white shadow-xs">
                      {item.badge}
                    </span>
                  </div>
                </div>

                <div className="mt-4 px-1">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                      {item.title}
                    </h4>
                    <span className="text-xs font-semibold text-red-600 bg-red-50 border border-red-100 rounded-md px-2 py-0.5 shrink-0">
                      {item.client}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs text-slate-500 leading-relaxed font-normal">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
