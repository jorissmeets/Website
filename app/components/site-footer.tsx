import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <Link className="footer-brand" href="/" aria-label="Carecogni home">
          <Image
            src="/assets/carecogni-mark-light.svg"
            width={269}
            height={138}
            alt="Carecogni"
          />
        </Link>
        <div className="footer-col">
          <h2>Contact</h2>
          <a href="mailto:hello@carecogni.com">hello@carecogni.com</a>
          <span>© 2026 Carecogni</span>
          <Link href="/privacy">Privacy statement</Link>
        </div>
        <div className="footer-col">
          <h2>Bezoek</h2>
          <p>Europalaan 400<br />3526 KS Utrecht</p>
          <a
            href="https://www.linkedin.com/company/carecogni"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
