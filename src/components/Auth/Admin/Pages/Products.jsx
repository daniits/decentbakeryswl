import React, { useState } from "react";

const Products = () => {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Chocolate Cake",
            category: "Cakes",
            price: "$20.00",
            stock: 15,
            description: "A delicious chocolate-flavored cake.",
        },
        {
            id: 2,
            name: "Blueberry Muffin",
            category: "Muffins",
            price: "$5.00",
            stock: 30,
            description: "Freshly baked blueberry muffins.",
        },
        {
            id: 3,
            name: "Croissant",
            category: "Pastries",
            price: "$3.50",
            stock: 20,
            description: "Flaky and buttery croissants.",
        },
    ]);

    const [showAddProductForm, setShowAddProductForm] = useState(false);
    const [newProduct, setNewProduct] = useState({
        name: "",
        category: "",
        price: "",
        stock: "",
        description: "",
    });

    // Handle input change for adding new product
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    // Add a new product
    const handleAddProduct = (e) => {
        e.preventDefault();
        const id = products.length + 1;
        setProducts([...products, { id, ...newProduct }]);
        setNewProduct({
            name: "",
            category: "",
            price: "",
            stock: "",
            description: "",
        });
        setShowAddProductForm(false);
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            setProducts(products.filter((product) => product.id !== id));
        }
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Products</h1>

            {/* Add Product Button */}
            <div className="flex items-center justify-between mb-4">
                <button
                    onClick={() => setShowAddProductForm(!showAddProductForm)}
                    className="bg-blue text-white px-4 py-2 rounded-md hover:bg-blue/80 transition duration-300"
                >
                    {showAddProductForm ? "Cancel" : "Add New Product"}
                </button>
            </div>

            {/* Add Product Form */}
            {showAddProductForm && (
                <form
                    onSubmit={handleAddProduct}
                    className="bg-gray-100 p-4 rounded-md mb-6"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Product Name"
                            value={newProduct.name}
                            onChange={handleInputChange}
                            required
                            className="border border-gray-300 rounded-md p-2"
                        />
                        <input
                            type="text"
                            name="category"
                            placeholder="Category"
                            value={newProduct.category}
                            onChange={handleInputChange}
                            required
                            className="border border-gray-300 rounded-md p-2"
                        />
                        <input
                            type="number"
                            name="price"
                            placeholder="Price"
                            value={newProduct.price}
                            onChange={handleInputChange}
                            required
                            className="border border-gray-300 rounded-md p-2"
                        />
                        <input
                            type="number"
                            name="stock"
                            placeholder="Stock Quantity"
                            value={newProduct.stock}
                            onChange={handleInputChange}
                            required
                            className="border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={newProduct.description}
                        onChange={handleInputChange}
                        required
                        className="border border-gray-300 rounded-md p-2 w-full mb-4"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-pink text-white px-4 py-2 rounded-md hover:bg-blue transition duration-300"
                    >
                        Add Product
                    </button>
                </form>
            )}

            {/* Products Table or Card View */}
            <div className="overflow-x-auto">
                <table className="hidden md:table w-full border-collapse border border-gray-300">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="p-3 border border-gray-300 text-left">ID</th>
                            <th className="p-3 border border-gray-300 text-left">Name</th>
                            <th className="p-3 border border-gray-300 text-left">Category</th>
                            <th className="p-3 border border-gray-300 text-left">Price</th>
                            <th className="p-3 border border-gray-300 text-left">Stock</th>
                            <th className="p-3 border border-gray-300 text-left">Description</th>
                            <th className="p-3 border border-gray-300 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id} className="hover:bg-gray-100">
                                <td className="p-3 border border-gray-300">{product.id}</td>
                                <td className="p-3 border border-gray-300">{product.name}</td>
                                <td className="p-3 border border-gray-300">{product.category}</td>
                                <td className="p-3 border border-gray-300">{product.price}</td>
                                <td className="p-3 border border-gray-300">{product.stock}</td>
                                <td className="p-3 border border-gray-300">{product.description}</td>
                                <td className="p-3 border border-gray-300 text-center">
                                    <button className="text-blue-500 hover:underline mr-3">
                                        Edit
                                    </button>
                                    <button
                                        className="text-red-500 hover:underline"
                                        onClick={() => handleDelete(product.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Card View for Mobile */}
                <div className="grid grid-cols-1 gap-4 md:hidden">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-gray-100 p-4 rounded-md shadow hover:shadow-md transition duration-300"
                        >
                            <h3 className="font-bold text-gray-800">{product.name}</h3>
                            <p className="text-sm text-gray-600">{product.description}</p>
                            <p className="text-sm text-gray-600">Category: {product.category}</p>
                            <p className="text-sm text-gray-600">Price: {product.price}</p>
                            <p className="text-sm text-gray-600">Stock: {product.stock}</p>
                            <div className="mt-4 flex justify-end space-x-3">
                                <button className="text-blue-500 hover:underline">Edit</button>
                                <button
                                    className="text-red-500 hover:underline"
                                    onClick={() => handleDelete(product.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Products;
