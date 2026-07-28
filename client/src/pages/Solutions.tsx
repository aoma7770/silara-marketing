// Design reminder: Institutional Care Capital — the portfolio reads as a disciplined operating system, with visible AI assistance and human accountability at every product boundary.
import { useState, type CSSProperties } from "react";
import { ArrowRight, ArrowUpRight, BrainCircuit, CheckCircle2, Layers3 } from "lucide-react";
import { Link } from "wouter";
import PageShell from "@/components/PageShell";
import ScrollReveal from "@/components/ScrollReveal";
import SectionScene from "@/components/SectionScene";
import { productList, type Product } from "@/data/site";

const portfolioImage = "/manus-storage/silara-portfolio-interface_0ed7b249.jpg";

const operatingNotes: Record<Product["key"], { signal: string; boundary: string; measure: string }> = {
  apgp: { signal: "Vacancies, participant enquiries and referral-pathway progress", boundary: "APGP is a referral partnership; providers retain service suitability and agreement decisions.", measure: "Stable occupancy through supported move-in" },
  incidentiq: { signal: "Deadlines, evidence gaps and escalation ownership", boundary: "Authorised people retain interpretation, action and approval.", measure: "Continuity of controlled action" },
  noteguard: { signal: "Configurable documentation-quality patterns", boundary: "Records are never silently changed; final approval stays human.", measure: "Earlier, more useful coaching" },
  credsvault: { signal: "Credential exceptions and expiring evidence", boundary: "Verification and allocation approvals remain provider responsibilities.", measure: "Readiness visibility before allocation" },
  providerpulse: { signal: "Recurring feedback themes and response ownership", boundary: "Public communication and recovery action remain human-led.", measure: "Faster learning from service signals" },
};

export default function Solutions() {
  const [activeKey, setActiveKey] = useState<Product["key"]>("incidentiq");
  const activeProduct = productList.find((product) => product.key === activeKey) ?? productList[0];
  const note = operatingNotes[activeProduct.key];

  return (
    <PageShell>
      <section className="inner-hero solutions-hero">
        <div className="solutions-hero__image" aria-hidden="true"><img src={portfolioImage} alt="" /></div>
        <div className="solutions-hero__veil" aria-hidden="true" />
        <div className="container solutions-hero__content">
          <div><span className="eyebrow eyebrow--light">The Silara portfolio</span><h1>Focused systems for growth, assurance, and provider confidence.</h1><p>Explore the operating pressure behind each product, then schedule a practical conversation about the workflow your team needs to strengthen first.</p></div>
          <div className="solutions-hero__ledger"><Layers3 size={19} /><span>Portfolio thesis</span><strong>One connected approach to care-provider operations.</strong></div>
        </div>
      </section>

      <section className="section portfolio-operating section--scene scene--mist">
        <SectionScene src="/manus-storage/silara-ai-human-oversight-workflow_fe5191c5.jpg" position="78% center" />
        <div className="container">
          <div className="portfolio-operating__heading"><div className="section-rail"><span className="chapter-number">01</span><span>Operating layer</span></div><div className="section-heading"><span className="eyebrow">Explore the workflow</span><h2>Five distinct systems. One accountable operating philosophy.</h2><p>Each product is designed to bring the next responsible action into view. Where appropriate, AI may assist with preparation; authorised people remain accountable for decisions. APGP is a results-based referral partnership, not an AI product.</p></div></div>
          <div className="portfolio-operating__body">
            <div className="portfolio-operating__nav" role="tablist" aria-label="Silara products">
              {productList.map((product) => <button key={product.key} role="tab" aria-selected={activeKey === product.key} className={activeKey === product.key ? "portfolio-operating__tab portfolio-operating__tab--active" : "portfolio-operating__tab"} style={{ "--product": product.accent } as CSSProperties} onClick={() => setActiveKey(product.key)}><span>{product.index}</span><strong>{product.shortName}</strong><small>{product.category}</small></button>)}
            </div>
            <div className="portfolio-operating__stage" style={{ "--product": activeProduct.accent, "--product-tint": activeProduct.tint } as CSSProperties} role="tabpanel">
              <div className="portfolio-operating__stage-mark">{activeProduct.key === "apgp" ? <Layers3 size={23} /> : <BrainCircuit size={23} />}<span>{activeProduct.key === "apgp" ? "Referral partnership" : "Assisted signal"}</span></div>
              <span className="eyebrow">{activeProduct.category} · {activeProduct.status}</span>
              <h3>{activeProduct.name}</h3>
              <p>{activeProduct.summary}</p>
              <div className="portfolio-operating__signal"><span>Designed to surface</span><strong>{note.signal}</strong></div>
              <div className="portfolio-operating__ledger"><div><span>Human boundary</span><strong>{note.boundary}</strong></div><div><span>Working toward</span><strong>{note.measure}</strong></div></div>
              {activeProduct.key === "apgp" && activeProduct.externalUrl ? <a href={activeProduct.externalUrl} className="button button--product">See how it works <ArrowUpRight size={17} /></a> : <Link href={activeProduct.slug} className="button button--product">Explore {activeProduct.shortName} <ArrowUpRight size={17} /></Link>}
            </div>
          </div>
        </div>
      </section>

      <section className="section solutions-ledger-section section--scene scene--light">
        <SectionScene src="/manus-storage/silara-ndis-ai-pathways_b39c61cb.jpg" position="78% center" />
        <div className="container solutions-ledger-heading"><div className="section-rail"><span className="chapter-number">02</span><span>Portfolio ledger</span></div><div className="section-heading"><span className="eyebrow">A product is not a promise</span><h2>Each system begins with the operational problem it must help a team own.</h2></div></div>
        <div className="container solutions-list">
          {productList.map((product, index) => <ScrollReveal key={product.key} delay={index * 0.035}><article style={{ "--product": product.accent, "--product-tint": product.tint } as CSSProperties}><div className="solutions-list__index">{product.index}</div><div><span className="eyebrow">{product.category} / {product.status}</span><h2>{product.name}</h2><p>{product.headline}</p><small>{product.audience}</small></div><Link href={product.slug} className="button button--product">Explore {product.shortName} <ArrowUpRight size={17} /></Link></article></ScrollReveal>)}
        </div>
      </section>

      <section className="section portfolio-call portfolio-call--ai section--scene scene--deep"><SectionScene src="/manus-storage/silara-aged-care-ai-assurance_04c2f1eb.jpg" position="74% center" tone="deep" /><div className="container"><div><span className="eyebrow eyebrow--light">Not sure where to begin?</span><h2>Start with the workflow—not the product list.</h2><p>We will help you isolate where growth, assurance, documentation, workforce readiness, or feedback handling is creating the most drag.</p><div className="portfolio-call__proof"><CheckCircle2 size={16} /><span>Scoped conversations. No public pricing. No automated recommendations.</span></div></div><Link href="/book-demo" className="button button--gold">Schedule a call <ArrowRight size={17} /></Link></div></section>
    </PageShell>
  );
}
