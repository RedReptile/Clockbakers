import React from 'react';
import leftArrow from '../../assets/left-arrow.png';
import rightArrow from '../../assets/right-arrow.png';
import cakeIcon from '../../assets/cake-icon.png';
import dessertIcon from '../../assets/desert-icon.png';
import cakePresentation from '../../assets/cake-presentation.png';

const Hero = () => {
    return (
        <section className="bg-white text-center py-12 px-6">
            <div className="flex justify-center items-center gap-x-8 mb-22 mt-12">
                <div className="flex flex-col items-center">
                    <img src={cakeIcon} alt="Cake" className="w-16" />
                    <h2 className="mt-2" style={{ color: '#204B6F' }}>Cake</h2>
                    <p className="text-gray-500 text-sm">safe dafsaf fdafd fasddf<br />fdsf sdf sdf sfs </p>
                    <button className="mt-2 text-xs text-black underline underline-offset-4 decoration-pink-600 decoration-2">
                        LEARN MORE
                    </button>
                </div>

                <img src={leftArrow} alt="Arrow Left" className="h-12" />

                <div className="text-center">
                    <p className="text-pink-500 text-s" style={{ fontFamily: "'Kalam', cursive" }}>Our Collection</p>
                    <h1 className="text-xl my-3" style={{ color: '#204B6F' }}>Our Fine Home<br />Made Cakes &<br />Desserts</h1>
                    <p className="text-gray-500 max-w-md">
                        safe dafsaf fdafd fasdf da
                    </p>
                    <button className="bg-pink-500 text-white py-2 px-6 rounded-md mt-3 border-1 hover:bg-white hover:text-pink-500 transition duration-500">Learn More</button>
                </div>

                <img src={rightArrow} alt="Arrow Right" className="h-12" />

                <div className="flex flex-col items-center">
                    <img src={dessertIcon} alt="Dessert" className="w-16" />
                    <h2 className="font-semibold mt-2">Dessert</h2>
                    <p className="text-gray-500 text-sm">safe dafsaf fdafd fasddf<br />fdsf sdf sdf sfs</p>
                    <button className="mt-2 text-xs text-black underline underline-offset-4 decoration-pink-600 decoration-2">
                        LEARN MORE
                    </button>
                </div>
            </div>

            <div className="flex justify-center items-start gap-12">
                <img
                    src={cakePresentation}
                    alt="Cake Presentation"
                    className="rounded-lg shadow-lg w-96 h-auto"
                />
                <div className="text-left max-w-lg mt-5">
                    <p className="text-pink-500 text-s mb-2" style={{ fontFamily: "'Kalam', cursive" }}>Write Something Here</p>
                    <h2 className="text-xl" style={{ color: '#204B6F' }}>Write somethings here too like anything works</h2>
                    <p className="text-gray-500 text-sm mt-2">
                        safe dafsaf fdafd fasdf da fda fda afda fda fda fadasdafts fas asdsd dwasd was dwasd wasd was dwasd sasd wasd wasd sasfsaf dsasd asdafda sda dsa d
                    </p>
                    <div className="grid grid-cols-2 gap-5 mt-4">
                        <div className="bg-pink-100 p-5 rounded-md text-left">
                            <p className="text-pink-600 font-bold text-lg">30+</p>
                            <p className="text-gray-500 text-sm">First card content description</p>
                            <button className="mt-2 text-xs text-black underline underline-offset-4 decoration-pink-600 decoration-2">
                                LEARN MORE
                            </button>
                        </div>

                        <div className="bg-pink-100 p-5 rounded-md text-left">
                            <p className="text-pink-600 font-bold text-lg">50+</p>
                            <p className="text-gray-500 text-sm">Second card different content</p>
                            <button className="mt-2 text-xs text-black underline underline-offset-4 decoration-pink-600 decoration-2">
                                LEARN MORE
                            </button>
                        </div>

                        <div className="bg-pink-100 p-5 rounded-md text-left">
                            <p className="text-pink-600 font-bold text-lg">100+</p>
                            <p className="text-gray-500 text-sm">Third card unique description</p>
                            <button className="mt-2 text-xs text-black underline underline-offset-4 decoration-pink-600 decoration-2">
                                LEARN MORE
                            </button>
                        </div>

                        <div className="bg-pink-100 p-5 rounded-md text-left">
                            <p className="text-pink-600 font-bold text-lg">200+</p>
                            <p className="text-gray-500 text-sm">Fourth card special content</p>
                            <button className="mt-2 text-xs text-black underline underline-offset-4 decoration-pink-600 decoration-2">
                                LEARN MORE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
