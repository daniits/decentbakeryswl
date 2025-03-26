import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CheckoutModal = ({ isOpen, onClose, cart, dispatch }) => {
  console.log(cart)
  if (!isOpen) return null;

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
  });
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const customEmailTemplate = `
    <div style="font-family: Arial, sans-serif;">
      <h1 style="color: #2c3e50;">Order Confirmation</h1>
      <p>Dear ${formData.name || "Customer"},</p>
      <p>Thank you for your order. Here are your order details:</p>
      <ul>
        ${cart
          .map(
            (item) =>
              `<li>${item.name} - Qty: ${item.quantity} - Price: $${item.price}</li>`
          )
          .join("")}
      </ul>
      <p><strong>Total Price: $${totalPrice.toFixed(2)}</strong></p>
      <p>We will contact you shortly on ${formData.phone} or via email: ${formData.email}</p>
      <p>Regards, <br/> Your Company Name</p>
    </div>
  `;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      if (!cart || cart.length === 0) {
        console.error("Cart is empty.");
        return;
      }
  
      const orderPayload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        additionalNotes: formData.notes,
        cart: cart.map(item => ({
          _id: item.id,
          quantity: item.quantity,
        })),
      };
  
      const res = await fetch("http://nodejs-env.eba-hmsmsigv.us-east-1.elasticbeanstalk.com/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderPayload),
      });
  
      const data = await res.json();
  
      if (!res.ok) {
        console.error("Order error:", data.error);
        return;
      }
  
      setIsSuccessModalOpen(true);
      setTimeout(() => {
        setIsSuccessModalOpen(false);
        onClose();
        dispatch({ type: "CLEAR_CART" });
      }, 2000);
    } catch (err) {
      console.error("Submission error:", err);
    }
  };
  
  

  // Animation Variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { y: "-100vh", opacity: 0, scale: 0.8 },
    visible: {
      y: "0",
      opacity: 1,
      scale: 1,
      transition: { delay: 0.1, duration: 0.5 },
    },
  };

  const successVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
  };

  return (
    <>
      {/* Backdrop & Modal Container */}
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <motion.div
          className="bg-white p-8 rounded-lg overflow-y-auto max-h-[80vh] w-full md:w-3/4 lg:w-1/2 shadow-2xl"
          variants={modalVariants}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Checkout</h2>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Section – Cart Items */}
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-3">
                Items in Your Cart
              </h3>
              {cart.length > 0 ? (
                <ul className="space-y-3 overflow-auto max-h-[50vh]">
                  {cart.map((item) => (
                    <motion.li
                      key={item.id}
                      className="flex justify-between items-center border-b pb-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-gray-500 text-sm">
                          Qty: {item.quantity} | Price: Rs. {item.price}
                        </p>
                      </div>
                      <p className="font-medium">
                        Rs. {(item.price * item.quantity).toFixed(2)}
                      </p>
                    </motion.li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No items in the cart.</p>
              )}
            </div>
            {/* Right Section – Checkout Form */}
            <div className="md:w-1/2">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Address
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Additional Notes
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                {/* Total Price */}
                <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
                  <p className="text-gray-600">Total Price:</p>
                  <p className="font-semibold text-gray-900">
                    Rs. {totalPrice.toFixed(2)}
                  </p>
                </div>
                {/* Buttons */}
                <div className="flex justify-between mt-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="bg-gray-400 hover:bg-gray-500 text-white font-medium px-4 py-2 rounded-lg transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue text-white font-medium px-4 py-2 rounded-lg transition"
                  >
                    Place Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Success Modal */}
      <AnimatePresence>
        {isSuccessModalOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            variants={successVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="bg-green-500 text-white p-4 rounded-lg shadow-lg">
              <p className="text-lg font-bold">🎉 Order Successfully Placed!</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CheckoutModal;
