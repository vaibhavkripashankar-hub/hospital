import { getDashboardStats, listAppointments } from "@/lib/demo-repository";
import { StatusBadge } from "@/components/ui/status-badge";
import { mapDoctorName, mapServiceName } from "@/lib/demo-repository";

export default async function DashboardPage() {
  const [stats, appointments] = await Promise.all([getDashboardStats(), listAppointments()]);
  const recent = appointments.slice(0, 5);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Dashboard overview</h1>
        <p className="text-sm text-slate-600">Snapshot of clinic operations using demo data.</p>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {stats.map((item) => (
          <article key={item.label} className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="text-sm text-slate-500">{item.label}</p>
            <p className="mt-2 text-2xl font-bold text-slate-900">{item.value}</p>
          </article>
        ))}
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-4">
        <h2 className="text-lg font-semibold text-slate-900">Recent appointments</h2>
        {recent.length === 0 ? (
          <p className="mt-3 text-sm text-slate-500">No appointments found.</p>
        ) : (
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-slate-500">
                  <th className="py-2">Patient</th>
                  <th className="py-2">Doctor</th>
                  <th className="py-2">Service</th>
                  <th className="py-2">Date/Time</th>
                  <th className="py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {recent.map((item) => (
                  <tr key={item.id} className="border-t border-slate-100">
                    <td className="py-2">{item.patientName}</td>
                    <td className="py-2">{mapDoctorName(item.doctorId)}</td>
                    <td className="py-2">{mapServiceName(item.serviceId)}</td>
                    <td className="py-2">{item.date} • {item.time}</td>
                    <td className="py-2"><StatusBadge status={item.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}
