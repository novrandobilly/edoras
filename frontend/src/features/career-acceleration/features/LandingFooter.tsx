import Link from "next/link";
import { IntiDinamisLogo } from "@/components/ui/IntiDinamisLogo";
import { ShieldCheck, MessageCircle, Mail, MapPin } from "lucide-react";

export function LandingFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          {/* Brand & Purpose */}
          <div className="max-w-md space-y-3">
            <Link
              href="/"
              className="inline-flex rounded-xl bg-white px-3.5 py-2 shadow-xs transition-transform hover:scale-105"
              aria-label="Kembali ke Beranda PT Inti Dinamis"
            >
              <IntiDinamisLogo size="md" />
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              PT Inti Dinamis adalah konsultan organisasi dan pengembangan SDM
              terpercaya sejak 2005. Mengembangkan Human Capital menjadi
              kontributor hebat melalui Performance Coaching dan Modifikasi
              Perilaku.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-slate-500">
              <ShieldCheck className="h-4 w-4 text-red-500" />
              <span>Mitra Transformasi SDM Berpengalaman 20+ Tahun</span>
            </div>
          </div>

          {/* Quick Help & Contact */}
          <div className="text-xs sm:text-sm space-y-2 text-slate-300">
            <p className="font-bold text-white uppercase tracking-wider text-xs">
              Penyelenggara & Bantuan Teknis
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-slate-400">
              <MapPin className="h-4 w-4 text-red-500 shrink-0" />
              <span>Jakarta, Indonesia</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-slate-400">
              <Mail className="h-4 w-4 text-red-500 shrink-0" />
              <span>john.purba@gmail.com</span>
            </div>
            <div className="pt-2">
              <a
                href="https://wa.me/628118888000?text=Halo%20Admin%20Inti%20Dinamis,%20saya%20ingin%20bertanya%20mengenai%20seminar%20Career%20Acceleration"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600/90 hover:bg-emerald-600 px-4 py-2 text-xs font-bold text-white transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Chat Panitia via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} PT Inti Dinamis. Seluruh hak cipta
            dilindungi.
          </p>
          <p>
            Klik logo di atas untuk mengunjungi beranda profil resmi PT Inti
            Dinamis.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default LandingFooter;
