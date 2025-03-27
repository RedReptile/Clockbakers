import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/navbar";
import { AuthForm } from "../components/authForm";
import { LoginGoogleForm } from "../components/LoginGoogleForm";
import rectangle from '../assets/Rectangle.png';
import formbg from '../assets/formbg.png';

export const LoginPage = () => {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    useEffect(() => {
        if (localStorage.getItem("auth_token")) {
            navigate("/");
        }
    }, [navigate]);

    const handleChange = (e, index) => {
        const { value } = e.target;
        const fieldName = ["email", "password"][index];
        setLoginData({ ...loginData, [fieldName]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log("Logging in with:", loginData.email);

            const response = await fetch("http://localhost:8080/v1/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(loginData),
            });

            // console.log("Response Headers:", Object.fromEntries(response.headers.entries()));

            const authHeader = response.headers.get("Authorization");

            if (!authHeader) {
                throw new Error("No Authorization header received from backend. Possible CORS issue.");
            }

            if (!authHeader.startsWith("Bearer ")) {
                throw new Error(`Invalid Authorization header format: ${authHeader}`);
            }

            const token = authHeader.split(" ")[1];

            localStorage.setItem("auth_token", token);
            const userData = parseJwt(token);

            navigate("/");

        } catch (error) {
            console.error("Login error:", error.message);
            alert("Login failed: " + error.message);
        }
    };


    function parseJwt(token) {
        try {
            const base64Url = token.split('.')[1];
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            return JSON.parse(atob(base64));
        } catch (e) {
            console.error("JWT parsing failed:", e);
            return null;
        }
    }

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
                        onChange={handleChange}
                        onSubmit={handleSubmit} // Add this prop
                    />

                    <LoginGoogleForm
                        linkText="Don't have an account?"
                        linkHref="/signup"
                        linkDisplayText="Signup"
                        style="mt-15"
                    />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
