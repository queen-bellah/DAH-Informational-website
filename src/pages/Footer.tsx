import React from "react";
import bgImage from "../assets/Data_Access_Hub_logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-[#1a5f7a] via-[#207d96] to-[#2bb4c3] text-white py-10 px-6 mt-12 shadow-lg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <img
            src={bgImage}
            alt="Data Access Hub Logo"
            className="w-24 h-auto mb-4 drop-shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <p className="text-sm text-gray-200 font-light">
            One Hub, Endless Insights.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-white/30 inline-block pb-1">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-100">
            <li>
              <a href="#about" className="hover:text-yellow-300 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-yellow-300 transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-300 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-white/30 inline-block pb-1">
            Get in Touch
          </h3>
          <p>Email: info@dataaccesshub.com</p>
          <p>Phone: +250 788 123 456</p>
          <div className="flex justify-center md:justify-start mt-4 space-x-5 text-gray-200">
            <a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-blue-300 transition-colors">Twitter</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Facebook</a>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-white/20 pt-4 text-center text-gray-300 text-sm">
        © {new Date().getFullYear()} Data Access Hub. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
