import React, { useState } from "react";
import Header from "../../Shared/Header/Header";
import { Link } from "react-router-dom";
import { useCart } from "../../Services/Context/CartContext";

const Cart = () => {
    const { cart, dispatch } = useCart();

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
                <div className="cart-items space-y-4">
                    {cart.length > 0 ? (
                        cart.map((item) => (
                            <div
                                key={item.id}
                                className="cart-item flex items-center justify-between border-b pb-4"
                            >
                                <div className="flex items-center space-x-4">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-16 h-16 rounded"
                                    />
                                    <div>
                                        <h3 className="font-medium">{item.name}</h3>
                                        <p className="text-gray-500">Price: ${item.price}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <input
                                        type="number"
                                        value={quantities[item.id]}
                                        onChange={(e) =>
                                            handleQuantityChange(item.id, e.target.value)
                                        }
                                        className="w-16 p-2 border rounded"
                                    />
                                    <p>Total: ${(item.price * quantities[item.id]).toFixed(2)}</p>

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

                {/* Price Summary Section */}
                <div className="mt-6 border-t pt-4">
                    <h3 className="text-lg font-bold">Cart Summary</h3>
                    <div className="flex justify-between mt-2">
                        <p className="text-gray-600">Total Price:</p>
                        <p className="font-medium">${totalPrice.toFixed(2)}</p>
                    </div>
                    {cart.length > 0 && (
                        <Link
                        to="/checkout"
                        state={{ cartItems: cart, totalPrice }}
                        className="mt-4 w-full block bg-blue-600 text-black text-center py-2 rounded hover:bg-blue-700"
                    >
                        Proceed to Checkout
                    </Link>
                    
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;
