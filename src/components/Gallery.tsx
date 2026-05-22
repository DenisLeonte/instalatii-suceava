import React, { useState } from 'react';
import acImg1 from '../assets/aer_conditionat_1.png';
import acImg2 from '../assets/aer_conditionat_2.png';
import centralaImg from '../assets/centrala_1.png';
import pardosealaImg from '../assets/pardoseala.png';
import calorifImg from '../assets/calorifer_1.png';
import cadaImg from '../assets/cada_1.png';
import dusImg from '../assets/dus_1.png';

const ArrowRIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>
  </svg>
);

type Cat = 'Toate' | 'Centrale' | 'AC' | 'Sanitare' | 'Industrial';

interface Tile {
  label: string;
  sub: string;
  cat: Exclude<Cat, 'Toate'>;
  img?: string;
  size: 'big' | 'wide' | 'normal';
}

const tiles: Tile[] = [
  { label: 'Centrală termică',        sub: 'Burdujeni · 2025',              cat: 'Centrale',  img: centralaImg, size: 'big' },
  { label: 'Multi-split Daikin',      sub: 'Apartament Areni · 2025',       cat: 'AC',        img: acImg2,      size: 'wide' },
  { label: 'Calorifer panou',         sub: 'Vilă Mihoveni · 2024',          cat: 'Centrale',  img: calorifImg,  size: 'normal' },
  { label: 'Pardoseală caldă',        sub: 'Casă nouă, Salcea · 2024',      cat: 'Centrale',  img: pardosealaImg, size: 'normal' },
  { label: 'Aer condiționat split',   sub: 'Apartament Suceava · 2024',     cat: 'AC',        img: acImg1,      size: 'normal' },
  { label: 'Cabină de duș',           sub: 'Renovare baie · 2024',          cat: 'Sanitare',  img: dusImg,      size: 'normal' },
  { label: 'Cadă de baie',            sub: 'Racordare completă · 2024',     cat: 'Sanitare',  img: cadaImg,     size: 'normal' },
];

const filters: Cat[] = ['Toate', 'Centrale', 'AC', 'Sanitare', 'Industrial'];

const Gallery: React.FC = () => {
  const [active, setActive] = useState<Cat>('Toate');

  return (
    <section id="lucrari" className="gallery">
      <div className="container">
        <div className="gallery__top">
          <div>
            <span className="eyebrow">Lucrări recente</span>
            <h2 className="h-section gallery__heading-title">
              Ce am făcut, <em>de văzut</em>.
            </h2>
            <p className="lede gallery__heading-lede">
              O selecție din ultimele 12 luni. Pentru fiecare lucrare am dat factură și garanție scrisă.
            </p>
          </div>
          <div className="gallery__filters">
            {filters.map(f => (
              <button
                key={f}
                className={`gallery__filter${active === f ? ' gallery__filter--active' : ''}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="gallery__grid">
          {tiles.map((t) => {
            const visible = active === 'Toate' || t.cat === active;
            return (
              <div
                key={t.label}
                className={`gallery__tile gallery__tile--${t.size}${!visible ? ' gallery__tile--faded' : ''}`}
              >
                {t.img && <img src={t.img} alt={t.label} />}
                <div className="gallery__tile-info">
                  <span className="gallery__tile-cat">{t.cat}</span>
                  <div className="gallery__tile-label">
                    <strong>{t.label}</strong>
                    <span>{t.sub}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="gallery__footer">
          <a href="#contact" className="btn btn--ghost">
            Contactează-mă pentru detalii <ArrowRIcon />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
