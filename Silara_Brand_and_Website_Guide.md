# Silara Marketing brand and website handover guide

## Brand position

**Silara Marketing supports Australian care providers with focused systems for responsible growth, stronger compliance, and more confident operations.** The primary audience is local NDIS, aged-care, disability-services, SIL and SDA, and allied-health organisations.

The website uses an **Institutional Care Capital** identity: private-equity-level restraint and credibility translated for a practical Australian care-technology portfolio. The central brand line is:

> Better systems for the people building better care.

## Visual identity

| Element | Specification | Role |
| --- | --- | --- |
| Parent brand | Midnight Teal and Soft Pearl | Trust, stability, and readable institutional structure |
| Signature accent | Silara Gold `#D6A84B` | Logo, primary calls to action, key numerals, and thin evidence rules |
| Display type | Instrument Serif | Hero headlines, major editorial statements, and selected numerals |
| Operational type | Manrope | Navigation, body copy, product explanations, cards, controls, and workflow diagrams |
| Primary motif | Silara Gate | Access, structure, upward movement, and accountable pathways |

Silara Gold is intentionally restrained. It is not used as a large decorative background field, preserving its role as the portfolio’s recognition and conversion signal.

## Product colour system

| Product | Primary accent | Product meaning |
| --- | --- | --- |
| APGP Referral Program | Aqua teal | Vacancy movement, access, and suitable matching |
| IncidentIQ | Controlled amber | Deadlines, escalation, and evidence continuity |
| NoteGuard | Cobalt | Documentation clarity, review, and coaching |
| CredsVault | Assurance green | Verification, readiness, and workforce control |
| ProviderPulse | Refined berry | Feedback, response ownership, and service recovery |

The APGP sales page deliberately reflects the live APGP website’s aqua-teal and deep-navy character, creating a consistent bridge to [apgpaccommodation.com.au](https://www.apgpaccommodation.com.au/).

## Conversion model

The website does not publish product pricing. Each product is explained through the operational problem, focused workflow, responsible-use boundaries, practical outcomes, and an invitation to **schedule a call**. APGP is the only product with a direct external website link.

Every product page includes a tailored quiz-stage placeholder prepared for a future Wufoo embed. When the Wufoo URLs are available, replace the preview block in `client/src/components/QuizCTA.tsx` with the supplied Wufoo embed code. The general scheduling or enquiry embed belongs in `client/src/pages/LeadPage.tsx`.

Until those embeds are connected, the site uses `support@silaramarketing.com.au` as the working fallback. The telephone number and office location remain clearly marked placeholders in `client/src/data/site.ts` and should be updated before publication.

## Key routes

| Route | Purpose |
| --- | --- |
| `/` | Lead-focused parent-brand homepage |
| `/solutions` | Complete product portfolio |
| `/apgp-referrals` | APGP sales page and official APGP link |
| `/incidentiq` | IncidentIQ sales page |
| `/noteguard` | NoteGuard sales page |
| `/creds-vault` | CredsVault sales page |
| `/provider-pulse` | ProviderPulse sales page |
| `/about` | Mission, vision, company story, values, and operating principles |
| `/who-we-help` | Australian care-provider audience overview |
| `/book-demo` | Call-scheduling and Wufoo-ready lead stage |
| `/contact` | Contact-focused lead stage |

## Pre-publication actions

Before publication, add the final telephone number and office location, provide the live Wufoo or scheduling embed URLs, confirm the desired LinkedIn destination, and complete legal review of the privacy, terms, cookie, security, and product responsible-use copy. Unreleased products are intentionally described as **in development** or **early access**, and the site does not claim regulatory approval, guaranteed compliance, customer outcomes, or security certifications that have not been verified.
