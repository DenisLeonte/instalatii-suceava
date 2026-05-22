import React, { useState, useEffect } from 'react';

const PHONE = '+40742634550';
const PHONE_DISPLAY = '0742 634 550';
const EMAIL = 'catalin.leonte@icloud.com';

const navLinks = [
  { href: '#servicii', label: 'Servicii' },
  { href: '#lucrari', label: 'Lucrări' },
  { href: '#despre', label: 'Despre' },
  { href: '#contact', label: 'Contact' },
];

const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/>
  </svg>
);
const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2"/>
    <path d="m3 7 9 6 9-6"/>
  </svg>
);
const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9"/>
    <path d="M12 7v5l3.5 2"/>
  </svg>
);
const MapPinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12Z"/>
    <circle cx="12" cy="9" r="2.5"/>
  </svg>
);

const BrandMark = () => (
  <svg className="header__logo-mark" viewBox="0 0 40 40" aria-hidden="true">
    <circle cx="20" cy="20" r="18" fill="var(--brand)"/>
    <path
      d="M24.5 12.5a4 4 0 0 1 5.4 5.4l-2.4-2.4-1.4.4-.4 1.4 2.4 2.4a4 4 0 0 1-5.4-5.4Z M22.4 18.6 13 28l-2-2 9.4-9.4"
      fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
    />
  </svg>
);

const UtilityBar: React.FC = () => (
  <div className="utility-bar">
    <div className="container">
      <div className="utility-bar__inner">
        <div className="utility-bar__left">
          <span className="utility-bar__item">
            <MapPinIcon /> Suceava &amp; județul
          </span>
          <span className="utility-bar__sep">·</span>
          <span className="utility-bar__item">
            <ClockIcon /> Luni–Sâmbătă · 7:00 – 20:00
          </span>
        </div>
        <div className="utility-bar__right">
          <span className="utility-bar__item">
            <MailIcon /> {EMAIL}
          </span>
          <a href={`tel:${PHONE}`} className="utility-bar__phone">
            <PhoneIcon /> {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const close = () => setMobileOpen(false);

  return (
    <>
      <UtilityBar />
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <a href="#acasa" className="header__logo" aria-label="Instalații Suceava">
              <BrandMark />
              <div>
                <span className="header__brand-name">Instalații Suceava</span>
                <span className="header__brand-tagline">Sanitare · Termice · Climatizare</span>
              </div>
            </a>

            <nav className="header__nav" aria-label="Navigare principală">
              {navLinks.map(l => (
                <a key={l.href} href={l.href}>{l.label}</a>
              ))}
            </nav>

            <a href={`tel:${PHONE}`} className="btn btn--brand header__cta">
              <PhoneIcon /> {PHONE_DISPLAY}
            </a>

            <button
              className={`header__burger${mobileOpen ? ' header__burger--open' : ''}`}
              onClick={() => setMobileOpen(v => !v)}
              aria-label={mobileOpen ? 'Închide meniul' : 'Deschide meniul'}
              aria-expanded={mobileOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav className="header__mobile-nav" aria-label="Meniu mobil">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
            ))}
            <a href={`tel:${PHONE}`} className="btn btn--brand header__mobile-cta" onClick={close}>
              <PhoneIcon /> {PHONE_DISPLAY}
            </a>
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
