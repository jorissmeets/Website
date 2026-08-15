import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <a className="footer-brand" href="/#top" aria-label="Carecogni home">
          <Image
            src="/assets/carecogni-mark-light.svg"
            width={269}
            height={138}
            unoptimized
            alt="Carecogni"
          />
        </a>
        <div className="footer-col">
          <h2>Contact</h2>
          <a href="mailto:hello@carecogni.com">hello@carecogni.com</a>
          <span>© 2026 Carecogni</span>
          <a href="/privacy">Privacy statement</a>
          <a
            href="https://cdn.prod.website-files.com/674d8291dcdcdd14e4b0c4ec/6908bc537b5cd2f0b1637991_Algemene%20Voorwaarden%20Carecogni%20BV.pdf"
            rel="noreferrer"
            target="_blank"
          >
            Algemene voorwaarden ↗
          </a>
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
