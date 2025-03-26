<<<<<<< HEAD
import React from 'react';
import Navbar from '../components/Navbar';
import Header from './Home/Header';

const products = [

    { name: "Red Velvet Cake", image: "src/assets/Red Velvet Cake.png", price: 119, discountPrice: 100 },
    { name: "Black Forest Cake", image: "src/assets/Black Forest Cake.png", price: 119, discountPrice: 100 },
    { name: "Strawberry cake", image: "src/assets/Strawberry cake.png", price: 119, discountPrice: 100 },
    { name: "Southern Chocolate Cake", image: "src/assets/Chocolate cake.png", price: 119, discountPrice: 100 },
];

const Shop = () => {
    return (
        <div>
            <Navbar />
            <Header />

            <div
                className="min-h-screen flex flex-col items-center py-10 px-5 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('src/assets/Bgpattern.png')" }}
            >
                <div className="bg-transparent p-6 rounded-lg">
                    <h2 className="text-2xl text-center font-semibold text-gray-800">Featured Products</h2>
                    <p className="text-gray-600 text-center max-w-md mt-2">
                        Lorem ipsum placeholder text for featured product description.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                    {Array(3).fill(products).flat().map((product, index) => (
                        <div key={index} className="bg-gray-100 bg-opacity-90 p-4 rounded-xl shadow-md max-w-xs">
                            <h3 className="text-lg font-semibold text-gray-700">{product.name}</h3>
                            <p className="text-gray-500 text-sm">Write Something</p>
                            <p className="text-red-500 text-sm font-semibold">-30% off</p>
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-40 object-cover mt-2 rounded"
                            />
                            <p className="text-gray-400 line-through">${product.price.toFixed(2)}</p>
                            <p className="text-lg font-bold">${product.discountPrice.toFixed(2)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
=======
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("src/tryjson/products.json"); 
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Function to handle card click
  const handleCardClick = (product) => {
    navigate('/productdetails', { state: { product } });
  };

  return (
    <div>
      <Navbar />
      <Header />

      <div
        className="min-h-screen flex flex-col items-center py-10 px-5 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/src/assets/Bgpattern.png')" }} 
      >
        <div className="bg-transparent p-6 rounded-lg">
          <h2 className="text-2xl text-center font-semibold text-gray-800">Featured Products</h2>
          <p className="text-gray-600 text-center max-w-md mt-2">
            Discover our best-selling cakes and desserts.
          </p>
        </div>

        {loading ? (
          <p className="text-gray-700 mt-6">Loading products...</p>
        ) : error ? (
          <p className="text-red-500 mt-6">Error: {error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-1">
            {products.map((product, index) => (
              <div 
                key={index} 
                // Added onClick handler
                onClick={() => handleCardClick(product)} // Added onClick handler
                className="bg-gray-100 bg-opacity-90 p-4 rounded-xl shadow-md max-w-xs
                          transition-all duration-300 ease-in-out
                          hover:bg-white hover:bg-opacity-100
                          hover:shadow-lg hover:shadow-pink-300 hover:-translate-y-1
                          cursor-pointer" 
              >
                <h3 className="text-lg font-semibold text-gray-700">{product.name}</h3>
                <p className="text-gray-500 text-sm">{product.description || "Delicious and fresh"}</p>
                <p className="text-red-500 text-sm font-semibold">-30% off</p>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover mt-2 rounded"
                />
                <p className="text-gray-400 line-through">${product.originalPrice.toFixed(2)}</p>
                <p className="text-lg font-bold">${product.discountPrice.toFixed(2)}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
>>>>>>> origin/hitendra-branch
};

export default Shop;