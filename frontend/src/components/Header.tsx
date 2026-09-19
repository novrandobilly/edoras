"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import { IntiDinamisLogo } from "@/components/ui/IntiDinamisLogo";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Tentang Kami", href: "/#tentang-kami" },
    { label: "Produk & Jasa", href: "/#produk-jasa" },
    { label: "Pengalaman", href: "/#pengalaman" },
    { label: "Galeri", href: "/#galeri" },
    { label: "Tim Ahli", href: "/#tim-ahli" },
    { label: "Kontak", href: "/#kontak" },
  ];

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-3 sm:px-6 w-full flex flex-col items-center pointer-events-none">
      {/* Floating Pill Capsule Bar */}
      <div className="w-full max-w-7xl rounded-full bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg shadow-black/5 px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between pointer-events-auto transition-all">
        {/* Brand Logo - Original Brand Colors */}
        <Link
          href="/"
          className="flex items-center group transition-transform hover:scale-105"
          aria-label="PT Inti Dinamis - Beranda"
        >
          <IntiDinamisLogo size="sm" variant="default" priority />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2.5 text-xs lg:text-sm font-semibold text-slate-700">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-3 py-1.5 rounded-full transition-all hover:text-slate-950 hover:bg-slate-100/90 text-slate-700",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA Button - Clean Black Pill */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            href="/#kontak"
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-xs sm:text-sm font-bold text-white hover:bg-slate-800 transition-all shadow-xs active:scale-95"
          >
            <span>Konsultasi</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden inline-flex items-center justify-center rounded-full p-2 text-slate-700 hover:bg-slate-100 hover:text-slate-950 transition-colors"
          aria-label="Buka Menu Navigasi"
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown Card */}
      {isMobileMenuOpen && (
        <div className="mt-2 w-full max-w-sm rounded-3xl border border-slate-200/90 bg-white/95 backdrop-blur-xl p-5 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 pointer-events-auto md:hidden">
          <nav className="flex flex-col gap-1.5 text-sm font-semibold text-slate-800">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-xl px-3.5 py-2.5 text-slate-700 hover:bg-slate-100 hover:text-red-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 mt-1 border-t border-slate-100">
              <Link
                href="/#kontak"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full rounded-full bg-slate-950 px-4 py-2.5 text-center text-xs font-bold text-white shadow-md hover:bg-slate-800 transition-colors"
              >
                <PhoneCall className="h-3.5 w-3.5" />
                <span>Konsultasi Sekarang</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
