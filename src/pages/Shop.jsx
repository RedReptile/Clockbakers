import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch product data dynamically from an API
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

  return (
    <div>
      <Navbar />
      <Header />

      <div
        className="min-h-screen flex flex-col items-center py-10 px-5 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/src/assets/Bgpattern.png')" }} // Ensure this is dynamically loaded if needed
      >
        <div className="bg-transparent p-6 rounded-lg">
          <h2 className="text-2xl text-center font-semibold text-gray-800">Featured Products</h2>
          <p className="text-gray-600 text-center max-w-md mt-2">
            Discover our best-selling cakes and desserts.
          </p>
        </div>

        {/* Loading and Error Handling */}
        {loading ? (
          <p className="text-gray-700 mt-6">Loading products...</p>
        ) : error ? (
          <p className="text-red-500 mt-6">Error: {error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-1">
            {products.map((product, index) => (
              <div key={index} className="bg-gray-100 bg-opacity-90 p-4 rounded-xl shadow-md max-w-xs">
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
};

export default Shop;
