"use client";

import { FormEvent, useState } from "react";
import { clinicInfo } from "@/lib/demo-data";
import { StateMessage } from "@/components/ui/state-message";

export default function AdminSettingsPage() {
  const [saving, setSaving] = useState(false);
  const [result, setResult] = useState<"success" | "error" | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResult(null);
    setSaving(true);

    await new Promise((resolve) => setTimeout(resolve, 250));
    setSaving(false);
    setResult("success");
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Clinic settings</h1>
        <p className="text-sm text-slate-600">Editable shell for clinic and booking preferences.</p>
      </div>

      <form className="space-y-4 rounded-xl border border-slate-200 bg-white p-5" onSubmit={onSubmit}>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="text-sm font-medium text-slate-700">
            Clinic name
            <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" defaultValue={clinicInfo.name} />
          </label>
          <label className="text-sm font-medium text-slate-700">
            Contact number
            <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" defaultValue={clinicInfo.phone} />
          </label>
          <label className="text-sm font-medium text-slate-700">
            WhatsApp number
            <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" defaultValue={clinicInfo.whatsapp} />
          </label>
          <label className="text-sm font-medium text-slate-700">
            Slot duration
            <select className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" defaultValue="20">
              <option value="15">15 minutes</option>
              <option value="20">20 minutes</option>
              <option value="30">30 minutes</option>
            </select>
          </label>
        </div>

        {result === "success" ? (
          <StateMessage tone="success" title="Settings saved" description="Demo success state. Connect Supabase to persist clinic settings." />
        ) : null}

        <button type="submit" disabled={saving} className="rounded-lg bg-sky-700 px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-60">
          {saving ? "Saving..." : "Save settings"}
        </button>
      </form>
    </div>
  );
}
