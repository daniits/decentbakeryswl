import React, { useState } from 'react';

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const options = ['Last Six Months', 'Last Month', 'Year'];
    const user = {
        name: 'John Doe',
        picture: 'https://via.placeholder.com/40', // Replace with actual image URL
    };

    const handleToggle = () => setIsOpen((prev) => !prev);
    const handleSelect = (value) => {
        setSelectedValue(value);
        setIsOpen(false);
    };

    return (
        <main className="flex-1 p-4 md:p-6">
            {/* Header */}
            <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">
                Dashboard
            </h1>

            {/* Greeting and Dropdown */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 bg-gray-100 rounded shadow">
                {/* Greeting Section */}
                <div className="text-sm md:text-lg mb-3 md:mb-0">
                    Welcome, <strong>{user.name}</strong>
                </div>

                {/* Dropdown Section */}
                <div className="relative w-full md:w-56">
                    <p className="text-xs text-left mb-1">Sort by:</p>
                    <button
                        className="w-full flex items-center justify-between text-blue py-2 px-4 rounded-lg bg-white border border-gray-300 focus:outline-none"
                        onClick={handleToggle}
                    >
                        {selectedValue || 'Select an option'}
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
                    {isOpen && (
                        <ul className="absolute z-10 w-full mt-2 bg-white shadow-md border border-gray-200">
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

            {/* Top Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                <div className="bg-white p-4 rounded shadow hover:shadow-lg">
                    <h3 className="text-base md:text-lg font-semibold">Monthly Customers</h3>
                    <p className="text-xl md:text-2xl font-bold text-green-500">1,200</p>
                </div>
                <div className="bg-white p-4 rounded shadow hover:shadow-lg">
                    <h3 className="text-base md:text-lg font-semibold">Total Products</h3>
                    <p className="text-xl md:text-2xl font-bold text-blue-500">150</p>
                </div>
                <div className="bg-white p-4 rounded shadow hover:shadow-lg">
                    <h3 className="text-base md:text-lg font-semibold">Revenue</h3>
                    <p className="text-xl md:text-2xl font-bold text-yellow-500">$25,000</p>
                </div>
                <div className="bg-white p-4 rounded shadow hover:shadow-lg">
                    <h3 className="text-base md:text-lg font-semibold">Total Shops</h3>
                    <p className="text-xl md:text-2xl font-bold text-purple-500">5</p>
                </div>
            </div>

            {/* Graphs Section */}
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded shadow">
                    <h3 className="text-lg md:text-xl font-semibold mb-4">Top Products</h3>
                    <div className="h-64">
                        {/* Replace with a graph library */}
                        <p className="text-gray-500 text-center">[Graph Placeholder]</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded shadow">
                    <h3 className="text-lg md:text-xl font-semibold mb-4">Sales Trend</h3>
                    <div className="h-64">
                        {/* Replace with a graph library */}
                        <p className="text-gray-500 text-center">[Graph Placeholder]</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Dashboard;
