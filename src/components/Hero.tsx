import React from 'react';

const PHONE = '+40742634550';
const PHONE_DISPLAY = '0742 634 550';

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/>
  </svg>
);
const ArrowRIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>
  </svg>
);
const ShieldIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3 4 6v6c0 4.5 3.5 8 8 9 4.5-1 8-4.5 8-9V6l-8-3Z"/>
    <path d="m9 12 2.5 2.5L16 10"/>
  </svg>
);
const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true">
    <path d="m12 3 2.7 5.7 6.3.9-4.6 4.4 1.1 6.2L12 17.3 6.5 20.2l1.1-6.2L3 9.6l6.3-.9L12 3Z"/>
  </svg>
);

const Hero: React.FC = () => (
  <section id="acasa" className="hero">
    <div className="container">
      <div className="hero__grid">
        <div className="hero__content">
          <span className="pill">
            <ShieldIcon /> Recomandat de suceveni din 2003
          </span>

          <h1 className="h-display hero__title">
            Instalații sanitare<br/>
            și <em>termice de încredere</em>,<br/>
            de peste 20 de ani.
          </h1>

          <p className="lede hero__lede">
            Instalator autorizat ANRE și ISCIR în Suceava. Devize gratuite, garanție scrisă pentru
            fiecare lucrare și intervenții rapide în tot județul. Program: luni–sâmbătă, de la ora 7.
          </p>

          <div className="hero__actions">
            <a href={`tel:${PHONE}`} className="btn btn--brand btn--lg">
              <PhoneIcon /> Sună · {PHONE_DISPLAY}
            </a>
            <a href="#contact" className="btn btn--ghost btn--lg">
              Cere o ofertă <ArrowRIcon />
            </a>
          </div>

          <div className="hero__rating">
            <span className="stars">
              {[1,2,3,4,5].map(i => <StarIcon key={i} />)}
            </span>
            <div className="hero__rating-text">
              <b>4.9 / 5</b>
              <span> · 320+ recenzii Google</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="photo-placeholder hero__photo">
            <span className="photo-caption">Instalator · Suceava, 2024</span>
          </div>
          <div className="hero__badge" aria-hidden="true">
            <span className="hero__badge-num">20+</span>
            <span className="hero__badge-label">ani</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
