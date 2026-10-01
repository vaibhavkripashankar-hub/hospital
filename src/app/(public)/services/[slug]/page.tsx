import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/lib/demo-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return { title: "Service not found" };
  }

  return {
    title: service.name,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900">{service.name}</h1>
      <p className="mt-3 text-slate-600">{service.description}</p>

      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-700">
        <p>Estimated consultation duration: {service.durationMinutes} minutes</p>
        <p className="mt-1">Consultation fee: {service.consultationFee}</p>
        <p className="mt-3 text-slate-600">
          This MVP includes informational service content for demo purposes. Treatment plans are discussed in person after consultation.
        </p>
      </div>

      <div className="mt-6 flex gap-3">
        <Link href="/appointments" className="rounded-lg bg-sky-700 px-5 py-2.5 font-semibold text-white hover:bg-sky-800">
          Book appointment
        </Link>
        <Link href="/services" className="rounded-lg border border-slate-300 px-5 py-2.5 font-semibold text-slate-700 hover:bg-slate-100">
          Back to services
        </Link>
      </div>
    </section>
  );
}
