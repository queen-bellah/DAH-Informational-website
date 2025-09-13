import React from "react";
import {
  Brain,
  Languages,
  Search,
  BarChart3,
  Database,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const Features: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-white" />,
      title: "AI Summaries",
      description: "Understand reports in minutes, not hours",
      delay: "0ms",
    },
    {
      icon: <Languages className="w-8 h-8 text-white" />,
      title: "Multilingual Access",
      description: "Available in English, Kinyarwanda, and French",
      delay: "100ms",
    },
    {
      icon: <Search className="w-8 h-8 text-white" />,
      title: "Smart Search",
      description: "Find exactly what you need with keywords & filters",
      delay: "200ms",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: "Data Visualizations",
      description: "Turn statistics into simple dashboards",
      delay: "300ms",
    },
    {
      icon: <Database className="w-8 h-8 text-white" />,
      title: "Centralized Repository",
      description: "All research in one trusted space",
      delay: "400ms",
    },
  ];

  return (
    <section id="features" className="py-20 bg-[#f0faff]">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#1a5f7a]/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-cyan-200/20 rounded-full blur-2xl"></div>
      </div>

      <div className="relative container mx-auto px-6 lg:px-12 z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1a5f7a] mb-6">
            Features
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover powerful tools designed to make research accessible,
            understandable, and actionable for everyone
          </p>

          <div className="flex justify-center mt-8">
            <div className="w-24 h-1 bg-gradient-to-r from-[#1a5f7a] to-cyan-400 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-white/20"
              style={{
                animationDelay: feature.delay,
                animation: "fadeInUp 0.8s ease-out forwards",
              }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-br from-[#1a5f7a] to-cyan-600 rounded-2xl group-hover:scale-110 transition-all duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#1a5f7a] mb-3 leading-tight text-center">
                {feature.title}
              </h3>

              <p className="text-gray-600 text-base leading-relaxed text-center">
                {feature.description}
              </p>
            </div>
          ))}

          {/* CTA Card */}
          <div className="group bg-gradient-to-br from-[#1a5f7a] to-cyan-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="text-center">
              <div className="inline-flex p-3 bg-white/20 rounded-xl mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-lg font-bold mb-3">Ready to Get Started?</h3>

              <p className="text-white/90 mb-4 leading-relaxed text-sm">
                Join thousands of researchers already using our platform
              </p>

              <button className="inline-flex items-center gap-2 bg-white text-[#1a5f7a] px-4 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 text-sm">
                <span>Start Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Features;
