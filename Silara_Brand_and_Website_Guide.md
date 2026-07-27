# Silara Marketing brand and website handover guide

## Brand position

**Silara Marketing supports Australian care providers with focused systems for responsible growth, stronger compliance, and more confident operations.** The primary audience is local NDIS, aged-care, disability-services, SIL and SDA, and allied-health organisations.

The website uses an **Institutional Care Capital** identity: private-equity-level restraint and credibility translated for a practical Australian care-technology portfolio. The central brand line is:

> Better systems for the people building better care.

## Visual identity

| Element | Specification | Role |
| --- | --- | --- |
| Parent brand | Silara Navy `#031B44`, Signal Teal `#159CB1`, Aqua `#20B1C2`, and Cloud `#F7FAFC` | Established directly from the supplied network-wordmark; balances institutional trust, care-sector clarity, and digital precision |
| Primary conversion accent | Signal Teal `#159CB1` | Calls to action, key numerals, active states, pathways, and evidence signals |
| Display type | Instrument Serif | Hero headlines, major editorial statements, and selected numerals |
| Operational type | Manrope | Navigation, body copy, product explanations, cards, controls, and workflow diagrams |
| Primary logo | Supplied Silara Marketing network-symbol wordmark | The primary brand asset across header, footer and document head; always shown in its white institutional seal treatment on dark surfaces |
| Primary motif | Silara Network diamond-node system | Connected care operations, traceable pathways, visibility, and responsible accountability |

The retired gold-led Silara Gate system is no longer used. The supplied network symbol now appears as a recurring structural device in hero, legal, lead and product experiences, with thin rules and operating diagrams carrying the same connected-system language. The full supplied wordmark is never recoloured, stretched, or separated from its network mark. On dark fields it sits in a white seal with deliberate breathing room so the original artwork remains legible.

## Product colour system

| Product | Primary accent | Product meaning |
| --- | --- | --- |
| APGP Referral Program | Aqua teal | Vacancy movement, access, and suitable matching |
| IncidentIQ | Controlled amber | Deadlines, escalation, and evidence continuity |
| NoteGuard | Cobalt | Documentation clarity, review, and coaching |
| CredsVault | Assurance green | Verification, readiness, and workforce control |
| ProviderPulse | Refined berry | Feedback, response ownership, and service recovery |

The APGP sales page deliberately reflects the live APGP website’s aqua-teal and deep-navy character, creating a consistent bridge to [apgpaccommodation.com.au](https://www.apgpaccommodation.com.au/). Product-specific accents complement—but do not replace—the Silara Navy-to-Teal parent system.

## Conversion model

The website does not publish product pricing. Each product is explained through the operational problem, focused workflow, responsible-use boundaries, practical outcomes, and an invitation to **schedule a call**. APGP is the only product with a direct external website link.

Every product page includes a tailored quiz-stage placeholder prepared for a future Wufoo embed. When the Wufoo URLs are available, replace the preview block in `client/src/components/QuizCTA.tsx` with the supplied Wufoo embed code. The general scheduling or enquiry embed belongs in `client/src/pages/LeadPage.tsx`.

Until those embeds are connected, the site uses `support@silaramarketing.com.au` as the working fallback. Public phone, office, legal-entity and address placeholders are intentionally withheld from customer-facing layouts until verified; add them only after confirmation.

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
| `/privacy` | Comprehensive B2B Privacy Policy covering website, lead, account and approved product information |
| `/terms` | Comprehensive B2B Terms of Service covering the portfolio and product-specific responsible-use boundaries |

## B2B legal-document framework

The website now includes a long-form **B2B Privacy Policy** and **B2B Terms of Service** drafted for Australian business customers and authorised users. The documents cover APGP, IncidentIQ, NoteGuard, CredsVault and ProviderPulse, while preserving the distinction between Silara's technology or marketing role and each care provider's responsibility for participant authority, service suitability, immediate safety, statutory reporting, clinical or professional judgement, worker verification, records, safeguarding and final decisions.

The drafting is structured around the Australian Privacy Principles, OAIC health-privacy and data-breach guidance, ACCC guidance on standard-form contracts and unfair terms, ACMA electronic-marketing rules, NDIS Commission incident-management guidance, and the current aged-care Quality Standards and protected-information framework.[1] [2] [3] [4] [5] [6] It preserves non-excludable Australian Consumer Law rights and avoids stating that use of a Silara product guarantees legal or regulatory compliance.

The legal pages are integrated into the footer, call-scheduling stage and every product's future Wufoo quiz stage. The form notices instruct prospects not to submit participant, resident, patient, incident, clinical, worker-screening or other sensitive care information through a general marketing form.

> **Publication status:** These documents are a professional drafting baseline, not legal advice or a representation that Silara is compliant with every applicable law. They must be reviewed by an Australian commercial and privacy lawyer after the fields below are confirmed and before they are accepted by customers or published as final terms.

| Required confirmation | Where it appears |
| --- | --- |
| Contracting legal entity, ABN, business address and telephone | Privacy Policy and Terms contact and party clauses |
| Governing Australian state or territory and mediation city | Terms dispute and governing-law clauses |
| Invoice period, renewal notice, month-to-month notice and refund settings | Terms commercial clauses |
| Liability cap, insurance position and any service-level commitments | Terms risk and Order Form framework |
| Production status and launch commitments for each unreleased product | Terms service-availability table and product schedules |
| Hosting countries or regions and current subprocessors | Privacy Policy overseas-disclosure section |
| Retention periods for enquiries, accounts, support, billing, product data, backups and security logs | Privacy Policy retention section |
| Privacy-complaint acknowledgement and response targets | Privacy Policy complaints section |
| Data-export window after termination | Terms exit-assistance section |
| Wufoo, scheduler, analytics and CRM suppliers actually used at launch | Privacy Policy third-party forms and service-provider sections |

For production customer contracting, the website Terms should be supplemented by an **Order Form** and, where relevant, a product schedule, privacy or data-processing schedule, security schedule, service-level schedule and APGP-specific provider or referral agreement. Any commercial terms supplied later should remain balanced and transparent, particularly where customers may fall within the Australian Consumer Law's small-business unfair-contract-term protections.[2]

## Pre-publication actions

Before publication, add the final telephone number and office location, provide the live Wufoo or scheduling embed URLs, confirm the desired LinkedIn destination, and complete legal review of the privacy, terms, cookie, security, and product responsible-use copy. Unreleased products are intentionally described as **in development** or **early access**, and the site does not claim regulatory approval, guaranteed compliance, customer outcomes, or security certifications that have not been verified.

## Legal references

[1]: https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-quick-reference "OAIC — Australian Privacy Principles quick reference"
[2]: https://www.accc.gov.au/business/selling-products-and-services/contracts "ACCC — Contracts and unfair contract terms"
[3]: https://www.acma.gov.au/avoid-sending-spam "ACMA — Avoid sending spam"
[4]: https://www.ndiscommission.gov.au/rules-and-standards/reportable-incidents-and-incident-management/incident-management "NDIS Quality and Safeguards Commission — Incident management"
[5]: https://www.agedcarequality.gov.au/providers/quality-standards "Aged Care Quality and Safety Commission — Quality Standards"
[6]: https://www.health.gov.au/resources/publications/guide-to-aged-care-law/chapter-7-information-management?language=en "Australian Government Department of Health, Disability and Ageing — Guide to aged care law: information management"
