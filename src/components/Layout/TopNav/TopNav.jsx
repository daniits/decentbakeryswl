import React from 'react'

const TopNav = () => {
    return (
        <div className='bg-[#243a6e] flex h-[7vh] text-[#cfd4df] justify-between items-center px-[12%]'>
            <div>
                <h3>Nation Wide Completely Free Returns and Free Shipping</h3>
            </div>
            <div className="flex items-center gap-10">
                <h3 className="relative">
                    +92 356 8792 365
                    <span className="absolute right-[-15%] top-1/2 h-5 w-[1px] bg-pink-500 transform -translate-y-1/3"></span>
                </h3>
                <h3 className="relative">
                    sample@gmail.com
                    <span className="absolute right-[-15%] top-1/2 h-5 w-[1px] bg-pink-500 transform -translate-y-1/3"></span>
                </h3>
                <h3>
                    Account
                </h3>
            </div>

        </div>
    )
}

export default TopNav
