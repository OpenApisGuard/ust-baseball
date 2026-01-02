
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import AIScout from './components/AIScout';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-red-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <About />
        <AIScout />
      </main>
      <Footer />
    </div>
  );
}

export default App;
