import { Metadata } from "next";
import { clinicInfo } from "@/lib/demo-data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Rahul Care Clinic for appointments, timing, and clinic location details.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900">Contact us</h1>
      <div className="mt-7 grid gap-6 md:grid-cols-2">
        <article className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">Clinic details</h2>
          <p className="mt-3 text-sm text-slate-600">{clinicInfo.address}</p>
          <p className="mt-1 text-sm text-slate-600">Hours: {clinicInfo.hours}</p>
          <p className="mt-1 text-sm text-slate-600">Phone: {clinicInfo.phone}</p>
          <p className="mt-1 text-sm text-slate-600">Email: {clinicInfo.email}</p>
          <div className="mt-4 flex gap-3">
            <a href={`tel:${clinicInfo.phone.replace(/\s/g, "")}`} className="rounded-lg bg-sky-700 px-4 py-2 text-sm font-semibold text-white">
              Click to call
            </a>
            <a href={`https://wa.me/${clinicInfo.whatsapp.replace(/\D/g, "")}`} className="rounded-lg border border-emerald-300 px-4 py-2 text-sm font-semibold text-emerald-700">
              Chat on WhatsApp
            </a>
          </div>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">Quick enquiry</h2>
          <p className="mt-2 text-sm text-slate-600">
            This MVP stores no contact messages yet. Supabase-backed enquiry inbox can be enabled in the next integration step.
          </p>
          <form className="mt-4 space-y-3">
            <input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Name" />
            <input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Phone" />
            <input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Email" />
            <textarea className="min-h-24 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Message" />
            <button type="button" className="rounded-lg bg-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">
              Demo only
            </button>
          </form>
        </article>
      </div>
    </section>
  );
}
