import React from "react";
import { Navbar } from "../components/navbar";
import { AuthForm } from "../components/authForm";
import { LoginGoogleForm } from "../components/LoginGoogleForm";
import rectangle from '../assets/Rectangle.png';
import formbg from '../assets/formbg.png';

export const LoginPage = () => {
    return (
        <div 
            className="flex justify-center items-center h-screen relative"
            style={{
                backgroundImage: `url(${rectangle})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center top -50px',
            }}>
            <Navbar />

            <div className="absolute w-11/12 md:w-[1150px] h-auto md:h-[580px] mt-[30px] shadow-[0px_2px_2px_2px_00000040] bg-white flex flex-col items-center justify-start rounded-lg pt-24"
            style={{
                backgroundImage: `url(${formbg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <div className="w-full flex flex-col md:block relative px-4 md:px-0">
                    <AuthForm 
                        title="Login for ClockBakers"
                        subtitle="Enjoy fresh items of our"
                        buttonText="LOGIN"
                        fields={["EMAIL", "PASSWORD"]}
                        style="mt-15"
                        showForgotPassword={true}
                    />
                    
                    <LoginGoogleForm 
                        linkText="Don't have an account?"
                        linkHref="/"
                        linkDisplayText="Signup"
                        style="mt-15"
                    />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;