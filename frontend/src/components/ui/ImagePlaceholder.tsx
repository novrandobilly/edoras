import React from "react";
import { Image as ImageIcon, Users, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  title?: string;
  subtitle?: string;
  aspectRatio?: "video" | "square" | "portrait" | "wide" | "tall";
  className?: string;
  icon?: "image" | "team" | "event";
  badge?: string;
}

export function ImagePlaceholder({
  title = "Foto Dokumentasi",
  subtitle = "Rasio optimal 16:9 (Landscape)",
  aspectRatio = "video",
  className,
  icon = "image",
  badge,
}: ImagePlaceholderProps) {
  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    wide: "aspect-[21/9]",
    tall: "aspect-[4/5]",
  }[aspectRatio];

  const IconComponent =
    icon === "team" ? Users : icon === "event" ? Sparkles : ImageIcon;

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-slate-200 bg-gradient-to-br from-slate-50 via-red-50/20 to-slate-100 p-6 text-center shadow-inner transition-all hover:border-red-300 group select-none",
        aspectClasses,
        className
      )}
    >
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

      {badge && (
        <span className="absolute top-3 right-3 inline-flex items-center rounded-full bg-red-100/90 px-2.5 py-0.5 text-xs font-semibold text-red-700 border border-red-200/60 shadow-xs">
          {badge}
        </span>
      )}

      <div className="relative z-10 flex flex-col items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-red-600 shadow-sm border border-slate-200/80 group-hover:scale-110 group-hover:border-red-200 group-hover:text-red-700 transition-all duration-300">
          <IconComponent className="h-6 w-6" />
        </div>
        <p className="mt-3 text-sm font-semibold text-slate-800 group-hover:text-red-700 transition-colors">
          {title}
        </p>
        <p className="mt-1 text-xs text-slate-500 max-w-xs leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export default ImagePlaceholder;
