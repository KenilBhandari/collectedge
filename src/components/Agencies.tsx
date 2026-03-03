import React from 'react';
import { MessageSquare, LayoutGrid, Search, CheckCircle2 } from 'lucide-react';

const PixelPerfectAgencies = () => {
  return (
    <div className="relative min-h-screen w-full font-sans text-[#0a192f] selection:bg-blue-100 overflow-x-hidden">
      
      {/* BACKGROUND: Exact Figma Radial Gradient */}
    

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        
        {/* HEADER */}
        <header className="text-center mb-16 space-y-4">
           <p className="text-[#1952F1] font-bold text-2xl ">For Agencies</p>
          <h1 className="text-5xl font-bold tracking-tight text-[#111827] leading-[1.1] max-w-6xl mx-auto">
            We fuel demand and empower agencies to <br /> execute with <span className="bg-gradient-to-r from-[#020218] to-indigo-600 bg-clip-text text-transparent">unmatched efficiency and reliability.</span>
          </h1>
        </header>

        {/* PIXEL-PERFECT TABS */}
        <div className="flex justify-center mb-20">
          <div className="flex items-center gap-16 relative border-b border-slate-200/60 w-full max-w-3xl justify-center">
            <button className="pb-5 px-2 relative group">
              <span className="text-[22px] font-semibold text-[#111827] tracking-tight">
                Accelerate Business <span className="text-[#1e3a8a]">Growth</span>
              </span>
              <div className="absolute bottom-[-1px] left-0 w-full h-[3px] bg-[#2563eb] rounded-t-full shadow-[0_2px_10px_rgba(37,99,235,0.3)]" />
            </button>
            <button className="pb-5 px-2 opacity-50 hover:opacity-100 transition-opacity">
              <span className="text-[22px] font-medium text-[#1e3a8a] tracking-tight">
                Technology & Data driven <span className="italic">operations</span>
              </span>
            </button>
          </div>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* LEFT: Resolution Gauge Box */}
          <div className="relative group rounded-[3.5rem] p-1 border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden flex items-center justify-center bg-white/20 backdrop-blur-md min-h-[460px]">
             {/* Sub-card inside the box */}
             <div className="bg-white/90 p-10 rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-white w-[88%] transform transition-transform group-hover:scale-[1.01]">
                <p className="text-[17px] font-bold text-[#111827] leading-snug mb-12 max-w-[260px]">
                   Unlock more business without <span className="text-[#1e3a8a]">increasing</span> operational overhead
                </p>
                
                <div className="relative flex flex-col items-center">
                  <div className="relative w-64 h-32">
                    {/* Gauge Track */}
                    <svg viewBox="0 0 100 50" className="w-full h-full">
                      <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#E5F1F7" strokeWidth="8" strokeLinecap="round" />
                      {/* Gauge Progress */}
                      <path d="M 10 50 A 40 40 0 0 1 85 30" fill="none" stroke="#87CEEB" strokeWidth="8" strokeLinecap="round" />
                      {/* Gauge Indicator Pin */}
                      <circle cx="85" cy="30" r="4" fill="#2563eb" stroke="white" strokeWidth="2" />
                    </svg>
                  </div>
                  <div className="text-center -mt-6">
                    <h3 className="text-[44px] font-black text-[#111827]">70%</h3>
                    <p className="text-[11px] font-bold text-[#111827] mt-1">Your DPD Resolution Rate is Good</p>
                    <p className="text-[10px] text-slate-400 font-medium">Last Check on 21 Apr</p>
                  </div>
                </div>
             </div>
             {/* Decorative Background Dots */}
             <div className="absolute top-12 right-12 w-2 h-2 rounded-full bg-blue-200/50" />
             <div className="absolute bottom-12 left-12 w-3 h-3 rounded-full bg-blue-100/40" />
          </div>

          {/* RIGHT: Feature List Section */}
          <div className="flex flex-col justify-between py-2">
            <div className="space-y-5">
              <AgencyFeature 
                icon={<MessageSquare className="w-5 h-5 text-blue-500 fill-blue-50" />} 
                text="Get more volume in your serviceable pincodes" 
              />
              <AgencyFeature 
                icon={<LayoutGrid className="w-5 h-5 text-blue-600" />} 
                text="Manage all allocations on a single tool allowing you to maximize resource utilization." 
              />
              <AgencyFeature 
                icon={<Search className="w-5 h-5 text-blue-500" />} 
                text="Discover pincodes with high potential to expand your serviceability" 
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const AgencyFeature = ({ icon, text }:any) => (
  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-[2rem] border border-white shadow-[0_8px_25px_rgba(0,0,0,0.02)] flex items-center gap-6 group hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300">
    <div className="w-14 h-14 rounded-2xl bg-white border border-slate-50 shadow-sm flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
      {icon}
    </div>
    <p className="text-[15px] font-bold text-[#111827] leading-relaxed">
      {text}
    </p>
  </div>
);

export default PixelPerfectAgencies;