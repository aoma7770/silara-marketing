// Design reminder: Institutional Care Capital meets responsible AI — operational clarity, real Australian care settings, and human accountability at every interaction.
import { useState } from "react";
import { ArrowRight, BrainCircuit, Check, Network, ShieldCheck } from "lucide-react";
import { Link } from "wouter";

type MarketKey = "ndis" | "aged" | "allied" | "sil";

const marketStories: Record<MarketKey, {
  short: string;
  title: string;
  image: string;
  imageAlt: string;
  lead: string;
  aiSignal: string;
  outcomes: string[];
}> = {
  ndis: {
    short: "01 / NDIS & disability",
    title: "See the work that holds participant support together.",
    image: "/manus-storage/silara-ndis-ai-pathways_b39c61cb.jpg",
    imageAlt: "Australian disability-service operations team collaborating around an AI-supported care workflow",
    lead: "For teams managing incidents, worker evidence, participant documentation and service growth across fast-moving disability-service environments.",
    aiSignal: "Surface priority actions, organise evidence and prepare clearer workflow prompts for authorised people.",
    outcomes: ["More visible follow-up", "Stronger evidence pathways", "Human-led participant decisions"],
  },
  aged: {
    short: "02 / Aged care",
    title: "Turn distributed quality work into a visible operating rhythm.",
    image: "/manus-storage/silara-aged-care-ai-assurance_04c2f1eb.jpg",
    imageAlt: "Australian aged-care quality team reviewing an AI-supported operational workflow",
    lead: "For providers coordinating quality evidence, workforce visibility, incident follow-up, consumer feedback and reform readiness across multiple sites.",
    aiSignal: "Assist with sorting signals, identifying incomplete pathways and preparing evidence-led review prompts.",
    outcomes: ["Clearer quality ownership", "Better action visibility", "Respectful human oversight"],
  },
  allied: {
    short: "03 / Allied health",
    title: "Give growing practices a more consistent documentation rhythm.",
    image: "/manus-storage/silara-allied-health-ai-documentation_282f7040.jpg",
    imageAlt: "Australian allied-health professionals reviewing an AI-supported documentation workflow",
    lead: "For multi-disciplinary practices working to improve documentation quality, referrals, reputation and standards without adding another heavy platform.",
    aiSignal: "Support structured drafting and quality cues so professionals can focus on review, context and approval.",
    outcomes: ["More consistent notes", "Useful coaching cues", "Professional judgement retained"],
  },
  sil: {
    short: "04 / SIL & SDA",
    title: "Move vacancies through a more suitable, accountable pathway.",
    image: "/manus-storage/silara-apgp-supported-living_4bb84a46.jpg",
    imageAlt: "Accessible Australian supported-living environment for disability accommodation providers",
    lead: "For operators seeking a more active route from approved vacancies to suitable opportunities, referral context and provider decisions.",
    aiSignal: "Organise opportunity signals and pathways; suitability and placement decisions always remain with authorised people.",
    outcomes: ["Stronger vacancy visibility", "Clearer referral context", "Accountable provider decisions"],
  },
};

const marketOrder: MarketKey[] = ["ndis", "aged", "allied", "sil"];

export default function AiMarketExplorer() {
  const [active, setActive] = useState<MarketKey>("ndis");
  const story = marketStories[active];

  return (
    <section className="section market-explorer" aria-labelledby="market-explorer-title">
      <div className="container">
        <div className="market-explorer__heading">
          <div className="section-rail"><span className="chapter-number">04</span><span>Who we support</span></div>
          <div className="section-heading section-heading--wide">
            <span className="eyebrow">Choose your operating context</span>
            <h2 id="market-explorer-title">Care technology that adapts to the <em>work around you.</em></h2>
            <p>Explore the operational pressures Silara is built to support across Australian care-provider organisations.</p>
          </div>
        </div>

        <div className="market-explorer__body">
          <div className="market-tabs" role="tablist" aria-label="Australian care-provider audiences">
            {marketOrder.map((key) => {
              const item = marketStories[key];
              const selected = key === active;
              return (
                <button
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`market-panel-${key}`}
                  className={selected ? "market-tab market-tab--active" : "market-tab"}
                  key={key}
                  onClick={() => setActive(key)}
                >
                  <span>{item.short}</span><strong>{item.title.split(".")[0]}</strong><i />
                </button>
              );
            })}
          </div>

          <div className="market-stage" id={`market-panel-${active}`} role="tabpanel">
            <figure className="market-stage__image">
              <img src={story.image} alt={story.imageAlt} />
              <figcaption><Network size={15} /> Australian care-provider context</figcaption>
            </figure>
            <div className="market-stage__content">
              <span className="eyebrow">{story.short}</span>
              <h3>{story.title}</h3>
              <p>{story.lead}</p>
              <div className="ai-signal-card">
                <BrainCircuit size={20} />
                <div><span>AI support pattern</span><strong>{story.aiSignal}</strong></div>
              </div>
              <ul>
                {story.outcomes.map((outcome) => <li key={outcome}><Check size={15} />{outcome}</li>)}
              </ul>
              <Link href="/book-demo" className="text-link">Discuss your organisation <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>

        <div className="market-explorer__note"><ShieldCheck size={17} /><span>Silara uses AI to assist with organisation, drafting, detection and prioritisation—not to replace professional, clinical, safeguarding, regulatory or provider judgement.</span></div>
      </div>
    </section>
  );
}
