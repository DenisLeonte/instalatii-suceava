import React from 'react';

const ArrowRIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>
  </svg>
);

const DropIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3c4 5 6 8 6 11a6 6 0 0 1-12 0c0-3 2-6 6-11Z"/>
    <path d="M9 14a3 3 0 0 0 3 3"/>
  </svg>
);
const BoilerIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="6" y="3" width="12" height="18" rx="2"/>
    <circle cx="12" cy="10" r="2.4"/>
    <path d="M9 16h2M13 16h2"/>
  </svg>
);
const SnowflakeIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2v20M4.5 7l15 10M4.5 17l15-10"/>
    <path d="M9 4l3 2 3-2M9 20l3-2 3 2"/>
    <path d="M3 9l2 3-2 3M21 9l-2 3 2 3"/>
  </svg>
);
const FactoryIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 21V11l5 3V9l5 3V8l8 5v8Z"/>
    <path d="M9 21v-4M14 21v-4M19 21v-4"/>
  </svg>
);
const FilterIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 5h16l-6 8v6l-4 1v-7Z"/>
    <path d="M9 13h6"/>
  </svg>
);
const ClockIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9"/>
    <path d="M12 7v5l3.5 2"/>
  </svg>
);

interface Service {
  icon: React.ReactNode;
  title: string;
  desc: string;
  tags: string[];
}

const services: Service[] = [
  {
    icon: <DropIcon />,
    title: 'Instalații sanitare',
    desc: 'Montez și repar țevi, baterii, lavoare, vase WC. Lucrez cu Grohe, Hansgrohe, Geberit.',
    tags: ['Baterii & robineți', 'Țevi PPR/cupru', 'Obiecte sanitare'],
  },
  {
    icon: <BoilerIcon />,
    title: 'Centrale termice și încălzire',
    desc: 'Montaj, punere în funcțiune, service și revizii anuale. Parteneri Bosch, Viessmann, Vaillant.',
    tags: ['Montaj „la cheie"', 'Revizii ISCIR', 'Pardoseală caldă'],
  },
  {
    icon: <SnowflakeIcon />,
    title: 'Aer condiționat',
    desc: 'Montaj, mutare și service pentru aparate split, multi-split sau VRF. Daikin, Mitsubishi, LG.',
    tags: ['Split & multi-split', 'Service & curățare', 'Reîncărcare freon'],
  },
  {
    icon: <FactoryIcon />,
    title: 'Climatizare industrială',
    desc: 'Sisteme VRF/VRV, rooftop, chillere — pentru spații comerciale, birouri și hale industriale.',
    tags: ['VRF / VRV', 'Rooftop', 'Chillere'],
  },
  {
    icon: <FilterIcon />,
    title: 'Sisteme de filtrare a apei',
    desc: 'Filtre, dedurizatoare, osmoză inversă — apă bună de băut sau soluție pentru toată locuința.',
    tags: ['Osmoză inversă', 'Dedurizatoare', 'Filtre pentru casă'],
  },
  {
    icon: <ClockIcon />,
    title: 'Intervenții rapide',
    desc: 'Țeavă spartă, centrală oprită, aer condiționat în avarie. Suni, vin în aceeași zi.',
    tags: ['L–S, 7–20', 'Aceeași zi'],
  },
];

const Services: React.FC = () => (
  <section id="servicii" className="services">
    <div className="container">
      <div className="services__header">
        <div>
          <span className="eyebrow">Ce fac</span>
          <h2 className="h-section services__title">
            Șase lucruri pe care le fac.<br/>
            Toate <em>cum trebuie</em>.
          </h2>
        </div>
        <p className="lede services__lede">
          De la robinet care pică la centrală termică montată „la cheie" — prețul fix
          înainte de a începe și garanție scrisă la final.
        </p>
      </div>

      <div className="services__grid">
        {services.map((s) => (
          <div key={s.title} className="services__cell">
            <div className="services__icon">{s.icon}</div>
            <div className="services__name">{s.title}</div>
            <p className="services__desc">{s.desc}</p>
            <div className="services__tags">
              {s.tags.map(t => (
                <span key={t} className="services__tag">{t}</span>
              ))}
            </div>
            <a href="#contact" className="services__link">
              Cere ofertă <ArrowRIcon />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
