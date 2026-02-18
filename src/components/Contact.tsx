import React from 'react';
import mapImage from '../assets/map.png';

const Contact: React.FC = () => (
  <section id="contact" className="contact">
    <div className="container">
      <div className="section-header">
        <span className="section-label">Contact</span>
        <h2 className="section-title">Hai să discutăm</h2>
        <p className="section-subtitle">
          Aveți un proiect în minte sau aveți nevoie de o reparație urgentă?
          Contactați-ne și vă vom răspunde în cel mai scurt timp.
        </p>
      </div>

      <div className="contact__grid">
        <div className="contact__info">
          <div className="contact__card">
            <div className="contact__card-icon contact__card-icon--navy">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div>
              <h3 className="contact__card-title">Telefon</h3>
              <a href="tel:+40 742 634 550" className="contact__card-value">
                +40 742 634 550
              </a>
              <p className="contact__card-note">Disponibil Luni - Vineri</p>
            </div>
          </div>

          <div className="contact__card">
            <div className="contact__card-icon contact__card-icon--orange">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            <div>
              <h3 className="contact__card-title">Email</h3>
              <a href="mailto:catalin.leonte@icloud.com" className="contact__card-value">
                catalin.leonte@icloud.com
              </a>
              <p className="contact__card-note">Răspundem în max. 24h</p>
            </div>
          </div>

          <div className="contact__card">
            <div className="contact__card-icon contact__card-icon--blue">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div>
              <h3 className="contact__card-title">Program de lucru</h3>
              <p className="contact__card-value">Luni - Vineri: 08:00 - 18:00</p>
              <p className="contact__card-note">Sâmbătă: 09:00 - 14:00</p>
            </div>
          </div>

          <div className="contact__card">
            <div className="contact__card-icon contact__card-icon--navy">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div>
              <h3 className="contact__card-title">Locație</h3>
              <p className="contact__card-value">Suceava, România</p>
              <p className="contact__card-note">Acoperim județul Suceava</p>
            </div>
          </div>
        </div>

        <div className="contact__map">
          <img src={mapImage} alt="Harta Suceava" className="contact__map-img" />
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
