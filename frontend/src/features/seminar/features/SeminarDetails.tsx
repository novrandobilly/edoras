import {
  Calendar,
  Clock,
  Video,
  Award,
  CheckCircle2,
  Users2,
  Sparkles,
} from "lucide-react";

export interface EventInfo {
  title: string;
  slug: string;
  date: string;
  time: string;
  location: string;
  fee: string;
  certificate: string;
}

interface Props {
  eventInfo: EventInfo;
}

export function SeminarDetails({ eventInfo }: Props) {
  return (
    <div className="space-y-8">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-semibold text-blue-700">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Special Executive Session</span>
        </div>
        <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.2]">
          {eventInfo.title}
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
          Discover actionable frameworks to lead through organizational change,
          resolve cross-generational friction, and optimize talent retention through
          modern psychological and competency strategies.
        </p>
      </div>

      {/* Highlights Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="rounded-xl bg-blue-50 p-2.5 text-blue-600">
            <Calendar className="h-5 w-5" />
          </div>
          <div>
            <span className="block text-xs font-medium text-slate-500">Date</span>
            <span className="text-sm font-bold text-slate-900">{eventInfo.date}</span>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="rounded-xl bg-indigo-50 p-2.5 text-indigo-600">
            <Clock className="h-5 w-5" />
          </div>
          <div>
            <span className="block text-xs font-medium text-slate-500">Time</span>
            <span className="text-sm font-bold text-slate-900">{eventInfo.time}</span>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="rounded-xl bg-sky-50 p-2.5 text-sky-600">
            <Video className="h-5 w-5" />
          </div>
          <div>
            <span className="block text-xs font-medium text-slate-500">Venue</span>
            <span className="text-sm font-bold text-slate-900">{eventInfo.location}</span>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="rounded-xl bg-emerald-50 p-2.5 text-emerald-600">
            <Award className="h-5 w-5" />
          </div>
          <div>
            <span className="block text-xs font-medium text-slate-500">Investment</span>
            <span className="text-sm font-bold text-emerald-600">{eventInfo.fee}</span>
          </div>
        </div>
      </div>

      {/* What You Will Learn */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">What You Will Learn</h2>
        <p className="mt-1 text-xs text-slate-500">
          Core competencies and practical toolkits covered in this 2.5-hour workshop
        </p>

        <div className="mt-6 space-y-4">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-600 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Decoding Employee Turnover & Disengagement
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Identify the early warning psychological triggers before key talent
                decides to leave your company.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-600 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Adaptive Leadership in Times of Uncertainty
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Shift from rigid management styles to agile coaching that empowers
                independent problem-solving.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-600 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Scientific Competency & Assessment Center Basics
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                How to implement objective behavioral metrics for fair evaluations
                and strategic promotions.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-600 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Live Case Study & Interactive Q&A
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Bring your actual workplace cases and receive direct feedback from
                our certified senior psychologists.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Target Audience */}
      <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-6">
        <div className="flex items-center gap-2 text-sm font-bold text-blue-900">
          <Users2 className="h-4 w-4 text-blue-600" />
          <span>Who Should Attend?</span>
        </div>
        <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-medium text-slate-700">
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            HR Directors & People Managers
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            Business Founders & CEOs
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            Team Leads & Department Heads
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            Talent Acquisition Specialists
          </li>
        </ul>
      </div>
    </div>
  );
}
