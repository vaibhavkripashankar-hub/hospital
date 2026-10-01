import { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/demo-data";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore consultation and preventive health services at Rahul Care Clinic.",
};

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900">Our Services</h1>
      <p className="mt-3 max-w-3xl text-slate-600">Select a service to see details, consultation duration, and booking availability.</p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.id} className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-semibold text-slate-900">{service.name}</h2>
            <p className="mt-2 text-sm text-slate-600">{service.description}</p>
            <p className="mt-2 text-sm text-slate-500">Duration: {service.durationMinutes} mins</p>
            <p className="text-sm text-slate-500">Consultation fee: {service.consultationFee}</p>
            <div className="mt-4 flex gap-3">
              <Link href={`/services/${service.slug}`} className="text-sm font-semibold text-sky-700 hover:text-sky-800">
                Service details →
              </Link>
              <Link href="/appointments" className="text-sm font-semibold text-emerald-700 hover:text-emerald-800">
                Book appointment
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
