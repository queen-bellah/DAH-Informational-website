
import React, { useState } from "react";
import logo from "../assets/Data_Access_Hub_logo.png";

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-[#e6fbfe] px-4 lg:px-8 py-2 shadow-sm relative z-50">
            <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center">
                    <img src={logo} alt="Data Access Hub" className="h-17 w-25 object-contain" />
                </div>

                <ul className="hidden md:flex space-x-6 lg:space-x-8 text-gray-700 font-medium text-sm relative z-10">
                    <li>
                        <a
                            href="#home"
                            className="hover:text-gray-900 transition-colors duration-200 cursor-pointer"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className="hover:text-gray-900 transition-colors duration-200 cursor-pointer"
                        >
                            About Us
                        </a>
                    </li>
                    <li>
                        <a
                            href="#features"
                            className="hover:text-gray-900 transition-colors duration-200 cursor-pointer"
                        >
                            Features
                        </a>
                    </li>
                    <li>
                        <a
                            href="#team"
                            className="hover:text-gray-900 transition-colors duration-200 cursor-pointer"
                        >
                            Team
                        </a>
                    </li>
                    <li>
                        <a
                            href="#footer"
                            className="hover:text-gray-900 transition-colors duration-200 cursor-pointer"
                        >
                            Contact Us
                        </a>
                    </li>
                </ul>

                <button
                    onClick={toggleMenu}
                    className="md:hidden flex flex-col space-y-1 p-2 hover:bg-black/10 rounded transition-colors duration-200 relative z-10"
                    aria-label="Toggle menu"
                >
                    <span
                        className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
                            isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                        }`}
                    ></span>
                    <span
                        className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
                            isMenuOpen ? "opacity-0" : ""
                        }`}
                    ></span>
                    <span
                        className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
                            isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                        }`}
                    ></span>
                </button>
            </div>

            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out relative z-40 ${
                    isMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <ul className="pt-4 pb-2 space-y-2 text-gray-700 font-medium text-sm">
                    <li>
                        <a
                            href="#home"
                            className="block py-2 px-4 hover:text-gray-900 hover:bg-black/5 rounded transition-colors duration-200 cursor-pointer"
                            onClick={toggleMenu}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className="block py-2 px-4 hover:text-gray-900 hover:bg-black/5 rounded transition-colors duration-200 cursor-pointer"
                            onClick={toggleMenu}
                        >
                            About Us
                        </a>
                    </li>
                    <li>
                        <a
                            href="#features"
                            className="block py-2 px-4 hover:text-gray-900 hover:bg-black/5 rounded transition-colors duration-200 cursor-pointer"
                            onClick={toggleMenu}
                        >
                            Features
                        </a>
                    </li>
                    <li>
                        <a
                            href="#team"
                            className="block py-2 px-4 hover:text-gray-900 hover:bg-black/5 rounded transition-colors duration-200 cursor-pointer"
                            onClick={toggleMenu}
                        >
                            Team
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="block py-2 px-4 hover:text-gray-900 hover:bg-black/5 rounded transition-colors duration-200 cursor-pointer"
                            onClick={toggleMenu}
                        >
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;