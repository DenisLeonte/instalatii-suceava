import React from 'react';

const services = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v6" /><path d="M12 22v-4" /><path d="M6 8h12l-2 10H8Z" /><circle cx="12" cy="20" r="2" />
      </svg>
    ),
    title: 'Instalatii sanitare',
    desc: 'Montaj si reparatii pentru toata gama de instalatii sanitare: alimentare cu apa, canalizare, obiecte sanitare, baterii si accesorii.',
    items: ['Alimentare apa rece/calda', 'Canalizare si scurgere', 'Montaj obiecte sanitare', 'Reparatii si depanari'],
    accent: 'navy' as const,
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 12c0-3 2.5-6 2.5-6S17 6 17 9c0 1.5-.6 2.8-1.5 3.7" />
        <path d="M12 12c0-3-2.5-6-2.5-6S7 6 7 9c0 1.5.6 2.8 1.5 3.7" />
        <path d="M12 12v10" /><path d="M4 22h16" />
        <rect x="3" y="14" width="18" height="4" rx="1" />
      </svg>
    ),
    title: 'Solutii termice',
    desc: 'Sisteme de incalzire eficiente: radiatoare, incalzire in pardoseala, calorifere, centrale termice si instalatii de distributie.',
    items: ['Montaj radiatoare', 'Incalzire in pardoseala', 'Instalare centrale termice', 'Distributie si echilibrare'],
    accent: 'orange' as const,
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h4" /><path d="M18 12h4" /><path d="M12 2v4" /><path d="M12 18v4" />
        <path d="m4.93 4.93 2.83 2.83" /><path d="m16.24 16.24 2.83 2.83" />
        <path d="m19.07 4.93-2.83 2.83" /><path d="m7.76 16.24-2.83 2.83" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    title: 'Climatizare & AC',
    desc: 'Montaj, intretinere si reparatii aer conditionat. Solutii de racire pentru locuinte, birouri si spatii comerciale.',
    items: ['Montaj aer conditionat', 'Intretinere periodica', 'Reparatii si incarcare freon', 'Sisteme VRF/VRV'],
    accent: 'blue' as const,
  },
];

const Services: React.FC = () => (
  <section id="servicii" className="services">
    <div className="container">
      <div className="section-header">
        <span className="section-label">Ce oferim</span>
        <h2 className="section-title">Serviciile noastre</h2>
        <p className="section-subtitle">
          Acoperim intreaga gama de instalatii pentru constructii &mdash;
          de la apa si canalizare la incalzire si racire.
        </p>
      </div>

      <div className="services__grid">
        {services.map((s, i) => (
          <article className={`services__card services__card--${s.accent}`} key={i}>
            <div className="services__card-icon">{s.icon}</div>
            <h3 className="services__card-title">{s.title}</h3>
            <p className="services__card-desc">{s.desc}</p>
            <ul className="services__card-list">
              {s.items.map((item, j) => (
                <li key={j}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {item}
                </li>
              ))}
            </ul>
            <a href="#contact" className="services__card-link">
              Solicita oferta
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
