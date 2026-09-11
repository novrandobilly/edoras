"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Calendar, ArrowRight } from "lucide-react";
import { IntiDinamisLogo } from "@/components/ui/IntiDinamisLogo";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center group transition-transform group-hover:scale-105">
          <IntiDinamisLogo size="md" priority />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <Link href="/#services" className="hover:text-blue-600 transition-colors">
            Services
          </Link>
          <Link href="/#about" className="hover:text-blue-600 transition-colors">
            About Us
          </Link>
          <Link href="/#methodology" className="hover:text-blue-600 transition-colors">
            Methodology
          </Link>
          <Link href="/#contact" className="hover:text-blue-600 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/seminar"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 hover:bg-blue-700 hover:shadow-md transition-all active:scale-[0.98]"
          >
            <Calendar className="h-4 w-4" />
            <span>Online Seminar</span>
            <ArrowRight className="h-4 w-4 opacity-70" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {isMobileMenuOpen && (
        <div className="border-b border-slate-200 bg-white px-4 py-6 md:hidden">
          <nav className="flex flex-col gap-4 text-base font-medium text-slate-700">
            <Link
              href="/#services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-blue-600"
            >
              Services
            </Link>
            <Link
              href="/#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-blue-600"
            >
              About Us
            </Link>
            <Link
              href="/#methodology"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-blue-600"
            >
              Methodology
            </Link>
            <Link
              href="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-blue-600"
            >
              Contact
            </Link>
            <div className="pt-2">
              <Link
                href="/seminar"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-md hover:bg-blue-700"
              >
                <Calendar className="h-4 w-4" />
                <span>Join Online Seminar</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
