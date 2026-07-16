// Design reminder: Silara Gate is the institutional anchor; keep the mark visible, restrained, and paired with disciplined typography.
import { Link } from "wouter";

const logoUrl = "/manus-storage/silara-gate-logo_3036272c.png";

export default function BrandLogo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="brand-logo" aria-label="Silara Marketing home">
      <img src={logoUrl} alt="Silara Marketing architectural gate symbol" className="brand-logo__mark" />
      <span className="brand-logo__copy">
        <strong className={light ? "text-white" : "text-[var(--ink)]"}>SILARA</strong>
        <span className={light ? "text-white/60" : "text-[var(--muted-ink)]"}>MARKETING</span>
      </span>
    </Link>
  );
}

