import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { IntiDinamisLogo } from "@/components/ui/IntiDinamisLogo";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company identity */}
          <div className="space-y-4">
            <div className="inline-flex rounded-xl bg-white/95 px-3 py-2 shadow-sm">
              <IntiDinamisLogo size="md" />
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Empowering organizations and unlocking human potential through
              tailored training, interactive workshops, comprehensive psychological
              assessments, and strategic talent recruitment.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              HR Solutions
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Corporate Training & Workshops
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Psychological Assessment
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Talent Recruitment & Placement
                </Link>
              </li>
              <li>
                <Link href="/seminar" className="hover:text-white transition-colors">
                  Executive Webinars & Seminars
                </Link>
              </li>
            </ul>
          </div>

          {/* Events */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Upcoming Events
            </h3>
            <p className="mt-4 text-xs text-slate-400">
              Stay ahead with our latest online seminars and leadership series.
            </p>
            <div className="mt-3">
              <Link
                href="/seminar"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>Register for Online Seminar</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact & Inquiries
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-blue-400 mt-0.5" />
                <span>Jakarta & Surabaya, Indonesia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-blue-400" />
                <span>+62 (21) 555-0192</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-blue-400" />
                <span>contact@intidinamis.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} PT Inti Dinamis. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
