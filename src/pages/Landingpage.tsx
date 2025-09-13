
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
<div className="space-y-6 lg:space-y-8 w-full max-w-4xl">
  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1a5f7a] leading-tight">
    One Hub, Endless
    <span className="block text-[#2d8aa6]">Insights...</span>
  </h1>

  <p className="text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed max-w-xl">
    Making Rwanda’s Knowledge Visible, Searchable, and Accessible.
  </p>

  <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-xl">
    Discover a centralized platform that connects researchers, policymakers, and citizens to Rwanda’s vast repository of data and insights.
  </p>

  <p className="text-base lg:text-lg text-gray-700 leading-relaxed max-w-xl">
    Our hub empowers decision-making and fosters collaboration to drive meaningful impact across sectors.
  </p>

  <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
    <button
      onClick={() => scrollToSection("about")}
      className="bg-[#1a5f7a] text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-[#154c61] transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
    >
      Explore Vision
      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </button>

    <button
      onClick={() => scrollToSection("features")}
      className="border-2 border-[#1a5f7a] text-[#1a5f7a] px-6 py-3 rounded-full text-base font-semibold hover:bg-[#1a5f7a] hover:text-white transition duration-300 shadow-md hover:shadow-lg transform hover:scale-105 flex items-center justify-center"
    >
      Learn More
    </button>
  </div>

  {/* Stats */}
  <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200/50 max-w-md">
    <div className="text-center">
      <div className="text-2xl font-bold text-[#1a5f7a]">100K+</div>
      <div className="text-sm text-gray-600">Data Points</div>
    </div>
    <div className="text-center">
      <div className="text-2xl font-bold text-[#1a5f7a]">50+</div>
      <div className="text-sm text-gray-600">Institutions</div>
    </div>
    <div className="text-center">
      <div className="text-2xl font-bold text-[#1a5f7a]">24/7</div>
      <div className="text-sm text-gray-600">Access</div>
    </div>
  </div>
</div>


{/* Right Column - Floating Cards, aligned vertically with motion */}
<div className="absolute right-0 top-20 flex flex-col items-end gap-6 pr-8 lg:pr-16">
  {[{
    title: "Real-time Analytics",
    description: "Updated every minute",
    extra: <div className="mt-2 h-1 bg-gradient-to-r from-[#1a5f7a] to-[#2d8aa6] rounded-full"></div>
  }, {
    title: "Secure Access",
    description: "Enterprise-grade security",
    extra: (
      <div className="mt-2 flex items-center">
        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
        <div className="text-xs text-green-600">All systems operational</div>
      </div>
    )
  }, {
    title: "Data Insights",
    description: "50+ institutions connected",
    extra: (
      <div className="mt-2 flex -space-x-1">
        <div className="w-3 h-3 lg:w-4 lg:h-4 bg-blue-500 rounded-full border-2 border-white"></div>
        <div className="w-3 h-3 lg:w-4 lg:h-4 bg-green-500 rounded-full border-2 border-white"></div>
        <div className="w-3 h-3 lg:w-4 lg:h-4 bg-purple-500 rounded-full border-2 border-white"></div>
        <div className="w-3 h-3 lg:w-4 lg:h-4 bg-orange-500 rounded-full border-2 border-white flex items-center justify-center">
          <span className="text-xs text-white font-bold">+</span>
        </div>
      </div>
    )
  }].map(({ title, description, extra }, idx) => (
    <div
      key={idx}
      className="bg-white rounded-lg p-4 shadow-lg w-60 transition-transform hover:scale-105"
      style={{
        transform: `translateX(${idx % 2 === 0 ? '10px' : '-10px'}) rotate(${idx % 2 ? '2deg' : '-2deg'})`,
      }}
    >
      <div className="text-sm font-semibold text-[#1a5f7a] mb-1">{title}</div>
      <div className="text-xs text-gray-600">{description}</div>
      {extra}
    </div>
  ))}
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
