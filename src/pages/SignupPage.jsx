import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from '../components/navbar';
import { AuthForm } from "../components/authForm";
import { LoginGoogleForm } from "../components/LoginGoogleForm";
import rectangle from '../assets/Rectangle.png';
import formbg from '../assets/formbg.png';

export const SignupPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        address: "",
        phoneNo: ""
    });

    useEffect(() => {
            if (localStorage.getItem("auth_token")) {
                navigate("/");
            }
        }, [navigate]);

    const handleChange = (e, index) => {
        const { value } = e.target;
        const fieldName = ["firstName", "lastName", "email", "password", "confirmPassword", "address", "phoneNo"][index];
        setFormData({ ...formData, [fieldName]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords don't match!");
            return;
        }

        try {
            const response = await fetch("http://localhost:8080/v1/user", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    first_name: formData.firstName,
                    last_name: formData.lastName,
                    email: formData.email,
                    password: formData.password,
                    address: formData.address,
                    phone_no: formData.phoneNo,
                    role: 'customer',
                }),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem("user_id", data.id); // Store user ID for profile setup
                navigate("/login"); // Redirect to login page
            } else {
                alert("Signup failed: " + (await response.text()));
            }
        } catch (error) {
            console.error("Error:", error);
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
                className="absolute w-11/12 md:w-[1150px] h-auto md:h-[660px] mt-[110px] shadow-[0px_2px_2px_2px_00000040] bg-white flex flex-col items-center justify-start rounded-lg pt-24"
                style={{
                    backgroundImage: `url(${formbg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="w-full flex flex-col md:block relative px-4 md:px-0">
                    <AuthForm
                        title="Sign Up for ClockBakers"
                        subtitle="Enjoy fresh items of our"
                        buttonText="CREATE AN ACCOUNT"
                        fields={["FIRST NAME", "LAST NAME", "EMAIL", "PASSWORD", "CONFIRM PASSWORD", "ADDRESS", "PHONE NO."]}
                        style="mt-[-25px]"
                        subtext={false}
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                    />
                    <LoginGoogleForm
                        linkText="Don't have an account?"
                        linkHref="/login"
                        linkDisplayText="Login"
                        style="mt-20"
                    />
                </div>
            </div>
        </div>
    );
};
