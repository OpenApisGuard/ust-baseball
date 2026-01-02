
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const points = [
    "Elite Professional Coaching Staff",
    "Data-Driven Performance Analytics",
    "College Recruitment Pathways",
    "Character-First Development Culture",
    "State-of-the-Art Training Facilities",
    "Comprehensive Nutrition & Mobility Plans"
  ];

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1544333346-601934c56857?q=80&w=2072&auto=format&fit=crop" 
                alt="Baseball Action" 
                className="w-full h-[600px] object-cover"
              />
            </div>
            {/* Stats Overlay */}
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl z-20 border-l-8 border-red-600">
              <div className="text-center">
                <p className="text-5xl font-black text-slate-900 leading-none">125+</p>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mt-2">College Commits</p>
              </div>
            </div>
            {/* Background Shape */}
            <div className="absolute -top-10 -left-10 w-full h-full bg-red-600/10 rounded-3xl z-0" />
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-red-600 font-bold uppercase tracking-widest mb-4">Our Mission</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 uppercase mb-8 tracking-tighter leading-tight">
              MORE THAN JUST <br />A BASEBALL <span className="text-red-600">ACADEMY</span>
            </h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Founded on the principles of excellence, discipline, and grit, UST Baseball represents the highest standard of youth player development in the Pacific Northwest. We don't just teach the game; we build the athlete from the ground up.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {points.map((point, idx) => (
                <div key={idx} className="flex items-center space-x-3 p-3 bg-white rounded-xl shadow-sm border border-slate-100">
                  <CheckCircle2 className="text-red-600 flex-shrink-0" size={20} />
                  <span className="text-slate-700 font-semibold text-sm">{point}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <button className="bg-slate-900 hover:bg-black text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-red-600/20">
                OUR STORY & STAFF
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
