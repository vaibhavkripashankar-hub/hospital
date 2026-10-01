import { baseTimeSlots, doctors, initialAppointments, services } from "@/lib/demo-data";
import { Appointment, BookingInput, Patient } from "@/lib/types";

let appointmentStore: Appointment[] = [...initialAppointments];

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function listServices() {
  await sleep(80);
  return services;
}

export async function listDoctors() {
  await sleep(80);
  return doctors;
}

export async function listAppointments() {
  await sleep(120);
  return appointmentStore;
}

export async function listPatients(): Promise<Patient[]> {
  await sleep(120);
  const seen = new Map<string, Patient>();
  for (const appointment of appointmentStore) {
    if (!seen.has(appointment.patientPhone)) {
      seen.set(appointment.patientPhone, {
        id: appointment.patientPhone.replace(/\D/g, "").slice(-8),
        name: appointment.patientName,
        phone: appointment.patientPhone,
        email: appointment.patientEmail,
        age: appointment.age,
        gender: appointment.gender,
      });
    }
  }
  return [...seen.values()];
}

export function getAvailableSlots(doctorId: string, date: string) {
  const booked = new Set(
    appointmentStore
      .filter((item) => item.doctorId === doctorId && item.date === date && item.status !== "cancelled")
      .map((item) => item.time),
  );

  return baseTimeSlots.map((time) => ({
    time,
    isAvailable: !booked.has(time),
  }));
}

export async function createAppointment(input: BookingInput) {
  await sleep(300);

  const isTaken = appointmentStore.some(
    (item) =>
      item.doctorId === input.doctorId &&
      item.date === input.date &&
      item.time === input.time &&
      item.status !== "cancelled",
  );

  if (isTaken) {
    throw new Error("Selected slot is no longer available. Please choose another time.");
  }

  const id = `apt-${Date.now()}`;
  const code = `RCC-${Math.floor(Math.random() * 9000 + 1000)}`;
  const appointment: Appointment = {
    id,
    code,
    patientName: input.patientName,
    patientPhone: input.patientPhone,
    patientEmail: input.patientEmail,
    age: input.age,
    gender: input.gender,
    reason: input.reason,
    message: input.message,
    serviceId: input.serviceId,
    doctorId: input.doctorId,
    date: input.date,
    time: input.time,
    status: "pending",
  };

  appointmentStore = [appointment, ...appointmentStore];
  return appointment;
}

export async function getDashboardStats() {
  await sleep(120);
  const appointmentsToday = appointmentStore.filter((item) => item.date === "2026-10-02").length;
  const pending = appointmentStore.filter((item) => item.status === "pending").length;
  const completed = appointmentStore.filter((item) => item.status === "completed").length;

  return [
    { label: "Total Patients", value: `${(await listPatients()).length}` },
    { label: "Today’s Appointments", value: `${appointmentsToday}` },
    { label: "Pending Appointments", value: `${pending}` },
    { label: "Completed Appointments", value: `${completed}` },
    { label: "Total Services", value: `${services.length}` },
  ];
}

export function mapServiceName(serviceId: string) {
  return services.find((item) => item.id === serviceId)?.name ?? "Unknown service";
}

export function mapDoctorName(doctorId: string) {
  return doctors.find((item) => item.id === doctorId)?.name ?? "Unknown doctor";
}
