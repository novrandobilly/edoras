"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import {
  submitSeminarRegistration,
  SeminarRegistrationInput,
} from "@/lib/pocketbase";
import {
  CheckCircle2,
  Loader2,
  AlertCircle,
  Sparkles,
  ShieldCheck,
  Calendar,
  Clock,
  Video,
  Lock,
} from "lucide-react";

interface Props {
  eventTitle: string;
  eventSlug: string;
}

export function ResolutionSection({ eventTitle, eventSlug }: Props) {
  const [formData, setFormData] = useState<SeminarRegistrationInput>({
    fullName: "",
    email: "",
    phone: "",
    companyOrInstitution: "",
    jobTitle: "",
    notes: "",
    eventSlug,
  });

  const [submittedData, setSubmittedData] =
    useState<SeminarRegistrationInput | null>(null);

  const mutation = useMutation({
    mutationFn: async (data: SeminarRegistrationInput) => {
      try {
        return await submitSeminarRegistration(data);
      } catch (err: unknown) {
        console.warn(
          "PocketBase submission note: running fallback or local mock if needed.",
          err
        );
        if (process.env.NODE_ENV === "development") {
          return { id: "mock-id-" + Date.now(), ...data };
        }
        throw err;
      }
    },
    onSuccess: (_, variables) => {
      setSubmittedData(variables);
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      companyOrInstitution: "",
      jobTitle: "",
      notes: "",
      eventSlug,
    });
    setSubmittedData(null);
    mutation.reset();
  };

  const deliverables = [
    "Akses Live Webinar Interaktif 2,5 Jam via Zoom",
    "Metodologi Modifikasi Perilaku BrainPower®",
    "Template 90-Day Executive Career Roadmap",
    "E-Certificate Resmi PT Inti Dinamis",
    "Sesi Bedah Kasus & Live Q&A dengan Coach John Arif Purba, ACC",
    "100% Gratis Tanpa Biaya Tersembunyi (Slot Terbatas)",
  ];

  return (
    <section id="daftar" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: Resolusi & Turning Point Summary (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-red-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-700">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Resolusi & Komitmen</span>
              </div>
              <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold text-slate-950 leading-tight">
                Saatnya Mengambil Kendali Atas Masa Depan Karir Anda
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Keputusan Anda hari ini akan menentukan posisi Anda 1 hingga 3 tahun ke depan.
                Amankan kursi Anda sekarang dan bersiaplah melompat ke level kepemimpinan berikutnya.
              </p>
            </div>

            {/* Event Details Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 text-xs sm:text-sm text-slate-700 space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <Calendar className="h-4 w-4 text-red-600 shrink-0" />
                <span>
                  <strong>Hari & Tanggal:</strong> Sabtu, 24 Oktober 2026
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-red-600 shrink-0" />
                <span>
                  <strong>Waktu:</strong> 09:00 - 11:30 WIB
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Video className="h-4 w-4 text-blue-600 shrink-0" />
                <span>
                  <strong>Media:</strong> Live via Zoom Meeting (Interaktif)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>
                  <strong>Investasi:</strong> Rp 0 (Complimentary RSVP)
                </span>
              </div>
            </div>

            {/* What is included checklist */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Semua Keuntungan Ini Termasuk:
              </h4>
              {deliverables.map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-amber-50 border border-amber-200 p-4 text-xs text-amber-900 flex items-start gap-2.5">
              <Lock className="h-4 w-4 text-amber-700 shrink-0 mt-0.5" />
              <p>
                <strong>Kapasitas Terbatas:</strong> Demi menjaga kualitas interaksi dalam sesi
                tanya-jawab, kuota dibatasi hanya untuk 150 peserta pertama.
              </p>
            </div>
          </div>

          {/* Right: Registration Form (7 cols) */}
          <div className="lg:col-span-7">
            {submittedData ? (
              <div className="rounded-3xl border border-emerald-200 bg-white p-8 sm:p-10 text-center shadow-xl">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="mt-4 text-2xl font-black text-slate-900">
                  Pendaftaran Berhasil Dikonfirmasi!
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                  Terima kasih, <strong className="text-slate-900">{submittedData.fullName}</strong>!
                  Kursi Anda untuk seminar <span className="font-semibold text-red-600">{eventTitle}</span> telah diamankan.
                </p>

                <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50 p-5 text-left text-xs sm:text-sm text-slate-600 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Email:</span>
                    <span className="font-semibold text-slate-900">{submittedData.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">WhatsApp:</span>
                    <span className="font-semibold text-slate-900">{submittedData.phone}</span>
                  </div>
                  {submittedData.companyOrInstitution && (
                    <div className="flex justify-between">
                      <span className="text-slate-400">Perusahaan:</span>
                      <span className="font-semibold text-slate-900">
                        {submittedData.companyOrInstitution}
                      </span>
                    </div>
                  )}
                  {submittedData.jobTitle && (
                    <div className="flex justify-between">
                      <span className="text-slate-400">Posisi:</span>
                      <span className="font-semibold text-slate-900">{submittedData.jobTitle}</span>
                    </div>
                  )}
                </div>

                <p className="mt-5 text-xs text-slate-500">
                  Tautan akses Zoom dan panduan teknis telah dikirimkan ke email Anda. Tim kami juga akan mengirimkan reminder via WhatsApp 1 hari sebelum acara dimulai.
                </p>

                <button
                  onClick={handleReset}
                  className="mt-6 inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-xs sm:text-sm font-semibold text-white hover:bg-slate-800 transition-colors shadow-sm"
                >
                  Daftarkan Rekan Kerja / Tim Anda
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl shadow-slate-200/60"
              >
                <div className="mb-6">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-red-50 border border-red-200 px-3 py-1 text-xs font-bold text-red-700">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Formulir Pendaftaran Online (RSVP)</span>
                  </div>
                  <h3 className="mt-2 text-xl sm:text-2xl font-black text-slate-950">
                    Amankan Kursi Gratis Anda
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-500">
                    Lengkapi data diri Anda untuk menerima link akses Zoom dan Exclusive Action Workbook.
                  </p>
                </div>

                {mutation.isError && (
                  <div className="mb-6 flex items-start gap-3 rounded-xl border border-rose-200 bg-rose-50 p-4 text-xs text-rose-700">
                    <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                    <p>
                      Terjadi kendala saat mengirimkan pendaftaran. Silakan periksa koneksi internet Anda atau hubungi admin via WhatsApp.
                    </p>
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Contoh: Budi Santoso"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Kerja / Pribadi *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="nama@perusahaan.com"
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Nomor WhatsApp Aktif *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="0812-3456-7890"
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Nama Perusahaan / Institusi
                      </label>
                      <input
                        type="text"
                        name="companyOrInstitution"
                        value={formData.companyOrInstitution}
                        onChange={handleChange}
                        placeholder="Contoh: PT Maju Bersama"
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Jabatan / Posisi Saat Ini
                      </label>
                      <input
                        type="text"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        placeholder="Contoh: Manager Operasional"
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Tantangan Karir Utama yang Ingin Anda Selesaikan (Opsional)
                    </label>
                    <textarea
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Ceritakan kendala yang Anda hadapi (misal: sulit tembus promosi, buntu komunikasi dengan atasan, dsb.)"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={mutation.isPending}
                    className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-4 text-sm sm:text-base font-bold text-white shadow-xl shadow-red-600/25 hover:bg-red-700 disabled:opacity-60 transition-all active:scale-[0.99]"
                  >
                    {mutation.isPending ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Mengamankan Kursi Anda...</span>
                      </>
                    ) : (
                      <span>Daftar Sekarang (100% Gratis)</span>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                    <ShieldCheck className="h-4 w-4 text-emerald-600" />
                    <span>Data Anda 100% aman dan terjaga kerahasiaannya. Tanpa spam.</span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResolutionSection;
