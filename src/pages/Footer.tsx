import React from "react";
import bgImage from "../assets/Data_Access_Hub_logo.png";
const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-[#1a5f7a] via-[#207d96] to-[#2bb4c3] text-white py-10 px-6 mt-12 shadow-lg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <img
            src={bgImage}
            alt="Data Access Hub Logo"
            className="w-46 h-35 mb-4 drop-shadow-lg hover:scale-105 transition-transform duration-300 filter brightness-0 invert"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
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
              <button onClick={() => scrollToSection("about")}>About Us</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("services")}>
                Services
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("contact")}>
                Contact
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-white/30 inline-block pb-1">
            Get in Touch
          </h3>
          <div className="space-y-2 text-gray-100">
            <p>
              <span className="font-medium">Email:</span>{" "}
              <a href="mailto:info@dataaccesshub.com">info@dataccesshub.com</a>
            </p>
            <p>
              <span className="font-medium">Phone:</span>{" "}
              <a href="tel:+250788123456">+250 786766391</a>
            </p>
          </div>
          <div className="flex justify-center md:justify-start mt-6 space-x-5 text-gray-200">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              Twitter
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              Facebook
            </a>
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
