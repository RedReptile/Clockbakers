import React from "react";
import Navbar from "../components/navbar"
import { AuthForm } from "../components/authForm";
import rectangle from '../assets/Rectangle.png';
import formbg from '../assets/formbg.png';
import backButton from '../assets/backButton.png';

export const ForgotPassword = () => {
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

                <a href="/login">
                    <img
                        className="h-10 hover:opacity-85 absolute left-138 top-120"
                        src={backButton}
                        alt="Back Button"
                    />
                </a>


                <AuthForm
                    title="Forgot Password?"
                    subtitle="Enjoy fresh items of our"
                    buttonText="LOGIN"
                    fields={["EMAIL"]}
                    style="mt-0"
                    center={true}
                    subtext="Please enter you’re email address to get the verification code."
                />

                <p className="text-center mt-5 mb-7 text-sm text-[#616161]">
                    Already have an account?
                    <a href="/login" className="font-black text-[#212121] underline p-2 ">
                        Login
                    </a>
                </p>

            </div>
        </div>
    );
};

export default ForgotPassword;
