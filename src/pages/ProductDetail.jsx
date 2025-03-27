import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Navbar from '../components/navbar';
import Header from '../pages/Home/Header';

const ProductDetail = () => {
    const location = useLocation();
    const product = location.state?.product; // Access the product data passed via navigation
    const [showPopup, setShowPopup] = useState(false);
    const [popupImage, setPopupImage] = useState('');

    if (!product) {
        return <div className="text-center text-lg font-semibold text-red-500 mt-10">No product details available.</div>;
    }

    const handleMouseEnter = (image) => {
        setPopupImage(image);
        setShowPopup(true);
    };

    const handleMouseLeave = () => {
        setShowPopup(false);
    };

    return (
        <div>
            <Navbar />
            <Header />
            <div
                className="min-h-screen flex flex-col items-center py-10 px-5 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/src/assets/Bgpattern.png')" }}
            >
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Side - Product Image */}
                    <div className="relative flex justify-center items-center flex-col">
                        <div className="relative flex justify-center">
                            <img
                                src={'src/assets/cakes/' + product.sku + '.png'}
                                alt={product.name}
                                className="w-80 h-80 object-cover rounded-lg"
                                onError={(e) => { e.target.src = "/src/assets/placeholder.png"; }} // Fallback image
                            />
                            {showPopup && (
                                <div className="absolute inset-0 flex items-center justify-center bg-white shadow-lg p-2 sm:p-4 rounded-lg z-10 w-[90%] sm:w-80 max-w-full h-auto">
                                    <img
                                        src={popupImage}
                                        alt="Popup"
                                        className="w-full h-auto max-w-full max-h-full object-contain rounded-lg"
                                    />
                                </div>
                            )}
                        </div>

                        {/* Description */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-2 group">
                            <div className="mt-2 text-left">
                                <div className="flex items-center">
                                    <div className="bg-pink-600 w-2 h-10"></div>
                                    <div className="ml-4">
                                        <h1 className="text-2xl font-semibold text-gray-800">Description</h1>
                                    </div>
                                </div>
                                <p className="mt-1 text-md">{product.description || "Delicious and fresh cake!"}</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Product Details */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
                        <p className="text-xl text-gray-700">${product.price.toFixed(2)}</p>

                        <div className="mt-4">
                            <p className="font-semibold">Choose weight (in pounds)</p>
                            <div className="flex gap-2 mt-2">
                                {[0.5, 1, 2, 3].map((weight) => (
                                    <button key={weight} className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700">
                                        {weight} lb
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Delivery Date & Location */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-2">
                            <div className="mt-2">
                                <label className="font-semibold">Delivery Date:</label>
                                <input type="date" className="border p-2 rounded-sm w-full mt-1" />
                            </div>
                            <div className="mt-2">
                                <label className="font-semibold">Location:</label>
                                <select className="border p-2 rounded-sm w-full mt-1">
                                    <option>--Select Location--</option>
                                    <option value="Kathmandu">Kathmandu</option>
                                    <option value="Lalitpur">Lalitpur</option>
                                    <option value="Bhaktapur">Bhaktapur</option>
                                </select>
                            </div>
                        </div>

                        {/* Time */}
                        <div className="mt-2">
                            <label className="font-semibold">Time:</label>
                            <select className="border p-2 rounded-sm w-full mt-1">
                                <option>--Select Time--</option>
                                <option value="Morning">Morning (9 AM - 12 PM)</option>
                                <option value="Afternoon">Afternoon (12 PM - 4 PM)</option>
                                <option value="Evening">Evening (4 PM - 8 PM)</option>
                            </select>
                        </div>

                        <div className="mt-4">
                            <textarea
                                placeholder="Message on Cake, eg: Happy Birthday"
                                className="border p-2 rounded-sm w-full"
                            />
                        </div>

                        <div className="mt-4 flex gap-4">
                            <button className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600">Buy Now</button>
                            <button className="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-400">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
