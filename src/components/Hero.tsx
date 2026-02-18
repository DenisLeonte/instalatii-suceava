import React from 'react';

const Hero: React.FC = () => (
  <section id="acasa" className="hero">
    <div className="hero__bg">
      <div className="hero__gradient" />
      <div className="hero__pattern" />
    </div>

    <div className="hero__inner">
      <div className="hero__badge">Servicii profesionale în Suceava</div>

      <h1 className="hero__title">
        Instalații sanitare,
        <br />
        <span className="hero__title--accent">termice</span> &{' '}
        <span className="hero__title--blue">climatizare</span>
      </h1>

      <p className="hero__subtitle">
        Vă ofer soluții complete pentru confortul casei și afacerii dumneavoastră.
        De la instalații sanitare la sisteme de încălzire și răcire &mdash;
        calitate, promptitudine și prețuri corecte.
      </p>

      <div className="hero__actions">
        <a href="tel:+40 742 634 550" className="btn btn--primary btn--lg">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          Sunați-mă
        </a>
        <a href="mailto:catalin.leonte@icloud.com" className="btn btn--outline btn--lg">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          Trimiteți email
        </a>
      </div>

      <div className="hero__stats">
        <div className="hero__stat">
          <span className="hero__stat-number">10+</span>
          <span className="hero__stat-label">Ani experiență</span>
        </div>
        <div className="hero__stat-divider" />
        <div className="hero__stat">
          <span className="hero__stat-number">500+</span>
          <span className="hero__stat-label">Proiecte finalizate</span>
        </div>
        <div className="hero__stat-divider" />
        <div className="hero__stat">
          <span className="hero__stat-number">100%</span>
          <span className="hero__stat-label">Clienți mulțumiți</span>
        </div>
      </div>
    </div>

    <div className="hero__scroll-hint" aria-hidden="true">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
    </div>
  </section>
);

export default Hero;
