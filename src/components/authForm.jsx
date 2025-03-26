import React from "react";

export const AuthForm = ({ title, subtitle, buttonText, fields, style, showForgotPassword, center, subtext }) => {
    return (
        <div
        className={`
            w-full md:w-[500px] ${style} 
            ${center ? "flex flex-col justify-center items-center" : "md:absolute md:left-[60px] md:top-[-20px]"} px-4`}>
            <div className="font-bold text-black text-3xl mb-4 md:text-left text-center">
                {title}
            </div>
            <p className="font-bold text-[#050706] text-[16px] mb-8 md:text-left text-center">
                {subtitle} <span className="text-[#f74781]">Clock Bakers</span>
            </p>
            <p className="text-[#050706] text-[14px] font-medium mb-8 md:text-left text-center">
                <span className="text-[#000000]">{subtext}</span>
            </p>

            <form className="space-y-4 w-full">
                {fields.map((placeholder, index) => (
                    <div key={index} className="relative w-full h-[50px] border border-[#838383] rounded-lg hover:scale-101">
                        <input
                            type={placeholder.includes("PASSWORD") ? "password" : "text"}
                            placeholder={placeholder}
                            className="w-full h-full text-sm font-bold text-[#616161] focus:outline-none rounded-lg px-3 py-2"
                        />
                    </div>
                ))}
            </form>

            {showForgotPassword && (
                <p className="md:text-left mt-6 text-sm">
                    <a href="/forgotpassword" className="font-black text-[#212121] underline">
                        Forgot Password?
                    </a>
                </p>
            )}

            <button className="w-full h-[50px] bg-[#212121] rounded-lg mt-8 text-white font-bold hover:bg-[#F75186] transition duration-300">
                {buttonText}
            </button>
        </div>
    );
};

export default AuthForm;
