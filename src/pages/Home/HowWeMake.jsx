import React from "react";
import ingredientIcon from '../../assets/ingredients-icon.png';
import mixingIcon from '../../assets/mixing-icon.png';
import ovenIcon from '../../assets/over-icon.png';
import decorationIcon from '../../assets/decoration.png';
import mainImage from '../../assets/cake-making.png';

const HowWeMake = () => {
    return (
        <section className="bg-gray-100 py-16 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <p className="text-pink-500" style={{ fontFamily: "'Kalam', cursive" }}>We Love What We Do</p>
                <h2 className="text-2xl font-semibold mt-2" style={{ color: '#204B6F' }}>How we make our cakes</h2>
                <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
                    aljkd aouijwe lkjad f.mn adslkif oui adf adfljklkadf oiou wer jljslkdjf
                </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-1 items-center">
                {/* Left Side Steps */}
                <div className="flex flex-col space-y-16 text-right">
                    <div className="flex flex-col items-end">
                        <img src={ingredientIcon} alt="Ingredients" className="w-14" />
                        <h3 className="text-xl font-semibold mt-4" style={{ color: '#204B6F' }}>1. Ingredients</h3>
                        <p className="text-gray-500 mt-2 max-w-xs">aljkd aouijwe lkjad f.mn adslkif oui adf adfljklkadf oiou wer aidslkh fdslkdjf lkjsfdlk</p>
                    </div>
                    <div className="flex flex-col items-end">
                        <img src={mixingIcon} alt="Mixing & Batter" className="w-14" />
                        <h3 className="text-xl font-semibold mt-4" style={{ color: '#204B6F' }}>2. Mixing & Batter</h3>
                        <p className="text-gray-500 mt-2 max-w-xs">aljkd aouijwe lkjad f.mn adslkif oui adf adfljklkadf oiou wer aidslkh fdslkdjf lkjsfdlk</p>
                    </div>
                </div>

                {/* Center Image */}
                <div className="flex justify-center">
                    <img src={mainImage} alt="Cake Making" className="rounded-lg shadow-lg max-w-[250px] md:max-w-[320px]" />
                </div>

                {/* Right Side Steps */}
                <div className="flex flex-col space-y-16 text-left">
                    <div className="flex flex-col items-start">
                        <img src={ovenIcon} alt="Baking" className="w-14" />
                        <h3 className="text-xl font-semibold mt-4" style={{ color: '#204B6F' }}>3. Baking</h3>
                        <p className="text-gray-500 mt-2 max-w-xs">aljkd aouijwe lkjad f.mn adslkif oui adf adfljklkadf oiou wer aidslkh fdslkdjf lkjsfdlk</p>
                    </div>
                    <div className="flex flex-col items-start">
                        <img src={decorationIcon} alt="Decoration" className="w-14" />
                        <h3 className="text-xl font-semibold mt-4" style={{ color: '#204B6F' }}>4. Decoration</h3>
                        <p className="text-gray-500 mt-2 max-w-xs">aljkd aouijwe lkjad f.mn adslkif oui adf adfljklkadf oiou wer aidslkh fdslkdjf lkjsfdlk</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWeMake;
