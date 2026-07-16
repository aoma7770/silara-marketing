// Design reminder: even utility states should feel composed, helpful, and unmistakably part of Silara.
import { ArrowLeft, Home } from "lucide-react";
import { Link } from "wouter";
import PageShell from "@/components/PageShell";

export default function NotFound() {
  return <PageShell><section className="info-page"><div className="container info-page__inner"><span className="error-code">404</span><span className="eyebrow eyebrow--light">Page not found</span><h1>This pathway doesn’t exist.</h1><p>The page may have moved. Return to the Silara portfolio or speak with us about what you were trying to find.</p><div className="hero-actions"><button className="button button--ghost-light" onClick={() => window.history.back()}><ArrowLeft size={16} /> Go back</button><Link className="button button--gold" href="/"><Home size={16} /> Silara home</Link></div></div></section></PageShell>;
}
