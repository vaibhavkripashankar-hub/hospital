import { Metadata } from "next";
import { BookingForm } from "@/components/appointments/booking-form";

export const metadata: Metadata = {
  title: "Appointments",
  description: "Book an appointment at Rahul Care Clinic using our guided booking flow.",
};

export default function AppointmentsPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900">Book an appointment</h1>
      <p className="mt-3 text-slate-600">
        Choose your service, doctor, date, and slot. Then add patient details to confirm your appointment code.
      </p>
      <div className="mt-8">
        <BookingForm />
      </div>
    </section>
  );
}
