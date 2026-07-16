// Design reminder: every page inherits the same parent-brand frame so product colour differences feel intentional, not disconnected.
import type { PropsWithChildren } from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function PageShell({ children }: PropsWithChildren) {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </div>
  );
}

