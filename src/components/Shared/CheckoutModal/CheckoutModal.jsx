import React, { useState } from "react";

const CheckoutModal = ({ isOpen, onClose, cart, dispatch }) => {
    if (!isOpen) return null;

    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        notes: "",
    });

    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const filteredCart = cart.map(({ id, image, ...rest }) => rest);
        const formUrl = "https://formspree.io/f/mkgjwzwy";

        fetch(formUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...formData, cartItems: filteredCart, totalPrice }),
        })
            .then((response) => response.json()) // Parse the JSON response
            .then((data) => {
                if (data.ok) {
                    setIsSuccessModalOpen(true); // Show success modal
                    setTimeout(() => {
                        setIsSuccessModalOpen(false);
                        onClose(); // Close main modal
                        dispatch({ type: "CLEAR_CART" }); // Clear cart
                    }, 2000);
                } else {
                    console.error("Something went wrong. Please try again.");
                }
            })
            .catch((error) => {
                console.error("Error:", error); 
            });
    };

    return (
        <>
            {/* Checkout Modal */}
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white p-6 rounded-lg overflow-scroll h-[80vh] w-[80vw] shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Checkout</h2>

                    <div className="flex justify-between gap-8">
                        {/* Cart Items - Left Section */}
                        <div className="w-1/2">
                            <h3 className="text-lg font-semibold mb-2">Items in Your Cart</h3>
                            {cart.length > 0 ? (
                                <ul className="space-y-2 w-full overflow-auto">
                                    {cart.map((item) => (
                                        <li key={item.id} className="flex gap-5 items-center justify-between border-b pb-2">
                                            <div>
                                                <p className="font-medium">{item.name}</p>
                                                <p className="text-gray-500">
                                                    Quantity: {item.quantity} | Price: ${item.price}
                                                </p>
                                            </div>
                                            <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-gray-500">No items in the cart.</p>
                            )}
                        </div>

                        {/* Checkout Form - Right Section */}
                        <div className="w-1/2">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-medium mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 font-medium mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 font-medium mb-2">Address</label>
                                    <textarea
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        required
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                                    ></textarea>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 font-medium mb-2">Additional Notes</label>
                                    <textarea
                                        name="notes"
                                        value={formData.notes}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                                    ></textarea>
                                </div>

                                {/* Total Price */}
                                <div className="mt-4 flex justify-between items-center">
                                    <p className="text-gray-600">Total Price:</p>
                                    <p className="font-semibold text-gray-900">${totalPrice.toFixed(2)}</p>
                                </div>

                                {/* Buttons */}
                                <div className="flex justify-between mt-4">
                                    <button type="button" onClick={onClose} className="bg-gray-400 px-4 py-2 rounded-lg">
                                        Cancel
                                    </button>
                                    <button type="submit" className="bg-blue/30 hover:bg-blue/70 text-blue font-medium px-4 py-2 rounded-lg">
                                        Place Order
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Success Modal */}
            {isSuccessModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-green-500 text-white p-4 rounded-lg shadow-lg">
                        <p>🎉 Order Successfully Placed!</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default CheckoutModal;
