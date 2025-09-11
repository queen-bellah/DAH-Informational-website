
import React, { useState } from "react";
import logo from "../assets/Data_Access_Hub_logo-removebg-preview.png";

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-[#e6fbfe] px-8 py-4 shadow-sm">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <img src={logo} alt="Data Access Hub" className="h-25 w-30" />
                </div>

                <ul className="hidden md:flex space-x-8 text-gray-700 font-medium text-sm">
                    <li>
                        <a
                            href="#home"
                            className="hover:text-gray-900 transition-colors duration-200"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className="hover:text-gray-900 transition-colors duration-200"
                        >
                            About Us
                        </a>
                    </li>
                    <li>
                        <a
                            href="#features"
                            className="hover:text-gray-900 transition-colors duration-200"
                        >
                            Features
                        </a>
                    </li>
                    <li>
                        <a
                            href="#team"
                            className="hover:text-gray-900 transition-colors duration-200"
                        >
                            Team
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="hover:text-gray-900 transition-colors duration-200"
                        >
                            Contact Us
                        </a>
                    </li>
                </ul>

                <button
                    onClick={toggleMenu}
                    className="md:hidden flex flex-col space-y-1 p-2 hover:bg-black/10 rounded transition-colors duration-200"
                    aria-label="Toggle menu"
                >
                    <span
                        className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                            }`}
                    ></span>
                    <span
                        className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""
                            }`}
                    ></span>
                    <span
                        className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                            }`}
                    ></span>
                </button>
            </div>

            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <ul className="pt-4 pb-2 space-y-2 text-gray-700 font-medium text-sm">
                    <li>
                        <a
                            href="#home"
                            className="block py-3 px-4 hover:text-gray-900 hover:bg-black/5 rounded transition-colors duration-200"
                            onClick={toggleMenu}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className="block py-3 px-4 hover:text-gray-900 hover:bg-black/5 rounded transition-colors duration-200"
                            onClick={toggleMenu}
                        >
                            About Us
                        </a>
                    </li>
                    <li>
                        <a
                            href="#features"
                            className="block py-3 px-4 hover:text-gray-900 hover:bg-black/5 rounded transition-colors duration-200"
                            onClick={toggleMenu}
                        >
                            Features
                        </a>
                    </li>
                    <li>
                        <a
                            href="#team"
                            className="block py-3 px-4 hover:text-gray-900 hover:bg-black/5 rounded transition-colors duration-200"
                            onClick={toggleMenu}
                        >
                            Team
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="block py-3 px-4 hover:text-gray-900 hover:bg-black/5 rounded transition-colors duration-200"
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