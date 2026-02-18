import React, { useState } from 'react';

import acImg1 from '../assets/aer_conditionat_1.png';
import acImg2 from '../assets/aer_conditionat_2.png';
import ventilatiImg from '../assets/ventilatie_1.png';
import calorifImg from '../assets/calorifer_1.png';
import centralaImg from '../assets/centrala_1.png';
import pardosealaImg from '../assets/pardoseala.png';
import cadaImg from '../assets/cada_1.png';
import dusImg from '../assets/dus_1.png';
import sanitarImg from '../assets/sanitar_1.jpg';
import centralaElImg from '../assets/centrala_2.png';

type Category = 'toate' | 'sanitare' | 'termice' | 'climatizare';

interface PortfolioItem {
  id: number;
  category: Exclude<Category, 'toate'>;
  title: string;
  desc: string;
  img?: string;
}

const items: PortfolioItem[] = [
  { id: 1, category: 'sanitare', title: 'Cadă de baie', desc: 'Montaj și racordare completă', img: cadaImg },
  { id: 2, category: 'sanitare', title: 'Cabină de duș', desc: 'Instalație sanitară modernă', img: dusImg },
  { id: 3, category: 'sanitare', title: 'Instalație sanitară', desc: 'Țevi și racorduri profesionale', img: sanitarImg },
  { id: 4, category: 'termice', title: 'Calorifer panou', desc: 'Montaj radiatoare oțel', img: calorifImg },
  { id: 5, category: 'termice', title: 'Centrală termică', desc: 'Montaj și punere în funcțiune', img: centralaImg },
  { id: 6, category: 'termice', title: 'Încălzire în pardoseală', desc: 'Sistem complet în șapă', img: pardosealaImg },
  { id: 7, category: 'climatizare', title: 'Aer condiționat split', desc: 'Montaj unitate interioară', img: acImg1 },
  { id: 8, category: 'climatizare', title: 'Sistem AC rezidențial', desc: 'Instalație completă apartament', img: acImg2 },
  { id: 9, category: 'climatizare', title: 'Sistem de ventilație', desc: 'Sistem de ventilație cu recuperare de căldură', img: ventilatiImg },
  { id: 10, category: 'termice', title: 'Centrală termică electrică', desc: 'Montaj și punere în funcțiune', img: centralaElImg},
  { id: 11, category: 'sanitare', title: 'Sistem de devigraj', desc: 'Sistem complet de devigraj al apei'},
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
          <h2 className="section-title">Lucrările noastre</h2>
          <p className="section-subtitle">
            Câteva dintre lucrările pe care le-am realizat. Fiecare proiect
            reflectă angajamentul nostru față de calitate și profesionalism.
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
              <div className="portfolio__item-img">
                {item.img ? (
                  <img src={item.img} alt={item.title} className="portfolio__item-photo" />
                ) : (
                  <div className="portfolio__item-placeholder">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>
                    </svg>
                    <span className="portfolio__item-placeholder-text">Fotografie în curând</span>
                  </div>
                )}
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
