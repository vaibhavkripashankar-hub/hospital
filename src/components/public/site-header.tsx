import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/doctor", label: "Doctor" },
  { href: "/services", label: "Services" },
  { href: "/appointments", label: "Appointments" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="font-bold text-slate-900">
          Rahul Care Clinic
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-5 text-sm text-slate-700 md:flex">
          {links.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-sky-700">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/appointments" className="rounded-lg bg-sky-700 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-800">
          Book now
        </Link>
      </div>
    </header>
  );
}
