import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FeaturedBanner() {
  return (
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
  );
}
