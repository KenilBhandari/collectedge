const PixelPerfectLanding = () => {

  return (
    <div className="relative min-h-screen w-full font-sans text-[#0a192f] selection:bg-blue-100 pb-20">
      {/* GLOBAL BACKGROUND */}

      <div className="max-w-7xl mx-auto px-6">
        {/* --- SECTION: TESTIMONIALS --- */}
        <section className="pt-14">
          <header className="text-center mb-16">
            <p className="text-[#1952F1] text-2xl font-bold leading-[100%] mb-4">
              Testimonial
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-[#020218] to-[#1948BD] bg-clip-text text-transparent">
              Trusted by Professionals
            </h2>
          </header>

          <div className="flex items-center justify-center gap-6 overflow-visible">
            {/* Side Card (Fade) */}
            <div className="hidden lg:block w-72 shrink-0 opacity-70 scale-105 grayscale-[0.5]">
              <img
                src="left-fade.png"
                alt="user"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Main Active Card */}
            <div className="w-full max-w-2xl relative ">
              <div className="absolute inset-0 bg-blue-500/10 blur-3xl -z-10 rounded-full" />
              <div className="bg- bg-linear-to-tr from-[#e2f6ff] via-[#ffffff] to-[#ccceff] border-2 border-blue-500/20 rounded-[2.5rem] p-10 relative overflow-hidden">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm">
                    <img
                      src="priya_nair.jpg"
                      alt="user"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Priya Nair</h4>
                    <p className="text-slate-400 text-sm">
                      Head of Risk & Collections
                    </p>
                  </div>
                  <div className="ml-auto text-slate-100">
                    <IconQuote />
                  </div>
                </div>
                <p className="text-slate-700 text-lg leading-relaxed italic mb-8">
                  "Since implementing the Collectedge platform, we've seen a 40%
                  improvement in resolving delinquent payment disputes within
                  the first 30 days. The automation and transparency it brings
                  have transformed how our collections team operates."
                </p>
                <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                  <div className="flex gap-1 text-yellow-400">★★★★★</div>
                  <div className="bg-slate-100 p-2 rounded-full">
                    <IconFB />
                  </div>
                </div>
                <div className="flex items-center justify-center gap-8">
                  <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center bg-white hover:bg-slate-50 shadow-sm">
                   <span className="rotate-180">➜</span>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-200">
                   <span>➜</span>
                  </button>
                </div>
              </div>

              {/* Pagination UI */}
            </div>

            {/* Side Card (Fade) */}
            <div className="hidden lg:block w-72 shrink-0 opacity-70 scale-105 grayscale-[0.5]">
              <img
                src="Mask group.png"
                alt="user"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="mt-10 flex gap-6 flex-wrap justify-center">
            {/* PRIMARY BUTTON */}

            <div className="flex items-center justify-center w-[168px] h-[74px] rounded-3xl border-4 border-[#00000014]">
              <div className="w-[148px] h-[60px] p-[4px] rounded-[18px] bg-[linear-gradient(93.37deg,#6095DB_7.39%,#1650EB_99.35%)] hover:scale-103 transition-all duration-300 ">
                <div className="w-full h-full flex items-center justify-center gap-2 rounded-[14px] bg-[linear-gradient(93.66deg,#1952F1_0%,#418DF8_98.87%)]">
                  <span className="text-white font-bold text-[18px] whitespace-nowrap mr-4">
                    View All
                    <span className="absolute -rotate-45 ml-2">➜</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};


const IconQuote = () => <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.899 14.899 16.017 16 16.017L19 16.017C19.552 16.017 20 15.569 20 15.017L20 9.017C20 8.465 19.552 8.017 19 8.017L15 8.017C14.448 8.017 14 7.569 14 7.017L14 4.017C14 3.465 14.448 3.017 15 3.017L21 3.017C21.552 3.017 22 3.465 22 4.017L22 15.017C22 18.314 19.314 21 16 21L14.017 21ZM2.017 21L2.017 18C2.017 16.899 2.899 16.017 4 16.017L7 16.017C7.552 16.017 8 15.569 8 15.017L8 9.017C8 8.465 7.552 8.017 7 8.017L3 8.017C2.448 8.017 2 7.569 2 7.017L2 4.017C2 3.465 2.448 3.017 3 3.017L9 3.017C9.552 3.017 10 3.465 10 4.017L10 15.017C10 18.314 7.314 21 4 21L2.017 21Z" /></svg>;
const IconFB = () => <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>;


export default PixelPerfectLanding;