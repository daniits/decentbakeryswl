import React from 'react'

const TopNav = () => {
    return (
        <div className='bg-[#243a6e] flex sm:h-[10vh] md:h-[7vh] px-[12%] text-[#cfd4df] sm:justify-center lg:justify-between items-center'>
            <div className='sm:hidden lg:block'>
                <h3>Nation Wide Completely Free Returns and Free Shipping</h3>
            </div>
            <div className="flex items-center sm:flex-col md:flex-row sm:gap-1 md:gap-10 ">
                <h3 className="relative">
                    +92 356 8792 365
                    <span className="absolute sm:hidden md:block right-[-15%] top-1/2 h-5 w-[1px] bg-pink-500 transform -translate-y-1/3"></span>
                </h3>
                <h3 className="relative">
                    sample@gmail.com
                    <span className="absolute sm:hidden md:block right-[-15%] top-1/2 h-5 w-[1px] bg-pink-500 transform -translate-y-1/3"></span>
                </h3>
            </div>

        </div>
    )
}

export default TopNav
