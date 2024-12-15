import React, { useState } from 'react'
import SvgIcon from '../../../../../public/images/Svgicon';

const Order = ({ product }) => {

  const [count, setCount] = useState(1);
  const [topPic, setTopPic] = useState(product.productImages?.[0])

    const increment = () => setCount(prevCount => prevCount + 1);
    const decrement = () => setCount(prevCount => Math.max(prevCount - 1, 0));
  return (
    <div className="py-20">
                <div className=" flex justify-center gap-5">
                    <div className="flex bg-white gap-2 lg:w-[40%] lg:max-w-[400px] h-full">
                        {/* Main Image Section */}
                        <div className="flex items-center justify-center border-2 border-gray-300 w-full h-full">
                            <img
                                src={topPic}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Thumbnails Section */}
                        <div className="flex flex-col gap-2 mt-4 !h-[70%] max-h-[300px] self-center overflow-y-auto no-scrollbar">
                            {product.productImages.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={product.name}
                                    className="w-16 h-16 object-cover cursor-pointer border-2"
                                    onClick={() => setTopPic(img)}
                                />
                            ))}
                        </div>
                    </div>



                    {/* Details Section */}
                    <div className="flex flex-col gap-10 w-full h-full  lg:w-[40%] bg-white items-start">
                        <div className="flex flex-col justify-center gap-3">
                            <h1 className="sm:text-lg lg:text-3xl font-bold text-gray-700 text-center lg:text-left">
                                {product.name}
                            </h1>
                            <h3 className="sm:text-lg lg:text-2xl font-bold">
                                {product.price}
                            </h3>
                            <h6>****** (5 reviews)</h6>
                        </div>
                        <p>{product.details}</p>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-5 px-2 bg-blue text-white rounded">
                                <button
                                    className="p-0 "
                                    onClick={decrement}
                                    aria-label="Decrease count"
                                >
                                    -
                                </button>
                                <h3 className="text-lg font-semibold">{count}</h3>
                                <button
                                    className="p-0  "
                                    onClick={increment}
                                    aria-label="Increase count"
                                >
                                    +
                                </button>
                            </div>
                            <button className="bg-blue hover:bg-pink text-white py-3 px-6 rounded-full font-semibold transition">ADD TO CART</button>
                            <button className="bg-blue hover:bg-pink p-4 rounded-full transition">
                                <SvgIcon iconName="heartWhite" className="w-5 h-auto cursor-pointer" />
                            </button>
                            <button className="bg-blue hover:bg-pink p-4 rounded-full transition">
                                <SvgIcon iconName="searchWhite" className="w-5 h-auto cursor-pointer" />
                            </button>
                        </div>


                    </div>
                </div>
            </div>
  )
}

export default Order
