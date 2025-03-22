import React from 'react';
import headerpic from '../assets/header-pic.jpg';
import logowtxt from '../assets/logo-w-txt.png';

const Header = () => {
    return (
        <header className="relative h-[650px] flex items-center justify-center bg-cover bg-center" style={{
            backgroundImage: `url(${headerpic})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            {/* Curved Bottom */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                <svg
                    viewBox="0 0 1440 110"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current text-white"
                >
                    {/* S-Shaped */}
                    <path
                        d="M0,80 C200,40 400,120 600,110 C800,120 1000,40 1200,80 C1400,120 1440,80 1440,80 V120 H0 Z"
                        fill="currentColor"
                    />
                </svg>
            </div>

            {/* Main Logo */}
            <div className="relative z-10 text-center top-30">
                <img
                    src={logowtxt}
                    alt="Clock Bakers Logo"
                    className="h-170 mx-auto"
                />
            </div>
        </header>
    );
};

export default Header;
