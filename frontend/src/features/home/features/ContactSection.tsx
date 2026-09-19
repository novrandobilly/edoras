"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waText = encodeURIComponent(
      `*Halo PT Inti Dinamis, Saya,*\n\n` +
        `*Nama:* ${formData.name}\n` +
        `*No. HP:* ${formData.phone}\n` +
        `*Email:* ${formData.email}\n` +
        `*Pesan:* ${formData.message}` +
        `\n\nSaya ingin berkonsultasi mengenai kebutuhan pelatihan dan pengembangan SDM.`,
    );
    window.open(`https://wa.me/62811855212?text=${waText}`, "_blank");
    setIsSubmitted(true);
  };

  const whatsappUrl =
    "https://wa.me/62811855212?text=Halo%20PT%20Inti%20Dinamis%2C%20saya%20ingin%20berkonsultasi%20mengenai%20kebutuhan%20pelatihan%20dan%20pengembangan%20SDM.";

  return (
    <section
      id="kontak"
      className="py-14 lg:py-20 bg-slate-50 border-t border-slate-200/80"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Single Unified Contact Box */}
        <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs">
          {/* Header inside the box */}
          <div className="text-center pb-6 border-b border-slate-100">
            <span className="text-xs font-bold uppercase tracking-widest text-red-600">
              Kontak Kami
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950">
              Mulai Konsultasi
            </h2>

            {/* Direct Contact Info & WhatsApp inside the same box */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-5 text-xs text-slate-600">
              {/* WhatsApp Icon Link */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-[#1fad52] hover:text-[#168a41] transition-colors"
                title="Chat via WhatsApp"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="currentColor"
                >
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.64 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8.01 12.26C8.14 12.43 9.73 14.88 12.18 15.93C12.76 16.18 13.22 16.33 13.57 16.45C14.16 16.63 14.7 16.61 15.13 16.54C15.6 16.47 16.59 15.95 16.8 15.36C17.01 14.78 17.01 14.28 16.94 14.17C16.88 14.06 16.72 14 16.47 13.88C16.22 13.75 14.99 13.14 14.76 13.06C14.54 12.98 14.37 12.93 14.21 13.18C14.04 13.43 13.57 13.98 13.42 14.15C13.28 14.31 13.14 14.33 12.89 14.21C12.64 14.08 11.84 13.82 10.89 12.97C10.15 12.31 9.65 11.49 9.51 11.24C9.36 10.99 9.49 10.86 9.62 10.74C9.73 10.63 9.87 10.45 10 10.3C10.12 10.15 10.17 10.05 10.25 9.88C10.33 9.72 10.29 9.57 10.23 9.45C10.17 9.32 9.67 8.1 9.47 7.6C9.27 7.12 9.07 7.18 8.91 7.17C8.76 7.17 8.58 7.17 8.53 7.33Z" />
                </svg>
                <span>WhatsApp</span>
              </a>

              <span className="text-slate-300 hidden sm:inline">•</span>

              <a
                href="mailto:john.purba@gmail.com"
                className="inline-flex items-center gap-1.5 hover:text-red-600 transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-red-600" />
                <span>john.purba@gmail.com</span>
              </a>

              <span className="text-slate-300 hidden sm:inline">•</span>

              <span className="inline-flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 text-red-600" />
                <span>+62-811-855-212</span>
              </span>

              <span className="text-slate-300 hidden sm:inline">•</span>

              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-red-600" />
                <span>Jakarta</span>
              </span>
            </div>
          </div>

          {/* Form Content */}
          <div className="mt-6">
            {isSubmitted ? (
              <div className="py-8 text-center">
                <CheckCircle2 className="mx-auto h-9 w-9 text-red-600" />
                <h4 className="mt-3 text-base font-bold text-slate-900">
                  Terima Kasih!
                </h4>
                <p className="mt-1 text-xs text-slate-600">
                  Pesan Anda telah terkirim. Tim kami akan segera menghubungi
                  Anda.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-xs font-bold text-red-600 underline cursor-pointer"
                >
                  Kirim pesan lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Nama Anda"
                    className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-xs text-slate-900 focus:border-red-600 focus:outline-hidden"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Nomor HP / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="08123456789"
                      className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-xs text-slate-900 focus:border-red-600 focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="nama@email.com"
                      className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-xs text-slate-900 focus:border-red-600 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Pesan *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tuliskan kebutuhan program atau pertanyaan Anda..."
                    className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-xs text-slate-900 focus:border-red-600 focus:outline-hidden"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-1 inline-flex items-center justify-center gap-2 w-full rounded-xl bg-red-600 px-5 py-3 text-xs font-bold text-white shadow-sm hover:bg-red-700 transition-all cursor-pointer"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Kirim Pesan</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
