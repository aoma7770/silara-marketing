// Design reminder: product-fit preparation reduces friction through clarity, privacy and visible human accountability; it never asks for sensitive care information.
import { useState, type CSSProperties } from "react";
import { ArrowRight, BrainCircuit, Clock3, LockKeyhole, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import SectionScene from "@/components/SectionScene";
import type { Product } from "@/data/site";

const productPrompt: Record<Product["key"], string> = {
  apgp: "What vacancy, timing, or referral-flow pressure is your team trying to address?",
  incidentiq: "Where do deadlines, evidence, escalation, or closure become difficult to control?",
  noteguard: "Where does note quality, coaching, or approval consistency create the most pressure?",
  credsvault: "Where is workforce readiness hardest to confirm or follow up?",
  providerpulse: "Where does feedback ownership or service recovery lose momentum?",
};

const quizScenes: Record<Product["key"], string> = {
  apgp: "/manus-storage/silara-sil-sda-ai-matching_d7cd46ff.jpg",
  incidentiq: "/manus-storage/silara-ai-human-oversight-workflow_fe5191c5.jpg",
  noteguard: "/manus-storage/silara-allied-health-ai-documentation_282f7040.jpg",
  credsvault: "/manus-storage/silara-aged-care-ai-assurance_04c2f1eb.jpg",
  providerpulse: "/manus-storage/silara-ndis-ai-pathways_b39c61cb.jpg",
};

export default function QuizCTA({ product }: { product: Product }) {
  const [activeStep, setActiveStep] = useState(0);

  if (product.key === "apgp") {
    return (
      <section className="quiz-section quiz-section--apgp section--scene scene--mist" id="apgp-pathway" style={{ "--product": product.accent, "--product-tint": product.tint, "--product-dark": product.dark } as CSSProperties}>
        <SectionScene src="/manus-storage/silara-apgp-supported-living_4bb84a46.jpg" position="78% center" />
        <div className="container quiz-layout">
          <div className="quiz-copy">
            <span className="eyebrow">Continue with APGP</span>
            <h2>See how the referral partnership works.</h2>
            <p>APGP’s live program is for SDA and SIL providers seeking a consistent referral pathway, full intake coordination and support through successful move-in.</p>
            <div className="quiz-meta"><span><ShieldCheck size={16} /> Register free</span><span><Clock3 size={16} /> Pay only after move-in</span></div>
          </div>
          <div className="wufoo-stage apgp-external-stage" aria-label="APGP referral partnership pathway">
            <div className="wufoo-stage__top"><span>Official APGP pathway</span><strong>Vacancy to move-in</strong></div>
            <ol className="apgp-external-stage__steps">
              {[["01", "Register free", "Access the provider dashboard and live participant enquiries."], ["02", "Share vacancies or browse", "Match current accommodation availability to suitable enquiries."], ["03", "APGP coordinates intake", "Qualification, documentation, inspection and handover are managed through the pathway."], ["04", "Pay after move-in", "The success-based placement fee is triggered only after completed intake and move-in."]].map(([index, title, copy]) => <li key={title}><span>{index}</span><div><strong>{title}</strong><p>{copy}</p></div></li>)}
            </ol>
            <div className="wufoo-stage__footer apgp-external-stage__footer"><small>You are continuing to the official APGP website for current pathway details and provider registration.</small><div><a href={product.externalUrl} className="button button--dark">See how it works <ArrowRight size={16} /></a><a href={product.registrationUrl} className="text-link">Register free <ArrowRight size={15} /></a></div></div>
          </div>
        </div>
      </section>
    );
  }

  const rows = [
    { label: "Organisation context", question: "What best describes your organisation?", explanation: "This helps us understand the sector and operational setting before a conversation." },
    { label: "Workflow pressure", question: productPrompt[product.key], explanation: "High-level workflow context only—please do not include names, clinical notes, incidents, or other sensitive information." },
    { label: "Useful next step", question: "What would a useful next step look like for your team?", explanation: "Your answer helps us prepare a practical discussion rather than make an automated recommendation." },
  ];

  return (
    <section className="quiz-section quiz-section--ai section--scene scene--mist" id="product-fit" style={{ "--product": product.accent, "--product-tint": product.tint } as CSSProperties}>
      <SectionScene src={quizScenes[product.key]} position="78% center" />
      <div className="container quiz-layout">
        <div className="quiz-copy">
          <span className="eyebrow">Product fit check</span>
          <h2>{product.quizTitle}</h2>
          <p>{product.quizIntro}</p>
          <div className="quiz-meta"><span><Clock3 size={16} /> About 2 minutes</span><span><LockKeyhole size={16} /> No sensitive information</span></div>
          <div className="quiz-ai-note"><BrainCircuit size={18} /><div><span>Preparation, not automation</span><strong>High-level answers can help us frame a more useful human conversation.</strong></div></div>
        </div>
        <div className="wufoo-stage wufoo-stage--interactive" aria-label={`${product.name} quiz preview`}>
          <div className="wufoo-stage__top"><span>Wufoo-ready preparation sequence</span><strong>{product.shortName}</strong></div>
          <div className="quiz-preview-steps" role="tablist" aria-label={`${product.shortName} product fit questions`}>
            {rows.map((row, index) => <button key={row.label} type="button" role="tab" aria-selected={activeStep === index} className={activeStep === index ? "quiz-preview-row quiz-preview-row--active" : "quiz-preview-row"} onClick={() => setActiveStep(index)}><span>0{index + 1}</span><div><small>{row.label}</small><p>{row.question}</p></div><i /></button>)}
          </div>
          <div className="quiz-preview-context" role="tabpanel"><ShieldCheck size={17} /><div><span>Why we ask</span><p>{rows[activeStep].explanation}</p></div></div>
          <div className="wufoo-stage__footer">
            <small>Embed destination ready when your Wufoo URL is supplied. Future submissions will be subject to our <Link href="/privacy-policy">Privacy Policy</Link> and <Link href="/terms-of-service">B2B Terms</Link>.</small>
            <Link href={`/book-demo?product=${product.key}`} className="button button--dark">Schedule a call <ArrowRight size={16} /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
