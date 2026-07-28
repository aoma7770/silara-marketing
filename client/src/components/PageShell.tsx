// Design reminder: every page inherits the same parent-brand frame so product colour differences feel intentional, not disconnected.
import type { PropsWithChildren } from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export type ExternalPageCta = { href: string; label: string; heading?: string; copy?: string };

export default function PageShell({ children, externalCta }: PropsWithChildren<{ externalCta?: ExternalPageCta }>) {
  return (
    <div className="site-shell">
      <SiteHeader externalCta={externalCta} />
      <main id="main-content">{children}</main>
      <SiteFooter externalCta={externalCta} />
    </div>
  );
}
