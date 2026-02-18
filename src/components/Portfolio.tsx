import React, { useState } from 'react';

type Category = 'toate' | 'sanitare' | 'termice' | 'climatizare';

interface PortfolioItem {
  id: number;
  category: Exclude<Category, 'toate'>;
  title: string;
  desc: string;
  color: string;
}

const items: PortfolioItem[] = [
  { id: 1, category: 'sanitare', title: 'Baie modernă rezidențială', desc: 'Instalație completă baie', color: '#1a3a52' },
  { id: 2, category: 'sanitare', title: 'Bucătărie apartament', desc: 'Alimentare și canalizare', color: '#245170' },
  { id: 3, category: 'termice', title: 'Încălzire în pardoseală', desc: 'Casă individuală 120mp', color: '#ff6b35' },
  { id: 4, category: 'termice', title: 'Montaj radiatoare', desc: 'Bloc de apartamente', color: '#e55a28' },
  { id: 5, category: 'climatizare', title: 'AC birou open-space', desc: 'Spațiu comercial 200mp', color: '#4da6ff' },
  { id: 6, category: 'climatizare', title: 'Sistem multi-split', desc: 'Vilă cu 4 unități', color: '#2b8ee0' },
  { id: 7, category: 'sanitare', title: 'Rețea sanitară bloc', desc: 'Reabilitare completă', color: '#1a3a52' },
  { id: 8, category: 'termice', title: 'Centrală termică', desc: 'Montaj și punere în funcțiune', color: '#ff8c5a' },
  { id: 9, category: 'climatizare', title: 'AC rezidențial', desc: 'Apartament 3 camere', color: '#7ec0ff' },
];

const filters: { key: Category; label: string }[] = [
  { key: 'toate', label: 'Toate' },
  { key: 'sanitare', label: 'Sanitare' },
  { key: 'termice', label: 'Termice' },
  { key: 'climatizare', label: 'Climatizare' },
];

const Portfolio: React.FC = () => {
  const [active, setActive] = useState<Category>('toate');

  const filtered = active === 'toate' ? items : items.filter(i => i.category === active);

  return (
    <section id="portofoliu" className="portfolio">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Portofoliu</span>
          <h2 className="section-title">Lucrările mele</h2>
          <p className="section-subtitle">
            Câteva dintre proiectele pe care le-am realizat. Fiecare lucrare
            reflectă angajamentul meu față de calitate și profesionalism.
          </p>
        </div>

        <div className="portfolio__filters" role="tablist" aria-label="Filtrează portofoliul">
          {filters.map(f => (
            <button
              key={f.key}
              role="tab"
              aria-selected={active === f.key}
              className={`portfolio__filter${active === f.key ? ' portfolio__filter--active' : ''}`}
              onClick={() => setActive(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="portfolio__grid" role="tabpanel">
          {filtered.map(item => (
            <article className="portfolio__item" key={item.id}>
              <div
                className="portfolio__item-img"
                style={{ backgroundColor: item.color }}
                role="img"
                aria-label={item.title}
              >
                <div className="portfolio__item-placeholder">
                  {item.category === 'sanitare' && (
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"><path d="M12 2v6"/><path d="M12 22v-4"/><path d="M6 8h12l-2 10H8Z"/><circle cx="12" cy="20" r="2"/></svg>
                  )}
                  {item.category === 'termice' && (
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"><path d="M12 12c0-3 2.5-6 2.5-6S17 6 17 9c0 1.5-.6 2.8-1.5 3.7"/><path d="M12 12c0-3-2.5-6-2.5-6S7 6 7 9c0 1.5.6 2.8 1.5 3.7"/><path d="M12 12v10"/><path d="M4 22h16"/><rect x="3" y="14" width="18" height="4" rx="1"/></svg>
                  )}
                  {item.category === 'climatizare' && (
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"><path d="M2 12h4"/><path d="M18 12h4"/><path d="M12 2v4"/><path d="M12 18v4"/><circle cx="12" cy="12" r="4"/></svg>
                  )}
                </div>
              </div>
              <div className="portfolio__item-info">
                <h3 className="portfolio__item-title">{item.title}</h3>
                <p className="portfolio__item-desc">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
