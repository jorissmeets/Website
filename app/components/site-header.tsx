"use client";

import Image from "next/image";
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
    <header className={`site-header${pathname === "/" ? " home-header" : ""}`}>
      <div className="container nav-inner">
        <Link className="nav-logo" href="/" onClick={closeMenu} aria-label="Carecogni home">
          <Image
            src="/assets/carecogni-logo.svg"
            width={499}
            height={109}
            unoptimized
            alt="Carecogni"
          />
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
              Oplossingen
            </Link>
            <div className="dropdown">
              {solutions.map((solution) => (
                <Link
                  className="dropdown-item"
                  href={`/oplossingen/${solution.slug}`}
                  key={solution.slug}
                  onClick={closeMenu}
                >
                  <span className="dropdown-text">
                    <strong>{solution.shortName}</strong>
                    <span>{solution.tagline}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <Link
            className={pathname.startsWith("/cases") ? "nav-link active" : "nav-link"}
            href="/cases"
            onClick={closeMenu}
          >
            Cases
          </Link>
          <div className="nav-item about-menu">
            <Link
              className={
                pathname === "/over-ons" || pathname === "/methode"
                  ? "nav-link active"
                  : "nav-link"
              }
              href="/over-ons"
              onClick={closeMenu}
            >
              Over ons
            </Link>
            <div className="dropdown dropdown-compact">
              <Link className="dropdown-item" href="/over-ons" onClick={closeMenu}>
                <span className="dropdown-text">
                  <strong>Wie zijn wij</strong>
                  <span>Het team achter Carecogni</span>
                </span>
              </Link>
              <Link className="dropdown-item" href="/methode" onClick={closeMenu}>
                <span className="dropdown-text">
                  <strong>Onze aanpak</strong>
                  <span>Van probleem naar blijvende waarde</span>
                </span>
              </Link>
            </div>
          </div>
          <Link
            className={pathname === "/contact" ? "nav-link active" : "nav-link"}
            href="/contact"
            onClick={closeMenu}
          >
            Contact
          </Link>
        </nav>
        <span className="nav-language" aria-label="Taal: Nederlands">
          <span aria-hidden="true">◎</span> NL
        </span>
      </div>
    </header>
  );
}
