"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle2 } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    service: "Pelatihan & Pengembangan SDM",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waText = encodeURIComponent(
      `*Halo PT Inti Dinamis, Permintaan Konsultasi SDM*\n\n` +
        `*Nama:* ${formData.name}\n` +
        `*Perusahaan:* ${formData.company}\n` +
        `*WhatsApp/Telp:* ${formData.phone}\n` +
        `*Layanan:* ${formData.service}\n` +
        `*Kebutuhan:* ${formData.message}`
    );
    window.open(`https://wa.me/628118888000?text=${waText}`, "_blank");
    setIsSubmitted(true);
  };

  const servicesList = [
    "Pelatihan & Pengembangan SDM (In-House Training)",
    "Performance & Leadership Coaching",
    "HR & OD Consulting",
    "Potential Assessment (Pemeriksaan Psikologis)",
    "Recruitment & Executive Search",
    "BrainPower® Training",
    "Outbound & Team Building",
  ];

  return (
    <section id="kontak" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-red-600">Kontak</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
            Mulai Konsultasi Bersama Kami
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Diskusikan tantangan organisasi dan sasaran pengembangan SDM perusahaan Anda.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Quick Direct Info - 5 cols */}
          <div className="md:col-span-5 space-y-6">
            <div className="rounded-2xl bg-slate-900 text-white p-7 shadow-sm">
              <h3 className="text-base font-bold">Konsultasi Langsung</h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Hubungi tim konsultan kami melalui WhatsApp untuk respon cepat dan diskusi jadwal
                pertemuan.
              </p>
              <a
                href="https://wa.me/628118888000?text=Halo%20PT%20Inti%20Dinamis%2C%20saya%20ingin%20berkonsultasi%20mengenai%20kebutuhan%20pelatihan%20dan%20pengembangan%20SDM."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 w-full rounded-xl bg-[#25D366] px-5 py-3 text-xs font-bold text-white shadow-sm hover:bg-[#20bd5a] transition-all"
              >
                <MessageCircle className="h-4 w-4 fill-current" />
                <span>Chat via WhatsApp</span>
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 space-y-4 text-xs">
              <div className="flex items-center gap-3 text-slate-700">
                <Mail className="h-4 w-4 text-red-600 shrink-0" />
                <a href="mailto:contact@intidinamis.com" className="font-semibold hover:underline">
                  contact@intidinamis.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <Phone className="h-4 w-4 text-red-600 shrink-0" />
                <span className="font-medium">+62 (21) 555-0192 / 0811-8888-000</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <MapPin className="h-4 w-4 text-red-600 shrink-0" />
                <span className="font-medium">Jakarta & Surabaya, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Form - 7 cols */}
          <div className="md:col-span-7">
            <div className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-8 shadow-xs">
              {isSubmitted ? (
                <div className="py-8 text-center">
                  <CheckCircle2 className="mx-auto h-10 w-10 text-red-600" />
                  <h4 className="mt-3 text-base font-bold text-slate-900">Terima Kasih!</h4>
                  <p className="mt-1 text-xs text-slate-600">
                    Pesan Anda telah terhubung. Tim kami akan segera meninjau dan menghubungi Anda.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 text-xs font-bold text-red-600 underline cursor-pointer"
                  >
                    Kirim form baru
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Nama Lengkap *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Budi Santoso"
                        className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-xs text-slate-900 focus:border-red-600 focus:outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Perusahaan *</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="PT Maju Bersama"
                        className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-xs text-slate-900 focus:border-red-600 focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        No. WhatsApp / Telp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="08123456789"
                        className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-xs text-slate-900 focus:border-red-600 focus:outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Layanan *</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-xs text-slate-900 focus:border-red-600 focus:outline-hidden bg-white"
                      >
                        {servicesList.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Catatan / Kebutuhan
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Jelaskan kebutuhan pelatihan, sasaran, atau level peserta..."
                      className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-xs text-slate-900 focus:border-red-600 focus:outline-hidden"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center justify-center gap-2 w-full rounded-xl bg-red-600 px-5 py-3 text-xs font-bold text-white shadow-sm hover:bg-red-700 transition-all cursor-pointer"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>Kirim Permintaan Konsultasi</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
