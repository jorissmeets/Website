"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className={`site-header${pathname === "/" ? " home-header" : ""}`}>
      <div className="container nav-inner">
        <a className="nav-logo" href="/" onClick={closeMenu} aria-label="Carecogni home">
          <Image
            src="/assets/carecogni-logo.svg"
            width={499}
            height={109}
            unoptimized
            alt="Carecogni"
          />
        </a>

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
          <a
            className={pathname === "/" ? "nav-link active" : "nav-link"}
            href="/#top"
            onClick={closeMenu}
          >
            Home
          </a>

          <a
            className="nav-link"
            href="/#werkwijze"
            onClick={closeMenu}
          >
            Oplossing
          </a>
          <a
            className="nav-link"
            href="/#cases"
            onClick={closeMenu}
          >
            Cases
          </a>
          <a
            className="nav-link"
            href="/#over-ons"
            onClick={closeMenu}
          >
            Over ons
          </a>
          <a
            className="nav-link"
            href="/#contact"
            onClick={closeMenu}
          >
            Contact
          </a>
        </nav>
        <span className="nav-language" aria-label="Taal: Nederlands">
          <span aria-hidden="true">◎</span> NL
        </span>
      </div>
    </header>
  );
}
