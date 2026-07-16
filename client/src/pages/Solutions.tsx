// Design reminder: portfolio presentation should feel like a holdings ledger—distinct products, common stewardship, no public pricing.
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import PageShell from "@/components/PageShell";
import { productList } from "@/data/site";

export default function Solutions() {
  return (
    <PageShell>
      <section className="inner-hero compact-hero"><div className="container"><span className="eyebrow eyebrow--light">The Silara portfolio</span><h1>Focused systems for growth, compliance, and provider confidence.</h1><p>Explore each product in detail, then schedule a conversation about the workflow creating the most pressure for your team.</p></div></section>
      <section className="section"><div className="container solutions-list">
        {productList.map((product) => <article key={product.key} style={{ "--product": product.accent, "--product-tint": product.tint } as React.CSSProperties}><div className="solutions-list__index">{product.index}</div><div><span className="eyebrow">{product.category} / {product.status}</span><h2>{product.name}</h2><p>{product.headline}</p><small>{product.audience}</small></div><Link href={product.slug} className="button button--product">Explore {product.shortName} <ArrowUpRight size={17} /></Link></article>)}
      </div></section>
      <section className="section portfolio-call"><div className="container"><div><span className="eyebrow eyebrow--light">Not sure where to begin?</span><h2>Start with the workflow—not the product list.</h2><p>Schedule a practical conversation and we’ll help you identify the best starting point.</p></div><Link href="/book-demo" className="button button--gold">Schedule a call <ArrowRight size={17} /></Link></div></section>
    </PageShell>
  );
}

