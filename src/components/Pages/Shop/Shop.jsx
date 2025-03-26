import React, { useEffect, useState } from "react";
import Header from "../../Shared/Header/Header";
import SvgIcon from "../../../../public/images/Svgicon";
import GridProducts from "./Sections/Products/GridProducts";
// import { decentBakery } from "../../Services/data/data";
import { motion, AnimatePresence } from "framer-motion";



const Shop = () => {
  const [decentBakery, setDecentBakery] = useState([])
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
        setDecentBakery(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProduct();
  }, []);

  function getCategoryCounts(data) {
    const categoryCounts = data.reduce((acc, product) => {
      const category = product.category || "Uncategorized";
      if (!acc[category]) {
        acc[category] = 0;
      }
      acc[category]++;
      return acc;
    }, {});
  
    const categoryArray = Object.entries(categoryCounts).map(([name, amount]) => ({
      name,
      amount,
    }));
  
    const totalProducts = data.length;
    categoryArray.unshift({ name: "ALL", amount: totalProducts });
  
    return categoryArray;
  }
  

  const products = decentBakery; 
console.log("oldData",decentBakery)
  const category = getCategoryCounts(decentBakery);

  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedCategory = localStorage.getItem("selectedCategory");
    if (savedCategory) {
      try {
        const parsedCategory = JSON.parse(savedCategory);
        if (parsedCategory && parsedCategory.category) {
          setSelectedCategory(parsedCategory.category);
        } else {
          setSelectedCategory(savedCategory);
        }
      } catch (error) {
        setSelectedCategory(savedCategory);
      }
    }
  }, []);

  useEffect(() => {
  let filteredProducts = selectedCategory === "ALL" 
    ? products 
    : products.filter((product) => product.category === selectedCategory);

  if (searchQuery.trim() !== "") {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  setCategoryProducts(filteredProducts);
}, [selectedCategory, products, searchQuery]);

  

  const handleCategoryClick = (categoryName) => {
    console.log("User clicked category:", categoryName);
    setSelectedCategory(categoryName);
    if (categoryName === "ALL") {
      localStorage.setItem("selectedCategory", JSON.stringify(categoryName));
    } else {
      const categoryObj = decentBakery.find((cat) => cat.category === categoryName);
      localStorage.setItem("selectedCategory", JSON.stringify(categoryObj));
    }
  };

  return (
    <>
      <Header pageName="Shop" path="shop" />

      <div className="flex lg:flex-row justify-center sm:flex-col-reverse gap-5 sm:px-5 md:px-10 lg:px-32 py-20">
        <div className="w-[20%] flex flex-col gap-4">
          <h3 className="text-2xl font-bold">CATEGORY</h3>
          <div className="flex flex-col">
            <AnimatePresence>
              {category.map((item) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  onClick={() => handleCategoryClick(item.name)}
                  className={`flex justify-between items-center group text-gray-800 hover:text-pink py-1 ${
                    selectedCategory === item.name ? "text-pink font-bold" : ""
                  }`}
                >
                  <span>{item.name}</span>
                  <span
                    className={`text-gray-800 py-1 group-hover:text-pink ${
                      selectedCategory === item.name
                        ? "text-pink font-bold"
                        : ""
                    }`}
                  >
                    ({item.amount})
                  </span>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="w-[80%]">
          <div className="flex items-center border-2 border-blue rounded-full px-3 py-2 w-64 mb-4">
            <SvgIcon iconName="searchBlue" className="w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search products"
              onChange={(e) => setSearchQuery(e.target.value)}
              className="ml-2 w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
            />
          </div>
          <GridProducts products={categoryProducts} loading={loading} />
        </div>
      </div>
    </>
  );
};

export default Shop;
