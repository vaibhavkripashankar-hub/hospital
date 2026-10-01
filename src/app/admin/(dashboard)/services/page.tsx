import { services } from "@/lib/demo-data";

export default function AdminServicesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Service management</h1>
        <p className="text-sm text-slate-600">Demo service list with enable/edit placeholders.</p>
      </div>

      <div className="space-y-3">
        {services.map((service) => (
          <article key={service.id} className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="font-semibold text-slate-900">{service.name}</h2>
                <p className="text-sm text-slate-600">{service.description}</p>
              </div>
              <div className="flex gap-2 text-sm">
                <button type="button" className="rounded border border-slate-300 px-3 py-1.5 text-slate-700">Edit</button>
                <button type="button" className="rounded border border-slate-300 px-3 py-1.5 text-slate-700">Disable</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
