# MASTER PROMPT

**Role:**
You are a senior full-stack web developer and freelance growth strategist.

**Goal:**
Create 3 high-converting demo websites for client outreach using ONE Next.js codebase.
The demos are for:
1. Real Estate
2. Cleaning Services
3. Clinics / Medical Practices

These demos are sales tools, not production apps.
They must look professional, load fast, and clearly convert visitors.

**🔧 TECH STACK**
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- One deployment (Vercel-ready)
- No backend
- UI-only forms
- Mobile-first design

**🧱 INSTALLATION**
Use this exact setup:
`npx create-next-app@latest real-estate-demos`

Options:
- TypeScript → Yes
- ESLint → Yes
- Tailwind CSS → Yes
- src/ directory → Yes
- App Router → Yes
- Import alias → No

Then:
`cd real-estate-demos`
`npm run dev`

**📁 PROJECT STRUCTURE**
All demos live in one codebase:

src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── real-estate/
│   │   └── page.tsx
│   ├── cleaning/
│   │   └── page.tsx
│   └── clinic/
│       └── page.tsx
│
├── components/
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Listings.tsx
│   ├── Testimonials.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
│
├── styles/
│   └── globals.css

One layout, reusable components, different content per niche.

**🏢 DEMO 1 — REAL ESTATE (High-Value Clients)**
Route: `/real-estate`
Sections:
- Hero: Headline "Find Premium Properties in Qatar", CTA
- Featured Listings (cards)
- Why Choose Us (trust & locations)
- Locations Served
- Strong CTA footer
Goal: Generate viewing requests and WhatsApp leads.

**🧹 DEMO 2 — CLEANING SERVICES (Fast Cash)**
Route: `/cleaning`
Sections:
- Hero: Headline "Professional Cleaning Services You Can Trust"
- Services: Home, Office, Deep Cleaning
- Why Us
- Before / After (visual trust)
- Booking CTA (UI-only form)
Goal: Drive immediate calls and bookings.

**🏥 DEMO 3 — CLINIC / MEDICAL (Professional Trust)**
Route: `/clinic`
Sections:
- Hero: Headline "Quality Healthcare for You and Your Family"
- Medical Services
- Doctors / Trust Signals
- Appointment Booking (UI-only)
- Calm professional CTA
Goal: Build trust and appointment intent.

**🎨 DESIGN RULES**
- Clean, modern, neutral branding
- No developer branding
- Fake business names: PrimeHomes, SparkleClean, CarePlus Clinic
- Large CTAs
- Minimal animations
- Mobile-first

**🌍 DEPLOYMENT**
Deploy once to Vercel.
Final demo URLs:
- `yourname.vercel.app/real-estate`
- `yourname.vercel.app/cleaning`
- `yourname.vercel.app/clinic`

**🎯 HOW THIS IS USED**
For cold outreach, say ONLY:
"I made a quick demo for a business like yours."
Then drop one relevant link.
No long explanations.

**⚡ BUILD TIME EXPECTATION**
- Shared components first
- Finish all 3 demos in one day
- Speed > perfection

**🧠 FINAL INTENT**
This setup should:
- Make you look like an agency
- Let you customized demos fast
- Help you land international clients
