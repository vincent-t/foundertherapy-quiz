# FounderTherapy Quiz — Claude Code Project Brief

## What to Build
A single-page interactive quiz app: **"Which Founder Archetype Are You?"**
This is a lead magnet funnel for FounderTherapy, a CBT-based mental fitness app for startup founders.

## Tech Stack
- **Next.js 14** (App Router)
- **Tailwind CSS** (dark mode by default)
- **TypeScript**
- **Deploy to Vercel**
- No database needed — email capture via form submission to a webhook (or ConvertKit/Beehiiv API)

## Design Direction
- **Dark mode** — near-black background (#0a0a0a or similar), light text
- **Aesthetic:** Linear meets Notion. Clean, minimal, developer/founder-friendly. NOT BuzzFeed quiz vibes. NOT pastel wellness spa.
- **Typography:** Use a distinctive display font (e.g., Instrument Serif, Fraunces, or Playfair Display) for headlines. Clean sans-serif for body (e.g., Geist, Satoshi, or DM Sans). Import via Google Fonts.
- **Accent color:** A single sharp accent — electric blue (#3b82f6), emerald (#10b981), or amber (#f59e0b). Pick one and use it consistently for CTAs, progress bar, and highlights.
- **Motion:** Subtle fade-in transitions between quiz steps. Staggered reveal on the result page. No heavy animations.
- **Layout:** Centered, max-width ~640px. Generous whitespace. Card-based quiz questions.

---

## Page Structure & Flow

### Screen 1: Landing / Intro
**Headline:** Which Founder Archetype Are You?
**Subheadline:** Startup pressure creates predictable thinking patterns. Discover yours in 60 seconds.
**CTA Button:** Take the Quiz
**Below (optional scroll):** Preview of the 5 archetypes as small cards:
- The Signal Amplifier
- The Comparison Navigator
- The Responsibility Carrier
- The Strategic Overthinker
- The Relentless Builder

### Screen 2–6: Quiz Questions (5 questions, one per screen)
- Show a progress bar at the top (1/5, 2/5, etc.)
- Each question presents a **startup scenario** with 5 answer options (A–E)
- Each answer maps to one archetype
- Clicking an answer auto-advances to the next question (no submit button needed)
- Include a "Back" button to go to previous question

#### Question 1
**"When a competitor raises a large funding round, your first thought is:"**
- A) "We're falling behind. This might kill our chances." → Signal Amplifier
- B) "Why are they ahead? What am I doing wrong?" → Comparison Navigator
- C) "My team is counting on me to respond to this." → Responsibility Carrier
- D) "I need to re-analyze our entire strategy." → Strategic Overthinker
- E) "Time to double down and outwork them." → Relentless Builder

#### Question 2
**"When growth slows for a few weeks:"**
- A) "The company might be in serious trouble." → Signal Amplifier
- B) "Other startups seem to be growing faster." → Comparison Navigator
- C) "I'm letting my investors and team down." → Responsibility Carrier
- D) "I need to figure out exactly what changed before doing anything." → Strategic Overthinker
- E) "I just need to work harder and push through this." → Relentless Builder

#### Question 3
**"After an investor says no:"**
- A) "Maybe nobody will fund us. This could be the end." → Signal Amplifier
- B) "Other founders seem to raise so easily." → Comparison Navigator
- C) "I've wasted my team's time." → Responsibility Carrier
- D) "I need to rethink the entire pitch and strategy." → Strategic Overthinker
- E) "I'll just do more pitches. Volume will fix this." → Relentless Builder

#### Question 4
**"On a Sunday evening before a big week:"**
- A) "I can't stop thinking about everything that could go wrong." → Signal Amplifier
- B) "I checked Twitter and everyone seems to be doing better." → Comparison Navigator
- C) "My team needs me to have answers by Monday." → Responsibility Carrier
- D) "I'm mentally running through every possible scenario." → Strategic Overthinker
- E) "I'm already working. Rest can wait." → Relentless Builder

