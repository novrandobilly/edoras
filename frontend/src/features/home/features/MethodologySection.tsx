import { ShieldCheck, TrendingUp, Award } from "lucide-react";

export function MethodologySection() {
  return (
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
  );
}
