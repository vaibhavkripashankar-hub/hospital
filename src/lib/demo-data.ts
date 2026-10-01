import { Appointment, Doctor, Service } from "@/lib/types";

export const clinicInfo = {
  name: "Rahul Care Clinic",
  tagline: "Quality Healthcare. Personal Attention.",
  phone: "+91 98765 43210",
  email: "care@rahulcareclinic.demo",
  address: "24 Wellness Road, Sector 8, Pune, Maharashtra",
  hours: "Mon-Sat • 9:00 AM - 8:00 PM",
  emergency: "+91 90000 11223",
  whatsapp: "+91 98765 43210",
};

export const clinicStats = [
  { label: "Years of Experience", value: "14+" },
  { label: "Patients Served", value: "12,500+" },
  { label: "Medical Services", value: "10" },
  { label: "Avg. Wait Time", value: "< 20 min" },
];

export const doctors: Doctor[] = [
  {
    id: "dr-rahul",
    name: "Dr. Rahul Sharma",
    qualification: "MBBS, MD (Internal Medicine)",
    specialization: "Family Medicine & Preventive Care",
    experience: "14 years",
    registration: "MMC-2012-45981",
    languages: ["English", "Hindi", "Marathi"],
    bio: "Dr. Rahul focuses on practical, evidence-based care for families. His clinic approach prioritizes early diagnosis, patient education, and continuity of care.",
  },
  {
    id: "dr-neha",
    name: "Dr. Neha Verma",
    qualification: "MBBS, DCH",
    specialization: "Child & Preventive Healthcare",
    experience: "8 years",
    registration: "MMC-2016-77390",
    languages: ["English", "Hindi"],
    bio: "Dr. Neha supports pediatric wellness, vaccination counseling, and routine growth monitoring with a calm, parent-friendly care style.",
  },
];

export const services: Service[] = [
  {
    id: "svc-general",
    slug: "general-consultation",
    name: "General Consultation",
    description: "Comprehensive primary care for common symptoms and routine health concerns.",
    durationMinutes: 20,
    consultationFee: "₹600",
  },
  {
    id: "svc-fever",
    slug: "fever-infection-care",
    name: "Fever & Infection Care",
    description: "Diagnosis and treatment plans for seasonal fever, flu-like illness, and mild infections.",
    durationMinutes: 20,
    consultationFee: "₹650",
  },
  {
    id: "svc-diabetes",
    slug: "diabetes-consultation",
    name: "Diabetes Consultation",
    description: "Medication review, sugar trend guidance, and long-term diabetic health planning.",
    durationMinutes: 30,
    consultationFee: "₹900",
  },
  {
    id: "svc-bp",
    slug: "blood-pressure-management",
    name: "Blood Pressure Management",
    description: "Lifestyle and medicine-based hypertension management with regular follow-up advice.",
    durationMinutes: 25,
    consultationFee: "₹800",
  },
  {
    id: "svc-preventive",
    slug: "preventive-health-check",
    name: "Preventive Health Check",
    description: "Risk screening and annual check-up planning focused on preventive healthcare.",
    durationMinutes: 30,
    consultationFee: "₹1200",
  },
  {
    id: "svc-women",
    slug: "womens-health-consultation",
    name: "Women’s Health Consultation",
    description: "Private consultation for everyday women’s wellness concerns and referrals where needed.",
    durationMinutes: 30,
    consultationFee: "₹850",
  },
];

export const faqs = [
  {
    question: "Do I need an appointment before visiting?",
    answer:
      "Walk-ins are accepted, but appointments reduce waiting time and help us prepare your visit better.",
  },
  {
    question: "Can I choose my doctor while booking?",
    answer:
      "Yes. During booking you can select an available doctor based on service and preferred date.",
  },
  {
    question: "Are online payments enabled in this demo?",
    answer:
      "Not yet. The current MVP uses a demo booking flow and does not process real payments.",
  },
  {
    question: "How will I receive booking confirmation?",
    answer:
      "You’ll get an appointment code on screen immediately after submitting the booking form.",
  },
];

export const initialAppointments: Appointment[] = [
  {
    id: "apt-1001",
    code: "RCC-1001",
    patientName: "Asha Kulkarni",
    patientPhone: "+91 98220 11001",
    patientEmail: "asha.k@example.demo",
    age: 33,
    gender: "Female",
    reason: "Recurring headache",
    serviceId: "svc-general",
    doctorId: "dr-rahul",
    date: "2026-10-02",
    time: "10:00",
    status: "confirmed",
  },
  {
    id: "apt-1002",
    code: "RCC-1002",
    patientName: "Rohan Patil",
    patientPhone: "+91 98760 22331",
    patientEmail: "rohan.p@example.demo",
    age: 46,
    gender: "Male",
    reason: "Blood pressure follow-up",
    serviceId: "svc-bp",
    doctorId: "dr-rahul",
    date: "2026-10-03",
    time: "11:30",
    status: "pending",
  },
  {
    id: "apt-1003",
    code: "RCC-1003",
    patientName: "Meera Singh",
    patientPhone: "+91 90110 77221",
    patientEmail: "meera.s@example.demo",
    age: 29,
    gender: "Female",
    reason: "Child fever consultation",
    serviceId: "svc-fever",
    doctorId: "dr-neha",
    date: "2026-10-04",
    time: "16:00",
    status: "completed",
  },
];

export const baseTimeSlots = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
];
