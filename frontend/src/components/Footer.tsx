import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Heart,
} from "lucide-react";
import { IntiDinamisLogo } from "@/components/ui/IntiDinamisLogo";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Company identity - 4 cols */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-flex rounded-xl bg-white px-3.5 py-2 shadow-xs">
              <IntiDinamisLogo size="md" />
            </div>
            <p className="text-sm leading-relaxed text-slate-400 font-normal">
              PT Inti Dinamis adalah konsultan organisasi dan pengembangan
              sumber daya manusia yang berdiri sejak 2005. Kami berdedikasi
              menjadi mitra terbaik perusahaan dalam mengelola Human Capital
              menjadi kontributor hebat.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="h-4 w-4 text-red-500" />
              <span>Mitra Transformasi SDM Berpengalaman 20+ Tahun</span>
            </div>
          </div>

          {/* Quick Links - 2 cols */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white">
              Navigasi
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/#tentang-kami"
                  className="hover:text-red-400 transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/#produk-jasa"
                  className="hover:text-red-400 transition-colors"
                >
                  Produk & Jasa
                </Link>
              </li>
              <li>
                <Link
                  href="/#pengalaman"
                  className="hover:text-red-400 transition-colors"
                >
                  Pengalaman Klien
                </Link>
              </li>
              <li>
                <Link
                  href="/#galeri"
                  className="hover:text-red-400 transition-colors"
                >
                  Galeri Aktivitas
                </Link>
              </li>
              <li>
                <Link
                  href="/#tim-ahli"
                  className="hover:text-red-400 transition-colors"
                >
                  Tim Ahli
                </Link>
              </li>
              <li>
                <Link
                  href="/#kontak"
                  className="hover:text-red-400 transition-colors"
                >
                  Kontak Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Services - 3 cols */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white">
              Pilar Layanan
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/#produk-jasa"
                  className="hover:text-red-400 transition-colors"
                >
                  Leadership Coaching
                </Link>
              </li>
              <li>
                <Link
                  href="/#produk-jasa"
                  className="hover:text-red-400 transition-colors"
                >
                  In-House Training & Outbound
                </Link>
              </li>
              <li>
                <Link
                  href="/#produk-jasa"
                  className="hover:text-red-400 transition-colors"
                >
                  HR & OD Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/#produk-jasa"
                  className="hover:text-red-400 transition-colors"
                >
                  Potential Assessment
                </Link>
              </li>
              <li>
                <Link
                  href="/#produk-jasa"
                  className="hover:text-red-400 transition-colors"
                >
                  Recruitment & Placement
                </Link>
              </li>
              <li>
                <Link
                  href="/#produk-jasa"
                  className="hover:text-red-400 transition-colors"
                >
                  BrainPower® Training
                </Link>
              </li>
              <li>
                <Link
                  href="/#produk-jasa"
                  className="hover:text-red-400 transition-colors"
                >
                  Event Organizing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details - 3 cols */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white">
              Hubungi Kami
            </h3>
            <ul className="mt-4 space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-red-500 mt-1" />
                <span className="text-slate-300">Jakarta, Indonesia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-red-500" />
                <span className="text-slate-300">
                  +62 (21) 555-0192 / 0811-8888-000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-red-500" />
                <span className="text-slate-300">contact@intidinamis.com</span>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <Link
                href="/#kontak"
                className="inline-flex items-center gap-2 text-xs font-bold text-red-400 hover:text-red-300 transition-colors"
              >
                <span>Minta Penawaran Program</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-slate-800/80 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} PT Inti Dinamis. Seluruh hak cipta
            dilindungi.
          </p>
          <div className="flex items-center gap-6">
            <span>
              &ldquo;Meningkatkan Kualitas Human Capital Menjadi Kontributor
              Hebat&rdquo;
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
