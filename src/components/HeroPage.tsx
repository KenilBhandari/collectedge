import { useState, useEffect } from "react";

export default function HeroPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600&display=swap');
        * { font-family: 'DM Sans', sans-serif; }
        @keyframes floatLeft {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50% { transform: translateY(-12px) rotate(-2deg); }
        }
        @keyframes floatRight {
          0%, 100% { transform: translateY(0px) rotate(1deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 20s linear infinite; }
        .fade-up-1 { animation: fadeUp 0.7s ease forwards 0.1s; opacity: 0; }
        .fade-up-2 { animation: fadeUp 0.7s ease forwards 0.3s; opacity: 0; }
        .fade-up-3 { animation: fadeUp 0.7s ease forwards 0.5s; opacity: 0; }
        .fade-up-4 { animation: fadeUp 0.7s ease forwards 0.7s; opacity: 0; }
        .cursor-blink {
          display: inline-block;
          border-right: 3px solid #2563EB;
          animation: blink 1s step-end infinite;
        }
        @keyframes blink { 50% { border-color: transparent; } }
      `}</style>

      <div className="font-[inter] min-h-screen w-full bg-[url(/main_bg.png)] bg-cover bg-blend-luminosity relative overflow-hidden">
        <div className="flex flex-col gap-y-7 max-w-full backdrop-blur-2xl bg-linear-to-tr from-sky-100 via-indigo-50 to-white">
          {/* ── NAV ── */}
          <nav className="flex items-center justify-between w-276.5 h-22.75 mx-auto mt-6">
            <div className="flex items-center justify-between w-full h-full bg-white/18 backdrop-blur-[84px] rounded-4xl p-1.5 border border-black/10">
              {/* Inner white pill containing everything */}
              <div className="flex items-center justify-between w-273.5 h-20 p-6.5 bg-white rounded-4xl backdrop-blur-3xl shadow-[0_0_54px_0_#124E8E24,inset_0_0_13px_0_#124E8E0D]">
                {/* Logo — YOUR EXISTING CODE untouched */}

                <div className="flex items-center justify-center gap-2.5">
                  <span className="bg-linear-to-r from-[#1952F1] to-[#418DF8] p-1 inline-flex items-center justify-center rounded-md">
                    <img src="/electric_logo.png" alt="" />
                  </span>
                  <span className="text-[18px] font-semibold text-black text-lg">
                    Collectedge
                  </span>
                </div>
                {/* Nav links — center */}
                <div className="flex items-center text-[18px] gap-6">
                  <a href="#" className="font-bold text-black">
                    Home
                  </a>
                  <a
                    href="#"
                    className="font-light text-[#6D6D6D] hover:text-[#0f172a] transition-colors"
                  >
                    For Lenders
                  </a>
                  <a
                    href="#"
                    className="font-light text-[#6D6D6D] hover:text-[#0f172a] transition-colors"
                  >
                    For Collection Agencies
                  </a>
                </div>

                {/* CTA */}
                <div className="w-41.5 h-11 rounded-[18px] p-1 bg-linear-to-r from-[#6095DB] to-[#1650EB] shadow-[0_4px_14px_rgba(59,130,246,0.45)]">
                  <button className="w-full h-full rounded-[18px] bg-linear-to-r from-[#1952F1] to-[#418DF8] text-white font-bold  hover:from-[#418DF8] hover:to-[#1952F1] whitespace-nowrap hover:cursor-pointer">
                    Get in touch
                  </button>
                </div>
              </div>
            </div>
          </nav>

          {/* ── HERO ── */}
          <div className=" pb-16 ">
            <div className="mx-auto px-6 flex items-center justify-between gap-12 isolate">
              {/* LEFT SIDE */}
              <div className="flex flex-col gap-8 w-72 relative z-0 ">
                <div className="w-fit h-fit -translate-x-8 rotate-[9.38deg] bg-transparent rounded-4xl z-40 border-transparent">
                  <img
                    src="operational_health.png"
                    className="rounded-2xl"
                    alt="Operational Health"
                  />
                </div>

                <div className="w-80 h-74  absolute -translate-x-8 translate-y-12 rounded-3xl  bg-white/80 mix-blend-lighten opacity-100 border border-gray-200 shadow-gray-300 shadow-2xl" />

                <div className="bg-white rounded-4xl -rotate-[5.27deg] -translate-y-7 border border-gray-100 z-30">
                  <img
                    src="AFL_services.png"
                    className="rounded-2xl"
                    alt="AFL services"
                  />
                </div>
                <div className="w-65 h-60 absolute -translate-x-7 translate-y-87 rounded-3xl  -rotate-[7deg] bg-white/80 mix-blend-lighten opacity-100 border border-gray-200 shadow-gray-300 shadow-xl" />
              </div>

              {/* CENTER CONTENT */}
              <div className="relative flex flex-col items-center text-center flex-1 min-w-0 -top-10">
                {/* Top Badge */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex -space-x-3">
                    <img
                      className="w-11 h-11 object-cover rounded-full border-2 border-white transition-transform duration-300 hover:scale-110 hover:cursor-pointer"
                      src="/avatar_1.jpg"
                      alt=""
                    />
                    <img
                      className="w-11 h-11 object-cover rounded-full border-2 border-white transition-transform duration-300 hover:scale-110 hover:cursor-pointer"
                      src="/avatar_2.jpg"
                      alt=""
                    />
                    <img
                      className="w-11 h-11 object-cover rounded-full border-2 border-white transition-transform duration-300 hover:scale-110 hover:cursor-pointer"
                      src="/avatar_3.jpg"
                      alt=""
                    />
                    <span className="w-11 h-11 flex items-center justify-center text-xs text-white rounded-full bg-[#62A6DE] font-semibold border-[3px] border-white transition-transform duration-300 hover:scale-110 hover:cursor-pointer">
                      +5K
                    </span>
                  </div>
                  <span className="font-medium text-gray-600 text-[24px] transition-all duration-300 hover:scale-105 hover:text-blue-600">
                    Businesses Rely On Collectedge
                  </span>
                </div>

                {/* Main Heading — EXACT FIGMA SPECS APPLIED */}
                <span
                  className="text-[70px] flex flex-col items-center font-semibold mt-8 leading-[70px] tracking-[-0.05em] w-full h-auto"
                  style={{ opacity: 1 }}
                >
                  {/* Line 1 */}
                  <span className="bg-[linear-gradient(106.01deg,#020218_50.33%,#1948BD_94.05%)] bg-clip-text text-transparent text-nowrap">
                    Unified Platform for Late-
                  </span>

                  {/* Line 2 */}
                  <div className="flex items-center justify-center whitespace-nowrap">
                    <span>Stage</span>

                    {/* The Styled DPD Resolution Box */}
                    <div className="flex items-center ml-6 bg-[#eff6ff]/60 relative pr-4">
                      {/* Vertical Blue Divider */}
                      <div className="relative w-[3px] h-[85px] bg-blue-500">
                        {/* The Reflection Layer */}
                        <div
                          className="absolute left-1 top-0 h-full w-[150px] pointer-events-none"
                          style={{
                            background:
                              "linear-gradient(93.66deg, rgba(25, 82, 241, 0.0931) 0%, rgba(65, 141, 248, 0) 98.87%)",
                          }}
                        />
                      </div>
                      <span className="pl-5 relative bg-[linear-gradient(106.01deg,#020218_50.33%,#1948BD_94.05%)] bg-clip-text text-transparent">
                        DPD Resolution.
                        <span className="absolute -bottom-1 right-5 w-[calc(40%-21px)] h-3">
                          <img src="scriblle.png" alt="" />
                        </span>
                      </span>
                    </div>
                  </div>
                </span>

                {/* Subtext */}
                <p className="mt-8 max-w-2xl text-gray-500 text-xl leading-relaxed">
                  Our tool is designed with agencies & collection managers in
                  mind, ensuring user-friendly experience tailored to their
                  needs.
                </p>

                {/* Buttons */}
                <div className="mt-10 flex gap-6 flex-wrap justify-center">
                  {/* PRIMARY BUTTON */}
                  <div
                    className="w-[218px] h-[64px] p-[4px] rounded-[18px] 
  bg-[linear-gradient(93.37deg,#6095DB_7.39%,#1650EB_99.35%)] 
  hover:scale-105 active:scale-95 transition-all duration-300"
                  >
                    <div
                      className="w-full h-full flex items-center justify-center gap-2 
    rounded-[14px] 
    bg-[linear-gradient(93.66deg,#1952F1_0%,#418DF8_98.87%)]"
                    >
                      <span className="text-white font-semibold text-[18px] whitespace-nowrap">
                        Get free Trial ↗
                      </span>
                    </div>
                  </div>

                  {/* SECONDARY GLASS BUTTON */}
                  <div
                    className="w-[218px] h-[64px] flex items-center justify-center 
    rounded-[18px] backdrop-blur-md 
    hover:scale-105 active:scale-95 transition-all duration-300"
                    style={{
                      background:
                        "linear-gradient(183.44deg, rgba(202,235,253,0.61) 4.45%, rgba(206,213,249,0.61) 20.94%, rgba(255,255,255,0.61) 38.74%)",
                    }}
                  >
                    <span className="text-[#0F172A] font-semibold text-[18px] whitespace-nowrap">
                      How We Work ↘
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="flex flex-col gap-8 w-72">
                <div className="bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
                  <p className="font-bold text-sm mb-2">
                    Engagement and outcomes
                  </p>
                  <div className="h-24 bg-blue-100 rounded-lg" />
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                  <p className="font-semibold text-sm">Contact One</p>
                  <p className="text-xs text-gray-400">+1 000-000-0000</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── LOGO TICKER ── */}
          <div className="mt-16 overflow-hidden">
            <p className="text-center text-gray-500 text-sm mb-6">
              Trusted by <span className="font-bold text-gray-900">4,000+</span>{" "}
              teams
            </p>
            <div className="flex gap-16 items-center animate-marquee whitespace-nowrap">
              {[
                "Northstar Co.",
                "Summit Group",
                "Vertex Labs",
                "Bluefield Inc.",
                "Pioneer Works",
                "Harbor Systems",
                "Brightline Tech",
                "Northstar Co.",
                "Summit Group",
                "Vertex Labs",
                "Bluefield Inc.",
                "Pioneer Works",
                "Harbor Systems",
                "Brightline Tech",
              ].map((logo, i) => (
                <span
                  key={i}
                  className="text-gray-300 font-semibold text-sm tracking-wide shrink-0"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}