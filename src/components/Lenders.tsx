import type { ReactNode } from 'react';

const LandingPage = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden font-sans text-slate-900 selection:bg-indigo-100">
      {/* 1. THE ADAPTIVE BACKGROUND (Mesh Gradient) */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-[#f8fafc]">
        {/* Top Right Glow */}
        <div className="absolute -top-[10%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-indigo-100/40 to-transparent blur-[120px]" />
        <div className="absolute -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-[#D4CEF9] to-transparent blur-[120px]" />
        {/* Center Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-blue-50/50 via-white to-indigo-50/50 blur-[100px]" />
        {/* Bottom Left Glow */}
        <div className="absolute -bottom-[10%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-blue-100/30 to-transparent blur-[120px]" />

        <div className="absolute -left-[10%] w-[60%] h-[60%] rounded-full bg-linear-to-r from-[#D4CEF9] to-transparent blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-2 py-16 md:py-15">
        {/* Header Section */}
        <header className="text-center mb-12 space-y-4">
          <p className="text-[#1952F1] font-bold text-2xl ">For Lenders</p>
          <h1 className="text-5xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-[#020218] to-indigo-600 bg-clip-text text-transparent leading-[1.1]">
            We're changing the game with <br />
            complete agency management tool
          </h1>
        </header>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20 p-4 border-t border-[#0000001A] py-18 md:[&>*:nth-child(odd)]:border-r md:[&>*:nth-child(odd)]:border-[#0000001A] md:[&>*:nth-child(odd)]:pr-16">
          {/* Feature 1: Intuitive */}
          <FeatureSection
            icon={
              <img
                src="users.png"
                className="max-h-full max-w-full object-contain"
                alt="Brand"
              />
            }
            title={
              <>
                Intuitive & Agent{" "}
                <span className="text-indigo-900">Focused</span>
              </>
            }
            desc="Our tool is designed with agencies & collection managers in mind, ensuring user-friendly experience tailored to their needs"
          >
            <div className="relative  h-full flex flex-col justify-center items-start pl-8 space-y-[-15px]">
              <AgentCard
                src="gouse_agent.png"
                className=" -rotate-6 z-40 shadow-2xl"
              />
              <AgentCard
                src="cristofer_card.png"
                className=" rotate-3 -mt-3 ml-32 z-0"
              />
              <AgentCard src="martin_agent.png" className="" />
            </div>
          </FeatureSection>

          {/* Feature 2: Highly Customizable */}
          <FeatureSection
            icon={
              <img
                src="toggle_btn.png"
                className=" max-h-full max-w-full object-contain"
                alt="Brand"
              />
            }
            title="Highly Customizable"
            desc="Our tool is designed with agencies & collection managers in mind, ensuring user-friendly experience tailored to their needs"
          >
            <div className="relative h-full w-full bottom-4 items-center scale-106 flex  justify-center ">
              <img src="api_int.png" className="  object-contain" alt="Brand" />
            </div>
          </FeatureSection>

          {/* Feature 3: Driven by Data */}
          <FeatureSection
            icon={
              <img
                src="driven_logo.png"
                className=" max-h-full max-w-full object-contain"
                alt="Brand"
              />
            }
            title={
              <>
                Driven by <span className="text-indigo-900">Data</span>
              </>
            }
            desc="Our data-driven approach equips collection managers with insights to make informed & actionable decisions"
          >
            <div className="grid grid-cols-2 gap-3 h-full px-4 items-center ">
              <img
                src="interactions.png"
                className="w-full h-full object-contain scale-125 row-span-2 translate-x-4"
                alt="Brand"
              />
              <img
                src="operational_health.png"
                className="w-45 h-45 object-contain translate-x-10  translate-y-4 "
                alt="Brand"
              />
              <img
                src="add_div.png"
                className="w-full h-20 object-contain translate-x-6"
                alt="Brand"
              />
            </div>
          </FeatureSection>

          {/* Feature 4: Agency Partners */}
          <FeatureSection
            icon={
              <img
                src="search-02.png"
                className=" max-h-full max-w-full object-contain"
                alt="Brand"
              />
            }
            title={
              <>
                Discover{" "}
                <span className="text-indigo-900">Agency partners</span>
              </>
            }
            desc="Discover top-performing, tech-driven agencies designed to deliver results with minimal overhead."
          >
            <div className="relative h-full flex flex-col items-center justify-center px-4">
            
              <img
                src="AFL_services.png"
                className="w-full h-65 object-contain rotate-5 -translate-x-10"
                alt="Brand"
              />

              {/* Inquiry Box */}
              <div className="absolute bottom-12 right-4">
              <img
                src="zap.png"
                className="w-fit h-20 object-scale-down translate-x-20 translate-y-12"
                alt="Brand"
              />
              <img
                src="enquiry.png"
                className="w-full h-20 object-contain -rotate-12 -translate-x-10 translate-y-10"
                alt="Brand"
              />
              </div>
            </div>
          </FeatureSection>
        </div>
      </div>
    </div>
  );
};

// --- Reusable Sub-Components ---

type FeatureSectionProps = {
  icon: ReactNode;
  title: ReactNode;
  desc: string;
  children: ReactNode;
};

type AgentCardProps = {
  src: string;
  className?: string;
};

const FeatureSection = ({ icon, title, desc, children }: FeatureSectionProps) => (
  <div className="flex flex-col group w-full">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-1">{icon}</div>
      <h2 className="text-3xl font-semibold leading-[120%] -tracking-[5%] bg-linear-to-r from-[#020218] to-[#1948BD] bg-clip-text text-transparent ">{title}</h2>
    </div>
    <p className="text-slate-500 text-[17px] -tracking-normal leading-[36px]  mb-10 font-light">
      {desc}
    </p>
    <div className="relative h-[340px] rounded-[3rem] p-4 bg-linear-to-tr from-[#e2f6ff] to-[#ccceff] border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-sm overflow-hidden group-hover:shadow-indigo-100/50 transition-all duration-500">
      {children}
    </div>
  </div>
);

const AgentCard = ({ src, className }: AgentCardProps) => (
  <div className='h-25 flex items-center justify-center w-100'>
    <img src={src} className={`object-cover h-22 ${className}`} alt="avatar" />
  </div>
);

export default LandingPage;