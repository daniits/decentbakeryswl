import React from "react";
import Slider from "react-slick";
import SvgIcon from "../../../../../../public/images/Svgicon";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useLocation, useParams } from "react-router-dom";
import { bestSellerProducts } from "../../../../Services/data/data";
 

function NextArrow(props) {
    const { className, onClick } = props;
    return (
        <button
            onClick={onClick}
            className={`${className} bg-red-500 hover:bg-red-700 text-white w-10 h-10 rounded-full flex mx-[-20px] items-center justify-center absolute top-1/2  transform -translate-y-1/2`}
        >
            {/* Add an SVG or text inside the button */}
            <SvgIcon iconName="right-arrow" />
        </button>
    );
}



function PrevArrow(props) {
    const { className, onClick } = props;
    return (
        <button
            onClick={onClick}
            className={`${className} bg-red-500 hover:bg-red-700 text-white w-10 h-10 rounded-full flex mx-[-20px] items-center justify-center absolute top-1/2  transform -translate-y-1/2`}
        >
            {/* Add an SVG or text inside the button */}
            <SvgIcon iconName="right-arrow" className="rotate-180" />
        </button>
    );
}



function BestSeller() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: { slidesToShow: 4, slidesToScroll: 1 },
            },
            {
                breakpoint: 1050,
                settings: { slidesToShow: 2, slidesToScroll: 1 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1, slidesToScroll: 1 },
            },
        ],
    };
    
    const { productId } = useParams();

    return (
        <div className="mx-12 lg:mx-20 px-0 py-10 relative">
            <div className="flex flex-col text-center gap-2 mb-4">
                <h2 className="text-center text-4xl font-bold text-gray-700 font-playfair">
                    {productId ? "Related Products" : "Best Seller" }
                </h2>
                <p className="px-[20%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus tenetur libero repudiandae sed porro mollitia molestias, iusto quo voluptates culpa?</p>
            </div>
            <Slider {...settings}>
                {bestSellerProducts.map((product, key) => (
                    <div key={key} className="p-4 h-full">
                    <div className="relative bg-white border border-gray-200 sm:w-[280px] md:w-[300px] lg:w-[300px] mx-auto rounded-3xl group overflow-hidden shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300">
                        {/* Image Section */}
                        <div className="flex items-center justify-center mx-auto w-full h-[240px]  overflow-hidden">
                            <img
                                src={product.img}
                                alt={product.name}
                                className="w-[90%] h-full object-cover group-hover:pop-up3"
                            />
                            {/* Tag */}
                            <div className={`${productId ? "hidden" : "block" } absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md`}>
                                Best Seller
                            </div>
                        </div>
                        {/* Content Section */}
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                            <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                                {product.details}
                            </p>
                        </div>
                        {/* Price and Button Section */}
                        <div className="p-4 bg-pink-200 bg-opacity-20 backdrop-blur-md border border-pink-200 flex items-center justify-between rounded-b-3xl shadow-lg">
                            <h3 className="text-lg font-bold text-gray-800">
                                <span className="text-sm font-medium text-gray-500">from</span> {product.price}
                            </h3>
                            <Link to={`/product/${product.id}`}>
                            <button className="bg-[#2b4174] text-sm font-semibold text-white px-5 py-1 rounded-full border-2 border-[#2b4174] hover:border-[#fc7c7c] hover:bg-transparent hover:text-[#2b4174] transition-colors duration-300">
                                Order Now
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
                ))}
            </Slider>
        </div>
    );
}

export default BestSeller;
