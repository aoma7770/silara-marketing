// Design reminder: lead capture should feel consultative, transparent, and low-pressure while keeping the next action unmistakable.
import { ArrowRight, Check, Mail, ShieldCheck } from "lucide-react";
import { useMemo } from "react";
import { useLocation } from "wouter";
import PageShell from "@/components/PageShell";
import { productList, supportEmail } from "@/data/site";

export default function LeadPage({ contactOnly = false }: { contactOnly?: boolean }) {
  const [location] = useLocation();
  const selected = useMemo(() => productList.find((p) => location.includes(`product=${p.key}`)), [location]);
  return (
    <PageShell>
      <section className="lead-page">
        <div className="container lead-page__grid">
          <div className="lead-page__copy">
            <span className="eyebrow eyebrow--light">{contactOnly ? "Contact Silara" : "Schedule a discovery call"}</span>
            <h1>{selected ? `Let’s talk about ${selected.name}.` : "Let’s find the most useful next step."}</h1>
            <p>Share a little about your organisation and the pressure you are trying to solve. This page is prepared for your scheduling or Wufoo embed; until it is connected, email Silara directly.</p>
            <div className="lead-expectations">
              <div><Check />A focused conversation about your workflow</div>
              <div><Check />No public pricing or generic sales script</div>
              <div><Check />No sensitive participant, incident, or worker information</div>
            </div>
            <a href={`mailto:${supportEmail}?subject=Silara%20Marketing%20enquiry${selected ? `%20-%20${selected.name}` : ""}`} className="button button--gold"><Mail size={17} /> Email {supportEmail}</a>
          </div>
          <div className="lead-embed">
            <div className="lead-embed__header"><span>Embed ready</span><strong>{contactOnly ? "Contact form" : "Call scheduling / Wufoo"}</strong></div>
            <label>Organisation type<span>Choose your provider sector</span></label>
            <label>Primary pressure<span>Tell us what needs attention</span></label>
            <label>Preferred next step<span>Select a suitable conversation time</span></label>
            <div className="lead-embed__placeholder"><ShieldCheck /><p>Your live form or booking experience will appear here once the embed URL is supplied.</p></div>
            <button type="button" className="button button--dark" disabled>Embed connection required <ArrowRight size={16} /></button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

