import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Rahul Care Clinic",
    template: "%s | Rahul Care Clinic",
  },
  description: "Rahul Care Clinic offers trusted primary healthcare and easy appointment booking.",
  openGraph: {
    title: "Rahul Care Clinic",
    description: "Trusted neighborhood clinic with simple online booking.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-slate-50 text-slate-900">{children}</body>
    </html>
  );
}
