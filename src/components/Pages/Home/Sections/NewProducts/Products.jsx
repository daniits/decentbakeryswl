import React from "react";
import { products } from "../../../../Services/data/data";
import { Link } from "react-router-dom";

const Products = () => {
   

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
              <Link to={`/product/${product.id}`}>
              <button className="bg-[#fc7c7c] text-sm font-semibold text-white px-5 py-1 rounded-full pop-up transition-colors duration-300">
                Order
              </button>
              </Link>
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
