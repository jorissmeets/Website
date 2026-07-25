import Link from "next/link";
import { solutions } from "../site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link className="footer-brand" href="/">
              <span className="nav-logo-dot" aria-hidden="true" />
              Carecogni
            </Link>
            <p className="footer-desc">
              Agentic AI voor de langdurige zorg. Betrouwbaar, uitlegbaar en
              direct inzetbaar voor uw zorginstelling.
            </p>
            <span className="footer-badge">
              🇳🇱 AVG-compliant · Gehost in Nederland
            </span>
          </div>

          <div className="footer-col">
            <h2>Oplossingen</h2>
            <ul>
              {solutions.map((solution) => (
                <li key={solution.slug}>
                  <Link href={`/oplossingen/${solution.slug}`}>
                    {solution.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h2>Organisatie</h2>
            <ul>
              <li>
                <Link href="/over-ons">Over ons</Link>
              </li>
              <li>
                <Link href="/cases">Cases</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h2>Contact</h2>
            <ul>
              <li>
                <a href="mailto:hello@carecogni.com">hello@carecogni.com</a>
              </li>
              <li>Europalaan 400, Utrecht</li>
              <li>
                <a
                  href="https://www.linkedin.com/company/carecogni"
                  rel="noreferrer"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Carecogni · Alle rechten voorbehouden</span>
          <span>Privacybeleid · Cookiebeleid</span>
        </div>
      </div>
    </footer>
  );
}
