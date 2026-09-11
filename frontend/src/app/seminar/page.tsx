import type { Metadata } from "next";
import { SeminarPageFeature } from "@/features/seminar";

export const metadata: Metadata = {
  title: "Online Seminar: Adaptive Leadership & HR Agility | Inti Dinamis",
  description:
    "Register for our exclusive live webinar on Navigating People Dynamics and HR Agility. Organized by PT Inti Dinamis.",
};

export default function SeminarPage() {
  return <SeminarPageFeature />;
}
