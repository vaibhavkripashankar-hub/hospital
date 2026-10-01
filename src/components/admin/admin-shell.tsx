"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/admin/dashboard", label: "Overview" },
  { href: "/admin/appointments", label: "Appointments" },
  { href: "/admin/patients", label: "Patients" },
  { href: "/admin/services", label: "Services" },
  { href: "/admin/settings", label: "Settings" },
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-50">
      <aside className={`fixed inset-y-0 z-30 w-64 border-r border-slate-200 bg-white p-5 ${open ? "left-0" : "-left-72"} transition-all md:static md:left-0`}>
        <p className="text-lg font-bold text-slate-900">Rahul Care Admin</p>
        <nav className="mt-6 space-y-2">
          {links.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-lg px-3 py-2 text-sm ${active ? "bg-sky-100 text-sky-800" : "text-slate-600 hover:bg-slate-100"}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Link href="/" className="mt-6 inline-block text-sm text-sky-700 hover:text-sky-800">
          ← Back to website
        </Link>
      </aside>
      <div className="flex-1">
        <header className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3 md:px-6">
          <button
            type="button"
            className="rounded border border-slate-300 px-3 py-1.5 text-sm md:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            Menu
          </button>
          <p className="text-sm text-slate-500">Demo dashboard shell</p>
          <Link href="/admin/login" className="text-sm text-rose-600 hover:text-rose-700">
            Logout
          </Link>
        </header>
        <main className="p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
