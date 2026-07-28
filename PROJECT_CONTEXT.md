# YieldOps Website — Project Context

> **Purpose of this file:** Living reference document for agents and developers. Update this file whenever you add/change/remove pages, components, routes, services, or design decisions.

---

## 1. Project Overview

| Field | Value |
|---|---|
| **Project Name** | YieldOps Website |
| **Brand** | YieldOps — "The Anti-Agency" |
| **Tagline** | "We Delete Your Busy Work" |
| **Business Type** | Boutique IT automation agency |
| **Target Audience** | SMB owners with manual workflow bottlenecks |
| **Primary CTA** | $99 Yield Diagnostic — booked via cal.com |
| **Contact Email** | hello@yieldops.com |
| **Booking URL** | https://cal.com/dax-yeildops/yield-diagnostic |
| **WhatsApp (Digital Growth)** | https://wa.me/919825612393 |

---

## 2. Tech Stack

| Category | Technology |
|---|---|
| **Framework** | Next.js 16.1.6 (App Router) |
| **Language** | TypeScript |
| **React Version** | React 19 |
| **Styling** | Tailwind CSS v4 (via `@tailwindcss/postcss`) |
| **Animations** | Framer Motion v12 |
| **Icons** | Lucide React |
| **Font** | Inter (Google Fonts via `next/font`) |
| **Dev Command** | `npm run dev` |
| **Build Command** | `npm run build` |

---

## 3. Project Structure

```
app/
├── public/
│   ├── logo.png                  # YieldOps logo (used in Navbar, Footer)
│   ├── dax.jpg                   # Founder photo (used in AboutSection)
│   └── logos/                    # Client logos for "Trusted By" ticker
│       ├── rc-imitation.png
│       ├── makerman-jeans.png
│       ├── mevish-ceramic.png
│       ├── orgets.png
│       └── maitri-fabrics.png
│
└── src/
    ├── app/
    │   ├── layout.tsx             # Root layout: ThemeProvider + Navbar + CursorGlow + ScrollProgress
    │   ├── page.tsx               # Homepage (/)
    │   ├── globals.css            # Global styles, CSS variables, reusable CSS classes
    │   └── digital-growth/
    │       └── page.tsx           # /digital-growth route (Digital Dominance Bundle page)
    │
    ├── components/
    │   ├── [Homepage components]  # See Section 4
    │   └── digital-growth/
    │       └── [Digital Growth components]  # See Section 5
    │
    └── context/
        └── ThemeContext.tsx       # Dark/light theme state + toggle
```

---

## 4. Pages & Routes

### Route: `/` (Homepage)
**File:** `src/app/page.tsx`

Section order (top to bottom):
1. `Hero` — Headline, CTA button, client logo ticker
2. `ProblemSection` — Pain points (id: `#problem`)
3. `Ticker` — Scrolling marquee: AUTOMATE, OPTIMIZE, YIELD… (left-to-right)
4. `SolutionSection` — How YieldOps solves the problem (id: `#process`)
5. `CounterSection` — Impact numbers/stats
6. `PricingSection` — 3-tier service cards (id: `#pricing`)
7. `Ticker` — Second marquee: EFFICIENCY, PRECISION, IMPACT… (right-to-left)
8. `ManifestoSection` — Brand philosophy/values
9. `AboutSection` — Founder bio with `dax.jpg` (id: `#about`)
10. `FAQSection` — Accordion FAQ (id: `#faq`)
11. `OtherServicesSection` — Links to sub-services/other pages
12. `Footer` — Logo, quick links, CTA

---

### Route: `/digital-growth`
**File:** `src/app/digital-growth/page.tsx`

The "Digital Dominance Bundle" landing page. Priced at ₹2,999. Target: Indian local businesses.

Section order:
1. `DigitalGrowthHero`
2. `DigitalGrowthProblem`
3. `DigitalGrowthBundle`
4. `DigitalGrowthPricing`
5. `DigitalGrowthAbout`
6. `DigitalGrowthFAQ`
7. `DigitalGrowthUpsell`

All DigitalGrowth components live in `src/components/digital-growth/`.
The page shell is `src/components/digital-growth/DigitalGrowthPage.tsx`.

---

## 5. Components Reference

### Global / Layout Components
| Component | File | Notes |
|---|---|---|
| `Navbar` | `Navbar.tsx` | Fixed top nav; adapts links based on current route (home vs /digital-growth); theme toggle |
| `CursorGlow` | `CursorGlow.tsx` | Custom cursor (hidden on touch devices) |
| `ScrollProgress` | `ScrollProgress.tsx` | Thin progress bar at top of page |
| `Footer` | `Footer.tsx` | Logo, quick links, CTA |

### Homepage Components
| Component | File | Notes |
|---|---|---|
| `Hero` | `Hero.tsx` | Full-screen hero with parallax blurs, TextReveal headline, MagneticButton CTA, client logo ticker |
| `ProblemSection` | `ProblemSection.tsx` | Section ID: `#problem` |
| `SolutionSection` | `SolutionSection.tsx` | Section ID: `#process` |
| `CounterSection` | `CounterSection.tsx` | Animated stats |
| `PricingSection` | `PricingSection.tsx` | 3 service tiers: Targeted Automation, Workflow Ecosystem (popular), Priority Transformation. Section ID: `#pricing` |
| `ManifestoSection` | `ManifestoSection.tsx` | Brand philosophy |
| `AboutSection` | `AboutSection.tsx` | Founder info. Uses `dax.jpg`. Section ID: `#about` |
| `FAQSection` | `FAQSection.tsx` | Accordion. Section ID: `#faq` |
| `OtherServicesSection` | `OtherServicesSection.tsx` | Cross-links to other services/pages |
| `Ticker` | `Ticker.tsx` | Infinite scrolling text marquee. Props: `items[]`, `speed`, `direction` |

