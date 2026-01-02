
import React from 'react';
import { Target, Users, Zap, Trophy } from 'lucide-react';

const programs = [
  {
    icon: <Users size={40} className="text-red-600" />,
    title: "Travel Teams",
    desc: "Elite competitive play against the top talent in the region and nation.",
    image: "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: <Target size={40} className="text-red-600" />,
    title: "Private Instruction",
    desc: "1-on-1 sessions focused on pitching, hitting, and fielding mechanics.",
    image: "https://images.unsplash.com/photo-1543165737-023a1a361405?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: <Zap size={40} className="text-red-600" />,
    title: "Skills Clinics",
    desc: "Specialized workshops for catching, middle infield, and base running.",
    image: "https://images.unsplash.com/photo-1562077981-4d7eafd44932?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: <Trophy size={40} className="text-red-600" />,
    title: "Summer Camps",
    desc: "Intensive 4-day camps designed to boost player performance in a fun environment.",
    image: "https://images.unsplash.com/photo-1534067783941-51c9c23eeaec?q=80&w=2070&auto=format&fit=crop"
  }
];

const Programs: React.FC = () => {
  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-red-600 font-bold uppercase tracking-widest mb-4">What We Offer</h2>
          <p className="text-4xl md:text-5xl font-black text-slate-900 uppercase">Training Programs</p>
          <div className="w-24 h-1.5 bg-red-600 mx-auto mt-6" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((p, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <div className="p-8">
                <div className="mb-4">{p.icon}</div>
                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">{p.title}</h3>
                <p className="text-slate-600 mb-6">{p.desc}</p>
                <button className="text-red-600 font-bold flex items-center group-hover:underline">
                  LEARN MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
