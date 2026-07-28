// Design reminder: discovery is consultative, private and human-led; AI may help structure the next conversation but never substitutes for context or judgement.
import { ArrowRight, BrainCircuit, Check, LockKeyhole, Mail, ShieldCheck } from "lucide-react";
import { useMemo } from "react";
import { Link, useLocation } from "wouter";
import PageShell from "@/components/PageShell";
import SectionScene from "@/components/SectionScene";
import { productList, supportEmail } from "@/data/site";

const discoveryImage = "/manus-storage/silara-ai-care-operations-hero_706a1baf.jpg";

export default function LeadPage({ contactOnly = false }: { contactOnly?: boolean }) {
  const [location] = useLocation();
  const selected = useMemo(() => productList.find((product) => location.includes(`product=${product.key}`)), [location]);
  const contextLabel = selected ? selected.shortName : "your priority workflow";
  const heading = contactOnly ? "Start with the operational pressure you need to resolve." : selected ? `Let’s talk about ${selected.name}.` : "Let’s find the most useful next step.";

  return (
    <PageShell>
      <section className="lead-page lead-page--ai">
        <SectionScene src={discoveryImage} tone="deep" position="62% center" className="lead-page__visual" />
        <div className="container lead-page__grid">
          <div className="lead-page__copy">
            <span className="eyebrow eyebrow--light">{contactOnly ? "Contact Silara" : "Schedule a discovery call"}</span>
            <h1>{heading}</h1>
            <p>Share a little about your organisation and the workflow creating pressure. We will use that context to prepare a focused, human-led conversation—not a generic sales script.</p>
            <div className="lead-expectations">
              <div><Check />A practical conversation about {contextLabel}</div>
              <div><Check />No public pricing and no automated recommendation</div>
              <div><Check />No participant, incident, clinical, or worker-sensitive information</div>
            </div>
            <div className="lead-page__email-row"><a href={`mailto:${supportEmail}?subject=Silara%20Marketing%20enquiry${selected ? `%20-%20${selected.name}` : ""}`} className="button button--gold"><Mail size={17} /> Email {supportEmail}</a><span>Prefer email? Reach out directly.</span></div>
          </div>

          <div className="lead-page__right">
            <div className="lead-ai-brief"><div><BrainCircuit size={18} /><span>Discovery protocol</span></div><strong>Context can help us frame the right questions before we speak.</strong><p>Any AI-supported preparation is limited to high-level operational context you choose to provide. The discussion, advice, and next steps remain human-led.</p></div>
            <div className="lead-embed">
              <div className="lead-embed__header"><span>Embed ready</span><strong>{contactOnly ? "Contact form" : "Call scheduling / Wufoo"}</strong></div>
              <div className="lead-embed__field"><label>Organisation type</label><span>Choose your provider sector</span></div>
              <div className="lead-embed__field"><label>Primary pressure</label><span>Tell us what needs attention</span></div>
              <div className="lead-embed__field"><label>Preferred next step</label><span>Select a suitable conversation time</span></div>
              <div className="lead-embed__placeholder"><ShieldCheck /><div><strong>Scheduling connection ready</strong><p>Your live form or booking experience will appear here once the embed URL is supplied.</p></div></div>
              <p className="lead-embed__legal"><LockKeyhole size={14} /> When connected, submissions will be handled under our <Link href="/privacy-policy">Privacy Policy</Link> and <Link href="/terms-of-service">B2B Terms</Link>. Do not include participant, resident, patient, incident, clinical, worker-screening or other sensitive information.</p>
              <button type="button" className="button button--dark" disabled>Embed connection required <ArrowRight size={16} /></button>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
