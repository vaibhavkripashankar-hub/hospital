# Rahul Care Clinic MVP (Demo)

This repository now contains the first working MVP foundation for **Rahul Care Clinic** using **Next.js + TypeScript + Tailwind CSS**.

## What is implemented

### Public website
- Home page with clinic branding, trust-focused hero, call/book CTAs, configurable-looking stats, doctor intro, services preview, clinic info, and contact CTA.
- Additional pages:
  - `/about`
  - `/doctor`
  - `/services`
  - `/services/[slug]`
  - `/appointments`
  - `/contact`
  - `/faq`
  - `/privacy`
  - `/terms`

### Appointment booking (demo flow)
- Full form flow in `/appointments`:
  - Service selection
  - Doctor selection
  - Date selection
  - Available time slot selection
  - Patient details (name, phone, email, age, gender, reason, optional message)
- Client-side validation with inline errors.
- Confirmation state showing appointment code and summary details.
- Mock repository/data-access layer (`src/lib/demo-repository.ts`) used for demo mode.

### Admin shell (demo)
- `/admin/login` demo login page.
- Protected-looking dashboard routes via middleware cookie guard:
  - `/admin/dashboard`
  - `/admin/appointments`
  - `/admin/patients`
  - `/admin/services`
  - `/admin/settings`
- Includes dashboard statistics, recent appointments, status badges, patient list, service placeholders, and settings success state.

### SEO/support files
- Metadata configured in app layout + per-page metadata.
- `src/app/sitemap.ts`
- `src/app/robots.ts`

## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Demo admin credentials

- Email: `admin@rahulcareclinic.demo`
- Password: `password123`

## Environment variables

No required environment variables for this MVP demo mode.

## Current MVP limitations

- No Supabase persistence yet.
- No real authentication provider.
- Appointment and dashboard data are demo/mock and reset with server restarts.
- Contact form is placeholder UI (non-persistent).

## Next steps for Supabase integration

1. Add Supabase project URL and anon key as environment variables.
2. Create tables for services, doctors, patients, appointments, and clinic settings.
3. Move mock repository functions to server-side Supabase queries.
4. Add Supabase Auth-based login and role-based route protection.
5. Enforce RLS policies and server-side validation for booking writes.

## Validation commands used

```bash
npm run lint
npx tsc --noEmit
npm run build
```
