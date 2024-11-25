import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SvgIcon from '../../../../public/images/Svgicon'
import Logo from "/images/icons/logo.png"


const Navbar = () => {

    const [isHeartActive, setHeartActive] = useState(true);
    const [isBagActive, setBagActive] = useState(true);
    return (
        <nav className="flex items-center justify-between h-[12vh] px-52 py-4 relative text-black bg-white">
            {/* Left: Bakery */}
            <div className="flex items-center justify-center bg-[#eee1ba] h-[120px] w-[110px] absolute rounded-br-[40px] left-40">
                <div className='flex flex-col items-center'>
                    <img src={Logo} alt="backeryLOGO" className=' mt-4 ' />
                    {/* <h1 className='text-white font-bold'>BACKERY</h1> */}
                </div>
            </div>

            <div className="flex-grow flex justify-center items-center gap-5 font-semibold">
                <Link to="/home" className="hover:text-white rounded-lg px-3 py-2 transition-all duration-300 ease-in-out hover:bg-[#f0d7a7]">HOME</Link>
                <Link to="/about" className='hover:text-white rounded-lg px-3 py-2 transition-all duration-300 ease-in-out hover:bg-[#f0d7a7]'>ABOUT</Link>
                <Link to="/blog" className='hover:text-white rounded-lg px-3 py-2 transition-all duration-300 ease-in-out hover:bg-[#f0d7a7]'>BLOG</Link>
                <Link to="/contact" className='hover:text-white rounded-lg px-3 py-2 transition-all duration-300 ease-in-out hover:bg-[#f0d7a7]'>CONTACT</Link>
            </div>
            {/* ./icons/${iconName}.svg */}
            <div className="flex gap-5 items-center">
                <div className='' >
                    <SvgIcon iconName="search" className="w-5 h-auto cursor-pointer" />
                </div>
                <div className='' onMouseEnter={() => setHeartActive(false)} onMouseLeave={() => setHeartActive(true)}>
                    {isHeartActive ? (
                        <SvgIcon iconName="heart" className="w-5 h-auto" />
                    ) : (
                        <SvgIcon iconName="heartTwo" className="w-5 h-auto" />
                    )}
                </div>
                <div className='' onMouseEnter={() => setBagActive(false)} onMouseLeave={() => setBagActive(true)}>
                    {isBagActive ? (
                        <SvgIcon iconName="bag" className="w-5 h-auto" />
                    ) : (
                        <SvgIcon iconName="bagTwo" className="w-5 h-auto" />
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
