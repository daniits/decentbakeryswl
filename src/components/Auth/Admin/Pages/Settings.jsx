import React, { useState } from "react";

const Settings = () => {
    const [settings, setSettings] = useState({
        darkMode: false,
        notifications: true,
        autoLogout: true,
    });

    const toggleSetting = (key) => {
        setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Settings</h1>

            {/* User Management */}
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-700 mb-4">
                    User Management
                </h2>
                <div className="space-x-2 space-y-2">
                    <button className="bg-blue text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                        Manage Users
                    </button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300">
                        Deactivate User Accounts
                    </button>
                </div>
            </div>

            {/* App Settings */}
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-700 mb-4">
                    App Settings
                </h2>
                <div className="flex items-center justify-between mb-4">
                    <p className="text-gray-700">Enable Dark Mode</p>
                    <button
                        onClick={() => toggleSetting("darkMode")}
                        className={`px-4 py-2 rounded-full ${
                            settings.darkMode ? "bg-green-500" : "bg-gray-300"
                        }`}
                    >
                        {settings.darkMode ? "On" : "Off"}
                    </button>
                </div>
                <div className="flex items-center justify-between mb-4">
                    <p className="text-gray-700">Enable Notifications</p>
                    <button
                        onClick={() => toggleSetting("notifications")}
                        className={`px-4 py-2 rounded-full ${
                            settings.notifications ? "bg-green-500" : "bg-gray-300"
                        }`}
                    >
                        {settings.notifications ? "On" : "Off"}
                    </button>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-gray-700">Auto Logout after inactivity</p>
                    <button
                        onClick={() => toggleSetting("autoLogout")}
                        className={`px-4 py-2 rounded-full ${
                            settings.autoLogout ? "bg-green-500" : "bg-gray-300"
                        }`}
                    >
                        {settings.autoLogout ? "On" : "Off"}
                    </button>
                </div>
            </div>

            {/* Theme Customization */}
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-700 mb-4">
                    Theme Customization
                </h2>
                <div className="flex items-center gap-4">
                    <button className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800">
                        Dark Theme
                    </button>
                    <button className="bg-gray-200 text-black px-4 py-2 rounded-md hover:bg-gray-300">
                        Light Theme
                    </button> 
                </div>
            </div>

            {/* Account Settings */}
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-700 mb-4">
                    Account Settings
                </h2>
                <div className="space-x-2 space-y-2">
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300">
                        Change Password
                    </button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300">
                        Delete Account
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Settings;
