import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SvgIcon from "../../../../../../public/images/Svgicon"; 
import ShopContext from "../../../../Services/Context/Shop/ShopContext";

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

// const NextArrow = ({ onClick }) => {
//   return (
//     <div
//       className="cursor-pointer text-gray-800 z-10 absolute top-1/2 right-4 transform -translate-y-1/2 rounded-full bg-[#2b4174] hover:bg-[#fc7c7c] transition-colors duration-300 ease-in-out p-2"
//       onClick={onClick}
//     >
//       <SvgIcon iconName="right-arrow" className="w-[20px] h-auto" />
//     </div>
//   );
// };

// const PrevArrow = ({ onClick }) => {
//   return (
//     <div
//       className="cursor-pointer text-gray-800 z-10 absolute top-1/2 left-4 transform -translate-y-1/2"
//       onClick={onClick}
//     >
//       <SvgIcon iconName="right-arrow" className="w-[30px] h-auto rotate-180" />
//     </div>
//   );
// };
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

const Category = ({ category, handleCategoryClick }) => {
  console.log(category)

  // console.log(category)

  // const { setSelectedCategory, selectedCategory } = useContext(ShopContext);
  // const { setSelectedCategory: contextSelectedCategory, selectedCategory: contextCategory } = useContext(ShopContext);
  // console.log(selectedCategory);
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
    <div className=" mx-20 px-0 py-0  relative ">
      {/* Slider container with relative positioning */}
      <Slider {...settings}>
        {category?.map((item, index) => (
          <div key={index} className="p-2">
            <div className="bg-white rounded-xl shadow-lg py-5 flex flex-col items-center gap-4">
              {/* Ensure item has an image property before using it */}
              {item.img && (
                <img
                  src={item.img}
                  alt={item.name || 'Category Image'}
                  className="w-[90%] h-auto object-cover rounded-xl pop-up"
                />
              )}
              <h3
                className="text-lg font-bold text-gray-800 font-playfair cursor-pointer"
                // onClick={() => setSelectedCategory(item)}
              >
                {item.name || item}
              </h3>

            </div>
          </div>
        ))}

      </Slider>
    </div>
  );
};

export default Category;
