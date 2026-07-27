// Design reminder: The supplied Silara Network wordmark is the primary asset. Preserve it intact on a crisp white lockup panel.
import { Link } from "wouter";

const logoUrl = "/manus-storage/silara-marketing-network-logo_a8ad4022.webp";

export default function BrandLogo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className={`brand-logo ${light ? "brand-logo--on-dark" : ""}`} aria-label="Silara Marketing home">
      <span className="brand-logo__lockup">
        <img src={logoUrl} alt="Silara Marketing network logo" className="brand-logo__wordmark" />
      </span>
    </Link>
  );
}
