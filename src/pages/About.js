import React, { useState } from 'react';

function About() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const stories = [
    {
      title: "The Humpback Shield",
      author: "Nan Hauser",
      text: "In 2017, marine biologist Nan Hauser was shielded by a 50,000-pound humpback whale. The whale tucked her under its pectoral fin and even lifted her out of the water to protect her from an approaching 15-foot tiger shark."
    },
    {
      title: "The Tsunami Elephant",
      author: "Amber Owen",
      text: "During the 2004 Indian Ocean tsunami, a young girl named Amber was saved by an elephant named Ning Nong. The elephant sensed the receding tide was dangerous, took Amber on its back, and ran for high ground just before the wave hit."
    },
    {
      title: "The Gorilla Guardian",
      author: "Levan Merritt",
      text: "In 1986, a 5-year-old fell into a gorilla enclosure. Jambo, a silverback, stood guard over the unconscious boy, stroking his back and keeping other younger gorillas away until rescuers could reach him."
    },
    {
      title: "The Dolphin Circle",
      author: "Rob Howes",
      text: "While swimming in New Zealand, a group of lifeguards was surrounded by a pod of bottlenose dolphins. The dolphins circled them tightly and slapped the water. They were creating a barrier against a Great White shark lurking nearby."
    },
    {
      title: "The Tree of Life",
      author: "Unnamed Survivor",
      text: "During the catastrophic flooding in Mozambique, a woman survived for days by climbing an ancient Baobab tree. The tree provided a stable sanctuary above the rising currents until helicopters could arrive for the rescue."
    }
  ];

  return (
    <section className="relative py-24 px-6 bg-[#f7f9f6] overflow-hidden">
      
      {/* SIDE DRAWER MODAL */}
      <div 
        className={`fixed inset-0 z-[100] transition-opacity duration-500 ${
          isDrawerOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
          onClick={() => setIsDrawerOpen(false)}
        />
        
        {/* Sliding Panel */}
        <div 
          className={`absolute top-0 right-0 h-full w-full max-w-lg bg-white shadow-2xl transition-transform duration-500 ease-out p-8 overflow-y-auto ${
            isDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-2xl font-black text-green-800 tracking-tight">Nature's Heroes</h3>
            <button 
              onClick={() => setIsDrawerOpen(false)}
              className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center hover:bg-green-100 transition-colors"
            >
              ✕
            </button>
          </div>

          <div className="space-y-10">
            {stories.map((story, index) => (
              <div key={index} className="group border-b border-green-50 pb-8 last:border-0">
                <span className="text-xs font-bold text-green-600 uppercase tracking-widest">Story {index + 1}</span>
                <h4 className="text-xl font-bold text-slate-900 mt-2 group-hover:text-green-700 transition-colors">
                  {story.title}
                </h4>
                <p className="text-slate-600 mt-4 leading-relaxed italic">"{story.text}"</p>
                <p className="text-sm font-bold text-slate-400 mt-4">— {story.author}</p>
              </div>
            ))}
          </div>

          <button 
            onClick={() => setIsDrawerOpen(false)}
            className="w-full mt-8 py-4 bg-green-700 text-white font-bold rounded-2xl hover:bg-green-800 transition-all"
          >
            Close Stories
          </button>
        </div>
      </div>

      {/* NATURE BACKGROUND LAYER (SVG & Glows) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[45%] bg-green-200/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-emerald-200/20 rounded-full blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.05]" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 80 C 40 10, 65 10, 95 80 S 150 150, 190 80' stroke='%2315803d' fill='transparent'/%3E%3Cpath d='M30 100 C 60 30, 85 30, 115 100 S 170 170, 210 100' stroke='%2315803d' fill='transparent'/%3E%3C/svg%3E")` }}>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Gallery Side */}
          <div className="grid grid-cols-2 gap-6 relative">
            <div className="absolute -inset-4 bg-green-100/50 rounded-[4rem] -z-10 rotate-3"></div>
            <div className="col-span-2 overflow-hidden rounded-[2.5rem] shadow-2xl shadow-green-900/10 group">
              <img 
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1000" 
                alt="Ancient forest canopy" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="overflow-hidden rounded-[2rem] shadow-xl shadow-green-900/5 group">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=600" 
                alt="Hands planting a sapling" 
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="overflow-hidden rounded-[2rem] shadow-xl shadow-green-900/5 group">
              <img 
                src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=600" 
                alt="Mountain landscape" 
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 text-5xl animate-bounce [animation-duration:5s] opacity-20">🍃</div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3">
              <span className="w-10 h-[1px] bg-green-600/40"></span>
              <span className="px-4 py-1.5 bg-green-100/80 text-green-800 text-xs font-black uppercase tracking-[0.2em] rounded-full border border-green-200">
                Our Legacy
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1]">
              Celebrating the <br />
              <span className="text-green-700 italic font-serif">Unrivaled Beauty</span> <br />
              of Our World.
            </h2>

            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
              <p>
                This Earth Awareness platform is dedicated to the profound beauty of our landscapes. 
                We believe that by sharing the stories of our wilderness, we inspire a deeper 
                commitment to take care of nature in its purest form.
              </p>
              
              <div className="bg-white/50 backdrop-blur-sm border-l-4 border-green-600 p-6 rounded-r-2xl shadow-sm">
                <p className="italic font-medium text-slate-800">
                  Through education on climate change and sustainable practices, we turn 
                  appreciation into action—planting the seeds for a resilient, eco-friendly future.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <button 
                onClick={() => setIsDrawerOpen(true)}
                className="group flex items-center gap-4 px-2 py-1 text-lg font-bold text-green-700 hover:text-green-900 transition-colors"
              >
                <span className="relative">
                  Read All Stories 
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </span>
                <div className="w-10 h-10 rounded-full border border-green-200 flex items-center justify-center group-hover:bg-green-700 group-hover:text-white transition-all">
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;