import { AppointmentStatus } from "@/lib/types";

const statusClassMap: Record<AppointmentStatus, string> = {
  pending: "bg-amber-100 text-amber-800",
  confirmed: "bg-blue-100 text-blue-800",
  completed: "bg-emerald-100 text-emerald-800",
  cancelled: "bg-rose-100 text-rose-800",
  no_show: "bg-slate-200 text-slate-700",
};

export function StatusBadge({ status }: { status: AppointmentStatus }) {
  return (
    <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${statusClassMap[status]}`}>
      {status.replace("_", " ")}
    </span>
  );
}
