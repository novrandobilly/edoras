import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SeminarDetails, EventInfo } from "./features/SeminarDetails";
import { RegistrationForm } from "./features/RegistrationForm";
import { ShieldCheck } from "lucide-react";

const CURRENT_EVENT: EventInfo = {
  title: "Navigating People Dynamics: Adaptive Leadership & HR Agility",
  slug: "adaptive-leadership-hr-agility",
  date: "Saturday, October 24, 2026",
  time: "09:00 - 11:30 WIB",
  location: "Live via Zoom Webinar",
  fee: "Complimentary (Free with RSVP)",
  certificate: "E-Certificate & Action Workbook included",
};

export function SeminarPageFeature() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Navigation */}
      <Header />

      {/* Main Seminar Landing Content */}
      <main className="flex-1 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Notice */}
          <div className="mb-8 flex items-center gap-2 text-xs font-semibold text-blue-700">
            <span className="rounded-md bg-blue-100 px-2.5 py-1">Online Seminar</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-600">HR Development Series</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Event Details */}
            <div className="lg:col-span-7">
              <SeminarDetails eventInfo={CURRENT_EVENT} />
            </div>

            {/* Right: Registration Form */}
            <div className="lg:col-span-5 sticky top-28">
              <RegistrationForm
                eventTitle={CURRENT_EVENT.title}
                eventSlug={CURRENT_EVENT.slug}
              />
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="h-4 w-4 text-slate-400" />
                <span>Data securely saved with our enterprise platform</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default SeminarPageFeature;
