import React from 'react';

const values = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
    ),
    title: 'Calitate garantată',
    desc: 'Folosesc doar materiale de cea mai bună calitate și respect standardele europene.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    ),
    title: 'Promptitudine',
    desc: 'Respect termenele și intervin rapid atunci când aveți nevoie.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
    title: 'Profesionalism',
    desc: 'Calificat și cu experiență vastă, ofer soluții corecte și de durată.',
  },
];

const About: React.FC = () => (
  <section id="despre" className="about">
    <div className="container">
      <div className="section-header">
        <span className="section-label">Despre noi</span>
        <h2 className="section-title">Partenerul dumneavoastră de încredere</h2>
        <p className="section-subtitle">
          Cu peste un deceniu de experiență în domeniul instalațiilor, vă ofer
          servicii complete de instalații sanitare, termice și climatizare
          în Suceava și împrejurimi.
        </p>
      </div>

      <div className="about__content">
        <div className="about__text">
          <p>
            Mă numesc <strong>Cătălin Leonte</strong> și mă ocup personal de fiecare
            lucrare, de la proiectare până la execuție. Instalații sanitare, termice
            sau climatizare — într-o locuință, apartament sau spațiu comercial.
          </p>
          <p>
            Pun accent pe atenția la detalii, comunicare sinceră și soluții potrivite
            fiecărui client în parte. Fie că aveți nevoie de o renovare completă
            sau de o intervenție urgentă, sunt aici să vă ajut.
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
