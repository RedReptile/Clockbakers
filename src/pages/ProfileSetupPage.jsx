import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import rectangle from '../assets/Rectangle.png';
import formbg from '../assets/formbg.png';

export const SetupPage = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        phone_no: "",
        address: "",
    });
    const [error, setError] = useState("");

    // Get the user ID and token from localStorage
    const userId = localStorage.getItem("user_id");
    const authToken = localStorage.getItem("auth_token");

    useEffect(() => {
        // Check if user is logged in, if not redirect to login
        if (!authToken) {
            navigate("/login");
        }
    }, [authToken, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value }); // Update the respective field
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Ensure phone number and address are filled
        if (userData.phone_no.trim() === "" || userData.address.trim() === "") {
            setError("Both phone number and address are required.");
            return;
        }

        try {
            // Send full user data (name, phone, address, etc.)
            const response = await fetch(`http://localhost:8080/v1/user?uid=${userId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${authToken}`,
                },
                body: JSON.stringify({
                    first_name: userData.first_name,  // include these fields
                    last_name: userData.last_name,
                    phone_no: userData.phone_no,
                    address: userData.address,
                }),
            });

            if (response.ok) {
                navigate("/"); // Navigate on success
            } else {
                setError("Profile update failed. Please try again.");
            }
        } catch (error) {
            setError("Error: " + error.message);
        }
    };


    return (
        <div
            className="flex justify-center items-center h-screen relative"
            style={{
                backgroundImage: `url(${rectangle})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center top -50px',
            }}
        >
            <Navbar />
            <div
                className="absolute w-11/12 md:w-[1150px] h-auto md:h-[580px] mt-[30px] shadow-[0px_2px_2px_2px_00000040] bg-white flex flex-col items-center justify-start rounded-lg pt-24"
                style={{
                    backgroundImage: `url(${formbg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="w-full md:w-[500px] flex flex-col justify-center items-center px-4">
                    <div className="font-bold text-black text-3xl mb-4 text-center">
                        Complete Your Setup!
                    </div>
                    <p className="font-bold text-[#050706] text-[16px] mb-8 text-center">
                        Set up your account to get started <span className="text-[#f74781]">Clock Bakers</span>
                    </p>
                    <p className="text-[#050706] text-[14px] font-medium mb-8 text-center">
                        <span className="text-[#000000]">Please provide your phone number and address for a seamless experience.</span>
                    </p>

                    {/* Profile Setup Form */}
                    <form className="space-y-4 w-full" onSubmit={handleSubmit}>
                        <div className="relative w-full h-[50px] border border-[#838383] rounded-lg hover:scale-101">
                            <input
                                type="text"
                                name="phone_no"
                                placeholder="PHONE NUMBER"
                                className="w-full h-full text-sm font-bold text-[#616161] focus:outline-none rounded-lg px-3 py-2"
                                value={userData.phone_no}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="relative w-full h-[50px] border border-[#838383] rounded-lg hover:scale-101">
                            <input
                                type="text"
                                name="address"
                                placeholder="ADDRESS"
                                className="w-full h-full text-sm font-bold text-[#616161] focus:outline-none rounded-lg px-3 py-2"
                                value={userData.address}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full h-[50px] bg-[#212121] rounded-lg mt-8 text-white font-bold hover:bg-[#F75186] transition duration-300"
                        >
                            SAVE PROFILE
                        </button>
                    </form>

                    {error && <p className="text-red-500 mt-4">{error}</p>}

                    <p className="text-center mt-5 mb-7 text-sm text-[#616161]">
                        Already have an account?
                        <a href="/login" className="font-black text-[#212121] underline p-2">
                            Login
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};
