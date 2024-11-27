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
];



const Category = () => {
  const settings = {
    dots: false, 
    infinite: true,
    speed: 500, 
    slidesToShow: 2, 
    slidesToScroll: 1, 
    arrows: true,
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <Slider {...settings}>
        {category.map((item, index) => (
          <div key={index} className="p-4">
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center gap-4">
              <img
                src={item.img}
                alt={item.name}
                className="w-[150px] h-[150px] object-cover rounded-md"
              />
              <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-600 text-center">{item.about}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Category;
