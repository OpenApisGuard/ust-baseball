
import React from 'react';
import { CircleDot, Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-red-600 p-2 rounded-full">
                {/* Replaced non-existent Baseball icon with CircleDot */}
                <CircleDot className="text-white w-6 h-6" />
              </div>
              <span className="text-white font-bold text-2xl tracking-tighter uppercase font-heading">
                UST<span className="text-red-600">Baseball</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              The premier destination for elite baseball training and competition. Empowering the next generation of athletes through world-class coaching and technology.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Programs Column */}
          <div>
            <h4 className="text-lg font-bold uppercase mb-8 border-b border-red-600 inline-block pb-2">Programs</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-red-500 transition-colors">High School Travel</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Youth Academy</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Pitching Lab</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Hitting Mechanics</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Recruiting Services</a></li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-bold uppercase mb-8 border-b border-red-600 inline-block pb-2">Resources</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-red-500 transition-colors">Register for Tryouts</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Facility Rentals</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Schedule a Lesson</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-bold uppercase mb-8 border-b border-red-600 inline-block pb-2">Contact Us</h4>
            <ul className="space-y-6 text-slate-400">
              <li className="flex items-start space-x-3">
                <MapPin className="text-red-600 mt-1 flex-shrink-0" size={18} />
                <span>1234 Diamond Way,<br />Bellevue, WA 98004</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-red-600 flex-shrink-0" size={18} />
                <span>(555) 867-5309</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-red-600 flex-shrink-0" size={18} />
                <span>info@ustbaseball.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-900 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} UST Baseball Academy. All Rights Reserved. Built for Champions.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
