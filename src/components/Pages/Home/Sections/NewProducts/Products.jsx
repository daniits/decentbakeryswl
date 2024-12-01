import React, { useEffect, useState, useRef } from "react";

const Products = () => {
  const products = [
    { img: "/images/image/product1.png", name: "Product 1", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", price: "$13.99" },
    { img: "/images/image/product2.png", name: "Product 2", details: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price: "$15.99" },
    { img: "/images/image/product3.png", name: "Product 3", details: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.", price: "$12.99" },
    { img: "/images/image/product4.png", name: "Product 4", details: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.", price: "$19.99" },
    { img: "/images/image/product5.png", name: "Product 5", details: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.", price: "$9.99" },
    { img: "/images/image/product1.png", name: "Product 6", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", price: "$17.99" },
    { img: "/images/image/product2.png", name: "Product 7", details: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", price: "$14.99" },
    { img: "/images/image/product3.png", name: "Product 8", details: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.", price: "$16.99" },
  ];

  return (
    <div className="bg-white p-10">
      <h2 className="text-center text-2xl font-bold text-gray-700 mb-8">Our Products</h2>
      <div
        className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:px-10 lg:px-32 transition-all duration-1000 `}
      >
        {products.map((product, key) => (
          <div          
            key={key}
            className={`bg-white w-[100%] sm:shadow-2xl lg:shadow-md lg:hover:shadow-2xl rounded-3xl p-4 flex flex-col transition-shadow duration-300 border-[1px]`}
          >
            <div className="w-[100%] h-auto flex items-center justify-center mb-0">
              <img src={product.img} alt={product.name} className="h-full" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{product.details}</p>
            <div className="mt-auto flex sm:gap-4 lg:gap-4 items-center justify-between">
              <button className="bg-[#fc7c7c] text-sm font-semibold text-white px-5 py-1 rounded-full pop-up transition-colors duration-300">
                Order
              </button>
              <h3 className="text-[15px] lg:text-lg font-bold text-gray-800">
                <span className="text-sm font-medium text-gray-500">from</span> {product.price}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
