import React from "react";
import Navbar from "../components/navbar";
import { AuthForm } from "../components/authForm";
import rectangle from '../assets/Rectangle.png';
import formbg from '../assets/formbg.png';
import backButton from '../assets/backButton.png'

export const NewPassword = () => {
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
                        className="h-10 hover:opacity-85 absolute left-138 top-126"
                        src={backButton}
                        alt="Back Button"
                    />
                </a>

                <AuthForm
                    title="Set a new Password !"
                    subtitle="Enjoy fresh items of our"
                    buttonText="CONFIRM"
                    fields={["NEW PASSWORD", "CONFIRM PASSWORD"]}
                    style="mt-[-20px]"
                    center={true}
                    subtext="Create a new password . Ensure it differs from previous one for security"
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

export default NewPassword;
