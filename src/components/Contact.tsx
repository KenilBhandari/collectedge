import { Mail, MapPin, Facebook, Instagram, Youtube, Zap } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white font-sans text-slate-900 overflow-hidden flex flex-col">
      {/* --- ORBITAL & GRADIENT BACKGROUND --- */}
      <div className="absolute top-[-10%] z-0 left-1/2 -translate-x-1/2 w-[90%] h-[700px] pointer-events-none">
        {/* The Hemisphere Gradient Glow */}
        <div
          className="absolute inset-0 rounded-[100%] opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 20%, rgba(186, 215, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)",
          }}
        />

        {/* The Orbital Ellipse Line */}
        <div className="absolute -inset-30 w-[120%] h-[140%] border-[1px] bg-linear-to-r from-[#CAEBFD] via-[#ffffff] to-[#CED5F9] top-50 border-slate-100 rounded-[100%] [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]" />

        {/* --- ICONS POSITIONED ON THE ORBIT --- */}
        {/* Instagram - Top Left */}
        <div className="absolute top-[38%] left-[12%] bg-white p-2.5 rounded-full shadow-lg border border-slate-50">
          <Instagram size={20} className="text-[#E4405F]" />
        </div>

        {/* Facebook - Middle Left */}
        <div className="absolute top-[58%] left-[-2%] bg-white p-2.5 rounded-full shadow-lg border border-slate-50">
          <Facebook size={22} className="text-[#1877F2] fill-[#1877F2]" />
        </div>

        {/* Youtube - Top Right */}
        <div className="absolute top-[45%] right-[8%] bg-white p-2.5 rounded-full shadow-lg border border-slate-50">
          <Youtube size={20} className="text-[#FF0000]" />
        </div>

        {/* X (Twitter) - Middle Right */}
        <div className="absolute top-[62%] right-[-1%] bg-white p-2.5 rounded-full shadow-lg border border-slate-50">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </div>
      </div>

      {/* --- HERO CONTENT --- */}
      <header className="relative z-40 flex flex-col items-center mt-20 px-4 text-center">
        {/* Central Brand Badge */}
        <div className="p-2.5 bg-transparent">
          <img
            src="circle_zap.png"
            className=" object-cover h-25 w-25"
            alt=""
          />
        </div>

        <p className="text-[#2563EB] font-bold uppercase tracking-[0.2em] text-xs mt-12 mb-6">
          Contact Us
        </p>

        <h1 className="text-4xl md:text-6xl font-[900] bg-gradient-to-r from-[#020218] to-[#1948BD] bg-clip-text text-transparent w-4xl leading-[1.1] tracking-tight">
          We also need to have contact form on the website
        </h1>

        <p className="mt-8 text-[#6D6D6D] font-bold max-w-xl text-lg leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </p>

        <div className="mt-10 flex gap-6 flex-wrap justify-center">
          {/* PRIMARY BUTTON */}

          <div className="flex items-center justify-center w-[238px] h-[84px] rounded-3xl border-4 border-[#00000014]">
            <div className="w-[218px] h-[64px] p-[4px] rounded-[18px] ">
              <div className="w-full h-full flex items-center justify-center gap-2 rounded-[14px] bg-[linear-gradient(93.66deg,#1952F1_0%,#418DF8_98.87%)]">
                <span className="text-white font-bold text-[18px] whitespace-nowrap mr-4">
                  Get Started
                  <span className="absolute -rotate-45 ml-2">➜</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- FOOTER SECTION --- */}
      <footer className="w-full mt-auto pt-24 pb-12 px-6 max-w-7xl mx-auto z-40">
        <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-0">
          {/* Column 1: Navigation */}
          <div className="space-y-6 md:pr-10">
            <h3 className="font-black text-xl text-[#0f172a]">Navigation</h3>
            <ul className="space-y-4 text-slate-500 font-semibold">
              <li className="hover:text-blue-600 cursor-pointer transition-colors">
                Home
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors">
                For Lenders
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors">
                For Collection Agencies
              </li>
            </ul>
          </div>

          {/* Column 2: Brand & Description (With Dividers) */}
          <div className="flex flex-col items-center text-center px-10 border-x border-slate-100">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-[#2563EB] p-1.5 rounded-lg">
                <Zap size={18} className="text-white fill-white" />
              </div>
              <span className="text-2xl font-black text-[#0f172a] tracking-tighter">
                Collectedge
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-[280px]">
              Our tool is designed with agencies & collection managers in mind,
              ensuring user-friendly experience tailored to their needs
            </p>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-6 md:pl-20">
            <h3 className="font-black text-xl text-[#0f172a]">Contact</h3>
            <div className="space-y-5 text-slate-500 font-semibold">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-slate-400" />
                <span>info@letsdial.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-slate-400 mt-1 flex-shrink-0"
                />
                <span className="text-sm leading-snug">
                  Lorem Ipsum is simply dummy text of the printing
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-20 pt-8 border-t border-slate-100 text-center text-slate-400 text-sm font-medium">
          © 2024, Lorem Ipsum is simply dummy
        </div>
      </footer>
    </div>
  );
};

export default ContactSection;
