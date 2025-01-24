
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { listProducts } from "../../../../Services/data/data";
import SvgIcon from "../../../../../../public/images/Svgicon";

const ListProduct = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;

    const indexOfLastProduct = productsPerPage * currentPage; // 9 * 2 = 18
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage; // 18 - 9 = 9
    const currentProducts = listProducts.slice(indexOfFirstProduct, indexOfLastProduct); // starts from indexOfFirstProduct and ends on indexOfLastProduct suppose slice(9, 18) to 9 se shuru kr k 18 tak products extract krlega
    const totalPages = Math.ceil(listProducts.length / productsPerPage)

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="bg-white p-10">
            <div
                className={`flex flex-col  gap-6 transition-all duration-1000 `}
            >
                {currentProducts.map((product, key) => (
                    <div
                        key={key}
                        className={`bg-white flex items-center  w-[100%] sm:shadow-2xl lg:shadow-md lg:hover:shadow-2xl rounded-3xl transition-shadow duration-300 border-[1px] `}
                    >
                        <div className="w-[50%] h-auto flex items-center justify-center ">
                            <img src={product.img} alt={product.name} className="h-full" />
                        </div>

                        <div className="w-[70%] flex flex-col gap-2 h-full justify-center">
                            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                            <p>*****</p>
                            <p className="text-sm text-gray-600 mb-4">{product.details}</p>
                            <div className="mt-auto flex flex-col sm:gap-4 lg:gap-4  justify-between">
                                <Link to={`/product/${product.id}`}>
                                    <button className="bg-pink text-sm font-semibold text-white px-5 py-1 rounded-full pop-up transition-colors duration-300">
                                        Order
                                    </button>
                                </Link>
                                <h3 className="text-[15px] lg:text-lg font-bold text-gray-800">
                                    <span className="text-sm font-medium text-gray-500">from</span> {product.price}
                                </h3>
                            </div>
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

export default ListProduct;
