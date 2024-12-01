import React from 'react';
import { Link } from 'react-router-dom';

const Drawer = ({ showDrawer, handleClose }) => {
    return (
        <div
            className={`fixed inset-0 z-50 ${showDrawer ? 'pointer-events-auto' : 'pointer-events-none'}`}
        >
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
                    showDrawer ? 'opacity-100' : 'opacity-0'
                }`}
                onClick={handleClose}
            ></div>

            {/* Drawer */}
            <div
                className={`fixed right-0 top-0 h-full w-[40vw] md:w-[40vw] bg-[#2b4174] transform transition-transform duration-300 ${
                    showDrawer ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                {/* Close Button */}
                <button
                    className="absolute top-4 right-4 text-white text-2xl font-bold"
                    onClick={handleClose}
                >
                    ×
                </button>

                {/* Drawer Content */}
                <div className="flex flex-col p-5 gap-10 mt-16">
                    <div className="flex flex-col justify-center items-center gap-5 font-semibold">
                        <Link
                            to="/home"
                            onClick={handleClose}
                            className="text-white hover:bg-[#087D87] rounded-lg px-3 py-2 transition-all duration-300 ease-in-out"
                        >
                            HOME
                        </Link>
                        <Link
                            to="/about"
                            onClick={handleClose}
                            className="text-white hover:bg-[#087D87] rounded-lg px-3 py-2 transition-all duration-300 ease-in-out"
                        >
                            ABOUT
                        </Link>
                        <Link
                            to="/shop"
                            onClick={handleClose}
                            className="text-white hover:bg-[#087D87] rounded-lg px-3 py-2 transition-all duration-300 ease-in-out"
                        >
                            SHOP
                        </Link>
                        <Link
                            to="/contact"
                            onClick={handleClose}
                            className="text-white hover:bg-[#087D87] rounded-lg px-3 py-2 transition-all duration-300 ease-in-out"
                        >
                            CONTACT
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Drawer;
