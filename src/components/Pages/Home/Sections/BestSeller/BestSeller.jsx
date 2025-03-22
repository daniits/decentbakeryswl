import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import SvgIcon from "../../../../../../public/images/Svgicon";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "react-awesome-modal";
import { useCart } from "../../../../Services/Context/CartContext";
import { useNavigate } from "react-router-dom";

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <button
      onClick={onClick}
      className={`${className} bg-red-500 hover:bg-red-700 text-white w-10 h-10 rounded-full flex mx-[-20px] items-center justify-center absolute top-1/2 transform -translate-y-1/2`}
    >
      <SvgIcon iconName="right-arrow" />
    </button>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <button
      onClick={onClick}
      className={`${className} bg-red-500 hover:bg-red-700 text-white w-10 h-10 rounded-full flex mx-[-20px] items-center justify-center absolute top-1/2 transform -translate-y-1/2`}
    >
      <SvgIcon iconName="right-arrow" className="rotate-180" />
    </button>
  );
}

function BestSeller() {
  // Rename state to "products" to store fetched products
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const { dispatch } = useCart();
  const [isOrdering, setIsOrdering] = useState(null);
  const [selProduct, setSelProduct] = useState(null);
  const [count, setCount] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addedProduct, setAddedProduct] = useState(null);

  // Fetch products from API
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          "http://nodejs-env.eba-hmsmsigv.us-east-1.elasticbeanstalk.com/api/products"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProduct();
  }, []);

  // Filter products where bestSeller is true
  const bestSellers = products.filter((product) => product.bestSeller);

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
        breakpoint: 1400,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 1900,
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

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => Math.max(prev - 1, 1));

  const handleAddToCart = (product) => {
    if (!product) return;
    const cartItem = {
      id: product._id,
      name: product.name,
      price: product.price,
      quantity: count,
      image: product?.image || "",
    };
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
    setAddedProduct(cartItem);
    setIsModalOpen(true);
    setCount(1);
  };

  return (
    <div className="mx-12 lg:mx-20 px-0 py-10 relative">
      {/* Title */}
      <div className="flex flex-col text-center gap-2 mb-4">
        <h2 className="text-center text-4xl font-bold text-gray-700 font-playfair">
          Best Seller
        </h2>
        <p className="px-[20%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          tenetur libero repudiandae sed porro mollitia molestias, iusto quo
          voluptates culpa?
        </p>
      </div>

      {/* Slider with motion for each card */}
      <Slider {...settings}>
        {bestSellers.map((product) => (
          <motion.div
            key={product._id}
            className="p-4 h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative bg-white border border-gray-200 sm:w-[280px] md:w-[300px] lg:w-[300px] mx-auto rounded-3xl group overflow-hidden shadow-md hover:shadow-lg transform transition-all duration-300">
              {/* Image Section */}
              <div className="flex items-center justify-center mx-auto w-full h-[240px] pt-3 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[90%] h-full object-cover rounded-xl"
                />
                <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  Best Seller
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  {product.description.split(" ").slice(0, 10).join(" ")}
                  {product.description.split(" ").length > 10 ? "..." : ""}
                </p>
              </div>

              {/* Price / Order Section */}
              {isOrdering === product._id ? (
                <div className="p-4 bg-pink-200 bg-opacity-20 backdrop-blur-md border border-pink-200 flex items-center justify-between rounded-b-3xl shadow-lg">
                  <div className="flex items-center gap-2 px-3 bg-blue text-white rounded">
                    <button onClick={decrement} className="p-1">
                      -
                    </button>
                    <span className="text-lg font-semibold">{count}</span>
                    <button onClick={increment} className="p-1">
                      +
                    </button>
                  </div>
                  <button
                    className="bg-[#fc7c7c] text-sm font-semibold text-white hover:text-pink hover:bg-transparent border-2 border-pink px-5 py-1 rounded-full transition-colors duration-300"
                    onClick={() => handleAddToCart(selProduct)}
                  >
                    Add to Cart
                  </button>
                </div>
              ) : (
                <div className="p-4 bg-pink-200 bg-opacity-20 backdrop-blur-md border border-pink-200 flex items-center justify-between rounded-b-3xl shadow-lg">
                  <h3 className="text-lg font-bold text-gray-800">
                    <span className="text-sm font-medium text-gray-500">
                      from{" "}
                    </span>
                    Rs: {product.price}
                  </h3>
                  <button
                    className="bg-[#2b4174] text-sm font-semibold text-white px-5 py-1 rounded-full border-2 border-[#2b4174] hover:border-[#fc7c7c] hover:bg-transparent hover:text-[#2b4174] transition-colors duration-300"
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
          </motion.div>
        ))}
      </Slider>
      <Modal
        visible={isModalOpen}
        effect="fadeInUp"
        onClickAway={() => setIsModalOpen(false)}
        className="rounded-xl p-0"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="p-8 rounded-xl shadow-lg bg-white text-center"
        >
          {addedProduct && (
            <>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {addedProduct.name} added to cart!
              </h3>
              <p className="text-gray-600 mb-6">
                Quantity: {addedProduct.quantity}
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2 bg-gray-200 text-gray-800 font-semibold rounded-full hover:bg-gray-300 transition-all"
                >
                  Continue Shopping
                </button>
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    navigate("/cart");
                  }}
                  className="px-6 py-2 bg-blue text-white font-semibold rounded-full hover:bg-blue-600 transition-all"
                >
                  Go to Cart
                </button>
              </div>
            </>
          )}
        </motion.div>
      </Modal>
    </div>
  );
}

export default BestSeller;
