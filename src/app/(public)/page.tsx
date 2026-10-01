import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { clinicInfo, clinicStats, doctors, services } from "@/lib/demo-data";

export default function HomePage() {
  const featuredServices = services.slice(0, 4);

  return (
    <div>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">Rahul Care Clinic</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">{clinicInfo.tagline}</h1>
          <p className="mt-4 text-slate-600">
            Personalized clinic care by experienced doctors. Book your slot in minutes and get attentive consultation close to home.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/appointments" className="rounded-lg bg-sky-700 px-5 py-2.5 font-semibold text-white hover:bg-sky-800">
              Book Appointment
            </Link>
            <a href={`tel:${clinicInfo.phone.replace(/\s/g, "")}`} className="rounded-lg border border-slate-300 px-5 py-2.5 font-semibold text-slate-700 hover:bg-slate-100">
              Call Clinic
            </a>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Today&apos;s clinic information</p>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-slate-600">Hours</dt>
              <dd className="font-medium text-slate-900">{clinicInfo.hours}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-600">Phone</dt>
              <dd className="font-medium text-slate-900">{clinicInfo.phone}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-600">Emergency</dt>
              <dd className="font-medium text-slate-900">{clinicInfo.emergency}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {clinicStats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-slate-200 p-4 text-center">
              <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
              <p className="text-sm text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <SectionHeading
          title="Meet our doctors"
          subtitle="Consult trusted physicians with experience in family health, preventive care, and long-term wellness support."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {doctors.map((doctor) => (
            <article key={doctor.id} className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-slate-900">{doctor.name}</h3>
              <p className="text-sm text-slate-600">{doctor.qualification}</p>
              <p className="mt-2 text-sm text-slate-600">{doctor.specialization}</p>
              <p className="mt-2 text-sm text-slate-500">Experience: {doctor.experience}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6">
        <SectionHeading title="Popular services" subtitle="Core outpatient services designed for everyday healthcare needs." />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {featuredServices.map((service) => (
            <article key={service.id} className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-slate-900">{service.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{service.description}</p>
              <p className="mt-2 text-sm text-slate-500">Estimated consultation: {service.durationMinutes} mins</p>
              <Link href={`/services/${service.slug}`} className="mt-3 inline-block text-sm font-semibold text-sky-700 hover:text-sky-800">
                View details →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-sky-900 py-12 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold">Need help now?</h2>
          <p className="mt-2 text-sky-100">Book your appointment online or contact the clinic directly.</p>
          <div className="mt-5 flex justify-center gap-3">
            <Link href="/appointments" className="rounded-lg bg-white px-5 py-2.5 font-semibold text-sky-900">
              Book now
            </Link>
            <Link href="/contact" className="rounded-lg border border-sky-300 px-5 py-2.5 font-semibold text-white">
              Contact clinic
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
