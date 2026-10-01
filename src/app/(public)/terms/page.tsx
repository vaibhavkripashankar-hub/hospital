import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms placeholder for Rahul Care Clinic MVP.",
};

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900">Terms & conditions (MVP placeholder)</h1>
      <p className="mt-4 text-slate-600">
        Online booking in this MVP is for demonstration. Appointment details are mock workflow data and should not be treated as legal or medical records.
      </p>
    </section>
  );
}
