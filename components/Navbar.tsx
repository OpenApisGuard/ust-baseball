
import React, { useState, useEffect } from 'react';
import { Menu, X, CircleDot } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Programs', href: '#programs' },
    { name: 'Teams', href: '#teams' },
    { name: 'AI Scout', href: '#ai-scout' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900 shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-red-600 p-2 rounded-full">
              {/* Replaced non-existent Baseball icon with CircleDot */}
              <CircleDot className="text-white w-6 h-6" />
            </div>
            <span className="text-white font-bold text-2xl tracking-tighter uppercase font-heading">
              UST<span className="text-red-600">Baseball</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-gray-300 hover:text-red-500 font-medium transition-colors duration-200 uppercase text-sm tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold transition-transform hover:scale-105">
              REGISTER NOW
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 animate-in fade-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="w-full text-center bg-red-600 text-white px-3 py-3 rounded-md font-bold mt-4">
              REGISTER NOW
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
