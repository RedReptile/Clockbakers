import React from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import logo from '../assets/logo.png';

export const LoginPage = () => {
    return (
        <div className="flex justify-center items-center h-screen">
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
                            className="h-15"
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

            <div className="absolute w-[600px] h-[500px] bg-white shadow-[0px_2px_2px_2px_00000040] border-gray-400 border-1 flex flex-col items-center justify-start pt-24">
                <div className="absolute w-[480px] top-[40px] left-[-35px] [font-family:'Tangerine-Bold'] font-Bold text-black text-3xl text-center tracking-[0] leading-[normal]">
                    Sign Up for ClockBakers
                </div>
                <p className="absolute w-[240px] top-[50px] left-[55px] [font-family:'Tangerine-Bold'] font-bold text-transparent text-[16px] tracking-[0.75px] leading-[103px] whitespace-nowrap">
                    <span className="text-[#050706] tracking-[0.19px]">
                        Enjoy fresh items of our{" "}
                    </span>
                    <span className="text-[#f74781] tracking-[0.19px]">
                        Clock Bakers{" "}
                    </span>
                </p>

                {/* Form Section */}
                <form className="w-[500px] space-y-4 mt-15">
                    {/* Username Form */}
                    <div className="relative w-full h-[60px] border-[#838383] border-1 rounded-lg">
                        <label htmlFor="username" className="sr-only">Username</label>
                        <input 
                            id="username" 
                            type="text" 
                            placeholder="USERNAME" 
                            className="w-full h-full text-sm font-bold text-[#616161] focus:outline-none focus:text-[#616161] focus:placeholder-transparent rounded-lg px-3 py-2"
                        />
                    </div>

                    {/* Email Form */}
                    <div className="relative w-full h-[60px] border-[#838383] border-1 rounded-lg">
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input 
                            id="email" 
                            type="email" 
                            placeholder="EMAIL" 
                            className="w-full h-full text-sm font-bold text-[#616161] focus:outline-none focus:text-[#616161] focus:placeholder-transparent rounded-lg px-3 py-2"
                        />
                    </div>

                    {/* Password Form */}
                    <div className="relative w-full h-[60px] border-[#838383] border-1 rounded-lg">
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input 
                            id="password" 
                            type="password" 
                            placeholder="PASSWORD" 
                            className="w-full h-full text-sm font-bold text-[#616161] focus:outline-none focus:text-[#616161] focus:placeholder-transparent rounded-lg px-3 py-2"
                        />
                    </div>

                    {/* Confirm Password Form */}
                    <div className="relative w-full h-[60px] border-[#838383] border-1 rounded-lg">
                        <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
                        <input 
                            id="confirmPassword" 
                            type="password" 
                            placeholder="CONFIRM PASSWORD" 
                            className="w-full h-full text-sm font-bold text-[#616161] focus:outline-none focus:text-[#616161] focus:placeholder-transparent rounded-lg px-3 py-2"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};
