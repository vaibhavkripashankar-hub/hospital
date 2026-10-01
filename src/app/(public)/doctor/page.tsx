import { Metadata } from "next";
import { doctors } from "@/lib/demo-data";

export const metadata: Metadata = {
  title: "Doctor",
  description: "Meet the doctors at Rahul Care Clinic.",
};

export default function DoctorPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900">Doctor profile</h1>
      <div className="mt-6 space-y-5">
        {doctors.map((doctor) => (
          <article key={doctor.id} className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-900">{doctor.name}</h2>
            <p className="mt-1 text-sm text-slate-600">{doctor.qualification}</p>
            <p className="mt-2 text-sm text-slate-700">Specialization: {doctor.specialization}</p>
            <p className="mt-1 text-sm text-slate-700">Experience: {doctor.experience}</p>
            <p className="mt-1 text-sm text-slate-700">Registration: {doctor.registration}</p>
            <p className="mt-1 text-sm text-slate-700">Languages: {doctor.languages.join(", ")}</p>
            <p className="mt-3 text-sm text-slate-600">{doctor.bio}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
