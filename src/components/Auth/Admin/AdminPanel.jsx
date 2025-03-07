import React, { useState } from "react";
import Dashboard from "./Pages/Dashboard";
import Orders from "./Pages/Orders";
import Products from "./Pages/Products";
import Settings from "./Pages/Settings";
const AdminPanel = () => {
    const user = {
        name: "John Doe",
        picture: "https://via.placeholder.com/40", // Replace with actual image URL
    };

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedTab, setSelectedTab] = useState("Dashboard");

    const tabs = ["Dashboard", "Products", "Settings"];

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
        setIsSidebarOpen(false); // Close the sidebar on mobile when a tab is selected
    };

    // Dummy components for each tab
    const DashboardPage = () => <Dashboard />;
    // const OrdersPage = () => <Orders/>;
    const ProductsPage = () => <Products />;
    const SettingsPage = () => <Settings />;

    // Map tab names to components
    const renderContent = () => {
        switch (selectedTab) {
            case "Dashboard":
                return <DashboardPage />;
            case "Products":
                return <ProductsPage />;
            case "Settings":
                return <SettingsPage />;
            default:
                return <div>Select a tab</div>;
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar (Hidden on small screens, toggled via button) */}
            <aside
                className={`fixed inset-y-0 left-0 w-64 bg-blue text-white flex flex-col justify-between transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
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
                            <li
                                key={tab}
                                className={`p-4 hover:bg-pink cursor-pointer ${selectedTab === tab ? "bg-pink" : ""
                                    }`}
                                onClick={() => handleTabClick(tab)}
                            >
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
            <main className="flex-grow relative">
                {/* Render your sidebar toggle button */}
                <button
                    className="md:hidden absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 transition-all"
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    {isSidebarOpen ?
                        (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                </button>

                {/* Main content */}
                <div className="flex flex-col bg-white p-0 rounded-lg shadow-md h-screen overflow-y-scroll">
                    {renderContent()}
                </div>
            </main>

        </div>
    );
};

export default AdminPanel;
