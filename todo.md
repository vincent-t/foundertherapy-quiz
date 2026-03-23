# FounderTherapy Quiz App — Build Plan

## Overview
Build a single-page interactive quiz: "Which Founder Archetype Are You?"
- 8 screens: Landing → 5 Questions → Email Capture → Result
- Dark mode, minimal design (Linear/Notion aesthetic)
- Next.js 14 + Tailwind + TypeScript
- Deploy to Vercel

---

## Phase 1: Project Setup
- [x] Initialize Next.js 14 project with TypeScript and Tailwind
- [x] Configure fonts (Instrument Serif for headlines, DM Sans for body)
- [x] Set up dark theme colors and Tailwind config
- [x] Create basic layout with metadata/SEO

## Phase 2: Data Layer
- [x] Create `/data/archetypes.ts` with all 5 archetype definitions
- [x] Create `/data/questions.ts` with all 5 questions and answer mappings
- [x] Create `/lib/scoring.ts` with scoring logic (tally + tiebreaker)

## Phase 3: Components
- [x] Create `ProgressBar.tsx` component
- [x] Create `QuizIntro.tsx` (landing screen)
- [x] Create `QuizQuestion.tsx` (reusable question component)
- [x] Create `EmailCapture.tsx` (email form screen)
- [x] Create `QuizResult.tsx` (result with share buttons)

## Phase 4: Main Page & State
- [x] Build main page with quiz state management
- [x] Wire up screen transitions with fade animations
- [x] Implement back button navigation
- [x] Handle scoring and result calculation

## Phase 5: Polish & Features
- [x] Add Twitter/X share functionality
- [x] Set up OG meta tags for sharing
- [x] Mobile responsiveness (built-in via Tailwind)
- [x] Webhook integration for email capture (env variable)

## Phase 6: Deploy
- [x] Deploy to Vercel
- [x] Test production build

---

## Review

### Summary
Built a complete quiz funnel for FounderTherapy in a single session. The app guides users through 5 scenario-based questions to identify their founder archetype, captures their email, and displays personalized results with sharing capability.

### What Was Built
- **Landing page** with headline, subheadline, CTA, and archetype previews
- **5 quiz questions** with auto-advance on answer selection and back navigation
- **Progress bar** showing question number and percentage
- **Email capture screen** with webhook support (configurable via `NEXT_PUBLIC_WEBHOOK_URL`)
- **Result page** with archetype details, CBT insight, and Twitter/X share button
- **Fade animations** between screens

### Technical Decisions
- Single-page app with React state (no routing needed)
- State: `screen`, `questionIndex`, `answers[]`, `result`
- Tiebreaker: most recently selected archetype wins
- Skip email screen available when no webhook configured (for testing)

### Live URL
https://cbt-exercise.vercel.app

### To Configure Email Capture
Add environment variable in Vercel:
```
NEXT_PUBLIC_WEBHOOK_URL=https://your-webhook-url.com
```

### Future Enhancements (Not Implemented)
- Dynamic OG images per archetype result
- Analytics integration (Plausible/PostHog)
- ConvertKit/Beehiiv API integration
