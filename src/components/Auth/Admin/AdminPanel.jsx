import React, { useState } from 'react'

const AdminPanel = () => {
    const user = {
        name: "John Doe",
        picture: "https://via.placeholder.com/40", // Replace with actual image URL
    };

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");

    const tabs = ["Dashboard", "Orders", "Products", "Customers", "Settings"];

    const handleToggle = () => setIsOpen((prev) => !prev);

    const handleSelect = (value) => {
        setSelectedValue(value);
        setIsOpen(false);
    };

    const options = ["Last Six Months", "Last Month", "Year"]

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar (Hidden on small screens, toggled via button) */}
            <aside
                className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white flex flex-col justify-between transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform z-50 md:translate-x-0 md:relative`}
            >
                {/* Logo */}
                <div className="p-6">
                    <h1 className="text-2xl font-bold text-center">Bakery Admin</h1>
                </div>

                {/* Tabs */}
                <nav className="flex-grow">
                    <ul className="space-y-2">
                        {tabs.map((tab) => (
                            <li key={tab} className="p-4 hover:bg-gray-700 cursor-pointer">
                                {tab}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* User Info & Logout */}
                <div className="p-4 border-t border-gray-700">
                    <div className="flex items-center">
                        <img
                            src={user.picture}
                            alt="User"
                            className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                            <p className="text-sm">{user.name}</p>
                            <button className="text-xs text-red-400 hover:underline">
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Overlay for mobile when sidebar is open */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
            )}

            {/* Main Content */}
            <main className="flex-1 p-6">
                {/* Mobile toggle button */}
                <button
                    className="md:hidden bg-gray-800 text-white p-2 rounded mb-4 relative"
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    {isSidebarOpen ? "Close Menu" : "Open Menu"}
                </button>

                <div className="flex justify-between items-center p-4 bg-gray-100 rounded shadow">
                    {/* Greeting Section */}
                    <div className="text-lg mb-2">
                        Welcome, <strong>{user.name}</strong>
                    </div>

                    {/* Dropdown Section */}
                    <div className="relative w-56">
                        {/* Sort by label */}
                        <p className="text-xs text-left mb-1">Sort by:</p>

                        {/* Dropdown button */}
                        <button
                            className="w-full  flex items-center justify-between text-blue py-2 px-4 rounded-lg bg-transparent focus:outline-none"
                            onClick={handleToggle}
                        >
                            {selectedValue || "Select an option"}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-5 h-5 ml-2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>

                        {/* Dropdown options */}
                        {isOpen && (
                            <ul className="absolute z-10 w-full mt-2 bg-gray-100 shadow-md border border-gray-200">
                                {options.map((option, index) => (
                                    <li
                                        key={index}
                                        className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-gray-800"
                                        onClick={() => handleSelect(option)}
                                    >
                                        {option}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    </div>
                    {/* Top Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-white p-4 rounded shadow">
                            <h3 className="text-lg font-semibold">Monthly Customers</h3>
                            <p className="text-2xl font-bold text-green-500">1,200</p>
                        </div>
                        <div className="bg-white p-4 rounded shadow">
                            <h3 className="text-lg font-semibold">Total Products</h3>
                            <p className="text-2xl font-bold text-blue-500">150</p>
                        </div>
                        <div className="bg-white p-4 rounded shadow">
                            <h3 className="text-lg font-semibold">Revenue</h3>
                            <p className="text-2xl font-bold text-yellow-500">$25,000</p>
                        </div>
                        <div className="bg-white p-4 rounded shadow">
                            <h3 className="text-lg font-semibold">Total Shops</h3>
                            <p className="text-2xl font-bold text-purple-500">5</p>
                        </div>
                    </div>

                    {/* Graphs */}
                    <div className="mt-6">
                        <div className="bg-white p-6 rounded shadow">
                            <h3 className="text-xl font-semibold mb-4">Sales Trend</h3>
                            <div className="h-64">
                                {/* Replace with a graph library */}
                                <p className="text-gray-500 text-center">[Graph Placeholder]</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded shadow mt-6">
                            <h3 className="text-xl font-semibold mb-4">Top Products</h3>
                            <div className="h-64">
                                {/* Replace with a graph library */}
                                <p className="text-gray-500 text-center">[Graph Placeholder]</p>
                            </div>
                        </div>
                    </div>
            </main>
        </div>
    )
}

export default AdminPanel
