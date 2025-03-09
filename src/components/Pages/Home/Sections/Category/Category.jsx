import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SvgIcon from "../../../../../../public/images/Svgicon";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="text-white w-6 h-6 rounded-full flex items-center justify-center absolute top-1/2 right-[-20px] transform -translate-y-1/2 z-10"
    >
      <SvgIcon iconName="right-arrow" />
    </button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="text-white w-6 h-6 rounded-full flex items-center justify-center absolute top-1/2 left-[-20px] transform -translate-y-1/2 z-10"
    >
      <SvgIcon iconName="right-arrow" className="rotate-180" />
    </button>
  );
}

const Category = ({ category }) => {
  const navigate = useNavigate();
  const handleCategoryClick = (item) => {
    localStorage.setItem("selectedCategory", JSON.stringify(item));
    navigate("/shop");
  };

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
        breakpoint: 968,
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
    <div className="mx-0 md:mx-10 relative">
      <Slider {...settings}>
        {category?.map((item, index) => (
          <motion.div
            key={index}
            className="p-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="bg-white h-[264px] w-full max-w-[326px] mx-auto rounded-xl shadow-lg py-5 flex flex-col items-center gap-4 overflow-hidden cursor-pointer"
              onClick={() => handleCategoryClick(item)}
            >
              {item.categoryImage && (
                <div className="w-full h-[181px] px-2 overflow-hidden">
                  <img
                    src={item.categoryImage}
                    alt={item.category || "Category Image"}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                  />
                </div>
              )}
              <h3 className="text-lg font-bold text-gray-800 font-playfair">
                {item.category}
              </h3>
            </div>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

export default Category;
