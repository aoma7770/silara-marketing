// Design reminder: footer closes the institutional narrative with a clear human invitation and a disciplined portfolio index.
import { ArrowUpRight, Linkedin } from "lucide-react";
import { Link } from "wouter";
import BrandLogo from "./BrandLogo";
import { productList, supportEmail } from "@/data/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-cta">
        <div>
          <span className="eyebrow eyebrow--light">A practical next step</span>
          <h2>Tell us where the pressure is.</h2>
          <p>We’ll help you identify which Silara pathway best fits your organisation.</p>
        </div>
        <Link href="/book-demo" className="button button--gold">Schedule a call <ArrowUpRight size={17} /></Link>
      </div>

      <div className="container footer-main">
        <div className="footer-brand">
          <BrandLogo light />
          <p>Supporting Australian care providers with focused systems for responsible growth, stronger compliance, and more confident operations.</p>
          <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
          <span>Phone: [Australian contact number]</span>
          <span>Office: [Australian office location]</span>
        </div>
        <div className="footer-column">
          <strong>Products</strong>
          {productList.map((product) => <Link key={product.key} href={product.slug}>{product.name}</Link>)}
        </div>
        <div className="footer-column">
          <strong>Company</strong>
          <Link href="/about">About Silara</Link>
          <Link href="/who-we-help">Who we help</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/security">Security approach</Link>
        </div>
        <div className="footer-column">
          <strong>Legal</strong>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/cookies">Cookies</Link>
          <a href="#" aria-label="Silara Marketing on LinkedIn"><Linkedin size={18} /> LinkedIn</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Silara Marketing. All rights reserved.</span>
        <span>Australian care-provider growth and compliance systems.</span>
      </div>
    </footer>
  );
}

