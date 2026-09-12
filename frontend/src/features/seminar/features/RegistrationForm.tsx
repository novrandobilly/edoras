"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import {
  submitSeminarRegistration,
  SeminarRegistrationInput,
} from "@/lib/pocketbase";
import { CheckCircle2, Loader2, AlertCircle, Sparkles } from "lucide-react";

interface Props {
  eventTitle: string;
  eventSlug: string;
}

export function RegistrationForm({ eventTitle, eventSlug }: Props) {
  const [formData, setFormData] = useState<SeminarRegistrationInput>({
    fullName: "",
    email: "",
    phone: "",
    companyOrInstitution: "",
    jobTitle: "",
    notes: "",
    eventSlug,
  });

  const [submittedData, setSubmittedData] =
    useState<SeminarRegistrationInput | null>(null);

  const mutation = useMutation({
    mutationFn: async (data: SeminarRegistrationInput) => {
      try {
        return await submitSeminarRegistration(data);
      } catch (err: unknown) {
        console.warn(
          "PocketBase submission notice: Ensure backend PocketBase is running on http://127.0.0.1:8090 with collection 'seminar_registrations'.",
          err
        );
        if (process.env.NODE_ENV === "development") {
          console.info("Simulating successful registration for local testing.");
          return { id: "mock-id-" + Date.now(), ...data };
        }
        throw err;
      }
    },
    onSuccess: (_, variables) => {
      setSubmittedData(variables);
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      companyOrInstitution: "",
      jobTitle: "",
      notes: "",
      eventSlug,
    });
    setSubmittedData(null);
    mutation.reset();
  };

  if (submittedData) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-8 text-center shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="mt-4 text-2xl font-bold text-slate-900">
          Registration Confirmed!
        </h3>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
          Thank you, <span className="font-semibold">{submittedData.fullName}</span>!
          Your seat for <span className="font-semibold">{eventTitle}</span> has been
          reserved.
        </p>

        <div className="mt-6 rounded-xl border border-emerald-200/80 bg-white p-4 text-left text-xs text-slate-600 space-y-1.5">
          <div className="flex justify-between">
            <span className="text-slate-400">Email:</span>
            <span className="font-medium text-slate-800">{submittedData.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">WhatsApp / Phone:</span>
            <span className="font-medium text-slate-800">{submittedData.phone}</span>
          </div>
          {submittedData.companyOrInstitution && (
            <div className="flex justify-between">
              <span className="text-slate-400">Organization:</span>
              <span className="font-medium text-slate-800">
                {submittedData.companyOrInstitution}
              </span>
            </div>
          )}
        </div>

        <p className="mt-4 text-xs text-slate-500">
          A confirmation and Zoom link will be sent to your email before the event.
        </p>

        <button
          onClick={handleReset}
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-semibold text-white hover:bg-slate-800 transition-colors"
        >
          Register Another Colleague
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl shadow-slate-200/50"
    >
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Limited Seats Available</span>
        </div>
        <h3 className="mt-2 text-xl font-bold text-slate-900">
          Reserve Your Free Spot
        </h3>
        <p className="mt-1 text-xs text-slate-500">
          Fill in your details below to receive the webinar link and materials.
        </p>
      </div>

      {mutation.isError && (
        <div className="mb-6 flex items-start gap-3 rounded-xl border border-rose-200 bg-rose-50 p-4 text-xs text-rose-700">
          <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
          <p>
            Failed to submit registration. Please check your internet or contact our
            team directly.
          </p>
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Sarah Jenkins"
            className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Work Email *
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="name@company.com"
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              WhatsApp / Phone *
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+62 812-3456-7890"
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Company / Institution
            </label>
            <input
              type="text"
              name="companyOrInstitution"
              value={formData.companyOrInstitution}
              onChange={handleChange}
              placeholder="e.g. Acme Corp"
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Job Title / Position
            </label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              placeholder="e.g. HR Manager / Team Lead"
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
            Key Questions or Expectations
          </label>
          <textarea
            name="notes"
            rows={3}
            value={formData.notes}
            onChange={handleChange}
            placeholder="What specific HR or leadership challenges are you looking to solve?"
            className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={mutation.isPending}
          className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700 disabled:opacity-50 transition-all active:scale-[0.99]"
        >
          {mutation.isPending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Submitting Registration...</span>
            </>
          ) : (
            <span>Complete Free Registration</span>
          )}
        </button>

        <p className="text-center text-[11px] text-slate-400">
          We respect your privacy. No spam. You will only receive seminar details and materials.
        </p>
      </div>
    </form>
  );
}
