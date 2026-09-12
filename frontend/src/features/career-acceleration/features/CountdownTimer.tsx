"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { Clock } from "lucide-react";

interface Props {
  targetDate?: string;
}

const emptySubscribe = () => () => {};

function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

export function CountdownTimer({ targetDate }: Props) {
  const isClient = useIsClient();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = targetDate
      ? new Date(targetDate).getTime()
      : new Date("2026-10-24T09:00:00+07:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  if (!isClient) {
    return (
      <div className="inline-flex items-center gap-2 rounded-xl bg-slate-900/90 text-white px-4 py-2 text-xs">
        <Clock className="h-4 w-4 text-red-500 animate-pulse" />
        <span>Pendaftaran Segera Ditutup...</span>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 sm:gap-3 rounded-2xl border border-red-200/80 bg-linear-to-r from-red-50 via-white to-rose-50 px-4 py-2.5 shadow-sm">
      <div className="flex items-center gap-1.5 text-xs font-bold text-red-700 uppercase tracking-wider">
        <Clock className="h-4 w-4 text-red-600 animate-pulse" />
        <span className="hidden sm:inline">Pendaftaran Ditutup Dalam:</span>
      </div>

      <div className="flex items-center gap-1.5 font-mono font-bold text-slate-900 text-xs sm:text-sm">
        <div className="flex flex-col items-center justify-center rounded-lg bg-white border border-slate-200 px-2 py-1 shadow-2xs min-w-8.5">
          <span>{String(timeLeft.days).padStart(2, "0")}</span>
          <span className="text-[9px] font-sans font-normal text-slate-400">
            Hari
          </span>
        </div>
        <span>:</span>
        <div className="flex flex-col items-center justify-center rounded-lg bg-white border border-slate-200 px-2 py-1 shadow-2xs min-w-8.5">
          <span>{String(timeLeft.hours).padStart(2, "0")}</span>
          <span className="text-[9px] font-sans font-normal text-slate-400">
            Jam
          </span>
        </div>
        <span>:</span>
        <div className="flex flex-col items-center justify-center rounded-lg bg-white border border-slate-200 px-2 py-1 shadow-2xs min-w-8.5">
          <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
          <span className="text-[9px] font-sans font-normal text-slate-400">
            Mnt
          </span>
        </div>
        <span>:</span>
        <div className="flex flex-col items-center justify-center rounded-lg bg-white border border-slate-200 px-2 py-1 shadow-2xs min-w-8.5 text-red-600">
          <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
          <span className="text-[9px] font-sans font-normal text-slate-400">
            Dtk
          </span>
        </div>
      </div>
    </div>
  );
}

export default CountdownTimer;
