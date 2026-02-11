import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-[#f7f9f6] flex flex-col items-center p-6 overflow-hidden">
      
      {/* PROFESSIONAL NATURE BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* Soft Organic Glows */}
        <div className="absolute top-[-5%] right-[-5%] w-[60%] h-[60%] bg-emerald-100/40 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-green-100/50 rounded-full blur-[100px]" />

        {/* Topographic Earth Lines (Subtle Texture) */}
        <div className="absolute inset-0 opacity-[0.05]" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 80 C 40 10, 65 10, 95 80 S 150 150, 190 80' stroke='%23064e3b' fill='transparent'/%3E%3Cpath d='M30 100 C 60 30, 85 30, 115 100 S 170 170, 210 100' stroke='%23064e3b' fill='transparent'/%3E%3C/svg%3E")` }}>
        </div>

        {/* Floating Leaf Silhouette (SVG) */}
        <div className="absolute top-20 left-[10%] opacity-10 rotate-12 animate-bounce [animation-duration:8s]">
          <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#064e3b" strokeWidth="1">
            <path d="M2 22C2 22 10 22 16 16C22 10 22 2 22 2C22 2 14 2 8 8C2 14 2 22 2 22Z" />
            <path d="M2 22L16 8" />
          </svg>
        </div>
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10 flex flex-col items-center w-full">
        
        {/* Importance Section */}
        <div className="max-w-4xl w-full pt-20 pb-16 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-[1px] w-8 bg-green-800/30"></div>
            <h2 className="text-sm font-bold tracking-[0.3em] text-green-800 uppercase">
              Our Only Home
            </h2>
            <div className="h-[1px] w-8 bg-green-800/30"></div>
          </div>
          
          <p className="text-3xl md:text-6xl font-light text-slate-800 leading-tight tracking-tight">
            Nature is not a place to visit. <br />
            <span className="font-semibold text-green-700 italic underline decoration-green-200 decoration-4 underline-offset-4">It is home.</span>
          </p>
          
          <p className="mt-8 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
            The Earth provides every breath we take and every drop we drink. 
            Its biological diversity is the silent engine that sustains human life, 
            offering us beauty, balance, and survival. 
          </p>
          
          <div className="mt-10 flex justify-center">
            <div className="group flex flex-col items-center gap-2">
               <span className="text-xs font-bold text-green-800/40 uppercase tracking-tighter transition-all group-hover:translate-y-1">Scroll to Act</span>
               <div className="w-px h-12 bg-gradient-to-b from-green-900/40 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Home Card */}
        <div className="max-w-3xl w-full bg-white/60 backdrop-blur-2xl rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] p-10 md:p-16 text-center border border-white/80 mb-24 relative">
          
          {/* Subtle Corner Leaf Accent */}
          <div className="absolute top-8 right-8 text-2xl opacity-20 rotate-45">🌿</div>

          <span className="inline-block px-4 py-1.5 mb-8 text-xs font-black tracking-widest text-green-700 uppercase bg-green-100/80 rounded-full border border-green-200">
            Nature Needs You
          </span>

          <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight mb-6">
            Protect Our <span className="text-green-600">Planet</span>
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto mb-10">
            Every small action counts. Join our global community in spreading 
            awareness about sustainability and driving real climate action.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => navigate("/action")}
              className="w-full sm:w-auto px-10 py-4 bg-green-700 text-white font-bold rounded-2xl shadow-xl shadow-green-900/20 hover:bg-green-800 hover:-translate-y-1 transition-all duration-300"
            >
              Get Started
            </button>
            
            <button 
              onClick={() => navigate("/about")}
              className="w-full sm:w-auto px-10 py-4 bg-white text-green-900 font-bold rounded-2xl border border-green-200 hover:bg-green-50 hover:shadow-md transition-all duration-300"
            >
              Learn More
            </button>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-green-50 pt-10">
            <div className="text-center">
              <p className="text-3xl font-black text-slate-800">10k+</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-700/60 mt-1">Trees Planted</p>
            </div>
            <div className="text-center border-l border-green-50">
              <p className="text-3xl font-black text-slate-800">5k</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-700/60 mt-1">Volunteers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;