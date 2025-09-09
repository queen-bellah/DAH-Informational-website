import React from "react";
import bgImage from "../assets/landingpage-bg-pic.jpg";

const LandingPage: React.FC = () => {
    return (
        <section
            className="h-[80vh] bg-cover bg-center bg-no-repeat relative overflow-hidden"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-[#e0f7ff]/60 to-transparent"></div>

            <div className="relative z-10 container mx-auto px-8 py-16 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-8 items-center h-[calc(60vh-4rem)]">

                    <div className="space-y-8">
                        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1a5f7a] leading-tight">
                            One Hub, Endless Insights...
                        </h1>

                        <p className="text-base lg:text-lg text-gray-700 max-w-md leading-relaxed">
                            Making Rwanda's Knowledge Visible, Searchable,
                            and Accessible.
                        </p>

                        <button className="bg-[#1a5f7a] text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-[#154c61] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform">
                            Explore Vision
                        </button>
                    </div>



                </div>
            </div>
        </section>
    );
};

export default LandingPage;