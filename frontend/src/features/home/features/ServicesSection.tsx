import {
  GraduationCap,
  BrainCircuit,
  Calendar,
  UserCheck,
  CheckCircle2,
} from "lucide-react";

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Our Core Services
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Holistic Human Capital Solutions
          </p>
          <p className="mt-4 text-base text-slate-600">
            From talent discovery to continuous leadership development, we
            provide end-to-end HR services tailored to your organizational goals.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Service 1 */}
          <div className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Training & Workshops
            </h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Experiential learning programs focusing on leadership development,
              effective communication, team cohesion, agility, and supervisory excellence.
            </p>
            <ul className="mt-4 space-y-2 text-xs font-medium text-slate-500">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                Leadership & Management
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                Service Excellence
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                High-Performing Teams
              </li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <BrainCircuit className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Psychological Assessment
            </h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Objective, scientifically validated assessments for recruitment,
              talent mapping, managerial competencies, and succession planning.
            </p>
            <ul className="mt-4 space-y-2 text-xs font-medium text-slate-500">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                Cognitive & Aptitude Testing
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                Personality & Culture Fit
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                Assessment Center Methods
              </li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-700 group-hover:bg-sky-600 group-hover:text-white transition-colors">
              <Calendar className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Seminars & Webinars
            </h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              High-impact online and offline seminars featuring thought leaders
              addressing future-of-work trends, HR tech, and organizational resilience.
            </p>
            <ul className="mt-4 space-y-2 text-xs font-medium text-slate-500">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                Executive HR Conferences
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                Public Online Webinars
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                Interactive Q&A Masterclasses
              </li>
            </ul>
          </div>

          {/* Service 4 */}
          <div className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <UserCheck className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Talent Recruitment
            </h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Strategic talent acquisition and executive search service to
              connect your enterprise with verified top-tier professionals.
            </p>
            <ul className="mt-4 space-y-2 text-xs font-medium text-slate-500">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                Executive Headhunting
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                Specialized Talent Sourcing
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                In-Depth Background Vetting
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
