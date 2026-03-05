export default function HeroPage() {
  const logos = [
  "brand_1.png",
  "brand_2.png",
  "brand_3.png",
  "brand_4.png",
  "brand_5.png",
  "brand_6.png",
];

  return (
    <>
      <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600&display=swap');

          * {
            font-family: 'Inter', sans-serif;
          }

          /* ───────── Marquee Animation ───────── */
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }

          .animate-marquee {
            animation: marquee 20s linear infinite;
          }

          /* ───────── Slow Rotate Animation ───────── */
          @keyframes slowRotate {
            0% { transform: rotate(10deg); }
            50% { transform: rotate(50deg); }
            100% { transform: rotate(10deg); }
          }

          .animate-slow-rotate {
            animation: slowRotate 3s ease-in-out infinite;
          }

                    @keyframes floating {
        0% { transform: translate(-0%, -0%) translateY(0px) rotate(0deg); }
        50% { transform: translate(-0%, -0%) translateY(-12px) rotate(8deg); }
        100% { transform: translate(-0%, -0%) translateY(0px) rotate(0deg); }
      }

      .animate-float-slow { animation: floating 2s ease-in-out infinite; }

          /* ───────── Text Fill Animations ───────── */
          @keyframes fill-selection {
            0% { width: 0; }
            100% { width: 100%; }
          }

          @keyframes text-fill {
            0% { background-position: 100% 0; }
            100% { background-position: 0% 0; }
          }

          @keyframes scribble-reveal {
            0% { transform: translateX(-100%); }
            60% { transform: translateX(-100%); } /* Wait for text fill */
            100% { transform: translateX(0); }
          }

          .animate-fill-selection {
            animation: fill-selection 2.5s cubic-bezier(0.65, 0, 0.1, 1) forwards infinite;
          }

          .animate-text-fill {
            animation: text-fill 2.5s cubic-bezier(0.65, 0, 0.35, 1) forwards infinite;
          }
`}</style>

      <div className="font-[inter] min-h-screen w-full relative overflow-hidden bg-[#eef3fc]">
        {/* RAY TOP-LEFT */}
        <div className="absolute -top-60 -left-60 w-[1000px] h-[1000px] bg-[conic-gradient(from_115deg_at_10%_5%,_transparent_0deg,_rgba(140,175,235,0.5)_25deg,_transparent_50deg)] pointer-events-none z-0" />

        {/* RAY TOP-RIGHT */}
        <div className="absolute -top-60 -right-60 w-[1000px] h-[1000px] bg-[conic-gradient(from_207deg_at_100%_0%,_transparent_0deg,_rgba(140,175,235,0.5)_25deg,_transparent_0deg)] pointer-events-none z-0" />

        {/* CENTER BLOOM */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[radial-gradient(ellipse_at_top,_rgba(200,216,248,0.25)_0%,_transparent_70%)] blur-sm pointer-events-none z-0" />

        <div className="relative z-10 flex flex-col items-center gap-y-10 max-w-full backdrop-blur-2xl bg-[linear-gradient(135deg,_#becbea33_0%,_#ffffff99_45%,_#CED5F933_100%)]">
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
          <div className="flex items-center justify-center pb-10 ">
            <div className="mx-auto px-6 flex items-center justify-between gap-12 isolate">
              {/* LEFT SIDE */}
              <div className="flex flex-col gap-8 w-72 relative">
                <div className="w-fit h-fit -translate-x-8 rotate-[9.38deg] bg-transparent rounded-4xl z-40 border-transparent">
                  <span className="bg-linear-to-r from-[#FFFFFF] via-[#EDEFFA] to-[#FFFFFF] animate-float-slow p-4 z-10 translate-y-14 translate-x-65 absolute rounded-full">
                    <img
                      src="op_meter.png"
                      className="rounded-2xl h-8 w-8 -rotate-[17.5deg] "
                      alt="AFL services"
                    />
                  </span>
                  <img
                    src="operational_health.png"
                    className="rounded-2xl"
                    alt="Operational Health"
                  />
                </div>

                <div className="w-80 h-74  absolute -translate-x-8 translate-y-12 rounded-3xl  bg-linear-to-r from-[#FFFFFF] via-[#EDEFFA] to-[#FFFFFF] opacity-30 border border-gray-300 " />

                <div className="bg-white rounded-4xl -rotate-[5.27deg] -translate-y-7 border border-gray-100 z-30">
                  <img
                    src="AFL_services.png"
                    className="rounded-2xl"
                    alt="AFL services"
                  />
                  <span className="flex items-center animate-float-slow justify-center bg-linear-to-r from-[#FFFFFF] via-[#EDEFFA] to-[#FFFFFF] p-1 absolute  rounded-full  -bottom-6 translate-x-6">
                    <img
                      src="zap.png"
                      className="h-9 w-9 "
                      alt="AFL services"
                    />
                  </span>
                </div>
                <div className="w-65 h-60 absolute -translate-x-7 translate-y-87 rounded-3xl  -rotate-[7deg] bg-linear-to-r from-[#d3deff] via-[#e3e8f4] to-[#bfd2fa] opacity-30 border border-gray-300 " />
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
                    <div className="flex items-center ml-6 bg-[#eff6ff]/60 relative pr-4 overflow-hidden group w-fit">
                      {/* 1. The TRAVELING Vertical Blue Line */}
                      {/* This div now moves from left to right across the container */}
                      <div className="absolute top-0 h-full w-[3px] bg-[#1952F1] shadow-[0_0_20px_rgba(25,82,241,0.6)] z-30 animate-line-travel" />

                      {/* 2. The Animated Selection Background (Trailing behind the line) */}
                      <div
                        className="absolute left-0 top-0 h-full z-10 animate-fill-selection"
                        style={{
                          background:
                            "linear-gradient(90deg, rgba(25, 82, 241, 0.15) 0%, rgba(65, 141, 248, 0) 100%)",
                        }}
                      />

                      {/* 3. The Text Container */}
                      <span className="pl-5 relative font-semibold text-[70px] leading-[70px] tracking-[-0.05em]">
                        <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#1952F1_50%,#020218_50%)] bg-[length:200%_100%] animate-text-fill">
                          DPD Resolution.
                        </span>

                        <span className="absolute  translate-y-14  -right-4 h-6">
                          <img
                            src="scriblle.png"
                            alt=""
                            className="w-[192px] h-full object-cover "
                          />
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

                  <div className="flex items-center justify-center w-[238px] h-[84px] rounded-3xl border-4 border-[#00000014]">
                    <div className="w-[218px] h-[64px] p-[4px] hover:cursor-pointer rounded-[18px] bg-[linear-gradient(93.37deg,#6095DB_7.39%,#1650EB_99.35%)] hover:scale-103 transition-all duration-300 shadow-[0_40px_60px_rgba(22,80,235,0.5)]">
                      <div className="group w-full h-full flex items-center justify-center gap-2 rounded-[14px] bg-[linear-gradient(93.66deg,#1952F1_0%,#418DF8_98.87%)]">
                        <span className="text-white font-bold text-[18px] whitespace-nowrap mr-4 relative">
                          Get free Trial
                          <span className="absolute -rotate-45 ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                            ➜
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* SECONDARY GLASS BUTTON */}
                  <div className="flex items-center justify-center w-[238px] h-[84px] rounded-3xl border-4 border-[#00000014]">
                    <div className="group flex items-center justify-center w-[218px] h-[64px] hover:cursor-pointer rounded-[18px] border-4 border-[#00000014] bg-white hover:scale-103 transition duration-300">
                      <span className="text-[#6D6D6D]  font-bold text-[18px] whitespace-nowrap flex items-center gap-2">
                        How We Work
                        <span className="rotate-45 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1">➜</span>
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-center text-gray-500 text-base translate-y-20">
                  Join <span className="font-bold text-gray-900">4,000+</span>{" "}
                  Companies Already Grow
                </p>
              </div>

              {/* RIGHT SIDE */}
              <div className="flex flex-col gap-8 w-72 h-120 relative z-0 left-12">
                <div className="w-fit h-fit rotate-[4deg] bg-transparent rounded-4xl z-40 border-transparent">
                  <span className="flex items-center justify-center animate-float-slow bg-linear-to-r from-[#FFFFFF] via-[#EDEFFA] to-[#FFFFFF] p-2 z-10   h-14 w-14 absolute rounded-full translate-x-19 -translate-y-10">
                    <img
                      src="dollar_meter.png"
                      className="rounded-full -rotate-12 "
                      alt="AFL services"
                    />
                  </span>
                  <img
                    src="interactions.png"
                    className="rounded-2xl"
                    alt="Interactions"
                  />
                </div>

                <div className="w-80 h-65  absolute -translate-x-12 translate-y-12 -rotate-[12deg] rounded-3xl  bg-white/20 mix-blend-lighten opacity-100 border border-gray-200 shadow-gray-300 shadow-2xl" />

                <div className="absolute  -rotate-[6deg] translate-y-75 translate-x-8 z-50">
                  <span className="h-14 w-14 animate-float-slow bg-linear-to-r from-[#FFFFFF] via-[#EDEFFA] to-[#FFFFFF] p-2 z-10 absolute rounded-full translate-x-8 -translate-y-10">
                    <img
                      src="call_meter.png"
                      className="rounded-2xl animate-slow-rotate rotate-12 "
                      alt="AFL services"
                    />
                  </span>
                  <img
                    src="gouse_card.png"
                    className="rounded-2xl object-cover"
                    alt="Gouse card"
                  />
                </div>

                <div className="absolute  rotate-[4deg] translate-y-95 translate-x-25 z-20">
                  <img
                    src="roger_card.png"
                    className="rounded-2xl object-cover h-15 w-full"
                    alt="Operational Health"
                  />
                </div>
                <div className="w-80 h-20  absolute translate-y-95 translate-x-25 rotate-[4deg] rounded-3xl  bg-white/20 mix-blend-lighten opacity-100 border border-gray-200 shadow-gray-300 shadow-2xl" />
              </div>
            </div>
          </div>

          {/* ── LOGO TICKER ── */}

          <div className="relative w-7xl overflow-hidden h-32 flex items-center">
            {/* LEFT FADE */}
            <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#f6f6f6] via-[#eef3fc]/80 to-transparent z-10 pointer-events-none" />

            {/* RIGHT FADE */}
            <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#e8eefa] via-[#eef3fc]/80 to-transparent z-10 pointer-events-none" />
            <div className="w-full overflow-hidden">
              <div className="flex items-center justify-center animate-marquee w-max n">
                {[...logos, ...logos].map((logo, i) => (
                  <div
                    key={i}
                    className="w-[178px] h-12 px-4 rounded-md border border-[#0000001A] bg-transparent flex items-center justify-center shrink-0 mr-2 shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:cursor-pointer hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
                  >
                    <img
                      src={logo}
                      className="max-h-7 object-contain opacity-70 hover:opacity-100 transition"
                      alt="Brand"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