#### Question 5
**"When you read about a startup shutting down:"**
- A) "That could easily be us." → Signal Amplifier
- B) "At least they got further than we have." → Comparison Navigator
- C) "I can't imagine putting my employees through that." → Responsibility Carrier
- D) "I wonder what decisions led to that outcome." → Strategic Overthinker
- E) "That's what happens when you stop hustling." → Relentless Builder

### Screen 7: Email Capture (Before showing result)
**Headline:** Your result is ready.
**Subheadline:** Enter your email to see your Founder Archetype — plus get early access to FounderTherapy when we launch.
**Form:** Email input + "See My Result" button
**Small text:** No spam. Unsubscribe anytime.

### Screen 8: Result Page
Show the archetype the user scored highest on. If there's a tie, pick the first one matched.

Each result has:
1. **Archetype name** (large, styled)
2. **One-line tagline**
3. **Description paragraph** (strength-framed)
4. **"Under pressure" insight** — what this pattern looks like
5. **Transition line:** "In psychology, this thinking pattern is called [distortion name]. The good news? It can be reframed."
6. **CTA section:** "FounderTherapy is building a CBT-based mental fitness tool specifically for startup founders. You're on the early access list."
7. **Share buttons:** "Share your archetype" — Twitter/X share button with pre-filled text: "I'm a [Archetype Name] founder. Which founder archetype are you? [quiz URL]"

---

## The 5 Archetype Results

### 1. The Signal Amplifier
**Tagline:** You detect every risk — sometimes too loudly.
**Description:** You're highly attuned to signals in the startup environment. A slight dip in metrics, a competitor's move, a slow week — you notice it all. This sensitivity is a genuine strength: it makes you a vigilant founder who catches problems early. But under pressure, small signals get amplified into existential threats. A 5% churn increase becomes "the company is dying." A single investor rejection becomes "nobody will ever fund us."
**Under pressure:** You catastrophize. Worst-case scenarios feel like certainties.
**CBT distortion:** Catastrophizing / Future-tripping
**Reframe line:** "In psychology, this pattern is called catastrophizing — assuming the worst outcome is the most likely one. The good news? It's one of the most responsive patterns to reframing."

### 2. The Comparison Navigator
**Tagline:** You always know where you stand — relative to everyone else.
**Description:** You have an impressive awareness of the startup landscape. You track who's raising, who's shipping, who's growing. This market awareness is valuable — it keeps you informed and competitive. But under pressure, awareness turns into comparison. Every funding announcement feels like proof you're behind. Every success story makes your progress feel inadequate. You're not measuring yourself against your own milestones — you're measuring against a highlight reel.
**Under pressure:** You compare. Everyone else seems to be winning.
**CBT distortion:** Comparison bias / Selective evidence
**Reframe line:** "In psychology, this pattern is called comparison bias — evaluating yourself against selectively visible successes while ignoring the full picture. It's extremely common and very fixable."

### 3. The Responsibility Carrier
**Tagline:** You carry the weight so others don't have to.
**Description:** You feel deeply responsible for everyone who depends on your startup — your team, your investors, your customers. This sense of duty makes you a loyal, committed leader. But under pressure, responsibility becomes over-responsibility. Every setback feels like a personal failure. Layoffs feel like betrayals. You absorb blame for things outside your control because you believe the buck stops with you — for everything.
**Under pressure:** You internalize. Every problem is your fault.
**CBT distortion:** Personalization / Over-responsibility
**Reframe line:** "In psychology, this pattern is called personalization — taking excessive responsibility for outcomes influenced by many factors. It's the shadow side of strong leadership, and it can be rebalanced."

