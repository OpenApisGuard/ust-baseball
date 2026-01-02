
import React from 'react';
import { ChevronRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video/Image Background Placeholder */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-scale duration-10000"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url("https://images.unsplash.com/photo-1508344928928-7165b67de128?q=80&w=2070&auto=format&fit=crop")',
        }}
      />
      
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
        <span className="text-red-500 font-bold tracking-[0.3em] uppercase mb-4 animate-in fade-in slide-in-from-bottom duration-700">
          The Pinnacle of Amateur Baseball
        </span>
        <h1 className="text-5xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter leading-none animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
          Forging <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">Champions</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
          UST Baseball provides elite-level training, world-class coaching, and exposure for athletes ready to take their game to the next level.
        </p>
        
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
          <button className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all group">
            START YOUR JOURNEY
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="flex items-center justify-center bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-8 py-4 rounded-full text-lg font-bold border border-white/30 transition-all">
            <Play className="mr-2 fill-current" size={20} />
            WATCH HIGHLIGHTS
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-red-600 to-transparent animate-pulse" />
      </div>
    </div>
  );
};

export default Hero;
