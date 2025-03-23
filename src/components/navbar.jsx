import React, { useState } from "react";
import { FaShoppingCart, FaUser, FaBars } from "react-icons/fa";
import logo from '../assets/logo.png';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm shadow-sm rounded-lg z-50 w-[95%] md:w-full max-w-6xl">
            <div className="flex items-center justify-between px-6 py-2">
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-800 hover:text-gray-600 focus:outline-none">
                        <FaBars className="text-2xl" />
                    </button>
                </div>

                <div className="hidden md:flex space-x-12 mr-40 m-4">
                    <a href="/" className="text-gray-800 hover:text-gray-600 text-sm font-medium">
                        HOME
                    </a>
                    <a href="/shop" className="text-gray-800 hover:text-gray-600 text-sm font-medium">
                        SHOP
                    </a>
                    <a href="/about" className="text-gray-800 hover:text-gray-600 text-sm font-medium">
                        ABOUT
                    </a>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <img src={logo} alt="Clockbakers Logo" className="h-11 md:h-14" />
                </div>

                <div className="flex items-center space-x-12">
                    <a href="/cart" className="text-gray-800 hover:text-gray-600">
                        <FaShoppingCart className="text-lg" />
                    </a>
                    <a href="/login" className="hidden md:inline-block text-gray-800 hover:text-gray-600 text-sm font-medium">
                        LOGIN/REGISTER
                    </a>
                    <a href="/profile" className="text-gray-800 hover:text-gray-600">
                        <FaUser className="text-lg" />
                    </a>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="flex flex-col space-y-2 mt-2 m-2">
                    {["HOME", "SHOP", "ABOUT", "LOGIN/REGISTER"].map((item, index) => (
                        <a key={index} href={`/${item.toLowerCase()}`} className="text-gray-800 hover:text-gray-600 text-sm font-medium py-2 px-4">
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};
