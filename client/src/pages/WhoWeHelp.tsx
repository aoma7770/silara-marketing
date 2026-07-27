// Design reminder: target-market storytelling should feel like a care-operations field guide—image-led, locally grounded, AI-assisted, and always human-accountable.
import { ArrowRight, BrainCircuit, ChevronDown, HeartPulse, House, ShieldCheck, UsersRound, Building2 } from "lucide-react";
import { Link } from "wouter";
import PageShell from "@/components/PageShell";
import ScrollReveal from "@/components/ScrollReveal";

const sectors = [
  {
    key: "ndis",
    index: "01",
    icon: UsersRound,
    title: "NDIS & disability services",
    image: "/manus-storage/silara-ndis-ai-pathways_b39c61cb.jpg",
    alt: "Australian disability-services team reviewing a care workflow together",
    pressure: "Visibility across participant support, incident follow-up, worker readiness, referrals and evidence can be difficult to hold together as services grow.",
    ai: "AI-assisted organisation can help surface missing workflow context, group recurring themes and prepare clearer next-step prompts for authorised teams.",
    outcomes: ["More visible operational handovers", "Earlier attention to exceptions", "Human-led decisions retained"],
  },
  {
    key: "aged-care",
    index: "02",
    icon: HeartPulse,
    title: "Aged-care providers",
    image: "/manus-storage/silara-aged-care-ai-assurance_04c2f1eb.jpg",
    alt: "Australian aged-care leaders reviewing care and assurance information",
    pressure: "Multi-site teams need a clearer line of sight from workforce evidence and consumer feedback to incident action, documentation and quality assurance.",
    ai: "AI-supported workflow signals can help leaders see patterns that deserve a closer human review—without making care, compliance or reporting decisions.",
    outcomes: ["Clearer assurance conversations", "Connected evidence pathways", "Practical multi-site visibility"],
  },
  {
    key: "allied-health",
    index: "03",
    icon: Building2,
    title: "Allied-health practices",
    image: "/manus-storage/silara-allied-health-ai-documentation_282f7040.jpg",
    alt: "Australian allied-health practitioner reviewing documentation in a calm clinical workspace",
    pressure: "Growing practices need to protect documentation quality, referral momentum and client experience without adding more manual review to every day.",
    ai: "AI can assist with structured drafting cues and quality-pattern visibility, while practitioners and authorised leaders retain clinical and professional judgement.",
    outcomes: ["More consistent documentation review", "Focused coaching conversations", "Stronger referral follow-through"],
  },
  {
    key: "sil-sda",
    index: "04",
    icon: House,
    title: "SIL & SDA operators",
    image: "/manus-storage/silara-sil-sda-ai-matching_d7cd46ff.jpg",
    alt: "Australian supported independent living and specialist disability accommodation planning session",
    pressure: "Vacancy, matching, workforce and follow-up activity can sit in separate tools just when a coordinated provider response matters most.",
    ai: "AI-supported preparation can help organise provider-supplied information and surface workflow gaps; suitability, service fit and final agreements remain with your team.",
    outcomes: ["Clearer vacancy pathways", "More connected operational follow-up", "Provider judgement protected"],
  },
];

export default function WhoWeHelp() {
  return (
    <PageShell>
      <section className="inner-hero audience-hero">
        <div className="container audience-hero__grid">
          <div>
            <span className="eyebrow eyebrow--light">Who we help</span>
            <h1>Technology that respects the reality of Australian care.</h1>
            <p>Silara supports care-provider organisations that have outgrown fragmented systems and need a more visible, accountable way to improve the work around care.</p>
          </div>
          <div className="audience-hero__signal"><BrainCircuit size={22} /><span>AI-supported workflow intelligence</span><strong>People remain responsible for judgement, approval and care.</strong></div>
        </div>
      </section>

      <section className="section audience-ledger-section">
        <div className="container">
          <div className="audience-ledger-heading">
            <div className="section-rail"><span className="chapter-number">01</span><span>Care contexts</span></div>
            <div className="section-heading section-heading--wide"><span className="eyebrow">Choose the operating reality closest to yours</span><h2>Different settings. The same need for clearer pathways.</h2><p>Explore the pressures that Silara is designed to make more visible, structured and practical for provider teams.</p></div>
          </div>

          <div className="audience-ledger">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <ScrollReveal className="audience-ledger__card" delay={index * 0.05} key={sector.key}>
                  <div className="audience-ledger__image"><img src={sector.image} alt={sector.alt} /><span>{sector.index}</span></div>
                  <div className="audience-ledger__body">
                    <div className="audience-ledger__title"><Icon size={20} /><div><span className="eyebrow">Australian care context</span><h2>{sector.title}</h2></div></div>
                    <p>{sector.pressure}</p>
                    <div className="audience-ledger__ai"><BrainCircuit size={18} /><div><span>Where AI can assist</span><strong>{sector.ai}</strong></div></div>
                    <details>
                      <summary>See the operational focus <ChevronDown size={16} /></summary>
                      <ul>{sector.outcomes.map((outcome) => <li key={outcome}><ShieldCheck size={15} />{outcome}</li>)}</ul>
                    </details>
                    <Link href={`/book-demo?sector=${sector.key}`} className="text-link">Discuss this operating context <ArrowRight size={15} /></Link>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <div className="care-boundary-note"><ShieldCheck size={19} /><p><strong>Responsible AI boundary.</strong> Silara’s AI-supported patterns are designed to assist organisation, drafting, detection and prioritisation. They do not replace clinical judgement, participant choice, safeguarding actions, professional approvals or regulatory responsibility.</p></div>
        </div>
      </section>

      <section className="section final-cta final-cta--ai">
        <div className="container final-cta__inner"><span className="eyebrow">Local care businesses matter</span><h2>Your systems should help your team succeed—not hold them back.</h2><p>Tell us what your organisation is trying to improve, and we will help you find the next practical conversation.</p><Link href="/book-demo" className="button button--gold">Schedule a discovery call <ArrowRight size={17} /></Link></div>
      </section>
    </PageShell>
  );
}
