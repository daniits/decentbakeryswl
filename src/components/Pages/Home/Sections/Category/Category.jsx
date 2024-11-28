import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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



const Category = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className=" mx-auto px-16 py-10">
      <Slider {...settings}>
        {category.map((item, index) => (
          <div key={index} className="p-2">
            <div className="bg-white rounded-xl shadow-lg py-5 flex flex-col items-center gap-4">
              <img
                src={item.img}
                alt={item.name}
                className="w-[90%] h-auto object-cover rounded-xl img-hover"
              />
                <h3 className="text-lg font-bold text-gray-800 font-playfair">{item.name}</h3>
              
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Category;
