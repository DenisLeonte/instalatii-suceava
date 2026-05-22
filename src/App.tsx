import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => (
  <div className="app">
    <Header />
    <main>
      <Hero />
      <TrustStrip />
      <Services />
      <WhyUs />
      <Gallery />
      <About />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;
