import Link from "next/link";
import {
  Briefcase,
  GraduationCap,
  BrainCircuit,
  UserCheck,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Award,
  PhoneCall,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-slate-50 to-white py-20 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.100),white)] opacity-70" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/90 px-4 py-1.5 text-xs font-semibold text-blue-700 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-blue-600" />
              <span>Leading Human Capital & Talent Transformation Partner</span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.15]">
              Empower Your People. <br />
              <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
                Accelerate Growth.
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
              PT Inti Dinamis helps organizations unlock human potential through
              experiential corporate training, certified psychological assessments,
              interactive seminars, and strategic recruitment.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/seminar"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700 transition-all active:scale-[0.98]"
              >
                <Calendar className="h-5 w-5" />
                <span>Join Upcoming Online Seminar</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm"
              >
                Explore Solutions
              </Link>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 gap-4 rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-xl shadow-slate-200/40 backdrop-blur-md md:grid-cols-4 md:p-8">
            <div className="text-center">
              <p className="text-3xl font-extrabold text-blue-600 sm:text-4xl">15+</p>
              <p className="mt-1 text-xs sm:text-sm font-medium text-slate-500">
                Years of Experience
              </p>
            </div>
            <div className="text-center border-l border-slate-200">
              <p className="text-3xl font-extrabold text-indigo-600 sm:text-4xl">500+</p>
              <p className="mt-1 text-xs sm:text-sm font-medium text-slate-500">
                Corporate Clients
              </p>
            </div>
            <div className="text-center border-l-0 md:border-l border-slate-200">
              <p className="text-3xl font-extrabold text-blue-600 sm:text-4xl">25K+</p>
              <p className="mt-1 text-xs sm:text-sm font-medium text-slate-500">
                People Developed
              </p>
            </div>
            <div className="text-center border-l border-slate-200">
              <p className="text-3xl font-extrabold text-emerald-600 sm:text-4xl">98%</p>
              <p className="mt-1 text-xs sm:text-sm font-medium text-slate-500">
                Satisfaction Rating
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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

      {/* Featured Banner for Seminar */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 rounded-2xl bg-white/5 p-8 border border-white/10 backdrop-blur-sm">
            <div className="max-w-2xl">
              <span className="inline-block rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-300 border border-blue-400/30">
                Upcoming Featured Event
              </span>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl text-white">
                Online Seminar: Adaptive Leadership & HR Agility
              </h3>
              <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
                Equip yourself and your team with forward-thinking strategies to
                navigate organizational shifts, boost team motivation, and implement
                effective modern performance metrics.
              </p>
            </div>
            <div className="shrink-0 w-full sm:w-auto">
              <Link
                href="/seminar"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white hover:bg-blue-400 transition-colors shadow-lg shadow-blue-500/30"
              >
                <span>Register Now (Free)</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About & Methodology Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                About Inti Dinamis
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Dedicated to Igniting Organizational Potential
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed text-base">
                Founded with a passion for human development, PT Inti Dinamis is a
                trusted consulting and training partner. We blend psychological
                insights with practical business acumen to deliver measurable and
                sustainable behavioral change.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-blue-100 p-2 text-blue-600 mt-1">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">
                      Certified Psychologists & Practitioners
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      All assessment tools and training modules are developed and
                      administered by licensed psychologists and certified facilitators.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-indigo-100 p-2 text-indigo-600 mt-1">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">
                      Results-Oriented & Actionable
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      We focus on tangible business outcomes, post-training
                      implementation, and measurable KPI improvements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-emerald-100 p-2 text-emerald-600 mt-1">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">
                      Tailor-Made Curriculum
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      No generic templates. Every workshop and assessment rubric is
                      customized to reflect your industry reality and company culture.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Methodology Column */}
            <div id="methodology" className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                Our 4-Step Methodology
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                How we deliver consistent excellence for your organization
              </p>

              <div className="mt-6 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Discovery & Needs Analysis
                    </h4>
                    <p className="text-xs text-slate-600 mt-1">
                      In-depth interviews and assessment diagnostics to pinpoint exact
                      skill gaps and strategic business objectives.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Curriculum Customization
                    </h4>
                    <p className="text-xs text-slate-600 mt-1">
                      Co-creating realistic case studies, role-play scenarios, and
                      experiential modules aligned with client challenges.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Interactive Delivery
                    </h4>
                    <p className="text-xs text-slate-600 mt-1">
                      Engaging workshops, live simulations, and peer learning led by
                      senior industry practitioners and coaches.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                    4
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Impact Evaluation & Follow-Up
                    </h4>
                    <p className="text-xs text-slate-600 mt-1">
                      Post-training evaluation reports, individual action plans, and
                      structured accountability check-ins.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation & Contact CTA */}
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
    </div>
  );
}
