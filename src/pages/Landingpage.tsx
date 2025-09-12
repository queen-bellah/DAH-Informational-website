
import React from "react";
import bgImage from "../assets/ChatGPT Image Sep 4, 2025, 02_47_58 PM copy.png";

const LandingPage: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-[calc(100vh-64px)] bg-cover bg-center bg-no-repeat relative overflow-hidden flex items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#e0f7ff]/30 via-[#e0f7ff]/20 to-transparent"></div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Left Column - Content */}
          <div className="space-y-4 lg:space-y-6 max-w-2xl">
            <div className="space-y-3 lg:space-y-4">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1a5f7a] leading-tight">
                One Hub, Endless
                <span className="block text-[#2d8aa6]">Insights...</span>
              </h1>

              <p className="text-base lg:text-lg xl:text-xl text-gray-700 leading-relaxed">
                Making Rwanda&apos;s Knowledge Visible, Searchable, and
                Accessible.
              </p>

              <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                Discover a centralized platform that connects researchers,
                policymakers, and citizens to Rwanda&apos;s vast repository of
                data and insights.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
              <button
                onClick={() => scrollToSection("about")}
                className="bg-[#1a5f7a] text-white px-5 lg:px-6 py-2.5 lg:py-3 rounded-full text-sm lg:text-base font-semibold hover:bg-[#154c61] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center justify-center"
              >
                Explore Vision
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>

              <button
                onClick={() => scrollToSection("features")}
                className="border-2 border-[#1a5f7a] text-[#1a5f7a] px-5 lg:px-6 py-2.5 lg:py-3 rounded-full text-sm lg:text-base font-semibold hover:bg-[#1a5f7a] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 inline-flex items-center justify-center"
              >
                Learn More
              </button>
            </div>

            {/* Stats - Compact version */}
            <div className="grid grid-cols-3 gap-4 pt-4 lg:pt-6 border-t border-gray-200/50">
              <div className="text-center">
                <div className="text-lg lg:text-xl xl:text-2xl font-bold text-[#1a5f7a]">
                  100K+
                </div>
                <div className="text-xs text-gray-600">Data Points</div>
              </div>
              <div className="text-center">
                <div className="text-lg lg:text-xl xl:text-2xl font-bold text-[#1a5f7a]">
                  50+
                </div>
                <div className="text-xs text-gray-600">Institutions</div>
              </div>
              <div className="text-center">
                <div className="text-lg lg:text-xl xl:text-2xl font-bold text-[#1a5f7a]">
                  24/7
                </div>
                <div className="text-xs text-gray-600">Access</div>
              </div>
            </div>
          </div>

          {/* Right Column - Floating Cards (hidden on small screens) */}
          <div className="relative justify-end items-center h-full hidden md:flex">
            {/* Floating cards positioned to work with background people */}
            <div className="absolute top-8 lg:top-16 right-4 lg:right-8">
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 lg:p-4 shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300 max-w-xs">
                <div className="text-xs lg:text-sm font-semibold text-[#1a5f7a] mb-1">
                  Real-time Analytics
                </div>
                <div className="text-xs text-gray-600">Updated every minute</div>
                <div className="mt-2 h-1 bg-gradient-to-r from-[#1a5f7a] to-[#2d8aa6] rounded-full"></div>
              </div>
            </div>

            <div className="absolute top-1/2 right-8 lg:right-16 transform -translate-y-1/2">
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 lg:p-4 shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300 max-w-xs">
                <div className="text-xs lg:text-sm font-semibold text-[#1a5f7a] mb-1">
                  Secure Access
                </div>
                <div className="text-xs text-gray-600">
                  Enterprise-grade security
                </div>
                <div className="mt-2 flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <div className="text-xs text-green-600">
                    All systems operational
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-12 lg:bottom-20 right-2 lg:right-4">
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 lg:p-4 shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300 max-w-xs">
                <div className="text-xs lg:text-sm font-semibold text-[#1a5f7a] mb-1">
                  Data Insights
                </div>
                <div className="text-xs text-gray-600">
                  50+ institutions connected
                </div>
                <div className="mt-2 flex -space-x-1">
                  <div className="w-3 h-3 lg:w-4 lg:h-4 bg-blue-500 rounded-full border-2 border-white"></div>
                  <div className="w-3 h-3 lg:w-4 lg:h-4 bg-green-500 rounded-full border-2 border-white"></div>
                  <div className="w-3 h-3 lg:w-4 lg:h-4 bg-purple-500 rounded-full border-2 border-white"></div>
                  <div className="w-3 h-3 lg:w-4 lg:h-4 bg-orange-500 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-xs text-white font-bold">+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - positioned at bottom */}
      <div className="absolute bottom-4 lg:bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("about")}
          className="text-[#1a5f7a] hover:text-[#154c61] transition-colors duration-300"
          aria-label="Scroll to next section"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default LandingPage;
