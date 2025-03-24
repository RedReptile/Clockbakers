import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupImage, setPopupImage] = useState('');

  useEffect(() => {
    // Fetch product data dynamically from the JSON file
    const fetchProductData = async () => {
      try {
        const response = await fetch('src/tryjson/productDetail.json'); // Path to the JSON file
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product data:", error);
      }
    };

    fetchProductData();
  }, []);

  const handleMouseEnter = (image) => {
    setPopupImage(image);
    setShowPopup(true);
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
    <Navbar/>
    <Header/>
    <div
        className="min-h-screen flex flex-col items-center py-10 px-5 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/src/assets/Bgpattern.png')" }} // Ensure this is dynamically loaded if needed
      >
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
       
        {/* left Side */}
        <div className="relative flex justify-center items-center flex-col">
          <div className="relative flex justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-80 h-80 object-cover rounded-lg"
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
          <div className="flex gap-2 mt-4">
            {product.thumbnails.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="Thumbnail"
                className="w-15 h-15 rounded-lg cursor-pointer border border-gray-300 hover:border-pink-500"
                onMouseEnter={() => handleMouseEnter(image)}
                onMouseLeave={handleMouseLeave}
              />
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
          <p className="text-xl text-gray-700">${product.price.toFixed(2)}</p>
          <div className="mt-4">
            <p className="font-semibold">Choose weight (in pound)</p>
            <div className="flex gap-2 mt-2">
              {product.weights.map((weight) => (
                <button
                  key={weight}
                  className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600"
                >
                  {weight}
                </button>
              ))}
            </div>
          </div>
          {/* Delivery Date & Location */}    
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <div className="mt-2">
            <label className="font-semibold">Delivery Date:</label>
            <input
              type="date"
              className="border p-2 rounded-sm w-full mt-1"
              value={product.deliveryDate}
              readOnly
            />
          </div>
          <div className="mt-2">
            <label className="font-semibold">Location:</label>
            <select className="border p-2 rounded-sm w-full mt-1">
              <option>--Select Location--</option>
              {product.location.map((location, index) => (
                <option key={index} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>
          </div>
          
          {/* Time */}
          <div className="mt-2">
            <label className="font-semibold">Time:</label>
            <select className="border p-2 rounded-sm w-full mt-1">
              <option>--Select Time--</option>
              {product.time.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
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
