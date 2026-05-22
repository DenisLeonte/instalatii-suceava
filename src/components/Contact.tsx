import React, { FormEvent } from 'react';

const PHONE = '+40742634550';
const PHONE_DISPLAY = '0742 634 550';
const EMAIL = 'catalin.leonte@icloud.com';

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/>
  </svg>
);
const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2"/>
    <path d="m3 7 9 6 9-6"/>
  </svg>
);
const MapPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12Z"/>
    <circle cx="12" cy="9" r="2.5"/>
  </svg>
);
const ArrowRIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>
  </svg>
);

const infoItems = [
  { icon: <PhoneIcon />, line1: PHONE_DISPLAY,   line2: 'L–S, 7:00 – 20:00',     href: `tel:${PHONE}` },
  { icon: <MailIcon />,  line1: EMAIL,            line2: 'răspund în 24 de ore',   href: `mailto:${EMAIL}` },
  { icon: <MapPinIcon />,line1: 'Suceava',        line2: 'jud. Suceava',           href: '#' },
];

const Contact: React.FC = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact__grid">
          <div>
            <span className="eyebrow contact__eyebrow">Hai să vorbim</span>
            <h2 className="h-section contact__title">
              Cere o ofertă.<br/>
              <em>Răspund azi.</em>
            </h2>
            <p className="contact__lede">
              Sună-mă direct dacă e urgent. Dacă nu, scrie-mi două rânduri și te caut eu.
              Răspund personal — fără secretar, fără dispecer.
            </p>

            <div className="contact__info-list">
              {infoItems.map((item) => (
                <a key={item.line1} href={item.href} className="contact__info-item">
                  <div className="contact__info-icon">{item.icon}</div>
                  <div>
                    <div className="contact__info-line1">{item.line1}</div>
                    <div className="contact__info-line2">{item.line2}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-row">
              <div className="contact__field">
                <label className="contact__label">Numele tău</label>
                <input className="contact__input" placeholder="ex. Maria Popescu" />
              </div>
              <div className="contact__field">
                <label className="contact__label">Telefon</label>
                <input className="contact__input" type="tel" placeholder="07__ ___ ___" />
              </div>
              <div className="contact__field contact__field--full">
                <label className="contact__label">Ce ai nevoie?</label>
                <select className="contact__select" defaultValue="">
                  <option value="" disabled>Alege un serviciu…</option>
                  <option>Instalații sanitare</option>
                  <option>Centrală termică / încălzire</option>
                  <option>Aer condiționat</option>
                  <option>Climatizare industrială</option>
                  <option>Sistem de filtrare a apei</option>
                  <option>Intervenție rapidă</option>
                  <option>Altceva</option>
                </select>
              </div>
              <div className="contact__field contact__field--full">
                <label className="contact__label">Adresă (oraș sau cartier)</label>
                <input className="contact__input" placeholder="ex. Suceava, Burdujeni" />
              </div>
              <div className="contact__field contact__field--full">
                <label className="contact__label">Descrie pe scurt (opțional)</label>
                <textarea className="contact__textarea" placeholder="Ce s-a întâmplat, când a început, ce ai încercat deja…" />
              </div>
            </div>

            <div className="contact__form-footer">
              <p className="contact__form-note">
                Datele tale rămân între noi. Nu trimit oferte comerciale, nu vând lista.
              </p>
              <button type="submit" className="btn btn--brand">
                Trimite cererea <ArrowRIcon />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
