import React, { useContext, useEffect, useState } from "react";
import Header from "../../Shared/Header/Header";
import SvgIcon from "../../../../public/images/Svgicon";
import GridProducts from "./Sections/Products/GridProducts";
import ListProduct from "./Sections/Products/ListProduct";
import axios from "axios";
import Category from "../Home/Sections/Category/Category";
import ShopContext from "../../Services/Context/Shop/ShopContext";

const Shop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [view, setView] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [products, setProducts] = useState(
    [
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
    
    
    

  );
  console.log("Products", products)
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const BackendURL = import.meta.env.VITE_BACKEND_URL;

  // useEffect(() => {
  //   const getProducts = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await axios.get(`${BackendURL}/getAllProducts`);
  //       const products = response.data.products;
  //       setProducts(products);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error(error.message);
  //     }
  //   };

  //   getProducts();
  // }, []);

  // Filter products when selection changes
  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      let filteredProducts = [...products];

      if (selectedCategory !== "ALL") {
        filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
      }

      // **Check if searchQuery exists & filter correctly**
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        filteredProducts = filteredProducts.filter((product) =>
          product.name?.toLowerCase().includes(query)
        );
      }

      if (selectedValue === "Best Sellers") {
        filteredProducts = filteredProducts.filter(product => product.bestSeller === true);
      }

      if (selectedValue === "Price: Low to High") {
        filteredProducts.sort((a, b) => a.price - b.price);
      } else if (selectedValue === "Price: High to Low") {
        filteredProducts.sort((a, b) => b.price - a.price);
      }

      setCategoryProducts(filteredProducts);
      setLoading(false);
    }, 300);
  }, [selectedCategory, searchQuery, selectedValue, products]);


  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const options = ["Price: Low to High", "Price: High to Low", "Best Sellers"];

  const getCategoryCounts = (products) => {
    const categoryCounts = {};

    products.forEach((product) => {
      categoryCounts[product.category] = (categoryCounts[product.category] || 0) + 1;
    });

    return [{ name: "ALL", amount: products.length }, ...Object.entries(categoryCounts).map(([name, amount]) => ({ name, amount }))];
  };

  const category = getCategoryCounts(products);

  return (
    <>
      <Header pageName="Shop" path="shop" />
      <div className="flex lg:flex-row justify-center sm:flex-col-reverse gap-5 sm:px-5 md:px-10 lg:px-32 py-20">
        <div className="flex">
          <div className="w-[20%] flex flex-col gap-4">
            <h3 className="text-2xl font-bold">CATEGORY</h3>
            <div className="flex flex-col">
              {category.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleCategoryClick(item.name)}
                  className={`flex justify-between items-center group text-gray-800 hover:text-pink py-1 ${selectedCategory === item.name ? "text-pink font-bold" : ""}`}
                >
                  <span>{item.name}</span>
                  <span className={`text-gray-800 hover:text-pink py-1 group-hover:text-pink ${selectedCategory === item.name ? "text-pink font-bold" : ""}`}>
                    ({item.amount})
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="w-[80%]">
            <div className="flex sm:flex-col lg:flex-row sm:gap-5 items-center justify-between">
              <div className="flex items-center border-2 border-blue rounded-full px-3 py-2 w-64">
                <SvgIcon iconName="searchBlue" className="w-5 h-5 text-gray-500" />

                <input
                  type="text"
                  placeholder="Search products"
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="ml-2 w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
                />
              </div>


              <div className="flex sm:flex-col lg:flex-row items-center gap-2">
                {/* <div className="relative  border-2 border-blue hover:border-pink  rounded-full">
                  <button className="w-full text-pink p-2 rounded-lg focus:outline-none" onClick={() => setIsOpen((prev) => !prev)}>
                    <SvgIcon iconName="filter" className="w-5 h-5" />
                  </button>

                  {isOpen && (
                    <ul className="absolute z-10 w-56 right-0 mt-2 bg-white rounded-lg shadow-md border border-gray-200">
                      {options.map((option, index) => (
                        <li key={index} className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-gray-800"
                          onClick={() => {
                            setSelectedValue(option);
                            setIsOpen((prev) => !prev)
                          }
                          }>
                          {option}
                        </li>
                      ))}
                    </ul>
                  )}
                </div> */}

                <div className="flex items-center gap-4">
                  <div
                    className={`flex items-center justify-center border-2 border-blue hover:border-pink rounded-full w-10 h-10 `}
                    onClick={() => setView(view === "grid" ? "grid" : "grid")} // Toggle between grid and list view
                  >
                    <SvgIcon iconName={view === "grid" ? "list" : "grid"} className="w-7 h-7" />
                  </div>
                </div>

              </div>
            </div>
            <div>
              {view === "grid" ? <GridProducts products={categoryProducts} loading={loading} /> : <ListProduct products={categoryProducts} loading={loading} />}
            </div>
          </div>
        </div> 
      </div>
    </>
  );
};

export default Shop;
