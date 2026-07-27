// Design reminder: each product owns a memorable accent while Silara's navy-to-teal network identity, ledger structure, AI evidence and conversion pathway remain constant.
import { ArrowRight, ArrowUpRight, BrainCircuit, Check, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import type { CSSProperties } from "react";
import PageShell from "@/components/PageShell";
import QuizCTA from "@/components/QuizCTA";
import ScrollReveal from "@/components/ScrollReveal";
import type { Product } from "@/data/site";

const apgpImage = "/manus-storage/silara-apgp-supported-living_4bb84a46.jpg";
const productImage = "/manus-storage/silara-portfolio-interface_0ed7b249.jpg";

const aiProof: Record<Product["key"], { eyebrow: string; title: string; copy: string; image: string; alt: string; signals: string[] }> = {
  apgp: {
    eyebrow: "AI-supported preparation",
    title: "Make the vacancy brief easier to act on.",
    copy: "Silara can use AI-assisted structure to help teams organise provider-supplied vacancy information and surface follow-up prompts. It does not make matching or suitability decisions.",
    image: "/manus-storage/silara-sil-sda-ai-matching_d7cd46ff.jpg",
    alt: "Australian SIL and SDA provider team discussing a supported-living vacancy pathway",
    signals: ["Structured vacancy context", "Visible follow-up prompts", "Provider-led suitability"],
  },
  incidentiq: {
    eyebrow: "AI-supported workflow intelligence",
    title: "Surface the next controlled action—not an automated judgement.",
    copy: "IncidentIQ is being designed to make evidence gaps, due dates and escalation pathways easier for authorised people to see and organise. Regulatory interpretation and approval remain human responsibilities.",
    image: "/manus-storage/silara-ai-human-oversight-workflow_fe5191c5.jpg",
    alt: "Care operations leaders reviewing an accountable AI-supported workflow",
    signals: ["Priority signals", "Evidence continuity", "Human approval gates"],
  },
  noteguard: {
    eyebrow: "AI-supported documentation review",
    title: "Turn repeatable note-quality patterns into useful coaching cues.",
    copy: "NoteGuard is designed to flag configurable quality patterns and prepare explainable suggestions for review. It does not silently change records or replace professional judgement.",
    image: "/manus-storage/silara-allied-health-ai-documentation_282f7040.jpg",
    alt: "Allied-health professional reviewing documentation with careful human oversight",
    signals: ["Configurable standards", "Explainable prompts", "Authorised sign-off"],
  },
  credsvault: {
    eyebrow: "AI-supported workforce visibility",
    title: "Focus attention where readiness needs a closer look.",
    copy: "CredsVault can help organise workforce evidence and draw attention to exception patterns. Verification standards, employment decisions and allocation approvals remain with the provider.",
    image: "/manus-storage/silara-aged-care-ai-assurance_04c2f1eb.jpg",
    alt: "Aged-care operations team reviewing workforce assurance information",
    signals: ["Exception-led review", "Clear ownership", "Provider verification"],
  },
  providerpulse: {
    eyebrow: "AI-supported service insight",
    title: "See recurring feedback themes sooner, then respond with care.",
    copy: "ProviderPulse is designed to assist in grouping feedback patterns and preparing response workflows. Every public response and service-recovery action remains human-led and privacy-aware.",
    image: "/manus-storage/silara-ndis-ai-pathways_b39c61cb.jpg",
    alt: "Australian care provider team reviewing connected service pathways",
    signals: ["Theme visibility", "Owned response routes", "Human-approved communication"],
  },
};

const narratives: Record<string, { pressure: string; solution: string; process: string; outcome: string }> = {
  apgp: {
    pressure: "Vacancies do not move through passive exposure alone.",
    solution: "Create a clearer route from vacancy to suitable opportunity.",
    process: "Move from provider brief to an accountable referral decision.",
    outcome: "A more active pathway, measured by movement and suitability.",
  },
  incidentiq: {
    pressure: "Incident risk grows at the handoff between people, dates, and evidence.",
    solution: "Make every deadline, escalation, and evidence trail visible.",
    process: "Turn one report into controlled actions and documented closure.",
    outcome: "Deadline control that can be seen, explained, and improved.",
  },
  noteguard: {
    pressure: "Documentation gaps are often discovered after the moment to coach.",
    solution: "Bring quality review closer to the point of documentation.",
    process: "Move from draft note to supported review and human approval.",
    outcome: "Clearer records and more useful coaching signals for the team.",
  },
  credsvault: {
    pressure: "Workforce readiness becomes uncertain when evidence lives everywhere.",
    solution: "Turn credential evidence into a visible readiness position.",
    process: "Capture, verify, monitor, and resolve before allocation.",
    outcome: "A workforce view built around exceptions, ownership, and readiness.",
  },
  providerpulse: {
    pressure: "Feedback loses value when ownership and response disappear into inboxes.",
    solution: "Convert every signal into an owned service-recovery pathway.",
    process: "Listen, assign, respond, recover, and learn from the pattern.",
    outcome: "A more visible response culture without suppressing honest feedback.",
  },
};

function OperatingDiagram({ product }: { product: Product }) {
  if (product.key === "apgp") {
    return <div className="operating-diagram operating-diagram--apgp" aria-label="APGP referral pathway diagram"><div className="diagram-title"><span>Operating pathway</span><strong>Vacancy → suitable opportunity</strong></div><div className="pathway-flow">{["Vacancy brief", "Suitability gate", "Referral pathway", "Provider decision"].map((label, index) => <div key={label}><span>0{index + 1}</span><strong>{label}</strong>{index < 3 && <i />}</div>)}</div></div>;
  }
  if (product.key === "incidentiq") {
    return <div className="operating-diagram operating-diagram--incident" aria-label="IncidentIQ deadline and evidence control diagram"><div className="diagram-title"><span>Control ledger</span><strong>Deadline and evidence continuity</strong></div><div className="deadline-ledger">{[["Initial review", "Due today", "Owner assigned"], ["External notification", "Due 14:30", "Evidence linked"], ["Corrective action", "Due 3 days", "Escalation active"]].map(([task, due, state], index) => <div key={task}><span>0{index + 1}</span><strong>{task}</strong><time>{due}</time><em>{state}</em></div>)}</div></div>;
  }
  if (product.key === "noteguard") {
    return <div className="operating-diagram operating-diagram--notes" aria-label="NoteGuard documentation review diagram"><div className="diagram-title"><span>Review surface</span><strong>Documentation quality before approval</strong></div><div className="note-review"><div className="note-sheet"><i /><i /><i className="flagged" /><i /><i /></div><div className="coach-panel"><span>Quality signal</span><strong>Clarify the observed outcome</strong><p>Coach the pattern. Keep approval human.</p></div></div></div>;
  }
  if (product.key === "credsvault") {
    return <div className="operating-diagram operating-diagram--credentials" aria-label="CredsVault workforce readiness matrix"><div className="diagram-title"><span>Readiness matrix</span><strong>Exceptions before allocation</strong></div><div className="credential-matrix">{[["Worker A", "Ready", "4 verified"], ["Worker B", "Review", "1 expiring"], ["Worker C", "Hold", "2 missing"]].map(([worker, state, detail]) => <div key={worker}><strong>{worker}</strong><span data-state={state}>{state}</span><em>{detail}</em></div>)}</div></div>;
  }
  return <div className="operating-diagram operating-diagram--pulse" aria-label="ProviderPulse service recovery loop"><div className="diagram-title"><span>Response loop</span><strong>Signal to service recovery</strong></div><div className="pulse-loop">{["Listen", "Assign", "Respond", "Recover"].map((label, index) => <div key={label}><span>0{index + 1}</span><strong>{label}</strong></div>)}</div></div>;
}

export default function ProductPage({ product }: { product: Product }) {
  const style = { "--product": product.accent, "--product-tint": product.tint, "--product-dark": product.dark } as CSSProperties;
  const image = product.key === "apgp" ? apgpImage : productImage;
  const narrative = narratives[product.key];
  const proof = aiProof[product.key];

  return (
    <PageShell>
      <div className={`product-page product-page--${product.key}`} style={style}>
        <section className="product-hero">
          <div className="product-hero__wash" />
          <div className="container product-hero__layout">
            <div className="product-hero__copy">
              <div className="product-kicker"><span>{product.index}</span><strong>{product.category}</strong><i>{product.status}</i></div>
              <h1>{product.headline}</h1>
              <p>{product.summary}</p>
              <div className="hero-actions">
                <Link href={`/book-demo?product=${product.key}`} className="button button--gold">Schedule a call <ArrowRight size={17} /></Link>
                <a href="#how-it-works" className="button button--outline-dark">See how it works</a>
              </div>
              <div className="product-audience"><span>Best suited to</span><strong>{product.audience}</strong></div>
            </div>
            <div className="product-hero__media">
              <img src={image} alt={product.key === "apgp" ? "Accessible Australian supported living environment" : `${product.name} conceptual workflow interface`} />
              <div className="product-hero__media-label"><span>{product.shortName}</span><small>{product.key === "apgp" ? "Referral pathway" : "Product concept — interface may change"}</small></div>
            </div>
          </div>
        </section>

        <section className="section product-problem">
          <div className="container editorial-grid">
            <div className="section-rail"><span className="chapter-number">01</span><span>The pressure</span></div>
            <div>
              <div className="section-heading section-heading--wide">
                <span className="eyebrow">The problem behind the product</span>
                <h2>{narrative.pressure}</h2>
              </div>
              <div className="product-problem__grid">
                {product.problems.map((problem, index) => <ScrollReveal delay={index * 0.06} key={problem}><span>0{index + 1}</span><p>{problem}</p></ScrollReveal>)}
              </div>
            </div>
          </div>
        </section>

        <section className="section product-features">
          <div className="container">
            <div className="product-section-heading">
              <div className="section-rail"><span className="chapter-number">02</span><span>The solution</span></div>
              <div className="section-heading"><span className="eyebrow">Designed around the actual workflow</span><h2>{narrative.solution}</h2></div>
            </div>
            <OperatingDiagram product={product} />
            <div className="feature-stack">
              {product.features.map((feature, index) => (
                <ScrollReveal className="feature-row" key={feature.title}>
                  <span className="feature-row__number">0{index + 1}</span>
                  <div className="feature-row__visual"><div><i /><i /><i /></div><span>{product.shortName}</span></div>
                  <div><h3>{feature.title}</h3><p>{feature.copy}</p></div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section product-process" id="how-it-works">
          <div className="container editorial-grid">
            <div className="section-rail section-rail--light"><span className="chapter-number">03</span><span>How it works</span></div>
            <div>
              <div className="section-heading section-heading--light"><span className="eyebrow eyebrow--light">A controlled path forward</span><h2>{narrative.process}</h2></div>
              <div className="process-grid">
                {product.steps.map((step, index) => <div key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.copy}</p></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="section product-ai-proof">
          <div className="container product-ai-proof__grid">
            <div className="product-ai-proof__media"><img src={proof.image} alt={proof.alt} /><div className="product-ai-proof__media-label"><BrainCircuit size={16} /><span>Responsible AI · human accountable</span></div></div>
            <div className="product-ai-proof__copy">
              <span className="eyebrow">{proof.eyebrow}</span>
              <h2>{proof.title}</h2>
              <p>{proof.copy}</p>
              <div className="product-ai-proof__signals">{proof.signals.map((signal, index) => <div key={signal}><span>0{index + 1}</span><strong>{signal}</strong></div>)}</div>
              <Link href={`/book-demo?product=${product.key}`} className="text-link">See what an assisted workflow could support <ArrowRight size={15} /></Link>
            </div>
          </div>
        </section>

        <section className="section product-outcomes">
          <div className="container product-outcomes__grid">
            <div className="section-heading"><span className="eyebrow">What your team is working towards</span><h2>{narrative.outcome}</h2></div>
            <div className="outcome-list">
              {product.outcomes.map((outcome) => <div key={outcome}><span><Check /></span><strong>{outcome}</strong></div>)}
            </div>
          </div>
          {product.externalUrl && (
            <div className="container apgp-bridge">
              <div><span className="eyebrow">Continue to the official program</span><h3>Explore APGP’s live provider experience.</h3><p>View the current program details, registration pathway, and provider resources on the official APGP website.</p></div>
              <a href={product.externalUrl} target="_blank" rel="noreferrer" className="button button--product">Visit the APGP website <ArrowUpRight size={17} /></a>
            </div>
          )}
        </section>

        <QuizCTA product={product} />

        <section className="responsible-use">
          <div className="container responsible-use__inner"><ShieldCheck /><div><strong>Responsible-use statement</strong><p>{product.responsibleUse}</p></div></div>
        </section>
      </div>
    </PageShell>
  );
}
