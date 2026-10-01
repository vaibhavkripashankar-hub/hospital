import { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Rahul Care Clinic’s mission, values, and patient-first approach.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl space-y-8 px-4 py-14 sm:px-6">
      <SectionHeading
        title="About Rahul Care Clinic"
        subtitle="A neighborhood-focused clinic delivering practical and compassionate primary healthcare."
      />

      <div className="grid gap-5 md:grid-cols-3">
        <article className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="font-semibold text-slate-900">Mission</h3>
          <p className="mt-2 text-sm text-slate-600">Deliver reliable, respectful care for families with clinical clarity and affordability.</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="font-semibold text-slate-900">Vision</h3>
          <p className="mt-2 text-sm text-slate-600">Build a trusted community clinic known for continuity of care and preventive wellness.</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="font-semibold text-slate-900">Care philosophy</h3>
          <p className="mt-2 text-sm text-slate-600">We emphasize clear communication, early intervention, and evidence-backed treatment planning.</p>
        </article>
      </div>

      <article className="rounded-xl border border-slate-200 bg-white p-6">
        <h3 className="text-lg font-semibold text-slate-900">Clinic facilities</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
          <li>Comfortable consultation rooms with privacy-focused workflow.</li>
          <li>Structured follow-up recommendations and chronic care monitoring.</li>
          <li>Digital-first appointment management for reduced waiting time.</li>
          <li>Referral support for diagnostics and specialist consultation when needed.</li>
        </ul>
      </article>
    </section>
  );
}
