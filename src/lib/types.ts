export type AppointmentStatus =
  | "pending"
  | "confirmed"
  | "completed"
  | "cancelled"
  | "no_show";

export interface Service {
  id: string;
  slug: string;
  name: string;
  description: string;
  durationMinutes: number;
  consultationFee: string;
}

export interface Doctor {
  id: string;
  name: string;
  qualification: string;
  specialization: string;
  experience: string;
  registration: string;
  languages: string[];
  bio: string;
}

export interface Patient {
  id: string;
  name: string;
  phone: string;
  email: string;
  age: number;
  gender: string;
}

export interface Appointment {
  id: string;
  code: string;
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  age: number;
  gender: string;
  reason: string;
  message?: string;
  serviceId: string;
  doctorId: string;
  date: string;
  time: string;
  status: AppointmentStatus;
}

export interface BookingInput {
  serviceId: string;
  doctorId: string;
  date: string;
  time: string;
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  age: number;
  gender: string;
  reason: string;
  message?: string;
}
