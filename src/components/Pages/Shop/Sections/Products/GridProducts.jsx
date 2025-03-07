import React, { useState } from "react";
import { Link } from "react-router-dom";
import { gridProducts } from "../../../../Services/data/data";
import SvgIcon from "../../../../../../public/images/Svgicon";
import Loader from "../../../../Shared/Loader/Loader";
import { useCart } from "../../../../Services/Context/CartContext";

const GridProducts = ({ products, loading }) => {
    console.log("passed products", products)
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9;

    // Calculate the products to display for the current page
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // Calculate the total number of pages
    const totalPages = Math.ceil(products.length / productsPerPage);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const { dispatch } = useCart();
    const [isOrdering, setIsOrdering] = useState(null);
    const [selProduct, setSelProduct] = useState()
    const [count, setCount] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [addedProduct, setAddedProduct] = useState(null);


    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => Math.max(prev - 1, 1));

    const handleAddToCart = (product) => {
        if (!product) return; // Prevent adding undefined product

        const cartItem = {
            id: product._id, // Ensure id is correct (check if your reducer expects _id or id)
            name: product.name,
            price: product.price,
            quantity: count,
            image: product.productImages?.[0] || "", // Default image fallback
        };

        console.log("Adding to cart:", cartItem);
        dispatch({ type: "ADD_TO_CART", payload: cartItem });
        setAddedProduct(cartItem);
        setIsModalOpen(true);
        setCount(1)
    };



    return (
        <div className="bg-white p-10 w-[70vw]">
            {loading ?
                (
                    <div>
                        <Loader />
                    </div>
                ) :
                (
                    <>
                        <div className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000`}>
                            {currentProducts.map((product, key) => (
                                <div
                                    key={key}
                                    className={`bg-white w-[100%] sm:shadow-2xl lg:shadow-md lg:hover:shadow-2xl rounded-3xl p-4 flex flex-col transition-shadow duration-300 border-[1px]`}
                                >
                                    <div className="w-[100%] rounded-xl h-[200px] flex justify-self-center self-center overflow-hidden">
                                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                    </div>

                                    <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                                    <p className="text-sm text-gray-600 mb-4">{product.description} </p>
                                    <div className="mt-auto flex sm:gap-4 lg:gap-4 items-center justify-between">
                                        {isOrdering === product._id ? (
                                            <div className="flex items-center justify-between w-full">
                                                <button
                                                    className="bg-[#fc7c7c] text-sm font-semibold text-white px-5 py-1 rounded-full pop-up transition-colors duration-300"
                                                    onClick={() => handleAddToCart(selProduct)}
                                                >
                                                    Add to Cart
                                                </button>
                                                <div className="flex items-center gap-2 px-3 bg-blue text-white rounded">
                                                    <button onClick={decrement} className="p-1">-</button>
                                                    <span className="text-lg font-semibold">{count}</span>
                                                    <button onClick={increment} className="p-1">+</button>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="flex justify-between w-full">
                                                <button
                                                    className="bg-[#fc7c7c] text-sm font-semibold text-white px-5 py-1 rounded-full pop-up transition-colors duration-300"
                                                    onClick={() => {
                                                        setIsOrdering(product._id);
                                                        setSelProduct(product);
                                                    }}
                                                >
                                                    Order
                                                </button>

                                                <h3 className="text-[15px] lg:text-lg font-bold text-gray-800">
                                                    <span className="text-sm font-medium text-gray-500">from</span> Rs/- {product.price}
                                                </h3>
                                            </div>

                                        )}
                                    </div>
                                </div>
                            ))}
                            {isModalOpen && addedProduct && (
                                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                    <div className="bg-white p-6 rounded-xl shadow-lg w-80 text-center">
                                        <h3 className="text-lg font-semibold">{addedProduct.name} added to cart!</h3>
                                        <p className="text-gray-500">Quantity: {addedProduct.quantity}</p>

                                        <div className="mt-4 flex justify-center gap-4">
                                            <button
                                                onClick={() => setIsModalOpen(false)}
                                                className="px-4 py-2 text-black font-medium bg-blue/10 rounded-full hover:bg-blue/50"
                                            >
                                                Stay Here
                                            </button>
                                            <button
                                                onClick={() => window.location.href = "/cart/:productId"} // Redirect to cart page
                                                className="px-4 py-2 bg-blue-600 text-pink font-medium bg-pink/10 rounded-full hover:bg-pink/50 hover:bg-blue-700"
                                            >
                                                Go to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                        <div>


                            {products.length > 9 ? (
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
                            ) : ("")}
                        </div>
                    </>
                )}

        </div>
    );
};

export default GridProducts;
