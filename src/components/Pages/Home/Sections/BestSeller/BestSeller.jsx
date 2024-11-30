import React from "react";
import Slider from "react-slick";
import SvgIcon from "../../../../../../public/images/Svgicon";

// function NextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={`${className} mx-[-20px]`}
//             style={{ ...style, display: "block", background: "red" }}
//             onClick={onClick}
//         />
//     );
// }

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
            className={`${className}   text-white w-10 h-10 rounded-full flex mx-[-20px] items-center justify-center absolute top-1/2  transform -translate-y-1/2`}
        >
            <SvgIcon iconName="right-arrow" className="rotate-180 bg-[#2b4174] hover:bg-[#fc7c7c] rounded-full  w-auto h-[20px]" />
        </button>
    );
}

const products = [
    {
        img: "/images/image/product1.png",
        name: "Product 1",
        details: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
        price: "$13.99",
    },
    {
        img: "/images/image/product2.png",
        name: "Product 2",
        details: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
        price: "$15.99",
    },
    {
        img: "/images/image/product3.png",
        name: "Product 3",
        details: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
        price: "$12.99",
    },
    {
        img: "/images/image/product4.png",
        name: "Product 4",
        details:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
        price: "$19.99",
    },
    {
        img: "/images/image/product5.png",
        name: "Product 5",
        details:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
        price: "$9.99",
    },
    {
        img: "/images/image/product1.png",
        name: "Product 6",
        details: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
        price: "$17.99",
    },
    {
        img: "/images/image/product2.png",
        name: "Product 7",
        details: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
        price: "$14.99",
    },
    {
        img: "/images/image/product3.png",
        name: "Product 8",
        details: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
        price: "$16.99",
    },
];

function BestSeller() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <div className="mx-20 px-0 py-10 relative">
            <div className="flex flex-col text-center gap-2 mb-4">
                <h2 className="text-center text-2xl font-bold text-gray-700 ">
                    Best Seller
                </h2>
                <p className="px-[20%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus tenetur libero repudiandae sed porro mollitia molestias, iusto quo voluptates culpa?</p>
            </div>
            <Slider {...settings}>
                {products.map((product, key) => (
                    <div key={key} className="p-4 h-full">
                    <div className="relative bg-white border border-gray-200 w-[360px] mx-auto rounded-3xl group overflow-hidden shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300">
                        {/* Image Section */}
                        <div className="flex items-center justify-center mx-auto w-full h-[240px]  overflow-hidden">
                            <img
                                src={product.img}
                                alt={product.name}
                                className="w-[90%] h-full object-cover group-hover:pop-up3   "
                            />
                            {/* Tag */}
                            <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
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
                            <button className="bg-[#2b4174] text-sm font-semibold text-white px-5 py-1 rounded-full border-2 border-[#2b4174] hover:border-[#fc7c7c] hover:bg-transparent hover:text-[#2b4174] transition-colors duration-300">
                                Order Now
                            </button>
                        </div>
                    </div>
                </div>
                
                ))}
            </Slider>
        </div>
    );
}

export default BestSeller;
