import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Skills from './components/Skills';
import Hero from './components/Hero';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero/>
        <About/>
        <Skills/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
