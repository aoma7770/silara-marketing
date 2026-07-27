// Design reminder: Institutional Care Capital — disciplined portfolio structure, Australian care-provider support, and one dominant lead action per page.
export type Product = {
  key: "apgp" | "incidentiq" | "noteguard" | "credsvault" | "providerpulse";
  index: string;
  name: string;
  shortName: string;
  slug: string;
  status: string;
  category: string;
  headline: string;
  summary: string;
  audience: string;
  accent: string;
  tint: string;
  dark: string;
  quizTitle: string;
  quizIntro: string;
  problems: string[];
  features: { title: string; copy: string }[];
  steps: { title: string; copy: string }[];
  outcomes: string[];
  responsibleUse: string;
  externalUrl?: string;
};

export const products: Record<Product["key"], Product> = {
  apgp: {
    key: "apgp",
    index: "01",
    name: "APGP Referral Program",
    shortName: "APGP",
    slug: "/apgp-referrals",
    status: "Available now",
    category: "Occupancy growth",
    headline: "Fill SIL and SDA vacancies with a more active referral pathway.",
    summary:
      "APGP connects accommodation providers with suitable participant demand through a structured, provider-funded referral model designed to protect participant choice.",
    audience: "SIL and SDA providers managing current or upcoming vacancies",
    accent: "oklch(0.62 0.13 195)",
    tint: "oklch(0.95 0.035 195)",
    dark: "oklch(0.22 0.07 245)",
    quizTitle: "How ready is your vacancy for active matching?",
    quizIntro:
      "A short vacancy-readiness check can help identify what your team should prepare before an APGP conversation.",
    problems: [
      "High-quality homes can remain vacant while referral activity stays inconsistent.",
      "Generic lead channels create enquiry volume without enough suitability context.",
      "Provider teams lose time coordinating outreach, intake, and follow-up across disconnected tools.",
    ],
    features: [
      {
        title: "Vacancy intelligence",
        copy: "Present the support model, location, property features, availability, and suitability criteria in a structured format.",
      },
      {
        title: "Active matching",
        copy: "Move beyond passive listing exposure with a pathway designed around suitable participant demand and provider capacity.",
      },
      {
        title: "Provider-aligned process",
        copy: "Keep commercial responsibility with the provider while preserving participant choice and suitability assessment.",
      },
    ],
    steps: [
      { title: "Share the vacancy", copy: "Provide the essential property and support details without submitting sensitive participant information." },
      { title: "Review fit", copy: "APGP reviews the vacancy context and discusses how active matching may support your occupancy goals." },
      { title: "Assess suitability", copy: "Your team retains responsibility for participant suitability, service fit, and final agreements." },
      { title: "Move forward responsibly", copy: "Progress suitable opportunities under APGP’s current written provider terms." },
    ],
    outcomes: ["Clearer vacancy presentation", "More structured referral follow-up", "Provider-paid commercial alignment", "Participant choice protected"],
    responsibleUse:
      "APGP supports referral and matching activity. Providers remain responsible for suitability assessment, service agreements, safeguarding, consent, and compliance with their obligations.",
    externalUrl: "https://www.apgpaccommodation.com.au/",
  },
  incidentiq: {
    key: "incidentiq",
    index: "02",
    name: "IncidentIQ",
    shortName: "IncidentIQ",
    slug: "/incidentiq",
    status: "Early access",
    category: "Incident workflow",
    headline: "Bring every incident deadline into one controlled workflow.",
    summary:
      "IncidentIQ is being designed to help Australian care providers organise classification, deadlines, evidence, escalation, follow-up, and approval without relying on scattered spreadsheets and inboxes.",
    audience: "Compliance, quality, safeguarding, and operations teams",
    accent: "oklch(0.68 0.12 62)",
    tint: "oklch(0.95 0.022 72)",
    dark: "oklch(0.23 0.055 248)",
    quizTitle: "Where is your incident workflow most exposed?",
    quizIntro:
      "A short workflow check can highlight pressure across deadlines, evidence, escalation, and closure.",
    problems: [
      "Critical deadlines are tracked manually across calendars, email, and spreadsheets.",
      "Evidence, approvals, and follow-up actions become separated from the original incident record.",
      "Leaders struggle to see overdue actions, repeated themes, and closure quality across teams.",
    ],
    features: [
      { title: "Deadline logic", copy: "Structure pathway prompts, due dates, ownership, and escalation around the incident context." },
      { title: "Evidence-led workflow", copy: "Keep tasks, evidence checklists, corrective actions, and approvals connected to the record." },
      { title: "Management visibility", copy: "Surface open actions, escalation paths, audit history, and operational trends in one view." },
    ],
    steps: [
      { title: "Capture", copy: "Create a structured incident record with clear ownership and immediate-risk prompts." },
      { title: "Classify", copy: "Support authorised staff with configurable pathway and severity prompts." },
      { title: "Act", copy: "Coordinate deadlines, evidence, notifications, follow-up, and corrective actions." },
      { title: "Approve", copy: "Keep final judgement and submission responsibility with authorised people." },
    ],
    outcomes: ["Fewer fragmented handovers", "Clearer ownership and escalation", "Stronger evidence continuity", "More visible overdue work"],
    responsibleUse:
      "IncidentIQ is a workflow and decision-support concept. It will not replace legal advice, regulatory interpretation, safeguarding action, emergency response, or authorised human approval.",
  },
  noteguard: {
    key: "noteguard",
    index: "03",
    name: "NoteGuard",
    shortName: "NoteGuard",
    slug: "/noteguard",
    status: "In development",
    category: "Documentation quality",
    headline: "Help every progress note become clearer, more objective, and easier to review.",
    summary:
      "NoteGuard is being designed to check draft progress notes against configurable quality rules before final approval, while preserving the original record and human judgement.",
    audience: "Quality leaders, clinical leads, service managers, and support teams",
    accent: "oklch(0.57 0.16 265)",
    tint: "oklch(0.95 0.025 265)",
    dark: "oklch(0.27 0.09 265)",
    quizTitle: "What is inconsistent documentation costing your team?",
    quizIntro:
      "Review your current note-quality process across objectivity, completeness, coaching, and management visibility.",
    problems: [
      "Progress notes vary widely between workers, locations, and service teams.",
      "Managers spend hours correcting preventable quality issues after records are submitted.",
      "Generic writing tools do not reflect provider-specific standards or care-sector judgement.",
    ],
    features: [
      { title: "Configurable checks", copy: "Review objectivity, completeness, service linkage, goals, risk indicators, and internal requirements." },
      { title: "Explainable guidance", copy: "Show why a passage may need attention and allow authorised staff to accept, revise, or reject suggestions." },
      { title: "Quality patterns", copy: "Identify recurring coaching needs by team, location, or category without punitive ranking." },
    ],
    steps: [
      { title: "Draft", copy: "A worker or manager submits a draft note through the approved workflow." },
      { title: "Review", copy: "NoteGuard checks the draft against configured organisational standards." },
      { title: "Improve", copy: "The user reviews highlighted passages and reasoned suggestions." },
      { title: "Approve", copy: "An authorised person remains accountable for the final record." },
    ],
    outcomes: ["More consistent note standards", "Earlier quality intervention", "More focused coaching", "Human approval preserved"],
    responsibleUse:
      "NoteGuard will support documentation review, not make clinical decisions or silently alter records. Final content, professional judgement, and approval remain with authorised users.",
  },
  credsvault: {
    key: "credsvault",
    index: "04",
    name: "CredsVault",
    shortName: "CredsVault",
    slug: "/credsvault",
    status: "In development",
    category: "Workforce assurance",
    headline: "Know who is ready, what is expiring, and where action is needed.",
    summary:
      "CredsVault is being designed as a live workforce compliance matrix for screening, registrations, first aid, training, licences, and provider-specific requirements.",
    audience: "HR, workforce, compliance, rostering, and multi-site operations teams",
    accent: "oklch(0.54 0.11 150)",
    tint: "oklch(0.95 0.03 150)",
    dark: "oklch(0.25 0.06 150)",
    quizTitle: "How visible is your workforce readiness today?",
    quizIntro:
      "A short credential-risk check can help identify gaps in collection, verification, expiry, and allocation controls.",
    problems: [
      "Credential evidence sits across inboxes, shared drives, HR systems, and local spreadsheets.",
      "Expiry reminders depend on manual calendars and individual follow-up.",
      "Operations teams cannot quickly confirm whether a worker meets role and location requirements.",
    ],
    features: [
      { title: "Live credential matrix", copy: "View required, pending, verified, rejected, and expired records across people and locations." },
      { title: "Escalating reminders", copy: "Coordinate configurable notices, worker requests, manager tasks, and exception ownership." },
      { title: "Allocation confidence", copy: "Flag when a worker is not cleared for a role or service requirement before assignment." },
    ],
    steps: [
      { title: "Define", copy: "Map credential rules to roles, services, locations, and organisational policies." },
      { title: "Collect", copy: "Request and organise evidence through a controlled workflow." },
      { title: "Verify", copy: "Record status, verification, expiry, and named ownership." },
      { title: "Monitor", copy: "See exceptions early and coordinate action before disruption occurs." },
    ],
    outcomes: ["Clearer workforce status", "Earlier expiry action", "Named exception ownership", "Stronger evidence history"],
    responsibleUse:
      "CredsVault will support workforce evidence and expiry workflows. Providers remain responsible for verification standards, employment decisions, worker screening obligations, and allocation approvals.",
  },
  providerpulse: {
    key: "providerpulse",
    index: "05",
    name: "ProviderPulse",
    shortName: "ProviderPulse",
    slug: "/providerpulse",
    status: "In development",
    category: "Reputation and feedback",
    headline: "Turn feedback into better service—and better service into stronger trust.",
    summary:
      "ProviderPulse is being designed to connect ethical review requests, private service recovery, response workflows, and operational insight without suppressing legitimate feedback.",
    audience: "Founders, marketing teams, quality leaders, and multi-location operators",
    accent: "oklch(0.58 0.12 335)",
    tint: "oklch(0.95 0.025 335)",
    dark: "oklch(0.28 0.07 335)",
    quizTitle: "How well does feedback travel through your organisation?",
    quizIntro:
      "Review how your team requests, monitors, responds to, and learns from public and private feedback.",
    problems: [
      "Review requests happen inconsistently and depend on individual staff follow-up.",
      "Negative feedback reaches public channels before service-recovery teams can respond appropriately.",
      "Leaders see ratings, but not the recurring operational themes behind them.",
    ],
    features: [
      { title: "Milestone-based requests", copy: "Coordinate compliant feedback requests at appropriate service moments without review gating." },
      { title: "Response workflow", copy: "Route review alerts, approved drafts, privacy reminders, and escalation to the right owner." },
      { title: "Operational insight", copy: "Track themes, locations, response time, reputation patterns, and service-recovery signals." },
    ],
    steps: [
      { title: "Listen", copy: "Collect service feedback through approved public and private pathways." },
      { title: "Route", copy: "Direct feedback to the appropriate response or service-recovery owner." },
      { title: "Respond", copy: "Support timely, privacy-aware, human-approved communication." },
      { title: "Improve", copy: "Turn recurring themes into operational action and learning." },
    ],
    outcomes: ["More consistent feedback follow-up", "Faster response ownership", "Clearer service themes", "Ethical review practices"],
    responsibleUse:
      "ProviderPulse will not encourage review gating, suppression, or misleading invitations. Public responses and service-recovery decisions remain subject to human approval and privacy obligations.",
  },
};

export const productList = Object.values(products);

export const supportEmail = "support@silaramarketing.com.au";
