"use client";

import { useState } from "react";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>("semua");

  const categories = [
    { id: "semua", label: "Semua" },
    { id: "workshop", label: "Workshop & Kelas" },
    { id: "outbound", label: "Outbound & Lapangan" },
    { id: "coaching", label: "Executive Coaching" },
  ];

  const galleryItems = [
    {
      id: 1,
      title: "In-House Leadership Workshop",
      subtitle: "Fasilitasi kelas interaktif kepemimpinan manajerial",
      category: "workshop",
      badge: "In-House Training",
      icon: "event" as const,
    },
    {
      id: 2,
      title: "Team Cohesion & Outbound",
      subtitle: "Experiential learning untuk membangun sinergi tim",
      category: "outbound",
      badge: "Outbound",
      icon: "team" as const,
    },
    {
      id: 3,
      title: "Executive One-on-One Coaching",
      subtitle: "Pendampingan personal untuk pimpinan strategis",
      category: "coaching",
      badge: "Coaching",
      icon: "image" as const,
    },
    {
      id: 4,
      title: "BrainPower® Workshop",
      subtitle: "Modifikasi kebiasaan kerja & pemrograman pikiran",
      category: "workshop",
      badge: "BrainPower®",
      icon: "event" as const,
    },
  ];

  const filteredItems =
    activeCategory === "semua"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="galeri" className="py-14 lg:py-20 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header - Clean without redundant description */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-red-600">Galeri</span>
          <h2 className="mt-1.5 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950">
            Dokumentasi Aktivitas
          </h2>
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
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-2xs hover:border-red-200 hover:shadow-md transition-all"
            >
              <ImagePlaceholder
                title={item.title}
                subtitle={item.subtitle}
                aspectRatio="video"
                badge={item.badge}
                icon={item.icon}
                className="group-hover:scale-[1.01] transition-transform duration-200"
              />
              <div className="mt-3 px-1 flex items-center justify-between">
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                  {item.title}
                </h4>
                <span className="text-[11px] font-medium text-slate-400">{item.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
