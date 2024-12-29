import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const SidePanel = () => {

    const [selectedSizes, setSelectedSizes] = useState([]);
    const [amount, setAmount] = useState(50);
    const [selectedCategory, setSelectedCategory] = useState('ALL');

    const sizes = ["All", "Small", "Medium", "Large"];

    const handleCheckboxChange = (size) => {
        if (size === "All") {
            setSelectedSizes(selectedSizes.includes("All") ? [] : ["All"]);
        } else {
            setSelectedSizes((prev) =>
                prev.includes(size)
                    ? prev.filter((s) => s !== size)
                    : [...prev.filter((s) => s !== "All"), size]
            );
        }
    };

    const handleSliderChange = (event) => {
        setAmount(event.target.value);
    };

    const category = [
        { name: "ALL", amount: 120 },
        { name: "Cookies", amount: 35 },
        { name: "Desserts", amount: 50 },
        { name: "Muffins", amount: 28 },
        { name: "Pizza", amount: 12 },
        { name: "Doughnuts", amount: 40 },
        { name: "Danish", amount: 15 },
    ]
    const handleCategoryClick = (categoryName) => {
        setSelectedCategory(categoryName);
    };

    const tags = [
        "Donuts",
        "Cakes",
        "Cookies",
        "Desserts",
        "Muffins",
        "Doughnuts",
        "Pastry",
    ]
    return (
        <div className="flex flex-col gap-5">
            <div className=" lg:w-64 bg-gray-100 p-4 rounded-sm shadow">
                {/* Filter Section */}
                <div className="mb-6">
                <h3 className="text-2xl font-bold mb-5">Filters</h3>

                    {/* Size Filters */}
                    <div className="mb-4">
                        <h3 className="text-sm font-medium text-gray-700 mb-2">Sizes</h3>
                        {sizes.map((size) => (
                            <label key={size} className="flex items-center gap-2 mb-2">
                                <input
                                    type="checkbox"
                                    className="form-checkbox text-pink"
                                    checked={selectedSizes.includes(size)}
                                    onChange={() => handleCheckboxChange(size)}
                                />
                                <span className="text-gray-800">{size}</span>
                            </label>
                        ))}
                    </div>

                    {/* Amount Slider */}
                    <div>
                        <h3 className="text-sm font-medium text-gray-700 mb-2">Amount</h3>
                        <div className="flex items-center gap-4">
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={amount}
                                onChange={handleSliderChange}
                                className="w-full accent-pink"
                            />
                            <span className="text-gray-800 font-medium">${amount}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex  flex-col gap-4">
                <h3 className="text-2xl font-bold">CATEGORY</h3>
                <div className="flex flex-col">
                    {category.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => handleCategoryClick(item.name)}
                            className={`flex justify-between items-center group text-gray-800 hover:text-pink py-1 ${selectedCategory === item.name ? "text-pink font-bold" : ""
                                }`}
                        >
                            <span>{item.name}</span>
                            <span className={`text-gray-800 hover:text-pink py-1 group-hover:text-pink ${selectedCategory === item.name ? "text-pink font-bold" : ""}`}>({item.amount})</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex flex-col items-center bg-gray-200 ">
                <div className="p-5 flex flex-col items-center">
                    <h3 className="text-xl font-semibold"><span className="text-pink italic">70%</span> Sale Off</h3>
                    <h3 className="text-4xl text-center font-playfair">Best Quality Products</h3>
                    <button className='bg-pink animated-button font-playfair hover:animate-fade-slide-up transition-colors duration-300 px-3 py-1 lg:px-4 lg:py-3 rounded-2xl text-white font-semibold'>
                        <span>SHOP NOW</span>
                    </button>
                </div>
                <img src="/images/image/cropBanner1.jpg" className='mt-[-50px]' />
            </div>

            <div className='flex flex-col gap-4'>
            <h3 className="text-2xl font-bold">Tags</h3>
            <div className="grid grid-cols-2 gap-3">
                {tags.map((tag, i)=>(
                    <button key={i} className="bg-white text-black hover:text-white hover:bg-pink border-2 border-gray-200 font-semibold rounded-full py-2 px-3">{tag}</button>
                ))}
            </div>
            </div>
        </div>
    )
}

export default SidePanel
