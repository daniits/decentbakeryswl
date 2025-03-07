import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../Layout/Layout'
import Category from './Sections/Category/Category'
import Products from './Sections/NewProducts/Products'
import Partners from './Sections/Partners/Partners'
import BestSeller from './Sections/BestSeller/BestSeller'
import Sale from './Sections/Sale/Sale'
import TopSale from './Sections/TopSale/TopSale'
import axios from 'axios'
import ShopContext from '../../Services/Context/Shop/ShopContext'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
    const BackendURL = import.meta.env.VITE_BACKEND_URL
    // console.log(setSelectedCategory)
    const [products, setProducts] = useState([]);
    console.log("Products from Backend", products)
    const [category, setCategory] = useState()
    console.log(category)
    useEffect(() => {
        // Extract unique categories
        const uniqueCategories = [...new Set(products.map((item) => item.category))];
        setCategory(uniqueCategories);
    }, [products]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            try {
                const response = await axios.get(`${BackendURL}/getAllProducts`)
                const products = response.data
                console.log(products)
                setProducts(products.products)
                setLoading(false)
            } catch (error) {
                console.error(error.message)
            }
        }

        getProducts()
    }, [])
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        fade: true,
    };

    return (
        <>
            {/* <div className="no-scrollbar">
                <div className=' bg-[#fff3cd;] h-[85vh] sm:mt-10 md:mt-0 flex sm:flex-col lg:flex-row sm:gap-5 lg:gap-0 sm:px-16 lg:px-40 py-[70px] justify-between relative'>
                    <div className='sm:w-[60vw] lg:w-[35vw] sm:text-center lg:text-start sm:justify-center mx-auto sm:mt-0 lg:mt-40'>
                        <div className=' flex flex-col  sm:gap-2 md:gap-5'>
                            <h1 className='sm:text-[30px] md:text-[30px] lg:text-[40px] font-semibold font-playfair'>Quality Products Bakery Items</h1>
                            <div>
                                <button className='bg-pink animated-button font-playfair hover:animate-fade-slide-up transition-colors duration-300 px-6 py-2 lg:px-8 lg:py-4 rounded-2xl text-white font-semibold'>
                                    <span>SHOP NOW</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <Slider {...settings}>
                        {images.map((src, index) => (
                            <div key={index} className="flex justify-center">
                                <img src={src} alt={`Banner ${index + 1}`} className="bounce sm:w-[90%] lg:w-full h-auto" />
                            </div>
                        ))}
                    </Slider>
                </div>
                <img src="/images/icons/miniCake1.webp" alt="" className='absolute sm:top-[35%] lg:top-[25%] left-[10%]   sm:w-[7%] md:w-[8%] lg:w-[8%] h-auto' />
                <img src="/images/icons/miniCake2.webp" alt="" className='absolute sm:top-[22%] lg:top-[20%] left-[42%]   sm:w-[7%] md:w-[8%] lg:w-[8%] h-auto' />
                <img src="/images/icons/miniCake3.webp" alt="" className='absolute sm:top-[35%] lg:top-[25%] right-[4%]   sm:w-[7%] md:w-[8%] lg:w-[8%] h-auto' />
                <img src="/images/icons/miniCake4.webp" alt="" className='absolute bottom-[10%] left-[3%]  sm:w-[7%] md:w-[8%] lg:w-[8%] h-auto' />
                <img src="/images/icons/miniCake5.webp" alt="" className='absolute bottom-[10%] right-[3%] sm:w-[7%] md:w-[8%] lg:w-[8%] h-auto' />
            </div> */}
            <div className="relative w-full h-[100vh] mb-[70px]">
                <Slider {...settings} className="h-full">

                    {/* Slide 1 */}
                    <div className="relative w-full h-screen">
                        <img src="public/images/image/banner4.jpg" alt="banner1" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/50"></div>
                        <div className="absolute inset-0 flex items-center justify-start px-12 text-white">
                            <div className="max-w-[600px]">
                                <h1 className="text-3xl md:text-5xl font-bold mb-4 font-playfair">Savor the Freshness of Every Bite</h1>
                                <p className="text-lg md:text-xl">From golden croissants to warm sourdough, our artisanal breads are baked fresh daily with love and the finest ingredients.</p>
                            </div>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="relative w-full h-screen">
                        <img src="public/images/image/banner2.jpg" alt="Elegant Interior" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/50"></div>
                        <div className="absolute inset-0 flex items-center justify-center text-white text-center">
                            <div className="max-w-[600px]">
                                <h1 className="text-3xl md:text-5xl font-bold mb-4font-playfair">Indulge in Our Heavenly Pastries</h1>
                                <p className="text-lg md:text-xl">Delight in the rich flavors of our handcrafted cakes, cookies, and pastries—made to make every moment sweeter.</p>
                                <button className="mt-4 px-6 py-3 bg-primary text-white rounded-md">Learn More</button>
                            </div>
                        </div>
                    </div>

                    {/* Slide 3 */}
                    <div className="relative w-full h-screen">
                        <img src="public/images/image/banner3.jpg" alt="Dream House" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/50"></div>
                        <div className="absolute inset-0 flex flex-col items-end justify-center text-white text-right px-12">
                            <div className="max-w-[600px]">
                                <h1 className="text-3xl md:text-5xl font-bold mb-4 font-playfair">Celebrate with a Touch of Sweetness</h1>
                                <p className="text-lg md:text-xl">From birthdays to weddings, our custom-designed cakes bring your sweetest dreams to life. Order your perfect cake today!</p>
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>
            {/* <Category/> */}
            <Category category={category} />
            {/* <Sale /> */}
            {/* <Products /> */}
            <TopSale />
            <BestSeller products={products} />
            <div className="px-32 py-16">
                <Partners />
            </div>
        </>
    )
}

export default Home
