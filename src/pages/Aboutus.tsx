import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="bg-gradient-to-b from-[#1a5f7a] to-[#0f4c75] py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-20 text-white relative overflow-hidden min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="relative max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Why DAH?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto px-2">
            From scattered research to unified knowledge
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-8 sm:mb-10 md:mb-12">
          
          {/* Left Column - Problem & Mission */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            <div>
              <div className="flex items-center gap-4 mb-3 sm:mb-4">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">The Challenge</h3>
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-blue-200 mb-2 sm:mb-3">Scattered Knowledge</h4>
              <p className="text-base sm:text-lg text-blue-100 leading-relaxed">
                Students, NGOs, and policymakers struggle to access Rwanda's research landscape. 
                Valuable insights remain isolated across different institutions and platforms.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-3 sm:mb-4">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">Our Mission</h3>
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-blue-200 mb-2 sm:mb-3">Unified Vision</h4>
              <p className="text-base sm:text-lg text-blue-100 leading-relaxed">
                To make Rwanda's research visible, searchable, and accessible to everyone who needs it. 
                Knowledge should empower, not exclude.
              </p>
            </div>
          </div>

          {/* Right Column - Solution */}
          <div className="lg:pl-8">
            <div className="border-l-4 border-cyan-400 pl-4 sm:pl-6 lg:pl-8">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-cyan-400 rounded-full"></div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">Our Solution</h3>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg leading-relaxed">
                  <span className="font-bold text-cyan-300">DATA ACCESS HUB</span> transforms how Rwanda accesses research. 
                  One comprehensive platform that brings together scattered knowledge.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-blue-200">Topic-based search</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-blue-200">AI summaries</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-blue-200">Sector filtering</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-blue-200">Key insights</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statistics Bar */}
        <div className="border-t border-blue-300/30 pt-4 sm:pt-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 text-cyan-300">1000+</div>
              <div className="text-xs sm:text-sm text-blue-200 uppercase tracking-wider">Research Papers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 text-cyan-300">50+</div>
              <div className="text-xs sm:text-sm text-blue-200 uppercase tracking-wider">Partner Institutions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 text-cyan-300">3</div>
              <div className="text-xs sm:text-sm text-blue-200 uppercase tracking-wider">Languages Supported</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;