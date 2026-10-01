"use client";

import { FormEvent, useMemo, useState } from "react";
import { doctors, services } from "@/lib/demo-data";
import { createAppointment, getAvailableSlots, mapDoctorName, mapServiceName } from "@/lib/demo-repository";
import { Appointment } from "@/lib/types";
import { StateMessage } from "@/components/ui/state-message";

interface FormState {
  serviceId: string;
  doctorId: string;
  date: string;
  time: string;
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  age: string;
  gender: string;
  reason: string;
  message: string;
}

const initialForm: FormState = {
  serviceId: "",
  doctorId: "",
  date: "",
  time: "",
  patientName: "",
  patientPhone: "",
  patientEmail: "",
  age: "",
  gender: "",
  reason: "",
  message: "",
};

export function BookingForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [confirmedAppointment, setConfirmedAppointment] = useState<Appointment | null>(null);

  const slots = useMemo(() => {
    if (!form.doctorId || !form.date) {
      return [];
    }
    return getAvailableSlots(form.doctorId, form.date);
  }, [form.date, form.doctorId]);

  function validate() {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.serviceId) nextErrors.serviceId = "Please select a service.";
    if (!form.doctorId) nextErrors.doctorId = "Please select a doctor.";
    if (!form.date) nextErrors.date = "Please choose a date.";
    if (!form.time) nextErrors.time = "Please select an available slot.";
    if (!form.patientName.trim()) nextErrors.patientName = "Name is required.";
    if (!/^\+?[0-9\s-]{10,15}$/.test(form.patientPhone.trim())) nextErrors.patientPhone = "Enter a valid phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.patientEmail.trim())) nextErrors.patientEmail = "Enter a valid email.";

    const age = Number(form.age);
    if (!Number.isInteger(age) || age < 1 || age > 120) nextErrors.age = "Enter an age between 1 and 120.";
    if (!form.gender) nextErrors.gender = "Please select a gender.";
    if (!form.reason.trim()) nextErrors.reason = "Please share your reason for visit.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError("");

    if (!validate()) {
      return;
    }

    setSubmitting(true);
    try {
      const appointment = await createAppointment({
        serviceId: form.serviceId,
        doctorId: form.doctorId,
        date: form.date,
        time: form.time,
        patientName: form.patientName,
        patientPhone: form.patientPhone,
        patientEmail: form.patientEmail,
        age: Number(form.age),
        gender: form.gender,
        reason: form.reason,
        message: form.message || undefined,
      });
      setConfirmedAppointment(appointment);
      setForm(initialForm);
      setErrors({});
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Could not submit booking. Please retry.");
    } finally {
      setSubmitting(false);
    }
  }

  if (confirmedAppointment) {
    return (
      <div className="space-y-4 rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm">
        <StateMessage
          tone="success"
          title="Appointment booked successfully"
          description="Your demo appointment was created. Please keep the appointment code for reference."
        />
        <dl className="grid gap-3 text-sm sm:grid-cols-2">
          <div>
            <dt className="font-semibold text-slate-900">Appointment code</dt>
            <dd className="text-slate-700">{confirmedAppointment.code}</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900">Patient</dt>
            <dd className="text-slate-700">{confirmedAppointment.patientName}</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900">Service</dt>
            <dd className="text-slate-700">{mapServiceName(confirmedAppointment.serviceId)}</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900">Doctor</dt>
            <dd className="text-slate-700">{mapDoctorName(confirmedAppointment.doctorId)}</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900">Date</dt>
            <dd className="text-slate-700">{confirmedAppointment.date}</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900">Time</dt>
            <dd className="text-slate-700">{confirmedAppointment.time}</dd>
          </div>
        </dl>
        <button
          type="button"
          onClick={() => setConfirmedAppointment(null)}
          className="rounded-lg bg-sky-700 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-800"
        >
          Book another appointment
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          Service
          <select
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
            value={form.serviceId}
            onChange={(event) => setForm((current) => ({ ...current, serviceId: event.target.value }))}
          >
            <option value="">Select service</option>
            {services.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          {errors.serviceId ? <span className="mt-1 block text-xs text-rose-600">{errors.serviceId}</span> : null}
        </label>

        <label className="text-sm font-medium text-slate-700">
          Doctor
          <select
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
            value={form.doctorId}
            onChange={(event) => setForm((current) => ({ ...current, doctorId: event.target.value, time: "" }))}
          >
            <option value="">Select doctor</option>
            {doctors.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          {errors.doctorId ? <span className="mt-1 block text-xs text-rose-600">{errors.doctorId}</span> : null}
        </label>

        <label className="text-sm font-medium text-slate-700">
          Date
          <input
            type="date"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
            value={form.date}
            min={new Date().toISOString().split("T")[0]}
            onChange={(event) => setForm((current) => ({ ...current, date: event.target.value, time: "" }))}
          />
          {errors.date ? <span className="mt-1 block text-xs text-rose-600">{errors.date}</span> : null}
        </label>
      </div>

      <fieldset>
        <legend className="text-sm font-medium text-slate-700">Available Slots</legend>
        <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {slots.length === 0 ? (
            <p className="col-span-full text-sm text-slate-500">Select doctor and date to view slots.</p>
          ) : (
            slots.map((slot) => (
              <label
                key={slot.time}
                className={`rounded-lg border px-3 py-2 text-center text-sm ${
                  slot.isAvailable ? "border-slate-300" : "cursor-not-allowed border-slate-200 bg-slate-100 text-slate-400"
                }`}
              >
                <input
                  type="radio"
                  name="slot"
                  value={slot.time}
                  disabled={!slot.isAvailable}
                  checked={form.time === slot.time}
                  onChange={(event) => setForm((current) => ({ ...current, time: event.target.value }))}
                  className="sr-only"
                />
                {slot.time}
              </label>
            ))
          )}
        </div>
        {errors.time ? <span className="mt-1 block text-xs text-rose-600">{errors.time}</span> : null}
      </fieldset>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          Full name
          <input
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
            value={form.patientName}
            onChange={(event) => setForm((current) => ({ ...current, patientName: event.target.value }))}
          />
          {errors.patientName ? <span className="mt-1 block text-xs text-rose-600">{errors.patientName}</span> : null}
        </label>
        <label className="text-sm font-medium text-slate-700">
          Phone
          <input
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
            value={form.patientPhone}
            onChange={(event) => setForm((current) => ({ ...current, patientPhone: event.target.value }))}
          />
          {errors.patientPhone ? <span className="mt-1 block text-xs text-rose-600">{errors.patientPhone}</span> : null}
        </label>
        <label className="text-sm font-medium text-slate-700">
          Email
          <input
            type="email"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
            value={form.patientEmail}
            onChange={(event) => setForm((current) => ({ ...current, patientEmail: event.target.value }))}
          />
          {errors.patientEmail ? <span className="mt-1 block text-xs text-rose-600">{errors.patientEmail}</span> : null}
        </label>
        <label className="text-sm font-medium text-slate-700">
          Age
          <input
            type="number"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
            value={form.age}
            onChange={(event) => setForm((current) => ({ ...current, age: event.target.value }))}
          />
          {errors.age ? <span className="mt-1 block text-xs text-rose-600">{errors.age}</span> : null}
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          Gender
          <select
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
            value={form.gender}
            onChange={(event) => setForm((current) => ({ ...current, gender: event.target.value }))}
          >
            <option value="">Select</option>
            <option>Female</option>
            <option>Male</option>
            <option>Other</option>
          </select>
          {errors.gender ? <span className="mt-1 block text-xs text-rose-600">{errors.gender}</span> : null}
        </label>
        <label className="text-sm font-medium text-slate-700">
          Reason for visit
          <input
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
            value={form.reason}
            onChange={(event) => setForm((current) => ({ ...current, reason: event.target.value }))}
          />
          {errors.reason ? <span className="mt-1 block text-xs text-rose-600">{errors.reason}</span> : null}
        </label>
      </div>

      <label className="block text-sm font-medium text-slate-700">
        Additional message (optional)
        <textarea
          className="mt-1 min-h-24 w-full rounded-lg border border-slate-300 px-3 py-2"
          value={form.message}
          onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
        />
      </label>

      {submitError ? <StateMessage tone="error" title="Booking failed" description={submitError} /> : null}

      <button
        type="submit"
        disabled={submitting}
        className="rounded-lg bg-sky-700 px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-50"
      >
        {submitting ? "Submitting..." : "Confirm appointment"}
      </button>
      <p className="text-xs text-slate-500">Demo mode: bookings are stored in-memory and reset on server restart.</p>
    </form>
  );
}
