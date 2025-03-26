import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const CakeModel = ({ modelPath, scale, position = [0, 0, 0] }) => {
    const { scene } = useGLTF(modelPath);
    const modelRef = useRef();

    useFrame((state, delta) => {
        if (modelRef.current) {
            modelRef.current.rotation.y += delta * 0.5; // Slow rotation effect
        }
    });

    return <primitive ref={modelRef} object={scene} scale={scale} position={position} />;
};

const CakeCanvas = ({ modelPath, scale, position }) => {
    return (
        <div className="w-full h-40">
            <Canvas camera={{ position: [0, 3, 7], fov: 45 }}>
                <Suspense fallback={null}>
                    <ambientLight intensity={2} />
                    <directionalLight position={[2, 5, 3]} intensity={3} />
                    <CakeModel modelPath={modelPath} scale={scale} position={position} />
                </Suspense>
                <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
        </div>
    );
};

const FeatureProducts = () => {
    return (
        <div className="flex flex-col items-center py-10 px-5 bg-cover bg-center bg-no-repeat mt-15 pb-25"
            style={{ backgroundImage: "url('src/assets/Bgpattern.png')" }}>

            {/* Section Title */}
            <div className="text-center">
                <p className="text-pink-500 font-semibold" style={{ fontFamily: "'Kalam', cursive" }}>Best Selling</p>
                <h2 className="text-2xl my-2" style={{ color: '#204B6F' }}>Featured Products</h2>
                <p className="text-gray-400 mt-2 max-w-md mx-auto">
                    Discover our most popular cakes, now in stunning 3D.
                </p>
            </div>

            {/* Product Cards (Three in a Row) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                {/* Product 1 */}
                <div className="bg-gray-100 bg-opacity-90 p-6 rounded-xl shadow-md text-center max-w-sm">
                    <h3 className="text-lg font-semibold text-gray-700">Red Velvet Cake</h3>
                    <p className="text-gray-500 text-sm">Classic Delight</p>
                    <p className="text-red-500 text-sm font-semibold">-30% off</p>
                    <CakeCanvas modelPath="/RedVelvet.glb" scale={1.3} position={[0, -1, 0]} />
                    <p className="text-gray-400 line-through">$119.00</p>
                    <p className="text-lg font-bold">$100.00</p>
                </div>

                {/* Product 2 */}
                <div className="bg-gray-100 bg-opacity-90 p-6 rounded-xl shadow-md text-center max-w-sm">
                    <h3 className="text-lg font-semibold text-gray-700">Black Forest Cake</h3>
                    <p className="text-gray-500 text-sm">Chocolate & Cherry</p>
                    <p className="text-red-500 text-sm font-semibold">-30% off</p>
                    <CakeCanvas modelPath="/chocolate_cake.glb" scale={2} position={[0, 0, 0]} />
                    <p className="text-gray-400 line-through">$119.00</p>
                    <p className="text-lg font-bold">$100.00</p>
                </div>

                {/* Product 3 */}
                <div className="bg-gray-100 bg-opacity-90 p-6 rounded-xl shadow-md text-center max-w-sm">
                    <h3 className="text-lg font-semibold text-gray-700">Strawberry Cake</h3>
                    <p className="text-gray-500 text-sm">Sweet & Fruity</p>
                    <p className="text-red-500 text-sm font-semibold">-30% off</p>
                    <CakeCanvas modelPath="/cheese_cake_with_frosting.glb" scale={30} position={[0, -0.7, 0]} />
                    <p className="text-gray-400 line-through">$119.00</p>
                    <p className="text-lg font-bold">$100.00</p>
                </div>
            </div>
        </div>
    );
};

export default FeatureProducts;
