"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { StateMessage } from "@/components/ui/state-message";

const DEMO_EMAIL = "admin@rahulcareclinic.demo";
const DEMO_PASSWORD = "password123";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 250));

    if (email.toLowerCase() !== DEMO_EMAIL || password !== DEMO_PASSWORD) {
      setError("Invalid demo credentials. Please try again.");
      setLoading(false);
      return;
    }

    document.cookie = "demo_admin_auth=1; path=/; max-age=28800; samesite=lax";
    router.push("/admin/dashboard");
    router.refresh();
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-md items-center px-4 py-10">
      <section className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">Admin login</h1>
        <p className="mt-2 text-sm text-slate-600">Use demo credentials to access dashboard shell.</p>

        <form className="mt-6 space-y-4" onSubmit={onSubmit}>
          <label className="block text-sm font-medium text-slate-700">
            Email
            <input
              type="email"
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Password
            <input
              type="password"
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </label>

          {error ? <StateMessage tone="error" title="Login failed" description={error} /> : null}

          <button type="submit" disabled={loading} className="w-full rounded-lg bg-sky-700 px-4 py-2.5 font-semibold text-white disabled:opacity-60">
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <div className="mt-5 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-3 text-xs text-slate-600">
          Demo credentials: <strong>{DEMO_EMAIL}</strong> / <strong>{DEMO_PASSWORD}</strong>
        </div>
      </section>
    </main>
  );
}
