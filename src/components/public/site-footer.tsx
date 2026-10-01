import Link from "next/link";
import { clinicInfo } from "@/lib/demo-data";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 text-sm text-slate-600 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-semibold text-slate-900">{clinicInfo.name}</p>
          <p className="mt-2">{clinicInfo.address}</p>
          <p>{clinicInfo.hours}</p>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Contact</p>
          <p className="mt-2">
            <a href={`tel:${clinicInfo.phone.replace(/\s/g, "")}`} className="hover:text-sky-700">
              {clinicInfo.phone}
            </a>
          </p>
          <p>
            <a href={`mailto:${clinicInfo.email}`} className="hover:text-sky-700">
              {clinicInfo.email}
            </a>
          </p>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Legal</p>
          <div className="mt-2 space-y-1">
            <Link href="/privacy" className="block hover:text-sky-700">
              Privacy Policy
            </Link>
            <Link href="/terms" className="block hover:text-sky-700">
              Terms & Conditions
            </Link>
            <Link href="/login" className="block hover:text-sky-700">
              Admin Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