### 4. The Strategic Overthinker
**Tagline:** You see every angle — and get stuck between them.
**Description:** You think deeply about decisions. You consider second-order effects, map out scenarios, and weigh options carefully. This analytical depth is a real asset — it prevents rash decisions and produces thoughtful strategy. But under pressure, analysis becomes paralysis. You replay decisions endlessly. You research one more thing before committing. You rewrite the strategy instead of executing it. The loop feels productive, but it's actually a way to avoid the discomfort of uncertainty.
**Under pressure:** You loop. Thinking replaces doing.
**CBT distortion:** Emotional reasoning / Analysis paralysis
**Reframe line:** "In psychology, this pattern involves emotional reasoning — where the feeling that you haven't analyzed enough becomes a substitute for action. Recognizing the loop is the first step to breaking it."

### 5. The Relentless Builder
**Tagline:** When in doubt, you work harder.
**Description:** Your instinct under pressure is to push through. More hours, more output, more hustle. This resilience and work ethic are genuinely powerful — they've gotten you further than most people. But under pressure, "work harder" becomes the only response. You don't pause to ask whether you're working on the right thing. Rest feels like quitting. Stepping back feels like giving up. You mistake motion for progress and burnout for dedication.
**Under pressure:** You grind. Rest feels like failure.
**CBT distortion:** Control fallacy / Burnout loops
**Reframe line:** "In psychology, this pattern relates to the control fallacy — the belief that more effort always equals more control over outcomes. Sustainable performance requires strategic rest, not just relentless output."

---

## Technical Requirements

### Scoring Logic
- Track which archetype each answer maps to
- After 5 questions, tally the scores
- Display the archetype with the highest count
- On tie: display the archetype that was selected most recently (last question wins the tiebreak)

### Email Capture
- For MVP: simple form that POSTs to a webhook URL (configurable via environment variable `NEXT_PUBLIC_WEBHOOK_URL`)
- Store email + archetype result in the POST body: `{ email: string, archetype: string }`
- If no webhook is configured, just skip the email screen and show the result (for local testing)
- Later: integrate with ConvertKit or Beehiiv API

### Shareable Result Cards
- Generate an Open Graph image or card for each archetype result
- When sharing the quiz URL with a result param (e.g., `?result=signal-amplifier`), the OG tags should show that archetype's name and tagline
- Twitter/X share button: pre-filled tweet text + quiz URL

### SEO / Meta
- Title: "Which Founder Archetype Are You? | FounderTherapy"
- Description: "Startup pressure creates predictable thinking patterns. Take the 60-second quiz to discover your founder archetype."
- OG image: a generic quiz card (or archetype-specific if result param present)

### Mobile
- Must work flawlessly on mobile
- Quiz questions should be full-width cards
- Answer options should be large tap targets
- Progress bar visible at all times

### Analytics (Optional)
- Track quiz starts, completions, and email captures
- Can add Plausible or PostHog later via env variable

---

## File Structure (Suggested)
```
/app
  /page.tsx              — main quiz page
  /layout.tsx            — root layout with fonts, metadata
  /components
    /QuizIntro.tsx       — landing screen
    /QuizQuestion.tsx    — question screen (reusable)
    /EmailCapture.tsx    — email form screen
    /QuizResult.tsx      — result screen with share buttons
    /ProgressBar.tsx     — progress indicator
  /data
    /questions.ts        — quiz questions and answer mappings
    /archetypes.ts       — archetype definitions (name, tagline, description, distortion, reframe)
  /lib
    /scoring.ts          — scoring logic
/public
  /og-default.png        — default OG image
```

---

## Deployment
- Deploy to **Vercel** via `vercel deploy`
- Set environment variable: `NEXT_PUBLIC_WEBHOOK_URL` (for email capture)
- Custom domain: foundertherapy.co or similar (configure later)

---

## Claude Code Prompt
When you open Claude Code, paste this brief and say:

> "Build this quiz app according to the spec. Start with the Next.js project setup, then implement each screen in order. Deploy to Vercel when done."

Claude Code will handle the rest.
