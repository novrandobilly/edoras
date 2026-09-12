"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function QuickContactWidget() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappMessage = encodeURIComponent(
    "Halo PT Inti Dinamis, saya ingin berkonsultasi mengenai kebutuhan pelatihan dan pengembangan SDM di perusahaan kami."
  );
  const whatsappUrl = `https://wa.me/628118888000?text=${whatsappMessage}`;

  return (
    <aside aria-label="Akses Kontak Cepat" className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 select-none">
      {/* Scroll to top button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-600 shadow-md border border-slate-200 hover:bg-slate-50 hover:text-red-600 transition-all hover:scale-105 active:scale-95"
          aria-label="Kembali ke atas"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      )}

      {/* Small WhatsApp Floating Bubble with Official Icon */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 hover:bg-[#20bd5a] hover:scale-110 active:scale-95 transition-all duration-200"
        aria-label="Chat WhatsApp PT Inti Dinamis"
      >
        {/* Official WhatsApp SVG Handset in Speech Bubble */}
        <svg
          viewBox="0 0 24 24"
          width="30"
          height="30"
          fill="currentColor"
          className="translate-x-[0.5px]"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.64 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8.01 12.26C8.14 12.43 9.73 14.88 12.18 15.93C12.76 16.18 13.22 16.33 13.57 16.45C14.16 16.63 14.7 16.61 15.13 16.54C15.6 16.47 16.59 15.95 16.8 15.36C17.01 14.78 17.01 14.28 16.94 14.17C16.88 14.06 16.72 14 16.47 13.88C16.22 13.75 14.99 13.14 14.76 13.06C14.54 12.98 14.37 12.93 14.21 13.18C14.04 13.43 13.57 13.98 13.42 14.15C13.28 14.31 13.14 14.33 12.89 14.21C12.64 14.08 11.84 13.82 10.89 12.97C10.15 12.31 9.65 11.49 9.51 11.24C9.36 10.99 9.49 10.86 9.62 10.74C9.73 10.63 9.87 10.45 10 10.3C10.12 10.15 10.17 10.05 10.25 9.88C10.33 9.72 10.29 9.57 10.23 9.45C10.17 9.32 9.67 8.1 9.47 7.6C9.27 7.12 9.07 7.18 8.91 7.17C8.76 7.17 8.58 7.17 8.53 7.33Z" />
        </svg>

        {/* Hover label */}
        <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100">
          WhatsApp Kami
        </span>
      </a>
    </aside>
  );
}

export default QuickContactWidget;
