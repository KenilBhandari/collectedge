import { Mail, MapPin, Zap } from "lucide-react";


export default function ContactPage() {
  return (
    <>
      <style>
        {`
            @keyframes floating {
        0% { transform: translate(-0%, -0%) translateY(0px) rotate(0deg); }
        50% { transform: translate(-0%, -0%) translateY(-15px) rotate(2deg); }
        100% { transform: translate(-0%, -0%) translateY(0px) rotate(0deg); }
      }

      .animate-float-slow { animation: floating 3s ease-in-out infinite; }
      .animate-float-medium { animation: floating 5s ease-in-out infinite; }
      .animate-float-fast { animation: floating 6s ease-in-out infinite; }
          `}
      </style>

      <div className="font-sans relative overflow-x-hidden bg-linear-to-r from-[#ecf8ff] via-[rgb(245,247,255)] to-[#ecf8ff]">
        {/* CENTER LOGO */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 translate-y-6 z-[20] bg-white rounded-full w-28 h-28 flex items-center justify-center border border-white">
          <div className="bg-gradient-to-br from-blue-600 to-blue-400 rounded-md w-10 h-10 flex items-center justify-center shadow-inner">
            <Zap size={18} className="text-white fill-white" />
          </div>
        </div>
        {/* ── ENTIRE PAGE — inside the rainbow ── */}
        <div
          className="relative w-full overflow-hidden mt-24"
          style={{ height: "fit-content", minHeight: 0 }}
        >
          {/* RAINBOW LAYERS */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 mt-5 w-[115vw] h-[105vw] rounded-full pointer-events-none border-[20px] border-[#dfdfdf] blur-[8px] z-[1]" />
          <div className="absolute left-1/2 -translate-x-1/2 top-[20px] w-[110vw] h-[100vw] rounded-full pointer-events-none border-[40px] border-[#e3f2fa] blur-[12px] z-[2]" />
          <div className="absolute left-1/2 -translate-x-1/2 top-[55px] w-[105vw] h-[95vw] rounded-full pointer-events-none border-[70px] border-[#cdd6ff] blur-[35px] z-[3]" />
          <div className="absolute left-1/2 -translate-x-1/2 top-[115px] w-[98vw] h-[88vw] rounded-full pointer-events-none border-[110px] border-[#acbbff] blur-[60px] z-[4]" />
          <div className="absolute left-1/2 -translate-x-1/2 top-[200px] w-[90vw] h-[80vw] rounded-full pointer-events-none border-[140px] border-white blur-[85px] z-[5]" />
          <div className="absolute left-1/2 -translate-x-1/2 top-[300px] w-[82vw] h-[72vw] rounded-full pointer-events-none border-[180px] border-white blur-[140px] z-[6]" />

          {/* SOCIAL ICONS */}
          {/* Icon Container positioned on the Rainbow Arc */}
          <div className="absolute left-[18%] top-[10%] z-[50] animate-float-slow">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl border border-slate-100">
              {/* The Logo Image */}
              <img
                src="insta_logo.png"
                alt="Instagram"
                className="h-6 w-6 object-contain"
              />
            </div>
          </div>
          <div className="absolute left-[6%] top-[34%] z-[30] animate-float-slow">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl border border-slate-100">
              {/* The Logo Image */}
              <img
                src="fb_logo.png"
                alt="Facebook"
                className="h-6 w-6 object-contain"
              />
            </div>
          </div>
          <div className="absolute right-[18%] top-[11%] z-[30] animate-float-slow">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl border border-slate-100">
              {/* The Logo Image */}
              <img
                src="yt_logo.png"
                alt="yt"
                className="h-6 w-6 object-contain"
              />
            </div>
          </div>
          <div className="absolute right-[6%] top-[35%] z-[30] animate-float-slow">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl border border-slate-100">
              {/* The Logo Image */}
              <img
                src="X_logo.png"
                alt="X"
                className="h-6 w-6 object-contain"
              />
            </div>
          </div>

          {/* ── ALL CONTENT IN NORMAL FLOW (inside rainbow) ── */}
          <div className="relative z-[10] flex flex-col items-center">
            {/* Spacer so content starts below the logo + arc top */}
            <div className="h-20" />

            {/* Hero text */}
            <div className="text-center px-6 mt-25 pb-10">
              <p className="text-blue-600 font-bold uppercase tracking-[0.2em] text-lg mb-5">
                Contact Us
              </p>
              <h1 className="text-5xl md:text-4xl font-black text-[#0D1240] leading-tight tracking-tight max-w-2xl mx-auto mb-6">
                We also need to have contact
                <br />
                form on the website
              </h1>
              <p className="text-slate-500 font-medium max-w-md mx-auto mb-10 leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </p>
              {/* ── BUTTON SECTION ── */}
              <div className="flex items-center justify-center mt-10 relative z-[20]">
                {/* The Outer "Soft Border" Frame */}
                <div className="flex items-center justify-center w-[238px] h-[84px] rounded-[32px] border-4 border-[#00000014]">
                  {/* The Interactive Middle Layer (Handles Hover Scale & Shadow) */}
                  <button className="w-[218px] h-[64px] p-[4px] cursor-pointer rounded-[20px] ">
                    {/* The Inner Gradient Core */}
                    <div className="group w-full h-full flex items-center justify-center rounded-[16px] bg-[linear-gradient(93.66deg,#1952F1_0%,#418DF8_98.87%)]">
                      <span className="text-white font-bold text-[18px] whitespace-nowrap flex items-center gap-2">
                        Get free Trial
                        <span className="inline-block -rotate-45 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                          ➜
                        </span>
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Footer content — inside the rainbow */}
            <div className="w-full max-w-7xl  px-8 pt-10 mx-auto grid grid-cols-3 gap-0">
              <div>
                <p className="font-black text-slate-900 text-sm mb-5">
                  Navigation
                </p>
                {["Home", "For Lenders", "For Collection Agencies"].map((l) => (
                  <p
                    key={l}
                    className="text-[#6D6D6D] text-sm font-medium mb-3 cursor-pointer hover:text-blue-600 transition-colors"
                  >
                    {l}
                  </p>
                ))}
              </div>

              <div className="text-center border-x border-slate-200/60 px-6">
                <div className="inline-flex items-center gap-2 mb-3">
                  <div className="bg-blue-600 p-1.5 rounded-lg">
                    <Zap size={15} className="text-white fill-white" />
                  </div>
                  <span className="text-lg font-black tracking-tight">
                    Collectedge
                  </span>
                </div>
                <p className="text-[#6D6D6D] text-xs leading-relaxed max-w- 0px] mx-auto">
                  Our tool is designed with agencies & collection managers in
                  mind, ensuring user-friendly experience tailored to their
                  needs
                </p>
              </div>

              <div className="ml-22">
                <p className="font-black text-slate-900 text-sm mb-5">
                  Contact
                </p>
                <div className="flex items-center gap-2 text-[#6D6D6D] text-sm mb-3">
                  <Mail size={14} className="text-[#6D6D6D] shrink-0" />
                  info@letsdial.com
                </div>
                <div className="flex items-start gap-2 text-[#6D6D6D] text-sm text-nowrap">
                  <MapPin
                    size={14}
                    className="text-[#6D6D6D] shrink-0 mt-0.5"
                  />
                  Lorem Ipsum is simply dummy text of the printing
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="w-full max-w-3xl mx-auto border-t border-slate-200/60 pt-5 pb-8 text-center text-[#6D6D6D] text-xs">
              © 2024, Lorem Ipsum is simply dummy
            </div>
          </div>
        </div>
      </div>
    </>
  );
}