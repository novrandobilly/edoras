"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Apakah seminar online ini benar-benar 100% gratis?",
      a: "Ya, betul. Sesi webinar ini 100% complimentary (tanpa biaya) dengan melakukan reservasi RSVP terlebih dahulu. Program ini merupakan inisiatif CSR dan kontribusi edukasi PT Inti Dinamis untuk mempercepat pertumbuhan talenta kepemimpinan di Indonesia.",
    },
    {
      q: "Bagaimana jika saya berhalangan hadir tepat waktu? Apakah disediakan rekaman (recording)?",
      a: "Fokus utama webinar ini adalah interaktivitas dan sesi tanya jawab langsung membedah kasus karir peserta. Oleh karena itu, kami sangat menyarankan Anda hadir tepat waktu. Akses rekaman terbatas hanya akan diberikan kepada peserta yang telah menyelesaikan registrasi.",
    },
    {
      q: "Apakah peserta akan mendapatkan sertifikat keikutsertaan?",
      a: "Ya. Peserta yang hadir dan mengisi presensi evaluasi di akhir acara berhak mendapatkan E-Certificate resmi berstandar konsultan SDM PT Inti Dinamis, lengkap dengan nomor verifikasi untuk portofolio LinkedIn dan CV Anda.",
    },
    {
      q: "Siapa penyelenggara seminar ini?",
      a: "Seminar ini diselenggarakan oleh PT Inti Dinamis, konsultan manajemen SDM, performance coaching, dan asesmen organisasi yang telah beroperasi di Indonesia sejak tahun 2005 dan dipercaya oleh ratusan korporasi besar.",
    },
    {
      q: "Apakah ada batasan industri atau posisi untuk peserta?",
      a: "Tidak ada batasan industri. Format materi sangat relevan bagi profesional dari perbankan, FMCG, teknologi, manufaktur, agribisnis, BUMN, logistik, maupun konsultan. Terbuka bagi supervisor, manager, specialist, maupun calon eksekutif.",
    },
    {
      q: "Bagaimana cara saya menerima link akses Zoom?",
      a: "Setelah Anda mengisi formulir registrasi di atas, konfirmasi pendaftaran beserta link Zoom akan dikirimkan ke email Anda. Tim panitia kami juga akan mengirimkan pengingat melalui pesan WhatsApp 1 hari sebelum acara berlangsung.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-slate-700">
            <HelpCircle className="h-3.5 w-3.5 text-red-600" />
            <span>Pertanyaan yang Sering Diajukan</span>
          </div>
          <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
            Frequently Asked Questions (FAQ)
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Punya pertanyaan sebelum bergabung? Temukan jawabannya di bawah ini.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.q}
                className={cn(
                  "rounded-2xl border transition-all overflow-hidden",
                  isOpen
                    ? "border-red-200 bg-red-50/20 shadow-xs"
                    : "border-slate-200 bg-white hover:border-slate-300"
                )}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 pr-4">
                    {faq.q}
                  </span>
                  <div
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-200",
                      isOpen ? "rotate-180 bg-red-600 text-white" : "bg-slate-100 text-slate-500"
                    )}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
