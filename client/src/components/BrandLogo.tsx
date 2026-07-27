// Design reminder: The supplied Silara Network wordmark is the primary asset. Use transparent light/dark lockups with no panel so it belongs to the surrounding brand surface.
import { Link } from "wouter";

const lightSurfaceLogoUrl = "/manus-storage/silara-network-wordmark-transparent_7831e7cb.png";
const darkSurfaceLogoUrl = "/manus-storage/silara-network-wordmark-dark-surface_69736508.png";

export default function BrandLogo({ light = false }: { light?: boolean }) {
  const logoUrl = light ? darkSurfaceLogoUrl : lightSurfaceLogoUrl;

  return (
    <Link href="/" className={`brand-logo ${light ? "brand-logo--on-dark" : ""}`} aria-label="Silara Marketing home">
      <span className="brand-logo__lockup">
        <img src={logoUrl} alt="Silara Marketing" className="brand-logo__wordmark" />
      </span>
    </Link>
  );
}
