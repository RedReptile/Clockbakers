import React from "react";
import google from "../assets/google.png";
import logo from "../assets/logos.png";

export const LoginGoogleForm = ({ linkText, linkHref, linkDisplayText }) => {
    return (
        <div className="md:absolute md:right-[60px] md:top-[195px] w-full md:w-[500px] md:mt-0">
            <img className="w-42 h-50 mt-[-170px] ml-42 md:block hidden" src={logo} />
            <div className="flex items-center justify-center my-4">
                <div className="w-20 border-t border-gray-400"></div>
                <span className="mx-4 text-sm font-bold text-[#616161]">OR USE</span>
                <div className="w-20 border-t border-gray-400"></div>
            </div>

            <div className="w-full md:w-[300px] h-[50px] bg-black rounded-full flex items-center justify-center space-x-3 mx-auto hover:bg-gray-800">
                <img className="w-[30px] h-[30px]" alt="Google Icon" src={google} />
                <p className="text-sm text-white font-bold">Log in with Google</p>
            </div>

            <p className="text-center mt-5 mb-7 text-sm text-[#616161]">
                {linkText}{" "}
                <a href={linkHref} className="font-black text-[#212121] underline">
                    {linkDisplayText}
                </a>
            </p>
        </div>
    );
};

export default LoginGoogleForm;
