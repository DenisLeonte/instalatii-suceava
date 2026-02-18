import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const navLinks = [
  { href: '#acasa', label: 'Acasă' },
  { href: '#despre', label: 'Despre noi' },
  { href: '#experienta', label: 'Experiență' },
  { href: '#servicii', label: 'Servicii' },
  { href: '#portofoliu', label: 'Portofoliu' },
  { href: '#contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header__inner">
        <a href="#acasa" className="header__brand" aria-label="Instalații Suceava - Acasă">
          <img src={logo} alt="Instalații Suceava Logo" className="header__logo" />
          <div className="header__brand-text">
            <span className="header__name">Instalații <span className="header__name--accent">Suceava</span></span>
            <span className="header__tagline">Confort pentru casa ta</span>
          </div>
        </a>

        <nav className={`header__nav${mobileOpen ? ' header__nav--open' : ''}`} aria-label="Navigare principală">
          {mobileOpen && (
            <div className="header__nav-brand">
              <img src={logo} alt="" className="header__logo" />
              <span className="header__name">Instalații <span className="header__name--accent">Suceava</span></span>
            </div>
          )}
          <ul className="header__links">
            {navLinks.map(link => (
              <li key={link.href}>
                <a href={link.href} className="header__link" onClick={handleNavClick}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="tel:+40 742 634 550" className="btn btn--primary header__nav-cta" onClick={handleNavClick}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Sună acum
          </a>
        </nav>

        <button
          className={`header__burger${mobileOpen ? ' header__burger--open' : ''}`}
          onClick={() => setMobileOpen(v => !v)}
          aria-label={mobileOpen ? 'Închide meniul' : 'Deschide meniul'}
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {mobileOpen && <div className="header__backdrop" onClick={() => setMobileOpen(false)} />}
    </header>
  );
};

export default Header;
