import React from 'react'
import { Link } from 'react-router-dom'
import SvgIcon from '../../../../public/images/Svgicon'

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between h-[10vh] px-52 py-4 relative text-black bg-white">
            {/* Left: Bakery */}
            <div className="flex items-center bg-blue-600 h-[120px] w-[110px] absolute rounded-br-xl left-40">
                Bakery
            </div>

            <div className="flex-grow flex justify-center items-center gap-10 font-semibold">
                <Link to="/home" className="hover:text-white rounded-lg px-3 py-2 transition-all duration-300 ease-in-out hover:bg-[url('./images/icons/scratch.svg')] hover:bg-cover hover:bg-center">HOME</Link>
                <Link to="/about" className='hover:text-white hover:bg-black'>ABOUT</Link>
                <Link to="/blog" className='hover:text-white hover:bg-black'>BLOG</Link>
                <Link to="/contact" className='hover:text-white hover:bg-black'>CONTACT</Link>
            </div>
            {/* ./icons/${iconName}.svg */}
            <div className="flex gap-5">
                <SvgIcon iconName="search" />
                <SvgIcon iconName="heart" />
            </div>
        </nav>
    )
}

export default Navbar
