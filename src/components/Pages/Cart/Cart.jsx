import React, { useState } from "react";
import Header from "../../Shared/Header/Header";
import { Link } from "react-router-dom";
import { useCart } from "../../Services/Context/CartContext";
import CheckoutModal from "../../Shared/CheckoutModal/CheckoutModal";

const Cart = () => {
    const { cart, dispatch } = useCart();
    const [isModalOpen, setIsModalOpen] = useState(false);

    // State for item quantities
    const [quantities, setQuantities] = useState(
        cart.reduce((acc, item) => ({ ...acc, [item.id]: item.quantity }), {})
    );

    // Handle quantity update
    const handleQuantityChange = (id, quantity) => {
        const updatedQuantity = Math.max(1, parseInt(quantity, 10) || 1); // Minimum quantity is 1
        setQuantities((prev) => ({ ...prev, [id]: updatedQuantity }));
        dispatch({
            type: "UPDATE_QUANTITY",
            payload: { id, quantity: updatedQuantity },
        });
    };

    // Handle item removal
    const handleRemove = (id) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
    };

    // Calculate total price
    const totalPrice = cart.reduce((total, item) => {
        const price = parseFloat(item.price) || 0; // Ensure price is a number
        const quantity = quantities[item.id] || 0; // Use updated quantity
        return total + price * quantity;
    }, 0);

    return (
        <div>
            <Header pageName="Cart" path="false" />
            <div className="container mx-auto p-6">
                <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
                <div className="cart-table w-full border-collapse border border-gray-300">
                    <div className="cart-header grid grid-cols-6 bg-blue/90 text-white font-medium text-left p-4">
                        <div className="col-span-1">Product Name</div>
                        <div className="col-span-1">Image</div>
                        <div className="col-span-1">Price</div>
                        <div className="col-span-1">Quantity</div>
                        <div className="col-span-1">Total</div>
                        <div className="col-span-1">Actions</div>
                    </div>

                    {cart.length > 0 ? (
                        cart.map((item) => (
                            <div
                                key={item.id}
                                className="cart-row grid grid-cols-6 items-center border-b border-gray-300 p-4"
                            >
                                {/* Product Name */}
                                <div className="col-span-1 font-medium">{item.name}</div>
                                {/* Product Image */}
                                <div className="col-span-1">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-16 h-16 rounded"
                                    />
                                </div>
                                {/* Product Price */}
                                <div className="col-span-1">Rs: {item.price.toFixed(2)}</div>
                                {/* Quantity Input */}
                                <div className="col-span-1 bg-blue w-fit rounded-md">
                                    <div className="flex items-center gap-5 px-2 bg-blue-500 text-white rounded">
                                        <button
                                            className="p-2 text-lg font-bold"
                                            onClick={() => handleQuantityChange(item.id, quantities[item.id] - 1)}
                                            aria-label="Decrease quantity"
                                        >
                                            -
                                        </button>
                                        <h3 className="text-lg font-semibold">{quantities[item.id]}</h3>
                                        <button
                                            className="p-2 text-lg font-bold"
                                            onClick={() => handleQuantityChange(item.id, quantities[item.id] + 1)}
                                            aria-label="Increase quantity"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                {/* Total Price */}
                                <div className="col-span-1 font-medium">
                                    Rs: {(item.price * quantities[item.id]).toFixed(2)}
                                </div>
                                {/* Remove Button */}
                                <div className="col-span-1">
                                    <button
                                        onClick={() => handleRemove(item.id)}
                                        className="text-red-500 hover:underline"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>

                        ))
                    ) : (
                        <p className="text-gray-500">No items in the cart.</p>
                    )}
                </div>
                <div className="flex justify-between mt-5">

                <Link to="/shop">
                    <h3 className="text-xl  md:text-2xl font-semibold   animate-pulse">
                        Continue Shopping...
                    </h3>
                </Link>
                <div className="border-2 justify-self-end border-gray-300 shadow-md p-6 w-[30%] rounded-lg bg-white">
                    <h3 className="text-xl font-bold text-gray-800 border-b pb-2">Cart Summary</h3>

                    <div className="flex justify-between items-center mt-4 text-lg">
                        <p className="text-gray-600">Total Price:</p>
                        <p className="font-semibold text-gray-900">Rs: {totalPrice.toFixed(2)}</p>
                    </div>

                    {cart.length > 0 && (
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="mt-6 w-full block bg-blue hover:bg-pink text-white text-center py-3 rounded-lg font-medium hover:bg-blue-600 transition duration-300"
                        >
                            Proceed to Checkout
                        </button>
                    )}

                    {/* Checkout Modal */}
                    <CheckoutModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        cart={cart}
                        totalPrice={totalPrice}
                        dispatch={dispatch}
                    />
                </div>
                    
                </div>
                {/* Price Summary Section */}
                

            </div>
        </div>
    );
};

export default Cart;
