import type { Metadata } from "next";
import { CareerAccelerationFeature } from "@/features/career-acceleration";

export const metadata: Metadata = {
  title:
    "Akselerasi Karir & Kepemimpinan Eksekutif di Era Disrupsi | PT Inti Dinamis",
  description:
    "Webinar eksklusif bersama Coach John Arif Purba, ACC. Pelajari strategi modifikasi perilaku BrainPower® dan cara melompat ke level kepemimpinan eksekutif.",
  keywords: [
    "Akselerasi Karir",
    "Executive Leadership",
    "BrainPower",
    "Inti Dinamis",
    "John Arif Purba",
    "Webinar Kepemimpinan",
    "Performance Coaching",
  ],
};

export default function CareerAccelerationPage() {
  return <CareerAccelerationFeature />;
}
