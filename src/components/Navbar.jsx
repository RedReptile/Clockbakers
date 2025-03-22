import React from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm shadow-sm rounded-lg z-50">
            <div className="flex items-center justify-between px-6 py-2">
                {/* Left Side */}
                <div className="flex space-x-15 mr-100 m-4">
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

                {/* Clockbakers Logo */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <img
                        src={logo}
                        alt="Clockbakers Logo"
                        className="h-14"
                    />
                </div>

                {/* Right Side */}
                <div className="flex items-center space-x-15">
                    {/* Cart Icon */}
                    <a href="/cart" className="text-gray-800 hover:text-gray-600">
                        <FaShoppingCart className="text-lg" />
                    </a>

                    {/* Login/Register */}
                    <a
                        href="/login"
                        className="text-gray-800 hover:text-gray-600 text-sm font-medium bg-transparent"
                    >
                        LOGIN/REGISTER
                    </a>

                    {/* Profile Icon */}
                    <a href="/profile" className="text-gray-800 hover:text-gray-600">
                        <FaUser className="text-lg" />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
