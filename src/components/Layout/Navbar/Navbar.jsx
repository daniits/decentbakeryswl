import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SvgIcon from '../../../../public/images/Svgicon'
import Logo from "/images/icons/logo.png"
import Drawer from '../../UI/Drawer'


const Navbar = () => {

    const [isHeartActive, setHeartActive] = useState(true);
    const [isBagActive, setBagActive] = useState(true);


    const [showDrawer, setShowDrawer] = useState(false);

    const handleOpenDrawer = () => {
        setShowDrawer(true);
    };

    const handleCloseDrawer = () => {
        setShowDrawer(false);
    };


    return (
        <nav className="flex items-center sm:justify-end lg:justify-between h-[9vh] px-10 lg:px-52 py-4 relative text-black bg-white">
            {/* Left: Bakery */}
            <div className="flex items-center justify-center z-50 bg-[#2b4174] top-0 h-[100px] w-[110px] absolute rounded-br-[40px] left-10 lg:left-40">
                <div className="flex flex-col items-center">
                    <img src={Logo} alt="backeryLOGO" className="w-[60%] h-auto" />
                </div>
            </div>

            {/* Center Links */}
            <div className="hidden lg:flex flex-grow justify-center items-center gap-5 font-semibold">
                <Link
                    to="/home"
                    className="hover:text-white rounded-lg px-3 py-2 transition-all duration-300 ease-in-out hover:bg-[url('/images/icons/menu_shape.png')]"
                >
                    HOME
                </Link>
                <Link
                    to="/about"
                    className="hover:text-white rounded-lg px-3 py-2 transition-all duration-300 ease-in-out hover:bg-[url('/images/icons/menu_shape.png')]"
                >
                    ABOUT
                </Link>
                <Link
                    to="/shop"
                    className="hover:text-white rounded-lg px-3 py-2 transition-all duration-300 ease-in-out hover:bg-[url('/images/icons/menu_shape.png')]"
                >
                    SHOP
                </Link>
                <Link
                    to="/contact"
                    className="hover:text-white rounded-lg px-3 py-2 transition-all duration-300 ease-in-out hover:bg-[url('/images/icons/menu_shape.png')]"
                >
                    CONTACT
                </Link>
            </div>

            {/* Right Section */}
            <div className="flex gap-10 items-center lg:right-[10px]">
                {/* Icons */}
                <div className='flex gap-2'>
                <SvgIcon iconName="search" className="w-5 h-auto cursor-pointer" />
                <div onMouseEnter={() => setHeartActive(false)} onMouseLeave={() => setHeartActive(true)}>
                    {isHeartActive ? (
                        <SvgIcon iconName="heart" className="w-5 h-auto cursor-pointer" />
                    ) : (
                        <SvgIcon iconName="heartTwo" className="w-5 h-auto cursor-pointer" />
                    )}
                </div>
                <div onMouseEnter={() => setBagActive(false)} onMouseLeave={() => setBagActive(true)}>
                    {isBagActive ? (
                        <SvgIcon iconName="bag" className="w-5 h-auto cursor-pointer" />
                    ) : (
                        <SvgIcon iconName="bagTwo" className="w-5 h-auto cursor-pointer" />
                    )}
                    {/* Drawer Trigger */}
                </div>
                </div>
                <div className="lg:hidden ">
                    <Drawer showDrawer={showDrawer} handleClose={handleCloseDrawer} />
                    <SvgIcon
                        iconName="threeLines"
                        onClick={handleOpenDrawer}
                        className="w-5 h-5 cursor-pointer"
                    />
                </div>
            </div>
        </nav>

    )
}

export default Navbar
