import React from 'react';

const types = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
    ),
    title: 'Rezidential',
    desc: 'Case, vile si apartamente individuale. Instalatii complete pentru confortul familiei dumneavoastra, de la baie la bucatarie.',
    features: ['Case si vile', 'Apartamente', 'Renovari complete', 'Reparatii urgente'],
    color: 'navy' as const,
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/></svg>
    ),
    title: 'Blocuri de locuinte',
    desc: 'Experienta extinsa in blocuri de apartamente, inclusiv coloane de alimentare, distribuire si sisteme centralizate.',
    features: ['Coloane sanitare', 'Sisteme centralizate', 'Contorizare', 'Reabilitare retele'],
    color: 'blue' as const,
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg>
    ),
    title: 'Comercial & Industrial',
    desc: 'Solutii pentru spatii comerciale, birouri, hale industriale si institutii publice. Proiecte de orice complexitate.',
    features: ['Spatii comerciale', 'Birouri', 'Hale industriale', 'Institutii publice'],
    color: 'orange' as const,
  },
];

const Experience: React.FC = () => (
  <section id="experienta" className="experience">
    <div className="container">
      <div className="section-header">
        <span className="section-label">Experienta noastra</span>
        <h2 className="section-title">Proiecte diverse, rezultate excelente</h2>
        <p className="section-subtitle">
          Am lucrat in toate tipurile de cladiri, de la case individuale la blocuri
          si spatii industriale. Fiecare proiect primeste aceeasi atentie si dedicare.
        </p>
      </div>

      <div className="experience__grid">
        {types.map((t, i) => (
          <article className={`experience__card experience__card--${t.color}`} key={i}>
            <div className="experience__card-icon">{t.icon}</div>
            <h3 className="experience__card-title">{t.title}</h3>
            <p className="experience__card-desc">{t.desc}</p>
            <ul className="experience__card-features">
              {t.features.map((f, j) => (
                <li key={j}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {f}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
