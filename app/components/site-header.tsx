"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { solutions } from "../site-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link className="nav-logo" href="/" onClick={closeMenu}>
          <span className="nav-logo-dot" aria-hidden="true" />
          Carecogni
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Sluit menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links${open ? " is-open" : ""}`} aria-label="Hoofdnavigatie">
          <Link
            className={pathname === "/" ? "nav-link active" : "nav-link"}
            href="/"
            onClick={closeMenu}
          >
            Home
          </Link>

          <div className="nav-item solutions-menu">
            <Link
              className={pathname.startsWith("/oplossingen") ? "nav-link active" : "nav-link"}
              href="/#oplossingen"
              onClick={closeMenu}
            >
              Oplossingen <span aria-hidden="true">⌄</span>
            </Link>
            <div className="dropdown">
              {solutions.map((solution) => (
                <Link
                  className="dropdown-item"
                  href={`/oplossingen/${solution.slug}`}
                  key={solution.slug}
                  onClick={closeMenu}
                >
                  <span className="dropdown-icon" aria-hidden="true">
                    {solution.icon}
                  </span>
                  <span className="dropdown-text">
                    <strong>{solution.shortName}</strong>
                    <span>{solution.tagline}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <Link
            className={pathname === "/cases" ? "nav-link active" : "nav-link"}
            href="/cases"
            onClick={closeMenu}
          >
            Cases
          </Link>
          <Link
            className={pathname === "/over-ons" ? "nav-link active" : "nav-link"}
            href="/over-ons"
            onClick={closeMenu}
          >
            Over ons
          </Link>
          <Link
            className={pathname === "/contact" ? "nav-link nav-cta active" : "nav-link nav-cta"}
            href="/contact"
            onClick={closeMenu}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
