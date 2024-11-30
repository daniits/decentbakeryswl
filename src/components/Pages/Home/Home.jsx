import React from 'react'
import Layout from '../../Layout/Layout'
import Category from './Sections/Category/Category'
import Products from './Sections/NewProducts/Products'
import Partners from './Sections/Partners/Partners'
import BestSeller from './Sections/BestSeller/BestSeller'
import Sale from './Sections/Sale/Sale'
import TopSale from './Sections/TopSale/TopSale'

const Home = () => {
    return (
        <Layout>
            <div>
                <div className='bg-[#fff3cd;] h-[85vh] flex sm:flex-col lg:flex-row sm:gap-5 lg:gap-0 sm:px-16 lg:px-40 py-[70px] justify-between relative'>
                    <div className='sm:w-[60vw] lg:w-[35vw] sm:text-center lg:text-start sm:justify-center mx-auto sm:mt-0 lg:mt-40'>
                        <div className=' flex flex-col  sm:gap-2 md:gap-5'>
                        <h1 className='sm:text-[30px] md:text-[30px] lg:text-[40px] font-semibold font-playfair'>Quality Products Bakery Items</h1>
                        <div>
                            <button className='bg-[#fc7c7c] animated-button font-playfair hover:animate-fade-slide-up transition-colors duration-300 px-6 py-2 lg:px-8 lg:py-4 rounded-2xl text-white font-semibold'>
                                <span>SHOP NOW</span>
                            </button>
                        </div>
                        </div>
                    </div>
                    <div className='sm:mt-6 lg:mt-16 flex justify-center'>
                        <img src="/images/icons/homeBanner.png" alt="" className='bounce sm:w-[90%] lg:w-full h-auto' />
                    </div>
                </div>
                <img src="/images/icons/miniCake1.webp" alt="" className='absolute sm:top-[35%] lg:top-[25%] left-[10%]   sm:w-[7%] md:w-[8%] lg:w-[8%] h-auto' />
                <img src="/images/icons/miniCake2.webp" alt="" className='absolute sm:top-[30%] lg:top-[20%] left-[42%]   sm:w-[7%] md:w-[8%] lg:w-[8%] h-auto' />
                <img src="/images/icons/miniCake3.webp" alt="" className='absolute sm:top-[35%] lg:top-[25%] right-[4%]   sm:w-[7%] md:w-[8%] lg:w-[8%] h-auto' />
                <img src="/images/icons/miniCake4.webp" alt="" className='absolute bottom-[4%] left-[3%]  sm:w-[7%] md:w-[8%] lg:w-[8%] h-auto' />
                <img src="/images/icons/miniCake5.webp" alt="" className='absolute bottom-[4%] right-[3%] sm:w-[7%] md:w-[8%] lg:w-[8%] h-auto' />
            </div>
            {/* <Category/> */}
            <Category />
            <Sale />
            <Products />
            <TopSale/>
            <BestSeller />
            <Partners />
        </Layout>
    )
}

export default Home
