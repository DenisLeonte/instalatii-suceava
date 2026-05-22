import React from 'react';

const items = [
  {
    n: '01',
    title: 'Vin pe recomandare',
    desc: 'Opt din zece clienți noi vin pe baza unei recomandări — vecin, rudă sau coleg de muncă. Nu fac reclame, fac treabă.',
  },
  {
    n: '02',
    title: 'Devize gratuite, preț fix',
    desc: 'Vin la tine, mă uit, îți dau prețul în scris. Acela rămâne prețul final — nu se schimbă pe parcurs, nu apar „surprize" la sfârșit.',
  },
  {
    n: '03',
    title: 'Vine omul tău, nu un trimis',
    desc: 'Lucrez singur, pe cont propriu. Când suni, eu răspund. Când ajung acasă la tine, tot eu vin.',
  },
  {
    n: '04',
    title: 'Mărci verificate',
    desc: 'Lucrez doar cu producători cu istoric — Bosch, Viessmann, Daikin, Grohe, Geberit. Garanție de la producător plus garanția mea pentru lucrare.',
  },
];

const WhyUs: React.FC = () => (
  <section className="why-us">
    <div className="container">
      <div className="why-us__header">
        <div>
          <span className="eyebrow why-us__eyebrow">De ce să mă alegi</span>
          <h2 className="h-section why-us__title">
            Patru lucruri pe care<br/>
            <em>le poți verifica</em>.
          </h2>
        </div>
        <p className="lede why-us__lede">
          Nu promit „cel mai mic preț din oraș". Promit că prețul stabilit la început rămâne
          prețul final, și că lucrul e făcut cum trebuie.
        </p>
      </div>

      <div className="why-us__grid">
        {items.map((it) => (
          <div key={it.n} className="why-us__item">
            <div className="why-us__num">{it.n}</div>
            <div className="why-us__item-title">{it.title}</div>
            <p className="why-us__item-desc">{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;
