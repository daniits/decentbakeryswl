import React from 'react';

const Partners = () => {
    return (
        <div className="">
            <div className="bg-[#2b4174] flex justify-center items-center rounded-xl py-24 px-24 gap-16 relative">
                <img src="/images/image/brand1.png" alt="" className='w-[15%] h-auto' />
                <div className="w-[2px] h-[100px] bg-gray-600"></div> 
                <img src="/images/image/brand1hover.png" alt="" className='w-[15%] h-auto' />
                <div className="w-[2px] h-[100px] bg-gray-600 sm:hidden lg:block"></div>
                <img src="/images/image/brand1.png" alt="" className='sm:hidden lg:block w-[15%] h-auto' />
                <div className="w-[2px] h-[100px] bg-gray-600 sm:hidden lg:block"></div> 
                <img src="/images/image/brand1hover.png" alt="" className='sm:hidden lg:block w-[15%] h-auto' />
            </div>
        </div>
    );
};

export default Partners;
