import React from "react";

export const LoginPage = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-[1269px] h-[94px] top-[25px] bg-[#efeded] shadow-[0px_4px_4px_4px_#00000040] absolute">
                <div className="absolute w-[243px] h-[11px] top-[42px] left-10">
                    <a href="#" className="absolute w-[55px] top-0 left-0 [font-family:'Josefin_Sans',Helvetica] font-semibold text-black text-[15px] tracking-[1.00px] leading-[normal] whitespace-nowrap">
                        HOME
                    </a>

                    <a href="#" className="absolute w-12 top-0 left-24 [font-family:'Josefin_Sans',Helvetica] font-semibold text-black text-[15px] tracking-[1.00px] leading-[normal] whitespace-nowrap">
                        SHOP
                    </a>

                    <a href="#" className="absolute w-[53px] top-0 left-[184px] [font-family:'Josefin_Sans',Helvetica] font-semibold text-black text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
                        ABOUT
                    </a>

                    <img className="absolute w-[67px] h-[74px] top-[-30px] left-[550px] object-cover" alt="CLockBakers Logo" src="https://c.animaapp.com/D5ip3B6T/img/middle-logo@2x.png"></img>
                    
                    <img className="absolute w-[34px] h-[34px] top-[-8px] left-[900px] object-cover" alt="Cart image" src="https://c.animaapp.com/D5ip3B6T/img/cart-image@2x.png"></img>
                    <img class="absolute w-5 h-[21px] top-[-8px] left-[925px] object-cover" alt="Cart number" src="https://c.animaapp.com/D5ip3B6T/img/cart-number@2x.png"></img>

                    <div className="absolute w-[145px] top-0 left-[980px] [font-family:'Josefin_Sans-Regular',Helvetica] font-semibold text-black text-[15px] tracking-[1.00px] leading-[normal] whitespace-nowrap">
                        LOGIN/REGISTER
                    </div>

                    <div class="absolute w-[40px] h-[40px] top-[-13px] left-[1150px] bg-[url(https://c.animaapp.com/D5ip3B6T/img/image-4@2x.png)] bg-cover bg-[50%_50%]" alt="Profile"></div>

                </div>
            </div>

            <div className="absolute w-[920px] h-[650px] -mt-[-70px] bg-white shadow-[0px_2px_2px_2px_00000040] border-gray-400 border-1">
                <div className="absolute w-[592px] top-[40px] left-[-40px] [font-family:'Tangerine-Bold'] font-Bold text-black text-4xl text-center tracking-[0] leading-[normal]">
                    Sign Up for ClockBakers
                </div>
                <p className="absolute w-[269px] top-[70px] left-[75px] [font-family:'Tangerine-Bold'] font-bold text-transparent text-[17px] tracking-[0.75px] leading-[103px] whitespace-nowrap">
                    <span className="text-[#050706] tracking-[0.19px]">
                      Enjoy fresh items of our{" "}
                    </span>

                    <span className="text-[#f74781] tracking-[0.19px]">
                      Clock Bakers{" "}
                    </span>
                </p>

                <div className="absolute w-[754px] h-[74px] top-0 left-0">
                    <div className="relative w-full h-full -top-[-170px] -left-[-80px] border-[#838383] border-1">
                        <input 
                            id="username" 
                            type="text" 
                            placeholder="USERNAME" 
                            className="absolute top-0 left-[23px] w-full h-full text-sm font-bold text-[#616161] [font-family:'Zen_Kaku_Gothic_Antique-Bold',Helvetica] focus:outline-none focus:text-[#616161] focus:placeholder-transparent" 
                        />
                    </div>
                </div>

                <div className="absolute w-[754px] h-[74px] top-[100px] left-0">
                    <div className="relative w-full h-full -top-[-170px] -left-[-80px] border-[#838383] border-1">
                        <input 
                            id="email" 
                            type="email" 
                            placeholder="EMAIL" 
                            className="absolute top-0 left-[23px] w-full h-full text-sm font-bold text-[#616161] [font-family:'Zen_Kaku_Gothic_Antique-Bold',Helvetica] focus:outline-none focus:text-[#616161] focus:placeholder-transparent" 
                        />
                    </div>
                </div>

                <div className="absolute w-[754px] h-[74px] top-[200px] left-0">
                    <div className="relative w-full h-full -top-[-170px] -left-[-80px] border-[#838383] border-1">
                        <input 
                            id="password" 
                            type="password" 
                            placeholder="PASSWORD" 
                            className="absolute top-0 left-[23px] w-full h-full text-sm font-bold text-[#616161] [font-family:'Zen_Kaku_Gothic_Antique-Bold',Helvetica] focus:outline-none focus:text-[#616161] focus:placeholder-transparent" 
                        />
                    </div>
                </div>

                <div className="absolute w-[754px] h-[74px] top-[300px] left-0">
                    <div className="relative w-full h-full -top-[-170px] -left-[-80px] border-[#838383] border-1">
                        <input 
                            id="confirmPassword" 
                            type="password" 
                            placeholder="CONFIRM PASSWORD" 
                            className="absolute top-0 left-[23px] w-full h-full text-sm font-bold text-[#616161] [font-family:'Zen_Kaku_Gothic_Antique-Bold',Helvetica] focus:outline-none focus:text-[#616161] focus:placeholder-transparent" 
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};
