// Design reminder: legal content carries Silara's institutional trust through disciplined typography, generous reading width, and visible operational caveats.
import { ArrowUpRight, FileCheck2, LockKeyhole, Mail, ShieldCheck } from "lucide-react";
import { Streamdown } from "streamdown";
import { Link } from "wouter";
import PageShell from "@/components/PageShell";
import { supportEmail } from "@/data/site";
import privacyPolicy from "@/content/privacy-policy.md?raw";
import termsOfService from "@/content/terms-of-service.md?raw";

const legalPages = {
  privacy: {
    eyebrow: "Privacy governance",
    label: "Privacy Policy",
    icon: LockKeyhole,
    document: privacyPolicy,
    summary: "How Silara handles website, business-contact, account and approved product information across its B2B portfolio.",
    companionLabel: "Read the B2B Terms",
    companionHref: "/terms",
  },
  terms: {
    eyebrow: "Commercial framework",
    label: "B2B Terms of Service",
    icon: FileCheck2,
    document: termsOfService,
    summary: "The balanced operating, product, customer-responsibility and risk framework for organisations using Silara services.",
    companionLabel: "Read the Privacy Policy",
    companionHref: "/privacy",
  },
};

export default function LegalPage({ type }: { type: keyof typeof legalPages }) {
  const page = legalPages[type];
  const Icon = page.icon;

  return (
    <PageShell>
      <section className="legal-hero">
        <div className="container legal-hero__inner">
          <div>
            <span className="eyebrow eyebrow--light">{page.eyebrow}</span>
            <h1>{page.label}</h1>
          </div>
          <p>{page.summary}</p>
        </div>
      </section>

      <section className="legal-page">
        <div className="container legal-layout">
          <aside className="legal-sidebar" aria-label={`${page.label} document information`}>
            <div className="legal-sidebar__mark"><Icon size={24} /></div>
            <span className="eyebrow">Publication draft</span>
            <h2>Clear terms. Visible responsibilities.</h2>
            <p>This document is designed for Silara's Australian business customers and authorised users. It requires final review by an Australian lawyer before publication.</p>
            <div className="legal-sidebar__rule" />
            <div className="legal-sidebar__item"><ShieldCheck size={17} /><span>Australian B2B framework</span></div>
            <div className="legal-sidebar__item"><FileCheck2 size={17} /><span>Product-specific boundaries</span></div>
            <div className="legal-sidebar__item"><Mail size={17} /><a href={`mailto:${supportEmail}`}>{supportEmail}</a></div>
            <Link href={page.companionHref} className="legal-companion">{page.companionLabel}<ArrowUpRight size={16} /></Link>
          </aside>

          <article className="legal-document">
            <Streamdown>{page.document}</Streamdown>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
