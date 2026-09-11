export function StatsSection() {
  return (
    <section className="bg-white pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-xl shadow-slate-200/40 backdrop-blur-md md:grid-cols-4 md:p-8">
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
  );
}
