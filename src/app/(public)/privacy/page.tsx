import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy placeholder for Rahul Care Clinic MVP.",
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900">Privacy policy (MVP placeholder)</h1>
      <p className="mt-4 text-slate-600">
        This demo version does not process real medical records or payment data. Supabase persistence, formal data retention terms, and role-based record access will be finalized before production launch.
      </p>
    </section>
  );
}
