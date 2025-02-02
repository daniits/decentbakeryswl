import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";

const EditProductModal = ({ product, isOpen, onClose, onSave }) => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        stock: "",
        description: "",
    });
    console.log(product)
    console.log(formData.name)

    useEffect(() => {
        if (product) {
            setFormData({
                name: product.name || "",
                price: product.price || "",
                stock: product.stock || "",
                description: product.description || "",
            });
        }
    }, [product]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loading when save is clicked
        try {
            await onSave(formData); // Call the onSave function passed as a prop
        } finally {
            setLoading(false); // Stop loading regardless of success or failure
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg w-96">
                <h2 className="text-xl font-bold mb-4">Edit Product</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded p-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Price</label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded p-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Stock</label>
                        <input
                            type="number"
                            name="stock"
                            value={formData.stock}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded p-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded p-2"
                            required
                        />
                    </div>
                    <div className="flex justify-end space-x-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-300 rounded"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className={`px-4 py-2 rounded ${loading
                                    ? "bg-blue-400 text-white cursor-not-allowed"
                                    : "bg-blue text-white"
                                }`}
                            disabled={loading} // Disable button during loading
                        >
                            {loading ? (<Loader/>) : "Save"} {/* Show loading text */}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProductModal;
