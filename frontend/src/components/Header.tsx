"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, MessageSquare, PhoneCall } from "lucide-react";
import { IntiDinamisLogo } from "@/components/ui/IntiDinamisLogo";

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
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center group transition-transform group-hover:scale-105"
          aria-label="PT Inti Dinamis - Beranda"
        >
          <IntiDinamisLogo size="md" priority />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-700">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-red-600 transition-colors py-1"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/#kontak"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-red-600/20 hover:from-red-700 hover:to-red-800 hover:shadow-md transition-all active:scale-[0.98]"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Konsultasi SDM</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 hover:text-red-600 transition-colors"
          aria-label="Buka Menu Navigasi"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {isMobileMenuOpen && (
        <div className="border-b border-slate-200 bg-white px-4 py-6 md:hidden shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4 text-base font-medium text-slate-800">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-red-600 transition-colors py-1 border-b border-slate-100 pb-2"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/#kontak"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-red-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-md hover:bg-red-700 transition-colors"
              >
                <PhoneCall className="h-4 w-4" />
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
