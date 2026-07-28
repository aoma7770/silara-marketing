// Design reminder: the header should feel like an institutional portfolio index—clear, compact, and conversion-led.
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import BrandLogo from "./BrandLogo";
import { productList } from "@/data/site";
import type { ExternalPageCta } from "./PageShell";

export default function SiteHeader({ externalCta }: { externalCta?: ExternalPageCta }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setProductsOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <header className={`site-header ${scrolled || location !== "/" ? "site-header--solid" : ""}`}>
        <div className="container site-header__inner">
          <BrandLogo light />

          <nav className="desktop-nav" aria-label="Primary navigation">
            <div className="nav-products">
              <button
                type="button"
                className="nav-link"
                aria-expanded={productsOpen}
                onClick={() => setProductsOpen((open) => !open)}
              >
                Solutions <ChevronDown size={15} aria-hidden="true" />
              </button>
              {productsOpen && (
                <div className="product-menu">
                  <div className="product-menu__intro">
                    <span>Silara portfolio</span>
                    <strong>Focused systems. One accountable partner.</strong>
                  </div>
                  <div className="product-menu__list">
                    {productList.map((product) => (
                      <Link href={product.slug} className="product-menu__item" key={product.key}>
                        <span style={{ background: product.accent }}>{product.index}</span>
                        <div><strong>{product.name}</strong><small>{product.category}</small></div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link className="nav-link" href="/who-we-help">Who we help</Link>
            <Link className="nav-link" href="/about">About</Link>
            <Link className="nav-link" href="/resources">Resources</Link>
          </nav>

          <div className="site-header__actions">
            <a className="header-email" href="mailto:support@silaramarketing.com.au">Email us</a>
            {externalCta ? <a className="button button--gold button--small" href={externalCta.href}>See how it works</a> : <Link className="button button--gold button--small" href="/book-demo">Schedule a call</Link>}
            <button className="menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label="Toggle navigation">
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <div className="container">
              <span className="mobile-nav__label">Solutions</span>
              {productList.map((product) => <Link key={product.key} href={product.slug}>{product.name}<small>{product.status}</small></Link>)}
              <Link href="/who-we-help">Who we help</Link>
              <Link href="/about">About Silara</Link>
              <Link href="/resources">Resources</Link>
              <Link href="/contact">Contact</Link>
              {externalCta ? <a className="button button--gold" href={externalCta.href}>See how it works</a> : <Link className="button button--gold" href="/book-demo">Schedule a call</Link>}
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
