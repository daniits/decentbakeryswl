import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SvgIcon from "../../../../../../public/images/Svgicon";

const category = [
  {
    img: "/images/image/category1.jpg",
    name: "PASTRY",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: "/images/image/category2.jpg",
    name: "BREAD",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: "/images/image/category1.jpg",
    name: "CAKE",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: "/images/image/category2.jpg",
    name: "COOKIES",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: "/images/image/category1.jpg",
    name: "CAKE",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: "/images/image/category2.jpg",
    name: "COOKIES",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: "/images/image/category1.jpg",
    name: "CAKE",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    img: "/images/image/category2.jpg",
    name: "COOKIES",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute flex items-center top-[35%] right-[-57%] transform cursor-pointer text-gray-800 z-10"
      onClick={onClick}
    >
      <SvgIcon iconName="right-arrow" className="w-[3%] h-auto "/>
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 left-2 transform -translate-y-1/2 cursor-pointer text-gray-800 z-10"
      onClick={onClick}
    >
      <SvgIcon iconName="right-arrow" className="w-[10%] h-auto rotate-180"/>
    </div>
  );
};

const Category = () => {
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
        breakpoint: 1024, // Tablets and small laptops
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Mobile devices
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Small screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-auto px-16 py-10">
      <Slider {...settings}>
        {category.map((item, index) => (
          <div key={index} className="p-2">
            <div className="bg-white rounded-xl shadow-lg py-5 flex flex-col items-center gap-4">
              <img
                src={item.img}
                alt={item.name}
                className="w-[90%] h-auto object-cover rounded-xl pop-up"
              />
              <h3 className="text-lg font-bold text-gray-800 font-playfair">
                {item.name}
              </h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Category;
