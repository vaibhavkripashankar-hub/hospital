interface StateMessageProps {
  title: string;
  description: string;
  tone?: "neutral" | "error" | "success";
}

export function StateMessage({ title, description, tone = "neutral" }: StateMessageProps) {
  const tones = {
    neutral: "border-slate-200 bg-slate-50 text-slate-700",
    error: "border-rose-200 bg-rose-50 text-rose-700",
    success: "border-emerald-200 bg-emerald-50 text-emerald-700",
  };

  return (
    <div className={`rounded-xl border p-4 ${tones[tone]}`} role="status" aria-live="polite">
      <p className="font-semibold">{title}</p>
      <p className="mt-1 text-sm">{description}</p>
    </div>
  );
}
