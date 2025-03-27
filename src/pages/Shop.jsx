import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Header from "../pages/Home/Header";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("http://localhost:8080/v1/products");
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
                        {products.map((product) => (
                            <div
                                key={product.id}
                                onClick={() => handleCardClick(product)}
                                className="bg-gray-100 bg-opacity-90 p-4 rounded-xl shadow-md max-w-xs
                                    transition-all duration-300 ease-in-out
                                    hover:bg-white hover:bg-opacity-100
                                    hover:shadow-lg hover:shadow-pink-300 hover:-translate-y-1
                                    cursor-pointer"
                            >
                                <h3 className="text-lg font-semibold text-gray-700">{product.name}</h3>
                                <p className="text-gray-500 text-sm">{product.description || "Delicious and fresh"}</p>
                                <p className="text-red-500 text-sm font-semibold">Limited Offer!</p>

                                <img
                                    src={'src/assets/cakes/' + product.sku + '.png'} // Assuming SKU is the image path
                                    alt={product.name}
                                    className="w-full h-40 object-cover mt-2 rounded"
                                    onError={(e) => { e.target.src = "/src/assets/placeholder.png"; }} // Fallback image
                                />

                                <div className="mt-2 flex items-center space-x-2">
                                    <p className="text-gray-500 text-sm line-through">
                                        ${(product.price * 1.25).toFixed(2)}
                                    </p>
                                    <p className="text-lg font-bold text-green-600">
                                        ${product.price.toFixed(2)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Shop;
