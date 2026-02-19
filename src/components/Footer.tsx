import React from 'react';
import logo from '../assets/logo.png';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo-row">
              <img src={logo} alt="Instalații Suceava" className="footer__logo" />
              <div>
                <span className="footer__name">Instalații <span>Suceava</span></span>
                <p className="footer__tagline">Confort pentru casa ta</p>
              </div>
            </div>
            <p className="footer__desc">
              Servicii profesionale de instalații sanitare, termice și climatizare
              în Suceava și împrejurimi.
            </p>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Servicii</h4>
            <ul>
              <li><a href="#servicii">Instalații sanitare</a></li>
              <li><a href="#servicii">Soluții termice</a></li>
              <li><a href="#servicii">Climatizare & AC</a></li>
              <li><a href="#portofoliu">Portofoliu</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Navigare</h4>
            <ul>
              <li><a href="#acasa">Acasă</a></li>
              <li><a href="#despre">Despre noi</a></li>
              <li><a href="#experienta">Experiență</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Contact</h4>
            <ul>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <a href="tel:+40 742 634 550">+40 742 634 550</a>
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <a href="mailto:catalin.leonte@icloud.com">catalin.leonte@icloud.com</a>
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                Suceava, România
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {year} Instalații Suceava. Toate drepturile rezervate.</p>
        </div>

        <div className="footer__credit">
          <p>Îți place acest site? Contactează-ne la <a href="mailto:denistechs@gmail.com">denistechs@gmail.com</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