### Reusable UI Primitives
| Component | File | Notes |
|---|---|---|
| `TextReveal` | `TextReveal.tsx` | Word-by-word animated reveal. Prop: `delay` |
| `MagneticButton` | `MagneticButton.tsx` | Cursor-following magnetic effect. Props: `as`, `intensity` |
| `TiltCard` | `TiltCard.tsx` | 3D tilt on hover. Props: `tiltIntensity`, `glowColor` |

### Digital Growth Components
| Component | File |
|---|---|
| `DigitalGrowthPage` | `digital-growth/DigitalGrowthPage.tsx` |
| `DigitalGrowthHero` | `digital-growth/DigitalGrowthHero.tsx` |
| `DigitalGrowthProblem` | `digital-growth/DigitalGrowthProblem.tsx` |
| `DigitalGrowthBundle` | `digital-growth/DigitalGrowthBundle.tsx` |
| `DigitalGrowthPricing` | `digital-growth/DigitalGrowthPricing.tsx` |
| `DigitalGrowthAbout` | `digital-growth/DigitalGrowthAbout.tsx` |
| `DigitalGrowthFAQ` | `digital-growth/DigitalGrowthFAQ.tsx` |
| `DigitalGrowthUpsell` | `digital-growth/DigitalGrowthUpsell.tsx` |

---

## 6. Design System

### Color Palette (CSS Variables in `globals.css`)

The site uses a **dark-first** theme system via `data-theme` attribute on `<html>`.

| Variable | Dark Mode | Light Mode | Usage |
|---|---|---|---|
| `--background` | `#0a0a0f` | `#ffffff` | Page background |
| `--surface` | `#16161f` | `#ffffff` | Card surfaces |
| `--primary-gold` | `#E8C872` | `#c9a855` | Accents, CTAs, highlights |
| `--accent-coral` | `#F0918D` | `#d87874` | Secondary accents, checkmarks |
| `--text-primary` | `#ffffff` | `#1d1d1f` | Headings |
| `--text-secondary` | `#a1a1aa` | `#6e6e73` | Body copy |
| `--text-muted` | `#71717a` | `#86868b` | Captions, labels |

### Reusable CSS Classes (in `globals.css`)
| Class | Purpose |
|---|---|
| `.apple-button` | Primary CTA button (glassmorphism pill) |
| `.glass-button` | Secondary button (liquid glass effect) |
| `.apple-card` | Card with backdrop blur, hover lift |
| `.glass-badge` | Small inline badge/pill |
| `.glass-panel` | Frosted glass container |
| `.gradient-text` | Gold→coral text gradient |
| `.popular-glow` | Gold border + glow for highlighted cards |
| `.animate-scroll` | CSS infinite horizontal scroll (used in Ticker) |
| `.hover-glow` | Gold glow on hover |

### Typography
- **Font:** Inter (Google Fonts — Latin subset)
- **Body:** `antialiased`, default Inter
- **Headings:** `font-semibold`, tight letter-spacing
- **Custom cursor:** Hidden globally; restored on touch devices

---

## 7. Context / State Management

| Context | File | Provides |
|---|---|---|
| `ThemeContext` | `src/context/ThemeContext.tsx` | `theme: 'dark' \| 'light'`, `toggleTheme()` |

- Default theme: **dark**
- Persists to `localStorage`
- Respects system `prefers-color-scheme` on first visit
- Applied via `data-theme` attribute on `<html>`
- Use `useTheme()` hook inside client components

---

## 8. Navigation Logic

**Navbar** (`Navbar.tsx`) is path-aware:
- On `/` → shows homepage anchor links (`#problem`, `#process`, `#pricing`, `#about`, `#faq`)
- On `/digital-growth` → shows digital growth anchor links (`#dg-problem`, `#dg-process`, etc.)
- CTA button changes: `"Book Audit"` (home) vs `"Get Bundle"` (digital-growth)
- CTA URL changes: cal.com booking (home) vs WhatsApp link (digital-growth)

---

## 9. Key Business Information

### Service Tiers (Homepage)
1. **Targeted Automation** ("The Quick Win") — Entry Level, single bottleneck fix
2. **Workflow Ecosystem** ("The Standard") — Most Common, full process overhaul, custom dashboard
3. **Priority Transformation** ("The White Glove") — Expedited 5-day delivery, 90-day support

All pricing is **custom-quoted** after the $99 Diagnostic.

### Digital Growth Bundle — ₹2,999
- Google Maps SEO
- Professional Website
- NFC Review Cards
- Target: Indian local market businesses

### Clients Featured (Trusted By ticker)
- Rc Imitation
- Makerman Jeans
- Mevish Ceramic
- Orgets
- Maitri Fabrics

---

## 10. Important Patterns & Conventions

1. **All interactive components are `'use client'`** — server-side the layout and static pages.
2. **Framer Motion `useInView`** with `once: true` used for scroll-triggered animations across all sections.
3. **Section IDs** must match Navbar href anchors exactly.
4. **`section` elements** have `scroll-margin-top: 80px` in CSS to offset fixed navbar.
5. **Images** use Next.js `<Image>` component; all assets live in `/public`.
6. **Links** outside the site use `target="_blank" rel="noopener noreferrer"`.
7. **No global state library** — only React context for theme.

---

## 11. Changelog / Update Log

| Date | What Changed | By |
|---|---|---|
| 2026-03-26 | Initial PROJECT_CONTEXT.md created; full project audit performed | Agent |

> **Instructions for agents:** When you add/modify a component, page, route, color, or business detail — update the relevant section above AND add a row to this changelog.
