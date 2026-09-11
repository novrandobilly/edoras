import PocketBase from "pocketbase";

const POCKETBASE_URL =
  process.env.NEXT_PUBLIC_POCKETBASE_URL || "http://127.0.0.1:8090";

export const pb = new PocketBase(POCKETBASE_URL);

// Disable auto-cancellation so multiple concurrent requests don't cancel each other
pb.autoCancellation(false);

export interface SeminarRegistrationInput {
  fullName: string;
  email: string;
  phone: string;
  companyOrInstitution?: string;
  jobTitle?: string;
  eventSlug?: string;
  notes?: string;
}

export async function submitSeminarRegistration(data: SeminarRegistrationInput) {
  // Save to PocketBase collection named "seminar_registrations"
  // (or fallback to generic "leads" if preferred)
  return await pb.collection("seminar_registrations").create(data);
}
