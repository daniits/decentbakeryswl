import React, { useState } from "react";
import { Link } from "react-router-dom";
import { gridProducts } from "../../../../Services/data/data";
import SvgIcon from "../../../../../../public/images/Svgicon";

const GridProducts = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9;

    // Calculate the products to display for the current page
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = gridProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    // Calculate the total number of pages
    const totalPages = Math.ceil(gridProducts.length / productsPerPage);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="bg-white p-10">
            <div
                className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000`}
            >
                {currentProducts.map((product, key) => (
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

            {/* Pagination Controls */}
            <div className="flex sm:justify-center lg:justify-end mt-6">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="w-10 h-10 flex items-center justify-center text-gray-600 border-2 border-blue hover:border-pink hover:bg-pink rounded-full mr-2 disabled:opacity-50"
                >
                    <SvgIcon iconName="back" className="w-5 h-5" />
                </button>

                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`w-10 h-10 flex items-center justify-center border-2 border-blue ${currentPage === index + 1 ? "bg-blue text-white" : "text-gray-600"
                            } rounded-full mx-1`}
                    >
                        {index + 1}
                    </button>
                ))}

                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`w-10 h-10 flex items-center justify-center text-gray-600 border-2 border-blue hover:border-pink hover:bg-pink rounded-full ml-2 disabled:opacity-50`}
                >
                    <SvgIcon iconName="back" className="rotate-180 w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

export default GridProducts;
