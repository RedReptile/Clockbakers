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
};

export default Shop;
