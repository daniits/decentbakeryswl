import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SvgIcon from '../../../../public/images/Svgicon'
import Logo from "/images/icons/logo.png"


const Navbar = () => {

    const [isHeartActive, setHeartActive] = useState(true);
    const [isBagActive, setBagActive] = useState(true);
    return (
        <nav className="flex items-center justify-between h-[9vh] px-52 py-4 relative text-black bg-white">
            {/* Left: Bakery */}
            <div className="flex items-center justify-center z-50 bg-[#2b4174] top-0 h-[100px] w-[110px] absolute rounded-br-[40px] left-40">
                <div className='flex flex-col items-center'>
                    <img src={Logo} alt="backeryLOGO" className="w-[60%] h-auto" />
                    {/* <h1 className='text-white font-bold'>BACKERY</h1> */}
                </div>
            </div>

            <div className="flex-grow hidden  justify-center items-center gap-5 font-semibold">
                <Link to="/home" className="hover:text-white rounded-lg px-3 py-2 transition-all duration-300 ease-in-out hover:bg-[url('/images/icons/menu_shape.png')]">HOME</Link>
                <Link to="/about" className="hover:text-white rounded-lg px-3 py-2 transition-all duration-300 ease-in-out hover:bg-[url('/images/icons/menu_shape.png')]">ABOUT</Link>
                <Link to="/shop" className="hover:text-white rounded-lg px-3 py-2 transition-all duration-300 ease-in-out hover:bg-[url('/images/icons/menu_shape.png')]">SHOP</Link>
                <Link to="/contact" className="hover:text-white rounded-lg px-3 py-2 transition-all duration-300 ease-in-out hover:bg-[url('/images/icons/menu_shape.png')]">CONTACT</Link>
            </div>
            {/* ./icons/${iconName}.svg */}
            <div className="flex gap-5 items-center">
                <div className='' >
                    <SvgIcon iconName="search" className="w-5 h-auto cursor-pointer" />
                </div>
                <div className='' onMouseEnter={() => setHeartActive(false)} onMouseLeave={() => setHeartActive(true)}>
                    {isHeartActive ? (
                        <SvgIcon iconName="heart" className="w-5 h-auto cursor-pointer" />
                    ) : (
                        <SvgIcon iconName="heartTwo" className="w-5 h-auto cursor-pointer" />
                    )}
                </div>
                <div className='' onMouseEnter={() => setBagActive(false)} onMouseLeave={() => setBagActive(true)}>
                    {isBagActive ? (
                        <SvgIcon iconName="bag" className="w-5 h-auto cursor-pointer" />
                    ) : (
                        <SvgIcon iconName="bagTwo" className="w-5 h-auto cursor-pointer" />
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
