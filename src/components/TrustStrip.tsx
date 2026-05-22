import React from 'react';

const ShieldIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3 4 6v6c0 4.5 3.5 8 8 9 4.5-1 8-4.5 8-9V6l-8-3Z"/>
    <path d="m9 12 2.5 2.5L16 10"/>
  </svg>
);
const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m5 12 5 5L20 7"/>
  </svg>
);
const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9"/>
    <path d="M12 7v5l3.5 2"/>
  </svg>
);
const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m12 3 2.7 5.7 6.3.9-4.6 4.4 1.1 6.2L12 17.3 6.5 20.2l1.1-6.2L3 9.6l6.3-.9L12 3Z"/>
  </svg>
);

const items = [
  { icon: <ShieldIcon />, title: 'Autorizat ANRE și ISCIR', sub: 'verificabile la cerere' },
  { icon: <CheckIcon />,  title: 'Garanție scrisă 2 ani',  sub: 'la fiecare lucrare' },
  { icon: <ClockIcon />,  title: 'Ajung în aceeași zi',    sub: 'luni–sâmbătă, în program' },
  { icon: <StarIcon />,   title: '4.9 stele pe Google',   sub: 'din 320+ recenzii' },
];

const TrustStrip: React.FC = () => (
  <div className="trust-strip">
    <div className="container">
      <div className="trust-strip__grid">
        {items.map((item, i) => (
          <div key={i} className="trust-strip__item">
            <div className="trust-strip__icon">{item.icon}</div>
            <div>
              <div className="trust-strip__title">{item.title}</div>
              <div className="trust-strip__sub">{item.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TrustStrip;
