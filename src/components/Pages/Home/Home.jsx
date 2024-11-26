import React from 'react'
import Layout from '../../Layout/Layout'
import Category from './Sections/Category'

const Home = () => {
    return (
        <Layout>
            <div className='bg-[#fff3cd;] h-[100vh] flex sm:flex-col lg:flex-row px-40 py-40 justify-between relative'>
                <div className='w-[35vw] sm:text-center lg:text-start  flex flex-col justify-center gap-5 mt-8'>
                    <h3 className='text-3xl font-semibold text-[#2b4174]'><span className='text-[#fc7c7c]'>70%</span> Sale Off</h3>
                    <h1 className='text-[40px] font-semibold'>Quality Products Bakery Items</h1>
                    <div>
                        <button className='bg-[#fc7c7c] hover:bg-[#0a58ca] hover:animate-fade-slide-up transition-colors duration-300 px-8 py-4 rounded-2xl text-white font-semibold'>SHOP NOW</button>
                    </div>
                </div>
                <div className=''>
                    <img src="/images/icons/homeBanner.png" alt="" className='bounce w-full h-auto' />
                </div>
            </div>
            <img src="/images/icons/miniCake1.webp" alt="" className='absolute top-32 left-28'/>
            <img src="/images/icons/miniCake2.webp" alt="" className='absolute top-24 left-[600px]'/>
            <img src="/images/icons/miniCake3.webp" alt="" className='absolute top-40 right-[60px]'/>
            <img src="/images/icons/miniCake4.webp" alt="" className='absolute bottom-[-50px] left-14'/>
            <img src="/images/icons/miniCake5.webp" alt="" className='absolute bottom-[-50px] right-14'/>
            <Category/>
        </Layout>
    )
}

export default Home
