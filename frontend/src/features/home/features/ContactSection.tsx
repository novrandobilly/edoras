import Link from "next/link";
import { PhoneCall, ArrowRight } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-blue-600 p-8 sm:p-12 lg:p-16 text-white shadow-xl shadow-blue-600/20 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Ready to elevate your team’s capability?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-blue-100 text-base sm:text-lg">
            Schedule a free consultation with our HR specialists to discuss your
            organization’s assessment, training, or recruitment requirements.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:contact@intidinamis.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-600 hover:bg-blue-50 transition-colors shadow-md"
            >
              <PhoneCall className="h-4 w-4" />
              <span>Contact Our Consultants</span>
            </a>
            <Link
              href="/seminar"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 bg-blue-700/50 px-6 py-3.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              <span>View Online Seminar Details</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
