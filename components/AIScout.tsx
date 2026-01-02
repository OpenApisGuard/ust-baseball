
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { getGeminiResponse } from '../services/gemini';

const AIScout: React.FC = () => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    { role: 'assistant', content: "Hi! I'm your UST AI Scout. Ask me about hitting mechanics, pitching drills, or how to prepare for the next season!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.content }]
      }));
      
      const response = await getGeminiResponse(input, history);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "I'm having trouble connecting to the scout HQ. Please try again later!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-scout" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 blur-[100px] rounded-full -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full -ml-48 -mb-48" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-red-600/20 text-red-500 px-4 py-1.5 rounded-full mb-4 border border-red-500/20">
            <Sparkles size={16} />
            <span className="text-xs font-bold uppercase tracking-widest">Next-Gen Training</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-4 tracking-tighter">
            UST AI <span className="text-red-600">SCOUT</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Get instant pro-level feedback on mechanics, drills, and mental performance from our custom-trained AI model.
          </p>
        </div>

        <div className="bg-slate-800 rounded-3xl border border-slate-700 shadow-2xl overflow-hidden flex flex-col h-[600px]">
          {/* Chat Header */}
          <div className="bg-slate-700/50 p-4 border-b border-slate-700 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-red-600 p-2 rounded-xl">
                <Bot className="text-white" size={20} />
              </div>
              <div>
                <p className="text-white font-bold text-sm">AI Scout Assistant</p>
                <div className="flex items-center space-x-1.5">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Online</p>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} items-start space-x-3`}>
                  <div className={`p-2 rounded-lg flex-shrink-0 ${msg.role === 'user' ? 'bg-red-600 ml-3' : 'bg-slate-700'}`}>
                    {msg.role === 'user' ? <User size={16} className="text-white" /> : <Bot size={16} className="text-white" />}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-red-600 text-white rounded-tr-none shadow-lg' 
                      : 'bg-slate-700 text-slate-200 rounded-tl-none border border-slate-600'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-center space-x-3 bg-slate-700/50 p-4 rounded-2xl border border-slate-600/50">
                  <Loader2 className="animate-spin text-red-500" size={18} />
                  <span className="text-slate-400 text-sm italic">Analyzing mechanics...</span>
                </div>
              </div>
            )}
          </div>

          {/* Chat Input */}
          <div className="p-4 bg-slate-700/30 border-t border-slate-700">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ex: Give me a drill to improve my bat speed..."
                className="w-full bg-slate-900 border border-slate-600 text-white pl-4 pr-12 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600/50 transition-all placeholder:text-slate-500"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 p-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-center text-[10px] text-slate-500 mt-2 uppercase tracking-widest font-bold">
              Powered by UST Baseball Proprietary Training Data
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIScout;
