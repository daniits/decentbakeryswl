import React from 'react'
import Layout from '../../Layout/Layout'
import Category from './Sections/Category/Category'
import Products from './Sections/NewProducts/Products'

const Home = () => {
    return (
        <Layout>
            <div className='bg-[#fff3cd;] h-[85vh] flex sm:flex-col lg:flex-row px-40 py-[70px] justify-between relative'>
                <div className='w-[35vw] sm:text-center lg:text-start  flex flex-col justify-center gap-5 mt-12'>
                    <h1 className='text-[40px] font-semibold font-playfair'>Quality Products Bakery Items</h1>
                    <div>
                        <button className='bg-[#fc7c7c] animated-button font-playfair hover:animate-fade-slide-up transition-colors duration-300 px-8 py-4 rounded-2xl text-white font-semibold'>
                        <span>SHOP NOW</span>
                            </button>
                    </div>
                </div>
                <div className='mt-16'>
                    <img src="/images/icons/homeBanner.png" alt="" className='bounce w-full h-auto' />
                </div>
            </div>
            <img src="/images/icons/miniCake1.webp" alt="" className='absolute top-44 left-28'/>
            <img src="/images/icons/miniCake2.webp" alt="" className='absolute top-36 left-[600px]'/>
            <img src="/images/icons/miniCake3.webp" alt="" className='absolute top-44 right-[60px]'/>
            <img src="/images/icons/miniCake4.webp" alt="" className='absolute bottom-[20px] left-14'/>
            <img src="/images/icons/miniCake5.webp" alt="" className='absolute bottom-[20px] right-14'/>
            {/* <Category/> */}
            <Category/>
            <Products/>
        </Layout>
    )
}

export default Home
