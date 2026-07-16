// Design reminder: supporting pages stay concise, transparent, and consistent with Silara's institutional trust system.
import { ArrowRight, BookOpen, LockKeyhole, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import PageShell from "@/components/PageShell";
import { supportEmail } from "@/data/site";

const pageCopy = {
  resources: { eyebrow: "Resources", title: "Practical guidance for Australian care providers.", intro: "Silara’s resource centre will share sector-aware tools and articles across incidents, documentation, workforce readiness, vacancies, reputation, and responsible technology.", icon: BookOpen },
  security: { eyebrow: "Security approach", title: "Trust should be designed into the product—not added to the pitch.", intro: "Silara is developing its products around data minimisation, role-based access, auditability, human approval, retention controls, and responsible supplier governance. Final hosting and security documentation will be published before production activation.", icon: ShieldCheck },
  cookies: { eyebrow: "Cookies", title: "Cookie preferences will be explained clearly.", intro: "Silara will use only the analytics and non-essential cookies disclosed in its final cookie notice and preference controls.", icon: LockKeyhole },
};

export default function InfoPage({ type }: { type: keyof typeof pageCopy }) {
  const page = pageCopy[type];
  const Icon = page.icon;
  return <PageShell><section className="info-page"><div className="container info-page__inner"><Icon /><span className="eyebrow eyebrow--light">{page.eyebrow}</span><h1>{page.title}</h1><p>{page.intro}</p><Link href="/book-demo" className="button button--gold">Speak with Silara <ArrowRight size={17} /></Link></div></section></PageShell>;
}
