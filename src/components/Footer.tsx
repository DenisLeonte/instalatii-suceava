import React from 'react';

const PHONE = '+40742634550';
const PHONE_DISPLAY = '0742 634 550';
const EMAIL = 'catalin.leonte@icloud.com';

const BrandMark = () => (
  <svg width="34" height="34" viewBox="0 0 40 40" aria-hidden="true">
    <circle cx="20" cy="20" r="18" fill="var(--brand)"/>
    <path
      d="M24.5 12.5a4 4 0 0 1 5.4 5.4l-2.4-2.4-1.4.4-.4 1.4 2.4 2.4a4 4 0 0 1-5.4-5.4Z M22.4 18.6 13 28l-2-2 9.4-9.4"
      fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
    />
  </svg>
);

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__inner">
        <div className="footer__grid">
          <div className="footer__brand">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
              <BrandMark />
              <div>
                <span className="footer__brand-name">Instalații Suceava</span>
                <span className="footer__tagline">Sanitare · Termice · Climatizare</span>
              </div>
            </div>
            <p className="footer__desc">
              Instalator autorizat ANRE și ISCIR în Suceava. Sanitare, termice, aer condiționat,
              climatizare industrială și sisteme de filtrare a apei — cu garanție scrisă la fiecare lucrare.
            </p>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Servicii</h4>
            <ul>
              <li><a href="#servicii">Instalații sanitare</a></li>
              <li><a href="#servicii">Centrale termice</a></li>
              <li><a href="#servicii">Aer condiționat</a></li>
              <li><a href="#servicii">Climatizare industrială</a></li>
              <li><a href="#servicii">Sisteme de filtrare</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Companie</h4>
            <ul>
              <li><a href="#despre">Despre mine</a></li>
              <li><a href="#lucrari">Lucrări recente</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Contact</h4>
            <ul>
              <li><a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a></li>
              <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
              <li><span style={{ fontSize: 14, color: 'var(--muted)' }}>Suceava, jud. Suceava</span></li>
              <li><span style={{ fontSize: 14, color: 'var(--muted)' }}>L–S · 7:00 – 20:00</span></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <div>© 2003–{new Date().getFullYear()} Instalații Suceava</div>
          <div className="footer__legal">
            <span>Termeni</span>
            <span>Confidențialitate</span>
            <span>GDPR</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
