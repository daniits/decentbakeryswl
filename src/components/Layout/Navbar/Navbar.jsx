import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SvgIcon from '../../../../public/images/Svgicon';
import Logo from "/images/icons/logo.png";
import Drawer from '../../UI/Drawer';
import { useCart } from '../../Services/Context/CartContext';

const Navbar = () => {
    const {cart} = useCart()
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    console.log(totalItems)

    const [isScrolled, setIsScrolled] = useState(false);
    const [isBagActive, setBagActive] = useState(true);
    const [showDrawer, setShowDrawer] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed left-0 w-full flex items-center h-[9vh] px-6 lg:px-52 py-4 bg-white shadow-md z-50 transition-all duration-300 
            ${isScrolled ? "top-0" : "lg:top-12"}`}>
            
            {/* Logo Section (Preserved for all screens) */}
            <div className="absolute left-6 lg:left-40 top-0 bg-blue h-[100px] w-[110px] flex items-center justify-center rounded-br-[40px] z-50">
                <img src={Logo} alt="bakeryLOGO" className="w-[60%] h-auto" />
            </div>

            {/* Center Links (Hidden on small screens, shown on large screens) */}
            <div className="hidden lg:flex flex-grow justify-center items-center gap-10 font-semibold">
                {["home", "shop", "contact"].map((item) => (
                    <Link 
                        key={item} 
                        to={`/${item}`} 
                        className="hover:text-pink text-lg font-semibold hover:font-bold">
                        {item.toUpperCase()}
                    </Link>
                ))}
            </div>

            {/* Right Section (Icons & Drawer) */}
            <div className="flex gap-6 lg:gap-10 items-center ml-auto">
                {/* Search & Bag Icons */}
                <div className="flex gap-4"> 
                    <div className="hover:bg-pink/50 p-2 rounded-full">
                        <Link to="/cart/productId">
                            <div className="relative">
                        {/* Cart Icon */}
                        <SvgIcon iconName="bag" className="w-7 h-auto cursor-pointer" />

                        {/* Cart Badge */}
                        {totalItems > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                {totalItems}
                            </span>
                        )}
                    </div>
                        </Link>
                    </div>
                </div>

                {/* Drawer for Small Screens */}
                <div className="lg:hidden">
                    <Drawer showDrawer={showDrawer} handleClose={() => setShowDrawer(false)} />
                    <SvgIcon iconName="threeLines" onClick={() => setShowDrawer(true)} className="w-7 h-7 cursor-pointer" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
