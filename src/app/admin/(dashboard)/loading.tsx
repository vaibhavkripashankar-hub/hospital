export default function AdminLoading() {
  return (
    <div className="space-y-3">
      <div className="h-8 w-56 animate-pulse rounded bg-slate-200" />
      <div className="grid gap-3 md:grid-cols-3">
        <div className="h-24 animate-pulse rounded bg-slate-200" />
        <div className="h-24 animate-pulse rounded bg-slate-200" />
        <div className="h-24 animate-pulse rounded bg-slate-200" />
      </div>
    </div>
  );
}
