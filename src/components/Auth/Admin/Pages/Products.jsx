import axios from "axios";
import React, { useEffect, useState } from "react";
import EditProductModal from "../../../Shared/ProductModal/EditProductModal";
import Loader from "../../../Shared/Loader/Loader";

const Products = () => {
    const BackendURL = import.meta.env.VITE_BACKEND_URL
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([]);
    console.log(products, "dfads")
    const [showAddProductForm, setShowAddProductForm] = useState(false);
    const [newProduct, setNewProduct] = useState({
        name: "",
        category: "",
        price: "",
        stock: "",
        description: "",
    });
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false)
    const [refresh, setRefresh] = useState(false);

    const handleEditClick = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };
    // Handle input change for adding new product
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };
    const handleAddProduct = async () => {
        if (!newProduct) {
            console.log("Add Product Please");
            return;
        }
        setLoading(true);
        try {
            const response = await axios.post(`${BackendURL}/addProducts`, newProduct);
            console.log("Product added successfully:", response.data);
            setRefresh((prev) => !prev); // Toggle refresh state to trigger useEffect
            setShowAddProductForm(!showAddProductForm)
        } catch (error) {
            console.error("Error adding product:", error.response?.data || error.message);
        } finally {
            setLoading(false);
        }
    };
    
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            try {
                const response = await axios.get(`${BackendURL}/getAllProducts`)
                const products = response.data
                console.log(products)
                setProducts(products.products)
                setLoading(false)
            } catch (error) {
                console.error(error.message)
            }
        }

        getProducts()
    }, [refresh])

    const handleDelete = async (id) => {
        setLoading(true);
        try {
            const response = await axios.delete(`${BackendURL}/deleteProduct/${id}`);
            console.log("Product deleted successfully:", response.data);
    
            setDeleteModal(false); // Close modal after successful deletion
            setRefresh((prev) => !prev); // Toggle refresh state to trigger useEffect
            setDeleteModal(false)
        } catch (error) {
            console.error("Unable to delete the product:", error);
        } finally {
            setLoading(false);
        }
    };
    

    const handleSave = async (updatedProduct) => {
        try {
            const response = await axios.put(`${BackendURL}/editProduct/${selectedProduct._id}`, updatedProduct);
            
            console.log("Product updated:", response.data);
            
            handleCloseModal(); // Close the modal after successful update
            setRefresh((prev) => !prev); // Trigger refresh to update product list
        } catch (error) {
            console.error("Error updating product:", error.response?.data || error.message);
        }
    };
    

    const toggleBestSeller = async (id) => {
        setLoading(true);
        try {
            const response = await axios.put(`${BackendURL}/bestSeller/${id}`);
            const updatedProduct = response.data.product;

            setProducts((prevProducts) =>
                prevProducts.map((product) =>
                    product._id === id ? updatedProduct : product
                )
            );
        } catch (error) {
            console.error("Error updating best seller status:", error);
        } finally {
            setLoading(false);
        }
    };


    return (

        <div className="p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Products</h1>

            {loading ?
                (
                    <div className="w-full h-full">
                        <Loader />
                    </div>

                ) : (
                    <>
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
                                        {/* <th className="p-3 border border-gray-300 text-left">ID</th> */}
                                        <th className="p-3 border border-gray-300 text-left">Name</th>
                                        <th className="p-3 border border-gray-300 text-left">Category</th>
                                        <th className="p-3 border border-gray-300 text-left">Price</th>
                                        <th className="p-3 border border-gray-300 text-left">Stock</th>
                                        <th className="p-3 border border-gray-300 text-left">Description</th>
                                        <th className="p-3 border border-gray-300 text-left">Best Seller</th>
                                        <th className="p-3 border border-gray-300 text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product, i) => (
                                        <>
                                            <tr key={i} className="hover:bg-gray-100">
                                                <td className="p-3 border border-gray-300">{product.name}</td>
                                                <td className="p-3 border border-gray-300">{product.category}</td>
                                                <td className="p-3 border border-gray-300">{product.price}</td>
                                                <td className="p-3 border border-gray-300">{product.stock}</td>
                                                <td className="p-3 border border-gray-300">{product.description}</td>
                                                <td className="p-3 border border-gray-300 text-center">
                                                    <button
                                                        className={`px-3 py-1 rounded ${product.bestSeller ? " font-bold " : "bg-gray-300"}`}
                                                        onClick={() => toggleBestSeller(product._id)}
                                                    >
                                                        {product.bestSeller ? "Best Seller ✅" : "Mark as Best Seller"}
                                                    </button>
                                                </td>
                                                <td className="p-3 border border-gray-300 text-center">
                                                    <button className="text-blue-500 hover:underline mr-3"
                                                        onClick={() => handleEditClick(product)}
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        className="text-red-500 hover:underline"
                                                        onClick={() => setDeleteModal(true)}
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                            {deleteModal ?
                                                (
                                                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20">
                                                        <div className="bg-white rounded-2xl shadow-lg p-6 w-96">
                                                            <h2 className="text-xl font-semibold mb-4 text-center">Delete Product</h2>
                                                            <p className="text-gray-600 text-center mb-6">
                                                                Are you sure you want to delete this product? This action cannot be undone.
                                                            </p>
                                                            <div className="flex justify-center gap-4">
                                                                <button
                                                                    onClick={() => setDeleteModal(false)}
                                                                    className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 text-gray-700"
                                                                >
                                                                    Cancel
                                                                </button>
                                                                <button
                                                                    onClick={() => handleDelete(product._id)}
                                                                    className={`px-4 py-2 rounded-lg text-white ${loading
                                                                        ? "bg-red-400 cursor-not-allowed"
                                                                        : "bg-red-500 hover:bg-red-600"
                                                                        }`}
                                                                    disabled={loading}
                                                                >
                                                                    {loading ? (<Loader />) : "Delete"}
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : ("")}
                                        </>
                                    ))}
                                </tbody>
                            </table>

                            {/* Card View for Mobile */}
                            <div className="grid grid-cols-1 gap-4 md:hidden">
                                {products.map((product, i) => (
                                    <div
                                        key={i}
                                        className="bg-gray-100 p-4 rounded-md shadow hover:shadow-md transition duration-300"
                                    >
                                        <h3 className="font-bold text-gray-800">{product.name}</h3>
                                        <p className="text-sm text-gray-600">{product.description}</p>
                                        <p className="text-sm text-gray-600">Category: {product.category}</p>
                                        <p className="text-sm text-gray-600">Price: {product.price}</p>
                                        <p className="text-sm text-gray-600">Stock: {product.stock}</p>
                                        <div className="mt-4 flex justify-between space-x-3">
                                            <div>
                                                <button
                                                    className={`px-3 py-1 rounded ${product.bestSeller ? "bg-green-500 font-bold text-white" : "bg-gray-300"}`}
                                                    onClick={() => toggleBestSeller(product._id)}
                                                >
                                                    {product.bestSeller ? "Best Seller ✅" : "Mark as Best Seller"}
                                                </button>
                                            </div>
                                            <div className="flex gap-3">
                                                <button className="text-blue-500 hover:underline" onClick={() => handleEditClick(product)}>Edit</button>
                                                <button
                                                    className="text-red-500 hover:underline"
                                                // onClick={() => handleDelete(product._id)}
                                                // onClick={}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <EditProductModal
                            product={selectedProduct}
                            isOpen={isModalOpen}
                            onClose={handleCloseModal}
                            onSave={handleSave}
                        />
                    </>
                )}

        </div>

    );
};

export default Products;
