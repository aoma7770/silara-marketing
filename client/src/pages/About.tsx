// Design reminder: the About page carries executive trust—human purpose, institutional discipline, and a credible Australian operating story with accountable AI assistance.
import { ArrowRight, BrainCircuit, Eye, Flag, HeartHandshake, Scale, ShieldCheck, Sparkles, UserRoundCheck } from "lucide-react";
import { Link } from "wouter";
import PageShell from "@/components/PageShell";
import ScrollReveal from "@/components/ScrollReveal";
import SectionScene from "@/components/SectionScene";

const aboutImage = "/manus-storage/silara-about-local-providers_ab2d81de.jpg";
const oversightImage = "/manus-storage/silara-ai-human-oversight-workflow_fe5191c5.jpg";

export default function About() {
  return (
    <PageShell>
      <section className="inner-hero about-hero">
        <div className="container inner-hero__grid">
          <div>
            <span className="eyebrow eyebrow--light">About Silara Marketing</span>
            <h1>Built to back the people building better care.</h1>
            <p>Silara exists to help Australian care providers succeed with practical systems, responsible technology, and a partner who understands the operational pressure behind the service.</p>
            <Link href="/book-demo" className="button button--gold">Start a conversation <ArrowRight size={17} /></Link>
          </div>
          <div className="about-hero__image"><img src={aboutImage} alt="Australian care-sector leaders collaborating in a community-focused workspace" /><span>Australian care. Local capability. Shared progress.</span></div>
        </div>
      </section>

      <section className="section about-story section--scene scene--light">
        <SectionScene src="/manus-storage/silara-ndis-ai-pathways_b39c61cb.jpg" position="78% center" />
        <div className="container editorial-grid">
          <div className="section-rail"><span className="chapter-number">01</span><span>Our story</span></div>
          <div className="about-story__copy">
            <span className="eyebrow">Why Silara exists</span>
            <h2>Care providers deserve systems that respect the importance of their work.</h2>
            <div className="two-column-copy">
              <p>Silara Marketing was founded around a simple frustration: Australian care providers spend too much time chasing referrals, reconciling spreadsheets, monitoring deadlines, checking credentials, and proving work that has already been done.</p>
              <p>That pressure does more than create administration. It takes attention away from teams, participants, clients, residents, and communities. Silara is building a focused portfolio of growth and compliance products so local providers can operate with more clarity, confidence, and room to improve.</p>
            </div>
            <blockquote>We are not building one oversized platform. We are building practical systems for the workflows that matter most—and supporting providers as they put those systems to work.</blockquote>
          </div>
        </div>
      </section>

      <section className="section mission-vision section--scene scene--mist">
        <SectionScene src="/manus-storage/silara-aged-care-ai-assurance_04c2f1eb.jpg" position="78% center" />
        <div className="container mission-vision__grid">
          <ScrollReveal className="mission-card"><Flag /><span>Mission</span><h2>Help Australian care providers grow responsibly.</h2><p>We replace fragmented referral, compliance, documentation, workforce, and reputation work with practical systems that strengthen teams and protect the quality of care.</p></ScrollReveal>
          <ScrollReveal className="vision-card" delay={0.08}><Eye /><span>Vision</span><h2>Become Australia’s most trusted portfolio of care-provider growth and compliance products.</h2><p>We aim to be known for helping local NDIS, aged-care, disability-services, and allied-health organisations operate with greater confidence, clarity, and sustainable success.</p></ScrollReveal>
        </div>
      </section>

      <section className="section about-ai-proof">
        <div className="container about-ai-proof__grid">
          <div className="about-ai-proof__copy"><span className="eyebrow">Our technology position</span><h2>AI should make careful work more visible—not make careful people optional.</h2><p>Silara designs AI-supported workflow signals to help provider teams prepare, prioritise, and spot patterns. We do not position AI as a substitute for professional judgement, safeguarding action, regulatory interpretation, or authorised approval.</p><div className="about-ai-proof__steps"><div><BrainCircuit size={18} /><div><strong>Assist</strong><span>Organise structured information and surface review prompts.</span></div></div><div><UserRoundCheck size={18} /><div><strong>Accountability stays human</strong><span>Authorised people assess context, make decisions, and approve actions.</span></div></div></div></div>
          <div className="about-ai-proof__media"><img src={oversightImage} alt="Australian care operations leaders reviewing an AI-supported workflow together" /><div className="about-ai-proof__seal"><ShieldCheck size={18} /><span>Built for oversight</span><strong>Assistance with clear boundaries.</strong></div></div>
        </div>
      </section>

      <section className="section values-section section--scene scene--light">
        <SectionScene src="/manus-storage/silara-allied-health-ai-documentation_282f7040.jpg" position="78% center" />
        <div className="container">
          <div className="values-heading"><div className="section-rail"><span className="chapter-number">02</span><span>How we work</span></div><div className="section-heading"><span className="eyebrow">Principles before promises</span><h2>What we believe should never change.</h2></div></div>
          <div className="values-grid">
            {[
              [Scale, "Accountability", "We build for visible ownership, clear evidence, and human approval—not vague automation."],
              [Sparkles, "Simplicity", "Powerful systems should reduce operational friction, not create a new implementation burden."],
              [ShieldCheck, "Integrity", "We communicate product status, limitations, data practices, and commercial alignment clearly."],
              [HeartHandshake, "Provider and participant trust", "Growth should support service sustainability without compromising choice, suitability, privacy, or care."],
            ].map(([Icon, title, copy], index) => {
              const ValueIcon = Icon as typeof Scale;
              return <ScrollReveal className="value-card" delay={index * 0.05} key={title as string}><ValueIcon /><span>0{index + 1}</span><h3>{title as string}</h3><p>{copy as string}</p></ScrollReveal>;
            })}
          </div>
        </div>
      </section>

      <section className="section strategic-principles section--scene scene--deep">
        <SectionScene src="/manus-storage/silara-sil-sda-ai-matching_d7cd46ff.jpg" position="76% center" tone="deep" />
        <div className="container strategic-principles__grid">
          <div className="section-heading section-heading--light"><span className="eyebrow eyebrow--light">Our operating position</span><h2>Supportive by purpose. Disciplined by design.</h2><p>Silara combines the responsiveness of a local partner with the product discipline expected from a serious technology company.</p></div>
          <div className="strategy-list">
            {[
              ["Solve urgent workflows", "Every offer must address a visible deadline, cost, revenue leak, or operational risk."],
              ["Keep people accountable", "AI and automation support the work; authorised people retain judgement and approval."],
              ["Work with existing systems", "Focused implementation takes priority over disruptive replacement."],
              ["Earn expansion", "Each product must prove usefulness before the portfolio grows around it."],
            ].map(([title, copy], index) => <div key={title}><span>0{index + 1}</span><div><strong>{title}</strong><p>{copy}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="section final-cta final-cta--light section--scene scene--mist">
        <SectionScene src="/manus-storage/silara-ai-human-oversight-workflow_fe5191c5.jpg" position="72% center" />
        <div className="container final-cta__inner"><span className="eyebrow">A partner for the next practical step</span><h2>Let’s support your organisation to succeed.</h2><p>Tell us what is creating pressure today, and we’ll help you identify the most useful conversation to have next.</p><Link href="/book-demo" className="button button--gold">Schedule a discovery call <ArrowRight size={17} /></Link></div>
      </section>
    </PageShell>
  );
}
