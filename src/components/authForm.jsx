import React from "react";

export const AuthForm = () => {
    return (
        <div className="md:absolute md:left-[60px] md:top-[-20px] w-full md:w-[500px]">
            <div className="font-bold text-black text-3xl mt-[-25px] mb-4 md:text-left text-center">
                Sign Up for ClockBakers
            </div>
            <p className="font-bold text-[#050706] text-[16px] mb-8 md:text-left text-center">
                Enjoy fresh items of our <span className="text-[#f74781]">Clock Bakers</span>
            </p>

            <form className="space-y-4">
                {["USERNAME", "EMAIL", "PASSWORD", "CONFIRM PASSWORD"].map((placeholder, index) => (
                    <div key={index} className="relative w-full h-[50px] border border-[#838383] rounded-lg hover:scale-101">
                        <input
                            type={placeholder.includes("PASSWORD") ? "password" : "text"}
                            placeholder={placeholder}
                            className="w-full h-full text-sm font-bold text-[#616161] focus:outline-none rounded-lg px-3 py-2"
                        />
                    </div>
                ))}
            </form>

            <button className="w-full h-[50px] bg-[#212121] rounded-lg mt-8 text-white font-bold hover:bg-[#F75186] transition duration-300">
                CREATE AN ACCOUNT
            </button>
        </div>
    );
};
