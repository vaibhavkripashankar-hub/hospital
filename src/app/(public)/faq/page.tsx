import { Metadata } from "next";
import { faqs } from "@/lib/demo-data";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about appointments and clinic visits.",
};

export default function FAQPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900">Frequently asked questions</h1>
      <div className="mt-6 space-y-3">
        {faqs.map((item) => (
          <details key={item.question} className="rounded-xl border border-slate-200 bg-white p-4">
            <summary className="cursor-pointer font-semibold text-slate-900">{item.question}</summary>
            <p className="mt-2 text-sm text-slate-600">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
