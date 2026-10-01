import { listPatients } from "@/lib/demo-repository";

export default async function AdminPatientsPage() {
  const patients = await listPatients();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Patients</h1>
        <p className="text-sm text-slate-600">Patient list generated from appointments in demo storage.</p>
      </div>
      {patients.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white p-6 text-sm text-slate-500">No patients found yet.</div>
      ) : (
        <div className="grid gap-3 md:grid-cols-2">
          {patients.map((patient) => (
            <article key={patient.id} className="rounded-xl border border-slate-200 bg-white p-4">
              <h2 className="font-semibold text-slate-900">{patient.name}</h2>
              <p className="mt-1 text-sm text-slate-600">{patient.phone}</p>
              <p className="text-sm text-slate-600">{patient.email}</p>
              <p className="mt-2 text-xs text-slate-500">Age: {patient.age} • Gender: {patient.gender}</p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
