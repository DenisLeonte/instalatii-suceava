import React from 'react';

const ShieldIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3 4 6v6c0 4.5 3.5 8 8 9 4.5-1 8-4.5 8-9V6l-8-3Z"/>
    <path d="m9 12 2.5 2.5L16 10"/>
  </svg>
);
const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m5 12 5 5L20 7"/>
  </svg>
);

const stats = [
  { num: '20+',    label: 'ani în meserie',          sub: 'Atelier propriu din 2003.' },
  { num: '500+',   label: 'lucrări finalizate',       sub: 'Peste 200 de centrale montate.' },
  { num: '100%',   label: 'garanție scrisă',          sub: 'La fiecare lucrare.' },
];

const About: React.FC = () => (
  <section id="despre" className="about">
    <div className="container">
      <div className="about__grid">
        <div className="about__photo-wrap">
          <div className="photo-placeholder about__photo">
            <span className="photo-caption">Instalator · atelierul propriu, Suceava</span>
          </div>
          <div className="about__quote-card">
            <p className="about__quote-text">
              „Eu răspund la telefon. Eu vin la tine. Eu dau mâna."
            </p>
            <p className="about__quote-attr">— instalator, Suceava</p>
          </div>
        </div>

        <div className="about__content">
          <span className="eyebrow">Despre mine</span>
          <h2 className="h-section about__title">
            Un instalator local,<br/>pe care te poți baza.
          </h2>
          <div className="about__body">
            <p>
              Lucrez în Suceava din 2003, pe cont propriu — fără subcontractori, fără intermediari.
            </p>
            <p>
              Ajung la timp, las curat după mine, și nu schimb prețul pe parcurs. Atât.{' '}
              <span style={{ fontFamily: 'Lora', fontStyle: 'italic', color: 'var(--muted)' }}>
                (Restul e treabă, nu marketing.)
              </span>
            </p>
          </div>

          <div className="about__stats">
            {stats.map((s) => (
              <div key={s.label} className="about__stat">
                <div className="about__stat-num">{s.num}</div>
                <div className="about__stat-label">{s.label}</div>
                <div className="about__stat-sub">{s.sub}</div>
              </div>
            ))}
          </div>

          <div className="about__badges">
            <span className="about__badge-pill"><ShieldIcon /> Autorizat ANRE</span>
            <span className="about__badge-pill"><ShieldIcon /> Autorizat ISCIR</span>
            <span className="about__badge-pill"><CheckIcon /> CIF &amp; factură</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
