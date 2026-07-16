// Design reminder: Institutional Care Capital — asymmetric editorial layout, gold conversion cues, and a supportive Australian provider narrative.
import { ArrowRight, ArrowUpRight, Check, FileWarning, Layers3, ShieldCheck, Sparkles, UsersRound } from "lucide-react";
import { Link } from "wouter";
import PageShell from "@/components/PageShell";
import ScrollReveal from "@/components/ScrollReveal";
import { productList } from "@/data/site";

const heroImage = "/manus-storage/silara-hero-institutional-care_04a25a0a.jpg";
const portfolioImage = "/manus-storage/silara-portfolio-interface_0ed7b249.jpg";

export default function Home() {
  return (
    <PageShell>
      <section className="home-hero">
        <img src={heroImage} alt="Australian care professionals within a refined operational technology environment" className="home-hero__image" />
        <div className="home-hero__veil" />
        <div className="container home-hero__content">
          <div className="hero-chapter"><span>Silara / 2026</span><i /></div>
          <div className="home-hero__grid">
            <div className="home-hero__copy">
              <span className="eyebrow eyebrow--light">For Australian care providers</span>
              <h1>Growth and compliance, <em>solved.</em></h1>
              <p>We build the focused systems NDIS, aged-care, disability-services, and allied-health providers need to grow responsibly—without the administrative chaos.</p>
              <div className="hero-actions">
                <Link href="/book-demo" className="button button--gold">Schedule a discovery call <ArrowRight size={17} /></Link>
                <Link href="/solutions" className="button button--ghost-light">Explore the portfolio</Link>
              </div>
              <div className="hero-trust"><ShieldCheck size={18} /><span>Sector-aware. Human-accountable. Designed around Australian provider workflows.</span></div>
            </div>
            <div className="hero-portfolio-note">
              <span>Our purpose</span>
              <p>Better systems for the people building better care.</p>
              <div><strong>05</strong><small>focused solutions<br />under one partner</small></div>
            </div>
          </div>
        </div>
      </section>

      <section className="sector-strip" aria-label="Primary sectors">
        <div className="container sector-strip__inner">
          <span>Built to support</span><strong>NDIS providers</strong><i /><strong>Aged-care operators</strong><i /><strong>Allied-health practices</strong><i /><strong>SIL & SDA teams</strong>
        </div>
      </section>

      <section className="section section--pearl problem-section">
        <div className="container editorial-grid">
          <ScrollReveal className="section-rail"><span className="chapter-number">01</span><span>Why Silara</span></ScrollReveal>
          <div>
            <ScrollReveal className="section-heading section-heading--wide">
              <span className="eyebrow">The operational reality</span>
              <h2>You didn’t build a care business to spend your best hours chasing systems.</h2>
              <p>Local providers are expected to grow, document, report, verify, respond, and improve—often through tools that were never designed for the work.</p>
            </ScrollReveal>
            <div className="problem-grid">
              {[
                { icon: UsersRound, title: "Empty capacity", copy: "Vacancies and inconsistent referrals put pressure on teams, cash flow, and service growth." },
                { icon: FileWarning, title: "Compliance pressure", copy: "Deadlines, notes, evidence, credentials, and follow-up compete for attention every day." },
                { icon: Layers3, title: "Fragmented systems", copy: "Spreadsheets, email, drives, and generic tools make critical work harder to control." },
              ].map((item, index) => (
                <ScrollReveal className="problem-card" delay={index * 0.06} key={item.title}>
                  <item.icon /><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.copy}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section portfolio-section">
        <div className="container">
          <div className="portfolio-heading">
            <div className="section-rail"><span className="chapter-number">02</span><span>The portfolio</span></div>
            <div className="section-heading"><span className="eyebrow">One accountable partner</span><h2>Five focused solutions. <em>No oversized platform.</em></h2></div>
            <p>Start with the workflow creating the most pressure. Add more only when your team is ready.</p>
          </div>
          <div className="portfolio-visual"><img src={portfolioImage} alt="Conceptual portfolio interfaces for incident, documentation, credential, and reputation workflows" /><span>Product concepts — interfaces may change</span></div>
          <div className="product-ledger">
            {productList.map((product, index) => (
              <ScrollReveal className="product-ledger__row" delay={index * 0.04} key={product.key}>
                <div className="product-index" style={{ background: product.accent }}>{product.index}</div>
                <div className="product-name"><small>{product.category}</small><h3>{product.name}</h3></div>
                <p>{product.summary}</p><span className="status-chip">{product.status}</span>
                <Link href={product.slug} aria-label={`Explore ${product.name}`}><ArrowUpRight /></Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-proof">
        <div className="container editorial-grid">
          <div className="section-rail section-rail--light"><span className="chapter-number">03</span><span>Our difference</span></div>
          <div>
            <div className="section-heading section-heading--light"><span className="eyebrow eyebrow--light">Built for Australian care providers</span><h2>Focused enough to implement. Serious enough to trust.</h2></div>
            <div className="principle-list">
              {[
                ["Sector-aware by design", "Workflows, terminology, and priorities shaped around Australian NDIS, aged-care, disability-services, and allied-health operations."],
                ["Works with what you have", "Focused products designed to support important workflows without forcing disruptive platform replacement."],
                ["Human accountability remains", "Technology can organise, flag, and explain. Authorised people retain judgement, approval, and responsibility."],
                ["Trust is a product requirement", "Privacy, access, evidence, auditability, and responsible data handling are considered from the start."],
              ].map(([title, copy]) => <ScrollReveal className="principle-row" key={title}><span><Check /></span><div><h3>{title}</h3><p>{copy}</p></div></ScrollReveal>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section support-section">
        <div className="container support-grid">
          <div className="section-heading"><span className="eyebrow">Who we support</span><h2>Local expertise for providers doing essential work.</h2><p>Silara is here to help growing care businesses succeed with more clarity, control, and confidence.</p><Link href="/who-we-help" className="text-link">Explore who we help <ArrowRight size={16} /></Link></div>
          <div className="support-cards">
            {[
              ["NDIS & disability services", "Incidents, evidence, worker readiness, participant records, and sustainable service growth."],
              ["Aged-care providers", "SIRS workflow support, distributed workforce visibility, quality evidence, and consumer trust."],
              ["Allied-health practices", "Documentation consistency, referral growth, multi-site standards, and reputation."],
              ["SIL & SDA operators", "Vacancy matching, suitable referral pathways, workforce evidence, and operational confidence."],
            ].map(([title, copy], index) => <ScrollReveal className="support-card" delay={index * 0.05} key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></ScrollReveal>)}
          </div>
        </div>
      </section>

      <section className="section metrics-section">
        <div className="container metrics-grid">
          <div className="section-heading"><span className="eyebrow">Proof without invented promises</span><h2>We measure the work that should improve.</h2><p>Until verified customer outcomes are available, Silara’s proof starts with a transparent measurement framework—not fabricated testimonials.</p></div>
          <div className="metric-ledger">
            {[
              ["01", "Vacancy days", "Time from approved vacancy to suitable opportunity"],
              ["02", "Deadline control", "Open, due, overdue, escalated, and closed actions"],
              ["03", "Documentation quality", "First-pass quality, coaching themes, and approval flow"],
              ["04", "Workforce readiness", "Exceptions, expiries, verification, and allocation status"],
              ["05", "Response quality", "Feedback themes, ownership, response time, and recovery"],
            ].map(([number, title, copy]) => <div key={number}><span>{number}</span><strong>{title}</strong><p>{copy}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section final-cta"><div className="container final-cta__inner"><Sparkles /><span className="eyebrow">Ready when you are</span><h2>Let’s make the next operational step clearer.</h2><p>Schedule a practical conversation about the pressure your team is facing. No public pricing, no generic pitch—just a focused discussion about fit.</p><Link href="/book-demo" className="button button--gold">Schedule a discovery call <ArrowRight size={17} /></Link></div></section>
    </PageShell>
  );
}
