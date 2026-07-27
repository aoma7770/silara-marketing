// Design reminder: Institutional Care Capital — a visual, interactive Australian care-technology experience that pairs responsible AI assistance with clearly human accountability.
import { ArrowRight, ArrowUpRight, BrainCircuit, Check, CircleDotDashed, FileWarning, Layers3, ShieldCheck, Sparkles, UsersRound } from "lucide-react";
import { Link } from "wouter";
import PageShell from "@/components/PageShell";
import ScrollReveal from "@/components/ScrollReveal";
import AiMarketExplorer from "@/components/AiMarketExplorer";
import { productList } from "@/data/site";

const heroImage = "/manus-storage/silara-ai-care-operations-hero_706a1baf.jpg";
const portfolioImage = "/manus-storage/silara-portfolio-interface_0ed7b249.jpg";
const aiWorkflowImage = "/manus-storage/silara-ai-human-oversight-workflow_fe5191c5.jpg";

export default function Home() {
  return (
    <PageShell>
      <section className="home-hero home-hero--ai">
        <img src={heroImage} alt="Australian care-provider leaders using an AI-assisted operating workflow with accountable human decision making" className="home-hero__image" />
        <div className="home-hero__veil" />
        <div className="container home-hero__content">
          <div className="hero-chapter"><span>Silara / Responsible AI operations</span><i /></div>
          <div className="home-hero__grid">
            <div className="home-hero__copy">
              <span className="eyebrow eyebrow--light">For Australian care providers</span>
              <h1>Care-provider growth and compliance, made <em>more intelligent.</em></h1>
              <p>Silara combines care-sector workflow expertise with responsible AI assistance to help NDIS, aged-care, disability-service and allied-health teams organise the work that matters—without losing human judgement.</p>
              <div className="hero-actions">
                <Link href="/book-demo" className="button button--gold">Schedule a discovery call <ArrowRight size={17} /></Link>
                <Link href="/solutions" className="button button--ghost-light">Explore the portfolio</Link>
              </div>
              <div className="hero-trust"><ShieldCheck size={18} /><span>AI-assisted organisation. Authorised human decisions. Designed around Australian provider workflows.</span></div>
            </div>
            <div className="hero-portfolio-note hero-portfolio-note--ai">
              <span>How Silara AI helps</span>
              <p>It sorts signals, connects evidence and prepares the next right prompt.</p>
              <div><strong>H+</strong><small>human accountability<br />at every decision point</small></div>
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
          <ScrollReveal className="section-rail"><span className="chapter-number">01</span><span>The work behind the work</span></ScrollReveal>
          <div>
            <ScrollReveal className="section-heading section-heading--wide">
              <span className="eyebrow">The operational reality</span>
              <h2>Care-provider growth and compliance should not depend on disconnected systems.</h2>
              <p>Australian providers are expected to grow, document, report, verify, respond and improve—often through tools that were never designed for the work.</p>
            </ScrollReveal>
            <div className="problem-grid problem-grid--visual">
              {[
                { icon: UsersRound, title: "Empty capacity", copy: "Vacancies and inconsistent referrals put pressure on teams, cash flow, and service growth.", signal: "Opportunity signals are hard to see." },
                { icon: FileWarning, title: "Compliance pressure", copy: "Deadlines, notes, evidence, credentials and follow-up compete for attention every day.", signal: "Critical follow-up spreads across tools." },
                { icon: Layers3, title: "Fragmented systems", copy: "Spreadsheets, email, drives and generic tools make critical work harder to control.", signal: "The story is split across systems." },
              ].map((item, index) => (
                <ScrollReveal className="problem-card" delay={index * 0.06} key={item.title}>
                  <div className="problem-card__signal"><CircleDotDashed size={16} /><span>{item.signal}</span></div>
                  <item.icon /><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.copy}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section ai-protocol-section">
        <div className="container ai-protocol">
          <div className="ai-protocol__media"><img src={aiWorkflowImage} alt="Responsible AI workflow moving from care-provider signals to human approval" /><span>Signal → organised context → human approval</span></div>
          <div className="ai-protocol__copy">
            <span className="eyebrow">The Silara AI protocol</span>
            <h2>AI that makes the operating picture <em>clearer—not less accountable.</em></h2>
            <p>Silara is built around useful assistance: organise fragmented signals, detect incomplete pathways, prepare structured drafts and help teams prioritise what needs attention.</p>
            <div className="ai-protocol__steps">
              {[
                ["01", "Collect the operating signals", "Bring relevant actions, evidence, dates and workflow context into view."],
                ["02", "Assist the team with clarity", "Use AI to structure, flag, draft and prioritise—not to make final decisions."],
                ["03", "Keep people in control", "Authorised people review, approve, act and remain accountable for every outcome."],
              ].map(([number, title, copy]) => <div key={number}><span>{number}</span><div><strong>{title}</strong><p>{copy}</p></div></div>)}
            </div>
            <Link href="/about" className="text-link">Read our responsible-use position <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="section portfolio-section">
        <div className="container">
          <div className="portfolio-heading">
            <div className="section-rail"><span className="chapter-number">02</span><span>The portfolio</span></div>
            <div className="section-heading"><span className="eyebrow">One accountable partner</span><h2>Five focused care-provider solutions. <em>One connected operating view.</em></h2></div>
            <p>Start with the workflow creating the most pressure. Add more only when your team is ready.</p>
          </div>
          <div className="portfolio-visual portfolio-visual--enhanced"><img src={portfolioImage} alt="Conceptual portfolio interfaces for AI-assisted incident, documentation, credential, referral and reputation workflows" /><span>Product concepts — interfaces may change</span><div className="portfolio-visual__signal"><BrainCircuit size={18} /><span>AI-assist layer</span><strong>Priority signals organised for human review</strong></div></div>
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

      <AiMarketExplorer />

      <section className="section dark-proof dark-proof--ai">
        <div className="container editorial-grid">
          <div className="section-rail section-rail--light"><span className="chapter-number">05</span><span>Our difference</span></div>
          <div>
            <div className="section-heading section-heading--light"><span className="eyebrow eyebrow--light">Built for Australian care providers</span><h2>Technology that helps care teams see the next right action—without asking them to hand over judgement.</h2></div>
            <div className="principle-list">
              {[
                ["AI with a clear job", "Designed to organise, detect, prioritise and support drafting within real operating workflows."],
                ["Sector-aware by design", "Workflows, terminology and priorities shaped around Australian NDIS, aged-care, disability-services and allied-health operations."],
                ["Human accountability remains", "Authorised people retain professional judgement, approval, safeguarding and regulatory responsibility."],
                ["Evidence and trust in view", "Privacy, access, traceability and responsible data handling are product requirements—not afterthoughts."],
              ].map(([title, copy]) => <ScrollReveal className="principle-row" key={title}><span><Check /></span><div><h3>{title}</h3><p>{copy}</p></div></ScrollReveal>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section metrics-section">
        <div className="container metrics-grid">
          <div className="section-heading"><span className="eyebrow">Evidence before promises</span><h2>We measure the work that should improve.</h2><p>Until verified customer outcomes are available, Silara’s proof starts with a transparent measurement framework—not fabricated testimonials.</p></div>
          <div className="metric-ledger">
            {[
              ["01", "Vacancy movement", "Approved vacancy to suitable opportunity"],
              ["02", "Deadline control", "Open, due, overdue, escalated and closed actions"],
              ["03", "Documentation quality", "First-pass quality, coaching themes and approval flow"],
              ["04", "Workforce readiness", "Exceptions, expiries, verification and allocation status"],
              ["05", "Response quality", "Feedback themes, ownership, response time and recovery"],
            ].map(([number, title, copy]) => <div key={number}><span>{number}</span><strong>{title}</strong><p>{copy}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section final-cta final-cta--ai"><div className="container final-cta__inner"><Sparkles /><span className="eyebrow">Ready when you are</span><h2>Let’s make the next operational step clearer.</h2><p>Schedule a practical conversation about the pressure your team is facing. No public pricing, no generic pitch—just a focused discussion about fit.</p><Link href="/book-demo" className="button button--gold">Schedule a discovery call <ArrowRight size={17} /></Link></div></section>
    </PageShell>
  );
}
