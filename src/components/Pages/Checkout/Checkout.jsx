import React, { useState } from "react"; 
import { useCart } from "../../Services/Context/CartContext";

const Checkout = () => {
    const { cart, dispatch } = useCart(); // Access cart and dispatch from context
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0); // Calculate total price

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        notes: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Submit the form data using Formspree or other services
        const formUrl = "https://formspree.io/f/YOUR_FORM_ID";
        fetch(formUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...formData, cartItems: cart, totalPrice }),
        })
            .then((response) => {
                if (response.ok) {
                    alert("Order placed successfully!");
                    dispatch({ type: "CLEAR_CART" }); // Clear the cart after successful order
                } else {
                    alert("Something went wrong. Please try again.");
                }
            })
            .catch(() => alert("Error submitting the order."));
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
            <h2 className="text-2xl font-bold mb-4">Checkout</h2>
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Items in Your Cart</h3>
                {cart.length > 0 ? (
                    <ul className="space-y-2">
                        {cart.map((item) => (
                            <li
                                key={item.id}
                                className="flex items-center justify-between border-b pb-2"
                            >
                                <div>
                                    <p className="font-medium">{item.name}</p>
                                    <p className="text-gray-500">
                                        Quantity: {item.quantity} | Price: ${item.price}
                                    </p>
                                </div>
                                <p className="font-medium">
                                    Total: ${(item.price * item.quantity).toFixed(2)}
                                </p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500">No items in the cart.</p>
                )}
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full border rounded px-3 py-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border rounded px-3 py-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium">Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full border rounded px-3 py-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium">Address</label>
                    <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="w-full border rounded px-3 py-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium">Additional Notes</label>
                    <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                    />
                </div>
                <div className="mt-6 border-t pt-4">
                    <div className="flex justify-between">
                        <p className="text-gray-600">Total Price:</p>
                        <p className="font-medium">${totalPrice.toFixed(2)}</p>
                    </div>
                </div>
                <button
                    type="submit"
                    className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                    Place Order
                </button>
            </form>
        </div>
    );
};

export default Checkout;
