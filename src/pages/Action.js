import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Action() {
  const { hash } = useLocation();
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // Data for the Modals
  const serviceDetails = {
    "Reduce Plastic": "Start by using reusable bags and water bottles. Avoid single-use cutlery and switch to glass or metal containers for food storage at home.",
    "Save Water": "Fix leaky faucets immediately. Install low-flow showerheads and turn off the tap while brushing your teeth. Use a bucket to wash cars instead of a hose.",
    "Plant Trees": "You can start small with indoor plants or a balcony garden. If you have space, plant native fruit trees which help the local bird population thrive.",
    "Animal Care": "Place clean water bowls on your balcony or outside your gate. Feed birds with grains like bajra or sunflower seeds, and ensure strays have a safe, quiet spot to rest.",
    "Air Quality": "Keep indoor air-purifying plants like Snake Plants or Peace Lilies. Avoid burning trash and try to use public transport or cycles for short distances."
  };

  useEffect(() => {
    if (hash === '#volunteer-form') {
      const element = document.getElementById('volunteer-form');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="relative py-24 px-6 bg-[#f7f9f6] overflow-hidden">
      
      {/* MODAL OVERLAY */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 max-w-lg w-full shadow-2xl relative overflow-hidden border border-green-100">
            <div className="absolute top-0 left-0 w-full h-2 bg-green-600"></div>
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 text-2xl transition-colors"
            >
              ✕
            </button>
            <h3 className="text-3xl font-black text-slate-900 mb-4">{selectedService}</h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {serviceDetails[selectedService]}
            </p>
            <button 
              onClick={() => setSelectedService(null)}
              className="w-full py-4 bg-green-700 text-white font-bold rounded-2xl hover:bg-green-800 transition-all"
            >
              Got it, thanks!
            </button>
          </div>
        </div>
      )}

      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-green-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[5%] left-[-5%] w-[30%] h-[30%] bg-emerald-100/30 rounded-full blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.04]" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 80 C 40 10, 65 10, 95 80 S 150 150, 190 80' stroke='%23064e3b' fill='transparent'/%3E%3Cpath d='M30 100 C 60 30, 85 30, 115 100 S 170 170, 210 100' stroke='%23064e3b' fill='transparent'/%3E%3C/svg%3E")` }}>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-green-700/30"></span>
            <span className="text-xs font-black tracking-[0.3em] text-green-700 uppercase">Make a Difference</span>
            <span className="h-px w-8 bg-green-700/30"></span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
            Take <span className="text-green-700">Action</span>
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Click on a service below to learn how you can contribute from your own home.
          </p>
        </div>

        {/* ACTION CARDS (Now clickable) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-24">
          {[
            { title: "Reduce Plastic", icon: "♻️", desc: "Minimize single-use waste." },
            { title: "Save Water", icon: "💧", desc: "Conserve our vital resources." },
            { title: "Plant Trees", icon: "🌳", desc: "Restore local ecosystems." },
            { title: "Animal Care", icon: "🐦", desc: "Feeding birds & wildlife." },
            { title: "Air Quality", icon: "🌬️", desc: "Reduce emissions & pollution." }
          ].map((item, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedService(item.title)}
              className="group p-8 bg-white/60 backdrop-blur-md rounded-[2.5rem] border border-white shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:bg-green-700 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              <div className="text-3xl mb-6 bg-green-50 w-14 h-14 flex items-center justify-center rounded-2xl group-hover:bg-white/20 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-lg font-extrabold mb-2 text-slate-900 group-hover:text-white transition-colors">{item.title}</h3>
              <p className="text-sm text-slate-500 group-hover:text-green-50 transition-colors leading-relaxed">{item.desc}</p>
              <span className="mt-4 inline-block text-[10px] font-bold uppercase tracking-wider text-green-600 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all">
                Click for tips →
              </span>
            </div>
          ))}
        </div>

        {/* PROGRAMS & VOLUNTEER MODULES */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Active Programs Card */}
          <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden group shadow-2xl">
            <h3 className="text-3xl font-black mb-6">Our Active Programs</h3>
            <p className="text-slate-400 mb-10 text-lg leading-relaxed">
              We focus on high-impact initiatives including <span className="text-white font-medium">air pollution control</span> and 
              <span className="text-white font-medium"> animal welfare</span>.
            </p>
            <div className="space-y-5">
              {["Air Pollution Control & Monitoring", "Animal & Bird Feeding Drives", "City Cleaning & Waste Management", "Reforestation & Urban Planting"].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  </div>
                  <span className="text-slate-200 font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Join The Team Card */}
          <div id="volunteer-form" className="bg-green-700 rounded-[3rem] p-12 text-white relative shadow-2xl overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-4">Join Our Team</h3>
              <p className="mb-10 text-green-50 text-lg opacity-90">Ready to serve? Apply to become a volunteer today.</p>
              {submitted ? (
                <div className="bg-white/20 border border-white/40 p-8 rounded-2xl text-center">
                  <span className="text-4xl mb-4 block">✅</span>
                  <h4 className="text-xl font-bold text-white">Application Sent!</h4>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <input required type="text" placeholder="Full Name" className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all" />
                  <input required type="email" placeholder="Email Address" className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all" />
                  <button type="submit" className="w-full py-5 mt-4 bg-white text-green-800 font-black rounded-2xl shadow-xl hover:bg-slate-50 transition-all uppercase tracking-widest text-sm">
                    Apply as Volunteer
                  </button>
                </form>
              )}
            </div>
            <div className="absolute bottom-8 right-8 text-6xl opacity-10 pointer-events-none rotate-12">🍃</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Action;