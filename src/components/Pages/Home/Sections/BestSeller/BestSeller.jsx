import React, { useState } from "react";
import Slider from "react-slick";
import SvgIcon from "../../../../../../public/images/Svgicon";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useLocation, useParams } from "react-router-dom";
import { useCart } from "../../../../Services/Context/CartContext";


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



function BestSeller({  }) {
    
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
                breakpoint: 1400, // Below 1400px
                settings: { slidesToShow: 3, slidesToScroll: 1 },
            },
            {
                breakpoint: 1900, // Between 1400px and 1900px
                settings: { slidesToShow: 4, slidesToScroll: 1 },
            },
            {
                breakpoint: 1050, // Below 1050px
                settings: { slidesToShow: 2, slidesToScroll: 1 },
            },
            {
                breakpoint: 768, // Below 768px
                settings: { slidesToShow: 1, slidesToScroll: 1 },
            },
        ],

    };

    const products = [
        {
          "_id": "679f49481becd405a4b1e7f5",
          "name": "Burger",
          "description": "A juicy beef patty with fresh lettuce, tomato, and cheese in a toasted bun.",
          "price": 700,
          "category": "Fast Food",
          "stock": 25,
          "bestSeller": true,
          "image": "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg"
        },
        {
          "_id": "679f49481becd405a4b1e7f6",
          "name": "Pizza",
          "description": "Cheesy and delicious with a crispy crust and fresh toppings.",
          "price": 1200,
          "category": "Fast Food",
          "stock": 15,
          "bestSeller": true,
          "image": "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg"
        },
        {
          "_id": "679f49481becd405a4b1e7f7",
          "name": "Pasta",
          "description": "Creamy Alfredo pasta topped with parmesan cheese and fresh herbs.",
          "price": 900,
          "category": "Italian",
          "stock": 20,
          "bestSeller": false,
          "image": "https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg"
        },
        {
          "_id": "679f49481becd405a4b1e7f8",
          "name": "Fried Chicken",
          "description": "Crispy golden fried chicken served with a side of fries.",
          "price": 850,
          "category": "Fast Food",
          "stock": 18,
          "bestSeller": true,
          "image": "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg"
        },
        {
          "_id": "679f49481becd405a4b1e802",
          "name": "Cheesecake",
          "description": "A creamy and smooth cheesecake with a buttery graham cracker crust.",
          "price": 1300,
          "category": "Cake",
          "stock": 18,
          "bestSeller": false,
          "image": "https://images.pexels.com/photos/3026801/pexels-photo-3026801.jpeg"
        },
        {
          "_id": "679f49481becd405a4b1e803",
          "name": "Brownie",
          "description": "A rich and fudgy chocolate brownie, topped with nuts and chocolate drizzle.",
          "price": 500,
          "category": "Dessert",
          "stock": 30,
          "bestSeller": true,
          "image": "https://images.pexels.com/photos/4110006/pexels-photo-4110006.jpeg"
        },
        {
          "_id": "679f49481becd405a4b1e804",
          "name": "Tiramisu",
          "description": "Classic Italian dessert with layers of mascarpone, coffee, and cocoa.",
          "price": 1400,
          "category": "Dessert",
          "stock": 10,
          "bestSeller": true,
          "image": "https://images.pexels.com/photos/4110095/pexels-photo-4110095.jpeg"
        },
        {
          "_id": "679f49481becd405a4b1e805",
          "name": "Donut",
          "description": "Soft and fluffy donut with a sweet glazed topping.",
          "price": 300,
          "category": "Dessert",
          "stock": 40,
          "bestSeller": false,
          "image": "https://images.pexels.com/photos/413988/pexels-photo-413988.jpeg"
        },
        {
          "_id": "679f49481becd405a4b1e806",
          "name": "Steak",
          "description": "Perfectly grilled steak served with mashed potatoes and vegetables.",
          "price": 2500,
          "category": "Main Course",
          "stock": 12,
          "bestSeller": true,
          "image": "https://images.pexels.com/photos/3611849/pexels-photo-3611849.jpeg"
        },
        {
          "_id": "679f49481becd405a4b1e807",
          "name": "French Fries",
          "description": "Crispy and golden fries with a side of ketchup.",
          "price": 450,
          "category": "Fast Food",
          "stock": 50,
          "bestSeller": true,
          "image": "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg"
        }
      ]

    const { dispatch } = useCart();
    const [isOrdering, setIsOrdering] = useState(null);
    const [selProduct, setSelProduct] = useState()
    const [count, setCount] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [addedProduct, setAddedProduct] = useState(null);


    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => Math.max(prev - 1, 1));

    const handleAddToCart = (product) => {
        if (!product) return; // Prevent adding undefined product

        const cartItem = {
            id: product._id, // Ensure id is correct (check if your reducer expects _id or id)
            name: product.name,
            price: product.price,
            quantity: count,
            image: product.productImages?.[0] || "", // Default image fallback
        };

        console.log("Adding to cart:", cartItem);
        dispatch({ type: "ADD_TO_CART", payload: cartItem });
        setAddedProduct(cartItem);
        setIsModalOpen(true);
        setCount(1)
    };
    return (
        <div className="mx-12 lg:mx-20 px-0 py-10 relative">
            <div className="flex flex-col text-center gap-2 mb-4">
                <h2 className="text-center text-4xl font-bold text-gray-700 font-playfair">
                    Best Seller
                </h2>
                <p className="px-[20%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus tenetur libero repudiandae sed porro mollitia molestias, iusto quo voluptates culpa?</p>
            </div>
            <Slider {...settings}>
                {products.map((product, key) => (
                    <div key={key} className="p-4 h-full">
                        <div className="relative bg-white border border-gray-200 sm:w-[280px] md:w-[300px] lg:w-[300px] mx-auto rounded-3xl group overflow-hidden shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300">
                            {/* Image Section */}
                            <div className="flex items-center justify-center mx-auto w-full h-[240px] pt-3 overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-[90%] h-full object-cover rounded-xl"
                                />
                                {/* Tag */}
                                <div className={`absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md`}>
                                    Best Seller
                                </div>
                            </div>
                            {/* Content Section */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                                    {product.description.split(" ").slice(0, 10).join(" ")}
                                    {product.description.split(" ").length > 10 ? "..." : ""}
                                </p>
                            </div>
                            {/* Price and Button Section */}
                            {isOrdering === product._id ? (
                                <div className="p-4 bg-pink-200 bg-opacity-20 backdrop-blur-md border border-pink-200 flex items-center justify-between rounded-b-3xl shadow-lg">
                                    <div className="flex items-center gap-2 px-3 bg-blue text-white rounded">
                                        <button onClick={decrement} className="p-1">-</button>
                                        <span className="text-lg font-semibold">{count}</span>
                                        <button onClick={increment} className="p-1">+</button>
                                    </div>
                                    <button
                                        className="bg-[#fc7c7c] text-sm font-semibold text-white hover:text-pink hover:bg-transparent border-2 border-pink px-5 py-1 rounded-full  transition-colors duration-300"
                                        onClick={() => handleAddToCart(selProduct)}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            ) : (
                                <div className="p-4 bg-pink-200 bg-opacity-20 backdrop-blur-md border border-pink-200 flex items-center justify-between rounded-b-3xl shadow-lg">
                                    <h3 className="text-lg font-bold text-gray-800">
                                        <span className="text-sm font-medium text-gray-500">from </span>Rs: {product.price}
                                    </h3> 
                                        <button className="bg-[#2b4174] text-sm font-semibold text-white px-5 py-1 rounded-full border-2 border-[#2b4174] hover:border-[#fc7c7c] hover:bg-transparent hover:text-[#2b4174] transition-colors duration-300"
                                        onClick={() => {
                                            setIsOrdering(product._id);
                                            setSelProduct(product);
                                        }}
                                        >
                                            Order Now
                                        </button> 
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default BestSeller;
