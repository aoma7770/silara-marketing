// Design reminder: sector pages should sound locally informed and supportive, never generic or overclaimed.
import { ArrowRight, Building2, HeartPulse, House, UsersRound } from "lucide-react";
import { Link } from "wouter";
import PageShell from "@/components/PageShell";

export default function WhoWeHelp() {
  return (
    <PageShell>
      <section className="inner-hero compact-hero"><div className="container"><span className="eyebrow eyebrow--light">Who we help</span><h1>Built around the realities of Australian care.</h1><p>Silara supports local provider organisations that have outgrown fragmented systems and need focused, practical pathways forward.</p></div></section>
      <section className="section"><div className="container audience-grid">
        {[
          [UsersRound, "NDIS & disability services", "Bring more control to incident deadlines, participant records, worker readiness, evidence, and service growth."],
          [HeartPulse, "Aged-care providers", "Support SIRS workflows, workforce evidence, multi-site visibility, consumer feedback, and reform readiness."],
          [Building2, "Allied-health practices", "Strengthen note consistency, referral flow, reputation, and standards across growing practices."],
          [House, "SIL & SDA operators", "Address vacancy pressure, suitable matching, workforce compliance, and operational follow-up."],
        ].map(([Icon, title, copy]) => { const AudienceIcon = Icon as typeof UsersRound; return <article key={title as string}><AudienceIcon /><h2>{title as string}</h2><p>{copy as string}</p><Link href="/book-demo">Discuss your organisation <ArrowRight size={15} /></Link></article>; })}
      </div></section>
      <section className="section final-cta"><div className="container final-cta__inner"><span className="eyebrow">Local care businesses matter</span><h2>Your systems should help your team succeed—not hold them back.</h2><p>Tell us what your organisation is trying to improve.</p><Link href="/book-demo" className="button button--gold">Schedule a discovery call <ArrowRight size={17} /></Link></div></section>
    </PageShell>
  );
}

