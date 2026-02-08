import React from 'react';

const values = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
    ),
    title: 'Calitate garantata',
    desc: 'Folosim doar materiale de cea mai buna calitate si respectam standardele europene.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    ),
    title: 'Promptitudine',
    desc: 'Respectam termenele si intervenim rapid atunci cand aveti nevoie de noi.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
    title: 'Echipa profesionista',
    desc: 'Instalatorii nostri sunt calificati, cu experienta vasta in domeniu.',
  },
];

const About: React.FC = () => (
  <section id="despre" className="about">
    <div className="container">
      <div className="section-header">
        <span className="section-label">Despre noi</span>
        <h2 className="section-title">Partenerul dumneavoastra de incredere</h2>
        <p className="section-subtitle">
          Cu peste un deceniu de experienta in domeniul instalatiilor, echipa noastra
          ofera servicii complete de instalatii sanitare, termice si climatizare
          in Suceava si imprejurimi.
        </p>
      </div>

      <div className="about__content">
        <div className="about__text">
          <p>
            <strong>Instalatii Suceava</strong> este o companie dedicata confortului
            dumneavoastra. De la proiectare la executie, ne ocupam de toate aspectele
            instalatiilor dintr-o locuinta, bloc de apartamente sau spatiu comercial.
          </p>
          <p>
            Ne mandrim cu atentia la detalii, comunicarea transparenta cu clientii
            si solutiile personalizate pentru fiecare proiect. Fie ca este vorba
            de o renovare completa sau de o reparatie urgenta, suntem aici sa va ajutam.
          </p>
        </div>

        <div className="about__values">
          {values.map((v, i) => (
            <div className="about__value" key={i}>
              <div className="about__value-icon">{v.icon}</div>
              <div>
                <h3 className="about__value-title">{v.title}</h3>
                <p className="about__value-desc">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
